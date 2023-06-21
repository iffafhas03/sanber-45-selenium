//TEST CASE
//buka sauce demo
//buka URL
//Input Email
//ID = User-name
//Input Password
//ID :password
//click login button
//ID = login-button
//Success Login
//Xpath : //span[contains(text(), 'Products)]

describe("I success Login to Sauce Demo Homepage", () => {
  it("login with valid data", async () => {
    //BUKA URL
    await browser.url("http://www.saucedemo.com");
    await browser.pause(1);

    //INPUT EMAIL
    await $("#user-name").setValue("standard_user");
    //INPUT PASSWORD
    await $("#password").setValue("secret_sauce");

    //CLICK LOGIN BUTTON
    await $("#login-button").click();

    //success login
    let productTitle = await $('//span[contains(text(),"Products")]');
    await expect(productTitle).toBeExisting();
  });
});
