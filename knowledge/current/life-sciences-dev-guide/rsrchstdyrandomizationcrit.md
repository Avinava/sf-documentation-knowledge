---
title: "RsrchStdyRandomizationCrit"
domain: life-sciences-dev-guide
topic: rsrchstdyrandomizationcrit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.370Z
estimatedTokens: 960
keywords: [RsrchStdyRandomizationCrit, criteria, definition, grouping, candidates, participating, research, study, API, version, 61.0, later, Calls, Associated, Objects]
---

# RsrchStdyRandomizationCrit

> Represents the criteria definition for grouping the candidates participating
         in the research study. This object is available in API version 61.0 and
      later.

# RsrchStdyRandomizationCrit

Represents the criteria definition for grouping the candidates participating in the research study. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareProgramSiteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care program site associated with the research study randomization criteria.This field is a relationship field.Relationship NameCareProgramSiteRefers ToCareProgramSite |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the research study randomization criteria. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the object assigned to the territory.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ResearchStdyRandomizationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe research study randomization associated with the research study randomization criteria.This field is a relationship field.Relationship NameResearchStdyRandomizationRefers ToResearchStdyRandomization |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RsrchStdyRandomizationCritChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[RsrchStdyRandomizationCritFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[RsrchStdyRandomizationCritHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[RsrchStdyRandomizationCritShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- RsrchStdyRandomizationCritChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- RsrchStdyRandomizationCritFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- RsrchStdyRandomizationCritHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- RsrchStdyRandomizationCritShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
