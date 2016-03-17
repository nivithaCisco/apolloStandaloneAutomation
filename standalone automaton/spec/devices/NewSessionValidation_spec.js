/**
 * Created by sghoradk on 2/15/2016.
 */


var deviceTab = require('./../../../../../MyJabberFiles/vikkanna@cisco.com/Thursday/apolloStandaloneAutomation-QANivitha/standalone automaton/POM/deviceTab.js');
var newSess = require('./../../../../../MyJabberFiles/vikkanna@cisco.com/Thursday/apolloStandaloneAutomation-QANivitha/standalone automaton/POM/NewSessionPage.js');
var deviceTabMain = require('./../../../../../MyJabberFiles/vikkanna@cisco.com/Thursday/apolloStandaloneAutomation-QANivitha/standalone automaton/POM/deviceTabMain.js');
var AppDataProvider = require('../../Data/data.js');
var using = require('jasmine-data-provider');
var settingsTabPage = require('./../../POM/settingsPage.js');
var tableViewPage = require('./../../POM/tableView_page.js');

describe('Test Terminal Connections', function () {


    var EC = protractor.ExpectedConditions;

    it('test ', function () {
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.css('span[class= "icon-plus"]'))), 900000);
        tableViewPage.handleTableView('GRID');
    });


       using(AppDataProvider.newSessionVal, function (data, description) {
            it('Verify the session is Connected - ' + description, function () {
                settingsTabPage.settingsTab().click();
                settingsTabPage.handleOvalButton("Enhanced Login Flow","ON");
                newSess.createNewSession(data.hostname_ip, data.user_name, data.password, data.conn_type, "ON");
                newSess.session_connected();
                newSess.closeTab();
                //deviceTabMain.deleteDevice();

            });
        });

        using(AppDataProvider.emptyIP, function (data, description) {
            it('Verify Next is disable for empty ip/hostname - ' + description, function () {
                newSess.session_without_ip(data.conn_type);
                expect(newSess.next().isEnabled()).toBe(false);
                newSess.crossClose().click();
             });

        });

        using(AppDataProvider.emptyUsername, function (data, description) {
            it('Verify Next is disable for empty Username - ' + description, function () {

                newSess.session_without_username(data.hostname_ip, data.password, data.conn_type);
                expect(newSess.connect().isEnabled()).toBe(false);
                newSess.crossClose().click();
            });

        });

       using(AppDataProvider.emptyPassword, function (data, description) {
            it('Verify Next is disable for empty Password - SSH' + description, function () {

                newSess.session_without_password(data.hostname_ip, data.user_name, data.conn_type);
                expect(newSess.connect().isEnabled()).toBe(false);
                newSess.crossClose().click();
            });

        });

        using(AppDataProvider.emptyPort, function (data, description) {
            it('Verify Next is disable for empty Port ' + description, function () {

                newSess.session_without_port(data.hostname_ip, data.conn_type);
                expect(newSess.next().isEnabled()).toBe(false);
                newSess.crossClose().click();
            });

        });

        using(AppDataProvider.invalidIP, function (data, description) {
            it('Verify Next is disable for Invalid IP ' + description, function () {

                newSess.session_with_invalid_ip(data.hostname_ip, data.conn_type);
                expect(newSess.invalidIP().isPresent()).toBe(true);
                expect(newSess.next().isEnabled()).toBe(false);
                newSess.crossClose().click();
            });

        });


        using(AppDataProvider.invalidUsernamePassword, function (data, description) {
            it('Verify Session Disconnected pop up is displayed for SSH - ' + description, function () {

                newSess.session_with_invalid_username_password (data.hostname_ip, data.user_name, data.password, data.conn_type);
                newSess.session_dis_connected ();
                newSess.crossClose().click();
            });

        });


        using(AppDataProvider.invalidPort, function (data, description) {
            it('Verify Next is disable for invalid Port ' + description, function () {

                newSess.session_with_invalid_port(data.hostname_ip, data.conn_type, data.port);
                expect(newSess.next().isEnabled()).toBe(false);
                newSess.crossClose().click();

            });

        });


    using(AppDataProvider.unResponsivePort, function (data, description) {
        it('Verify error msg and device creation for unresponsive port' + description, function () {
            newSess.deleteAllDevice();
            newSess.session_with_invalid_port(data.hostname_ip, data.conn_type, data.port);
            newSess.next().click();
            browser.wait(EC.visibilityOf( newSess.connErrorMsg()),70000);
            expect(newSess.connErrorMsg().getText()).toEqual('Connection refused. Service may not be running on remote.');
            newSess.mulCrossClose(data.hostname_ip).click();
            expect(newSess. selectAll().isPresent()).toBe(false);
        });

    });

    using(AppDataProvider.unResponsiveHost, function (data, description) {
        it('Verify connection with unresponsive Host' + description, function () {
            newSess.deleteAllDevice();
            var sshError= 'Unknown Host. Possible DNS issue.';
            var telnetError= 'Operation timed out. Possible network issue or bad IP address.';
            newSess.session_with_invalid_ip(data.hostname_ip, data.conn_type, data.port);
            newSess.next().click();
            browser.wait(EC.visibilityOf( newSess.connErrorMsg()),70000);
            expect(newSess.connErrorMsg().getText()).toEqual('Unknown Host. Possible DNS issue.');
            newSess.mulCrossClose(data.hostname_ip).click();
            expect(newSess.selectAll().isPresent()).toBe(false);
        });

    });


/*
//NOT Reliable
    using(AppDataProvider.SSHDLinuxMac, function (data, description) {
        it('Verify connection to host running sshd on linux'+ description, function ()
        {
            settingsTabPage.settingsTab().click();
            settingsTabPage.handleOvalButton("Enhanced Login Flow","ON");
            newSess.createNewSession(data.hostname_ip,data.user_name, data.password, data.conn_type, "ON");
            newSess.session_connected();
            newSess.disConnectSession();
            newSess.session_dis_connected();
            newSess.closeTab();


        });



    });
*/










});