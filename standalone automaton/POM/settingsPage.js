/**
 * Created by vikkanna on 2/12/2016.
 */



var settingsTabPage = function() {


    this.settingsTab= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_Settings_' | i18n"));
    }
//----General Section----

    this.scrollBuffer= function() {
        browser.sleep(2000);
        return  element(by.xpath("//input[@class='ng-pristine ng-untouched ng-valid ng-valid-min ng-valid-max']"));
    }

    this.sshRadio= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_SSH_' | i18n"));
    };

    this.telnetRadio= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_TELNET_' | i18n"));
    };
    /*
    this.CHH= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_SACHH_' | i18n"));
    };
*/


    this.displayLevelDanger= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_Danger_' | i18n"));
    };
    this.displayLevelWarning= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_Warning_' | i18n"));
    };

    this.displayLevelInfo= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_Info_' | i18n"));
    };

    this.consoleSelBeh= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_SAConsoleSelectionBehavior_' | i18n"));
    };
/*
    this.ReConnWithCred= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_SAReconnectCredentialsLabel_' | i18n"));
    };

    this.autoSessCap= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_SAEnableSessionCapture_' | i18n"));
    };

*/
    this.logDir= function() {
        browser.sleep(2000);
        return  element(by.xpath("//input[@id='dirValue']"));
    };





//----Proxy----
    this.protocollab= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_Protocol_' | i18n"));
    };
    this.protocolInp= function() {
        browser.sleep(2000);
        return  element(by.xpath("//select[@class='ng-pristine ng-untouched ng-valid ng-valid-min ng-valid-max']"));
    };


    this.hostLab= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_Host_' | i18n"));
    };

    this.hostLabInp= function() {
        browser.sleep(2000);
        return  element(by.xpath("//input[@name='proxy_host']"));
    };

    this.portLab= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_Port_' | i18n"));
    };

    this.portInp= function() {
        browser.sleep(2000);
        return  element(by.xpath("//input[@name= 'proxy_port']"));
    };



//----Security----
    this.masterPass= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_SAMasterPasswordTitle_' | i18n"));
    };

    this.masterPassCheck= function() {
        browser.sleep(2000);
        return  element(by.xpath('//label[@title= "Master Password"]/parent::*//span[@class="checkbox__input"]'));
    };



//----Apperance----
    this.theme =function() {
        browser.sleep(2000);
        return  element(by.binding("::'_Theme_' | i18n"));
    };


//select[@id='terminal-theme']/option[@value][position()=3]









    this.OvalBtnChecked= function(value) {
        browser.sleep(2000);
        return  element(by.xpath("//label[text() ='"+value+"']/parent::*//input[@checked='checked']"));
    }

    this.OvalButton= function(value) {
        browser.sleep(2000);
        return  element(by.xpath("//label[text() ='"+value+"']/parent::*//div[@class='switch__input']"));
    }


    this.handleOvalButton= function(button, status) {


        var OvalBtn= this.OvalButton(button);
        this.OvalBtnChecked(button).isPresent().then(function(present) {

            if (present) {


                OvalBtn.click();
            }
            if(status == "ON")
            {
                console.log("ELF ON")
                OvalBtn.click();
            }
            else if (status == "OFF"){
                console.log("ELF OFF")
            }

        });

    };

};


module.exports = new settingsTabPage();

