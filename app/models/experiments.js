/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;
    
    
/**
 * Experiment Schema
 */
var ExperimentSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    EXPERIMENT_ID: {
        type: String,
        default: '',
        trim: true
    },
    STUDY_ID: {
        type: String,
        default: '',
        trim: true
    },
    STUDY_NAME: {
        type: String,
        default: '',
        trim: true
    },
    CENTER_NAME: {
        type: String,
        default: '',
        trim: true
    },
     FIRST_SUBMISSION_DATE: {
        type: String,
        default: '',
        trim: true
    },
     SEQ_RUNS_COUNT: {
        type: String,
        default: '',
        trim: true
    },
     SAMPLE_ID: {
        type: String,
        default: '',
        trim: true
    },
     SAMPLE_NAME: {
        type: String,
        default: '',
        trim: true
    },
     INSTRUMENT_PLATFORM: {
        type: String,
        default: '',
        trim: true
    },
     INSTRUMENT_MODEL: {
        type: String,
        default: '',
        trim: true
    },
     LIBRARY_NAME: {
        type: String,
        default: '',
        trim: true
    },
     LIBRARY_LAYOUT: {
        type: String,
        default: '',
        trim: true
    },
     LIBRARY_STRATEGY: {
        type: String,
        default: '',
        trim: true
    },
     EXPERIMENT_TYPE: {
        type: String,
        default: '',
        trim: true
    },
     DISEASE: {
        type: String,
        default: '',
        trim: true
    },
     BIOMATERIAL_PROVIDER: {
        type: String,
        default: '',
        trim: true
    },
     BIOMATERIAL_TYPE: {
        type: String,
        default: '',
        trim: true
    },
     CELL_TYPE: {
        type: String,
        default: '',
        trim: true
    },
     SPECIMEN_PROCESSING: {
        type: String,
        default: '',
        trim: true
    },
    SPECIMEN_STORAGE: {
        type: String,
        default: '',
        trim: true
    },
    READ_QUALITIES: {
        type: String,
        default: '',
        trim: true
    },
    MOLECULE: {
        type: String,
        default: '',
        trim: true
    },
    RUN_ID: {
        type: String,
        default: '',
        trim: true
    },
    READ_COUNT: {
        type: String,
        default: '',
        trim: true
    },
    BASE_COUNT: {
        type: String,
        default: '',
        trim: true
    },
    READ_LENGTH: {
        type: String,
        default: '',
        trim: true
    },
    FILE: {
        type: String,
        default: '',
        trim: true
    },
    WITHDRAWN: {
        type: String,
        default: '',
        trim: true
    },
    TYPE: {
        type: String,
        default: '',
        trim: true
    },
    FILE_MD5: {
        type: String,
        default: '',
        trim: true
    },
    FILE_SIZE: {
        type: String,
        default: '',
        trim: true
    },
     SUBMISSION_ID: {
        type: String,
        default: '',
        trim: true
    },
     RUN_NAME: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});    

mongoose.model('Experiment', ExperimentSchema);