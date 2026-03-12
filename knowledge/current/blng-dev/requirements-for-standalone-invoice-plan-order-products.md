---
title: "Requirements for Standalone Invoice Plan Order Products"
domain: blng-dev
topic: requirements-for-standalone-invoice-plan-order-products
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.913Z
estimatedTokens: 438
keywords: [Requirements, Standalone, Invoice, Plan, Order, Products, product, API, Salesforce, Lightning, Classic]
---

# Requirements for Standalone Invoice Plan Order Products

> Create a standalone invoice plan order product through API in Salesforce Lightning or
  Salesforce Classic.

# Requirements for Standalone Invoice Plan Order Products

Create a standalone invoice plan order product through API in Salesforce Lightning or Salesforce Classic.

| Available in: Salesforce Billing Winter ’21 and later |
| --- |


Salesforce Billing invoices standalone invoice plan order products only when the order product has a billing treatment with a New Order Invoice Plan value. You can configure your billing rules and legal entities so that Salesforce Billing assigns your order product a billing treatment. Or, you can create your order product, and then give it a billing treatment on your own.

## Required Fields

| Field | Value |
| --- | --- |
| Billing Frequency | Invoice Plan |
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
| Billable Unit Price | When Enable Billing Order Validations is active, Salesforce Billing sets this value to zero for order products created with a billing frequency of Invoice Plan. |
| Billing Frequency | Invoice Plan |
| Billing Rule | [Required] |
| Billing Rule | Get value from product |
| Billing Treatment | [Must be a billing treatment with an active invoice plan] |
| Charge Type | Recurring |
| End Date | [Required] |
| Price Book Entry | [Required] |
| Quantity | [Required] |
| Revenue Recognition Rule | [Required] |
| Revenue Recognition Rule | [Get value from product] |
| Service Date | [Required] |
| Status | Draft |
| Tax Rule | [Required] |
| Tax Rule | [Get value from product] |
| Unit Price | [Required] |

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
    "EndDate" : "2021-06-15", 
    "BillingTreatment__c" : "BillingTreatment records ID", 
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
