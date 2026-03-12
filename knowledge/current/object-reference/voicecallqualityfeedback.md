---
title: "VoiceCallQualityFeedback"
domain: object-reference
topic: voicecallqualityfeedback
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.243Z
estimatedTokens: 429
keywords: [VoiceCallQualityFeedback, feedback, Sales, Dialer, user, quality, VoiceCall, Calls, Associated, Objects]
---

# VoiceCallQualityFeedback

> Represents feedback given by a Sales Dialer user about the quality of
			a VoiceCall
			.

# VoiceCallQualityFeedback

Represents feedback given by a Sales Dialer user about the quality of a [VoiceCall](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voicecall.htm#sobject_name) .

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| FeedbackText | TypetextareaPropertiesNillableDescriptionThe detailed feedback about a call left by a user. |
| FeedbackType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe feedback category (Call could not connect, Audio lagged, etc.) selected by a user. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user leaving the feedback. |
| VoiceCallId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related VoiceCall. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[VoiceCallQualityFeedbackOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[VoiceCallQualityFeedbackShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- VoiceCall (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_voicecall.htm)
- VoiceCallQualityFeedbackOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- VoiceCallQualityFeedbackShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
