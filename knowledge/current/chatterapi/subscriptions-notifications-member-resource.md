---
title: "Subscriptions Notifications Member Resource"
domain: chatterapi
topic: subscriptions-notifications-member-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.701Z
estimatedTokens: 466
keywords: [Subscriptions, Notifications, Member, Resource, frequency, user, receives, subscription, Subscribe, unsubscribe, receiving]
---

# Subscriptions Notifications Member Resource

> Get information about the frequency with which a user receives
      subscription notifications. Subscribe or unsubscribe a user from receiving
    notifications.

# Subscriptions Notifications Member Resource

Get information about the frequency with which a user receives subscription notifications. Subscribe or unsubscribe a user from receiving notifications.

When users opt to receive notifications for the topics they follow, they get an email when the topic is added to a post that they have access to. When users opt to receive notifications for their streams, they get an email on every post in the stream.

Resource

```

```

```

```

In version 38.0–39.0, entityId must be a topic ID. In version 40.0 and later, entityId must be a topic ID or a Chatter feed stream ID.

Available version

38.0

Requires Chatter

Yes

HTTP methods

GET, POST, DELETE

Request body for POST

Root XML tag

<notificationMember>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| notification​Frequency | String | Frequency with which a user receives email. In version 38.0 and later, EachPost is the only valid value. | Required | 38.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| notification​Frequency | String | Frequency with which a user receives email. In version 38.0 and later, EachPost is the only valid value. | Required | 38.0 |

Response body for GET and POST

[Notification Member](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_notification_member.htm "A notification member.")

Response body for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/chatter/subscriptions/notification/entityId/members/userId
```

```
/connect/communities/communityId/chatter/subscriptions/notification/entityId/members/userId
```

```
{
   "notificationFrequency":"EachPost"
}
```

## Related Topics

- Notification Member (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_notification_member.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
