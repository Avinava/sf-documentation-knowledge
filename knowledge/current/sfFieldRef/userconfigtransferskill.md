---
title: "UserConfigTransferSkill"
domain: sfFieldRef
topic: userconfigtransferskill
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.006Z
estimatedTokens: 312
keywords: [UserConfigTransferSkill, association, Chat, configuration, skill, users, associated, specific, transfer, chats, agents]
---

# UserConfigTransferSkill

> Represents the association between a Chat configuration and a skill.
      This association allows users associated with a specific configuration to transfer chats to
      agents who have that skill.

# UserConfigTransferSkill

Represents the association between a Chat configuration and a skill. This association allows users associated with a specific configuration to transfer chats to agents who have that skill.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UserConfigTransferSkill](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_userconfigtransferskill.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | UserConfigTransferSkill ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LiveChatUserConfigId | Chat Agent Configuration ID | reference |  | 18 |  |  |
| SkillId | Skill ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
