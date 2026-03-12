---
title: "PresenceUserConfigUser"
domain: object-reference
topic: presenceuserconfiguser
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.977Z
estimatedTokens: 242
keywords: [PresenceUserConfigUser, configuration, determines, settings, assigned, presence, user, user-level, configurations, override, profile-level, API, version, 32.0, later]
---

# PresenceUserConfigUser

> Represents a configuration that determines the settings that are
   assigned to a presence user. These user-level configurations override profile-level
   configurations. This object is available in API version 32.0 and later.

# PresenceUserConfigUser

Represents a configuration that determines the settings that are assigned to a presence user. These user-level configurations override profile-level configurations. This object is available in API version 32.0 and later.

## Supported Calls

create(), delete(), query(), update(), retrieve()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) must be enabled.

As of Spring ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| PresenceUserConfigId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the presence configuration. |
| UserId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the user who’s associated with this presence configuration. A user can be associated with only one presence configuration. |
