---
title: "Custom Recommendation Definitions"
domain: chatterapi
topic: custom-recommendation-definitions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.340Z
estimatedTokens: 669
keywords: [Custom, Recommendation, Definitions, definition]
---

# Custom Recommendation Definitions

> Get a list of custom recommendation definitions or create a custom
      recommendation definition.

# Custom Recommendation Definitions

Get a list of custom recommendation definitions or create a custom recommendation definition.

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

Resource

```

```

```

```

Available version

33.0

Requires Chatter

Yes

HTTP methods

GET, POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionUrl | String | URL for acting on the custom recommendation, for example, the URL to join a group. | Required | 33.0 |
| actionUrlName | String | Text label for the action URL in the user interface, for example, “Launch.” | Required | 34.0 |
| explanation | String | Explanation, or body, of the custom recommendation. | Required | 33.0 |
| name | String | Name of the custom recommendation definition. The name is displayed in Setup. | Required | 33.0 |
| title | String | Title of the custom recommendation definition. | Optional | 33.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionUrl | String | URL for acting on the custom recommendation, for example, the URL to join a group. | Required | 33.0 |
| actionUrlName | String | Text label for the action URL in the user interface, for example, “Launch.” | Required | 34.0 |
| explanation | String | Explanation, or body, of the custom recommendation. | Required | 33.0 |
| name | String | Name of the custom recommendation definition. The name is displayed in Setup. | Required | 33.0 |
| title | String | Title of the custom recommendation definition. | Optional | 33.0 |

Response body for POST

[Custom Recommendation Definition](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_definition.htm "A custom recommendation definition.")

Response body for GET

[Custom Recommendation Definition Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_definition_collection.htm "Represents a list of custom recommendation definitions.")

#### See Also

-   [Create and Schedule Custom Recommendations with Audiences](atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_custom_rec.htm "Create and schedule custom recommendations with audiences.")

## Code Examples

```
/connect/recommendation-definitions
```

```
/connect/communities/communityId/recommendation-definitions
```

```
{ 
   "actionUrl" : "https://www.example.com",
   "actionUrlName" : "Launch",
   "explanation" : "Click this link to learn more!",
   "name" : "Corporate Training Project",
   "title" : "Want to learn more about Corporate Training Project?"}
```

## Related Topics

- Custom Recommendation Definition (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_definition.htm)
- Custom Recommendation Definition Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_definition_collection.htm)
- Create and Schedule Custom Recommendations with Audiences (atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_custom_rec.htm)
