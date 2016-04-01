/**
 * Created by nivmanoh on 2/8/2016.
 */
var fs = require('fs');
var util = require('util')
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


  this.parseCsvFile=function(fileName, callback){
        var stream = fs.createReadStream(fileName)
      console.log("1")
        var iteration = 0, header = [], buffer = ""
        stream.addListener('data', function(data){
            console.log(data)
            buffer+=data.toString()
            var parts = buffer.split('\r\n')
            parts.forEach(function(d, i){
                if(i == parts.length-1) return
                if(iteration++ == 0 && i == 0){
                    console.log("3")

                    header = d
                }else{
                    console.log("4")

                    callback(buildRecord(d))
                }
            })
            buffer = parts[parts.length-1]
        })

        function buildRecord(str){
            var record = {}
            console.log("2")

            str.split(pattern).forEach(function(value, index){
                if(header[index] != '')
                    record[header[index].toLowerCase()] = value.replace(/"/g, '')
            })
            return record
        }
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

    this.deleteTagOption= function() { element(by.binding("::'_DeleteTags_' | i18n")).click();}

    this.addTagOption= function() { element(by.binding("'_AddTags_' | i18n")).click();}

    this.deleteButton=function() {
        element(by.buttonText("Delete")).click();
    }

    this.addCard= function()

        {
            element(by.binding("(editing ? '_Save_' : '_Add_') | i18n")).click();
        }


    this.savetag= function()

    {
        element(by.binding("::'_Save_' | i18n")).click();
    }

    //------------------------------------------------------------------------------------------------------------
//
this.addTagBulk=function(value)
{

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

    var devName = element(by.css('input[id="name"]'));

    this.getDevName = function() {
        browser.sleep(3000);
        return devName.getAttribute('value');
    };

    var note = element(by.model('device.notes'));
    this.getNote = function() {
        browser.sleep(3000);
        return note.getAttribute('value');
    };
    var serialNum = element(by.model('device.serialnumber'));

    this.getserialNum = function(name) {
        browser.sleep(3000);
        serialNum.isPresent().then(function(present){
            if(present)
            {
                return devName.getAttribute('value');

            }
            else
            {
                return "";
            }

        })
    };


    this.setDevName = function(name) {
        browser.sleep(3000);
        devName.sendKeys(name);
    };

    var hostName = element(by.css('input[id= "hostname"]'));

    this.setHostName = function(name) {
        browser.sleep(3000);
        hostName.sendKeys(name);
    };

    this.getHostName = function() {
        browser.sleep(3000);
        return hostName.getAttribute('value');
    };
    var location = element(by.css('input[id= "location"]'));

    this.setLocation = function(name) {
        browser.sleep(3000);
        location.sendKeys(name);
    };

    this.getLocation = function() {
        browser.sleep(3000);
        return location.getAttribute('value');
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

    var connection = element(by.xpath('//span[@class="radio__input"]/../input[@checked]/../span[2]'));

    this.getConnection = function() {
        browser.sleep(3000);
        return connection.getText();
    };





    var port =  element(by.css('input[id= "port"]'));

    this.setPort = function(type) {
       port.clear().then(function() {
            port.sendKeys(type);
        });
    }
    this.getPort = function() {
        browser.sleep(3000);
        return port.getAttribute('value');
    };

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
        browser.sleep(3000);
       element(by.css('button[ng-click="addTag(tagText);"]')).click()
    };


    var addnotes=element(by.model("device.notes"));
    this.setNotes = function(value) {
        browser.sleep(3000);
        addnotes.sendKeys(value);
        browser.sleep(3000);
    };

    var close = element(by.xpath("//span[@class='icon-close]"));

    this.getClose = function() {
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