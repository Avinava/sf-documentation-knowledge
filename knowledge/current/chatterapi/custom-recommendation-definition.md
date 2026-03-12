---
title: "Custom Recommendation Definition"
domain: chatterapi
topic: custom-recommendation-definition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.354Z
estimatedTokens: 641
keywords: [Custom, Recommendation, Definition, modify]
---

# Custom Recommendation Definition

> Get information about, modify, or delete a custom recommendation
      definition.

# Custom Recommendation Definition

Get information about, modify, or delete a custom recommendation definition.

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

GET, PATCH, DELETE

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionUrl | String | URL for acting on the custom recommendation, for example, the URL to join a group. | Optional | 33.0 |
| actionUrlName | String | Text label for the action URL in the user interface, for example, “Launch.” | Optional | 34.0 |
| explanation | String | Explanation, or body, of the custom recommendation. | Optional | 33.0 |
| name | String | Name of the custom recommendation definition. The name is displayed in Setup. | Optional | 33.0 |
| title | String | Title of the custom recommendation definition. | Optional | 33.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionUrl | String | URL for acting on the custom recommendation, for example, the URL to join a group. | Optional | 33.0 |
| actionUrlName | String | Text label for the action URL in the user interface, for example, “Launch.” | Optional | 34.0 |
| explanation | String | Explanation, or body, of the custom recommendation. | Optional | 33.0 |
| name | String | Name of the custom recommendation definition. The name is displayed in Setup. | Optional | 33.0 |
| title | String | Title of the custom recommendation definition. | Optional | 33.0 |

Response body for GET and PATCH

[Custom Recommendation Definition](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_definition.htm "A custom recommendation definition.")

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/recommendation-definitions/recommendationDefinitionId
```

```
/connect/communities/communityId/recommendation-definitions/recommendationDefinitionId
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
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Photo (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pictures.htm)
- Custom Recommendation Definition Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_definition_collection.htm)
- Scheduled Custom Recommendation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_scheduled_recommendation.htm)
