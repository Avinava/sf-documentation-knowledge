---
title: "Enroll for Promotions"
domain: loyalty
topic: enroll-for-promotions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.095Z
estimatedTokens: 380
keywords: [Enroll, Promotions, loyalty, member, promotion, URL, Sample, JSON, Requests, program, asynchronously, sending, data, API, Resource, Input, Output]
---

# Enroll for Promotions

> Enroll a loyalty member to a promotion.

# Enroll for Promotions

Enroll a loyalty member to a promotion.

## Example URL

```

```

The request and response parameters vary depending on the input and output parameters configured for the EnrollInPromotion process type in a Salesforce org.

## Sample JSON Requests

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

Some of the API request fields contain field names that are interchangeable. For information on the list of interchangeable field names, see [Loyalty Management Connect API Interchangeable Request Fields](atlas.en-us.loyalty.meta/loyalty/loyalty_connect_interchangeable_request_fields.htm "The Loyalty Management Business API supports interchangeable fields in JSON requests. For some of the request fields, you can use either an ID, number, or name. For example, if you don’t want to store and use Salesforce IDs when accessing Loyalty Management-related data from an external system, simply use names and numbers instead.").

Here's an example with a member ID and promotion ID:

```

```

Here's an example with a membership number and promotion name:

```

```

## Sample JSON Response

```

```

#### See Also

-   [*Loyalty Management Help*: Create a Process Using Enroll in Promotion Process Template](https://help.salesforce.com/s/articleView?id=xcloud.bapi_task_enroll_in_promotion_process_template.htm&type=5&language=en_US "Loyalty Management Help: Create a Process Using Enroll in Promotion Process
    Template - HTML (New Window)")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/loyalty/programs/DemoProgram/program-processes/Enroll Promotion
```

```
{
   "processParameters":[
      {
         "MemberId":"0lMxx00000000BJEAY",
         "PromotionId":"0c8xx00000000BJEAY"
      }
   ]
}
```

```
{
   "processParameters":[
      {
         "MembershipNumber":"M1234",
         "PromotionName":"Flat20"
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
               "MemberId":"0lMRM0000004GBn2AM",
               "LoyaltyProgramMbrPromotionId":"1lpRM0000004CEmYAM"
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
enrollIn(promotion:for:version:)
```

## Related Topics

- Loyalty Management Connect API Interchangeable Request Fields (atlas.en-us.loyalty.meta/loyalty/loyalty_connect_interchangeable_request_fields.htm)
