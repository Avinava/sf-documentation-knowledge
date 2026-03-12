---
title: "VoiceMailContent"
domain: object-reference
topic: voicemailcontent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.264Z
estimatedTokens: 545
keywords: [VoiceMailContent, voicemail, message, left, caller, context, user, Calls, Special, Access, Rules, Associated, Objects]
---

# VoiceMailContent

> Represents a voicemail message left by a caller to the context
			user.

# VoiceMailContent

Represents a voicemail message left by a caller to the context user.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only your Salesforce org's internal users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| DurationInSeconds | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe duration of the voicemail message in seconds. |
| FirstHeardDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time and date when the user first listened to the voicemail message. |
| MediaContentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related media content, a ContentDocument. The record counts toward your org’s file storage quota. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the voicemail message. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the voicemail message. |
| VoiceCallId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related Dialer call. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[VoiceMailContentOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[VoiceMailContentShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- VoiceMailContentOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- VoiceMailContentShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
