/**
 * Created by vikkanna on 2/15/2016.
 */

var deviceTab = require('./../../../../../office document/apollo Standalone/vikesh/Final/final/POM/deviceTab.js');
var newSess = require('./../../POM/NewSessionPage.js');
var settPage = require('./../../POM/settingsPage.js');
var AppDataProvider = require('../../../../../office document/apollo Standalone/vikesh/Final/final/Data/data.js');
var using = require('jasmine-data-provider');

describe('Test Settings Tab :', function () {

    var EC = protractor.ExpectedConditions;
    it('test ', function ()
    {
        browser.sleep(5000);
        browser.ignoreSynchronization = true;

        browser.wait(EC.visibilityOf(element(by.css('span[class= "icon-plus"]'))),900000);

    });


    it('Verify whether Settings tab is displayed and clickable', function ()
    {
        expect(settPage.settingsTab().isPresent()).toBe(true);
        settPage.settingsTab().click();

    });


    it('Verify all to field of Settings tab General section is present', function ()
    {
        expect(settPage.scrollBuffer().isPresent()).toBe(true);
        expect(settPage.sshRadio().isPresent()).toBe(true);
        expect(settPage.telnetRadio().isPresent()).toBe(true);
        expect(settPage.OvalButton('Contextual Help and Highlighting').isPresent()).toBe(true);
        expect(settPage.OvalButton('Contextual Help and Highlighting').isPresent()).toBe(true);
        expect(settPage.displayLevelDanger().isPresent()).toBe(true);
        expect(settPage.displayLevelWarning().isPresent()).toBe(true);
        expect(settPage.displayLevelInfo().isPresent()).toBe(true);
        expect(settPage.displayLevelInfo().isPresent()).toBe(true);
        expect(settPage.consoleSelBeh().isPresent()).toBe(true);
        expect(settPage.OvalButton('Enhanced Login Flow').isPresent()).toBe(true);
        expect(settPage.OvalButton('Reconnect with Credentials').isPresent()).toBe(true);
        expect(settPage.OvalButton('Automatically Enable Session Capture').isPresent()).toBe(true);
        expect(settPage.logDir().isPresent()).toBe(true);
    });

    it('Verify all to field of Settings tab Proxy section is present', function ()
    {

        expect(settPage.protocolInp().isPresent()).toBe(true);
        expect(settPage.hostLabInp().isPresent()).toBe(true);
        expect(settPage.portInp().isPresent()).toBe(true);

    });

    it('Verify all to field of Settings tab security section is present', function ()

    {
        expect(settPage.masterPassCheck().isPresent()).toBe(true);
    });
    it('Verify all to field of Settings tab Apperance section is present', function ()
    {
        expect(settPage.theme().isPresent()).toBe(true);
    });

    using(AppDataProvider.scrollBuffer, function (data, description) {
    it('Verify ScrollBuffer Error msg is displayed for Invalid value', function ()
    {   settPage.scrollBuffer().clear();
        settPage.scrollBuffer().sendKeys(data.wrongOne);
        browser.sleep(200);
        expect(settPage.ErrorMSG('Scrollback value must be between 100 and 50000.').isPresent()).toBe(false);
        settPage.scrollBuffer().clear();
        settPage.scrollBuffer().sendKeys(data.wrongTwo);
        browser.sleep(200);
        expect(settPage.ErrorMSG('Scrollback value must be between 100 and 50000.').isPresent()).toBe(false);

    });

        it('Verify ScrollBuffer Error msg is not displayed for Valid value', function ()
        {
            settPage.scrollBuffer().clear();
            settPage.scrollBuffer().sendKeys(data.CorrectOne);
           expect(settPage.ErrorMSG('Scrollback value must be between 100 and 50000.').isPresent()).toBe(true);
            settPage.scrollBuffer().clear();
          settPage.scrollBuffer().sendKeys(data.CorrectTwo);
           expect(settPage.ErrorMSG('Scrollback value must be between 100 and 50000.').isPresent()).toBe(true);

        });


    });



    using(AppDataProvider.Port, function (data, description) {
        it('Verify Port Error msg is displayed for Invalid value', function ()
        {   settPage.portInp().clear();
            settPage.portInp().sendKeys(data.wrongOne);
           expect(settPage.ErrorMSG('Valid port range: 1-65535').isPresent()).toBe(false);
            settPage.portInp().clear();
            settPage.portInp().sendKeys(data.wrongTwo);
            expect(settPage.ErrorMSG('Valid port range: 1-65535').isPresent()).toBe(false);

        });

        it('Verify Port Error msg is not displayed for Valid value', function ()
        {
            settPage.portInp().clear();

            settPage.portInp().sendKeys(data.CorrectOne);
            expect(settPage.ErrorMSG('Valid port range: 1-65535').isPresent()).toBe(true);
            settPage.portInp().clear();
        settPage.portInp().sendKeys(data.CorrectTwo);
           expect(settPage.ErrorMSG('Valid port range: 1-65535').isPresent()).toBe(true);

        });


    });





    using(AppDataProvider.host, function (data, description) {
        it('Verify HostName Error msg is displayed for Invalid value', function ()
        {   settPage.hostLabInp().clear();
            settPage.hostLabInp().sendKeys(data.wrongOne);
            expect(settPage.ErrorMSG('Invalid format for Host. Example formats: host.mydomain.com, 127.0.0.1, ::1(IPv6)').isPresent()).toBe(false);
            settPage.hostLabInp().clear();
            settPage.hostLabInp().sendKeys(data.wrongTwo);
            expect(settPage.ErrorMSG('Invalid format for Host. Example formats: host.mydomain.com, 127.0.0.1, ::1(IPv6)').isPresent()).toBe(false);

        });

        it('Verify HostName Error msg is not displayed for valid value', function ()
        {
            settPage.hostLabInp().clear();
            settPage.hostLabInp().sendKeys(data.CorrectOne);
            expect(settPage.ErrorMSG('Invalid format for Host. Example formats: host.mydomain.com, 127.0.0.1, ::1(IPv6)').isPresent()).toBe(true);
            settPage.hostLabInp().clear();
            settPage.hostLabInp().sendKeys(data.CorrectTwo);
            expect(settPage.ErrorMSG('Invalid format for Host. Example formats: host.mydomain.com, 127.0.0.1, ::1(IPv6)').isPresent()).toBe(true);

        });


    });

    it('Verify all values are displayed under theme dropdown', function ()
    {
        var dropDwn= [ 'Cisco Light', 'Cisco Dark', 'Matrix', 'Custom' ];
        expect(settPage.themeValue().getText()).toEqual(dropDwn);
    });



    it('Verify all values are displayed under theme dropdown', function ()
    {
        var dropDwn= [ 'Cisco Light', 'Cisco Dark', 'Matrix', 'Custom' ];
        expect(settPage.getdropDownText('Theme').getText()).toEqual(dropDwn);
    });

    it('Verify all values are displayed under Console Selection Behavior dropdown', function ()
    {
        var dropDwn= [ 'Default', 'PuTTY', 'SecureCRT' ];
        expect(settPage.getdropDownText('Console Selection Behavior').getText()).toEqual(dropDwn);
    });

    it('Verify all values are displayed under Protocol dropdown', function ()
    {
        var dropDwn= [ '', 'http://', 'https://', 'socks://', 'socks5://' ];
        expect(settPage.getdropDownText('Protocol').getText()).toEqual(dropDwn);
    });



    it('Verify Preferred Protocol flow for SSH', function ()
    {
        settPage.handleOvalButton("Enhanced Login Flow","ON");
        settPage.sshRadio().click();
        newSess.newTab("New Session").click();
        expect(settPage.SSHClicked().isPresent()).toBe(true);
        newSess.closeTab();
        settPage.settingsTab().click();

    });

    it('Verify Preferred Protocol flow for TELNET', function ()
    {    settPage.settingsTab().click();
        settPage.telnetRadio().click();
        newSess.newTab("New Session").click();
        expect(settPage. telnetClicked().isPresent()).toBe(true);
        newSess.closeTab();

    });


    it('Verify Enhanced Login flow for SSH', function ()
    {  settPage.settingsTab().click();
        settPage.handleOvalButton("Enhanced Login Flow","ON");
        newSess.newTab("New Session").click();
        expect(newSess.hostName().isPresent()).toBe(true);
        expect(newSess.sshRadio().isPresent()).toBe(true);
        expect(newSess.telnetRadio().isPresent()).toBe(true);
        expect(newSess.port().isPresent()).toBe(true);
       expect(newSess. userName().isPresent()).toBe(false);
        expect(newSess. password().isPresent()).toBe(false);
        expect(newSess. enablePassword().isPresent()).toBe(false);
        newSess.closeTab();
    });

    it('Verify Enhanced Login flow for TELNET', function ()
    {    settPage.settingsTab().click();
        settPage.handleOvalButton("Enhanced Login Flow","OFF");
        newSess.newTab("New Session").click();
        expect(newSess.hostName().isPresent()).toBe(true);
        expect(newSess.sshRadio().isPresent()).toBe(true);
        expect(newSess.telnetRadio().isPresent()).toBe(true);
        expect(newSess.port().isPresent()).toBe(true);
        expect(newSess. userName().isPresent()).toBe(true);
        expect(newSess. password().isPresent()).toBe(true);
        expect(newSess. enablePassword().isPresent()).toBe(true);
        newSess.closeTab();

    });



    using(AppDataProvider.reconnWithCred, function (data, description) {
    it('Verify Reconnect with credentials option ON', function ()
    {   settPage.settingsTab().click();
        settPage.handleOvalButton("Enhanced Login Flow","ON");
        settPage.handleOvalButton("Reconnect with Credentials","ON");
        newSess.createNewSession(data.hostname_ip,data.user_name, data.password, data.conn_type, "ON");
        newSess.disConnectSession();
        newSess.session_dis_connected();
        newSess.reConnSession().click();
        newSess.session_connected();
        newSess.disConnectSession();
        newSess.closeTab();
    });
    });

  using(AppDataProvider.reconnWithCred, function (data, description) {
    it('Verify Reconnect with credentials option OFF', function ()
    {    settPage.settingsTab().click();
        settPage.handleOvalButton("Enhanced Login Flow","ON");
        settPage.handleOvalButton("Reconnect with Credentials","OFF");
        newSess.createNewSession(data.hostname_ip,data.user_name, data.password, data.conn_type, "ON");
        newSess.disConnectSession();
        newSess.session_dis_connected();
        newSess.reConnSession().click();
        expect(newSess. userName().isPresent()).toBe(true);
        expect(newSess. password().isPresent()).toBe(true);
        expect(newSess. enablePassword().isPresent()).toBe(true);
        newSess.closeTab();

    });

 });




    using(AppDataProvider.reconnWithCred, function (data, description) {
        it('Verify Auto Enable Session Capture ON', function ()
        {   settPage.settingsTab().click();
            settPage.handleOvalButton("Automatically Enable Session Capture","ON");
            newSess.createNewSession(data.hostname_ip,data.user_name, data.password, data.conn_type, "ON");
            expect(newSess.logCapture("Logging: On").isPresent()).toBe(true);
            newSess.disConnectSession();
            newSess.closeTab();

        });


        it('Verify Auto Enable Session Capture OFF', function ()
        {
            settPage.settingsTab().click();
            settPage.handleOvalButton("Automatically Enable Session Capture","OFF")
            newSess.createNewSession(data.hostname_ip,data.user_name, data.password, data.conn_type, "ON");
            expect(newSess.logCapture("Logging: Off").isPresent()).toBe(true);
            newSess.disConnectSession();
            newSess.closeTab();
            settPage.settingsTab().click();
        });

    });


    using(AppDataProvider.consoleColor, function (data, description) {

        it('Verify Console text and color for various themes in settings page', function ()
        {
            browser.sleep(2000);
            settPage.theme().sendKeys("");
               settPage.theme().sendKeys(data.themeType);
                settPage.hostLabInp().click();
            browser.sleep(2000);
               expect( settPage.consoleBGColor().getAttribute('style')).toContain(data.BG);
               expect( settPage.consoleTextColor().getAttribute('style')).toContain(data.text);
            browser.sleep(2000);



           });






    });


/*
    using(AppDataProvider.consoleSessColor, function (data, description) {
    it('Verify Console text and color for various themes in console connection page', function ()
    {
        settPage.settingsTab().click();
        browser.sleep(6000);
        browser.wait(EC.visibilityOf(settPage.theme()),900000);
        browser.sleep(3000);
        settPage.theme().sendKeys("");
        settPage.theme().sendKeys(data.themeType);
        settPage.hostLabInp().click();
        newSess.createNewSession("172.18.192.14","lab", "lab", "SSH", "ON");
        newSess.session_connected();
        browser.sleep(5000);
        expect( settPage.consoleSessBGColor().getAttribute('style')).toContain(data.BG);
        expect( settPage.consoleSessTextColor().getAttribute('style')).toContain(data.text);
        browser.sleep(5000);
        newSess.disConnectSession();

        newSess.closeTab();

        browser.sleep(2000);
    });


 });

*/


});
