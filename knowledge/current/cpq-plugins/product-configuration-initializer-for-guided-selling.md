---
title: "Product Configuration Initializer for Guided Selling"
domain: cpq-plugins
topic: product-configuration-initializer-for-guided-selling
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.989Z
estimatedTokens: 262
keywords: [Product, Configuration, Initializer, Guided, Selling, uses, custom, user-provided, APEX, select, options, results, prompts, works, standard]
---

# Product Configuration Initializer for Guided Selling

> The product configuration initializer uses a custom user-provided APEX page to select options and
  set field values based on the results of guided selling prompts. It works only for standard
  product option fields and not for configuration attributes or custom product option
  fields.

# Product Configuration Initializer for Guided Selling

The product configuration initializer uses a custom user-provided APEX page to select options and set field values based on the results of guided selling prompts. It works only for standard product option fields and not for configuration attributes or custom product option fields.

A product configuration initializer consists of a Visualforce controller and Visualforce page. To use the initializer on all of your org’s quote processes, go to the Product Configuration Initializer field in Salesforce CPQ line editor package settings and enter c\_\_ followed by the Visualforce page’s name. To use an initializer on a specific quote process, go to the quote process’s Product Configuration Initializer field and enter c\_\_ followed by the Visualforce page’s name. Product configuration initializers on quote process records override the package-level product configuration initializer.

## Example

Sample Visualforce controller:

```

```

## Example

Sample Visualforce page:

```

```

## Code Examples

```apex
public with sharing class LF_ProductInitializerController {
    public Product2[] products {get; set;}
    public Boolean skip {get; set;}
    Map<String,SBQQ__ProductOption__c> optionsByCode = new Map<String,SBQQ__ProductOption__c>();
    
    public LF_ProductInitializerController() {
        // Set "skip" to true to bypass the configuration page, or to false to on the config page after the initializer has completed
        skip = true;

        // Retrieve product (bundle)
        String pidsStr = ApexPages.currentPage().getParameters().get('pids');
        String[] pids = pidsStr.split(',');
        products = [SELECT Id, Family, (SELECT SBQQ__OptionalSKU__r.ProductCode, SBQQ__Quantity__c, SBQQ__Selected__c FROM SBQQ__Options__r) FROM Product2 WHERE Id IN :pids];
        for (SBQQ__ProductOption__c opt : products[0].SBQQ__Options__r) {
            optionsByCode.put(opt.SBQQ__OptionalSKU__r.ProductCode, opt);
        }
        
        String  myInput1 = ApexPages.currentPage().getParameters().get('Process Input 1');
        Decimal myInput2 = toInteger(ApexPages.currentPage().getParameters().get('Process Input 2'));

        // Perform any logic you want here

        // Then select options in the bundle, for example:
        if (myInput1 == 'ABC') {
            selectOption('MyProductOption1', myInput2);
        } else {
            selectOption('MyProductOption2', 1)
        }
    }
    
    private Decimal toInteger(String value) {
        return String.isBlank(value) ? 0 : Decimal.valueOf(value);
    }
    
    private void selectOption(String code, Decimal qty) {
        optionsByCode.get(code).SBQQ__Selected__c = (qty > 0);
        optionsByCode.get(code).SBQQ__Quantity__c = qty;
    }
}
```

```
<apex:page controller="LF_ProductInitializerController" contentType="text/xml" showHeader="false" sidebar="false">
    <products skipConfiguration="{!skip}">
    <apex:repeat var="product" value="{!products}">
        <product id="{!product.Id}">
            <apex:repeat var="opt" value="{!product.SBQQ__Options__r}">
                <option id="{!opt.Id}" 
                    selected="{!opt.SBQQ__Selected__c}" 
                    quantity="{!ROUND(opt.SBQQ__Quantity__c, 0)}"/>
            </apex:repeat>
        </product>
    </apex:repeat>
    </products>
</apex:page>
```
