---
title: "Calculate Quote API"
domain: cpq-dev-api
topic: calculate-quote-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.829Z
estimatedTokens: 510
keywords: [Calculate, Quote, API, calculates, prices, CPQ, REST, Examples, Apex]
---

# Calculate Quote API

> The Calculate Quote API calculates the prices of a CPQ quote.

# Calculate Quote API

The Calculate Quote API calculates the prices of a CPQ quote.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |


Calculate Quote API performances handles calculations similarly to the speed of asynchronous calculations in Salesforce CPQ. We do not recommend using it for processes that require instant calculation.

The Calculate Quote API doesn’t use batches when creating and calculating quotes. Performance may vary for quotes with large volumes of quote lines.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_dev_api)

#### Note

The Calculate Quote API requires callback when evaluating quote-scoped product rules.

Formats

JSON, Apex

HTTP Method

PATCH

Authentication

Authorization: Bearer token

**REQUEST**

Parameter 1

Name: quote

Type: QuoteModel

Required: Yes

Description: Representation of SBQQ\_\_Quote\_\_c data. See [CPQ API QuoteModel](atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_api_quote_model_9.htm#cpq_api_quote_model_9 "The Quote model represents a CPQ quote data model in Salesforce CPQ.")

Parameter 2

Name: callbackClass

Type: String

Required: Required for Apex Trigger

Description: This Apex class implements the CPQ CalculateCallback interface.

## REST Examples

```

```

This request body quoteToCalculate.json file calculates a quote. The context value is a JSON formatted string.

```

```

An example response body after successfully calculating a product. The actual response is a JSON formatted string.

```

```

## Apex Examples

When you execute the Calculate API with an Apex trigger, you also need to create a quote calculator callback class. This class must implement the CPQ CalculateCallback interface to save the quote after calculating it in the background.

```

```

Before saving the QuoteCalculator example class, make sure that the CPQ model classes are added as individual Apex classes in your org.

```

```

For an example of the QuoteCalculator class, run the following code in anonymous Apex.

```

```

## Code Examples

```
curl "https://yourInstance.salesforce.com/services/apexrest/SBQQ/ServiceRouter?loader=SBQQ.QuoteAPI.QuoteCalculator" -H 
"Content-Type: application/json" -H "Authorization: Bearer token" -X PATCH -d 
"@quoteToCalculate.json"
```

```
{"context":"{"quote":{"record":{"attributes":{"type":"SBQQ__Quote__c",
"url":"/services/data/v41.0/sobjects/SBQQ__Quote__c/a0p61000002NUmoAAG"},
"SBQQ__PartnerDiscount__c":null,"SBQQ__GenerateContractedPrice__c":null,
"SBQQ__QuoteProcessId__c":"a0m61000005NYxO",
"SBQQ__NetAmount__c":100.0,"SBQQ__CustomerDiscount__c":null,
"SBQQ__CustomerAmount__c":100.0,"SBQQ__PaymentTerms__c":"Net30",
"SBQQ__RenewalUpliftRate__c":null,"Name":"Q-00822","SBQQ__Type__c":"Quote",
"SBQQ__SubscriptionTerm__c":null,"SBQQ__MarkupRate__c":null,
"SBQQ__OrderGroupID__c":null,"SBQQ__DistributorDiscount__c":null,
"SBQQ__OrderByQuoteLineGroup__c":false,"SBQQ__OrderBy__c":null,
"SBQQ__PricebookId__c":"01s61000000LI67AAG","SBQQ__EndDate__c":null,
"SBQQ__Account__c":null,"SBQQ__StartDate__c":null,
"SBQQ__FirstSegmentTermEndDate__c":null,"SBQQ__BillingFrequency__c":null,
"SBQQ__LineItemsGrouped__c":false,"SBQQ__ExpirationDate__c":null,
"SBQQ__Primary__c":false,"SBQQ__LineItemCount__c":1.0,"SBQQ__MasterContract__c":null,
"SBQQ__EditLinesFieldSetName__c":null,
"Id":"a0p61000002NUmoAAG","SBQQ__Unopened__c":false,"SBQQ__RenewalTerm__c":null},
"nextKey":2,"netTotal":100.00,
"netNonSegmentTotal":100.0000,"lineItems":[{"upliftable":false,
"targetCustomerTotal":null,"targetCustomerAmount":null,
"record":{"attributes":{"type":"SBQQ__QuoteLine__c",
"url":"/services/data/v41.0/sobjects/SBQQ__QuoteLine__c/a0l610000061yHpAAI"},
"SBQQ__CarryoverLine__c":false,"SBQQ__TermDiscountTier__c":null,
"SBQQ__VolumeDiscount__c":null,"SBQQ__BillingType__c":null,
"SBQQ__Discount__c":null,"SBQQ__ListPrice__c":100.0,"SBQQ__Existing__c":false,
"SBQQ__ProductName__c":"Product1","SBQQ__SegmentIndex__c":null,
"SBQQ__DiscountTier__c":null,"SBQQ__SBCustomLevel__c":null,"SBQQ__ComponentTotal__c":null,
"SBQQ__RenewedSubscription__c":null,
"SBQQ__SubscriptionTargetPrice__c":null,"SBQQ__AllowAssetRefund__c":false,
"SBQQ__Optional__c":false,"SBQQ__PriorQuantity__c":null,
"SBQQ__Source__c":null,"SBQQ__Quote__c":"a0p61000002NUmoAAG","SBQQ__SBCustomEndDate__c":null,
"SBQQ__ProratedListPrice__c":100.0,"SBQQ__ChargeType__c":null,
"SBQQ__UpliftAmount__c":0.0,"SBQQ__ComponentSubscriptionScope__c":null,
"SBQQ__OptionLevel__c":null,"SBQQ__NetPrice__c":100.0,"SBQQ__SBCustomCity__c":null,
"Id":"a0l610000061yHpAAI","SBQQ__OriginalQuoteLineId__c":null,
"SBQQ__RegularPrice__c":100.0,"SBQQ__EffectiveQuantity__c":1.0,"SBQQ__Quantity__c":1.0,
"SBQQ__TaxCode__c":null,"SBQQ__sbCustom_Number1__c":null,"SBQQ__ContractedPrice__c":null,
"SBQQ__CostEditable__c":false,"SBQQ__Dimension__c":null,
"SBQQ__DynamicOptionId__c":null,"SBQQ__SBCustomSupport__c":null,
"SBQQ__PreviousSegmentUplift__c":null,"SBQQ__EndDate__c":null,"SBQQ__PreviousSegmentPrice__c":null,
"SBQQ__UpgradedSubscription__c":null,"SBQQ__SpecialPriceType__c":null,
"SBQQ__SegmentKey__c":null,"SBQQ__OptionDiscount__c":null,"SBQQ__RequiredBy__c":null,
"SBQQ__UpgradedAsset__c":null,"SBQQ__Bundled__c":false,"SBQQ__SBCustomColor__c":null,
"SBQQ__OptionType__c":null,"SBQQ__Number__c":1.0,"SBQQ__SubscriptionPercent__c":null,
"SBQQ__ComponentListTotal__c":null,"SBQQ__TermDiscountSchedule__c":null,
"SBQQ__Taxable__c":false,"SBQQ__Description__c":null,"SBQQ__ProductCode__c":"P1",
"SBQQ__OriginalPrice__c":100.0,"SBQQ__GenerateContractedPrice__c":null,
"SBQQ__NetTotal__c":100.0,"SBQQ__UnitCost__c":null,"SBQQ__SubscriptionCategory__c":null,
"SBQQ__Hidden__c":false,"SBQQ__NonDiscountable__c":false,"SBQQ__Markup__c":0.0,"SBQQ__RenewedAsset__c":null,
"SBQQ__GrossProfit__c":null,"SBQQ__MinimumPrice__c":null,
"SBQQ__BundledQuantity__c":null,"SBQQ__BatchQuantity__c":null,
"SBQQ__ProrateMultiplier__c":1.0,"SBQQ__CustomerPrice__c":100.0,"SBQQ__SubscriptionTerm__c":null,
"SBQQ__MarkupRate__c":null,"SBQQ__DistributorDiscount__c":null,
"SBQQ__DefaultSubscriptionTerm__c":null,"SBQQ__PriceEditable__c":false,
"SBQQ__ProratedPrice__c":100.0,
"SBQQ__ComponentUpliftedByPackage__c":false,"SBQQ__StartDate__c":null,
"SBQQ__NonPartnerDiscountable__c":false,"SBQQ__BlockPrice__c":null,"SBQQ__MaximumPrice__c":null,
"SBQQ__SubscriptionPricing__c":null,"SBQQ__AdditionalDiscount__c":0.0,"SBQQ__Favorite__c":null,
"SBQQ__ProductOption__c":null,"SBQQ__OptionDiscountAmount__c":null,
"SBQQ__TermDiscount__c":null,"SBQQ__MarkupAmount__c":null,"SBQQ__PartnerDiscount__c":null,
"SBQQ__ComponentDiscountedByPackage__c":false,"SBQQ__Renewal__c":false,
"SBQQ__CompoundDiscountRate__c":null,"SBQQ__UpgradedQuantity__c":null,
"SBQQ__AdditionalDiscountAmount__c":null,"SBQQ__Cost__c":null,
"SBQQ__PackageProductDescription__c":null,"SBQQ__PartnerPrice__c":100.0,"SBQQ__DiscountSchedule__c":null,
"SBQQ__ComponentCost__c":null,"SBQQ__SubscribedAssetIds__c":null,
"SBQQ__SubscriptionScope__c":"Quote","SBQQ__Product__r":{"attributes":
{"type":"Product2","url":"/services/data/v41.0/sobjects/Product2/01t610000033JNPAA2"},
"SBQQ__ExternallyConfigurable__c":false,"SBQQ__CostEditable__c":false,\
"SBQQ__QuantityEditable__c":true,"SBQQ__Hidden__c":false,"SBQQ__ExcludeFromOpportunity__c":false,
"SBQQ__NonDiscountable__c":false,"Name":"Product1","PricebookEntries":
{"totalSize":1,"done":true,"records":[{"attributes":{"type":"PricebookEntry",
"url":"/services/data/v41.0/sobjects/PricebookEntry/01u610000055KTeAAM"},\
"UnitPrice":100.0,"Product2Id":"01t610000033JNPAA2","IsActive":true,
"Pricebook2Id":"01s61000000LI67AAG","Id":"01u610000055KTeAAM"}]},
"SBQQ__AssetConversion__c":"Oneperquoteline","SBQQ__IncludeInMaintenance__c":false,
"SBQQ__PriceEditable__c":false,"SBQQ__ReconfigurationDisabled__c":false,
"SBQQ__DescriptionLocked__c":false,"SBQQ__NewQuoteGroup__c":false,"SBQQ__Optional__c":false,
"SBQQ__ExcludeFromMaintenance__c":false,
"SBQQ__AssetAmendmentBehavior__c":"Default","ProductCode":"P1","SBQQ__OptionSelectionMethod__c":"Click",
"SBQQ__SubscriptionType__c":"Renewable","SBQQ__SubscriptionBase__c":
"List","SBQQ__CustomConfigurationRequired__c":false,"SBQQ__NonPartnerDiscountable__c":false,
"SBQQ__DefaultQuantity__c":1.0,"SBQQ__PricingMethodEditable__c":false,"SBQQ__BlockPricingField__c\
":"Quantity","SBQQ__HasConfigurationAttributes__c":false,"SBQQ__Taxable__c":false,
"SBQQ__PricingMethod__c":"List","Id":"01t610000033JNPAA2"},"SBQQ__SubscriptionBase__c\
":"List","SBQQ__BillingFrequency__c":null,"SBQQ__OriginalUnitCost__c":null,
"SBQQ__sbcustom_TwinField__c":null,"SBQQ__Bundle__c":false,"SBQQ__Product__c":\
"01t610000033JNPAA2","SBQQ__SpecialPrice__c":100.0,"SBQQ__PricingMethodEditable__c":false,
"SBQQ__Uplift__c":0.0,"SBQQ__PackageProductCode__c":null,"SBQQ__PricingMethod__c":"List",
"SBQQ__SegmentLabel__c":null,"SBQQ__AdditionalQuantity__c":null,
"SBQQ__DiscountScheduleType__c":null},"reconfigurationDisabled":false,"productQuantityScale"
:null,"productQuantityEditable":true,"productHasDimensions":false,
"parentItemKey":null,"parentGroupKey":null,"key":2,"dimensionType":null,"descriptionLocked":false,
"configurationType":null,"configurationEvent":null,
"amountDiscountProrated":null}],"lineItemGroups":[],"customerTotal":100.00,"channelDiscountsOffList":false,
"applyPartnerDiscountFirst":false,"applyAdditionalDiscountLast":false}}"}
```

```
{    
  "record": {        
    "attributes": {            
      "type": "SBQQ__Quote__c",             
      "url": "/services/data/v41.0/sobjects/SBQQ__Quote__c/a0p610000040iumAAA"        
    }, 
    "Id": "a0p61000002NUmoAAG",         
    "Name": "Q-00822"    
  }, 
  "nextKey": 2,     
  "netTotal": 200,     
  "netNonSegmentTotal": 200, 
    "lineItems": [        
      {            
        "record": {
          "attributes": {                    
            "type": "SBQQ__QuoteLine__c", 
            "url": "/services/data/v41.0/sobjects/SBQQ__QuoteLine__c/a0l61000003u09UAAQ"
          },                 
          "Id": "a0l610000061yHpAAI",
          "SBQQ__NetTotal__c": 200            
        }        
      }    
   "lineItemGroups": []
}
```

```apex
global with sharing class MyCallback implements SBQQ.CalculateCallback {
  global void callback(String quoteJSON){
    SBQQ.ServiceRouter.save('SBQQ.QuoteAPI.QuoteSaver', quoteJSON);       
  }
}
```

```apex
public with sharing class QuoteCalculator {     

  public void calculate(QuoteModel quote, String callbackClass) {
    QuoteCalculatorContext ctx = new QuoteCalculatorContext(quote, callbackClass);
    SBQQ.ServiceRouter.load('SBQQ.QuoteAPI.QuoteCalculator', null, JSON.serialize(ctx));    
  }    

  private class QuoteCalculatorContext {        
    private QuoteModel quote;             //The quote and callbackClass properties are called in the API code by the exact names seen here.
    private String callbackClass;         //Altering these property names will cause calculator API calls to fail.

    private QuoteCalculatorContext(QuoteModel quote, String callbackClass) {
      this.quote = quote;            
      this.callbackClass = callbackClass;        
    }
  } 
}
```

## Related Topics

- CPQ API QuoteModel (atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_api_quote_model_9.htm)
