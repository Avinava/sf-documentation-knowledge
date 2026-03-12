---
title: "Searchable Attributes Collection Input"
domain: chatterapi
topic: searchable-attributes-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.809Z
estimatedTokens: 88
keywords: [Searchable, Attributes, Collection, Input]
---

# Searchable Attributes Collection Input

> Collection of searchable attributes.

# Searchable Attributes Collection Input

Collection of searchable attributes.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| searchable​Attribute​Settings | Searchable Attribute Input[] | Collection of up to 25 searchable attributes. | Required | 49.0 |

## Code Examples

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
