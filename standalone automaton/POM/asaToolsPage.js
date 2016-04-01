/**
 * Created by sghoradk on 3/17/2016.
 */


// sonal

var asaToolsTab = function() {

    this.loginButtonMain = function (){
        browser.sleep(2000);
        return element(by.binding("::'_Login_' | i18n"));
    };

    this.loginButton = function () {
        browser.sleep(2000);
        return element(by.xpath("//div[@class='modal-footer ng-scope']/button[2]"));
    };

    this.userName = function() {
        browser.sleep(2000);
        return  element(by.xpath("//input[@id='userId']"));
    };

    this.passWord = function() {
        browser.sleep(2000);
        return  element(by.xpath("//input[@id='password']"));
    };

    this.userNameMain = function() {
        browser.sleep(2000);
        //return  element(by.binding("cco.user.name || cc.user.userId"));
        return element(by.xpath("//span[@class='disabled ng-binding']"));
    };

    this.cancelLogin= function() {
        browser.sleep(2000);
        return element(by.xpath("//div[@class='modal-footer ng-scope']/button[1]"));
    };

    this.toolsIcon = function () {
        //browser.wait(EC.visibilityOf(element(by.xpath("//span[@class='icon-power']"))),10000);
        browser.sleep(2000);
        return element(by.xpath("//span[@class='icon-tools']"));
    };

    this.firewallTopTalkers = function () {
        browser.sleep(2000);
        //return element(by.binding("::'_SAFTT_' | i18n"));
        return element(by.xpath("//span[@ng-if= '!tab.isFirewallTopTalkersRunning']"));

    };

    this.clickLogin = function () {
      this.loginButtonMain().click();
    };

    this.clickCancelLogin = function () {
        this.cancelLogin().click();
    };

    this.logIn = function (username, password) {
        this.userName().sendKeys(username);
        this.passWord().sendKeys(password);
        this.loginButton().click();
    };

    this.clickTools = function () {
        this.toolsIcon().click();
    };

    this.runFirewallTopTalkers = function () {
        this.firewallTopTalkers.click();
    };



}

module.exports = new asaToolsTab();

// sonal