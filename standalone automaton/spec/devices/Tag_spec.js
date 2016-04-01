/**
 * Created by nivmanoh on 2/17/2016.
 */
var deviceTabMain = require('./../../POM/deviceTabMain.js');
var AppDataProvider = require('./../../Data/data.js');
var settingsTabPage = require('./../../POM/settingsPage.js');
var DeviceTab = require('./../../POM/deviceTab.js');
var tag1="tagAdd";
var tag2="tagChange"

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
                DeviceTab.allTagList.getText().then(function(items) {
                    expect(items.length).toBe(1);
                    console.log(items)
                    expect(DeviceTab.tagName(data.inputTag).isPresent()).toBeTruthy();
                });
            }else
            {
                console.log("here 2")

                expect(DeviceTab.tagList.isPresent()).toBeFalsy();


            }

            browser.sleep(6000);

            deviceTabMain.setTag(tag1);
            expect(DeviceTab.tagName(tag1).isPresent()).toBeTruthy();
            deviceTabMain.addCard();


        });
        it('verify Tag updation in edit modal', function() {




            deviceTabMain.cardEdit();

            if (!data.Mandatory){
                console.log("here")
                DeviceTab.allTagList.getText().then(function(items) {
                    expect(items.length).toBe(2);
                    console.log(items)
                    expect(DeviceTab.tagName(tag1).isPresent()).toBeTruthy();
                    expect(DeviceTab.tagName(data.inputTag).isPresent()).toBeTruthy();

                });
            }else
            {

                expect(DeviceTab.tagList.isPresent()).toBeTruthy();
                DeviceTab.allTagList.getText().then(function(items) {
                    expect(items.length).toBe(1);
                    console.log("The tag added through edit ",items);
                    expect(DeviceTab.tagName(tag1).isPresent()).toBeTruthy();

                });

            }

            DeviceTab.closeEditModel();

                if (!data.Mandatory) {

                    DeviceTab.showAllCheck("Tags").then(function () {

                        expect(DeviceTab.checkFilter("Tags", tag1)).toBeTruthy();
                        expect(DeviceTab.checkFilter("Tags", data.inputTag)).toBeTruthy();
                    });

                } else {
                    DeviceTab.showAllCheck("Tags").then(function () {

                        expect(DeviceTab.checkFilter("Tags", tag1)).toBeTruthy();

                    });

                }


        });


        it('Delete Tag', function() {
            deviceTabMain.cardEdit();
            DeviceTab.deleteTag(tag1);
            deviceTabMain.addCard();

            deviceTabMain.cardEdit();


            if (!data.Mandatory){
                console.log("here")
                DeviceTab.allTagList.getText().then(function(items) {
                    expect(items.length).toBe(1);
                    console.log(items)
                    expect(DeviceTab.tagName(tag1).isPresent()).toBeFalsy();
                    expect(DeviceTab.tagName(data.inputTag).isPresent()).toBeTruthy();

                });
            }else
            {
                expect(DeviceTab.tagList.isPresent()).toBeFalsy();

                            }

            DeviceTab.closeEditModel();
            if (!data.Mandatory) {

                DeviceTab.showAllCheck("Tags").then(function () {

                    expect(DeviceTab.checkFilter("Tags", tag1)).toBeFalsy();
                    expect(DeviceTab.checkFilter("Tags", data.inputTag)).toBeTruthy();
                });

            } else {
                DeviceTab.showAllCheck("Tags").then(function () {

                    expect(DeviceTab.checkFilter("Tags", tag1)).toBeFalsy();

                });

            }


        });

        it('Add Tag in Bulk Action', function() {
            deviceTabMain.selectDevice();

            deviceTabMain.bulkAction();
            deviceTabMain.addTagOption();
            expect(DeviceTab.tagList.isPresent()).toBeFalsy();
            deviceTabMain.addTagBulk(tag2);
            expect(element.all(by.className('gritter-title')).getText()).toContain('Device Updated');
            DeviceTab.isNotChecked();


        });
        it('verify Tag updation in edit modal', function() {

            deviceTabMain.cardEdit();

            if (!data.Mandatory){
                console.log("here")
                DeviceTab.allTagList.getText().then(function(items) {
                    expect(items.length).toBe(2);
                    console.log(items)
                    expect(DeviceTab.tagName(tag2).isPresent()).toBeTruthy();
                    expect(DeviceTab.tagName(data.inputTag).isPresent()).toBeTruthy();

                });
            }else
            {
                expect(DeviceTab.tagList.isPresent()).toBeTruthy();
                DeviceTab.allTagList.getText().then(function(items) {
                    expect(items.length).toBe(1);
                    console.log("The tag added through bulk ",items);
                    expect(DeviceTab.tagName(tag1).isPresent()).toBeFalsy();
                    expect(DeviceTab.tagName(tag2).isPresent()).toBeTruthy();

                });


            }

            DeviceTab.closeEditModel();
            if (!data.Mandatory) {

                DeviceTab.showAllCheck("Tags").then(function () {

                    expect(DeviceTab.checkFilter("Tags", tag2)).toBeTruthy();
                    expect(DeviceTab.checkFilter("Tags", data.inputTag)).toBeTruthy();
                });

            } else {
                DeviceTab.showAllCheck("Tags").then(function () {

                    expect(DeviceTab.checkFilter("Tags", tag2)).toBeTruthy();

                });

            }


        });

        it('Delete Tag Modal', function() {

            deviceTabMain.selectDevice();

            deviceTabMain.bulkAction();
            deviceTabMain.deleteTagOption();
            if (!data.Mandatory) {
                DeviceTab.deleteTagModal(data.inputTag);
            }
            deviceTabMain.savetag();


browser.sleep(2000);
            deviceTabMain.cardEdit();

            if (!data.Mandatory){
                console.log("here")
                DeviceTab.allTagList.getText().then(function(items) {
                    expect(items.length).toBe(1);
                    expect(DeviceTab.tagName(tag2).isPresent()).toBeFalsy();
                    expect(DeviceTab.tagName(data.inputTag).isPresent()).toBeTruthy();

                });
            }else
            {
                expect(DeviceTab.tagList.isPresent()).toBeFalsy();

            }

            DeviceTab.closeEditModel();

            if (!data.Mandatory) {

                DeviceTab.showAllCheck("Tags").then(function () {

                    expect(DeviceTab.checkFilter("Tags", tag2)).toBeFalsy();
                    expect(DeviceTab.checkFilter("Tags", data.inputTag)).toBeTruthy();
                });

            } else {
                DeviceTab.showAllCheck("Tags").then(function () {

                    expect(DeviceTab.checkFilter("Tags", tag2)).toBeFalsy();

                });

            }

        });


        it('Delete Device - ' + description, function () {
            deviceTabMain.deleteDevice();
            deviceTabMain.removeSearch();
            expect(element.all(by.className('gritter-title')).getText()).toContain('Delete Device');


        });





    });




});//end of describe
