/**
 * Created by nivmanoh on 2/15/2016.
 */

var newSess = require('./../../POM/NewSessionPage.js');
var settingsTabPage = require('./../../POM/settingsPage.js');
var DeviceTab = require('./../../POM/deviceTab.js');
var deviceTabMain = require('./../../POM/deviceTabMain.js');

var EC = protractor.ExpectedConditions;


var AppDataProvider = require('../../data/data.js');
var using = require('jasmine-data-provider');


describe('Recent + Quick', function () {
    beforeEach(function() {
        browser.sleep(10000);
    });

    it('Check if Enhanced Login Flow is ON ', function ()
    {
        settingsTabPage.settingsTab().click();
        settingsTabPage.handleOvalButton("Enhanced Login Flow","ON");
        DeviceTab.deviceTab.click();
    });

    using(AppDataProvider.quickSession, function (data, description) {

        it('Verify if device gets added through Quick Connection '+ description, function ()
        {
            newSess.quickConnectSess(data.hostname_ip,data.user_name, data.password, data.conn_type, "ON");
          // newSess.session_connected();

            browser.wait(EC.visibilityOf(newSess.getVersionTerminal),90000);

             var version= (newSess.getVersionTerminal).getText().then(function(value){

                   console.log(value.split(" ")[3]);
                 value=value.split(" ")[3];
                    return value;
                });


            newSess. disConnectSession();
            newSess.session_dis_connected();
            newSess.closeTab();
            browser.sleep(10000);

            deviceTabMain.setSearch(data.hostname_ip);
            browser.sleep(10000);
            browser.wait((deviceTabMain.isLoading).isPresent());

                expect(deviceTabMain.deviceNameCard()).toEqual(data.hostname_ip);
            expect(deviceTabMain.portCard()).toEqual(data.port);
            expect(deviceTabMain.ipCard()).toEqual(data.hostname_ip);
            expect(deviceTabMain.connectionTypeCard()).toEqual(data.conn_type);
            expect(deviceTabMain.versionCard()).toEqual(version);



        });

        it('Verify if Recent List gets updated : Latest connection '+ description, function () {


            DeviceTab.recentIpList.getText().then(function(items) {
                console.log(items)
                expect(DeviceTab.recentIpList.length).toEqual(DeviceTab.recentTimeList.getText().length);
                expect(items[0]).toBe(data.hostname_ip);
            });
        });


        it('Verify Connection through SmartCard'+ description, function () {
            deviceTabMain.cardConnect();
            browser.sleep(10000)
            newSess.userName().sendKeys(data.user_name);
            newSess.password().sendKeys(data.password);
            newSess.connect().click();
            newSess.handleAlert();
            newSess. disConnectSession();
            newSess.session_dis_connected();
            newSess.closeTab();
            browser.sleep(10000);
            deviceTabMain.removeSearch();


        });
        it('Verify the recent List if it duplicates'+ description, function () {


            DeviceTab.recentIpList.getText().then(function(value) {
                console.log(value);
                expect(DeviceTab.recentIpList.length).toEqual(DeviceTab.recentTimeList.getText().length);

                expect(value[0]).toBe(data.hostname_ip);

                var arrayRecent=[];
                value.forEach(function(item) {
                    if(item != "") {
                        console.log(item)
                        arrayRecent.push(item)
                    }

                });

                var valueArr = arrayRecent.map(function(item){ return item });

                var isDuplicate = valueArr.some(function(item, idx){
                    return valueArr.indexOf(item) != idx
                });
                console.log("The duplicate is ", isDuplicate);
                expect(isDuplicate).toBeFalsy();


            });
        });

        it('Verify the Connection through recentList'+ description, function () {

            (DeviceTab.recentIpList.first()).click();
            browser.sleep(10000)
            newSess.userName().sendKeys(data.user_name);
            newSess.password().sendKeys(data.password);
            newSess.connect().click();
            newSess.handleAlert();
            newSess. disConnectSession();
            newSess.session_dis_connected();
            newSess.closeTab();
            browser.sleep(10000);

        });

        it('Verify the recent List if it duplicates'+ description, function () {


            DeviceTab.recentIpList.getText().then(function(value) {
                console.log(value);
                expect(DeviceTab.recentIpList.length).toEqual(DeviceTab.recentTimeList.getText().length);

                expect(value[0]).toBe(data.hostname_ip);

                    var arrayRecent=[];
                value.forEach(function(item) {
                    if(item != "") {
                        console.log(item)
                        arrayRecent.push(item)
                    }

                });

                var valueArr = arrayRecent.map(function(item){ return item });

                var isDuplicate = valueArr.some(function(item, idx){
                    return valueArr.indexOf(item) != idx
                });
                console.log("The duplicate is ", isDuplicate);
                expect(isDuplicate).toBeFalsy();


            });
        });


        it('Delete Device - ' + description, function () {
            browser.sleep(3000);
            deviceTabMain.setSearch(data.hostname_ip);
            browser.sleep(10000);
            browser.wait((deviceTabMain.isLoading).isPresent());
            deviceTabMain.deleteDevice();
            deviceTabMain.removeSearch();
            expect(element.all(by.className('gritter-title')).getText()).toContain('Delete Device');


        });




    });//End of Data Provider

})

