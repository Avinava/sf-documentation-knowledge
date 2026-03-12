---
title: "Lookup Values"
domain: uiapi
topic: lookup-values
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.952Z
estimatedTokens: 298
keywords: [Lookup, Records, relationship, organized]
---

# Lookup Values

> Records in a lookup relationship, organized by object
    type.

# Lookup Values

Records in a lookup relationship, organized by object type.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| lookupResults | Map <String, Record Collection> | A map of object API names to Record Collection response bodies containing the lookup results for that object type. | Small, 41.0 | 41.0 |

#### See Also

-   [Get Lookup Field Suggestions](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_get.htm "When a user edits a lookup field, use this resource to search for and display suggestions. You can search for most recently used matches, for matching names, or for any match in a searchable field. You can also specify lookup filter bindings for dependent lookups.")

-   [Get Lookup Field Suggestions With POST](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_post.htm "When a user edits a lookup field, use this resource to search for and display suggestions. You can search for most recently used matches, for matching names, or for any match in a searchable field. You must specify dependent lookup field values used by lookup filters in the `sourceRecord` request body parameter.")

## Related Topics

- Record Collection (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_collection.htm)
- Get Lookup Field Suggestions (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_get.htm)
- Get Lookup Field Suggestions With POST (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_post.htm)
