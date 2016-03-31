/**
 * Created by vikkanna on 3/17/2016.
 */

var using = require('jasmine-data-provider');
var path = require('path');
var settingsTabPage = require('./settingsPage.js');

var uploadPage = function() {


//Uploadfile
this.uploaddialogue = element(By.xpath("//div[@class= 'modal-content']"));
this.skipAllupload = element(by.buttonText("Skip all"));
this.closeUpload = element(by.css('button[ng-click="skipall();"]'));
this.Okupload = element(by.buttonText("OK"));





this.uploadDevice=function(fileToUpload, protocol, option)
{
    browser.sleep(2000);
    this.upload_arrow().click();
    if(option == "ImportFromCSV") {
        this.import_from_putty().click();
        this.manuaImport().click();
    }
    else if(option == "ImportFromSecureCRT") {
        this.import_secureCRT().click();
    }

    if(protocol == "SSH")
    {
        this.details().click();
        settingsTabPage.telnetRadio().click();
        console.log("TELNET Protocol Selected");
    }
     else if(protocol == "TELNET")
        {   this.details().click();
            settingsTabPage.sshRadio().click();
            console.log("SSH Protocol Selected");
        }

    else if(protocol == "BOTH")
    {
console.log("Both Protocol Selected");
    }

    var EC = protractor.ExpectedConditions;
   // browser.wait(EC.visibilityOf(this.uploaddialogue), 5000);
    browser.executeScript('$("input#file").removeAttr("class");');
    var absolutePath = path.resolve(__dirname, fileToUpload);
    $('input[type="file"]').sendKeys(absolutePath);
    browser.sleep(2000);
    this.conf_upload().click();
    //Remove this
    var ele= this.conf_upload();
    this.conf_upload().isPresent().then(function(text){
        if(text ==true)
        {
            ele.click();
        }
    });



}

//Import Page Objects

    this.upload_arrow= function() {
        browser.sleep(2000);
        return  element(by.xpath("//span[@class='icon-upload']"));
    };



    this.import_from_csv= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_ImportFrom_' | i18n:'CSV'"));
    };
    this.details= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_ViewDetails_' | i18n"));
    };
    this.import_from_putty= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_ImportFrom_' | i18n:'PuTTY'"));
    };

    this.manuaImport= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_SASAManualImport_' | i18n"));
    };

    this.autoImport= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_SASAAutoImport_' | i18n"));
    };



    this.conf_upload= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_Upload_' | i18n"));
    };

    this.hideDetailsHidd= function() {
        browser.sleep(2000);
        return element(by.xpath("//a[@class='ng-binding ng-hide']"));
    };

    this.showDetailsHidd= function() {
        browser.sleep(2000);
        return element(by.xpath("//a[@class='ng-binding ng-hide']"));
    };

    this.cancel= function() {
        browser.sleep(2000);
        return element(by.xpath("//button[@name= 'Cancel']"));
    };
//----------import for secureCRT
    this.import_secureCRT= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_ImportFrom_' | i18n:'SecureCRT'"));
    };

};


module.exports = new uploadPage();