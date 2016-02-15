/**
 * Created by nivmanoh on 2/8/2016.
 */
var DeviceTab = require('./../../POM/deviceTab.js');
var AppDataProvider = require('./../../Data/data.js');
var using = require('jasmine-data-provider');





describe('Sorting', function () {



    using(AppDataProvider.filterTagCheckerdataProvider, function (data, description) {

        it('Filter Checker -' + description, function () {


            var filterType = data.filterName;
            var filterValue = data.value;
            var selectorForFilter = data.selector;
            browser.sleep(4000);

            DeviceTab.showAllCheck(filterType).then(function () {

                // selecting the filter
                DeviceTab.applyFilter(filterValue);
                // get the number of devices and number of pages
                DeviceTab.getNoOfCardsElem(data.page).then(function (value) {
                    var totalDevices = parseInt(value.split(" ")[3]);
                    var totalPages = Math.ceil(totalDevices / 48);

                    console.log("total devices : " + totalDevices);
                    console.log("total pages : " + totalPages);


                    for (var pageIndex = 1; pageIndex <= totalPages; pageIndex++) {
                        browser.sleep(4000);
                        (function (pageIndex) {
                            browser.sleep(4000);


                            var devicesInlastPage = (totalDevices / 48 == 0) ? 48 : (totalDevices % 48);

                            var devicesInCurrentPage = (pageIndex < totalPages) ? 48 : devicesInlastPage;

                            //     console.log("Page no :"+pageIndex);
                            console.log("devices in current page :" + devicesInCurrentPage);


                            for (var j = 1; j <= devicesInCurrentPage; j++) {

                                (function (j, devicesInCurrentPage) {

                                    console.log("page index :" + pageIndex + " dev no :" + j);

                                    element.all(by.css('a[ng-click="editDevice(card); $event.stopPropagation()"]')).get(j-1).click();

                                    expect(DeviceTab.editTagList()).toContain(filterValue);

                                    DeviceTab.closeEditModel();
                                })(j, devicesInCurrentPage);


                            }
                            browser.sleep(4000);

                            browser.sleep(4000);
                            DeviceTab.nextDevicePage();


                        })(pageIndex);


                    }

                });

                browser.sleep(4000);
                //  removing filter
                DeviceTab.removeFilter(filterType);


            });


        });
    });

    using(AppDataProvider.filterCheckerdataProvider, function (data, description) {

        it('Filter Checker -' + description, function () {



            var filterType = data.filterName;
            var filterValue = data.value;
            var selectorForFilter = data.selector;
            browser.sleep(4000);
            //showAllFilterOptions
            DeviceTab.showAllCheck(filterType).then(function () {

                // selecting the filter
                DeviceTab.applyFilter(filterValue);
                // get the number of devices and number of pages
                DeviceTab.getNoOfCardsElem(data.page).then(function (value) {
                    var totalDevices = parseInt(value.split(" ")[3]);
                    var totalPages =Math.ceil(totalDevices / 48);

                    console.log("total devices : " + totalDevices);
                    console.log("total pages : " + totalPages);

                    //  iterating through the pages
                    //totalPages =1;
                    for (var pageIndex = 1; pageIndex <= totalPages; pageIndex++) {
                        browser.sleep(4000);
                        (function (pageIndex) {
                            browser.sleep(4000);


                            var devicesInlastPage = (totalDevices / 48 == 0) ? 48 : (totalDevices % 48);

                            var devicesInCurrentPage = (pageIndex < totalPages) ? 48 : devicesInlastPage;

                            //     console.log("Page no :"+pageIndex);
                            console.log("devices in current page :" + devicesInCurrentPage);

                            console.log("page index :" + pageIndex );


                            if(data.value == 'Favorites') {
                                expect(element.all(data.selector).getAttribute('class')).toMatch('text-warning-alt');

                            }
                            if(data.value == 'No Favorites') {
                                expect(element.all(data.selector).getAttribute('class')).toMatch('text-muted');

                            }
                            DeviceTab.nextDevicePage();

                        })(pageIndex);

                    }

                });

                browser.sleep(4000);
                //  removing filter
                DeviceTab.removeFilter(filterType);


            });


        });




    });




});
