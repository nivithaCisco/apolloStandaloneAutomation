/**
 * Created by vikkanna on 3/8/2016.
 */

var deviceTabMain = require('./deviceTabMain.js');

var tableViewPage = function() {


    this.gridView= function() {

        browser.sleep(2000);
        return  element(by.xpath("//span[@class='icon-grid-view']"));
    };


this.tableVi= function() {
    browser.sleep(2000);
    return  element(by.xpath('//input[@ng-checked= "'+"dataView === 'table'"+'"]'));
};

    this.listView= function() {
        browser.sleep(2000);
        return  element(by.xpath("//span[@class='icon-list-view']"));

    };

    this.selectAll= function() {
        browser.sleep(2000);
        return  element(by.xpath("//th//label[@class='checkbox']"));
    };
    this.verifySelectAll= function() {
        browser.sleep(2000);
        return  element(by.xpath("//table[@class='table table--highlight']"));
    };

    this.selectNone= function() {
        browser.sleep(2000);
        return  element(by.xpath("//label[@title= 'Select None']"));
    };

    this.tableHeading= function() {
        browser.sleep(2000);
        return  element.all(by.xpath("//th"));
    };

    this.tableRow= function() {
        browser.sleep(2000);
        return  element.all(by.xpath("//td[3]/child::*"));
    };

    this.tableCol= function(row_num) {
        browser.sleep(2000);
        return element.all(by.xpath("//tbody//tr[1]/child::*"));
        //return  element.all(by.xpath("//tbody//tr['"+row_num+"']/child::*"));
    };

    this.upload= function() {
        browser.sleep(2000);
        return  element(by.xpath("//span[@class='icon-upload']"));
    };

    this.export= function() {
        browser.sleep(2000);
        return  element(by.xpath("//span[@class='icon-download']"));
    };



this.handleTableView= function(view){
    this.tableVi().getAttribute('checked').then(function(status){

        if(status == true) {
            browser.sleep(2000);

        }
        else if(status == null)
        {
            element(by.xpath("//span[@class='icon-list-view']")).click();
        }

    if(status== true || view == 'LIST')
        {
            console.log('On List View');
        }
        else if (view == 'GRID' || status== null)
    {
        element(by.xpath("//span[@class='icon-grid-view']")).click();
        console.log('On Grid View');
    }

    });
};





    this.tableDeleteAllDevice= function() {
        this.verifySelectAll().isPresent().then(function(present) {

            if(present == true)
            {
                browser.sleep(2000);
                element(by.xpath("//th//label[@class='checkbox']")).click();


                deviceTabMain.bulkAction();
                deviceTabMain.deleteOption();
                deviceTabMain.deleteButton();

            }

        });
    };






};


module.exports = new tableViewPage();


