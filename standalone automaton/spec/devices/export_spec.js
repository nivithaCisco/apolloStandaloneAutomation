/**
 * Created by nivmanoh on 3/2/2016.
 */


var DeviceTab = require('./../../POM/deviceTab.js');
var filename='./Resources/downloads/devices.csv';



var deviceTabMain = require('./../../POM/deviceTabMain.js');
var using = require('jasmine-data-provider');
var AppDataProvider = require('./../../Data/data.js');


//var filename='C:/Users/nivmanoh/Desktop/devices.csv';



var fs = require('fs');
var parse = require('csv-parse');




describe('Export', function () {
    beforeEach(function() {
        browser.sleep(10000);
    });
    it('Export file', function () {

        DeviceTab.openSortPage("Updated Date");
        DeviceTab.hasClass(DeviceTab.sortImage,'icon-sort-amount-desc').then(function (selected) {
            if(selected)
            {
                DeviceTab.sortTogglePage();
            }
        })

        browser.sleep(10000);



        var filename='./Resources/downloads/devices.csv';
           var autoIt='../Resources/AutoItScripts/DownloadHandler.exe';

        DeviceTab.Download("Updated Date",filename,autoIt);



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


            for (var pageIndex = 1; pageIndex <= totalPages; pageIndex++) {
                browser.sleep(4000);
                (function (pageIndex) {
                    browser.sleep(4000);


                    var devicesInlastPage = (totalDevices / 48 == 0) ? 48 : (totalDevices % 48);

                    var devicesInCurrentPage = (pageIndex < totalPages) ? 48 : devicesInlastPage;

                    console.log("devices in current page :" + devicesInCurrentPage);

                    for (var j = 1; j <= devicesInCurrentPage; j++) {

                        (function (j, devicesInCurrentPage) {

                            element.all(by.xpath('//div [@class="card__footer ng-scope"]/a[@tooltip="Edit"]')).get(j - 1).click().then(function () {
                                var k=((pageIndex-1)*48)+j;
                                console.log("page index :" + pageIndex + " dev no :" + j + "device number " + k);
                                expect(par[k][0]).toEqual(deviceTabMain.getDevName());
                                //  expect(par[j][1]).toEqual(deviceTabMain.getserialNum());
                                expect(par[k][2]).toEqual(deviceTabMain.getLocation());
                                expect(par[k][3]).toEqual(deviceTabMain.getHostName());
                                expect(par[k][4].toUpperCase()).toEqual(deviceTabMain.getConnection());
                                expect(par[k][5]).toEqual(deviceTabMain.getPort());
                                DeviceTab.hasClass(element.all(by.css('.icon-star')).get(j - 1), 'text-warning-alt').then(function (selected) {
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
                        })(j, devicesInCurrentPage);


                    }
                    browser.sleep(4000);

                    browser.sleep(4000);
                    DeviceTab.nextDevicePage();


                })(pageIndex);


            }

        });


    });

    using(AppDataProvider.ExportDataProvider, function (data, description) {

        it('Export file Download', function () {

            DeviceTab.openSortPage(data.dropdown);
            browser.sleep(10000);

            var filename="";
            var autoIt="";
           var type= data.dropdown

            if(type=="IP / Hostname")
            {
                 filename='./Resources/downloads/exportIpaddress.csv';
                 autoIt='../Resources/AutoItScripts/exportIpaddress.exe';
            }
            if(type=="Device Name")
            {
                 filename='./Resources/downloads/exportDevice.csv';
                 autoIt='../Resources/AutoItScripts/exportDevice.exe';
            }
            if(type=="Location")
            {
                 filename='./Resources/downloads/exportLocation.csv';
                 autoIt='../Resources/AutoItScripts/exportLocation.exe';
            }
            if(type=="Recently Accessed")
            {
                 filename='./Resources/downloads/exportRecent.csv';
                autoIt='../Resources/AutoItScripts/exportRecent.exe';
            }

            DeviceTab.Download(type,filename,autoIt);
        });

        it('Export file Compare', function () {

            var data;
            try {
                data = fs.readFileSync(filename,'utf-8');
                expect(fs.readFileSync(data.filename, {encoding: 'utf8'})).toEqual(data);


            } catch (e) {
                console.log(e)
            }
        });




    });








});
