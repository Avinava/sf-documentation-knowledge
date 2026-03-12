---
title: "MobileSettingsAssignment"
domain: object-reference
topic: mobilesettingsassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.004Z
estimatedTokens: 197
keywords: [MobileSettingsAssignment, assignment, particular, service, mobile, settings, configuration, user, profile, API, version, 41.0, later, Calls, Special]
---

# MobileSettingsAssignment

> Represents the assignment of a particular field
			service mobile settings configuration to a user profile. This
		object is available in API version 41.0 and later.

# MobileSettingsAssignment

Represents the assignment of a particular field service mobile settings configuration to a user profile. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete(), describeLayout()—available in API version 51.0 and later, describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| FieldServiceMobileSettingsId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of a set of field service mobile settings. |
| ProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the profile to associate with the set of field service mobile settings. |
