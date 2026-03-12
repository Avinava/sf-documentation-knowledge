---
title: "Requirements for Standalone Evergreen Order Products"
domain: blng-dev
topic: requirements-for-standalone-evergreen-order-products
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.930Z
estimatedTokens: 358
keywords: [Requirements, Standalone, Evergreen, Order, Products, monthly, product, API, Salesforce, Lightning, Classic]
---

# Requirements for Standalone Evergreen Order Products

> Create a monthly evergreen order product through API in Salesforce Lightning or
  Salesforce Classic.

# Requirements for Standalone Evergreen Order Products

Create a monthly evergreen order product through API in Salesforce Lightning or Salesforce Classic.

| Available in: Salesforce Billing Winter ’21 and later |
| --- |


## Required Fields

| Field | Value |
| --- | --- |
| Billing Frequency | Monthly, Quarterly, Semiannual, or Annual |
| Billing Rule | [Required] |
| Charge Type | Recurring |
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
| Billing Frequency | Monthly |
| Billing Rule | Get value from product |
| Billing Type | [Required] |
| Charge Type | Recurring |
| Charge Type | [Required] |
| End Date | [Required] |
| Order | [Required] |
| Ordered Quantity | [Required] |
| Price Book Entry | [Required] |
| Product Subscription Type | Evergreen |
| Quantity | [Required] |
| Reference ID | [Required] |
| Revenue Recognition Rule | Get value from product |
| Service Date | [Required] |
| Status | Draft |
| Subscription Type | Evergreen |
| Tax Rule | Get value from product |

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
      "Pricebook2Id" : "Price records ID",
      "AccountId" : "Account records ID"}
  },{
  "method" : "POST",
  "url" : "/services/data/v48.0/sobjects/OrderItem",
  "referenceId" : "refOrderItem",
  "body" : { 
    "Quantity" : "1", 
    "Unitprice" : "50",
    "ServiceDate" : "2020-06-16", 
    "SBQQ__ProductSubscriptionType__c" : "*Evergreen*", 
    "SBQQ__SubscriptionType__c" : "*Evergreen*",
    "SBQQ__ChargeType__c" : "Recurring",
    "SBQQ__BillingType__c" : "Advance",
    "SBQQ__BillingFrequency__c" : "Monthly",
    "blng__BillableUnitPrice__c" : "50",
    "SBQQ__OrderedQuantity__c" : "1", 
    "SBQQ__DefaultSubscriptionTerm__c" : "1", 
    "SBQQ__Status__c" : "Draft", 
    "SBQQ__ContractAction__c" : "New"
    "PricebookEntryId" : "PricebookEntry records ID",
    "orderId" : "@{refOrder.id}"
    }
  }]
}
```
