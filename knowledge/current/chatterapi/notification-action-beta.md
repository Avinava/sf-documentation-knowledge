---
title: "Notification Action (Beta)"
domain: chatterapi
topic: notification-action-beta
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.955Z
estimatedTokens: 268
keywords: [Notification, Action, Beta, Execute]
---

# Notification Action (Beta)

> Execute an action on a notification.

# Notification Action (Beta)

Execute an action on a notification.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Notification Actions is a beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/). Use of this beta service is at the customer’s sole discretion.

Resource

```

```

Use the [Notification Types](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_notifications_types.htm "Get supported notification type details and actions.") resource to get the actionKey parameter.

Available version

66.0

HTTP methods

POST

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

POST doesn’t take request parameters or a request body.

Response body for POST

[Action Result](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_result.htm "Notification action execution result.")

## Code Examples

```
/connect/notifications/notificationId/actions/actionKey
```

## Related Topics

- Notification Types (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_notifications_types.htm)
- Action Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_result.htm)
