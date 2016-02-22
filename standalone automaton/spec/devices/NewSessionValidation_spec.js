/**
 * Created by sghoradk on 2/15/2016.
 */


var deviceTabMain = require('./../../POM/deviceTabMain.js');
var DeviceTab = require('./../../POM/deviceTab.js');

var AppDataProvider = require('./../../Data/data.js');
var newSess = require('./../../POM/NewSessionPage.js');
var settingsTabPage = require('./../../POM/settingsPage.js');

var EC = protractor.ExpectedConditions;

var using = require('jasmine-data-provider');

describe('NEW SESSION TAB Negative :::', function () {
    beforeEach(function() {
        browser.sleep(10000);

    });

    it('Check if Enhanced Login Flow is ON ', function ()
    {
        browser.ignoreSynchronization = true;

        settingsTabPage.settingsTab().click();
        settingsTabPage.handleOvalButton("Enhanced Login Flow","ON");
        DeviceTab.deviceTab.click();
    });


        using(AppDataProvider.newSessionVal, function (data, description) {
            it('Verify the session is Connected - ' + description, function () {
                newSess.createNewSession(data.hostname_ip, data.user_name, data.password, data.conn_type, "ON");
                newSess.session_connected();
                newSess.closeTab();
            });
        });

        using(AppDataProvider.emptyIP, function (data, description) {
            it('Verify Next is disable for empty ip/hostname - ' + description, function () {
                newSess.session_without_ip(data.conn_type);
                expect(newSess.next().isEnabled()).toBe(false);
                newSess.closeTab();
             });

        });
        using(AppDataProvider.emptyUsername, function (data, description) {
            it('Verify Next is disable for empty Username - SSH' + description, function () {

                newSess.session_without_username(data.hostname_ip, data.password, data.conn_type);
                expect(newSess.connect().isEnabled()).toBe(false);
                newSess.closeTab();
            });

        });
        using(AppDataProvider.emptyPassword, function (data, description) {
            it('Verify Next is disable for empty Password - SSH' + description, function () {

                newSess.session_without_password(data.hostname_ip, data.user_name, data.conn_type);
                expect(newSess.connect().isEnabled()).toBe(false);
                newSess.closeTab();
            });

        });



});