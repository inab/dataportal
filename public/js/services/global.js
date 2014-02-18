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
			checkedChromosomes:[],
			checkedGeneTypes:[],
			checkedVariantTypes:[],
			checkedVariantConsequences:[],
			checkedVariantVerificationStatuses:[]
        };

        return _this._data;
    }
]);
