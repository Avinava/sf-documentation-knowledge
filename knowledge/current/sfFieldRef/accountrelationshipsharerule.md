---
title: "AccountRelationshipShareRule"
domain: sfFieldRef
topic: accountrelationshipsharerule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.057Z
estimatedTokens: 455
namespace: NamespacePrefix
keywords: [AccountRelationshipShareRule, rule, determines, records, shared, how, they, account, relationship, shares, level, access, granted, API, version]
---

# AccountRelationshipShareRule

> Represents the rule that determines which object records are shared,
         how they are shared, the account relationship type that shares the records, and the level
         of access granted to the records. This object is available in API version 45.0 and
         later.

**Namespace:** `NamespacePrefix`

# AccountRelationshipShareRule

Represents the rule that determines which object records are shared, how they are shared, the account relationship type that shares the records, and the level of access granted to the records. This object is available in API version 45.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AccountRelationshipShareRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountrelationshipsharerule.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccessLevel | Access Level | picklist |  | 255 |  |  |
| AccountToCriteriaField | Account To Criteria Field | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| EntityType | Object Type | picklist |  | 255 |  |  |
| Id | Account Relationship Data Sharing Rule ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| StaticFormulaCriteria | Static Formula Criteria | string |  | 1333 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Account Relationship Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
