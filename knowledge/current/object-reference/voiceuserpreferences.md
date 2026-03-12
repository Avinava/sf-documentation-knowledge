---
title: "VoiceUserPreferences"
domain: object-reference
topic: voiceuserpreferences
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.299Z
estimatedTokens: 465
keywords: [VoiceUserPreferences, number, user, displays, making, outbound, calls, API, version, 41.0, later, Special, Access, Rules, Associated]
---

# VoiceUserPreferences

> Represents the number the user displays when making outbound
			calls. This object is available in API version 41.0 and later.

# VoiceUserPreferences

Represents the number the user displays when making outbound calls. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only your Salesforce org's internal users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| CallerIdType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe number displayed for outbound calls. The possible values are:VendorLineCompanyNumberLocalPresenceCustomCallerId |
| DeskPhoneNumber | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA separate phone number users can utilize as part of a call bridge. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the phone number owner. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[VoiceUserPreferencesOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[VoiceUserPreferencesShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- VoiceUserPreferencesOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- VoiceUserPreferencesShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
