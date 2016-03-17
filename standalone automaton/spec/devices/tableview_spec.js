/**
 * Created by vikkanna on 3/8/2016.
 */

var deviceTab = require('./../../../../../MyJabberFiles/vikkanna@cisco.com/Thursday/apolloStandaloneAutomation-QANivitha/standalone automaton/POM/deviceTab.js');
var newSess = require('./../../../../../MyJabberFiles/vikkanna@cisco.com/Thursday/apolloStandaloneAutomation-QANivitha/standalone automaton/POM/NewSessionPage.js');
var deviceTabMain = require('./../../../../../MyJabberFiles/vikkanna@cisco.com/Thursday/apolloStandaloneAutomation-QANivitha/standalone automaton/POM/deviceTabMain.js');
var settingsTabPage = require('./../../POM/settingsPage.js');
var AppDataProvider = require('./../../Data/data.js');
var using = require('jasmine-data-provider');
var tableViewPage = require('./../../POM/tableView_page.js');
var DeviceTab = require('./../../../../../MyJabberFiles/vikkanna@cisco.com/Thursday/apolloStandaloneAutomation-QANivitha/standalone automaton/POM/deviceTab.js');

describe('Table View ', function () {

    var EC = protractor.ExpectedConditions;
    it('Verify Select All is displayed while atleast a device is presemt ', function ()
    {
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.css('span[class= "icon-plus"]'))),900000);
    });

    using(AppDataProvider.addDevice, function (data, description) {
   it('Verify Select All is displayed while atleast a device is presemt ', function ()
    {
        tableViewPage.handleTableView('GRID');
        newSess.deleteAllDevice();
        tableViewPage.handleTableView('LIST');
        newSess.addDevice(data.ipAddress ,data.port, data.deviceName,data.location,data.Manufacture,  data.connectionType,data.inputTag, data.notes);
        expect(tableViewPage.verifySelectAll().isPresent()).toBe(true);

    });

 });
    it('Verify Select All is Hidden while no device is present ', function ()
    {
        tableViewPage.handleTableView('GRID');
        newSess.deleteAllDevice();
        tableViewPage.handleTableView('LIST');
        expect(tableViewPage.verifySelectAll().isPresent()).toBe(false);
    });



    it('Verify table size wile there are no devices', function ()
    {
        element.all(by.xpath("//tbody[@class='ng-scope']//tr")).then( function(num){
       // newSess.addDevice(data.ipAddress ,data.port, data.deviceName,data.location,data.Manufacture,  data.connectionType,data.inputTag, data.notes);
       // expect(tableViewPage.verifySelectAll().isPresent()).toBe(false);
           expect(num.length).toBe(0);

       });

    });


    using(AppDataProvider.AddDeviceTableView, function (data, description) {

        it('Verify row count increments in table while devices are added to the table', function () {

            newSess.addDevice(data.ipAddress ,data.port, data.deviceName,data.location,data.Manufacture,  data.connectionType,data.inputTag, data.notes);
           browser.sleep(1000);
            element.all(by.xpath("//tbody[@class='ng-scope']//tr")).then( function(num){

                expect(num.length).toBe(data.dev_num);

            });


        });
    });



    it('Verify table has all the heading ', function ()
    {
        var heading_exp =['',
            'Actions',
            'Device Name',
            'IP / Hostname',
            'Version',
            'Connection Type',
            'Port',
            'Location'];
        tableViewPage.tableHeading().getText().then( function(heading){
            expect(heading).toEqual(heading_exp);

    });


    });


    it('Verify all major functionalities are available for table view', function ()
    {   expect(tableViewPage.upload().isPresent()).toBe(true);
        expect(tableViewPage.export().isPresent()).toBe(true);
     tableViewPage.handleTableView('GRID');
     newSess.deleteAllDevice();
     tableViewPage.handleTableView('LIST');
    });




   using(AppDataProvider.AddDeviceTableView, function (data, description) {
    it('Verify the devices are added one after the other to table view', function ()
    {

        tableViewPage.handleTableView('LIST');

        DeviceTab.openSortPage("Updated Date");
        newSess.addDevice(data.ipAddress ,data.port, data.deviceName,data.location,data.Manufacture,  data.connectionType,data.inputTag, data.notes);

        var exp= [];
        exp.push("");
        exp.push("");
        exp.push(data.deviceName);
        exp.push(data.ipAddress);
        exp.push(data.version);
        exp.push(data.connectionType);
        exp.push(data.port);
        exp.push(data.location);

    console.log(exp);
    browser.sleep(3000);

        tableViewPage.tableCol(data.dev_num).getText().then(function(row_val){


         expect(row_val).toEqual(exp);

        });

    });
   });



/*

    using(AppDataProvider.addDevice, function (data, description) {
        it('Verify device connection through table view ', function ()
        {   tableViewPage.tableDeleteAllDevice();
            newSess.addDevice(data.ipAddress ,data.port, data.deviceName,data.location,data.Manufacture,  data.connectionType,data.inputTag, data.notes);


        });


    });
*/


});