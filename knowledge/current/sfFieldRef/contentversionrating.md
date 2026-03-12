---
title: "ContentVersionRating"
domain: sfFieldRef
topic: contentversionrating
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.236Z
estimatedTokens: 234
keywords: [ContentVersionRating, rating, version, file, API, 42.0, later]
---

# ContentVersionRating

> Represents a rating on a version of a file. This object is
    available in API version 42.0 and later.

# ContentVersionRating

Represents a rating on a version of a file. This object is available in API version 42.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ContentVersionRating](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentversionrating.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ContentVersionId | Version ID | reference |  | 18 |  |  |
| Id | ContentVersionRating ID | id |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Rating | Rating | int | 9 |  |  |  |
| UserComment | User Comment | textarea |  | 1000 |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
