---
title: "Position"
domain: nonprofit-cloud
topic: position
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.740Z
estimatedTokens: 579
keywords: [Position, functional, role, characterized, specific, duties, responsibilities, skills, qualifications, API, version, 64.0, later, Calls, Special]
---

# Position

> Represents a functional role that is characterized by specific duties and
         responsibilities, and required skills and qualifications. This object is available in
      API version 64.0 and later.

# Position

Represents a functional role that is characterized by specific duties and responsibilities, and required skills and qualifications. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the VolunteerManagementPsl permission set license is enabled and the Manage Volunteer Data permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| IsInternalApprovalRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether sign-up for the position requires internal approval.The default value is false. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the position.Possible values are:CanceledCompleteIn ProgressUpcoming |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PositionChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm "HTML (New Window)")

Change events are available for the object.

[PositionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[PositionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[PositionOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[PositionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
