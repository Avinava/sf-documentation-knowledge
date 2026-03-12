---
title: "Product Search Executor for Guided Selling"
domain: cpq-dev-api
topic: product-search-executor-for-guided-selling
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.822Z
estimatedTokens: 255
keywords: [Product, Search, Executor, Guided, Selling, plugin, filters, results, prompt, sales, rep’s, input, consists, Visualforce, controller]
---

# Product Search Executor for Guided Selling

> A Product Search Executor plugin filters the results of a guided selling prompt after
        a sales rep’s input. It consists of a Visualforce controller and Visualforce page, which you
        can associate with a specific quote process within a guided selling configuration. It’s
        useful if you want to add an extra level of guided selling product filtering beyond what
        sales reps can control.

# Product Search Executor for Guided Selling

A Product Search Executor plugin filters the results of a guided selling prompt after a sales rep’s input. It consists of a Visualforce controller and Visualforce page, which you can associate with a specific quote process within a guided selling configuration. It’s useful if you want to add an extra level of guided selling product filtering beyond what sales reps can control.

To use an executor with a quote process, go to the quote process’s Product Search Executor field and enter c\_\_ followed by the Visualforce page’s name.

## Example

Your organization sells laptop workstations. A guided selling prompt lets sales reps filter your product catalog by memory, screen size, and type of processor. You could also make a simple product search executor plugin that further filters their results by active products and products that aren’t bundle components.

Here’s a sample APEX controller for your plugin.

```

```

And here’s a sample Visualforce page.

```

```

## Code Examples

```apex
public with sharing class TWProductSearchController {
    public Product2[] products {get; set;}
    public String error {get; set;}
    public TWProductSearchController() {
        products = [SELECT Id FROM Product2 WHERE IsActive = true AND SBQQ__Component__c = false];
    }
}
```

```
<apex:page controller="TWProductSearchController" contentType="text/xml" showHeader="false" sidebar="false">
    <products error="{!error}">
    <apex:repeat var="product" value="{!products}">
        <product id="{!product.Id}"/>
    </apex:repeat>
    </products>
</apex:page>
```
