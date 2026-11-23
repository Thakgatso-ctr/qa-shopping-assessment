# Manual Test Cases

| Test ID | Feature | Preconditions | Steps | Test Data | Expected Result | Actual Result | Status | Severity |
|---------|---------|---------------|-------|-----------|-----------------|---------------|--------|----------|
| TC-001 | Valid Login | User is on the SauceDemo login page | 1. Enter username.<br>2. Enter password.<br>3. Click **Login**. | Username: `standard_user`<br>Password: `secret_sauce` | User is successfully logged in and redirected to the Products page. | Successfully logged in and Products page displayed. | Pass | N/A |


Test ID: TC-002
Feature: Invalid login
Preconditions: User is on the SauceDemo login page.
Steps:Enter standard_user in the Username field, enter wrongpassword in the password field.
Test Data:**username** 'standard_user' ,**Password** 'wrongpassword'
Expected Result: the user should not be able to login as indicated that the username or password is incorrect.
Actual Result: Epic sadface: Username and password do not match any user in this service
Status: Pass
Severity: N/A

Test ID: TC-003
Feature: Username field empty .
Preconditions:User is on the SauceDemo login page.
Steps: 1. Leave the Username field empty .
       2. Enter secret_sauce into the Password Field.
       3. Click the login button.
Test Data: **Passoword** 'secret_sauce'
Expected Result:  the user should remain on the login page and an error message should be displayed indicating that the Username field is required.
Actual Result: Epic sadface: Username is required

Status: Pass
Severity:N/A

Test ID: TC-004
Feature: Password Field empty
Preconditions: User is on the SauceDemo login page .
Steps: 1. Enter the standard_user  in the username field.
       2. Leave the Password field empty .
       3. Click the login button .
Test Data: **Username** 'standard_user'
Expected Result: the user should remain on the login page and an error message should be displayed  indicating that the passoword is required.
Actual Result: Epic sadface: Password is required
Status:Pass
Severity: N/a

Test ID: TC-005
Feature: Product Sorting
Preconditions: User is on the SauceDemo login page.
Steps: 1. Enter standard_user in the Username field.
       2. Enter secret_sauce in the Passowrd field.
       3. Click the login button .
       4. Click the drop down menu on the top right of the screen that shows 'Name (A-Z)'
       5. Select the ' Price(low to high)' option
Test Data: 1. **username** 'standard_user'
           2. **Passoword** 'secret_sauce'
           3. **Filter** Price(low to high)
Expected Result: The products should be displayed in ascending order by price, with the lowest-priced product displayed first and the highest-priced product displayed last.
Actual Result: the products in the inventory were sorted according to the applied filter which is Price(low to high) displaying the Product with the lowest price at the top and the product with the highest price at the bottom .
Status: Pass
Severity: N/A

Test ID:  TC-006

Feature: Add Items to Cart

Preconditions: the user logged into the SauceDEmo and is on the Products Page

Steps: 1. Click Add to cart for each product listed in the Test Data.
       2. Click the shopping cart icon.
       3. Verify that all selected products are displayed in the cart.
Test Data: 1. Sauce labs Backpack
           2. Sauce Labs Bike Light
           3. Sauce Labs Bolt T-Shirt
           4. Sauce Labs Fleece Jacket

Expected Result:1. The selected products should be added to the shopping cart.
                2. The Add to cart button should change to Remove
                3.The shopping cart badge/icon should display the correct number of selected products
                4.The shopping cart should display all the selected Products.

Actual Result:The add to cart button changes to Remove after clicking it and the cart badge updated 4, and the shopping cart displayed all four selected products.

Status: Pass
Severity: N/A

 Test ID:  TC-007

Feature: Remove Items From Cart

Preconditions: the user has logged in to SauceDemo and is alreafy on the shopping cart page.

Steps:1. Verify that the products listed in the Test Data are present in the cart.
      2. Click Remove for each Product.
      3. Verify that the products are no longer displayed in the cart.
Test Data: Sauce Labs BackPack and Sauce Labs Bike light.

Expected Result: 1. The Products disappear
                 2. The cart badge decreases
                 3. The item count changes.
Actual Result: AFter clicking the remove button the products do not appear in the cart page anymore and the cart badge changes .

Status: Pass

Severity: N/A