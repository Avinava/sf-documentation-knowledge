---
title: "Engagement Channel Types"
domain: chatterapi
topic: engagement-channel-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.967Z
estimatedTokens: 536
keywords: [Engagement, Channel, Retrieve, Salesforce, org]
---

# Engagement Channel Types

> Retrieve a list of the engagement channel types from your Salesforce
      org.

# Engagement Channel Types

Retrieve a list of the engagement channel types from your Salesforce org. The API returns only the channel types that are active and whose usage type is set to Salesforce Scheduler.

Resource

```

```

Examples

```

```

```

```

```

```

Available version

56.0

HTTP methods

GET

Request parameters for GET

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

You can either specify workTypeGroupIds or workTypeIds in the request to filter the engagement channel type results.

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| workTypeGroupIds | String | List of the work type group IDs. The API returns the list of engagement channel type records that are associated with the specified work type group IDs.For example, suppose that you have three engagement channel types: EC1, EC2, and EC3. If you pass work type group IDs WTG1 that is associated with EC1 and EC2 and WTG2 that is associated with EC2, the API returns the list of engagement channel types where:EC1 is with WTG1 onlyEC2 is with both WTG1 and WTG2Because EC3 is not associated with any of the specified work type group IDs, the API doesn’t return the engagement channel type EC3. | Optional | 56.0 |
| workTypeIds | String | List of the work type IDs. The API returns the engagement channel type records that are associated with the specified work type IDs.For example, suppose that you have three engagement channel types: EC1, EC2, and EC3. If you pass work type IDs WT1 that is associated with EC1 and EC3 and WT2 that is associated with EC3, the API returns the list of engagement channel types where:EC1 is with WT1 onlyEC3 is with both WT1 and WT2Because EC2 is not associated with any of the specified work type IDs, the API doesn’t return the engagement channel type EC2. | Optional | 56.0 |

Response body for GET

[Engagement Channel Type Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_get_engagement_channel_type_output.htm "Output representation of the list of the engagement channel types.")

## Code Examples

```
/connect/scheduling/engagement-channel-types
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect​​​/scheduling/engagement-channel-types
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect​​​/scheduling/engagement-channel-types?workTypeGroupIds=0VSRM0000000BgX4AU
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect​​​/scheduling/engagement-channel-types?workTypeIds=08q2w000000XmniAAC,08q2w000000XmniAAS
```

## Related Topics

- Engagement Channel Type Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_get_engagement_channel_type_output.htm)
