---
title: "Get Started with the Revenue Recognition Service"
domain: blng-dev
topic: get-started-with-the-revenue-recognition-service
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.965Z
estimatedTokens: 1092
keywords: [Started, Revenue, Recognition, Service, Review, Service’s, input, output, general, guidelines]
---

# Get Started with the Revenue Recognition Service

> Review the Revenue Recognition Service’s input and output parameters, and general
  guidelines.

# Get Started with the Revenue Recognition Service

Review the Revenue Recognition Service’s input and output parameters, and general guidelines.

The Revenue Recognition service is helpful when you want to forecast revenue on objects other than invoice lines or order products. For example, you can forecast revenue on quote lines once they’re approved, or on a contract after it’s activated. You can access the service by calling the blng.recognizeRevenue method through process builders, workflow rules, REST API, and APEX triggers.

The service takes several input parameters and passes them to Salesforce Billing. You can define these parameters based on equivalent fields on your source object. For example, if you want to recognize revenue after a contract is activated, you could set the startDate parameter to the contract’s Activated Date field, and the revenueAmount parameter to the List Amount field from the contract’s originating quote.

If the service processes all parameters successfully, it returns parameters indicating the success and creates a revenue schedule with revenue transactions. If there are any errors, the service returns parameters for the number and types of errors encountered.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=blng_dev)

#### Tip

By default, the Revenue Recognition Service API doesn't return success messages after successfully creating a revenue schedule and its transcations. We recommend building automation to confirm that your revenue schedule and revenue transactions were created successfully.

## Revenue Recognition Service Input Parameters

| Name | Type | Required | Definition |
| --- | --- | --- | --- |
| currencyIsoCode | String | No | Required for multicurrency orgs. Defines the currency used in revenue schedules made from this process builder. If not defined in a single-currency org, the revenue recognition service uses the org's default currency. |
| endDate | Date | Required only for daily or monthly revenue recognition | The date when the revenue recognition period ends. |
| legalEntityId | ID | No | Required for orgs that use legal entities. Used to determine the correct revenue recognition treatments to use for a revenue recognition rule.ImportantIf your org uses legal entities, and you're using revenue recognition API on an object that doesn't have a Legal Entity field, you must create a custom legal entity field and enter its value on your own, or look up the value from a related record. |
| revenueAmount | Decimal | Yes | The amount that the revenue recognition service uses to determine available, deferred, recognized, and total revenue based on revenue recognition rules. Users must ensure that the amount value they pass to revenue recognition service has the currency as the currencyIsoCode field. |
| revenueRecognitionRuleId | ID | Yes | The service applies this revenue recognition rule, then applies the rule’s appropriate revenue recognition treatment. |
| source | ID | Yes | ID of the entity that the revenue recognition service evaluates for revenue recognition or forecasting.When you configure your revenue recognition service setup, create a lookup field on the revenue schedule object. This field stores the ID of the record where you’re recognizing revenue. When you call the revenue recognition service, pass the source record’s ID to the lookup field. |
| sourceFieldName | String | Yes | ID of the source record that’s displayed in the revenue schedule. |
| startDate | Date | Yes | The date that the revenue recognition period begins. When the revenue distribution method is set to full recognition, the revenue recognition service uses the start date for full recognition and ignores the end date. |

## Revenue Recognition Service Output Parameters

| Name | Type | Definition |
| --- | --- | --- |
| jobId | ID | ID of the APEX job that passed the input parameters to the service. |
| inputValidationStatus | String | A list of input parameters that encountered validation errors. |
| totalNumberOfInputsWithErrors | Integer | The number of input parameters that the service couldn’t use due to errors (for example, a missing startDate, or a revenueAmount with a non-numeric character). |
| totalNumberOfInputsWithoutErrors | Integer | The number of input parameters that were successfully passed to the service. |
