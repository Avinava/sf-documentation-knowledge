---
title: "Custom Recommendation Definition Input"
domain: chatterapi
topic: custom-recommendation-definition-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:12.670Z
estimatedTokens: 337
keywords: [Custom, Recommendation, Definition, Input]
---

# Custom Recommendation Definition Input

> A custom recommendation definition.

# Custom Recommendation Definition Input

A custom recommendation definition.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionUrl | String | URL for acting on the custom recommendation, for example, the URL to join a group. | Required for creating a recommendation definitionOptional for updating a recommendation definition | 33.0 |
| actionUrlName | String | Text label for the action URL in the user interface, for example, “Launch.” | Required for creating a recommendation definitionOptional for updating a recommendation definition | 34.0 |
| explanation | String | Explanation, or body, of the custom recommendation. | Required for creating a recommendation definitionOptional for updating a recommendation definition | 33.0 |
| name | String | Name of the custom recommendation definition. The name is displayed in Setup. | Required for creating a recommendation definitionOptional for updating a recommendation definition | 33.0 |
| title | String | Title of the custom recommendation definition. | Optional | 33.0 |

#### See Also

-   [Create and Schedule Custom Recommendations with Audiences](atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_custom_rec.htm "Create and schedule custom recommendations with audiences.")

## Code Examples

```
{ 
   "actionUrl" : "https://www.example.com",
   "actionUrlName" : "Launch",
   "explanation" : "Click this link to learn more!",
   "name" : "Corporate Training Project",
   "title" : "Want to learn more about Corporate Training Project?"}
```

## Related Topics

- Create and Schedule Custom Recommendations with Audiences (atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_custom_rec.htm)
