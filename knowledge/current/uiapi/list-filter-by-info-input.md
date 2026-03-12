---
title: "List Filter By Info Input"
domain: uiapi
topic: list-filter-by-info-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.189Z
estimatedTokens: 211
keywords: [Filter, Info, Input]
---

# List Filter By Info Input

> List filter by info to update or create.

# List Filter By Info Input

List filter by info to update or create.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldApiName | String | API name for the field used to filter the list. | Optional | 61.0 |
| operandLabels | String[] | Values (or label if one exists) used to filter the list. | Optional | 61.0 |
| operator | String | Filter operator. Values are:ContainsEqualsExcludesGreaterOrEqualGreaterThanIncludesLessOrEqualLessThanNotContainNotEqualStartsWithWithin | Optional | 61.0 |

#### See Also

-   [List Info Post Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_info_post_input.htm "Info to create a list.")

-   [List Info Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_info_input.htm "Info to update a list.")

## Code Examples

```
{
"fieldApiName": "Name",
"operandLabels": [ "This", "That"],
"operator": "Equals"
}
```

## Related Topics

- List Info Post Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_info_post_input.htm)
- List Info Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_info_input.htm)
