---
title: "UserConfigTransferSkill"
domain: object-reference
topic: userconfigtransferskill
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.716Z
estimatedTokens: 188
keywords: [UserConfigTransferSkill, association, Chat, configuration, skill, users, associated, specific, transfer, chats, agents, Calls]
---

# UserConfigTransferSkill

> Represents the association between a Chat configuration and a skill.
      This association allows users associated with a specific configuration to transfer chats to
      agents who have that skill.

# UserConfigTransferSkill

Represents the association between a Chat configuration and a skill. This association allows users associated with a specific configuration to transfer chats to agents who have that skill.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| LiveChatUserConfigId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Chat configuration; agents associated with this configuration can transfer chats to the chat button indicated by the LiveChatButtonId. |
| SkillId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the skill group that agents can transfer chats to. |
