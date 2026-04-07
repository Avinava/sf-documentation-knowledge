---
title: "Subscription Filters"
domain: mc-apis
topic: subscription-filters
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:16.835Z
estimatedTokens: 335
keywords: [Subscription, Filters, Event, Notification, Service, filter, notifications, sent, callback, expressed, name=value, pairs, Filtering, Items]
---

> Your Event Notification Service subscription can filter the notifications that are sent to the associated callback. Filters are expressed as a list of one or more name=value pairs on the subscription.

# Subscription Filters

Your Event Notification Service subscription can filter the notifications that are sent to the associated callback. Filters are expressed as a list of one or more name=value pairs on the subscription.

> To deliver the notification event to the callback, the name=value pairs must all be true.

## Subscription Filtering Data Items

The following data items are available for subscription filtering for each transactional send event type.

| Notification Event Category | Notification Event Type | Data Items Available for Filtering |
| --- | --- | --- |
| TransactionalSendEvents | EmailSent | definitionKey |
| TransactionalSendEvents | EmailNotSent | definitionKey, statusCode |
| TransactionalSendEvents | EmailBounced | definitionKey, bounceCode, smtpReason |

### Example

To filter TransactionalSendEvents.EmailSent events for a specific transactional send definition, include the following subscription filter when you create a subscription.

```
definitionKey=12345
```

If you apply this filter to a subscription for TransactionalSendEvents.EmailSent events, the callback receives TransactionalSendEvents.EmailSent notification events only for the transactional send definition of 12345. All other TransactionalSendEvents.EmailSent notification events are filtered out and not delivered to the callback.
