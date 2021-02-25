import {standardUser} from "../data/data";

class LoginPage {
    get loginField() { return $('#user-name') };
    get passwordField() { return $('#password') };
    get loginBtn() { return $('#login-button') };
    get productLabelHomePage() { return $('.product_label') };


    LoginAs(user) {
        this.loginField.setValue(standardUser.login);
        this.passwordField.setValue(standardUser.password);
        if (this.loginBtn.isClickable()) {
            this.loginBtn.click();
        }
    }
}
export default new LoginPage();