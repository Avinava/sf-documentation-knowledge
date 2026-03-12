---
title: "CMS Spaces"
domain: chatterapi
topic: cms-spaces
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.862Z
estimatedTokens: 441
keywords: [CMS, Spaces, managed, content, space]
---

# CMS Spaces

> Get managed content spaces. Create a managed content space.

# CMS Spaces

Get managed content spaces. Create a managed content space.

Resource

```

```

Available version

64.0

HTTP methods

GET, POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| nameFragment | String | Name fragment to filter spaces that contain the value in the workspace name. | Optional | 64.0 |
| page | Integer | Number of the page you want returned. Starts at 0. If you don’t specify a value or if you specify 0, the first page is returned. | Optional | 64.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 250. If you don't specify a value, the default size is 25. | Optional | 64.0 |

Response body for GET

[Managed Content Space Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_space_collection.htm "Collection of managed content spaces.")

Request body for POST

Root XML tag

<ManagedContentSpaceInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | API name of the managed content space. | Optional | 64.0 |
| defaultLanguage | String | Default language of the managed content space. | Optional | 64.0 |
| description | String | Description of the managed content space. | Optional | 64.0 |
| name | String | Name of the managed content space. | Required | 64.0 |
| spaceType | String | Type of managed content space. Values are:ContentMarketing | Optional | 64.0 |

Response body for POST

[Managed Content Space](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_space.htm "Managed content space.")

## Code Examples

```
/connect/cms/spaces
```

```
{
"name": "ShoeStoreWorkspace",
"description": "To serve shoe store content.",
"defaultLanguage": "en_US",
"spacetype": "Content",
"apiName": "shoe_store_workspace"
}
```

## Related Topics

- Managed Content Space Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_space_collection.htm)
- Managed Content Space (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_space.htm)
