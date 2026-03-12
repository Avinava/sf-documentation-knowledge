---
title: "Commerce Management Webstore Search, Searchable Attributes"
domain: chatterapi
topic: commerce-management-webstore-search-searchable-attributes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.552Z
estimatedTokens: 170
keywords: [Commerce, Management, Webstore, Search, Searchable, Attributes]
---

# Commerce Management Webstore Search, Searchable Attributes

> Get and update searchable attributes.

# Commerce Management Webstore Search, Searchable Attributes

Get and update searchable attributes.

Resource

```

```

Available version

49.0

HTTP methods

GET, PATCH

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| searchable​Attribute​Settings | Searchable Attribute Input[] | Collection of up to 25 searchable attributes. | Required | 49.0 |

Response body for GET and PATCH

[Searchable Attributes Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_searchable_attributes_collection_output.htm "Collection of searchable attributes.")

## Code Examples

```
/commerce/management/webstores/webstoreId/search/attribute-settings/searchable-fields
```

```
{
"searchableAttributeSettings" : [
   {
   "type" : "Standard",
   "nameOrId" : "Description",
   "isSearchable" : true
   },
   {
   "type" : "Custom",
   "nameOrId" : "brand__c"
   }]
}
```

## Related Topics

- Searchable Attribute Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_searchable_attribute_input.htm)
- Searchable Attributes Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_searchable_attributes_collection_output.htm)
