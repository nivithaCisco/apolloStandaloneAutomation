
var DeviceTab = require('./../../POM/deviceTab.js');
var filename='./Resources/import/csvDevices.csv';
var deviceTabMain = require('./../../POM/deviceTabMain.js');



var fs = require('fs');
var parseCsvFile = require('./../../POM/ParseCsvFile');
var parse = require('csv-parse');

describe('Export', function () {
    beforeEach(function() {
        browser.sleep(20000);
    });

    it('Import file', function () {
        var autoIt='../Resources/AutoItScripts/import.exe';
        DeviceTab.importCSV(filename,autoIt);
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
          for (var k= 1; k < totalDevicesExcel; k++) {

                (function (k, totalDevicesExcel) {

                    console.log(par[k][3]+","+par[k][5]);
                    deviceTabMain.setSearch(par[k][3]+","+par[k][5]);

                    browser.sleep(20000);

                    element.all(by.xpath('//div [@class="card__footer ng-scope"]/a[@tooltip="Edit"]')).then(function(data) {

                        if(data.length == 1)
                        {
                            element(by.xpath('//div [@class="card__footer ng-scope"]/a[@tooltip="Edit"]')).click().then(function() {

                                expect(par[k][0]).toEqual(deviceTabMain.getDevName());
                                expect(par[k][2]).toEqual(deviceTabMain.getLocation());
                                expect(par[k][3]).toEqual(deviceTabMain.getHostName());
                                expect(par[k][4].toUpperCase()).toEqual(deviceTabMain.getConnection());
                                expect(par[k][5]).toEqual(deviceTabMain.getPort());
                                DeviceTab.hasClass(element.all(by.css('.icon-star')).get(0), 'text-warning-alt').then(function (selected) {
                                    if (selected) {
                                        expect(par[k][6]).toEqual("yes");
                                    }
                                    else {
                                        expect(par[k][6]).toEqual("no");

                                    }
                                })
                                expect(par[k][8]).toEqual(deviceTabMain.getNote());

                            });
                            DeviceTab.closeEditModel();
                        }
                        else
                        {
                            console.log("failed for "+par[k][3]+","+par[k][5])
                            expect(false).toBe(false);

                        }

                        //

                    });


                    deviceTabMain.removeSearch();

                    console.log("page index :dev no :" + k);






                    //    })(cellIndex);


                    // }
                })(k,totalDevicesExcel);


            }


        });


    });

})
