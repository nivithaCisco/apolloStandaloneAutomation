/**
 * Created by nivmanoh on 2/5/2016.
 */
var DeviceTab = require('./../../POM/deviceTab.js');



describe('Select all icon', function () {

    it('Select All', function () {
        browser.sleep(12000);
        DeviceTab.selectAll();
        browser.sleep(3000);
        DeviceTab.isChecked();
        browser.sleep(3000);

    });

    it('Select None', function () {
        browser.sleep(12000);
        DeviceTab.selectNone();
        browser.sleep(3000);
        DeviceTab.isNotChecked();
        browser.sleep(3000);

    });




});