---
title: "ResearchStdySearchableField"
domain: life-sciences-dev-guide
topic: researchstdysearchablefield
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.289Z
estimatedTokens: 1637
keywords: [ResearchStdySearchableField, common, dataset, includes, multiple, objects, serves, basis, searches, research, studies, API, version, 61.0, later]
---

# ResearchStdySearchableField

> Represents a common dataset that includes multiple fields and values from
         multiple objects and serves as the basis for searches related to research studies.
      This object is available in API version 61.0 and later.

# ResearchStdySearchableField

Represents a common dataset that includes multiple fields and values from multiple objects and serves as the basis for searches related to research studies. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrentEnrolleCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe current enrollment count of the research study. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the research study. |
| DoesAcceptHealthyCandidates | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the research study accepts healthy candidates (true) or not (false).The default value is false. |
| EligibleGender | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe eligible gender for the research study. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the research study. |
| Focus | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe focus of the research study. |
| Intent | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe intent of the research study. |
| Keywords | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe keywords that are used to search for the research study. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MaximumEligibleAge | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum eligible age for the research study. |
| MinimumEligibleAge | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe minimum eligible age for the research study. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the research study searchable field. |
| OmniProcess | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Omni Process associated with the research study. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the object assigned to the territory.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Phase | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe phase of the research study. |
| PrimaryConditionArea | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe focus area of the research study. |
| ResearchStudyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe research study associated with the research study searchable field.This field is a relationship field.Relationship NameResearchStudyRefers ToResearchStudy |
| ResearchStudyNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier number of the research study. |
| ResearchStudyType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of research study. |
| SiteCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count of sites where the research study is conducted. |
| Sponsor | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sponsor of the research study. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the research study. |
| Status | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the research study. |
| Summary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe summary of the research study. |
| TargetEnrolleeCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum enrollment count of the research study. |
| Title | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe title of the research study. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ResearchStdySearchableFieldChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ResearchStdySearchableFieldFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ResearchStdySearchableFieldHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ResearchStdySearchableFieldShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ResearchStdySearchableFieldChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- ResearchStdySearchableFieldFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ResearchStdySearchableFieldHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ResearchStdySearchableFieldShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
