---
title: "Reference To Info"
domain: uiapi
topic: reference-to-info
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.119Z
estimatedTokens: 196
keywords: [Info, field's, referenced]
---

# Reference To Info

> Information about a reference field's referenced types and the name field names of those types.

# Reference To Info

Information about a reference field's referenced types and the name field names of those types.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | The object API name of a type being referenced in a relationship. | Small, 41.0 | 41.0 |
| nameFields | String[] | A collection of names of the name fields for this object type. Combined with the relationship name, you can determine how to query this type's name fields, for example, Parent.Name. Typically there is one name field per object, except where FirstName and LastName fields are used. | Small, 41.0 | 41.0 |

#### See Also

-   [Field](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_field.htm "A field's metadata.")

## Related Topics

- Field (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_field.htm)
