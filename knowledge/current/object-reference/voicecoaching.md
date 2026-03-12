---
title: "VoiceCoaching"
domain: object-reference
topic: voicecoaching
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.255Z
estimatedTokens: 378
keywords: [VoiceCoaching, call, monitoring, Calls, Special, Access, Rules, Associated, Objects]
---

# VoiceCoaching

> Represents a call that is using call monitoring.

# VoiceCoaching

Represents a call that is using call monitoring.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

As of Spring ’20 and later, only your Salesforce org's internal users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the manager monitoring the call. |
| RelatedRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the call list owner. |
| TraineeId | TypereferencePropertiesFilter, Group, Sort, UniqueDescriptionThe ID of the call list owner. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[VoiceCoachingOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[VoiceCoachingShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- VoiceCoachingOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- VoiceCoachingShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
