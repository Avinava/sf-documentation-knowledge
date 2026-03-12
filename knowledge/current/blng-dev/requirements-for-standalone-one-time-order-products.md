---
title: "Requirements
  for Standalone One-Time Order Products"
domain: blng-dev
topic: requirements-for-standalone-one-time-order-products
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.919Z
estimatedTokens: 315
keywords: [Requirements, Standalone, One-Time, Order, Products, product, API, Salesforce, Lightning, Classic]
---

# Requirements
  for Standalone One-Time Order Products

> Create a standalone one-time order product through API in Salesforce Lightning or
  Salesforce Classic.

# Requirements for Standalone One-Time Order Products

Create a standalone one-time order product through API in Salesforce Lightning or Salesforce Classic.

| Available in: Salesforce Billing Winter ’21 and later |
| --- |


## Required Fields

| Field | Value |
| --- | --- |
| Billing Rule | [Required] |
| Charge Type | One-Time |
| Revenue Recognition Rule | [Required] |
| Tax Rule | [Required] |

| Field | Value |
| --- | --- |
| Account | [Required] |
| Effective Date | [Required] |
| Price Book | [Required] |
| Status | Draft |

| Field | Value |
| --- | --- |
| Billable Unit Price | Required for invoice runs or Bill Now to pick up the order product for invoicing. We recommend calculating a value based on the formula described in Recurring Billing and Billable Unit Price. |
| Billing Rule | [Get value from product] |
| Billing Type | [Required] |
| Charge Type | One-Time |
| Charge Type | [Required] |
| End Date | [Required] |
| Order | [Required] |
| Ordered Quantity | [Required] |
| Price Book Entry | [Required] |
| Quantity | [Required] |
| Reference ID | [Required] |
| Revenue Recognition Rule | [Get value from product] |
| Service Date | [Required] |
| Status | Draft |
| Tax Rule | [Get value from product] |

## Example

```

```

## Code Examples

```
{
"allOrNone" : true,
"compositeRequest" : [{
  "method" : "POST",
  "url" : "/services/data/v48.0/sobjects/order",
  "referenceId" : "refOrder",
  "body" : { 
      "Status" : "Draft" , 
      "EffectiveDate" : "2020-06-16", 
      "Pricebook2Id" : "Pricebook records ID",
      "AccountId" : "Account records ID"}
  },{
  "method" : "POST",
  "url" : "/services/data/v48.0/sobjects/OrderItem",
  "referenceId" : "refOrderItem",
  "body" : { 
    "Quantity" : "1", 
    "Unitprice" : "10",
    "ServiceDate" : "2020-06-16", 
    "EndDate" : "2020-06-16", 
    "SBQQ__ChargeType__c" : "One-Time",
    "blng__BillableUnitPrice__c" : "10",
    "SBQQ__OrderedQuantity__c" : "1", 
    "SBQQ__Status__c" : "Draft",
    "PricebookEntryId" : "PricebookEntry records ID",
    "orderId" : "@{refOrder.id}"
    }
  }]
}
```
