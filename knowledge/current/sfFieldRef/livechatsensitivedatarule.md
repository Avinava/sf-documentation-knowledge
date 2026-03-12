---
title: "LiveChatSensitiveDataRule"
domain: sfFieldRef
topic: livechatsensitivedatarule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.516Z
estimatedTokens: 450
namespace: NamespacePrefix
keywords: [LiveChatSensitiveDataRule, rule, masking, deleting, data, pattern, Written, regular, expression, regex, API, version, 35.0, later]
---

# LiveChatSensitiveDataRule

> Represents a rule for masking or deleting data of a specified pattern.
   Written as a regular expression (regex). This object is available in API version 35.0 and
  later.

**Namespace:** `NamespacePrefix`

# LiveChatSensitiveDataRule

Represents a rule for masking or deleting data of a specified pattern. Written as a regular expression (regex). This object is available in API version 35.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LiveChatSensitiveDataRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_livechatsensitivedatarule.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionType | Action | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| EnforceOn | Enforce | int | 9 |  |  |  |
| Id | Sensitive Data Rule ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsEnabled | Active | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Sensitive Data Rule Name | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| Pattern | Patterns | textarea |  | 1000 |  |  |
| Priority | Priority | int | 9 |  |  |  |
| ProcessingType | Rule Application | picklist |  | 255 |  |  |
| Replacement | Replacement Text | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Version | Version | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
