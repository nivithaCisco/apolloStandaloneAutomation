
var DeviceTab = require('./../../POM/deviceTab.js');
var filename='./Resources/import/csvDevices.csv';
var deviceTabMain = require('./../../POM/deviceTabMain.js');
var settingsTabPage = require('./../../POM/settingsPage.js');


var fs = require('fs');
var parseCsvFile = require('./../../POM/ParseCsvFile');
var parse = require('csv-parse');

describe('Export', function () {
    beforeEach(function() {
        browser.sleep(20000);
    });

    it('Check if telnet is selected as global protocol ', function ()
    {
        settingsTabPage.settingsTab().click();
        settingsTabPage.telnetRadio().click();
        DeviceTab.deviceTab.click();

    });

    it('Import file', function () {

        var autoIt='../Resources/AutoItScripts/import.exe';
        DeviceTab.importCSV(filename,autoIt);
    });

    it('Import  file Check', function () {
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
            expect(totalDevices).toEqual(9);

          for (var k= 1; k < totalDevicesExcel; k++) {

                (function (k, totalDevicesExcel) {

                    console.log(par[k][3]+","+par[k][5]);
                    deviceTabMain.setSearch(par[k][3]+","+par[k][5]);

                    browser.sleep(20000);

                    element.all(by.xpath('//div [@class="card__footer ng-scope"]/a[@tooltip="Edit"]')).then(function(data) {

                        if(data.length == 1)
                        {
                            element(by.xpath('//div [@class="card__footer ng-scope"]/a[@tooltip="Edit"]')).click().then(function() {




                                if(par[k][0]=="")
                                {
                                    expect(par[k][3]).toEqual(deviceTabMain.getHostName());

                                }else {
                                    expect(par[k][0]).toEqual(deviceTabMain.getDevName());
                                }


                                expect(par[k][2]).toEqual(deviceTabMain.getLocation());
                                expect(par[k][3]).toEqual(deviceTabMain.getHostName());



                                if((par[k][4].toUpperCase()!="") && ((par[k][5] !="22")||(par[k][5] !="23"))) {

                                    expect(par[k][4].toUpperCase()).toEqual(deviceTabMain.getConnection());
                                }



                                if((par[k][4].toUpperCase()=="") && (par[k][5] =="22")) {

                                    expect(par[k][5]).toEqual(deviceTabMain.getPort());
                                    expect("SSH").toEqual(deviceTabMain.getConnection());

                                }
                                if((par[k][4].toUpperCase()=="") && (par[k][5] =="23")) {

                                    expect(par[k][5]).toEqual(deviceTabMain.getPort());
                                    expect("TELNET").toEqual(deviceTabMain.getConnection());
                                }
                                if((par[k][4].toUpperCase()=="") && ((par[k][5] !="22")&& (par[k][5] !="23"))) {

                                    expect("TELNET").toEqual(deviceTabMain.getConnection());
                                }
                                if(par[k][6]=="")
                                {
                                    par[k][6]="no"
                                }

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
