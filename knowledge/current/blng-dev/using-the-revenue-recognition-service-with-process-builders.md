---
title: "Using the Revenue Recognition Service With Process Builders"
domain: blng-dev
topic: using-the-revenue-recognition-service-with-process-builders
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.068Z
estimatedTokens: 1461
keywords: [Revenue, Recognition, Service, Process, Builders, provide, convenient, way, call, you’ve, defined, builder, passing, key, want]
---

# Using the Revenue Recognition Service With Process Builders

> Process builders provide a convenient way to call the revenue recognition service. After
  you’ve defined your Revenue Recognition class, your process builder can call the service while
  passing it key revenue information from the object where you want to recognize
  revenue.

# Using the Revenue Recognition Service With Process Builders

Process builders provide a convenient way to call the revenue recognition service. After you’ve defined your Revenue Recognition class, your process builder can call the service while passing it key revenue information from the object where you want to recognize revenue.

When you use a process builder to trigger the revenue recognition process, configure your conditions carefully so you don’t accidentally create multiple revenue schedules at once for the same record. For example, if you want to recognize revenue when a contract’s status changes to Activated and your trigger condition checks only that the payment’s status equals Posted, any value change on an activated contract will trigger your process. Instead, use conditions that trigger the process only when a contract’s status *changes* to Activated.

Your process builder calls the blng.recognizeRevenue APEX method, which accepts the input parameters defined in [Revenue Recognition Service Developer Guide](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_RevenueRecognition_intro.htm "Salesforce Billing Revenue Recognition API lets you run revenue recognition for any Salesforce object in response to triggers, process builders, and REST API calls. The service uses Salesforce Billing revenue recognition rules, treatments, and distribution methods to create a revenue schedule and transaction hierarchy."). Take Remember, your RevenueRecognitionInputs class must at least define a Revenue Amount, Revenue Recognition Rule ID, Start Date, ID Source, and Source Field name. Your builder’s Apex variables have to pass at least these five variables to successfully invoke the Revenue Recognition class, and any optional variables that you need.

We recommend defining Apex variables that inherit the value of an equivalent field. When you map a field in the process builder, we recommend using a formula field such as VALUE(TEXT(Object.\[Field\])). Here are a few examples.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=blng_dev)

#### Note

Currently, currency fields aren’t supported as invocable variables, so we use decimals to define the revenueAmount.

| Object | Apex Variable Type | Object Field | Apex Variable Value |
| --- | --- | --- | --- |
| Quote Line | Formula | SBQQ__ListTotal__c | VALUE(Text([SBQQ__QuoteLine__c].SBQQ__ListTotal__c |
| Order | Formula | TotalPrice | VALUE(Text([OrderItem].TotalPrice)) |
| Contract | Formula | Amount | VALUE(Text(Contract__c.Amount)) |

Here are a few ways you can define a value for Start Date.

| Object | Apex Variable Type | Object Field | Apex Variable Value |
| --- | --- | --- | --- |
| Quote Line | Date | SBQQ__Start__Date__c | [SBQQ__QuoteLine__c].SBQQ__StartDate__c |
| Order | Date | Effective-Date | [OrderItem].Order.Effective-Date |
| Contract | Date | ActivatedDate | Contract.ActivatedDate |

## Example

In this example, we want a process builder that recognizes quote line revenue after a quote is approved.

Criteria

Executes when any of the conditions are met.

Conditions

| Field | Operator | Type | Picklist |
| --- | --- | --- | --- |
| [SBQQ__QuoteLine__c].SBQQ__Quote__r.SBQQ__Status__c | Equals | Picklist | Approved |

APEX Variables

Apex Class: Recognize Revenue

| Field | Type | Value |
| --- | --- | --- |
| startDate | Date | [SBQQ__QuoteLine__c].SBQQ__StartDate__c |
| sourceFieldName | String | SBQQ__Quote__Line__c |
| source | Field Reference | [SBQQ__QuoteLine__c].Id |
| revenueAmount | Formula | VALUE(Text([SBQQ__QuoteLine__c].SBQQ__ListTotal__c)) |
| revenueRecognitionRuleId | Field Reference | [SBQQ__QuoteLine__c].SBQQ__Product__r.blng__RevenueRecognitionRule__r.Id |
| endDate | Date | [SBQQ__QuoteLine__c].SBQQ__EndDate__c |
| LegalEntityID | Field Reference | [SBQQ__QuoteLine__c].LegalEntity__cNoteUse a custom quote line field called Legal Entity that looks up to the same legal entity that you plan to use for your order product. |

## Example

In this example, we want a process builder that forecasts revenue when a contract is activated. We’ve defined a custom blng\_\_Contract\_\_c field on the revenue schedule to store the contract’s ID value for sourceFieldName. Instead of using a variable from the source entity for our end date, we’ve defined a static date.

Criteria

Executes when all of the conditions are met.

Conditions

| Field | Operator | Type | Picklist |
| --- | --- | --- | --- |
| Contract | Is changed | Boolean | True |
| Contract | Equals | Picklist | Posted |

APEX Variables

Apex Class: Recognize Revenue

| Field | Type | Value |
| --- | --- | --- |
| startDate | Date | Contract.ActivatedDate |
| sourceFieldName | String | blng__Contract__c |
| source | Field Reference | Contract.Id |
| revenueAmount | Formula | VALUE(Text(Contract.blng__Amount__c)) |
| revenueRecognitionRuleId | Field Reference | [SBQQ__QuoteLine__c].SBQQ__Product__r.blng__RevenueRecognitionRule__r.Id |
| endDate | Date | 12/31/2019 |

## Example

In this example, we want a process builder that forecasts order product revenue after an order product is activated.

Criteria

Executes when all of the conditions are met.

Conditions

| Field | Operator | Type | Picklist |
| --- | --- | --- | --- |
| [OrderItem].SBQQ__Status__c | Is changed | Boolean | True |
| [OrderItem].SBQQ__Status__c | Equals | Picklist | Activated |

APEX Variables

Apex Class: Recognize Revenue

| Field | Type | Value |
| --- | --- | --- |
| startDate | Date | [OrderItem].Order.Effective-Date |
| sourceFieldName | String | blng__OrderProduct__c |
| source | Field Reference | [OrderItem].Id |
| revenueAmount | Formula | [OrderItem].Id |
| revenueRecognitionRuleId | Field Reference | [OrderItem].Product2.blng_Revenue_Recognition_Rule__r.Id |
| endDate | Date | [OrderItem].Order.EndDate |

## Related Topics

- Revenue Recognition Service Developer Guide (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_RevenueRecognition_intro.htm)
