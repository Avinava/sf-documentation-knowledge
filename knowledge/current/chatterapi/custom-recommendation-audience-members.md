---
title: "Custom Recommendation Audience Members"
domain: chatterapi
topic: custom-recommendation-audience-members
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.320Z
estimatedTokens: 275
keywords: [Custom, Recommendation, Audience, Members]
---

# Custom Recommendation Audience Members

> Get the members of a custom recommendation
    audience.

# Custom Recommendation Audience Members

Get the members of a custom recommendation audience.

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

Resource

```

```

```

```

Available version

35.0

Requires Chatter

Yes

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Integer | Zero-index page number. If not specified, page zero is used. | Optional | 35.0 |
| pageSize | Integer | Number of items per page. Default is 25. | Optional | 35.0 |

Response body for GET

[User Reference Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_reference_collection.htm "A collection of user references.")

## Code Examples

```
/connect/recommendation-audiences/recommendationAudienceId/members
```

```
/connect/communities/communityId/recommendation-audiences/recommendationAudienceId/members
```

## Related Topics

- User Reference Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_reference_collection.htm)
