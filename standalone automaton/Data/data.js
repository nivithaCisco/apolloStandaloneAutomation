/**
 * Created by nivmanoh on 2/5/2016.
 */
var AppDataProvider = function() {


    //---------------Vikesh-------------------------

    this.ImportFromPutty = {

         "Import Single Telnet Session": {protocol: "BOTH", ToUpload: "../Data/ImportFromCSV/ToUpload/TCS_1_upload.txt", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_1_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat" },
         "Import Single SSH Session": { protocol: "BOTH", ToUpload: "../Data/ImportFromCSV/ToUpload/TCS_2_upload.txt", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_2_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
         "SSH: Import only session of selected criteria": {protocol: "SSH", ToUpload: "../Data/ImportFromCSV/ToUpload/TCS_3_upload.txt", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_3_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat" },
         "TELNET: Import only session of selected criteria": { protocol: "TELNET", ToUpload: "../Data/ImportFromCSV/ToUpload/TCS_4_upload.txt", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_4_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
         "Import telnet with only ssh": {protocol: "TELNET", ToUpload: "../Data/ImportFromCSV/ToUpload/TCS_5_upload.txt", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_5_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat" },
         "Import ssh with only telnet": { protocol: "SSH", ToUpload: "../Data/ImportFromCSV/ToUpload/TCS_6_upload.txt", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_6_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
         "Import session copies session name": {protocol: "BOTH", ToUpload: "../Data/ImportFromCSV/ToUpload/TCS_7_upload.txt", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_7_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat" },
        "Import session with IP address": { protocol: "BOTH", ToUpload: "../Data/ImportFromCSV/ToUpload/TCS_8_upload.txt", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_8_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
        "Import session with saved credentials": { protocol: "BOTH", ToUpload: "../Data/ImportFromCSV/ToUpload/TCS_9_upload.txt", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_9_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
         "Import session with saved proxy": { protocol: "BOTH", ToUpload: "../Data/ImportFromCSV/ToUpload/TCS_10_upload.txt", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_10_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
         "Import session with alternate port mismatch common port": { protocol: "BOTH", ToUpload: "../Data/ImportFromCSV/ToUpload/TCS_11_upload.txt", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_11_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
         "Import session with Import with max/min port, invalid port": { protocol: "BOTH", ToUpload: "../Data/ImportFromCSV/ToUpload/TCS_12_upload.txt", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_12_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
         "Import session with Duplicates": { protocol: "BOTH", ToUpload: "../Data/ImportFromCSV/ToUpload/TCS_13_upload.txt", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_13_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
         "Import session with Duplicates and allow only SSH": { protocol: "SSH", ToUpload: "../Data/ImportFromCSV/ToUpload/TCS_13_upload.txt", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_13_exp_1.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
         "Import session with Duplicates and allow only TELNET": { protocol: "TELNET", ToUpload: "../Data/ImportFromCSV/ToUpload/TCS_13_upload.txt", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_13_exp_2.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
         "Import with existing duplicates": { protocol: "BOTH", ToUpload: "../Data/ImportFromCSV/ToUpload/TCS_13_upload.txt", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_13_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
         "Import with no host and IP": { protocol: "BOTH", ToUpload: "../Data/ImportFromCSV/ToUpload/TCS_14_upload.txt", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_14_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
        "Import Empty Files": { protocol: "BOTH", ToUpload: "../Data/ImportFromCSV/ToUpload/TCS_15_upload.txt", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_15_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},

    };

/*
    this.ImportFromSecureCRT = {

        "Import Single SSH Session": {protocol: "BOTH", ToUpload: "../Data/ImportFromSecureCRT/ToUpload/TCS_1_upload.xml", Exp: "../standalone automaton/Data/ImportFromSecureCRT/Exp/TCS_1_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat" },
        "Import Single Telnet Session": { protocol: "BOTH", ToUpload: "../Data/ImportFromSecureCRT/ToUpload/TCS_2_upload.xml", Exp: "../standalone automaton/Data/ImportFromSecureCRT/Exp/TCS_2_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
        "SSH: Import only session of selected criteria": {protocol: "SSH", ToUpload: "../Data/ImportFromSecureCRT/ToUpload/TCS_3_upload.xml", Exp: "../standalone automaton/Data/ImportFromSecureCRT/Exp/TCS_3_exp_1.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat" },
        "TELNET: Import only session of selected criteria": { protocol: "TELNET", ToUpload: "../Data/ImportFromSecureCRT/ToUpload/TCS_3_upload.xml", Exp: "../standalone automaton/Data/ImportFromSecureCRT/Exp/TCS_3_exp_2", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
        "Import ssh with only telnet": { protocol: "SSH", ToUpload: "../Data/ImportFromSecureCRT/ToUpload/TCS_4_upload.xml", Exp: "../standalone automaton/Data/ImportFromSecureCRT/Exp/TCS_4_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
        "Import telnet with only ssh": {protocol: "TELNET", ToUpload: "../Data/ImportFromSecureCRT/ToUpload/TCS_5_upload.xml", Exp: "../standalone automaton/Data/ImportFromSecureCRT/Exp/TCS_5_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat" },
        "Import file with raw/serial/rlogin": {protocol: "BOTH", ToUpload: "../Data/ImportFromSecureCRT/ToUpload/TCS_6_upload.xml", Exp: "../standalone automaton/Data/ImportFromSecureCRT/Exp/TCS_6_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat" },
        "Import session with saved credentials": { protocol: "BOTH", ToUpload: "../Data/ImportFromSecureCRT/ToUpload/TCS_7_upload.xml", Exp: "../standalone automaton/Data/ImportFromSecureCRT/Exp/TCS_7_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
       "Import session with alternate port mismatch common port": { protocol: "BOTH", ToUpload: "../Data/ImportFromSecureCRT/ToUpload/TCS_8_upload.xml", Exp: "../standalone automaton/Data/ImportFromSecureCRT/Exp/TCS_8_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
        "Import session with Import with max/min port, invalid port": { protocol: "BOTH", ToUpload: "../Data/ImportFromSecureCRT/ToUpload/TCS_9_upload.xml", Exp: "../standalone automaton/Data/ImportFromSecureCRT/Exp/TCS_9_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
        "Import session with Duplicates": { protocol: "BOTH", ToUpload: "../Data/ImportFromSecureCRT/ToUpload/TCS_10_upload.xml", Exp: "../standalone automaton/Data/ImportFromSecureCRT/Exp/TCS_10_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
        "Import with existing duplicates": { protocol: "BOTH", ToUpload: "../Data/ImportFromSecureCRT/ToUpload/TCS_10_upload.xml", Exp: "../standalone automaton/Data/ImportFromSecureCRT/Exp/TCS_10_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
        "Import Empty Files": { protocol: "BOTH", ToUpload: "../Data/ImportFromSecureCRT/ToUpload/TCS_11_upload.xml", Exp: "../standalone automaton/Data/ImportFromSecureCRT/Exp/TCS_11_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
        "Import session with data changes from WinSCP": { protocol: "BOTH", ToUpload: "../Data/ImportFromSecureCRT/ToUpload/TCS_12_upload.xml", Exp: "../standalone automaton/Data/ImportFromSecureCRT/Exp/TCS_12_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
        "Import session with folder containing duplicate devices": { protocol: "BOTH", ToUpload: "../Data/ImportFromSecureCRT/ToUpload/TCS_13_upload.xml", Exp: "../standalone automaton/Data/ImportFromSecureCRT/Exp/TCS_13_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
        "Import session for SSH with folder containing duplicate devices": { protocol: "SSH", ToUpload: "../Data/ImportFromSecureCRT/ToUpload/TCS_13_upload.xml", Exp: "../standalone automaton/Data/ImportFromSecureCRT/Exp/TCS_13_exp_1.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
        "Import session for TELNET with  folder containing duplicate devices": { protocol: "TELNET", ToUpload: "../Data/ImportFromSecureCRT/ToUpload/TCS_13_upload.xml", Exp: "../standalone automaton/Data/ImportFromSecureCRT/Exp/TCS_13_exp_2.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},
        "Import special char for folders": { protocol: "BOTH", ToUpload: "../Data/ImportFromSecureCRT/ToUpload/TCS_14_upload.xml", Exp: "../standalone automaton/Data/ImportFromSecureCRT/Exp/TCS_14_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/deleteVik.bat"},




   };
*/
    this.ImportWithSavedCred = {

        "Import session with saved credentials": { protocol: "BOTH", ToUpload: "../Data/ImportFromCSV/ToUpload/TCS_9_upload.txt", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_9_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/delete.bat"},
    };
    this.ImportWithSavedCredSec = {

        "Import session with saved credentials": { protocol: "BOTH", ToUpload: "../Data/ImportFromSecureCRT/ToUpload/TCS_7_upload.xml", Exp: "../standalone automaton/Data/ImportFromCSV/Exp/TCS_7_exp.csv", download_loc: "../standalone automaton/Resources/downloads/devices.csv", auto_it: "../Resources/AutoItScripts/DownloadHandler.exe", delete:"../Resources/AutoItScripts/delete.bat"},
    };

    this.unResponsivePort = {
        "SSH": {hostname_ip: "172.18.194.56", conn_type: "SSH", port: "2"},
        "TELNET": {hostname_ip: "172.18.192.14", conn_type: "TELNET", port: "55"},
    };

    this.unResponsiveHost = {
        "SSH": {hostname_ip: "WrongHost", conn_type: "SSH", port: "22"},
        "TELNET": {hostname_ip: "WrongTelNetIP", conn_type: "TELNET", port: "23"},
    };


    this.SSHDLinuxMac = {
       // "10.106.2.119 sshd on linux": {hostname_ip: "10.106.2.119", user_name: "ftpuser", password:"ftp123", conn_type: "SSH"},

       "172.18.202.56 TELNET On Switch": {hostname_ip: "172.18.202.56", user_name: "lab", password:"lab",conn_type: "TELNET"},
       // "172.18.194.55 TELNET On Router": {hostname_ip: "172.18.194.56", user_name: "lab", password:"lab",conn_type: "TELNET"},
        // "172.18.194.55 TELNET On ASA Not working": {hostname_ip: "172.18.194.55", user_name: "lab", password:"lab",conn_type: "TELNET"},
  };
//dont edit
    this.addDevice = {
        'Mandate Hostanme': {
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
        },
    };

    this.AddDeviceTableView = {
        'Mandate Hostanme': {
            Mandatory: true,
            deviceName: "swtg-891a.cisco.com",
            ipAddress: "swtg-891a.cisco.com",
            port:"22",
            location: "",
            version: "",
            connectionType: "SSH",
            inputTag: "",
            Manufacture:"Cisco",
            serialNumber: "",
            notes: "",
            user_name: "lab",
            password:"lab",
            dev_num: 1
        },
        'All feilds': {
            Mandatory: false,
            deviceName: "TestDeviceCisco",
            ipAddress: "172.18.194.79",
            port:"22",
            location: "BGL-25-1",
            version: "",
            connectionType: "SSH",
            inputTag: "testCsico",
            serialNumber: "FNS13020QYU",
            Manufacture:"Cisco",
            notes: "This is for testing",
            user_name: "lab",
            password:"lab",
            dev_num: 2
        },
        'Mandate': {
            Mandatory: true,
            deviceName: "172.18.194.56",
            ipAddress: "172.18.194.56",
            port:"22",
            location: "",
            version: "",
            connectionType: "SSH",
            inputTag: "",
            Manufacture:"Cisco",
            serialNumber: "",
            notes: "",
            user_name: "lab",
            password:"lab",
            dev_num: 3
        }



    }
//------------------------------------------------
    this.moreThanTenSessconn = {
        "172.18.192.14 one": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "SSH"},
        "172.18.192.14 two": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "SSH"},
        "172.18.192.14 three": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "SSH"},
        "172.18.192.14 four": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "SSH"},
        "172.18.192.14 five": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "SSH"},
        "172.18.192.14 six": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "SSH"},
        "172.18.192.14 seven": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "SSH"},
        "172.18.192.14 Egiht": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "SSH"},
        "172.18.192.14 Nine": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "SSH"},
        "172.18.192.14 Ten": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "SSH"},
        "172.18.192.14 eleven": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "SSH"},
  };

//Dont Change
    this.newSession = {
        "172.18.192.14": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "SSH"},
        "172.18.194.56": {hostname_ip: "172.18.194.56", user_name: "lab", password:"lab", conn_type: "SSH"},

      "172.18.194.79": {hostname_ip: "172.18.194.79", user_name: "lab", password:"lab",conn_type: "SSH"},

    };
    //dependant on newsesson
    this.mulSessDisconn = {

        "172.18.192.14": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "SSH"},
        "172.18.194.79": {hostname_ip: "172.18.194.79", user_name: "lab", password:"lab",conn_type: "SSH"},
       "172.18.194.56": {hostname_ip: "172.18.194.56", user_name: "lab", password:"lab", conn_type: "SSH"},
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
        "IP Address": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "SSH"},
        "Short Name": {hostname_ip: "swtg-1811", user_name: "lab", password:"lab",conn_type: "SSH"},
        "FQDN": {hostname_ip: "swtg-1811.cisco.com", user_name: "lab", password:"lab",conn_type: "SSH"},
        "Router": {hostname_ip: "172.18.194.56", user_name: "lab", password:"lab",conn_type: "SSH"},
        "ASA": {hostname_ip: "172.18.194.79", user_name: "lab", password:"lab",conn_type: "SSH"},
        "Switch": {hostname_ip: " 172.18.202.56", user_name: "lab", password:"lab",conn_type: "SSH"},

        //"TELNET": {hostname_ip: "172.18.192.14", user_name: "lab", password:"lab",conn_type: "TELNET"},

    };

    this.emptyPort = {
        "SSH": {hostname_ip: "172.18.192.14", conn_type: "SSH"},
        "TELNET": {hostname_ip: "172.18.192.14", conn_type: "TELNET"},
    };

    this.invalidIP = {
        "SSH": {hostname_ip: "172 18.192.14", conn_type: "SSH"},
        "TELNET": {hostname_ip: "172 18.192.14", conn_type: "TELNET"},
    };

    this.emptyIP = {
        "SSH": {conn_type: "SSH"},
        "TELNET": {conn_type: "TELNET"},

    };

    this.emptyUsername = {
        "SSH": {hostname_ip: "172.18.194.56", password: "lab", conn_type: "SSH"},
        //"TELNET": {hostname_ip: "172.18.192.14", password: "lab", conn_type: "TELNET"},
    };

    this.emptyPassword = {
        "SSH": {hostname_ip: "172.18.194.56", user_name: "lab", conn_type: "SSH"},
        //"TELNET": {hostname_ip: "172.18.192.14", password: "lab", conn_type: "TELNET"},
    };

    this.invalidUsernamePassword = {
        "Invalid Username": {hostname_ip: "172.18.194.56", user_name: "abc", password: "lab", conn_type: "SSH"},
        "Invalid Password": {hostname_ip: "172.18.194.56", user_name: "lab", password: "abc", conn_type: "SSH"},
        //"TELNET": {hostname_ip: "172.18.192.14", password: "lab", conn_type: "TELNET"},
    };

     this.invalidPort = {
        "SSH": {hostname_ip: "172.18.194.56", conn_type: "SSH", port: "abc"},
        "TELNET": {hostname_ip: "172.18.192.14", conn_type: "TELNET", port: "xyz"},
    };




//-----------------sonal-----------------
// nivitha
//--------------------------------------------------------------------------------------------------





    this.ExportDataProvider = {
        "IP/Hostname": {type:"text",dropdown: "IP / Hostname", selector: by.xpath('//smart-card2/div/div/div/div/div[2]/div/div[1]/span[2]'),filename:"./Resources/downloads/exportIpaddress.csv"},
        'Device Name ': {type:"text",dropdown: "Device Name", selector: by.binding('card.name || card.hostname'),filename:"./Resources/downloads/exportDevice.csv"},
        "Location ": {type:"text",dropdown: "Location", selector: by.binding('group.name'),filename:"./Resources/downloads/exportLocation"},
        "Recent Acees": {type:"text",dropdown: "Recently Accessed", selector: by.binding('group.name'),filename:"./Resources/downloads/exportRecent.csv"}


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

