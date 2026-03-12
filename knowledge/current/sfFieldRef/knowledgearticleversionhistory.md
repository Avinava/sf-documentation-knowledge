---
title: "KnowledgeArticleVersionHistory"
domain: sfFieldRef
topic: knowledgearticleversionhistory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.084Z
estimatedTokens: 369
keywords: [KnowledgeArticleVersionHistory, read-only, access, full, history, article, API, version, 25.0, later]
---

# KnowledgeArticleVersionHistory

> Enables read-only access to
        the full history of an article.
    This object is available in API version 25.0 and
    later.

# KnowledgeArticleVersionHistory

Enables read-only access to the full history of an article. This object is available in API version 25.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [KnowledgeArticleVersionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleversionhistory.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Salesforce Knowledge Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataType | Datatype | picklist |  | 40 |  |  |
| EventType | Event Type | picklist |  | 40 |  |  |
| FieldName | Custom Field Definition ID | picklist |  | 255 |  |  |
| Id | Entity Version History ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Language | picklist |  | 40 |  |  |
| NewValue | New Value | anyType |  | 255 |  |  |
| OldValue | Old Value | anyType |  | 255 |  |  |
| ParentId | Knowledge Article ID | reference |  | 18 |  |  |
| ParentSobjectType | Parent SObject Type Name | picklist |  | 40 |  |  |
| VersionId | Version ID | reference |  | 18 |  |  |
| VersionNumber | Version Number | int | 6 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
