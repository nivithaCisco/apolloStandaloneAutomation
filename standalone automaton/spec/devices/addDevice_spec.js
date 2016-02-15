/**
 * Created by nivmanoh on 2/8/2016.
 */
var deviceTabMain = require('./../../POM/deviceTabMain.js');
var AppDataProvider = require('./../../Data/data.js');
var using = require('jasmine-data-provider');

describe('Add Device tests', function () {

    using(AppDataProvider.AddDeviceDataProvider, function (data, description) {
        it('Device Page_Add Device', function () {
            browser.sleep(10000);

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





        it('Add Tag', function() {


            deviceTabMain.addTagBulk("checlk");
            expect(element.all(by.className('gritter-title')).getText()).toContain('Device Updated');

        });

        it('Delete Device - ' + description, function () {
            browser.sleep(3000);
            deviceTabMain.deleteDevice();
            deviceTabMain.removeSearch();
            expect(element.all(by.className('gritter-title')).getText()).toContain('Delete Device');


        });





    });




});//end of describe
