---
title: "CaseArticle"
domain: sfFieldRef
topic: casearticle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.618Z
estimatedTokens: 322
keywords: [CaseArticle, association, Case, KnowledgeArticle, API, version, 20.0, later]
---

# CaseArticle

> Represents the association between a Case and
        a KnowledgeArticle.
    This object is available in API version 20.0 and later.

# CaseArticle

Represents the association between a Case and a KnowledgeArticle. This object is available in API version 20.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CaseArticle](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_casearticle.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Salesforce Knowledge Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ArticleLanguage | Language | picklist |  | 40 |  |  |
| ArticleVersionNumber | Version Number | int | 6 |  |  |  |
| CaseId | Case ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Case Article ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsSharedByEmail | Is Shared by Email | boolean |  |  |  |  |
| KnowledgeArticleId | Article ID | reference |  | 18 |  |  |
| KnowledgeArticleVersionId | Knowledge Article Version ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
