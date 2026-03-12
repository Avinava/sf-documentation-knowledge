---
title: "UserConfigTransferButton"
domain: object-reference
topic: userconfigtransferbutton
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.713Z
estimatedTokens: 223
keywords: [UserConfigTransferButton, association, Chat, configuration, live, button, users, associated, specific, transfer, chats, queue, Calls, Special, Access]
---

# UserConfigTransferButton

> Represents the association between a Chat configuration and a live chat
      button. This association allows users associated with a specific configuration to transfer
      chats to a button queue.

# UserConfigTransferButton

Represents the association between a Chat configuration and a live chat button. This association allows users associated with a specific configuration to transfer chats to a button queue.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| LiveChatButtonId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the live chat button that agents can transfer chats to. |
| LiveChatUserConfigId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Chat configuration; agents associated with this configuration can transfer chats to the chat button indicated by the LiveChatButtonId. |
