---
title: "Revenue Recognition REST API"
domain: blng-dev
topic: revenue-recognition-rest-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.014Z
estimatedTokens: 828
keywords: [Revenue, Recognition, REST, API, call, invocable, Apex, HTTP, Samples]
---

# Revenue Recognition REST API

> Use REST API to call invocable methods from the Revenue Recognition Apex
  class.

# Revenue Recognition REST API

Use REST API to call invocable methods from the Revenue Recognition Apex class.

This object is available in API version 48.0 and later.

## Supported REST HTTP Methods

URI

actions/custom/apex/blng\_\_RevenueRecognition

Formats

JSON, XML

HTTP Methods

POST

Authentication

Bearer Token

## Parameters

| Input | Details |
| --- | --- |
| currencyIsoCode | TypeStringDescriptionRequired only for multicurrency orgs. Defines the currency used in revenue schedules made from this process builder. If not defined, in a single-currency org, the revenue recognition service uses the org's default currency. |
| legalEntityID | TypeIDDescriptionRequired for orgs that use legal entities. Used to determine the correct revenue recognition treatments to use for a revenue recognition rule.ImportantIf your org uses legal entities, and you're using revenue recognition API on an object that doesn't have a Legal Entity field, you must create a custom legal entity field and enter its value on your own or look up the value from a related record. |
| revenueAmount | TypeDecimalDescriptionThe amount that the revenue recognition service uses to determine available, deferred, recognized, and total revenue based on revenue recognition rules. Users must ensure that the amount value they pass to revenue recognition service has the currency as the currencyIsoCode field. Required. |
| revenueRecognitionRuleId | TypeIDDescriptionThe service applies this revenue recognition rule, then applies the rule’s appropriate revenue recognition treatment. Required. |
| source | TypeIDDescriptionID of the entity that the revenue recognition service evaluates for revenue recognition or forecasting. Required. |
| sourceFieldName | TypeStringDescriptionThis field appears on the revenue schedule and stores a lookup to the source record’s ID. Required. |
| startDate | TypeDateDescriptionThe date that the revenue recognition period begins. When the revenue distribution method is set to full recognition, the revenue recognition service uses the start date for full recognition and ignores the end date. Required. |
| endDate | TypeDateDescriptionThe date when the revenue recognition period ends. Required only for monthly or daily recognition. |

## Response Body

| Name | Type | Definition |
| --- | --- | --- |
| jobId | ID | The ID of the APEX job that sent your input parameters to the revenue recognition service. |
| inputValidationStatus | String | A list of input parameters that encountered validation errors. |
| totalNumberOfInputsWithErrors | Integer | The number of input parameters that the revenue recognition service couldn’t use due to errors (for example, a missing startDate, or a revenueAmount with a non-numeric character). |
| totalNumberOfInputsWithoutErrors | Integer | The number of input parameters that were successfully passed to the revenue recognition service. |

## Samples

Sample Request Body

This payload passes a payment record to the Revenue Recognition Service. The service attempts to create a revenue schedule based off the revenue amount of $12000 and the defined revenue recognition rule.

```

```

Sample Response Body

In this case, we receive a response with one error because the sample payload didn’t include a startDate variable.

```

```

## Code Examples

```
{
  "inputs":[
    {
      "revenueAmount":"12000",
      "currencyIsoCode":"USD",
      "legalEntityId":"a1j5A000001P2ri",
      "revenueRecognitionRuleId":"a2A0x000000jM6REAU",
      "startDate":"2019-08-29",
      "source":"a2217000000G4ecAAC",
      "sourceFieldname":"blng__Contract__c"
     }
   ]
}
```

```
[
    {
        "actionName" : "blng__RecognizeRevenue",
        "errors" : null,
        "isSuccess" : true,
        "outputValues" : {
            "jobId" : "7070x00000s3Ut9AAE",
            "totalInputWithoutErrors" : "0",
            "totalInputWithErrors" : "1",
            "inputValidationStatus" : [
                [ "Queued"],
                [ "Start date is a required field"]
            ]
        }
    }
]
```
