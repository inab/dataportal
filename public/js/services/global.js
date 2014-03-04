//Global service for global variables
dataportal.factory("Global", [
    function() {
        var _this = this;
        _this._data = {
            user: window.user,
            authenticated: !! window.user,
            checkedAnalysisCategories:[],
            checkedExperimentTypes:[],
            checkedAnalysisTypes:[],
            checkedFileTypes:[],
            checkedInstitutions:[],
            checkedGenders:[],
            checkedOrphanets:[],
			checkedOmims:[],
			checkedIcd10s:[],
			checkedGeneTypes:[],
			checkedVariantTypes:[],
			checkedVariantConsequences:[],
			checkedVariantVerificationStatuses:[],
			search_dbsnp_id:'',
			search_gene_id:'',
			chr:0,
			chr_start:0,
			chr_end:250000000
        };

        return _this._data;
    }
]);
