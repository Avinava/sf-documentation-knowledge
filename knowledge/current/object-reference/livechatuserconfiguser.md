---
title: "LiveChatUserConfigUser"
domain: object-reference
topic: livechatuserconfiguser
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.447Z
estimatedTokens: 176
keywords: [LiveChatUserConfigUser, join, Live, Chat, User, Config, API, version, 24.0, later, Calls, Special, Access, Rules, Usage]
---

# LiveChatUserConfigUser

> Represents a join between Live Chat User Config and User. This
    object is available in API version 24.0 and later.

# LiveChatUserConfigUser

Represents a join between Live Chat User Config and User. This object is available in API version 24.0 and later.

## Supported Calls

create(), delete(), query(), retrieve()

## Special Access Rules

As of Summer ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| LiveChatUserConfigId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe record ID of the agent configuration |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe record ID of the user |

## Usage

Use this object to assign specific agent configurations to specific users.
