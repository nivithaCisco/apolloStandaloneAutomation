/**
 * Created by nivmanoh on 2/5/2016.
 */
var AppDataProvider = function() {

    this.newSession = {
        "172.18.194.56": {hostname_ip: "172.18.194.56", user_name: "lab", password:"lab", conn_type: "SSH"},
        "172.18.192.14": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "SSH"},
        "172.18.194.79": {hostname_ip: "172.18.194.79", user_name: "lab", password:"lab",conn_type: "SSH"},

    };
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
            ipAddress: "172.18.192.14",
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

};
module.exports = new AppDataProvider();

