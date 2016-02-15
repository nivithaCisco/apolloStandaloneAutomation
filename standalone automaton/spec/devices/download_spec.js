/**
 * Created by nivmanoh on 2/8/2016.
 */

var DeviceTab = require('./../../POM/deviceTab.js');
var fileManual   = './Data/downloadFIle.csv';


var fs = require('fs');



describe('Export', function () {

    it('Export file', function () {
        browser.sleep(10000)
        var data;
        try {
            data = fs.readFileSync(fileManual,'utf-8');
            DeviceTab.Download(data);


        } catch (e) {
            console.log(e)
        }



    });





});