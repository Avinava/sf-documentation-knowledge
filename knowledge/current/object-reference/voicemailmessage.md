---
title: "VoiceMailMessage"
domain: object-reference
topic: voicemailmessage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.273Z
estimatedTokens: 491
keywords: [VoiceMailMessage, prerecorded, voicemail, message, Calls, Special, Access, Rules, Associated, Objects]
---

# VoiceMailMessage

> Represents a prerecorded voicemail message.

# VoiceMailMessage

Represents a prerecorded voicemail message.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only your Salesforce org's internal users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| DurationInSeconds | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe duration of a prerecorded voicemail message in seconds. |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the message is the context user’s default voicemail drop message. |
| MediaContentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the file. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the prerecorded voicemail message. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the prerecorded voicemail message. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[VoiceMailMessageOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[VoiceMailMessageShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- VoiceMailMessageOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- VoiceMailMessageShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
