/**
 * Created by vikkanna on 3/8/2016.
 */

var deviceTab = require('./../../../../../MyJabberFiles/vikkanna@cisco.com/Thursday/apolloStandaloneAutomation-QANivitha/standalone automaton/POM/deviceTab.js');
var newSess = require('./../../../../../MyJabberFiles/vikkanna@cisco.com/Thursday/apolloStandaloneAutomation-QANivitha/standalone automaton/POM/NewSessionPage.js');
var deviceTabMain = require('./../../../../../MyJabberFiles/vikkanna@cisco.com/Thursday/apolloStandaloneAutomation-QANivitha/standalone automaton/POM/deviceTabMain.js');
var settingsTabPage = require('./../../POM/settingsPage.js');
var AppDataProvider = require('./../../Data/data.js');
var using = require('jasmine-data-provider');
var tableViewPage = require('./../../POM/tableView_page.js');

describe('New Session tab ', function () {

    var EC = protractor.ExpectedConditions;


    it('test ', function ()
    {
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.css('span[class= "icon-plus"]'))),900000);
        tableViewPage.handleTableView('GRID');
    });


    it('Verify whether host name field is selected by default while New Session tab is clicked', function ()
    {
        settingsTabPage.settingsTab().click();
        settingsTabPage.handleOvalButton("Enhanced Login Flow","ON");
        newSess.newTab("New Session").click();
        newSess.hostName().getAttribute("ng-model-options").then(function(text){
            expect(text).toContain('default');
            browser.sleep(2000);
        })
    });

    it('Verify the default port is displayed for SSH', function ()
    {


        newSess.sshRadio().click();
        var elm = element(by.model("tab._console.session.port"));

        elm.getAttribute("value").then(function(text){
            expect(text).toEqual('22');;
        })


    });

    it('Verify the default port is displayed for Telnet', function ()
    {
        newSess.telnetRadio().click();
        var elm = element(by.model("tab._console.session.port"));

        elm.getAttribute("value").then(function(text){
            expect(text).toEqual('23');;
        })


    });


    it('Verify all the field of Session login page is displayed', function ()
    {

        browser.wait(EC.visibilityOf(newSess.hostName()),5000);
        expect(newSess.hostName().isPresent()).toBe(true);
        expect(newSess.sshRadio().isPresent()).toBe(true);
        expect(newSess.telnetRadio().isPresent()).toBe(true);
        expect(newSess.port().isPresent()).toBe(true);

    });

    it('Verify all the field of Session login page is displayed in the second step', function ()
    {
        newSess.sshRadio().click();
        newSess.hostName().sendKeys('172.18.192.14');
        newSess.next().click();
        browser.wait(EC.visibilityOf(newSess.userName()),5000);
        expect(newSess. userName().isPresent()).toBe(true);
        expect(newSess. password().isPresent()).toBe(true);
        expect(newSess. enablePassword().isPresent()).toBe(true);

    });

    it('Verify the new tab is updated to HostName', function ()
    {
        expect(newSess.newTab("172.18.192.14").getText()).toEqual('172.18.192.14');
    });


    it('Verify the new tab is closable', function ()
    {
        newSess.crossClose().click();
        browser.sleep(2000);
    });


    using(AppDataProvider.newSession, function (data, description) {
        it('Verify the session is Connected'+ description, function ()
        {
            newSess.createNewSession(data.hostname_ip,data.user_name, data.password, data.conn_type, "ON");
            newSess.session_connected();

        });

        it('Verify the session is Closable', function ()
        {

            newSess. disConnectSession();
            newSess.session_dis_connected();
            newSess.closeTab();


        });



    });

    using(AppDataProvider.newSession, function (data, description) {
        it('Verify the session Connection for multiple sessions'+ description, function ()
        {
            newSess. createNewSession(data.hostname_ip,data.user_name, data.password, data.conn_type,"ON");
            newSess.session_connected();


        });


    });

    using(AppDataProvider.mulSessDisconn, function (data, description) {
    it('Verify unInterrupted session connection for multiple session'+ description, function ()
    {   newSess.mulSelectTab(data.hostname_ip).click();
          expect(newSess.mulTabConnStatus(data.hostname_ip).isPresent()).toBe(true);
          expect(newSess.mulSelectTab(data.hostname_ip).isPresent()).toBe(true);
      newSess. mulDisConnectSession();
       newSess.session_dis_connected();
       expect(newSess.mulCrossClose(data.hostname_ip).isPresent()).toBe(true);
       newSess.mulcloseTab(data.hostname_ip);


    });
    });


    using(AppDataProvider.moreThanTenSessconn, function (data, description) {
        it('Verify the session Connection for multiple sessions'+ description, function ()
        {
            newSess. createNewSession(data.hostname_ip,data.user_name, data.password, data.conn_type,"ON");
            newSess.session_connected();


        });


    });

    using(AppDataProvider.moreThanTenSessconn, function (data, description) {
        it('Verify performance is not affected for more than ten session connection'+ description, function ()
        {
            newSess.mulSelectTab(data.hostname_ip).click();
            expect(newSess.mulTabConnStatus(data.hostname_ip).isPresent()).toBe(true);
            expect(newSess.mulSelectTab(data.hostname_ip).isPresent()).toBe(true);
            newSess. mulDisConnectSession();
            newSess.session_dis_connected();
            expect(newSess.mulCrossClose(data.hostname_ip).isPresent()).toBe(true);
            newSess.mulcloseTab(data.hostname_ip);


        });
    });



    it('Verify Ip is updated to quick Connect form', function ()
    {   newSess.quickConnText().clear();
        newSess.quickConnText().sendKeys("172.18.192.14");
        newSess.connectBtn().click();
        expect(newSess.newTab("172.18.192.14").getText()).toEqual("172.18.192.14");

    });

    it('Verify the user is directly taken to Authentication form', function ()
    {
        expect(newSess. userName().isPresent()).toBe(true);
        newSess.crossClose().click();

    });

    using(AppDataProvider.newSession, function (data, description) {

        it('Verify Device connection through Quick Connect '+ description, function ()
			{  
			settingsTabPage.settingsTab().click();

			 if(data.conn_type == 'SSH') {
				newSess.sshRadio().click();
			}
			else if (data.conn_type == 'TELNET') {
				newSess.telnetRadio().click();
			}
			newSess.devicesTab().click();

			newSess.quickConnectSess(data.hostname_ip,data.user_name, data.password, data.conn_type,"ON");
		    newSess.session_connected();
            newSess. mulDisConnectSession();
            newSess.session_dis_connected();
            newSess.mulcloseTab(data.hostname_ip);

        });

    });//End of Data Provider



    using(AppDataProvider.addDevice, function (data, description) {

        it('Verify the known connection info is updated on the session connection form device pane', function () {
           newSess.deleteAllDevice();
            settingsTabPage.settingsTab().click();
            settingsTabPage.handleOvalButton("Enhanced Login Flow","ON");
            newSess.devicesTab().click();
            newSess.addDevice(data.ipAddress ,data.port, data.deviceName,data.location,data.Manufacture,  data.connectionType,data.inputTag, data.notes);
     //       console.log(data.ipAddress +data.port+data.deviceName+data.location+data.Manufacture+  data.connectionType+data.inputTag+ data.notes+data.Mandatory);
            newSess.connectTerminal().click();

            newSess.previous().click();


        var elm = element(by.model("tab._console.session.address"));

        elm.getAttribute("value").then(function(text){
            expect(text).toEqual(data.ipAddress);
        })

            newSess.crossClose().click();
    });

    });






    using(AppDataProvider.addDevice, function (data, description) {

        it('Verify whether the username and password is maintained unaffected on protocol toggle', function () {
            newSess.deleteAllDevice();
            //console.log(data.ipAddress +data.port+data.deviceName+data.location+data.Manufacture+  data.connectionType+data.inputTag+ data.notes+data.Mandatory);
            newSess.addDevice(data.ipAddress ,data.port, data.deviceName,data.location,data.Manufacture,  data.connectionType,data.inputTag, data.notes);
            newSess.connectTerminal().click();
            newSess.userName().sendKeys("lab");
            newSess.password().sendKeys("lab");

            newSess.previous().click();
            newSess.sshRadio().click();
            browser.sleep(6000);
            newSess.next().click();
            browser.sleep(6000);

            browser.wait(EC.visibilityOf(element(by.model("tab._console.session.username"))),900000);
            var useone = element(by.model("tab._console.session.username"));

            useone.getAttribute("value").then(function(text){
                expect(text).toEqual("lab");
            })

            var passone = element(by.model("tab._console.session.password"));

            passone.getAttribute("value").then(function(text){
                expect(text).toEqual("lab");
            })


            newSess.previous().click();


            newSess.telnetRadio().click();
            newSess.next().click();
            browser.wait(EC.visibilityOf(element(by.model("tab._console.session.username"))),900000);
            var usetwo = element(by.model("tab._console.session.username"));

            usetwo.getAttribute("value").then(function(text){
                expect(text).toEqual("lab");
            })

            var passtwo = element(by.model("tab._console.session.password"));

            passtwo.getAttribute("value").then(function(text){
                expect(text).toEqual("lab");
            })
        newSess.crossClose().click();
        });

    });



    it('Verify the known connection info is updated on the session connection form for recent session', function ()
    {
        newSess.deleteAllDevice();
        settingsTabPage.settingsTab().click();
        settingsTabPage.handleOvalButton("Reconnect with Credentials","OFF");
        settingsTabPage.handleOvalButton("Enhanced Login Flow","ON");
        newSess. createNewSession("172.18.192.14","lab", "lab","SSH","ON");
        newSess. mulDisConnectSession();
        newSess.mulcloseTab("172.18.192.14");
        newSess.recentSession("172.18.192.14").click();



        var elm = element(by.model("tab._console.session.address"));

        elm.getAttribute("value").then(function(text){
            expect(text).toEqual("172.18.192.14");
        })
    newSess.crossClose().click();

});


    using(AppDataProvider.reconnWithCred, function (data, description) {
        it('Verify the session Connection for multiple sessions', function ()
        {
            settingsTabPage.settingsTab().click();
            settingsTabPage.handleOvalButton("Reconnect with Credentials","OFF");

            settingsTabPage.handleOvalButton("Enhanced Login Flow","ON");
            newSess.createNewSession(data.hostname_ip,data.user_name, data.password, data.conn_type, "ON");
            newSess. mulDisConnectSession();
            newSess.mulReconn().click();
            browser.wait(EC.visibilityOf(element(by.model("tab._console.session.username"))),900000);

            newSess.previous().click();
            newSess.hostName().clear();
            newSess.hostName().sendKeys("172.18.194.59");
            newSess.next().click();
            expect(newSess.newTab("172.18.194.59").getText()).toEqual('172.18.194.59');
            newSess.closeTab();


        });

    });

    using(AppDataProvider.newSession, function (data, description) {
        it('Verify the session Connection for multiple sessions', function ()
        {
            settingsTabPage.settingsTab().click();
            settingsTabPage.handleOvalButton("Reconnect with Credentials","ON");

            settingsTabPage.handleOvalButton("Enhanced Login Flow","ON");
            newSess.createNewSession(data.hostname_ip,data.user_name, data.password, data.conn_type, "ON");
            newSess.session_connected();




        });

    });


    using(AppDataProvider.newSession, function (data, description) {
        it('Verify the session Connection for multiple sessions', function ()
        {
    //newSess.disConnectSession();


    if(data.hostname_ip == '172.18.192.14' ||data.hostname_ip == '172.18.194.56') {
        newSess.mulSelectTab(data.hostname_ip).click();
        newSess. mulDisConnectSession();
        newSess.mulReconn().click();
        newSess.session_connected();
        newSess.mulcloseTab(data.hostname_ip);
    }
else if(data.hostname_ip == '172.18.194.79')
    {
        newSess.mulSelectTab(data.hostname_ip).click();
 newSess. mulDisConnectSession();
        newSess.mulcloseTab(data.hostname_ip);
    }

        });

    });
//------------
    it('Switch Off Enhanced Login Flow', function ()
    {
        settingsTabPage.settingsTab().click();
        settingsTabPage.handleOvalButton("Enhanced Login Flow","OFF");

    });

    using(AppDataProvider.newSession, function (data, description) {


        it('Verify the session is Connected while Enhanced Login Flow is OFF'+ description, function ()
        {

            newSess. createNewSession(data.hostname_ip,data.user_name, data.password,data.conn_type,"OFF");
            newSess.session_connected();

        });
        it('Verify the session is Closable while Enhanced Login Flow is OFF', function ()
        {

 newSess. mulDisConnectSession();
            newSess.session_dis_connected();
 newSess.mulcloseTab(data.hostname_ip);


        });



    });
    it('Switch Off Enhanced Login Flow', function ()
    {

        settingsTabPage.settingsTab().click();
        settingsTabPage.handleOvalButton("Enhanced Login Flow","ON");
        newSess.devicesTab().click();

    });
    //---------

});