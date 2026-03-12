---
title: "VoiceVendorLine"
domain: object-reference
topic: voicevendorline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.309Z
estimatedTokens: 589
keywords: [VoiceVendorLine, user’s, phone, number, reserved, vendor, Calls, Special, Access, Rules, Associated, Objects]
---

# VoiceVendorLine

> Represents a user’s phone number reserved with the
		vendor.

# VoiceVendorLine

Represents a user’s phone number reserved with the vendor.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

As of Spring ’20 and later, only your Salesforce org's internal users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| CallUsageInSecondsLastMonth | TypeintPropertiesFilter, Group, Nillable, SortDescriptionAn org’s total call usage last month in seconds. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who owns the phone number.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PhoneNumber | TypephonePropertiesFilter, Group, idLookup, SortDescriptionThe unique vendor phone number. |
| ShouldRecord | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionReserved for future use. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies whether the number is currently active or released. |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user using the phone number.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| VoiceVendorInfoId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the Dialer vendor.This is a relationship field.Relationship NameVoiceVendorInfoRelationship TypeLookupRefers ToVoiceVendorInfo |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[VoiceVendorLineOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[VoiceVendorLineShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- VoiceVendorLineOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- VoiceVendorLineShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
