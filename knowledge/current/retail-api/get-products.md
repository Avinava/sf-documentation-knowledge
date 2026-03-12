---
title: "Get Products"
domain: retail-api
topic: get-products
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:36.835Z
estimatedTokens: 204
keywords: [Products, Retrieve, Product, Definition, Level, setting, configured, promotion, template]
---

# Get Products

> Retrieve a list of products. The list is returned based on the
      Product Definition Level setting that you configured in the promotion
    template.

# Get Products

Retrieve a list of products. The list is returned based on the Product Definition Level setting that you configured in the promotion template.

For more information on managing promotion products at either the promotion or the tactic level, see [Manage Your Products](https://help.salesforce.com/s/articleView?id=ind.tpm_concept_manage_your_products.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

Resource

```

```

Available version

55.0

Apex Request Example

Before running this apex code snippet:

-   Ensure the AUTHORIZATIONLISTFILTER process step is added to filter the discontinued products.
-   The yearoffset value for considerdiscontinued products is either set to 1 or 2 and ensure it's provided when the process step DISCONTINUEDPRODUCTSFILTER is added.

```

```

## Code Examples

```
GET_PRODUCTS
```

```apex
String salesOrg = '0001';
cgcloud.GetProductsCallout request = new cgcloud.GetProductsCallout(salesOrg);
cgcloud.ProductResolutionConfiguration configuration = new cgcloud.ProductResolutionConfiguration(cgcloud.ProductResolution.ResponseFormat.DENORMALIZED /* || ProductResolution.ResponseFormat.NORMALIZED => Deprecated */);

// Depending on each step we add, we will need to add some required properties to ProductResolutionConfiguration
configuration.setSteps(new List<cgcloud.ProductResolution.ProcessStep>{ 
    // Product Source: Execute a product query with the given product filter criteria. 
    // Requires 'productfilter', 'salesorg'
    cgcloud.ProductResolution.ProcessStep.PRODUCTQUERY,
    //Product Source: Extract manual fixed products from the input and adds them to the result.
    // Requires 'manualproducts'
    cgcloud.ProductResolution.ProcessStep.MANUALPRODUCTS,
    //Product Source: Load products for the tactic actuals defined for the tactics of the promotion defined by PromotionId.
    // Requires 'promotionid'
    cgcloud.ProductResolution.ProcessStep.TACTICACTUALPRODUCTS,
    //Product Source: Load products for the payment measures defined for the tactics of the promotion defined by PromotionId.
    // Requires 'promotionid'
    cgcloud.ProductResolution.ProcessStep.PAYMENTPRODUCTS,
    //Product Source: Load products for the Promotion Conditions of the promotion defined by PromotionId.
    // Requires 'promotionid'
    cgcloud.ProductResolution.ProcessStep.PROMOTIONCONDITIONPRODUCTS,
    //Product Source: Load frozen products of the promotion defined by PromotionId.
    // Requires 'promotionid'
    cgcloud.ProductResolution.ProcessStep.FROZENPRODUCTS,
    //Product Filter: Products those are exclude manually will be filtered out from the dynamic product resolution result.
    // Requires 'manualproducts'
    cgcloud.ProductResolution.ProcessStep.MANUALEXCLUDEDPRODUCTSFILTER,
    //Product Filter: Only planning products are returned from the dynamic product resolution result. 
    // Requires 'datefrom', 'datethru', 'referencedate' (KAMStateFilter by timeframe), 
    // or 'commitdate', 'referencedate' (KAMStateFilter by commit date)
    cgcloud.ProductResolution.ProcessStep.KAMSTATEFILTER,
    //Product Filter: Only products that are within the global account product list of the current account are returned from the dynamic product resolution result.
    // Requires 'accountid'
    cgcloud.ProductResolution.ProcessStep.GLOBALACCOUNTPRODUCTLISTFILTER,
    //Product Filter: Only products that are part of the Authorization List of the Account defined by AccountId are returned from the dynamic product resolution result. Requires 'accountid', 'datefrom', 'datethru'
    cgcloud.ProductResolution.ProcessStep.AUTHORIZATIONLISTFILTER,
    //Post Processing Step: Resolves the product hierarchy for the result products.
    // Requires 'productgrouplevels', 'referenceDate'
    cgcloud.ProductResolution.ProcessStep.RESOLVEHIERARCHY,
    //Post Processing Step: Resolves the tactic product excludes.
    // Requires 'tactics'
    cgcloud.ProductResolution.ProcessStep.RESOLVETACTICPRODUCTEXCLUDES,
    //Post Processing Step: Resolves the bill of material components
    cgcloud.ProductResolution.ProcessStep.RESOLVEBILLOFMATERIALS,
    //Product Filter: Discontinued products will be filtered as per year offset. Requires considerdiscontinuedproductsyearoffset
    cgcloud.ProductResolution.ProcessStep.DISCONTINUEDPRODUCTSFILTER
});

configuration.setAccountId('<accountId>');
configuration.setPromotionId('<promotion>');
configuration.setReferenceDate(Date.today());
configuration.setCommitDate(Date.today());
configuration.setDateFrom(Date.today().addDays(-5));
configuration.setDateThru(Date.today().addDays(5));
configuration.setProductGroupLevels('Category');
configuration.setProductFilter(
    new Map<String, Object>{
        'cgcloud__criterion_1_product__c' =>  new List<Id>{
            '<productid>'
        }
});
configuration.setManualProducts(new List<Object>{
    new Map<String, Object>{

        'productid' => '<productid1>',
        'included'=> true
    },
new Map<String, Object>{
        'productid' => '<productid2>',
        'included'=> false
    }
})
configuration.setKAMStateFilter('bytimeframe'); // or setKAMStateFilter('bycommitdate')
configuration.addTactic('<tacticId1>', new List<Id>('<productid1>')); //List of excluded products
configuration.addTactic('<tacticId2>', new List<Id>('<productid2>'));

configuration.setConsiderDiscontinuedProductsYearOffset(<lookbackPeriod>); // lookback period to filter discontinued products

cgcloud.GetProductsCallout.GetProductsCalloutResponse response = request.execute(
    cgcloud.TransactionHandler.getTransactionIdentifier(),
    configuration
);

cgcloud.GetProductsCallout.DeNormalizedCalloutProductRows result = ((cgcloud.GetProductsCallout.GetProductDeNormalizedCalloutResponse) response).getResult();
System.debug(JSON.serialize(result));
```
