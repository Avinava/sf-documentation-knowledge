---
title: "TopicLocalization"
domain: sfFieldRef
topic: topiclocalization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.431Z
estimatedTokens: 241
namespace: NamespacePrefix
keywords: [TopicLocalization, translated, version, topic, localization, navigational, featured, topics, Experience, Cloud, sites]
---

# TopicLocalization

> Represents the translated version of a topic name. Topic
			localization applies only to navigational and featured topics in Experience Cloud
			sites.

**Namespace:** `NamespacePrefix`

# TopicLocalization

Represents the translated version of a topic name. Topic localization applies only to navigational and featured topics in Experience Cloud sites.

For more information, see TopicLocalization in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Translation ID | id |  | 18 |  |  |
| Language | Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Value | Translation Text | textarea |  | 32000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
