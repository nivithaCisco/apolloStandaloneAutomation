/**
 * Created by nivmanoh on 2/5/2016.
 */
var DeviceTab = require('./../../POM/deviceTab.js');
var AppDataProvider = require('./../../Data/data.js');
var using = require('jasmine-data-provider');





describe('Sorting', function () {
    beforeEach(function() {
        browser.sleep(10000);
    });

    using(AppDataProvider.sortCheckerDataProvider, function (data, description) {

        it('Ascending Check' + description, function () {


            var deviceSelector = data.selector;
            var sortOption = data.dropdown;
            var sort = "asc";
            DeviceTab.openSortPage(sortOption);
            DeviceTab.hasClass(DeviceTab.sortImage,'icon-sort-amount-desc').then(function (selected) {
                if(selected)
                {
                    DeviceTab.sortTogglePage();
                }
            })

            browser.sleep(10000);

           expect(DeviceTab.hasClass(DeviceTab.sortImage,'icon-sort-amount-asc')).toBe(true);
            browser.sleep(5000);
            DeviceTab.IsSort(data.type, sort, deviceSelector, sortOption);


        });


        it('Descending Check - ' + description, function () {
            var deviceSelector = data.selector;
            var sortOption = data.dropdown;
            var sort = "desc";
            DeviceTab.openSortPage(sortOption);
            DeviceTab.hasClass(DeviceTab.sortImage,'icon-sort-amount-asc').then(function (selected) {
                if(selected)
                {
                    DeviceTab.sortTogglePage();
                }
            })

            browser.sleep(10000);
         expect(DeviceTab.hasClass(DeviceTab.sortImage,'icon-sort-amount-desc')).toBe(true);
            browser.sleep(5000);
            DeviceTab.IsSort(data.type,sort, deviceSelector, sortOption);


        });

    });




});