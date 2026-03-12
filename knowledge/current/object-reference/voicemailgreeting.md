---
title: "VoiceMailGreeting"
domain: object-reference
topic: voicemailgreeting
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.269Z
estimatedTokens: 515
keywords: [VoiceMailGreeting, custom, greeting, message, plays, upon, reaching, user’s, voicemail, API, version, 41.0, later, Calls, Special]
---

# VoiceMailGreeting

> Represents a custom greeting message that plays upon reaching a user’s
			voicemail. This object is available in API version 41.0 and later.

# VoiceMailGreeting

Represents a custom greeting message that plays upon reaching a user’s voicemail. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only your Salesforce org's internal users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| DurationInSeconds | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe duration of the voicemail greeting message in seconds. |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether the greeting is the user’s default greeting (true) or not (false). |
| MediaContentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the related content document. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the voicemail greeting message. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the voicemail greeting message owner. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[VoiceMailGreetingOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[VoiceMailGreetingShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- VoiceMailGreetingOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- VoiceMailGreetingShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
