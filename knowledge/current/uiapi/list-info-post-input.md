---
title: "List Info Post Input"
domain: uiapi
topic: list-info-post-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.200Z
estimatedTokens: 367
keywords: [Info, Post, Input]
---

# List Info Post Input

> Info to create a list.

# List Info Post Input

Info to create a list.

Example

This example uses a request body to create the metadata for an account list view.

```

```

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| displayColumns | String[] | Display columns (field API names) for the list. | Optional | 61.0 |
| filterLogicString | String | Filter logic string, such as (1 OR 2) and 3. Indexes start with 1. | Optional | 61.0 |
| filteredByInfo | List Filter By Info Input[] | Filtering information for the list. | Optional | 61.0 |
| label | String | List’s display label, for example, All Accounts. | Optional | 61.0 |
| listShares | String[] | Objects the list is shared with, if visibility is shared.For role sharing, use Role.RoleAPIName. For group sharing, use groupType.GroupApiName, where groupType is one of the type values for the Group object. | Optional | 61.0 |
| listViewApiName | String | API name for the list. This property is optional but strongly recommended. If unspecified, a default API name is generated. | Optional | 61.0 |
| scope | List Scope Input | Scope information for the list. | Optional | 61.0 |
| visibility | String | List’s visibility. One of these values:PrivatePublicShared | Optional | 61.0 |

#### See Also

-   [Create a List View for an Object](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lists_object_post.htm "Create a list view associated with an object.")

## Code Examples

```
POST /services/data/v66.0/ui-api/list-info/Account
```

```
{
"listViewApiName": "MyAccountListView",
"filteredByInfo": [
  {
  "fieldApiName": "Name",
  "operandLabels": [ "This", "That"],
  "operator": "Equals"
  },
  {
  "fieldApiName": "Phone",
  "operandLabels": [ "919"],
  "operator": "StartsWith"
  },
{
  "fieldApiName": "AnnualRevenue",
  "operandLabels": [ "1000000"],
  "operator": "GreaterThan"
  }
],
"filterLogicString" : "(1 OR 2) AND 3",
"label": "Accounts opened this year",
"scope": {
  "apiName": "entity",
  "entityId": "00Gxx000000sjI8",
  "relatedEntityId": "701xx000003HZ7X"
},
"visibility": "Public"
}
```

## Related Topics

- List Filter By Info Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_filter_by_info_input.htm)
- List Scope Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_scope_input.htm)
- Create a List View for an Object (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lists_object_post.htm)
