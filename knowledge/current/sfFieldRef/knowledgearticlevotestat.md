---
title: "KnowledgeArticleVoteStat"
domain: sfFieldRef
topic: knowledgearticlevotestat
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.094Z
estimatedTokens: 247
keywords: [KnowledgeArticleVoteStat, weighted, rating, article, scale, across, read-only, API, version, 20.0, later]
---

# KnowledgeArticleVoteStat

> Provides the weighted rating for the specified article on a scale of 1 to 5
      across all article types. This object is read-only and available in
    API version 20.0 and later.

# KnowledgeArticleVoteStat

Provides the weighted rating for the specified article on a scale of 1 to 5 across all article types. This object is read-only and available in API version 20.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [KnowledgeArticleVoteStat](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticlevotestat.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Salesforce Knowledge Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Channel | Channel | picklist |  | 40 |  |  |
| Id | Vote Stat ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| NormalizedScore | Score | double |  |  | 18 | 4 |
| ParentId | Knowledge Article ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
