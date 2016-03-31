
/**
 * Created by vikkanna on 2/12/2016.
 */
 var deviceTabMain = require('./deviceTabMain.js');
var tableViewPage = require('./tableView_page.js');

var EC = protractor.ExpectedConditions;

var NewSessionTab = function() {
	 //------------
    this.connErrorMsg= function() {
         browser.sleep(2000);
        return  element(by.xpath("//div[@class='alert__message ng-binding']"));
    };


    this.connectTerminal= function(num) {
        browser.sleep(2000);
        return  element(by.xpath("//div[@class='cards cards--3col']/div[1]//span[@class= 'icon-terminalalt']"));
    };

    this.previous= function(num) {
        browser.sleep(2000);
        return  element(by.binding("::'_Previous_' | i18n"));
    };



    this.addDevice = function(host_name, port, deviceName,location,  Manufacture,conn_type, inputTag, notes ) {
        deviceTabMain.getIconPlus();
        browser.sleep(2000);
        deviceTabMain.setHostName(host_name);
        browser.sleep(2000);
        deviceTabMain.setPort(port);
        browser.sleep(2000);

            deviceTabMain.setDevName(deviceName);
            browser.sleep(2000);
            deviceTabMain.setLocation(location);
            browser.sleep(2000);
            deviceTabMain.setConnType(conn_type);
           browser.sleep(2000);
        deviceTabMain.getSave();
        console.log("Device Added");
    };

    this.recentSession= function(IP) {
        browser.sleep(2000);
        return  element(by.xpath('//span[@class="notification__body ng-binding"][text()="' +IP+'"]'));
    };

    this.TabConnStatus = function(IP) {
        browser.sleep(2000);
        return  element(by.xpath('//span[@class="tab-icon tab-icon--status icon-circle text-success"]'));
    };

//multiple sessions
    this.mulSelectTab = function(IP) {
        browser.sleep(2000);
        return  element(by.xpath('//a[@class= "ng-binding"]//tab-heading[@title= "'+IP+'"]'));
    };

    this.mulCrossClose = function(IP) {
        browser.sleep(2000);
        return  element(by.xpath('//a[@class= "ng-binding"]//tab-heading[@title= "'+IP+'"]//span[@class="tab-icon tab-icon--close icon-close"]'));
    };
    this.mulTabConnStatus = function(IP) {
        browser.sleep(2000);
        return element(by.xpath('//a[@class= "ng-binding"]//tab-heading[@title= "'+IP+'"]//span[@class="tab-icon tab-icon--status icon-circle text-success"]'));
    };

    this.mulDisConnect= function() {
        //browser.wait(EC.visibilityOf(element(by.xpath("//span[@class='icon-power']"))),10000);
        browser.sleep(2000);
        return element(by.xpath('//div[@class="tab-pane ng-scope active"]//span[@class="icon-power"]'));
    };
    this.mulReconn= function() {
        //browser.wait(EC.visibilityOf(element(by.xpath("//span[@class='icon-power']"))),10000);
        browser.sleep(2000);
        return element(by.xpath('//div[@class="tab-pane ng-scope active"]//button[@class="button button--primary button--small ng-binding"]'));
    };

    this.mulDisConnectSession= function() {
        this.mulDisConnect().click();
        this.conDisconnect().click();
    };

    this.mulcloseTab= function(IP) {
        this.mulCrossClose(IP).click();
        this.conDisconnect().click();
    };


    //-----------
    this.devicesTab= function() {
		 //browser.wait(EC.visibilityOf(element(by.binding("::'_Devices_' | i18n"))),10000);
        browser.sleep(2000);
        return  element(by.binding("::'_Devices_' | i18n"));
    };



   this.deleteAllDevice= function() {
	  this.selectAll().isPresent().then(function(present) {
		
     	if(present == true)
		{
			browser.sleep(2000);
            deviceTabMain.selectDevice();
            // browser.wait(element(by.className('loader loader--app-loading ng-hide')).isPresent());

            deviceTabMain.bulkAction();
            deviceTabMain.deleteOption();
            deviceTabMain.deleteButton();
			
		}
		
		
	
        });
    };





    this.selectAll= function() {
		//browser.wait(EC.visibilityOf(element(by.xpath("//div[@class='smart-toolbar__actions']//span[@class='checkbox__input']"))),10000);
        browser.sleep(2000);
        return  element(by.xpath("//div[@class='smart-toolbar__actions']//span[@class='checkbox__input']"));
    }
	
    this.newTab= function(value) {
		// browser.wait(EC.visibilityOf(element(by.xpath('//tab-heading[@title="'+value+'"]'))),10000);
        browser.sleep(2000);
        return  element(by.xpath('//tab-heading[@title="'+value+'"]'));
    }


    this.hostName= function() {
		//browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='ip']"))),10000);
        browser.sleep(2000);
        return  element(by.xpath("//input[@id='ip']"));
    }

    this.userName= function() {
		
		
		//browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='username']"))),10000);
        browser.sleep(2000);
        return element(by.xpath("//input[@id='username']"));
    };

    this.password= function() {
	  //browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='password']"))),10000);
        browser.sleep(2000);
        return  element(by.xpath("//input[@id='password']"));
    };

    this.enablePassword= function() {
		//browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='enablepassword']"))),10000);
        browser.sleep(2000);
        return  element(by.xpath("//input[@id='enablepassword']"));
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

    this.port= function() {
		//browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='port']"))),10000);
        browser.sleep(2000);
        return  element(by.xpath("//input[@id='port']"));
    };



    this.next= function() {
		//browser.wait(EC.visibilityOf(element(by.binding("portTestHasFailed ? '_Retry_' : '_Next_' | i18n"))),10000);
        browser.sleep(2000);
        return element(by.binding("portTestHasFailed ? '_Retry_' : '_Next_' | i18n"));
    }

    this.quickConnect= function() {
		//browser.wait(EC.visibilityOf(element(by.xpath("//div[@class='quick-connect']"))),10000);
        browser.sleep(2000);
        return element(by.xpath("//div[@class='quick-connect']"));
    }


    this.connect= function() {
		//browser.wait(EC.visibilityOf(element(by.binding("::'_Connect_' | i18n"))),10000);
        browser.sleep(2000);

        return  element(by.xpath("//button[@class='button button--primary button--small ng-binding']"));
       //return  element(by.binding("::'_Connect_' | i18n"));
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
	/*
	 this.HandleSelectAll = function() {
      
	  this.selectAll().isPresent().then(function(present) {

           console.log(present);
		 
	 return present;
 });
 })
	*/
	
    //------------------Close Session---------------

    this.disConnect= function() {
		//browser.wait(EC.visibilityOf(element(by.xpath("//span[@class='icon-power']"))),10000);
        browser.sleep(2000);
        return element(by.xpath("//span[@class='icon-power']"));
    };


    this.newTab= function(value) {
		//browser.wait(EC.visibilityOf(element(by.xpath('//tab-heading[@title="'+value+'"]'))),10000);
        browser.sleep(2000);
        return  element(by.xpath('//tab-heading[@title="'+value+'"]'));
    }

    this.conDisconnect= function() {
		//browser.wait(EC.visibilityOf(element(by.xpath("//div[@class='modal-footer ng-scope']/button[2]"))),10000);
        browser.sleep(2000);
        return element(by.xpath("//div[@class='modal-footer ng-scope']/button[2]"));
    };

    this.cancelDisconnect= function() {
		//browser.wait(EC.visibilityOf(element(by.xpath("//div[@class='modal-footer ng-scope']/button[1]"))),10000);
        browser.sleep(2000);
        return  element(by.xpath("//div[@class='modal-footer ng-scope']/button[1]"));
    };

    this.crossClose= function() {
		//browser.wait(EC.visibilityOf(element(by.xpath("//span[@class= 'tab-icon tab-icon--close icon-close']"))),10000);
        browser.sleep(2000);
        return  element(by.xpath("//span[@class= 'tab-icon tab-icon--close icon-close']"));
    };
//----------------

    this.reConnSession= function() {
		//browser.wait(EC.visibilityOf(element(by.xpath("//span[@ng-if='isDisconnected()']"))),10000);
        browser.sleep(2000);
        return  element(by.xpath("//span[@ng-if='isDisconnected()']"));
    };

    this.logCapture= function(status) {
		//browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="'+status+'"]'))),10000);
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
		//browser.wait(EC.visibilityOf(element(by.xpath("//input[@id='quickIP']"))),10000);
        browser.sleep(2000);
        return element(by.xpath("//input[@id='quickIP']"));
    };

    this.connectBtn= function() {
		//browser.wait(EC.visibilityOf(element(by.binding("::'_Connect_' | i18n"))),10000);
        browser.sleep(2000);
        return element(by.binding("::'_Connect_' | i18n"));
    };


    this.quickConnectSess = function(host_name, user_name, pass, conn_type, ELF)  {
       //have to remove this
        this.quickConnText().clear();
        this.quickConnText().sendKeys(host_name);
		
		
        this.connectBtn().click();
		
        this.userName().sendKeys(user_name);

        this.password().sendKeys(pass);

       
        this.connect().click();
	
        this.handleAlert();

 
    };

//-------------------FirstTimeAlert--------------
    this.alertBody= function() {
		//browser.wait(EC.visibilityOf(element(by.binding("::'_SASessionConnect_' | i18n"))),10000);
        browser.sleep(4000);
        return element(by.binding("::'_SASessionConnect_' | i18n"));
    };

    this.aleConn= function() {
		//browser.wait(EC.visibilityOf(element(by.binding("::'_Connect_' | i18n"))),10000);
        browser.sleep(3000);
        //return element(by.binding("::'_Connect_' | i18n"));
        return  element(by.xpath("//button[@class='button button--primary button--small ng-binding']"));
    };
    this.alertCancel= function() {
		//browser.wait(EC.visibilityOf(element(by.binding("::'_Cancel_' | i18n"))),10000);
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
            if(conn_type == 'TELNET') {
                this.telnetRadio().click();
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

    this.session_with_shortname = function(host_name, user_name, password, conn_type) {
        this.newTab("New Session").click();
        this.hostName().sendKeys(host_name);
        if(conn_type == 'SSH') {
            this.sshRadio().click();
            //browser.sleep(9000);
            this.next().click();
            this.userName().sendKeys(user_name);
            browser.sleep(9000);
        }
    };

    this.session_without_port = function(host_name, conn_type) {
        this.newTab("New Session").click();
        this.hostName().sendKeys(host_name);
        if(conn_type == 'SSH') {
            this.sshRadio().click();
            this.port().clear();

        }
        else if (conn_type == 'TELNET') {
            this.telnetRadio().click();
            this.port().clear();

        }
        browser.sleep(9000);
    };

    this.session_with_invalid_ip = function (host_name, conn_type){
        this.newTab("New Session").click();
        this.hostName().sendKeys(host_name);
        if(conn_type == 'SSH') {
            this.sshRadio().click();
        }
        else if (conn_type == 'TELNET') {
            this.telnetRadio().click();
        }
        browser.sleep(5000);
    }

    this.session_with_invalid_username_password = function (host_name, user_name, pass, conn_type) {
        this.newTab("New Session").click();
        this.hostName().sendKeys(host_name);
        if(conn_type == 'SSH') {
            this.sshRadio().click();
        }
        this.next().click();
        this.userName().sendKeys(user_name);
        this.password().sendKeys(pass);
        this.connect().click();
        browser.sleep(9000);
    }

    this.session_with_invalid_port = function(host_name, conn_type, port) {
        this.newTab("New Session").click();
        this.hostName().sendKeys(host_name);
        if(conn_type == 'SSH') {
            this.sshRadio().click();
            this.port().clear();
            this.port().sendKeys(port);

        }
        else if (conn_type == 'TELNET') {
            this.telnetRadio().click();
            this.port().clear();
            this.port().sendKeys(port);
        }
        browser.sleep(9000);
    };

    // Invalid IP/Hostname

    this.invalidIP = function() {
        browser.sleep(2000);
        return element(by.xpath("//div[@class='help-block text-danger']"));
    };


//Added by Sonal



};


module.exports = new NewSessionTab();
