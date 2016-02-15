/**
 * Created by nivmanoh on 2/12/2016.
 */
var deviceTabMain = require('./../../POM/deviceTabMain.js');
var DeviceTab = require('./../../POM/deviceTab.js');

describe('AP-1193', function () {
    beforeEach(function() {
        browser.sleep(10000);
    });
    it('Header Menu : ElementPresent', function () {
        expect(DeviceTab.hasClass(DeviceTab.ciscoLogo,'icon-cisco')).toBe(true);
        expect(DeviceTab.headerHeading.getText()).toEqual("Cisco CLI Analyzer");
        expect((DeviceTab.headerMenus).count()).toEqual(3);
        expect((DeviceTab.headerMenus.get(0).getText())).toEqual("Devices");
        expect(DeviceTab.menuDevice.isPresent()).toBeTruthy();
        expect(DeviceTab.headerMenusDevice.getAttribute('active')).toEqual("devicesTab.active");
        expect(DeviceTab.menusSetting.isPresent()).toBeTruthy();
        expect((DeviceTab.headerMenus.get(1).getText())).toEqual("Settings");
        expect(DeviceTab.headerMenusSetting.getAttribute('active')).toEqual("settingsTab.active");
        expect(DeviceTab.menusNewSession.isPresent()).toBeTruthy();
        expect((DeviceTab.headerMenus.get(2).getText())).toEqual("New Session");

    });

    it('Header Toolbar: ElementPresent', function () {

        expect(DeviceTab.ccoUserName.getText()).toEqual("");
        expect((DeviceTab.headerToolBar).count()).toEqual(1);
        expect((DeviceTab.headerToolBar.get(0).getText())).toContain("Login");
        expect(DeviceTab.feedBack.isPresent()).toBeTruthy();
        expect(DeviceTab.hasClass(DeviceTab.feedBackIcon,'icon-feedback')).toBe(true);
        expect(DeviceTab.releaseNote.isPresent()).toBeTruthy();
        expect(DeviceTab.hasClass(DeviceTab.releaseNoteIcon,'icon-help')).toBe(true);
    });

    it('Quick Connect Toolbar: ElementPresent', function () {

        expect(DeviceTab.headingQuick.isPresent()).toBeTruthy();
        expect((DeviceTab.headingQuick.getText())).toEqual("Quick Connect");

        expect(DeviceTab.quickIPHead.isPresent()).toBeTruthy();
        expect((DeviceTab.quickIPHead.getText())).toEqual("IP / Hostname");

        expect(DeviceTab.quickConnectButton.isPresent()).toBeTruthy();
        expect((DeviceTab.quickConnectButton.getText())).toEqual("Connect");



    });
    it('Recent Connection Toolbar: ElementPresent', function () {
        expect(DeviceTab.headingRecentConnection.isPresent()).toBeTruthy();
        expect((DeviceTab.headingRecentConnection.getText())).toEqual("Recent Sessions");
    });



    it('Search Toolbar: ElementPresent', function () {

        expect(deviceTabMain.search.isPresent()).toBeTruthy();
        expect(deviceTabMain.search.getAttribute('placeholder')).toEqual("Search Devices");
        expect(DeviceTab.hasClass(deviceTabMain.searchIcon,'icon-search')).toBe(true);
    });

    it('Smart Toolbar: ElementPresent', function () {

        expect(deviceTabMain.addDevice.isPresent()).toBeTruthy();
        expect(DeviceTab.hasClass(deviceTabMain.iconPlus,'icon-plus')).toBe(true);
        expect(deviceTabMain.importDevice.isPresent()).toBeTruthy();
        expect(DeviceTab.hasClass(deviceTabMain.importDeviceIcon,'icon-upload')).toBe(true);
        expect(DeviceTab.exportDevice.isPresent()).toBeTruthy();
        expect(DeviceTab.hasClass(DeviceTab.exportDeviceIcon,'icon-download')).toBe(true);
        expect((deviceTabMain.importDropDown).count()).toEqual(3);
        expect((deviceTabMain.importCSV.getInnerHtml())).toEqual("Import from CSV");
        expect((deviceTabMain.importPutty.getInnerHtml())).toEqual("Import from PuTTY");
        expect((deviceTabMain.importSecureCRT.getInnerHtml())).toEqual("Import from SecureCRT");


    });

    it('Filter Toolbar: ElementPresent', function () {
        expect((DeviceTab.filterTypes).count()).toEqual(2);
        expect((DeviceTab.filterTypes.get(0).getText())).toContain("FAVORITES");
        expect((DeviceTab.filterTypes.get(0).isPresent())).toBeTruthy();
        expect(DeviceTab.hasClass(DeviceTab.filterFavHide,'icon-chevron-up')).toBe(true);
        expect((DeviceTab.filterTypes.get(1).getText())).toContain("TAGS");
        expect((DeviceTab.filterTypes.get(1).isPresent())).toBeTruthy();
        expect(DeviceTab.hasClass(DeviceTab.filterTagHide,'icon-chevron-up')).toBe(true);

    });

    it('Switch Input Toolbar: ElementPresent', function () {
        expect((DeviceTab.switchInput).count()).toEqual(2);
        expect(DeviceTab.hasClass((DeviceTab.switchInput.get(0)),'icon-grid-view')).toBe(true);
        expect(DeviceTab.hasClass((DeviceTab.switchInput.get(1)),'icon-list-view')).toBe(true);
    });
    it('Sort Toolbar: ElementPresent', function () {
        expect(DeviceTab.sortDropDown.isPresent()).toBeTruthy();
        expect((DeviceTab.sortDropDownOption).count()).toEqual(5);
        expect((DeviceTab.sortDropDownOption.get(0).getText())).toEqual("Device Name");
        expect((DeviceTab.sortDropDownOption.get(1).getText())).toEqual("IP / Hostname");
        expect((DeviceTab.sortDropDownOption.get(2).getText())).toEqual("Location");
        expect((DeviceTab.sortDropDownOption.get(3).getText())).toEqual("Recently Accessed");
        expect((DeviceTab.sortDropDownOption.get(4).getText())).toEqual("Updated Date");




    });




});