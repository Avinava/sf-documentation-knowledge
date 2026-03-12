---
title: "Set Up Standalone Orders with API"
domain: blng-dev
topic: set-up-standalone-orders-with-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:08.940Z
estimatedTokens: 507
keywords: [Standalone, Orders, API, Manage, order, products, Salesforce, Billing, creating, CPQ, quote, call, They’re, useful, quotes]
---

# Set Up Standalone Orders with API

> Manage your orders and order products in Salesforce and Salesforce Billing without first
  creating a CPQ quote. We call this type of order a standalone order. They’re useful if you manage
  your quotes and opportunities in an external platform but plan to use Salesforce Billing for order
  management and billing.

# Set Up Standalone Orders with API

Manage your orders and order products in Salesforce and Salesforce Billing without first creating a CPQ quote. We call this type of order a standalone order. They’re useful if you manage your quotes and opportunities in an external platform but plan to use Salesforce Billing for order management and billing.

| Available in: Salesforce Billing Winter ’21 and later |
| --- |


Our standalone orders documentation contains required fields and setup instructions unique to standalone orders and order products. For concepts shared between standard orders and standalone orders, we provide links to the original CPQ and Billing topics.

You still need the Salesforce CPQ package installed to create standalone orders and order products. Although it doesn’t use any Salesforce CPQ features or objects, Salesforce Billing runs internal validations against the CPQ package for several features and workflows.

Create your objects by executing the following series of REST API requests in a single POST request. All object creation requests use the following endpoint, replacing VERSION with your required API version, such as v48.0 or v49.0:

```

```

Your JSON request must contain a compositeRequest class that defines both the order and the order item. Here’s a generic example with null values for the minimum required fields. Configurations for certain billing and order product features may require additional fields and entities.

## Example

```

```

-   **[Required Configurations for Types of Standalone Order Products](atlas.en-us.blng_dev.meta/blng_dev/blng_dev_standalone_orders_requirements_intro.htm)**
    Standalone orders require you to provide all the fields that would otherwise come from a CPQ quote. We provide a collection of topics showing all the required fields and their values for standalone order products used in different types of billing features. Certain fields require a specific value, while some are required but vary based on your specific configuration.

## Code Examples

```
/services/data/v48.0/composite
```

```
{
"allOrNone" : true,
"compositeRequest" : [{
  "method" : "POST",
  "url" : "/services/data/VERSION/sobjects/order",
  "referenceId" : "refOrder",
  "body" : { 
      "Status" : "Draft" , 
      "EffectiveDate" : ""
      "Pricebook2Id" : "",
      "AccountId" : ""}
  },{
  "method" : "POST",
  "url" : "/services/data/VERSION/sobjects/OrderItem",
  "referenceId" : "",
  "body" : { 
    "Quantity" : "", 
    "Unitprice" : "",
    "ServiceDate" : "", 
    "EndDate" : "", 
    "SBQQ__ChargeType__c" : "",
    "blng__BillableUnitPrice__c" : "",
    "SBQQ__OrderedQuantity__c" : "", 
    "SBQQ__Status__c" : "",
    "PricebookEntryId" : "",
    "orderId" : ""
    }
  }]
}
```

## Related Topics

- Required Configurations for Types of Standalone Order Products (atlas.en-us.blng_dev.meta/blng_dev/blng_dev_standalone_orders_requirements_intro.htm)
