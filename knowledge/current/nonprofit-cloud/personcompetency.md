---
title: "PersonCompetency"
domain: nonprofit-cloud
topic: personcompetency
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.727Z
estimatedTokens: 481
keywords: [PersonCompetency, competency, person, API, version, 64.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# PersonCompetency

> Represents information about a competency that a person has.
      This object is available in API version 64.0 and later.

# PersonCompetency

Represents information about a competency that a person has. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the VolunteerManagementPsl permission set license is enabled and the Manage Volunteer Data permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| QualificationLevel | TypeintPropertiesCreate, Filter, Group, Nillabel, Sort, UpdateDescriptionThe number that represents the level requirement for the qualification. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as JobPositionShift.

[PersonCompetencyChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm "HTML (New Window)")

Change events are available for the object.

[PersonCompetencyFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[PersonCompetencyHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[PersonCompetencyOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[PersonCompetencyShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
