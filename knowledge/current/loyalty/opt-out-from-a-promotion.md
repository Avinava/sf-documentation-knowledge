---
title: "Opt Out from a Promotion"
domain: loyalty
topic: opt-out-from-a-promotion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.211Z
estimatedTokens: 299
keywords: [Opt, Promotion, loyalty, program, member, URL, Sample, JSON, Requests, Resource, Input, Output]
---

# Opt Out from a Promotion

> Opt out a loyalty program member from an available promotion.

# Opt Out from a Promotion

Opt out a loyalty program member from an available promotion.

## Example URL

```

```

The request and response parameters vary depending on the input and output parameters configured for the OptOutPromotion process type in a Salesforce org.

## Sample JSON Requests

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

Some of the API request fields contain field names that are interchangeable. For information on the list of interchangeable field names, see [Loyalty Management Connect API Interchangeable Request Fields](atlas.en-us.loyalty.meta/loyalty/loyalty_connect_interchangeable_request_fields.htm "The Loyalty Management Business API supports interchangeable fields in JSON requests. For some of the request fields, you can use either an ID, number, or name. For example, if you don’t want to store and use Salesforce IDs when accessing Loyalty Management-related data from an external system, simply use names and numbers instead.").

Here's an example with a membership number and promotion name:

```

```

Here's an example with a member ID and promotion ID:

```

```

## Sample JSON Response

```

```

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/loyalty/programs/DemoProgram/program-processes/Leave Promotion
```

```
{
   "processParameters":[
      {
         "MembershipNumber":"M1",
         "PromotionName":"Promo1"
      }
   ]
}
```

```
{
   "processParameters":[
      {
         "MemberId":"0lMRM0000004F152AE",
         "PromotionId":"1lpxx00000000CvAAI"
      }
   ]
}
```

```
{
   "message":null,
   "outputParameters":{
      "outputParameters":{
         "results":[
            {
               "LoyaltyProgramMbrPromotionId":"1lpxx00000000CvAAI"
            }
         ]
      }
   },
   "simulationDetails":{
      
   },
   "status":true
}
```

```
unenroll(promotionId:for:version:devMode:)
```

## Related Topics

- Loyalty Management Connect API Interchangeable Request Fields (atlas.en-us.loyalty.meta/loyalty/loyalty_connect_interchangeable_request_fields.htm)
