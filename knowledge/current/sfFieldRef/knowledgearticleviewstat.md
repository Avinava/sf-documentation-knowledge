---
title: "KnowledgeArticleViewStat"
domain: sfFieldRef
topic: knowledgearticleviewstat
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.089Z
estimatedTokens: 291
keywords: [KnowledgeArticleViewStat, certain, statistics, number, views, article, across, view, count, published, archived, articles, counts, draft, aren’t]
---

# KnowledgeArticleViewStat

> Provides certain statistics related to the number of views for the
      specified article across all article types. The view count statistics are for published
    and archived articles only. View counts for draft articles aren’t tracked. This object is
    read-only and available in API version 20.0 and later.

# KnowledgeArticleViewStat

Provides certain statistics related to the number of views for the specified article across all article types. The view count statistics are for published and archived articles only. View counts for draft articles aren’t tracked. This object is read-only and available in API version 20.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [KnowledgeArticleViewStat](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleviewstat.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Salesforce Knowledge Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Channel | Channel | picklist |  | 40 |  |  |
| Id | View Stat ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| NormalizedScore | Score | double |  |  | 18 | 4 |
| ParentId | Knowledge Article ID | reference |  | 18 |  |  |
| ViewCount | Total Views | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
