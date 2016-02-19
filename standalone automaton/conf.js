var HTMLReport = require('jasmine-xml2html-converter');
var jasmineReporters = require('jasmine-reporters');

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
    specs:[
//All these specs are based on predefined data
        './spec/devices/SelectAll_spec.js',
        './spec/devices/Filter_spec.js',
        './spec/devices/sort_spec.js',
        
//All these specs are based on non predefined data

        './spec/devices/Landing_spec.js',
        './spec/devices/download_spec.js',
        './spec/devices/addDevice_spec.js',
        './spec/devices/QuickRecent_spec.js',
        './spec/devices/Tag_spec.js',
        './spec/devices/NewSessionValidation_spec.js',
        './spec/devices/NewSession_spec.js',
        './spec/devices/Settings_spec.js'


    ],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 1500000
  }
};
