---
title: "MatchingRule"
domain: sfFieldRef
topic: matchingrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.724Z
estimatedTokens: 402
namespace: NamespacePrefix
keywords: [MatchingRule, matching, rule, identify, duplicate, records, API, version, 33.0, later]
---

# MatchingRule

> Represents a matching rule that is used to identify duplicate
   records.
		This object is available in API version 33.0 and later.

**Namespace:** `NamespacePrefix`

# MatchingRule

Represents a matching rule that is used to identify duplicate records. This object is available in API version 33.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MatchingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_matchingrule.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BooleanFilter | Advanced Logic | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 255 |  |  |
| DeveloperName | Unique Name | string |  | 80 |  |  |
| Id | Matching Rule ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Rule Name | string |  | 80 |  |  |
| MatchEngine | Custom Object Definition ID | picklist |  | 255 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| RuleStatus | Status | picklist |  | 255 |  |  |
| SobjectSubtype | Object Subtype | picklist |  | 255 |  |  |
| SobjectType | Custom Object Definition ID | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
