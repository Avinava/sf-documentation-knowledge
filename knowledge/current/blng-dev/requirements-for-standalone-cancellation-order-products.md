---
title: "Requirements for Standalone Cancellation Order Products"
domain: blng-dev
topic: requirements-for-standalone-cancellation-order-products
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.894Z
estimatedTokens: 837
keywords: [Requirements, Standalone, Cancellation, Order, Products, product, API, Salesforce, Lightning, Classic, Title]
---

# Requirements for Standalone Cancellation Order Products

> Create a standalone cancellation order product through API in Salesforce Lightning or
  Salesforce Classic.

# Requirements for Standalone Cancellation Order Products

Create a standalone cancellation order product through API in Salesforce Lightning or Salesforce Classic.

| Available in: Salesforce Billing Winter ’21 and later |
| --- |


Salesforce Billing calculates canceled billings for a canceled standalone order product under the following settings.

-   The cancellation order product has a Contract Action value of Cancel.
-   The cancellation order product and related amendment order products all have a Revised Order Product field with the ID of the original order product used before any amendments or cancellations.
-   The cancellation order products and related amendment order products all have the same terminated date. The Terminated Date must be the last field you populate on each order product before you activate the cancellation order product.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=blng_dev)

#### Note

You can cancel standalone order products under both legacy cancellation and LIFO cancellation.

## Section Title

| Field | Value |
| --- | --- |
| Billing Frequency | Must match the value of the Revised Order Product field |
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
| Billing Frequency | Must match the value of the Revised Order Product field |
| Billing Rule | [Get value from product] |
| Billing Type | [Required] |
| Billable Unit Price | Required for invoice runs or Bill Now to pick up the order product for invoicing. We recommend calculating a value based on the formula described in Recurring Billing and Billable Unit Price. |
| Charge Type | Recurring |
| Contract Action | Cancel |
| Default Subscription Term | [Required] |
| End Date | [Required] for termed subscriptions, omit for evergreen subscriptions |
| Legal Entity | Must match the value of the Revised Order Product field |
| Order | [Required] |
| Ordered Quantity | Negative amount of the Revised Order Product field |
| Price Book Entry | Must match the value of the Revised Order Product field |
| Product Subscription Type | [Required] |
| Quantity | Negative amount of the Revised Order Product field |
| Revenue Recognition Rule | [Get value from product] |
| Revised Order Product | [ID number for the original order product used before any amendments] |
| Service Date | [Required] |
| Status | Draft |
| Subscription Type | [Required] |
| Tax Rule | [Get value from product] |
| Unit Price | [Required] |
| Terminated Date | [Set to the last day the canceled order product is billed]Terminated Date and Contract Action fields must be populated in a separate DML after the order product is created, all other required fields are populated, and the order product is activated.Terminated Date and Contract Action fields must be populated after the cancellation order product is created and activated. To do so:Populate Terminated Date on the original order product (the one that is linked in the Revised Order Product field).On the cancellation order product, populate Terminated Date and set Contract Action to Cancel.Save. |

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
    "Unitprice" : "1200",
    "ServiceDate" : "2020-06-16", 
    "EndDate" : "2021-06-15", 
    "SBQQ__ChargeType__c" : "Recurring",
    "SBQQ__BillingType__c" : "Advance",
    "SBQQ__BillingFrequency__c" : "Monthly",
    "blng__BillableUnitPrice__c" : "100",
    "SBQQ__OrderedQuantity__c" : "1", 
    "SBQQ__DefaultSubscriptionTerm__c" : "1", 
    "SBQQ__Status__c" : "Draft", 
    "PricebookEntryId" : "PricebookEntry records ID",
    "SBQQ__RevisedOrderProduct__c" : "RevisedOrderProduct(original orderproduct) records ID",
    "SBQQ__TerminatedDate__c" : "2020-08-15",
    "SBQQ__ContractAction__c" : "Cancel",
    "orderId" : "@{refOrder.id}"
    }
  }]
}
```
