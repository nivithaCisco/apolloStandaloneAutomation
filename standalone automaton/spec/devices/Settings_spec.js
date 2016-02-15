/**
 * Created by vikkanna on 2/15/2016.
 */

var deviceTab = require('./../../POM/deviceTab.js');
//var newSess = require('./../../POM/NewSessionPage.js');
var settPage = require('./../../POM/settingsPage.js');
var AppDataProvider = require('../../data/data.js');
var using = require('jasmine-data-provider');

describe('Test Settings Tab :', function () {


    it('test ', function ()
    {
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.css('span[class= "icon-plus"]'))),900000);

    });


    it('Verify whether New Session tab is displayed and clickable', function ()
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



});
