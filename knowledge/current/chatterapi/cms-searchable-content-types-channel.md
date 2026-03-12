---
title: "CMS Searchable Content Types, Channel"
domain: chatterapi
topic: cms-searchable-content-types-channel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.698Z
estimatedTokens: 417
keywords: [CMS, Searchable, Content, Channel, status, managed]
---

# CMS Searchable Content Types, Channel

> Get or update the searchable status for managed content types in a
      channel.

# CMS Searchable Content Types, Channel

Get or update the searchable status for managed content types in a channel.

Resource

```

```

Available version

49.0

HTTP methods

GET, PATCH

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Integer | Number of the page you want returned. Starts at 0. If you don’t specify a value or if you specify 0, the first page is returned. | Optional | 49.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 250. If you don’t specify a value, the default size is 25. | Optional | 49.0 |

Response body for GET

[Managed Content Type Searchable Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_type_searchable_collection.htm "Collection of searchable statuses for managed content types.")

Request body for PATCH

Root XML tag

<ManagedContentTypeSearchableInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isSearchable | Boolean | Specifies whether to set the managed content type to searchable (true) or not (false). | Required | 49.0 |
| name | String | Developer name of the managed content type. In version 63.0 and later, specify the fully qualified name for content types that are package-installed. | Required | 49.0 |

Response body for PATCH

[Managed Content Type Searchable](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_type_searchable.htm "Searchable status for a managed content type.")

## Code Examples

```
/connect/cms/channels/channelId/searchable-content-types
```

```
{
"name": "Media",
"isSearchable": "false"
}
```

## Related Topics

- Managed Content Type Searchable Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_type_searchable_collection.htm)
- Managed Content Type Searchable (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_type_searchable.htm)
