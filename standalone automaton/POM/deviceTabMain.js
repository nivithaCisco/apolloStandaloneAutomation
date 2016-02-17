/**
 * Created by nivmanoh on 2/8/2016.
 */
var deviceTabMain= function() {

this.importDevice=element(by.xpath('//a[@tooltip="Import Devices"]'));
    this.importDeviceIcon=element(by.xpath('//a[@tooltip="Import Devices"]/span'));
    this.importDropDown=element.all(by.xpath('//a[@tooltip="Import Devices"]/../div/ul/li'));
    this.importCSV=element(by.binding("::'_ImportFrom_' | i18n:'CSV'"));
    this.importPutty=element(by.binding("::'_ImportFrom_' | i18n:'PuTTY'"));
    this.importSecureCRT=element(by.binding("::'_ImportFrom_' | i18n:'SecureCRT'"));

    this.cardConnect= function() { element(by.xpath('//div [@class="card__footer ng-scope"]/a[@tooltip="Connect"]')).click();}
this.cardFavIcon=element(by.xpath('//div [@class="card__footer ng-scope"]/a[@tooltip="Toggle Favorite"]/span'));
    this.cardFav= function() { element(by.xpath('//div [@class="card__footer ng-scope"]/a[@tooltip="Toggle Favorite"]')).click();}
    this.cardEdit= function() { element(by.xpath('//div [@class="card__footer ng-scope"]/a[@tooltip="Edit"]')).click();}


//----------------------------------------------------------------------------------------------------------------------------------
   this.search=element(by.model('searchText'));
    this.searchIcon=element(by.xpath('//input[@id="search"]/../label/span'));
    this.setSearch = function(value) {
        this.search.clear().then(function() {
            element(by.model('searchText')).sendKeys(value,protractor.Key.ENTER);
        });

    }
    this.removeSearch = function(){
        element.all(by.css('span[ng-click="removeTag(tag)"]')).then(function (rows) {
            for (var i = 0; i < rows.length; i++) {
                rows[i].click();

            }
        });

    }
    this.isLoading=element(by.css('loader.loader--app-loading.ng-hide'));

    this.deviceNameCard=function()
    {
        return element(by.binding('card.name || card.hostname')).getText();
    }
    this.ipCard=function()
    {
        return element.all(by.binding("card.hostname")).get(1).getText();
    }
    this.locationCard=function()
    {
        return element(by.binding("card.location")).getText();
    }
    this.connectionTypeCard=function()
    {
        return element(by.binding("getConnectionType(card.connectiontype)")).getText();
    }
    this.portCard=function()
    {
        return element(by.binding("card.port")).getText();
    }
    this.versionCard=function()
    {
        return element(by.binding("card.version")).getText();
    }


    this.selectDevice = function(){

        element.all(by.css('a[ng-click="toggleSelected($event, card, true, options)"]')).then(function(rows) {
            for(var i=0;i<rows.length;i++){
                rows[i].click();
            }
        });

    }
    this.bulkAction= function()
    {
        element(by.xpath('//div/span/span[2]/a')).click();
    }
    this.deleteOption= function() { element(by.binding("'_Delete_' | i18n")).click();}
    this.addTagOption= function() { element(by.binding("'_AddTags_' | i18n")).click();}

    this.deleteButton=function() {
        element(by.buttonText("Delete")).click();
    }
    this.savetag= function()

    {
        element(by.binding("::'_Save_' | i18n")).click();
    }

    //------------------------------------------------------------------------------------------------------------
//
this.addTagBulk=function(value)
{
    this.selectDevice();

    this.bulkAction();
    this.addTagOption();
    browser.sleep(4000);
    this.setTag(value);
    browser.sleep(2000);
    this.savetag();

}



//delete
    this.deleteDevice=function()
    {
        this.selectDevice();
        // browser.wait(element(by.className('loader loader--app-loading ng-hide')).isPresent());

        this.bulkAction();
        this.deleteOption();
        this.deleteButton();

    }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Elements for Add device
    this.addDevice = element(by.xpath('//a[@tooltip="Add Device"]'));
    this.iconPlus = element(by.xpath('//a[@tooltip="Add Device"]/span'));


    this.getIconPlus = function() {
        browser.sleep(3000);

        this.addDevice.click();
    };

    var devName = element(by.css('input[id= "name"]'));

    this.setDevName = function(name) {
        browser.sleep(3000);
        devName.sendKeys(name);
    };

    var hostName = element(by.css('input[id= "hostname"]'));

    this.setHostName = function(name) {
        browser.sleep(3000);
        hostName.sendKeys(name);
    };
    var location = element(by.css('input[id= "location"]'));

    this.setLocation = function(name) {
        browser.sleep(3000);
        location.sendKeys(name);
    };

    this.setConnType = function(type) {
        if(type=="SSH") {
            browser.sleep(3000);
            element(by.binding("::'_SSH_' | i18n")).click();
        }
        if(type=="Telnet") {
            browser.sleep(3000);

            element(by.binding("::'_TELNET_' | i18n")).click();
        }
    };




    var port =  element(by.css('input[id= "port"]'));

    this.setPort = function(type) {
       port.clear().then(function() {
            port.sendKeys(type);
        });
    }


    this.selectmfg = element(by.id('manufacturer'));

    this.setSelectMfg= function(name) {
        this.selectmfg.$('[value="'+name+'"]').click();

    };

    var serialNum =element(by.css('input[id= "serialNumber"]'));


    this.setSerialNum = function(serial) {
        browser.sleep(3000);
        serialNum.sendKeys(serial);
    };


this.tag=element(by.id('inputTag'));
    this.setTag = function(name) {
        this.tag.sendKeys(name);
        element(by.css('button[ng-click="addTag(tagText);"]')).click()
    };


    var addnotes=element(by.model("device.notes"));
    this.setNotes = function(value) {
        browser.sleep(3000);
        addnotes.sendKeys(value);
        browser.sleep(3000);
    };

    var close = element(by.xpath("//span[@class='icon-close"));

    this.getClose = function() {
        browser.sleep(3000);
        close.click();
    };


    this.cancel = element(by.binding("::'_Cancel_' | i18n"));
    var getCancel = function() {
        browser.sleep(3000);
        cancel.click();
    };





    var save = element(by.binding("(editing ? '_Save_' : '_Add_') | i18n"));

    this.getSave = function() {
        browser.sleep(3000);
        save.click();
    };






};//End of Add Device Page
module.exports = new deviceTabMain();