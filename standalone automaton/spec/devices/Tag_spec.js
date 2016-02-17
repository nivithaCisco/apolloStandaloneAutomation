/**
 * Created by nivmanoh on 2/17/2016.
 */
var deviceTabMain = require('./../../POM/deviceTabMain.js');
var AppDataProvider = require('./../../Data/data.js');
var settingsTabPage = require('./../../POM/settingsPage.js');
var DeviceTab = require('./../../POM/deviceTab.js');

var newSess = require('./../../POM/NewSessionPage.js');

var using = require('jasmine-data-provider');

describe('Add Device tests', function () {
    beforeEach(function() {
        browser.sleep(10000);
    });

    using(AppDataProvider.TagDataProvider, function (data, description) {
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
          //  expect(element.all(by.className('gritter-title')).getText()).toContain('Device Added');

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


        it('verify Tag in edit modal', function() {

            deviceTabMain.cardEdit();

            if (!data.Mandatory){
                console.log("here")
                expect(DeviceTab.editTagList().length).toBe(1);
                expect(DeviceTab.tagName(data.tagName).isPresent()).toBeTruthy();
            }else
            {
                console.log("here 2")

                expect(DeviceTab.tagList.isPresent()).toBeFalsy();


            }
            DeviceTab.closeEditModel();


        });


        it('verify Tag in Bulk Action', function() {

            deviceTabMain.selectDevice();
            deviceTabMain.bulkAction();
            deviceTabMain.addTagOption();
            if (!data.Mandatory){

                expect(DeviceTab.editTagList().length).toBe(1);
                expect(DeviceTab.tagName(data.tagName).isPresent()).toBeTruthy();

            }else
            {
                expect(DeviceTab.tagList.isPresent()).toBeFalsy();
            }
            DeviceTab.closeTagModel();

            //deviceTabMain.addTagBulk("TagChange");
            //expect(element.all(by.className('gritter-title')).getText()).toContain('Device Updated');
            //expect(DeviceTab.editTagList()).toContain("TagChange");


        });



        it('Delete Device - ' + description, function () {
            browser.sleep(3000);
            deviceTabMain.deleteDevice();
            deviceTabMain.removeSearch();
            expect(element.all(by.className('gritter-title')).getText()).toContain('Delete Device');


        });





    });




});//end of describe
