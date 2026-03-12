---
title: "SearchPromotionRule"
domain: sfFieldRef
topic: searchpromotionrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.173Z
estimatedTokens: 339
keywords: [SearchPromotionRule, promoted, search, term, keywords, associate, Salesforce, Knowledge, article, user’s, query, includes, associated, results, API]
---

# SearchPromotionRule

> Represents a promoted search term, which is one or more keywords that
   you associate with a Salesforce Knowledge article. When a user’s search query includes
   these keywords, the associated article is returned first in search results. This object is
  available in API version 31.0 and later.

# SearchPromotionRule

Represents a promoted search term, which is one or more keywords that you associate with a Salesforce Knowledge article. When a user’s search query includes these keywords, the associated article is returned first in search results. This object is available in API version 31.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [SearchPromotionRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_searchpromotionrule.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Salesforce Knowledge Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Search Promotion Rule ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| PromotedEntityId | Promoted Entity ID | reference |  | 18 |  |  |
| Query | Term | string |  | 100 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
