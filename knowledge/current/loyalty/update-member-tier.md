---
title: "Update Member Tier"
domain: loyalty
topic: update-member-tier
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.236Z
estimatedTokens: 373
keywords: [Member, Tier, Upgrade, downgrade, loyalty, URL, Sample, JSON, Requests]
---

# Update Member Tier

> Upgrade or downgrade tier for a loyalty member.

# Update Member Tier

Upgrade or downgrade tier for a loyalty member.

## Example URL

```

```

The request and response parameters vary depending on the input and output parameters configured for the TierProcessing process type in a Salesforce org.

## Sample JSON Requests

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

Some of the API request fields contain field names that are interchangeable. For information on the list of interchangeable field names, see [Loyalty Management Connect API Interchangeable Request Fields](atlas.en-us.loyalty.meta/loyalty/loyalty_connect_interchangeable_request_fields.htm "The Loyalty Management Business API supports interchangeable fields in JSON requests. For some of the request fields, you can use either an ID, number, or name. For example, if you don’t want to store and use Salesforce IDs when accessing Loyalty Management-related data from an external system, simply use names and numbers instead.").

Here's an example with a member ID:

```

```

Here's an example with a membership number:

```

```

## Sample JSON Response

```

```

#### See Also

-   [*Loyalty Management Help*: Create a Process Using the Change Member Tier Process Template](https://help.salesforce.com/s/articleView?id=xcloud.bapi_task_change_member_tier_process_template.htm&type=5&language=en_US "Loyalty Management Help: Create a Process Using the Change Member Tier
    Process Template - HTML (New Window)")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/loyalty/programs/DemoProgram/program-processes/update Tier
```

```
{
   "processParameters":[
      {
         "MemberId":"0lMRM0000004GBs2AM",
         "NewTier":"Gold",
         "ReasonForChange":"update tier"
      }
   ]
}
```

```
{
   "processParameters":[
      {
         "MembershipNumber":"M2_Chloe_Sun",
         "NewTier":"Gold",
         "ReasonForChange":"update tier"
      }
   ]
}
```

```
{
   "message":null,
   "outputParameters":{
      "results":[
         {
            "CurrentTier":"Gold",
            "TierExpirationDate":"2023-10-31",
            "PreviousTier":"Silver",
            "EffectiveDate":"2023-09-07"
         }
      ]
   },
   "simulationDetails":{
      
   },
   "status":true
}
```

## Related Topics

- Loyalty Management Connect API Interchangeable Request Fields (atlas.en-us.loyalty.meta/loyalty/loyalty_connect_interchangeable_request_fields.htm)
