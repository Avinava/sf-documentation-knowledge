---
title: "CPQ API Quickstart Guide"
domain: cpq-dev-api
topic: cpq-api-quickstart-guide
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.681Z
estimatedTokens: 90
keywords: [CPQ, API, Quickstart, Review, examples, integrating, Salesforce, platform, Anonymous, Apex, NODEJS]
---

# CPQ API Quickstart Guide

> Review examples of integrating Salesforce CPQ API with your platform.

# CPQ API Quickstart Guide

Review examples of integrating Salesforce CPQ API with your platform.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |


## Anonymous Apex

This example reads a quote, adds a product, and saves the quote.

```

```

## NODEJS

This example reads a quote, adds a product, calculates the quote, and saves it.

```

```

## Code Examples

```
/**
 * Note: this doesn’t perform a calculation. Reference the calculate API to see how to calculate a quote.
 */

//the Id of the quote
String quoteId = 'a0Wf100000J1vk1';

//the Id of the product to add to the quote
String productId = '01tj0000003P1SN';

//the Id of the pricebook for the quote and product being added
String pricebookId = '01sj0000003THhKAAW';

//the currency code
String currencyCode = 'USD';

//the JSON formatted String representing the quote model to add a product to
String quoteModel = SBQQ.ServiceRouter.read('SBQQ.QuoteAPI.QuoteReader', quoteId);

//the JSON formatted String representing the product to be added to the quote
String productModel = SBQQ.ServiceRouter.load('SBQQ.ProductAPI.ProductLoader', productId, '{"pricebookId" : "' + pricebookId + '", "currencyCode" : "' + currencyCode + '"}');

//the JSON formatted String representing the quote with the product added to it
String updatedQuoteModel = SBQQ.ServiceRouter.load('SBQQ.QuoteAPI.QuoteProductAdder', null, '{"quote" : ' + quoteModel + ', "products" : [' + productModel + '], "ignoreCalculate" : true}');

//the JSON formatted String represeting the saved quote
String savedQuoteModel = SBQQ.ServiceRouter.save('SBQQ.QuoteAPI.QuoteSaver', updatedQuoteModel);
```

```
// 3rd party library to call into a Salesforce org
var jsforce = require('jsforce');

// login credentials to the org
var loginUrl = 'https://MyDomainName.my.salesforce.com'; // Your org’s My Domain login URL is listed on the My Domain Setup page.
var username = 'admin.user@company.com';
var password = 'password';

// quote and product details
var quoteId = 'a0bA000000FW2o4';
var productId = '01tA0000005NsiA';
var pricebookId = '01tA0000005NsiA';
var currencyCode = 'USD';

// log in to the org with with a valid username and password using jsforce
var conn = new jsforce.Connection({loginUrl: loginUrl});
conn.login(username, password).then(function () {
    return Promise.resolve(conn);
})

.then(function (conn) {    
  // read both the quote and the product to add    
  var quotePromise = conn.apex.get('/SBQQ/ServiceRouter?reader=SBQQ.QuoteAPI.QuoteReader&uid=' + quoteId);    
  var productPromise = conn.apex.patch('/SBQQ/ServiceRouter?loader=SBQQ.ProductAPI.ProductLoader&uid=' + productId, {        
    context: JSON.stringify({            
      pricebookId: pricebookId,
      currencyCode: currencyCode        
    })    
  });    
  return Promise.all([quotePromise, productPromise]);
})

.then(function (models) {
    // add the retrieved product to the retrieved quote in the first group
    var quoteModel = JSON.parse(models[0]);
    var productModel = JSON.parse(models[1]);
    return conn.apex.patch('/SBQQ/ServiceRouter?loader=SBQQ.QuoteAPI.QuoteProductAdder', {
        context: JSON.stringify({
            quote: quoteModel,
            products: [productModel],
            groupKey: 0,
            ignoreCalculate: true
        })
    });
})
.then(function (quoteWithProduct) {
    var quote = JSON.parse(quoteWithProduct);
    // calculate the quote with the added product
    return conn.apex.patch('/SBQQ/ServiceRouter?loader=SBQQ.QuoteAPI.QuoteCalculator', {
        context: JSON.stringify({
            quote: quote
        })
    });
})
.then(function (calculatedQuote) {
    var quote = JSON.parse(calculatedQuote);
    // save the calculated quote
    return conn.apex.post('/SBQQ/ServiceRouter', {
        saver: 'SBQQ.QuoteAPI.QuoteSaver',
        model: JSON.stringify(quote)
    });
})
.then(function (savedQuoted) {
    // log the quote has been saved
    console.log('Quote finished processing', savedQuoted);
});
```
