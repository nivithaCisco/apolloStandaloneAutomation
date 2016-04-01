/**
 * Created by sghoradk on 3/17/2016.
 */

var deviceTab = require('./../../POM/deviceTab.js');
var newSess = require('./../../POM/NewSessionPage.js');
var deviceTabMain = require('./../../POM/deviceTabMain.js');
var settingsTabPage = require('./../../POM/settingsPage.js');
var enhancedLogin = require('./../../POM/asaToolsPage.js');
var AppDataProvider = require('../../data/data.js');
var using = require('jasmine-data-provider');
var tableViewPage = require('./../../POM/tableView_page.js');

describe('Test ASA Connection', function () {


    var EC = protractor.ExpectedConditions;

    it('test ', function () {
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.css('span[class= "icon-plus"]'))), 900000);
        tableViewPage.handleTableView('GRID');
    });

    it('Verify login link is present and when clicked user is asked for Username/Password', function () {
        expect(enhancedLogin.logIn().isPresent()).toBe(true);
        enhancedLogin.clickLogin();
        browser.sleep(5000);
        expect(enhancedLogin.userName().isPresent()).toBe(true);
        expect(enhancedLogin.passWord().isPresent()).toBe(true);
        enhancedLogin.cancelLogin();
    });

    using(AppDataProvider.logIn, function (data, description) {
        it('Verify login is replaced by username once logged in - ' + description, function () {
            enhancedLogin.clickLogin();
            enhancedLogin.logIn(data.username, data.password);
            browser.sleep(5000);
            expect(enhancedLogin.userNameMain().getText()).toEqual(data.username);

        });
    });

    // Work in progress, pls do not uncomment
    /*using(AppDataProvider.newASASession, function (data, description) {
        it('Verify the session is Connected - ' + description, function () {
            settingsTabPage.settingsTab().click();
            settingsTabPage.handleOvalButton("Enhanced Login Flow","ON");
            newSess.createNewSession(data.hostname_ip, data.user_name, data.password, data.conn_type, "ON");
            newSess.session_connected();
            browser.sleep(6000);
            enhancedLogin.clickTools();
            enhancedLogin.runFirewallTopTalkers();
            newSess.closeTab();

        });
    }); */



});