/**
 * Created by nivmanoh on 2/8/2016.
 */
var deviceTabMain = require('./../../POM/deviceTabMain.js');
var AppDataProvider = require('./../../Data/data.js');
var settingsTabPage = require('./../../POM/settingsPage.js');
var DeviceTab = require('./../../POM/deviceTab.js');
var EC = protractor.ExpectedConditions;

var newSess = require('./../../POM/NewSessionPage.js');

var using = require('jasmine-data-provider');

describe('Add Device tests', function () {
    beforeEach(function() {
        browser.sleep(10000);
    });

    it('Check if Enhanced Login Flow is ON ', function ()
    {
        settingsTabPage.settingsTab().click();
        settingsTabPage.handleOvalButton("Enhanced Login Flow","ON");
        DeviceTab.deviceTab.click();
    });

    using(AppDataProvider.AddDeviceDataProvider, function (data, description) {
        it('Device Page_Add Device', function () {
            deviceTabMain.getIconPlus();
            deviceTabMain.setHostName(data.ipAddress);
            deviceTabMain.setPort(data.port);

            if (!data.Mandatory)
            {

                deviceTabMain.setDevName(data.deviceName);
                deviceTabMain.setLocation(data.location);
                deviceTabMain.setConnType(data.connectionType)
                deviceTabMain.setSelectMfg(data.Manufacture);
                deviceTabMain.setTag(data.inputTag);
                deviceTabMain.setNotes(data.notes);
            }
            deviceTabMain.getSave();
            console.log("Device Added");
            browser.sleep(3000);
            expect(element.all(by.className('gritter-title')).getText()).toContain('Device Added');

            //expect(element(by.className('gritter-title')).getText()).toEqual('Device Added');
            deviceTabMain.setSearch(data.ipAddress);
            browser.sleep(10000);
            browser.wait((deviceTabMain.isLoading).isPresent());
            if(data.deviceName=="")
            {
                expect(deviceTabMain.deviceNameCard()).toEqual(data.ipAddress)

            }else {
                expect(deviceTabMain.deviceNameCard()).toEqual(data.deviceName);
            }
            expect(deviceTabMain.portCard()).toEqual(data.port);
            expect(deviceTabMain.ipCard()).toEqual(data.ipAddress);




                expect(deviceTabMain.locationCard()).toEqual(data.location);

                expect(deviceTabMain.connectionTypeCard()).toEqual(data.connectionType);



        });




        it('Verify Connection through SmartCard'+ description, function () {
            deviceTabMain.cardConnect();
            browser.sleep(10000);
            var name=data.deviceName;
            if(data.deviceName=="") {
                name = data.ipAddress;

            }
            expect(newSess.newTab(name).getText()).toEqual(name);

            newSess.userName().sendKeys(data.user_name);
            newSess.password().sendKeys(data.password);
            newSess.connect().click();
            newSess.handleAlert();
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
            expect(deviceTabMain.versionCard()).toEqual(version);

            deviceTabMain.removeSearch();


        });
        it('Verify if Recent List gets updated : Latest connection '+ description, function () {

            DeviceTab.recentIpList.getText().then(function(items) {
                console.log(items)
                expect(DeviceTab.recentIpList.length).toEqual(DeviceTab.recentTimeList.getText().length);

                expect(items[0]).toBe(data.ipAddress);
            });
        });

        //it('Favorite from card', function() {
        //    expect(element.all(data.selector).getAttribute('class')).toMatch('icon-star  text-muted');
        //    deviceTabMain.cardFav();
        //    expect(element.all(data.selector).getAttribute('class')).toMatch('icon-star  text-warning-alt');
        //
        //
        //});



        it('Delete Device - ' + description, function () {
            browser.sleep(3000);
            deviceTabMain.deleteDevice();
            deviceTabMain.removeSearch();
            expect(element.all(by.className('gritter-title')).getText()).toContain('Delete Device');


        });





    });




});//end of describe
