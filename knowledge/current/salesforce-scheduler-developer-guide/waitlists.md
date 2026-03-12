---
title: "Waitlists"
domain: salesforce-scheduler-developer-guide
topic: waitlists
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.370Z
estimatedTokens: 485
keywords: [Waitlists, waitlist, participants, queue, includes, scheduled, appointment]
---

# Waitlists

> Get waitlist details with the list of participants. A waitlist is a
      queue that includes participants without a scheduled appointment.

# Waitlists

Get waitlist details with the list of participants. A waitlist is a queue that includes participants without a scheduled appointment.

Resource

```

```

Resource example

```

```

```

```

```

```

```

```

Available version

59.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isActive | Boolean | Indicates whether to fetch the active waitlists (true) or inactive waitlists (false). Used when the serviceTerritoryId parameter is specified. | Optional | 59.0 |
| maxLimit | Integer | Batch size of the waitlist participant records to fetch for each waitlist ID or service territory ID. The default value is 50. | Optional | 59.0 |
| offset | Integer | Number of waitlist participant records to skip from the response, in ascending order as per the created date. The default value is 0. The maximum offset value is 2000. | Optional | 59.0 |
| participant​Fields | String[] | Comma-separated list of fields to fetch from the waitlist participant object. | Optional | 59.0 |
| requestId | String | For internal use only. | Optional | 59.0 |
| service​TerritoryId | String | ID of the service territory to fetch the details of the waitlists. | Required if the waitlistIds parameter isn’t specified. | 59.0 |
| waitlist​Ids | String | Comma-separated list of the waitlist IDs to filter the result. | Required if the serviceTerritoryId parameter isn’t specified. | 59.0 |

Response body for GET

[Waitlist Output](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_responses_waitlist_output.htm "Output representation of the waitlist result.")

#### See Also

-   [*Salesforce Help*: Manage Waitlists](https://help.salesforce.com/s/articleView?id=platform.ls_manage_waitlists.htm&type=5&language=en_US "Salesforce Help: Manage Waitlists - HTML (New Window)")

## Code Examples

```
/connect/scheduling/waitlists
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/scheduling/waitlists?waitlistIds=0010000XKJSMEDD
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/scheduling/waitlists?waitlistIds=0010000XKJSMEDD,0010000XKJSMEDD
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/scheduling/waitlists?serviceTerritoryId=0010000XKJSMEDD&isActive=true
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/scheduling/waitlists?waitlistIds=0010000XKJSMEDD&participantFields=Source__c
```

## Related Topics

- Waitlist Output (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_responses_waitlist_output.htm)
