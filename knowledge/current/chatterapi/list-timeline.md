---
title: "List Timeline"
domain: chatterapi
topic: list-timeline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.333Z
estimatedTokens: 172
keywords: [Timeline, Output, representation, activity]
---

# List Timeline

> Output representation of the timeline activity list.

# List Timeline

Output representation of the timeline activity list.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| count | Integer | Number of items in the timeline activity list. | Small, 60.0 | 60.0 |
| items | Activity Timeline[] | Timeline activity details. | Big, 60.0 | 60.0 |

#### See Also

-   [*Connect REST API Developer Guide*: Payment Activity Timeline](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_get_payment_activity_timeline.htm "Connect REST API Developer Guide: Payment Activity Timeline  - HTML (New Window)")

## Code Examples

```
{
   "count": 2,
   "items": [
      {
         "activityCode": "payment_created",
         "amount": 18,
         "currency": "USD",
         "createDate": "Thu May 16 22:12:36 GMT 2024",
         "eventStatus": "Created",
         "eventType": "INTENT",
         "guid": "82b55da2-e32c-4c4e-982c-",
         "providerGateway": "STRIPE"
      },
      {
         "activityCode": "payment_started",
         "amount": "650.75",
         "currency": "USD",
         "createDate": "Thu May 16 22:12:36 GMT 2024",
         "eventType": "Authorized",
         "eventStatus": "Successful",
         "guid": "fbbbc244-3908-4d99-ac43-c9440f3ad741",
         "providerGateway": "STRIPE"
      }
   ]
}
```

## Related Topics

- Activity Timeline (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_timeline_output.htm)
