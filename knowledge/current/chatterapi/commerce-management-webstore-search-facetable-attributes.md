---
title: "Commerce Management Webstore Search, Facetable Attributes"
domain: chatterapi
topic: commerce-management-webstore-search-facetable-attributes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.564Z
estimatedTokens: 166
keywords: [Commerce, Management, Webstore, Search, Facetable, Attributes]
---

# Commerce Management Webstore Search, Facetable Attributes

> Get and update facetable attributes.

# Commerce Management Webstore Search, Facetable Attributes

Get and update facetable attributes.

Resource

```

```

Available version

49.0

HTTP methods

GET, PUT

Request body for PUT

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| facetable​Attribute​Settings | Facetable Attribute Input[] | Collection of up to 50 facetable settings. | Required | 49.0 |

Response body for GET and PUT

[Facetable Attributes Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_facetable_attributes_collection_output.htm "Collection of facetable attributes.")

## Code Examples

```
/commerce/management/webstores/webstoreId/search/attribute-settings/facetable-fields
```

```
{
"facetableAttributeSettings" : [
   {
   "type" : "ProductCategory",
   "nameOrId" : "Id",
   "displayRank" : "1",
   "displayType" : "CategoryTree"
   },
  {
  "type" : "Standard",
  "nameOrId" : "Family",
  "displayRank" : "2",
  "displayType" : "MultiSelect"
  },
  {
  "type" : "Custom",
  "nameOrId" : "color__c",
  "displayRank" : "3",
  "displayType" : "MultiSelect"
  }
  ]
}
```

## Related Topics

- Facetable Attribute Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_facetable_attribute_input.htm)
- Facetable Attributes Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_facetable_attributes_collection_output.htm)
