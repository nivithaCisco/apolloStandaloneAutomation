/**
 * Created by nivmanoh on 2/5/2016.
 */
var Q = require('q');

var exec = require('child_process').execFile;
var fs = require('fs');
var path = require('path');



var spawn = require('superspawn').spawn;
var DevicePage = function() {

    this.ciscoLogo=element(by.xpath('//div[@class="header-bar__logo"]/span'));
    this.deviceTab=element(by.binding("::'_Devices_' | i18n"));
    this.headerHeading=element(by.binding("::'_SASAAppName_' | i18n"));
    this.headerMenus=element.all(by.xpath('//ul/li/a/tab-heading'));
    this.headerMenusDevice=element(by.xpath('//ul/li[1]/a/tab-heading/../..'));
    this.menuDevice=element(by.binding("::'_Devices_' | i18n"));

    this.headerMenusSetting=element(by.xpath('//ul/li[2]/a/tab-heading/../..'));
    this.menusSetting=element(by.binding("::'_Settings_' | i18n"));

    this.headerMenusNewSession=element(by.xpath('//ul/li[3]/a/tab-heading/../..'));
    this.menusNewSession=element(by.binding("::'_NewSession_' | i18n"));


    this.headerToolBar=element.all(by.xpath('//div[@class="header-toolbar"]'));
    this.ccoUserName=element(by.binding("cco.user.name || cco.user.userId"));
    this.feedBack=element(by.xpath('//button[@ng-click="openFeedbackModal()"]'));
    this.feedBackIcon=element(by.xpath('//button[@ng-click="openFeedbackModal()"]/span'));
    this.releaseNote=element(by.xpath('//a[@title="View Release Notes"]'));
    this.releaseNoteIcon=element(by.xpath('//a[@title="View Release Notes"]/span'));

    this.headingQuick=element(by.binding("::'_QuickConnect_' | i18n"));
    this.quickIPHead=element(by.xpath('//input[@id="quickIP"]/../label'));
    this.quickIp=element(by.xpath('//input[@id="quickIP"]'));
    this.quickConnectButton=element(by.xpath('//input[@id="quickIP"]/../../../button'));
    this.headingRecentConnection=element(by.xpath('//div[@class="panel__header"]/h4'));


    this.recentIpList=element.all(by.binding("getSessionInfo(recent.sessionName).name"));
    this.recentTimeList=element.all(by.binding("recent.timestamp | fromNow:true"));


    this.switchInput=element.all(by.xpath('//span[@class="switch__input"]/span'));







//-----------------------------------------------------------------------------------------------------------------------------------------------

    //download

    this.exportDevice=element(by.xpath('//a[@tooltip="Export Devices"]'));
    this.exportDeviceIcon=element(by.xpath('//a[@tooltip="Export Devices"]/span'));

    this.Download = function (data){

        var filename='./Resources/downloads/devices.csv';
        var batFile='../Resources/AutoItScripts/delete.bat';
        var autoIt='../Resources/AutoItScripts/DownloadHandler.exe';

        exec(path.resolve(__dirname, batFile) , function(err, data) {
            console.log(err)
            console.log(data.toString());
        })

        browser.driver.wait(function () {
            return !fs.existsSync(filename);
        }, 40000)

        var downloadFile =function(){

            exec(path.resolve(__dirname, autoIt) , function(err, data) {
                console.log(err)
                console.log(data.toString());
            });


        }

        this.exportDevice.click().then(function(){
           downloadFile();

        browser.sleep(10000);
            browser.driver.wait(function () {
                return fs.existsSync(filename);
            }, 900000).then(function () {
                browser.sleep(10000);
                expect(fs.readFileSync(filename, {encoding: 'utf8'})).toEqual(data);
                browser.sleep(10000);

            });





            });// ends
    }

//--------------------------------------------------------------------------------------------------------------------------
//Select All
    this.selectAll = function (){
        element(by.xpath('//label[@title="Select All"]')).click();
    }
    this.selectNone = function (){
        element(by.xpath('//label[@title="Select None"]')).click();
    }

    this.isChecked = function(){
        element.all(by.css('div[ng-click="toggleSelected($event, card)"]')).then(function (rows) {
            for (var i = 0; i < rows.length; i++) {
                this.chk = element.all(by.css('div[ng-click="toggleSelected($event, card)"]'));
                expect(this.chk.get(i).getAttribute('class')).toMatch('card card--selected');

            }
        });

    }

    this.isNotChecked = function(){
        element.all(by.css('div[ng-click="toggleSelected($event, card)"]')).then(function (rows) {
            for (var i = 0; i < rows.length; i++) {
                this.notChk = element.all(by.css('div[ng-click="toggleSelected($event, card)"]'));
                expect(this.notChk.get(i).getAttribute('class')).toMatch('card card--default');

            }
        });

    }

//------------------------------------------------------------------------------------------------------
    //Filter

    this.filterTypes=element.all(by.xpath('//span[@ng-bind="filterGroup.label"]'));
    this.filterFavHide=element(by.xpath('//span[@ng-bind="filterGroup.label"][text()="Favorites"]/../small/span'));
    this.filterTagHide=element(by.xpath('//span[@ng-bind="filterGroup.label"][text()="Tags"]/../small/span'));

    this.tagList=element(by.repeater('(idx, tag) in tags'));
    this.allTagList=element.all(by.xpath('//div[@ng-show="tagsKey == 1"]/span[@ng-repeat="(idx, tag) in tags"]/span'));

    this.editTagList= function()
    {
       return element.all(by.repeater('(idx, tag) in tags')).getText();
    }

    this.tagName= function(value)
    {  value=value.toLowerCase();

        return element(by.xpath('//div[@ng-show="tagsKey == 1"]/span[@ng-repeat="(idx, tag) in tags"]/span[text()="'+value+'"]'));
    }



    this.deleteTag= function(value)
    {
        return element(by.xpath('//div[@ng-show="tagsKey == 1"]/span[@ng-repeat="(idx, tag) in tags"]/span[text()="'+value+'"]/../a'))
    }



    this.closeEditModel= function()
    {
        element.all(by.css('button[ng-click="$dismiss()"]')).get(0).click();
    }

    this.closeTagModel= function()
    {
        element(by.css('button[ng-click="$close(); closeInputTags();"]')).click();
    }


    this.nextDevicePage = function()
    {
        nextPageScroll.getAttribute('disabled').then(function (selected) {

            console.log(selected)
            if (selected==null) {
                console.log('is Enabled');
                element(by.css('a[ng-click="pager.loadNextPage(); scrollUp()"]')).click();
            }
            else {
                console.log("disabled")

            }
        });
    }

    this.showAllCheck = function(value){

        var filterElem = element(by.xpath('//span[.="'+value+'"]')).element(by.xpath('../../..'));
        var showAllElem = filterElem.element(by.css('a[ng-click="filterGroup.expanded = true"]'));

        return showAllElem.isPresent().then(function(isvisible){
            console.log("show all : "+this.showAllElem);
            if(isvisible) {

                showAllElem.click();
            }

        });

    };

    this.applyFilter = function (filterValue,value) {



        var showAllElem = element(by.xpath('//div[.="'+value+'"]/../div[2]/a'));
        var tagValue = "!filterGroup.expanded";


        return showAllElem.isPresent().then(function (isvisible) {
            console.log("show all : " + isvisible);
            if (isvisible) {
                showAllElem.click();
                tagValue = "filterGroup.expanded";
                console.log("inside",tagValue)
                element(by.xpath("//label[@ng-show='"+tagValue+"']/div[@title='"+filterValue+"']")).click();

            }
            else
            {
                element(by.xpath("//label[@ng-show='"+tagValue+"']/div[@title='"+filterValue+"']")).click();

            }


        });

    };

    this.removeFilter = function (filterValue) {
        element(by.xpath('//div[.="'+filterValue+'"]/../div[2]/a')).click();
    };







//-------------------------------------------------------------------------------------------------------------------------------
//Sorting

    this.sortDropDown = element(by.id('sortby'));
    this.sortDropDownOption = element.all(by.xpath("//select[@id='sortby']/option"));

    var nextPageScroll = element(by.css('a[ng-click="pager.loadNextPage(); scrollUp()"]'));
    this.sortToggleButton = element(by.css('a[ng-click="toggleSortDir()"]'));
    this.sortImage= element(by.xpath('//a[@ng-click="toggleSortDir()"]/span')) ;


    this.hasClass = function (element,cls) {
        return element.getAttribute('class').then(function (classes) {
            console.log("The class was "+ classes)
            return classes.split(' ').indexOf(cls) !== -1;
        });
    };
    this.sortTogglePage = function()
    {
        this.sortToggleButton.click();
    }


    this.openSortPage = function(sortOption)
    { browser.sleep(5000);
        this.sortDropDown.element(by.cssContainingText('option',sortOption)).click();
    }

    //no of devices

    this.getNoOfCardsElem = function()
    {  browser.sleep(5000);

            return element(by.xpath('//smart-pager/div/span')).getText();

    }

    var getAllDevicePages = function(totalPages,selectorForDevice,type)
    {
        var   totalPagesint = parseInt(totalPages);
        var totalPromises = [];
        var totalDeviceTitles = [];

        for (var pageIndex = 1; pageIndex <= totalPagesint; ) {
            var titlePromise=[];
            if(type=="date") {
                titlePromise = element.all(by.xpath('//smart-card2/div/div/div/div/div[2]/div[2]/div[2]/span[2]')).map(function (elm) {
                    return elm.getText().then(function (text) {
                        return new Date(text);
                    });
                })
            }
            if(type=="text") {
                titlePromise =  element.all(selectorForDevice).getText();
            }

            totalPromises.push(titlePromise);


            console.log(pageIndex);
            pageIndex++;

            nextPageScroll.getAttribute('disabled').then(function (selected) {

                console.log(selected)
                if (selected==null) {
                    console.log('is Enabled');
                    element(by.css('a[ng-click="pager.loadNextPage(); scrollUp()"]')).click();
                }
                else {
                    console.log("disabled")

                }
            });

            browser.waitForAngular();
            browser.sleep(5000);
        }

        return totalPromises;
    }

    var noOfDevices = function (value) {
            var totalDevices = parseInt(value.split(" ")[3]);
            return totalDevices;

    }

    var noOfPages = function (value) {
        var totalDevices = noOfDevices(value);

            var pages = Math.ceil(totalDevices / 48);
            return pages;


    };

    var getAllDeviceTitles = function(results)
    {
        var totalDeviceTitles = [];

        console.log("The size"+results.length)
        for (var i = 0; i < results.length; i++) {

            var result = results[i];
            for (var j = 0; j < result.length; j++) {
                if(result[j] !== "Unknown") {
                    totalDeviceTitles.push(result[j]); // result[j] =" ";
                }
            }

        }
        console.log("The size finally"+ totalDeviceTitles.length)

        for (var titleindex = 0; titleindex < totalDeviceTitles.length; titleindex++) {
            console.log("The value is "+totalDeviceTitles[titleindex]);
        }

        return totalDeviceTitles;

    }

    var getAllDevicePages = function(totalPages,selectorForDevice,type)
    {
        var   totalPagesint = parseInt(totalPages);
        var totalPromises = [];
        var totalDeviceTitles = [];

        for (var pageIndex = 1; pageIndex <= totalPagesint; ) {
            var titlePromise=[];
            if(type=="date") {
                titlePromise = element.all(by.xpath('//smart-card2/div/div/div/div/div[2]/div[2]/div[2]/span[2]')).map(function (elm) {
                    return elm.getText().then(function (text) {
                        return new Date(text);
                    });
                })
            }
            if(type=="text") {
                titlePromise =  element.all(selectorForDevice).getText();
            }

            totalPromises.push(titlePromise);


            console.log(pageIndex);
            pageIndex++;

            nextPageScroll.getAttribute('disabled').then(function (selected) {

                console.log(selected)
                if (selected==null) {
                    console.log('is Enabled');
                    element(by.css('a[ng-click="pager.loadNextPage(); scrollUp()"]')).click();
                }
                else {
                    console.log("disabled")

                }
            });

            browser.waitForAngular();
            browser.sleep(5000);
        }

        return totalPromises;
    }



    this.IsSort= function (type,sort,deviceSelector,sortOption) {
        var totalDevices = [];
        var totalDeviceTitles = [];


        this.getNoOfCardsElem().then(function (value) {
            var totalPages = noOfPages(value);
            console.log("total number of Device Pages :" + totalPages);



            totalDevices = getAllDevicePages(totalPages, deviceSelector,type);
            Q.all(totalDevices).done(function (results) {
                totalDeviceTitles = getAllDeviceTitles(results);





                    browser.sleep(5000);

                    var sortedvalue = totalDeviceTitles.slice();


                    if(sort=="asc") {
                        sortedvalue = sortedvalue.sort(function (a, b) {
                            return a > b;
                        });

                        expect(totalDeviceTitles).toEqual(sortedvalue);

                    }

                    if(sort=="desc") {
                        sortedvalue = sortedvalue.sort(function (a, b) {
                            return a < b;
                        });

                        expect(totalDeviceTitles).toEqual(sortedvalue);

                    }



            });

        });
    };

};


module.exports = new DevicePage();
