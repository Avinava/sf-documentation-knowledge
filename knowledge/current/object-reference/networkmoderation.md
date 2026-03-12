---
title: "NetworkModeration"
domain: object-reference
topic: networkmoderation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.258Z
estimatedTokens: 412
keywords: [NetworkModeration, flag, item, community, API, version, 30.0, later, Calls, Special, Access, Rules, Usage]
---

# NetworkModeration

> Represents a flag on an item in a community. This object is
  available in API version 30.0 and later.

# NetworkModeration

Represents a flag on an item in a community. This object is available in API version 30.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve()

## Special Access Rules

This object is available only when your org has digital experiences enabled.

## Fields

| Field Name | Details |
| --- | --- |
| EntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the post, comment, or file that was flagged. |
| ModerationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, SortDescriptionDetermines the type of flag applied to an item. Values are:FlagAsInappropriateFlagAsSpam |
| NetworkId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the community in which the item was flagged. |
| Visibility | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Nillable, SortDescriptionDetermines visibility of a flagged item. Values are:SelfAndModerators—The user who flagged the item and any moderators can see the flagged item. This is the default value.ModeratorsOnly—Only moderators can see the flagged item. If ModeratorsOnly is selected, only moderators can set flags using the API. |

## Usage

Use this object to view the items flagged for moderation within a community. Additionally, users with “Moderate Feeds” and “Modify All Data” can remove flags.

Flags on items are created either when a member manually flags an item in a community (if flagging is enabled for that community), or when a trigger automatically flags an item because the item met the trigger criteria.
