import vcf
import sys
import json
import re
import httplib
from optparse import OptionParser

def http(method, path, data):
    """ Execute a Generic HTTP Request against ElasticSearch """
 
    conn = httplib.HTTPConnection(HOST)
    conn.request(method, path, data)
    return conn.getresponse()
    
def bulk(data):
	""" Submit Bulk ElasticSearch Request """
	
	resp = http('POST', '/%s/_bulk' % INDEX, data)
	
	# load response and check for errors
	status = json.loads(resp.read())
	# print status 
# 	for stat in status['items']:
# 		if not stat['index']['ok']:
# 			print json.dumps(stat)
	return resp
	
def annotateEffects(doc,record):
	""" Annotate variants effect"""	
	
	doc['Eff'] 	= []
	effects 	= record.INFO['EFF']
	genes 		= []
	locations 	= []
	eff = {}
	for e in effects:
		m = re.search(r"(.*)\((.*)\)",e)
		if not m.group(1) in eff:
			eff[m.group(1)] = []
			locations.append(m.group(1))
	
		#efect_impact,functional_class,codon_change,aminoacid_change,gene_name,gene_biotype,coding,transcript,exon
		values = m.group(2).split('|')
		tmp = {}
		if values[0]:
			tmp['impact'] 			= values[0]
		if values[1]:
			tmp['fclass'] 			= values[1]
		if values[2]:
			tmp['codon_change'] 	= values[2]
		if values[3]:
			tmp['aa_change'] 		= values[3]
		if values[4]:
			tmp['gene_name'] 		= values[4]
			genes.append(values[4])
		if values[5]:
			tmp['gene_biotype'] 	= values[5]
		if values[6]:
			tmp['coding'] 			= values[6]
		if values[7]:
			tmp['transcript'] 		= values[7]
		if values[8]:
			tmp['exon'] 			= values[8]
		
		eff[m.group(1)].append(tmp)
		
	unique_genes =  set(genes)
	if len(unique_genes):
		doc['Genes'] = list(unique_genes)	
		
		
	unique_locations =  set(locations)
	if len(unique_locations):
		doc['Locations'] = list(unique_locations)			
				
	doc['Eff'].append(eff)
	return 0


def main(fileName):

	docs = []
	vcf_reader = vcf.Reader(open(fileName, 'r'))
	
	for record in vcf_reader:
	
		#check filters
		if len(record.FILTER):
			continue
	
		doc = {}
		
		# convert chromosomes to numbers
		chromosome = ''
		if record.CHROM == "chrX":
			chromosome = 30
		elif record.CHROM == "chrY":
			chromosome = 31
		else:
			chromosome = record.CHROM[3:]	

		# Donor
		alt = re.sub(r'[\[,\]]','',str(record.ALT))	
		donor = {}
		donor[DONOR] = {}
		donor[DONOR]['Qua']	= record.QUAL;	
		
		# Info
		donor[DONOR]['Dp4'] = record.INFO['DP4'];
				
		# Effects
		annotateEffects(doc,record)
			
		# Genotype
		gen = record.genotype(DONOR).data;
		donor[DONOR]['GT'] = gen.GT;
		
		doc['Chr'] 		= int(chromosome)
		doc['Pos'] 		= int(record.POS)
		doc['Ref'] 		= record.REF
		doc['Alt'] 		= alt
		if 'INDEL' in record.INFO:
			doc['Indel'] = 1 
		
	
		# SNPs and damage 
		snp 			= {}
		if (record.ID):
			vcf_id 		= record.ID.split(";")
			for v in vcf_id:
				if re.match("RS=",v):
					snp['Rs']		= v[3:]
				elif re.match("dbSNPBuildID=",v):	
					snp['Build']	= v[13:] 
				elif re.match("GMAF=",v):
					snp['Gmaf']	= float(v[5:])	
				elif re.match("SIFT_score=",v) and  v[11:] != 'NA' :	
					doc['Sift'] = float(v[11:])
				elif re.match("Polyphen2_score=",v) and  v[16:] != 'NA':
					doc['Poly2'] = float(v[16:])	
				elif re.match("LRT_pred=",v):	
					doc['Ltr'] = v[9:]	
				elif re.match("MutationTaster_pred=",v):	
					doc['MutTaster'] = v[20:]		
			
			doc['dbSNP'] 	= snp

		doc['Donors'] = [donor]
		
		# create the bulk action
		action = {'_type': 'variant'}
		    
		# queue bulk json request
		#print doc	
		docs.append(json.dumps({'index': action}))
		docs.append(json.dumps(doc))
		
		# submit bulk request
		if len(docs) == BULK_SIZE * 2: # multiple by 2 to account for action
		    if VERBOSE:
		        print 'Submitting %s docs...' % BULK_SIZE
		        
 		    bulk('%s\n' % '\n'.join(docs)) # newline so last item is processed
		    docs = []
		    
		# only index a subset of the posts
		# set max to -1 for all docs
		if MAX_DOCS != -1 and i == MAX_DOCS + 1:
		    if VERBOSE:
		        print 'Hit max document count of %s' % MAX_DOCS
		        
		    break;
            
    # submit any hanging requests
	if len(docs) > 0:
	    if VERBOSE:
	        print 'Submitting remaning %s docs in queue...' % (len(docs) / 2)
	        
		bulk('%s\n' % '\n'.join(docs))        
	
	return 0
	
	
if __name__ == '__main__':
	usage = 'usage: %prog [options] file'
	parser = OptionParser(usage)
	parser.add_option('-s', '--server', dest='server', default='localhost:9200', help='ElasticSearch Server')
	parser.add_option('-i', '--index', dest='index', default='', help='Index name to use')
	parser.add_option('-b', '--bulk-size', dest='bulkSize', type='int', default=100, help='Number of docs to submit in each bulk request.')
	parser.add_option('-m', '--max-docs', dest='maxDocs', type='int', default=-1, help='Max number of docs to index')
	parser.add_option('-v', '--verbose', dest='verbose', action='store_true', default=False, help='Enable verbose output')
	parser.add_option('-d', '--donor', dest='donor', type='string', help='Donor ID')
	
	
	options, args = parser.parse_args()
	if len(args) != 1:
	    parser.error('The file location must be specified')
	
	if (not options.donor):
		 parser.error('Please provide the Donor ID')
	
	    
	# globals
	HOST = options.server
	INDEX = options.index
	BULK_SIZE = options.bulkSize
	MAX_DOCS = options.maxDocs
	VERBOSE = options.verbose
	DONOR = options.donor
	
	ret = main(args[0])
	sys.exit(ret)