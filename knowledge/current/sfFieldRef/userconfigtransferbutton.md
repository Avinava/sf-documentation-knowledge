---
title: "UserConfigTransferButton"
domain: sfFieldRef
topic: userconfigtransferbutton
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.001Z
estimatedTokens: 317
keywords: [UserConfigTransferButton, association, Chat, configuration, live, button, users, associated, specific, transfer, chats, queue]
---

# UserConfigTransferButton

> Represents the association between a Chat configuration and a live chat
      button. This association allows users associated with a specific configuration to transfer
      chats to a button queue.

# UserConfigTransferButton

Represents the association between a Chat configuration and a live chat button. This association allows users associated with a specific configuration to transfer chats to a button queue.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UserConfigTransferButton](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_userconfigtransferbutton.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | UserConfigTransferButton ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LiveChatButtonId | Chat Button ID | reference |  | 18 |  |  |
| LiveChatUserConfigId | Chat Agent Configuration ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
