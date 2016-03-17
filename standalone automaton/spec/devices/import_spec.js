
var DeviceTab = require('./../../POM/deviceTab.js');
var filename='C:/Users/nivmanoh/Desktop/devices.csv';
var deviceTabMain = require('./../../POM/deviceTabMain.js');



var fs = require('fs');
var parseCsvFile = require('./../../POM/ParseCsvFile');
var parse = require('csv-parse');

describe('Export', function () {
    beforeEach(function() {
        browser.sleep(20000);
    });

    it('Export file', function () {
        DeviceTab.gritterNotifyClose();
        var par;
        var parser = parse({delimiter: ','}, function (err, data) {
            par= data;
        })
        fs.createReadStream(filename).pipe(parser);
        DeviceTab.getNoOfCardsElem().then(function (value) {
            var totalDevices = parseInt(value.split(" ")[3]);
            var totalPages = Math.ceil(totalDevices / 48);

            console.log("total devices : " + totalDevices);
            console.log("total pages : " + totalPages);
            var totalDevicesExcel= par.length;
          for (var j = 1; j < totalDevicesExcel; j++) {

                (function (j, totalDevicesExcel) {

                    console.log(par[j][3]+","+par[j][5]);
                    deviceTabMain.setSearch(par[j][3]+","+par[j][5]);

                    browser.sleep(20000);

                    element.all(by.xpath('//div [@class="card__footer ng-scope"]/a[@tooltip="Edit"]')).then(function(data) {

                        if(data.length == 1)
                        {
                            element(by.xpath('//div [@class="card__footer ng-scope"]/a[@tooltip="Edit"]')).click().then(function() {

                                //expect(par[j][0]).toEqual(deviceTabMain.getDevName());
                            });
                            DeviceTab.closeEditModel();
                        }
                        else
                        {
                            console.log("tria***********")
                        }

                        //

                    });


                    deviceTabMain.removeSearch();

                    console.log("page index :dev no :" + j);






                    //    })(cellIndex);


                    // }
                })(j,totalDevicesExcel);


            }


        });


    });

    xit('Export file', function () {
        encoding = 'utf8'; // 'ascii' or 'utf8'


        var options = { readOptions: { encoding: encoding ,hasHeader: true }};
//~ options.hasHeader = true;
//~ options.fieldIndexes = [ 1, 3, 4 ];
        parseCsvFile(filename, options,
            function onNext(record)
            {
                console.log(record)     ;
                deviceTabMain.setSearch(record[3]+","+record[5]);

                element(by.xpath('//div [@class="card__footer ng-scope"]/a[@tooltip="Edit"]')).click().then(function() {


                });
                DeviceTab.closeEditModel();

            },
            function onComplete()
            {
                console.log('Done');
            }
        );




    });

})
