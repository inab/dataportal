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
	

def main(fileName):

	docs = []
	fileHandler = open(fileName, 'r')
	lastGeneId = "";
	for line in fileHandler:
	
		record =  line.split("\t");
		
		if record[2] != 'CDS':
			continue
	
				
		#print record
		doc = {}
		doc['Chr'] 				= record[0];
		
		annotation = record[8].split(";");
		
		m = re.search(r'"(.*)"',annotation[2])
		
		if m.group(1) != "1":
			continue
		
		m = re.search(r'"(.*)"',annotation[3])
		
		if (m.group(1) == lastGeneId):
			continue
		doc['gene_name'] 		=  m.group(1);
		lastGeneId = doc['gene_name'] ;
				
		m = re.search(r'"(.*)"',annotation[4])
		doc['gene_biotype'] 	=  m.group(1);
		
		
		# create the bulk action
		action = {'_type': 'gene'}
		    
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
	parser.add_option('-i', '--index', dest='index', default='genes', help='Index name to use')
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