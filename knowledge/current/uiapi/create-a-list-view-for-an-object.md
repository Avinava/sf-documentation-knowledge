---
title: "Create a List View for an Object"
domain: uiapi
topic: create-a-list-view-for-an-object
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.445Z
estimatedTokens: 156
keywords: [View, associated]
---

# Create a List View for an Object

> Create a list view associated with an object.

# Create a List View for an Object

Create a list view associated with an object.

Resource

```

```

Available version

61.0

HTTP methods

POST

Example

This example uses a request body to create the metadata for an account list view.

```

```

```

```

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| listInfoInput | List Info Post Input | Info to create a list. | Required | 61.0 |

Response body for POST

[List Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_metadata.htm "Metadata that describes a list.")

## Code Examples

```
/ui-api/list-info/${objectApiName}
```

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

- List Info Post Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_info_post_input.htm)
- List Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_metadata.htm)
