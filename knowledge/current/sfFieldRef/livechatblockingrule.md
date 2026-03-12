---
title: "LiveChatBlockingRule"
domain: sfFieldRef
topic: livechatblockingrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.466Z
estimatedTokens: 368
keywords: [LiveChatBlockingRule, rule, blocking, chat, visitors’, addresses, starting, new, chats, agents, API, version, 34.0, later]
---

# LiveChatBlockingRule

> Represents a rule for blocking chat visitors’ IP addresses from
   starting new chats with agents. This object is available in API version 34.0 and
  later.

# LiveChatBlockingRule

Represents a rule for blocking chat visitors’ IP addresses from starting new chats with agents. This object is available in API version 34.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LiveChatBlockingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_livechatblockingrule.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| FromIpAddress | From IP Address | string |  | 39 |  |  |
| Id | Chat Blocking Rule ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Chat Blocking Rule Name | string |  | 80 |  |  |
| OwnerType | Owner Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ToIpAddress | To IP Address | string |  | 39 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
