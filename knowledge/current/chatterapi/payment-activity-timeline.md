---
title: "Payment Activity Timeline"
domain: chatterapi
topic: payment-activity-timeline
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.467Z
estimatedTokens: 129
keywords: [Payment, Activity, Timeline, Retrieve, intent, chronologically, key, events, relating, place, users, source, truth]
---

# Payment Activity Timeline

> Retrieve the payment activity timeline for a payment intent. The timeline
    chronologically shows key events relating to a payment intent in one place, so your users can
    see information from a single source of truth.

# Payment Activity Timeline

Retrieve the payment activity timeline for a payment intent. The timeline chronologically shows key events relating to a payment intent in one place, so your users can see information from a single source of truth.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

GET

Response body for GET

[List Timeline](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_list_timeline_output.htm "Output representation of the timeline activity list.")

## Code Examples

```
/payments/payment-intents/paymentIntentId/timeline
```

```
https://yourInstance.salesforce.com/services/data/v66.0/payments/payment-intents/0wpPI0000xxxxx/timeline
```

## Related Topics

- List Timeline (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_list_timeline_output.htm)
