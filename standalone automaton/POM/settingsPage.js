/**
 * Created by vikkanna on 2/12/2016.
 */



var settingsTabPage = function() {


    this.settingsTab= function() {
		//browser.wait(EC.visibilityOf(element(by.binding("::'_Settings_' | i18n"))),10000);
        browser.sleep(2000);
        return  element(by.binding("::'_Settings_' | i18n"));
    }

    this.devicesTab= function() {
		//browser.wait(EC.visibilityOf(element(by.binding("::'_Devices_' | i18n"))),10000);
        browser.sleep(2000);
        return  element(by.binding("::'_Devices_' | i18n"));
    }



//----General Section----

    this.scrollBuffer= function() {
		//browser.wait(EC.visibilityOf(element(by.xpath("//input[@ng-model= 'scrollback.value']"))),10000);
        browser.sleep(2000);
        return  element(by.xpath("//input[@ng-model= 'scrollback.value']"));
    }



    this.ErrorMSG= function(msg) {
		//browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='"+msg+"']/parent::*[@class='help-block text-danger ng-hide']"))),10000);
        browser.sleep(2000);
        return  element(by.xpath("//span[text()='"+msg+"']/parent::*[@class='help-block text-danger ng-hide']"));
    };


    this.sshRadio= function() {
		//browser.wait(EC.visibilityOf(element(by.binding("::'_SSH_' | i18n"))),10000);
        browser.sleep(2000);
        return  element(by.binding("::'_SSH_' | i18n"));
    };

    this.telnetRadio= function() {
		//browser.wait(EC.visibilityOf(element(by.binding("::'_TELNET_' | i18n"))),10000);
        browser.sleep(2000);
        return  element(by.binding("::'_TELNET_' | i18n"));
    };

    this.SSHClicked= function() {
		//browser.wait(EC.visibilityOf(element(by.xpath('//span[@ng-bind="'+"::'_SSH_' | i18n"+'"]/parent::*/input[@checked="checked"]'))),10000);
        browser.sleep(2000);
        return  element(by.xpath('//span[@ng-bind="'+"::'_SSH_' | i18n"+'"]/parent::*/input[@checked="checked"]'));
    };

    this.telnetClicked= function() {
		//browser.wait(EC.visibilityOf(element(by.xpath('//span[@ng-bind="'+"::'_TELNET_' | i18n"+'"]/parent::*/input[@checked="checked"]'))),10000);
        browser.sleep(2000);
        return  element(by.xpath('//span[@ng-bind="'+"::'_TELNET_' | i18n"+'"]/parent::*/input[@checked="checked"]'));
    };



    /*
    this.CHH= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_SACHH_' | i18n"));
    };
*/


    this.displayLevelDanger= function() {
		//browser.wait(EC.visibilityOf(element(by.binding("::'_Danger_' | i18n"))),10000);
        browser.sleep(2000);
        return  element(by.binding("::'_Danger_' | i18n"));
    };
    this.displayLevelWarning= function() {
		//browser.wait(EC.visibilityOf(element(by.binding("::'_Warning_' | i18n"))),10000);
        browser.sleep(2000);
        return  element(by.binding("::'_Warning_' | i18n"));
    };

    this.displayLevelInfo= function() {
		//browser.wait(EC.visibilityOf(element(by.binding("::'_Info_' | i18n"))),10000);
        browser.sleep(2000);
        return  element(by.binding("::'_Info_' | i18n"));
    };

    this.consoleSelBeh= function() {
		//browser.wait(EC.visibilityOf(element(by.binding("::'_SAConsoleSelectionBehavior_' | i18n"))),10000);
        browser.sleep(2000);
        return  element(by.binding("::'_SAConsoleSelectionBehavior_' | i18n"));
    };
    this.getdropDownText =function(label) {
		//browser.wait(EC.visibilityOf(element.all(by.xpath("//label[text()='"+label+"']/parent::*/select/child::*"))),10000);
        browser.sleep(2000);
        return  element.all(by.xpath("//label[text()='"+label+"']/parent::*/select/child::*"));
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
		//browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='dirValue']"))),10000);
        browser.sleep(2000);
        return  element(by.xpath("//input[@id='dirValue']"));
    };





//----Proxy----
    this.protocollab= function() {
		//browser.wait(EC.visibilityOf(element(by.binding("::'_Protocol_' | i18n"))),10000);
        browser.sleep(2000);
        return  element(by.binding("::'_Protocol_' | i18n"));
    };
    this.protocolInp= function() {
		//browser.wait(EC.visibilityOf(element(by.binding("::'_Protocol_' | i18n"))),10000);
        browser.sleep(2000);
        return  element(by.binding("::'_Protocol_' | i18n"));
    };


    this.hostLab= function() {
		//browser.wait(EC.visibilityOf(element(by.binding("::'_Host_' | i18n"))),10000);
        browser.sleep(2000);
        return  element(by.binding("::'_Host_' | i18n"));
    };

    this.hostLabInp= function() {
		//browser.wait(EC.visibilityOf(element(by.xpath("//input[@name='proxy_host']"))),10000);
        browser.sleep(2000);
        return  element(by.xpath("//input[@name='proxy_host']"));
    };

    this.portLab= function() {
		//browser.wait(EC.visibilityOf(element(by.binding("::'_Port_' | i18n"))),10000);
        browser.sleep(2000);
        return  element(by.binding("::'_Port_' | i18n"));
    };

    this.portInp= function() {
		//browser.wait(EC.visibilityOf(element(by.xpath("//input[@name= 'proxy_port']"))),10000);
        browser.sleep(2000);
        return  element(by.xpath("//input[@name= 'proxy_port']"));
    };




//----Security----
    this.masterPass= function() {
		//browser.wait(EC.visibilityOf(element(by.binding("::'_SAMasterPasswordTitle_' | i18n"))),10000);
        browser.sleep(2000);
        return  element(by.binding("::'_SAMasterPasswordTitle_' | i18n"));
    };

    this.masterPassCheck= function() {
		//browser.wait(EC.visibilityOf(element(by.xpath('//label[@title= "Master Password"]/parent::*//span[@class="checkbox__input"]'))),10000);
        browser.sleep(2000);
        return  element(by.xpath('//label[@title= "Master Password"]/parent::*//span[@class="checkbox__input"]'));
    };



//----Apperance----
    this.theme =function() {
		//browser.wait(EC.visibilityOf(element(by.xpath("//select[@id='terminal-theme']"))),10000);
        browser.sleep(2000);
        return  element(by.xpath("//select[@id='terminal-theme']"));
    };

    this.themeValue =function() {
		//browser.wait(EC.visibilityOf(element.all(by.xpath("//select[@id='terminal-theme']/child::*"))),10000);
        browser.sleep(2000);
        return  element.all(by.xpath("//select[@id='terminal-theme']/child::*"));
    };


    this.consoleBGColor =function() {
		//browser.wait(EC.visibilityOf(element.all(by.xpath("//div[contains(text(),'Select a theme from the menu above')]/parent::*"))),10000);
        browser.sleep(2000);
        return  element.all(by.xpath("//div[contains(text(),'Select a theme from the menu above')]/parent::*"));
    };

    this.consoleTextColor =function() {
		//browser.wait(EC.visibilityOf(element.all(by.xpath("//div[contains(text(),'Select a theme from the menu above')]"))),10000);
        browser.sleep(2000);
        return  element.all(by.xpath("//div[contains(text(),'Select a theme from the menu above')]"));
    };

    this.consoleSessBGColor =function() {
		//browser.wait(EC.visibilityOf(element.all(by.xpath("//div[@class='console__body']"))),10000);
        browser.sleep(2000);
        return  element.all(by.xpath("//div[@class='console__body']"));
    };

    this.consoleSessTextColor =function() {
		//browser.wait(EC.visibilityOf(element.all(by.xpath("//div[@id='term_1']"))),10000);
        browser.sleep(2000);
        return  element.all(by.xpath("//div[@id='term_1']"));
    };










    this.OvalBtnChecked= function(value) {
		//browser.wait(EC.visibilityOf(element(by.xpath("//label[text() ='"+value+"']/parent::*//input[@checked='checked']"))),10000);
        browser.sleep(2000);
        return  element(by.xpath("//label[text() ='"+value+"']/parent::*//input[@checked='checked']"));
    }

    this.OvalButton= function(value) {
		//browser.wait(EC.visibilityOf(element(by.xpath("//label[text() ='"+value+"']/parent::*//div[@class='switch__input']"))),10000);
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
                console.log("Oval Button ON")
                OvalBtn.click();
            }
            else if (status == "OFF"){
                console.log("Oval Button OFF")
            }

        });

    };

};


module.exports = new settingsTabPage();

