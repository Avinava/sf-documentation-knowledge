---
title: "ResearchStudyCmprGroup"
domain: life-sciences-dev-guide
topic: researchstudycmprgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.334Z
estimatedTokens: 819
keywords: [ResearchStudyCmprGroup, research, study, comparison, group, API, version, 61.0, later, Calls, Associated, Objects]
---

# ResearchStudyCmprGroup

> Represents the details of a research study comparison group. This object
      is available in API version 61.0 and later.

# ResearchStudyCmprGroup

Represents the details of a research study comparison group. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AllocationRatioValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe comparison group's allocation ratio in the research study randomization. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the research study comparison group. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the research study randomization comparison group. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the object assigned to the territory.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ResearchStudyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe research study associated with the research study comparison group.This field is a relationship field.Relationship NameResearchStudyRefers ToResearchStudy |
| TypeCodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe code set associated with the research study comparison group.This field is a relationship field.Relationship NameTypeCodeRefers ToCodeSet |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ResearchStudyCmprGroupFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ResearchStudyCmprGroupHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ResearchStudyCmprGroupShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ResearchStudyCmprGroupFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ResearchStudyCmprGroupHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ResearchStudyCmprGroupShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
