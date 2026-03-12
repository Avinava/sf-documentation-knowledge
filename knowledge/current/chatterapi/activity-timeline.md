---
title: "Activity Timeline"
domain: chatterapi
topic: activity-timeline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.344Z
estimatedTokens: 401
keywords: [Activity, Timeline, Output, representation, event, payment]
---

# Activity Timeline

> Output representation of the event details of the payment activity timeline.

# Activity Timeline

Output representation of the event details of the payment activity timeline.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| activityCode | String | Code of the payment event. | Big, 62.0 | 62.0 |
| amount | Double | Amount associated with the payment event. | Big, 60.0 | 60.0 |
| createDate | String | Date and time of creation of the payment event. | Big, 60.0 | 60.0 |
| currency | String | Currency of the payment event. | Big, 60.0 | 60.0 |
| eventStatus | String | Status of the transaction event. Valid values are:CREATEDFAILEDINCOMPLETESUCCESSFULUPDATED | Big, 60.0 | 60.0 |
| eventType | String | Type of payment event that has occurred. Valid values are:AUTHORIZECAPTUREINTENTMANDATEREFUND | Big, 60.0 | 60.0 |
| guid | String | Unique identifier of the payment intent. | Big, 60.0 | 60.0 |
| providerGateway | String | Payment service provider, such as Stripe, Adyen, or Paypal. | Big, 62.0 | 62.0 |

#### See Also

-   [*Connect REST API Developer Guide*: Payment Activity Timeline](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_get_payment_activity_timeline.htm "Connect REST API Developer Guide: Payment Activity Timeline  - HTML (New Window)")

-   [*Connect REST API Developer Guide*: List Timeline Output](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_responses_list_timeline_output.htm "Connect REST API Developer Guide: List Timeline Output  - HTML (New Window)")

## Code Examples

```
{
   "activityCode": "payment_created",
   "amount": 18,
   "createDate": "Thu May 16 22:12:36 GMT 2024",
   "eventStatus": "Created",
   "eventType": "INTENT",
   "guid": "82b55da2-e32c-4c4e-982c-",
   "providerGateway": "STRIPE"
}
```
