/**
 * Created by nivmanoh on 2/15/2016.
 */

var newSess = require('./../../POM/NewSessionPage.js');
var settingsTabPage = require('./../../POM/settingsPage.js');
var AppDataProvider = require('../../data/data.js');
var using = require('jasmine-data-provider');


describe('Recent + Quick', function () {


    using(AppDataProvider.newSession, function (data, description) {

        it('Verify Device connection through Quick Connect '+ description, function ()
        {
            newSess. quickConnect(data.hostname_ip,data.user_name, data.password, data.conn_type, "ON");
            newSess.session_connected();
            newSess. disConnectSession();
            newSess.session_dis_connected();
            newSess.closeTab();

        });

    });//End of Data Provider

})

