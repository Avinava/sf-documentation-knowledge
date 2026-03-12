---
title: "LiveChatUserConfigProfile"
domain: object-reference
topic: livechatuserconfigprofile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.444Z
estimatedTokens: 177
keywords: [LiveChatUserConfigProfile, join, LiveChatUserConfig, Profile, API, version, 24.0, later, Calls, Special, Access, Rules, Usage]
---

# LiveChatUserConfigProfile

> Represents a join between LiveChatUserConfig and Profile. This
        object is available in API version 24.0 and later.

# LiveChatUserConfigProfile

Represents a join between LiveChatUserConfig and Profile. This object is available in API version 24.0 and later.

## Supported Calls

create(), delete(), query(), retrieve()

## Special Access Rules

As of Summer ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| LiveChatUserConfigId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe record ID of the agent configuration |
| ProfileId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe record ID of the profile |

## Usage

Use this object to assign specific agent configurations to specific user profiles.
