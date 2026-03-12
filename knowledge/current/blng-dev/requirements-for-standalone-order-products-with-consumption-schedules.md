---
title: "Requirements for Standalone Order Products with Consumption Schedules"
domain: blng-dev
topic: requirements-for-standalone-order-products-with-consumption-schedules
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.905Z
estimatedTokens: 755
keywords: [Requirements, Standalone, Order, Products, Consumption, Schedules, monthly, product, schedule, rates, API, Salesforce, Lightning, Classic]
---

# Requirements for Standalone Order Products with Consumption Schedules

> Create a monthly order product with an order product consumption schedule and
  consumption rates through API in Salesforce Lightning or Salesforce Classic.

# Requirements for Standalone Order Products with Consumption Schedules

Create a monthly order product with an order product consumption schedule and consumption rates through API in Salesforce Lightning or Salesforce Classic.

| Available in: Salesforce Billing Winter ’21 and later |
| --- |


You must create the order, order product, order product consumption schedule, and at least one order product consumption rate. Your order product must be related to a product with a consumption schedule.

Salesforce Billing creates usage summaries when you activate an order product with the following configuration.

-   The order product is related to a product with a consumption schedule.
-   The order product has an active order product consumption schedule with at least one consumption rate.

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
| Billable Unit Price | Required for invoice runs or Bill Now to pick up the order product for invoicing. We recommend calculating a value based on the formula described in Recurring Billing and Billable Unit Price. |
| Billing Frequency | [Required] |
| Billing Rule | [Get value from product] |
| Billing Type | [Required] |
| Charge Type | [Required] |
| Charge Type | [Required] |
| Default Subscription Term | [Required] |
| End Date | [Required] |
| Order | [Required] |
| Ordered Quantity | [Required] |
| Price Book Entry | [Required] |
| Quantity | [Required] |
| Reference ID | [Required] |
| Revenue Recognition Rule | [Get value from product] |
| Revised Order Product | [Required] |
| Service Date | [Required] |
| Status | Draft |
| Tax Rule | [Get value from product] |

| Field | Value |
| --- | --- |
| Billing Rule | [Required] |
| Billing Term | [Required] |
| Billing Term Unit | [Required] |
| Category | [Required] |
| Rating Method | [Required] |
| Revenue Recognition Rule | [Required] |
| Tax Rule | [Required] |
| Type | [Required] |

| Field | Value |
| --- | --- |
| Lower Bound | [Required] |
| Price | [Required] |
| Pricing Method | [Required] |
| Processing Order | [Required] |
| Upper Bound | [Optional] |

| Field | Value |
| --- | --- |
| Billing Rule | [Required] |
| Billing Term | [Required] |
| Billing Term Unit | [Required] |
| Category | [Required] |
| Consumption Schedule | [Optional] |
| Order Product | [Required] |
| Rating Method | [Required] |
| Revenue Recognition Rule | [Required] |
| Tax Rule | [Required] |
| Type | [Required] |

| Field | Value |
| --- | --- |
| Lower Bound | [Required] |
| Order Product Consumption Schedule | [Required] |
| Price | [Required] |
| Pricing Method | [Required] |
| Processing Order | [Required] |
| Upper Bound | [Optional] |

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
    "SBQQ__ContractAction__c" : "New",
    "orderId" : "@{refOrder.id}"
    }
  },
  {
  "method" : "POST",
  "url" : "/services/data/v48.0/sobjects/SBQQ__OrderItemConsumptionSchedule__c",
  "referenceId" : "refOrderItemConsumptionSchedule",
  "body" : { 
    "SBQQ__RatingMethod__c" : "Tier", 
    "SBQQ__ConsumptionSchedule__c" : "ConsumptionSchedule record ID",
    "SBQQ__BillingTermUnit__c" : "Month",
    "SBQQ__BillingTerm__c" : "1",
    "SBQQ__Type__c" : "Range/Slab",
    "SBQQ__Category__c" : "Rates",
    "blng__BillingRule__c" : "BillingRule record ID", 
    "blng__RevenueRecognitionRule__c" : "RevenueRecognitionRule record ID", 
    "blng__TaxRule__c" : "TaxRule record ID",
    "SBQQ__OrderItem__c" : "@{refOrderItem.id}"
    }
  },{
  "method" : "POST",
  "url" : "/services/data/v48.0/sobjects/SBQQ__OrderItemConsumptionRate__c",
  "referenceId" : "refOrderItemConsumptionRate",
  "body" : { 
    "SBQQ__ProcessingOrder__c" : "1", 
    "SBQQ__LowerBound__c" : "1",
    "SBQQ__UpperBound__c" : "100 or null", 
    "SBQQ__Price__c" : "100", 
    "SBQQ__PricingMethod__c" : "Per Unit/ Flat Fee",
    "SBQQ__OrderItemConsumptionSchedule__c" : "@{refOrderItemConsumptionSchedule.id}"
    }
  }]
}
```
