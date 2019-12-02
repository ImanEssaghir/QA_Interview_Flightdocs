describe('Filter and Add Items to Cart', function() {

    beforeEach(function() {
        browser.waitForAngularEnabled(false); 
      });

    it('Navigate to URL', function() {       
      browser.get('http://automationpractice.com/index.php');
      expect(browser.getCurrentUrl()).toBe("http://automationpractice.com/index.php");
    
    });

    it('Click on Dresses tab', function(){
        //browser.get('http://automationpractice.com/index.php');    
        //expect(browser.getCurrentUrl()).toBe("http://automationpractice.com/index.php?id_category=8&controller=category");
        /*var sDress = element(by.tagName('title')).getText();
        expect(sDress).toEqual('Summer Dresses - My Store');*/
         /*var EC = protractor.ExpectedConditions;
        // Waits for the title to contain 'foo'.
        browser.wait(EC.titleContains('Summer Dresses'), 5000);*/
        
        element(by.partialLinkText('DRESSES')).click();
        expect(element(by.css('.cat-name')).getText()).toBe('DRESSES ');
    
    });

   it('Filter for a Summer Dress and select a dress', function(){
        //element(by.partialLinkText('DRESSES')).click();
        //expect(browser.getCurrentUrl()).toBe("http://automationpractice.com/index.php?id_category=8&controller=category");
        //expect(browser.getCurrentUrl()).toBe("http://automationpractice.com/index.php?id_product=5&controller=product");

        element(by.linkText('Summer Dresses')).click();
        expect(element(by.css('.cat-name')).getText()).toBe('SUMMER DRESSES ');
        element(by.partialLinkText('Printed Summer Dress')).click();
        expect(element(by.css('[itemprop="name"]')).getText()).toBe('Printed Summer Dress');

    });

   it('Select the yellow option and size medium then click Add to cart button', function(){
        // Select yellow color
        element.all(by.id('color_16')).click();

        // Get Medium size from the dropdown
        var dropdown = element.all(by.id('group_1'));
        dropdown.click();
        dropdown.all(by.tagName('option')).get(1).click();
        
        // Add to cart
        element.all(by.id('add_to_cart')).click();
        browser.sleep(3000);
        var model = element(by.id('layer_cart')).isDisplayed();
        expect(model).toBe(true);

        // Continue Shopping and Proceed to checkout
        expect(element(by.cssContainingText('.button', 'Continue shopping')));
        expect(element(by.cssContainingText('.button', 'Proceed to checkout')));

       // Product successfully added to your shopping cart
        expect(element(by.tagName('h2')).getText()).toEqual('Product successfully added to your shopping cart');
        
        var d = element(by.id('layer_cart_product_attributes'));
        expect(d);
        expect(d.getText()).toBe('Yellow, M');
        //expect(element(by.id('layer_cart_product_attributes')).getText()).toBe('Yellow, M');
        browser.sleep(3000);

    });

    it('Click the Continue Shopping Button', function(){
        element(by.cssContainingText('.button', 'Continue shopping')).click();
        expect(element(by.css('[itemprop="name"]')).getText()).toBe('Printed Summer Dress');
    });


    it('Hover over the Women tab and select the T-shirts option', function(){
        //element(by.partialLinkText('WOMEN')).click(); 
        //element.all(by.xpath("//*[@title='Women']")).click();
        //element.all(by.xpath("//*[@class='sf-with-ul']")).click();
        //var tShirt = element(by.tagName('T-shirts')).isDisplayed();        
        //expect(tShirt).toBe(true);
        //browser.actions().mousedown(action).click();
        //element.all(by.id('block_top_menu').tagName('a')[1]).click();

        browser.actions().mouseMove( element(by.css('a[title="Women"]')).click()).perform();
        expect(element(by.css('a[title="T-shirts"]')).isDisplayed()).toBeTruthy();

        element(by.css('a[title="T-shirts"]')).click();
        expect(element(by.css('.cat-name')).getText()).toBe('T-SHIRTS ');
        browser.sleep(3000);

    });

    it('Select a blue t-shirt', function(){
        element.all(by.id('color_2')).click();
        expect(element(by.css('a[name="Blue"]')).getText()).toEqual('');
        browser.sleep(3000);
    });

    // Sometimes, when the page is maximized, it gives error: index out of band for 0
    it('Change quantity to 2 via text input, blue color, small, add to cart', function(){ 
        // Select blue color
        element.all(by.id('color_14')).click();
        
        // Change quantity to 2 by entering text
        element.all(by.id('quantity_wanted')).clear();
        element.all(by.id('quantity_wanted')).sendKeys(2);
        
        // Select Small size from the dropdown
        var dropdown = element.all(by.id('group_1'));
        dropdown.click();
        dropdown.all(by.tagName('option')).get(0).click();

        // Add to element to cart
        element.all(by.id('add_to_cart')).click();
         
        // Continue Shopping and Proceed to checkout
        expect(element(by.cssContainingText('.button', 'Continue shopping')));
        expect(element(by.cssContainingText('.button', 'Proceed to checkout')));  
        browser.sleep(2000);
        // Product successfully added to your shopping cart
        expect(element(by.tagName('h2')).getText()).toEqual('Product successfully added to your shopping cart');
        browser.sleep(3000);

    });

    it('Click the continue button', function(){
        element(by.cssContainingText('.button', 'Continue shopping')).click();
        browser.sleep(2000);
        expect(element(by.id('our_price_display')).getText()).toBe('$16.51');
        browser.sleep(3000);

    });

    it('Change the quantity by using the signs, orange, small, add to cart', function(){
        // Select orange color
        element.all(by.id('color_13')).click();
                
        // Change quantity to 3 using + 
        var quantity = element.all(by.id('quantity_wanted'));
        quantity.click();
        quantity.all(by.xpath('//*[@id="quantity_wanted_p"]/a[2]/span/i')).click();
        
        // Select Small size from the dropdown
        var dropdown = element.all(by.id('group_1'));
        dropdown.click();
        dropdown.all(by.tagName('option')).get(0).click();

        // Add to element to cart
        element.all(by.id('add_to_cart')).click();
        browser.sleep(2000);

        // Continue Shopping and Proceed to checkout
        expect(element(by.cssContainingText('.button', 'Continue shopping')));
        expect(element(by.cssContainingText('.button', 'Proceed to checkout')));  
        browser.sleep(2000);
        // Product successfully added to your shopping cart
        expect(element(by.tagName('h2')).getText()).toEqual('Product successfully added to your shopping cart');
        browser.sleep(3000);
        
    });

    it('Click Proceed to Checkout', function(){
       //element.all(by.xpath('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a/span')).click();
        element(by.cssContainingText('.button', 'Proceed to checkout')).click();
        browser.sleep(2000);
        expect(element(by.id('total_price')).getText()).toBe('$113.53');
        browser.sleep(3000);

    });

});