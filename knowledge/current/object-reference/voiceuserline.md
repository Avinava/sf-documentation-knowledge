---
title: "VoiceUserLine"
domain: object-reference
topic: voiceuserline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.294Z
estimatedTokens: 599
keywords: [VoiceUserLine, user’s, forwarding, phone, number, Calls, Special, Access, Rules, Associated, Objects]
---

# VoiceUserLine

> Represents a user’s forwarding phone number.

# VoiceUserLine

Represents a user’s forwarding phone number.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only your Salesforce org's internal users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| IsCustomCallerId | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the number is a custom caller ID (true) or not (false). |
| IsVerified | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionReserved for future use. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, SortDescriptionThe name of the phone number. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns the phone number. |
| PhoneNumber | TypephonePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe user’s phone number. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the user using the phone number. |
| VendorVerifiedCallerIdKey | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID for a custom phone number provided by the Sales Dialer service provider. |
| VoiceVendorInfoId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related Sales Dialer service provider. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[VoiceUserLineOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[VoiceUserLineShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- VoiceUserLineOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- VoiceUserLineShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
