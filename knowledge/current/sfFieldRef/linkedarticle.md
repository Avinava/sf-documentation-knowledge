---
title: "LinkedArticle"
domain: sfFieldRef
topic: linkedarticle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.366Z
estimatedTokens: 377
keywords: [LinkedArticle, knowledge, article, attached, work, order, line, item, API, version, 37.0, later]
---

# LinkedArticle

> Represents a knowledge article that is attached to a work order,
			work order line item, or work type. This object is available in API version 37.0
		and later.

# LinkedArticle

Represents a knowledge article that is attached to a work order, work order line item, or work type. This object is available in API version 37.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LinkedArticle](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_linkedarticle.htm "HTML (New Window)") in the Field Service Developer Guide, Object Reference for the Salesforce Platform, and Salesforce Knowledge Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Linked Article ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| KnowledgeArticleId | Article ID | reference |  | 18 |  |  |
| KnowledgeArticleVersionId | Knowledge Article Version ID | reference |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LinkedEntityId | Linked Entity ID | reference |  | 18 |  |  |
| Name | Linked Article Title | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Linked Object Type | string |  | 50 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
