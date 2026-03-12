---
title: "ResearchStdyRandomization"
domain: life-sciences-dev-guide
topic: researchstdyrandomization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.274Z
estimatedTokens: 1166
keywords: [ResearchStdyRandomization, randomization, algorithm, configuration, defined, research, study, API, version, 61.0, later, Calls, Associated, Objects]
---

# ResearchStdyRandomization

> Represents the randomization algorithm configuration defined for a research
         study. This object is available in API version 61.0 and later.

# ResearchStdyRandomization

Represents the randomization algorithm configuration defined for a research study. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AlgorithmFlowDefinition | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe flow definition that contains the block generation algorithm. |
| AlgorithmType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the algorithm type of the research study randomization.Possible values are:BlockCustom |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the research study randomization. |
| DoesAsgnCandidatesToGroups | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the randomization procedure should create a Research Study Comparison Group Candidate record for candidates for the matching group.The default value is false. |
| DoesGenerateBlockOnDemand | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the algorithm can generate new blocks during randomization (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MaximumBlockSizeMultiplier | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum multiplier that's applied to decide the size of a block type research study randomization. |
| MinimumBlockSizeMultiplier | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe minimum multiplier that's applied to decide the size of a block type research study randomization. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the research study randomization. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the object assigned to the territory.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RandomizationLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the randomization level of the research study randomization.Possible values are:CentralNoncentral |
| ResearchStudyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe research study associated with the research study randomization.This field is a relationship field.Relationship NameResearchStudyRefers ToResearchStudy |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the research study randomization.Possible values are:ActiveDraftInactive |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ResearchStdyRandomizationFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ResearchStdyRandomizationHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ResearchStdyRandomizationShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ResearchStdyRandomizationFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ResearchStdyRandomizationHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ResearchStdyRandomizationShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
