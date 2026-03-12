---
title: "Recommended Products Plugin"
domain: cpq-dev-api
topic: recommended-products-plugin
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.839Z
estimatedTokens: 1204
keywords: [Recommended, Products, Plugin, recommend, quote, Walkthrough, Error, Scenarios, Sample, Implementation]
---

# Recommended Products Plugin

> Use the Recommended Products plugin to recommend related products based on the existing
  products on a quote.

# Recommended Products Plugin

Use the Recommended Products plugin to recommend related products based on the existing products on a quote.

| Available in: Salesforce CPQ Winter ‘21 and later |
| --- |


The Recommended Products plugin lets customers use their own product recommendation service in Salesforce CPQ, together with product search, search filters, favorites, and guided selling.

With the Recommended Products plugin, sales reps can see a list of recommended products while they are creating their quote. By making relevant products easier to find, the quoting process is more efficient, and sales reps can sell more products.

Sample use cases of the Recommended Products plugin include:

-   You can help sales reps close more deals by enabling them to create quotes with the ideal mix of products that anticipate their customers' needs.
-   Sales reps can upsell more products by adding recommended products that are frequently sold with the products on their quotes.

Complete these steps to implement the Recommended Products plugin:

-   On the **Plugins** tab in the **Settings Editor**, enable the Recommended Products Plugin.
-   To add the **Add Recommendations** button to the quote line editor, activate the Add Recommendations custom action record. See [Custom Actions](https://help.salesforce.com/articleView?id=cpq_linking_custom_action.htm&type=5&language=en_US "HTML (New Window)").
-   To fully enable the Recommended Products feature, you must provide your own implementation of the plugin interface. You can use your recommendation engine or a third-party service. Your plugin interface must implement the recommend() method in the global ProductRecommendationPlugin interface:

```

```

This method takes quote and quote lines as arguments, and it outputs an ordered list of recommended price book entries. If at runtime the plugin input is missing a field required for your implementation, add it to the ReferencedFields field set on the corresponding object.

Add your plugin’s class name on the Plugins tab in **Settings**.

![Plugins tab in Settings Editor showing Recommended Products plugin setting](/docs/resources/img/en-us/260.0?doc_id=images%2Fcpq_recommended_products_plugin_settings.png&folder=cpq_dev_api)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_dev_api)

#### Note

-   A maximum of 2,000 price book entries are shown on the Recommended Products page, similar to the limit on the Product Lookup page. Your implementation class can return up to your top 2,000 recommendations. If you have more, you can use a recommendation score to sort and choose your top 2,000 products.
-   The Recommended Products plugin doesn’t support the Large Quote Threshold setting.
-   Salesforce CPQ prioritizes field-level security over Recommended Product plugins. If your plugin includes fields that your users don’t have permission to view, those fields aren't displayed on the Recommended Products page.
-   The Product Recommendation page uses the same field set as the Product Lookup page.

## Walkthrough

1.  Add products to a quote and click the **Add Recommendations** custom action.

    ![Image of quote line editor with Add Recommendations custom action](/docs/resources/img/en-us/260.0?doc_id=images%2Fcpq_recommended_products_plugin_custom_action_button.png&folder=cpq_dev_api)

2.  Salesforce calls your plugin implementation class and obtains an ordered list of PricebookEntry sObjects. These sObjects are then displayed on the Recommended Products page.

    ![Add Recommended Products page screen shot](/docs/resources/img/en-us/260.0?doc_id=images%2Fcpq_recommended_products_plugin_add_recommendations_page.png&folder=cpq_dev_api)


## Methods

**recommend()**

**Description**

Returns the product recommendations.

**Parameters**

| Param | Type | Description |
| --- | --- | --- |
| quote | SBQQ__Quote__c | Current quote object |
| quoteLines | List<SBQQ__QuoteLine__c> | Current quote lines of the quote. |

**Return Values**

**PricebookEntry\[ \]** : Ordered list of PricebookEntry SObjects.

## Error Scenarios

If your plugin throws an exception, the error shows on the Recommendations Lookup page. To show that the plugin implementation throws the error, the error message shows “Plugin Error:" as a prefix followed by the message from the exception.

## Sample Implementation

When you implement the Recommended Products plugin, you can create your own recommendation engine or use a third-party recommendation service. Store the product recommendations in your org in a custom object. Then, query the recommendations in the custom object from in the recommend() method of your plugin.

In this example, the name of the custom object that stores recommendations is ProductRecommendation\_\_c.

```

```

```

```

## Code Examples

```apex
global interface ProductRecommendationPlugin {
    PricebookEntry[] recommend(SObject quote, List<SObject> quoteLines);
}
```

```
// Create your own Custom Object to store your product recommendations
ProductRecommendation__c {
    Id Product2Id__c,
    Id RecommendedProduct2Id__c,
}
```

```apex
global class ProductRecommendationPluginJH implements SBQQ.ProductRecommendationPlugin{
global PricebookEntry[] recommend(SObject quote, List<SObject> quoteLines) {
    System.debug('ProductRecommendationPluginJH');
    // Get the price book Id of the quote
    Id pricebookId = (Id)quote.get('SBQQ__PriceBookId__c');
    String quoteCurrency=(String)quote.get('CurrencyIsoCode');
    // Get Ids of all products in the quote
    Id[] productIdsInQuote = new Id[0];
    for (SObject quoteLine : quoteLines) {
        Id productId = (Id)quoteLine.get('SBQQ__Product__c');
        productIdsInQuote.add(productId);
    }

    // Query the recommendation custom object records of all products in quote.
   ProductRecommendation__c[] recommendations = [
        SELECT RecommendedProduct2Id__c
        FROM ProductRecommendation__c
        WHERE Product2Id__c IN :productIdsInQuote];

    // Get Ids of all recommended products
    Id[] recommendedProductIds = new Id[0];
    for(ProductRecommendation__c recommendation : recommendations) {
        recommendedProductIds.add(recommendation.RecommendedProduct2Id__c);
    }
    System.debug('>>>>>>>>>>>'+recommendedProductIds);
    // Query the price book entries of the above recommended products
    PricebookEntry[] priceBookEntries = [
        SELECT Id, UnitPrice, Pricebook2Id, Product2Id, Product2.Name, Product2.ProductCode
        FROM PricebookEntry
        WHERE Product2Id IN :recommendedProductIds AND Pricebook2Id = :pricebookId AND CurrencyIsoCode=:quoteCurrency];
       
    return priceBookEntries;
}
}
```
