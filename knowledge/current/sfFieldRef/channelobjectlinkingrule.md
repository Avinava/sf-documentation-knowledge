---
title: "ChannelObjectLinkingRule"
domain: sfFieldRef
topic: channelobjectlinkingrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.890Z
estimatedTokens: 457
namespace: NamespacePrefix
keywords: [ChannelObjectLinkingRule, rule, linking, channel, interaction, Lead, Contact, API, version, 47.0, later]
---

# ChannelObjectLinkingRule

> Represents a rule for linking a channel interaction with an object (such as
      Lead or Contact). This object is available in API version 47.0 and later.

**Namespace:** `NamespacePrefix`

# ChannelObjectLinkingRule

Represents a rule for linking a channel interaction with an object (such as Lead or Contact). This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ChannelObjectLinkingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_channelobjectlinkingrule.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionForNoRecordFound | Action For No Records Found | picklist |  | 255 |  |  |
| ActionForSingleRecordFound | Action For Single Record Found | picklist |  | 255 |  |  |
| ChannelType | Channel Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 4000 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Id | Channel Object Linking Rule ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsLinkedRecordOpenedAsSubTab | Open Linked Record as a Subtab | boolean |  |  |  |  |
| IsRuleActive | Active | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| ObjectToLink | Object To Link | picklist |  | 255 |  |  |
| RuleName | Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
