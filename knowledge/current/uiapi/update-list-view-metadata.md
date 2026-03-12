---
title: "Update List View Metadata"
domain: uiapi
topic: update-list-view-metadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.412Z
estimatedTokens: 244
keywords: [View, Metadata]
---

# Update List View Metadata

> Update list view metadata.

# Update List View Metadata

Update list view metadata.

Resource

```

```

-   objectApiName—A [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object, such as Account.
-   listViewApiName—The API name of a list view, such as AllAccounts.

Available Version

61.0

HTTP Method

PATCH

Example

This example uses a request body to update the metadata for a list view. The object API name is Account and the list view API name is AllAccounts.

```

```

```

```

Request parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| listInfoInput | List Info Input | The list info to update. | Required | 61.0 |

Response Body

[List Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_metadata.htm "Metadata that describes a list.")

## Code Examples

```
/ui-api/list-info/${objectApiName}/${listViewApiName}
```

```
PATCH /services/data/v66.0/ui-api/list-info/Account/AllAccounts
```

```
{
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

- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- List Info Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_info_input.htm)
- List Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_metadata.htm)
