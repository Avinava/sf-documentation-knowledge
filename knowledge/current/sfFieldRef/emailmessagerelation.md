---
title: "EmailMessageRelation"
domain: sfFieldRef
topic: emailmessagerelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:39:38.870Z
estimatedTokens: 307
keywords: [EmailMessageRelation, relationship, email, contacts, leads, users, API, 37.0]
---

> Represents the relationship
				between an email and contacts, leads, and users.
		This object is available in API version 37.0 and later.

# EmailMessageRelation

Represents the relationship between an email and contacts, leads, and users. This object is available in API version 37.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [EmailMessageRelation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_emailmessagerelation.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EmailMessageId | Email Message ID | reference |  | 18 |  |  |
| Id | Email Message Relation ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| RelationAddress | Relation Address | string |  | 255 |  |  |
| RelationId | Relation ID | reference |  | 18 |  |  |
| RelationObjectType | Relation Object Type | string |  | 50 |  |  |
| RelationType | Relation Type | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
