---
title: "UserCustomBadge"
domain: object-reference
topic: usercustombadge
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.721Z
estimatedTokens: 177
keywords: [UserCustomBadge, custom, badge, user, API, version, 38.0, later, Calls]
---

# UserCustomBadge

> Represents a custom badge for a user. This object is available in
		API version 38.0 and later.

# UserCustomBadge

Represents a custom badge for a user. This object is available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| BadgeType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of badge. Valid values are:CustomerPartnerEmployee |
| CustomText | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCustom text for the badge. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Experience Cloud site or org that the badge is in. |
