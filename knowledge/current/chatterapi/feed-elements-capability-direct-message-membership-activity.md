---
title: "Feed Elements Capability, Direct Message Membership Activity"
domain: chatterapi
topic: feed-elements-capability-direct-message-membership-activity
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.193Z
estimatedTokens: 245
keywords: [Feed, Elements, Capability, Direct, Message, Membership, Activity, activities]
---

# Feed Elements Capability, Direct Message Membership Activity

> Get the membership activities for a direct message.

# Feed Elements Capability, Direct Message Membership Activity

Get the membership activities for a direct message.

Resource

```

```

```

```

Available version

40.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | String | Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned. | Optional | 40.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25. | Optional | 40.0 |

Response body for GET

[Direct Message Membership Activity Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_membership_activity_collection.htm "A collection of direct message member activities.")

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/direct-message/membership-activity
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/direct-message/membership-activity
```

## Related Topics

- Direct Message Membership Activity Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_membership_activity_collection.htm)
