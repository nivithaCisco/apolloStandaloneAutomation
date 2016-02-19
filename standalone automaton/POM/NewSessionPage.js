
/**
 * Created by vikkanna on 2/12/2016.
 */
var EC = protractor.ExpectedConditions;

var NewSessionTab = function() {

    this.newTab= function(value) {
        browser.sleep(2000);
        return  element(by.xpath('//tab-heading[@title="'+value+'"]'));
    }


    this.hostName= function() {
        browser.sleep(2000);
        return  element(by.xpath("//input[@id='ip']"));
    }

    this.userName= function() {
        browser.sleep(2000);
        return element(by.xpath("//input[@id='username']"));
    };

    this.password= function() {
        browser.sleep(2000);
        return  element(by.xpath("//input[@id='password']"));
    };

    this.enablePassword= function() {
        browser.sleep(2000);
        return  element(by.xpath("//input[@id='enablepassword']"));
    };


    this.sshRadio= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_SSH_' | i18n"));
    };

    this.telnetRadio= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_TELNET_' | i18n"));
    };

    this.port= function() {
        browser.sleep(2000);
        return  element(by.xpath("//input[@id='port']"));
    };



    this.next= function() {
        browser.sleep(2000);
        return element(by.binding("portTestHasFailed ? '_Retry_' : '_Next_' | i18n"));
    }

    this.quickConnect= function() {
        browser.sleep(2000);
        return element(by.xpath("//div[@class='quick-connect']"));
    }


    this.connect= function() {
        browser.sleep(2000);
        return  element(by.binding("::'_Connect_' | i18n"));
    };



    this.session_connected = function() {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath("//div[@class= 'alert alert--success']"))),90000);
        element(by.xpath("//div[@class= 'alert alert--success']")).getText().then(function(text){
            expect(text).toEqual('Session Connected');
            browser.sleep(2000);
        })

    };



    this.session_dis_connected = function() {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath("//div[@class='alert alert--danger']"))),90000);
        element(by.xpath("//div[@class='alert alert--danger']")).getText().then(function(text){
            expect(text).toEqual('Session Disconnected');
            browser.sleep(2000);
        })

    };




    this.createNewSession = function(host_name, user_name, pass, conn_type, ELF) {

        this.newTab("New Session").click();
        this.hostName().sendKeys(host_name);
        if(conn_type == 'SSH') {
            this.sshRadio().click();
        }
        else if (conn_type == 'TELNET') {
            this.telnetRadio().click();
        }
        if(ELF=="ON") {
            this.next().click();
        }
        this.userName().sendKeys(user_name);
        this.password().sendKeys(pass);

        this.connect().click();
        this.handleAlert();

    };

    //------------------Close Session---------------

    this.disConnect= function() {
        browser.sleep(2000);
        return element(by.xpath("//span[@class='icon-power']"));
    };


    this.newTab= function(value) {
        browser.sleep(2000);
        return  element(by.xpath('//tab-heading[@title="'+value+'"]'));
    }

    this.conDisconnect= function() {
        browser.sleep(2000);
        return element(by.xpath("//div[@class='modal-footer ng-scope']/button[2]"));
    };

    this.cancelDisconnect= function() {
        browser.sleep(2000);
        return  element(by.xpath("//div[@class='modal-footer ng-scope']/button[1]"));
    };

    this.crossClose= function() {
        browser.sleep(2000);
        return  element(by.xpath("//span[@class= 'tab-icon tab-icon--close icon-close']"));
    };
//----------------

    this.reConnSession= function() {
        browser.sleep(2000);
        return  element(by.xpath("//span[@ng-if='isDisconnected()']"));
    };

    this.logCapture= function(status) {
        browser.sleep(2000);
        return  element(by.xpath('//span[text()="'+status+'"]'));
    };

//---------------------

    this.disConnectSession= function() {
        this.disConnect().click();
        this.conDisconnect().click();
    };

    this.closeTab= function() {
        this.crossClose().click();
        this.conDisconnect().click();
    };

    //------------------Quick Connect Session---------------
    this.quickConnText= function() {
        browser.sleep(2000);
        return element(by.xpath("//input[@id='quickIP']"));
    };

    this.connectBtn= function() {
        browser.sleep(2000);
        return element(by.binding("::'_Connect_' | i18n"));
    };


    this.quickConnect = function(host_name, user_name, pass) {

        this.quickConnText().sendKeys(host_name);
        this.connectBtn().click();
        this.userName().sendKeys(user_name);
        this.password().sendKeys(pass);
        this.connect().click();
        this.handleAlert();

    };

//-------------------FirstTimeAlert--------------
    this.alertBody= function() {
        browser.sleep(4000);
        return element(by.binding("::'_SASessionConnect_' | i18n"));
    };

    this.aleConn= function() {
        browser.sleep(3000);
        return element(by.binding("::'_Connect_' | i18n"));
    };
    this.alertCancel= function() {
        browser.sleep(2000);
        return element(by.binding("::'_Cancel_' | i18n"));
    };


    this.handleAlert= function() {
        var ele= this.aleConn();
        this.aleConn().isPresent().then(function(present) {

            if (present) {

                browser.sleep(10000);
                ele.click();

            }
            else
            {

            }

        });

    };

    this.getVersionTerminal=element(by.xpath('//div[contains(text(),"- Version: ")]'));

//Added by Sonal
    this.session_without_ip = function(conn_type) {
        this.newTab("New Session").click();
        if(conn_type == 'SSH') {
            this.sshRadio().click();
        }
        else if (conn_type == 'TELNET') {
            this.telnetRadio().click();
        }
        browser.sleep(9000);
    };

    this.session_without_username = function(host_name, pass, conn_type) {
        this.newTab("New Session").click();
        this.hostName().sendKeys(host_name);
        if(conn_type == 'SSH') {
            this.sshRadio().click();
            this.next().click();
            this.password().sendKeys(pass);
            browser.sleep(9000);
            //this.handleAlert();
        }
        //browser.sleep(9000);
    };

    this.session_without_password = function(host_name, user_name, conn_type) {
        this.newTab("New Session").click();
        this.hostName().sendKeys(host_name);
        if(conn_type == 'SSH') {
            this.sshRadio().click();
            browser.sleep(9000);
            this.next().click();
            this.userName().sendKeys(user_name);
            browser.sleep(9000);
        }
    };
//Added by Sonal


};


module.exports = new NewSessionTab();
