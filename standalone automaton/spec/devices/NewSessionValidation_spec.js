/**
 * Created by sghoradk on 2/15/2016.
 */


var deviceTab = require('./../../POM/deviceTab.js');
var newSess = require('./../../POM/NewSessionPage.js');
var deviceTabMain = require('./../../POM/deviceTabMain.js');
var AppDataProvider = require('../../data/data.js');
var using = require('jasmine-data-provider');

describe('Test Terminal Connections', function () {


    var EC = protractor.ExpectedConditions;

    it('test ', function () {
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.css('span[class= "icon-plus"]'))), 900000);

    });


       using(AppDataProvider.newSessionVal, function (data, description) {
            it('Verify the session is Connected - ' + description, function () {
				
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
                newSess.closeTab();
             });

        });

        using(AppDataProvider.emptyUsername, function (data, description) {
            it('Verify Next is disable for empty Username - ' + description, function () {

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

        using(AppDataProvider.emptyPort, function (data, description) {
            it('Verify Next is disable for empty Port ' + description, function () {

                newSess.session_without_port(data.hostname_ip, data.conn_type);
                expect(newSess.next().isEnabled()).toBe(false);
                newSess.closeTab();
            });

        });

        using(AppDataProvider.invalidIP, function (data, description) {
            it('Verify Next is disable for Invalid IP ' + description, function () {

                newSess.session_with_invalid_ip(data.hostname_ip, data.conn_type);
                expect(newSess.invalidIP().isPresent()).toBe(true);
                expect(newSess.next().isEnabled()).toBe(false);
                newSess.closeTab();
            });

        });


        using(AppDataProvider.invalidUsernamePassword, function (data, description) {
            it('Verify Session Disconnected pop up is displayed for SSH - ' + description, function () {

                newSess.session_with_invalid_username_password (data.hostname_ip, data.user_name, data.password, data.conn_type);
                newSess.session_dis_connected ();
                newSess.closeTab();
            });

        });


        using(AppDataProvider.invalidPort, function (data, description) {
            it('Verify Next is disable for invalid Port ' + description, function () {

                newSess.session_with_invalid_port(data.hostname_ip, data.conn_type, data.port);
                expect(newSess.next().isEnabled()).toBe(false);
                newSess.closeTab();
				newSess.deleteAllDevice();
            });

        });

    /*it('wait', function ()
     {

     browser.sleep(3000);
     });
     */

});