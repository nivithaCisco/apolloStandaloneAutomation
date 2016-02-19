/**
 * Created by nivmanoh on 2/5/2016.
 */
var AppDataProvider = function() {


    //---------------Vikesh-------------------------
    this.newSession = {
        "172.18.194.56": {hostname_ip: "172.18.194.56", user_name: "lab", password:"lab", conn_type: "SSH"},
        "172.18.192.14": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "SSH"},
        "172.18.194.79": {hostname_ip: "172.18.194.79", user_name: "lab", password:"lab",conn_type: "SSH"},

    };


    this.scrollBuffer = {
        "ScrollBuffer": {wrongOne: "99", wrongTwo: "50001", CorrectOne: "101", CorrectTwo: "50000"},

    };

    this.Port= {
        "Port": {wrongOne: "0", wrongTwo: "65536", CorrectOne: "1", CorrectTwo: "65535"},
    };

    this.host= {
        "Host": {wrongOne: "***", wrongTwo: "$$$$", CorrectOne: "ABC", CorrectTwo: "ABC123"},
    };
    this.protocol= {
        "SSH": {SSH: "SSH"},
        "SSH": {TelNet: "TelNet"},
    };
    //Not allowed to edit
    this.reconnWithCred = {

        "172.18.192.14": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "SSH"},


    };

    this.consoleColor = {

        "Cisco Light": {themeType:"Cisco Light", BG: "background-color: rgb(223, 223, 223);", text: "font-size: 12px; line-height: 17px; color: rgb(57, 57, 59);"},

        "Cisco Dark":{themeType:"Cisco Dark",BG: "background-color: rgb(57, 57, 59);", text: "font-size: 12px; line-height: 17px; color: rgb(223, 223, 223);"},

        "Cisco Matrix":{themeType:"Matrix",BG: "background-color: rgb(26, 26, 26);", text: "font-size: 12px; line-height: 17px; color: rgb(66, 169, 66);"},

        // "Custom":{themeType:"Custom",BG: "background-color: rgb(223, 223, 223);", text: "font-size: 12px; line-height: 17px; color: rgb(57, 57, 59);"},

    };
    this.consoleSessColor = {
        "Cisco Light": {themeType:"Cisco Light", BG: "height: 484px; background: rgb(223, 223, 223);", text: "white-space: pre; color: rgb(57, 57, 59); border-top-color: rgb(223, 223, 223); border-bottom-color: rgb(223, 223, 223);"},

        "Cisco Dark":{themeType:"Cisco Dark",BG: "height: 484px; background: rgb(57, 57, 59);", text: "white-space: pre; color: rgb(223, 223, 223); border-top-color: rgb(57, 57, 59); border-bottom-color: rgb(57, 57, 59);"},

        "Cisco Matrix":{themeType:"Matrix",BG: "height: 484px; background: rgb(26, 26, 26);", text: "white-space: pre; color: rgb(66, 169, 66); border-top-color: rgb(26, 26, 26); border-bottom-color: rgb(26, 26, 26);"},

        // "Custom":{themeType:"Custom",BG: "height: 484px; background-color: rgb(223, 223, 223);", text: "font-size: 12px; line-height: 17px; color: rgb(57, 57, 59);"},

    };






//---------------Vikesh-------------------------
//-----------sonal----------
    //SSH & TELNET connection

    this.newSessionVal = {
        "SSH": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "SSH"},
        //"TELNET": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "TELNET"},

    };

    this.emptyIP = {
        "SSH": {conn_type: "SSH"},
        //"TELNET": {conn_type: "TELNET"},

    };

    this.emptyUsername = {
        "172.18.194.56": {hostname_ip: "172.18.194.56", password: "lab", conn_type: "SSH"},
        //"172.18.192.14": {hostname_ip: "172.18.192.14", password: "lab", conn_type: "SSH"},
        //"172.18.192.14": {hostname_ip: "172.18.192.14", password: "lab", conn_type: "TELNET"},
    };

    this.emptyPassword = {
        "172.18.194.56": {hostname_ip: "172.18.194.56", user_name: "lab", conn_type: "SSH"},
        //"172.18.192.14": {hostname_ip: "172.18.192.14", user_name: "lab", password: "lab", conn_type: "SSH"},
    };

//-----------------sonal-----------------
// nivitha
//--------------------------------------------------------------------------------------------------
    this.quickSession = {
        "172.18.194.56": {hostname_ip: "172.18.194.56", user_name: "lab", password:"lab", conn_type: "SSH",port:"22"}
    };

    this.sortCheckerDataProvider = {
        "IP/Hostname": {type:"text",dropdown: "IP / Hostname", selector: by.xpath('//smart-card2/div/div/div/div/div[2]/div/div[1]/span[2]')},
        'Device Name ': {type:"text",dropdown: "Device Name", selector: by.binding('card.name || card.hostname')},
        "Location ": {type:"text",dropdown: "Location", selector: by.binding('group.name')}

    };

    this.filterTagCheckerdataProvider = {


        'Tag': {
            filterName: "Tags",
            value: "good",
        }  ,
        'No Tags': {
        filterName: "Tags",
        value: "No Tags",
    }    }

    this.filterCheckerdataProvider = {


        'Favorites': {
            page:"device",
            filterName: "Favorites",
            value: "Favorites",
            selector: by.css('.icon-star')
        },
        'No Favorites': {
            page:"device",
            filterName: "Favorites",
            value: "No Favorites",
            selector: by.css('.icon-star')
        }
    }

    this.TagDataProvider = {
        'Mandate Hostanme': {
            Mandatory: true,
            deviceName: "",
            ipAddress: "19.18.1.2",
            port: "22",
            location: "",
            connectionType: "SSH",
            inputTag: "",
            Manufacture: "Cisco",
            serialNumber: "",
            notes: ""
        },
        'All feilds': {
            Mandatory: false,
            deviceName: "TestDeviceCisco",
            ipAddress: "19.18.1.1",
            port: "22",
            location: "BGL-25-1",
            connectionType: "SSH",
            inputTag: "testCisco",
            serialNumber: "FNS13020QYU",
            Manufacture: "Cisco",
            notes: "This is for testing"
        }
    }

    this.AddDeviceDataProvider = {
        'Mandate Hostanme': {
            Mandatory: true,
            deviceName: "",
            ipAddress: "swtg-891a.cisco.com",
            port:"22",
            location: "",
            connectionType: "SSH",
            inputTag: "",
            Manufacture:"Cisco",
            serialNumber: "",
            notes: "",
            user_name: "lab",
            password:"lab"
        },
        'All feilds': {
            Mandatory: false,
            deviceName: "TestDeviceCisco",
            ipAddress: "172.18.194.79",
            port:"22",
            location: "BGL-25-1",
            connectionType: "SSH",
            inputTag: "testCsico",
            serialNumber: "FNS13020QYU",
            Manufacture:"Cisco",
            notes: "This is for testing",
            user_name: "lab",
            password:"lab"
        },
        'Mandate': {
            Mandatory: true,
            deviceName: "",
            ipAddress: "172.18.194.56",
            port:"22",
            location: "",
            connectionType: "SSH",
            inputTag: "",
            Manufacture:"Cisco",
            serialNumber: "",
            notes: "",
            user_name: "lab",
            password:"lab"
        }
    }
//--------------------------------------------------------------------------------------------------
};
module.exports = new AppDataProvider();

