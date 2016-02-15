
var deviceTab = require('./../../POM/deviceTab.js');
var newSess = require('./../../POM/NewSessionPage.js');

var settingsTabPage = require('./../../POM/settingsPage.js');
var AppDataProvider = require('../../data/data.js');
var using = require('jasmine-data-provider');

describe('TEST NEW SESSION TAB :::', function () {

    var EC = protractor.ExpectedConditions;

    it('test ', function ()
    {
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.css('span[class= "icon-plus"]'))),900000);

    });

    it('Verify whether New Session tab is displayed ', function ()
    {
        settingsTabPage.settingsTab().click();
        settingsTabPage.handleOvalButton("Enhanced Login Flow","ON");
        expect(newSess.newTab("New Session").getText()).toEqual('New Session');
     });

    it('Verify all to field of Session login page is displayed', function ()
    {
        newSess.newTab("New Session").click();
        browser.wait(EC.visibilityOf(newSess.hostName()),5000);
        expect(newSess.hostName().isPresent()).toBe(true);
        expect(newSess.sshRadio().isPresent()).toBe(true);
        expect(newSess.telnetRadio().isPresent()).toBe(true);
        expect(newSess.port().isPresent()).toBe(true);

    });

    it('Verify all to field of Session login page is displayed', function ()
    {   newSess.sshRadio().click();
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
        newSess.closeTab();
        browser.sleep(2000);
    });


    using(AppDataProvider.newSession, function (data, description) {
    it('Verify the session is Connected'+ description, function ()
    {
        newSess. createNewSession(data.hostname_ip,data.user_name, data.password, data.conn_type, "ON");
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

    it('Verify the session Connection for multiple sessions', function ()
    {
        newSess.newTab("172.18.194.56").click();
        newSess. disConnectSession();
        newSess.session_dis_connected();
        newSess.closeTab();
        newSess.newTab("172.18.192.14").click();
        newSess. disConnectSession();
        newSess.session_dis_connected();
        newSess.closeTab();
        newSess.newTab("172.18.194.79").click();
        newSess. disConnectSession();
        newSess.session_dis_connected();
        newSess.closeTab();
    });



    it('Verify Ip is updated to quick Connect form', function ()
    {
        newSess.quickConnText().sendKeys("172.18.192.14");
        newSess.connectBtn().click();
        expect(newSess.newTab("172.18.192.14").getText()).toEqual("172.18.192.14");

    });

    it('Verify the user is directly taken to Authentication form', function ()
    {
        expect(newSess. userName().isPresent()).toBe(true);
        newSess.closeTab();

       });

using(AppDataProvider.newSession, function (data, description) {

        it('Verify Device connection through Quick Connect '+ description, function ()
        {
            newSess. quickConnect(data.hostname_ip,data.user_name, data.password, data.conn_type, "ON");
            newSess.session_connected();
            newSess. disConnectSession();
            newSess.session_dis_connected();
            newSess.closeTab();

        });

    });//End of Data Provider

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

            newSess. disConnectSession();
            newSess.session_dis_connected();
            newSess.closeTab();
      });



    });




    /*
     it('Verify the default port is displayed for SSH', function ()
     {
     newSess.sshRadio().click();
     browser.sleep(2000);
     expect(newSess.port().getText()).toEqual('22');

     });

     it('Verify the default port is displayed for SSH', function ()
     {
     newSess.telnetRadio().click();
     browser.sleep(2000);
     expect(newSess.port().getText()).toEqual('23');

     });
     */




});