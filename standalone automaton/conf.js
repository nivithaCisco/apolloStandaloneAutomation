var HTMLReport = require('jasmine-xml2html-converter');
var jasmineReporters = require('jasmine-reporters');
var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  directConnect: true,
        capabilities: {
        'browserName': 'chrome',

        'chromeOptions': {
            'binary': 'C:/Program Files/Cisco Systems, Inc/Cisco CLI Analyzer/analyzer.exe',

        }
    },


   // Assign the test reporter to each running instance
    onPrepare: function() {
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'testresults',
            filePrefix: 'xmloutput'
        }));
		
		
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'all',
            displayPendingSpec: true,
            displaySpecDuration: true
        }));

    },

    onComplete: function(exitCode) {
        // Call custom report for html output
	testConfig = {
			reportTitle: 'Test Execution Report',
			outputPath: './report'
	};
	new HTMLReport().from('./testresults/xmloutput.xml', testConfig);
    },
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directly when
  // protractor is called.


    suites: {

        devices_predefined_data: [
            './spec/devices/import_spec.js',
           // './spec/devices/export_spec.js',
           // './spec/devices/SelectAll_spec.js',
           // './spec/devices/Filter_spec.js',
           //'./spec/devices/sort_spec.js'
        ],

        devices_nivi: [
        './spec/devices/Landing_spec.js',
    './spec/devices/addDevice_spec.js',
    './spec/devices/QuickRecent_spec.js',
        './spec/devices/Tag_spec.js'
        ],

        devices_vik: [
            './spec/devices/NewSessionValidation_spec.js',
           './spec/devices/NewSession_spec.js',
           './spec/devices/Settings_spec.js',
           './spec/devices/tableview_spec.js']

    },
    

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
	  showColors: true,
      isVerbose: true,
      includeStackTrace: true,
      defaultTimeoutInterval: 1500000
  }
};
