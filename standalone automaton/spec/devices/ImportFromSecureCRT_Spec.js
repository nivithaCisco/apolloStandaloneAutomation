/**
 * Created by vikkanna on 3/28/2016.
 */

var DeviceTab = require('./../../POM/deviceTab.js');
var fileManual   = './Data/downloadFIle.csv';
var deviceTab = require('./../../POM/deviceTab.js');
var newSess = require('./../../POM/NewSessionPage.js');
var deviceTabMain = require('./../../POM/deviceTabMain.js');
var settingsTabPage = require('./../../POM/settingsPage.js');
var AppDataProvider = require('./../../Data/data.js');
var using = require('jasmine-data-provider');
var tableViewPage = require('./../../POM/tableView_page.js');
var upload = require('./../../POM/upload_page.js');

var fs = require('fs');



describe('Import From SecureCRT', function () {

    it('test ', function ()
    {
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.css('span[class= "icon-plus"]'))),900000);
        tableViewPage.handleTableView('GRID');
        newSess.deleteAllDevice();
    });
/*

    it('Verify Import From SecureCRT option is present', function ()
    {

        expect(upload.upload_arrow().isPresent()).toBe(true);
        upload.upload_arrow().click();
        expect(upload.import_secureCRT().isPresent()).toBe(true);
        browser.sleep(5000);
    });

    it('Verify all the elements of Import From Putty modal is present ', function ()
    {   upload.import_secureCRT().click();
        expect(upload.details().isPresent()).toBe(true);
        expect(upload.showDetailsHidd().isPresent()).toBe(true);

        upload.details().click();
        expect(upload.hideDetailsHidd().isPresent()).toBe(true);
        expect(settingsTabPage.sshRadio().isPresent()).toBe(true);
        expect(settingsTabPage.telnetRadio().isPresent()).toBe(true);
        expect(upload.conf_upload().isEnabled()).toBe(false);
        expect(upload.cancel().isPresent()).toBe(true);
        upload.cancel().click();
    });

*/

    using(AppDataProvider.ImportWithSavedCredSec, function (data, description) {

        it('Import From SecureCRT: ', function ()

        {

            newSess.deleteAllDevice();
            if(description == "Import with existing duplicates")
            {
                browser.sleep(2000);
                upload.uploadDevice(data.ToUpload, data.protocol,'ImportFromSecureCRT');
            }
            browser.sleep(2000);
            upload.uploadDevice(data.ToUpload, data.protocol, 'ImportFromSecureCRT');
            browser.sleep(2000);
            var data_one;
            try {

                data_one = fs.readFileSync(fileManual,'utf-8');
                var EC = protractor.ExpectedConditions;
                // browser.wait(EC.visibilityOf(element(by.xpath("//div[@class='smart-toolbar__actions']//span[@class='checkbox__input']"))),900000);
                browser.sleep(6000);
                DeviceTab.DownloadV(data_one,"../Resources/downloads/devices.csv",data.auto_it, data.delete);
                browser.sleep(200);

            } catch (e) {
                console.log(e)
            }



        });



        it('Import From SecureCRT'+ description, function () {
            var exp;
            try {


                exp = fs.readFileSync(data.Exp ,'utf-8');
                browser.sleep(5000);
                if(fs.existsSync(data.download_loc)) {
                    console.log("correct");
                    expect(fs.readFileSync(data.download_loc, {encoding: 'utf8'})).toEqual(exp);
                }
                else
                {
                    console.log("this is errr");
                }


            } catch (e) {
                console.log(e)
            }


        });

    });

    /*

    using(AppDataProvider.ImportWithSavedCred, function (data, description) {
        it('Import session with saved credentials', function ()

        {  newSess.deleteAllDevice();
            settingsTabPage.settingsTab().click();
            settingsTabPage.handleOvalButton("Enhanced Login Flow","ON");
            newSess.devicesTab().click();


            browser.sleep(2000);
            //-----
            upload.uploadDevice(data.ToUpload, data.protocol, 'ImportFromSecureCRT');
            browser.sleep(9000);


            newSess.connectTerminal().click();
            browser.sleep(9000);
            var usetwo = element(by.model("tab._console.session.username"));

            usetwo.getAttribute("value").then(function(text){
                expect(text).toEqual("");
            })

            var passtwo = element(by.model("tab._console.session.password"));

            passtwo.getAttribute("value").then(function(text){
                expect(text).toEqual("");
            })
            newSess.crossClose().click();
            browser.sleep(90000);
        });

    });
*/

    using(AppDataProvider.ImportWithSavedCred, function (data, description) {
        it('Import session with saved credentials', function ()

        {  newSess.deleteAllDevice();
            settingsTabPage.settingsTab().click();
            settingsTabPage.handleOvalButton("Enhanced Login Flow","ON");
            newSess.devicesTab().click();


            browser.sleep(2000);
            //-----
            upload.uploadDevice(data.ToUpload, data.protocol, 'ImportFromSecureCRT');
            browser.sleep(9000);


            newSess.connectTerminal().click();
            browser.sleep(9000);
            var usetwo = element(by.model("tab._console.session.username"));

            usetwo.getAttribute("value").then(function(text){
                expect(text).toEqual("");
            })

            var passtwo = element(by.model("tab._console.session.password"));

            passtwo.getAttribute("value").then(function(text){
                expect(text).toEqual("");
            })
            newSess.crossClose().click();
            browser.sleep(90000);
        });

    });
});