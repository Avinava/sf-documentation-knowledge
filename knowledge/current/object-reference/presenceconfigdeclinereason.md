---
title: "PresenceConfigDeclineReason"
domain: object-reference
topic: presenceconfigdeclinereason
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.948Z
estimatedTokens: 225
keywords: [PresenceConfigDeclineReason, settings, decline, reason, presence, user, declining, work, API, version, 37.0, later, Calls, Special, Access]
---

# PresenceConfigDeclineReason

> Represents the settings for a decline reason that a presence user
   provides when declining work. This object is available in API version 37.0 and
  later.

# PresenceConfigDeclineReason

Represents the settings for a decline reason that a presence user provides when declining work. This object is available in API version 37.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), update(), query(), retrieve()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) must be enabled.

As of Spring ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| PresenceDeclineReasonId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the PresenceDeclineReason record. |
| PresenceUserConfigId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the PresenceUserConfig record where the decline reasons are added. |

## Related Topics

- PresenceDeclineReason (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_presencedeclinereason.htm)
- PresenceUserConfig (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_presenceuserconfig.htm)
