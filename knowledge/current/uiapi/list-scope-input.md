---
title: "List Scope Input"
domain: uiapi
topic: list-scope-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.216Z
estimatedTokens: 169
keywords: [Scope, Input]
---

# List Scope Input

> List scope to update or create.

# List Scope Input

List scope to update or create.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | API name of the list’s scope. | Optional | 61.0 |
| entityId | String | ID of the scope’s entity. | Optional | 61.0 |
| relatedEntityId | String | ID of the related entity for the scope. | Optional | 61.0 |

#### See Also

-   [List Info Post Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_info_post_input.htm "Info to create a list.")

-   [List Info Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_info_input.htm "Info to update a list.")

## Code Examples

```
{
"apiName": "entity",
"entityId": "00Gxx000000sjI8",
"relatedEntityId": "701xx000003HZ7X"
}
```

## Related Topics

- List Info Post Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_info_post_input.htm)
- List Info Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_info_input.htm)
