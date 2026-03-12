---
title: "RegulationClauseVersion"
domain: omnistudio
topic: regulationclauseversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:52.687Z
estimatedTokens: 1002
keywords: [RegulationClauseVersion, version, Regulation, Clause, tracks, amendments, API, 65.0, later, Calls, Associated, Objects]
---

# RegulationClauseVersion

> Represents the version of the Regulation Clause that tracks amendments.
      This object is available in API version 65.0 and later.

# RegulationClauseVersion

Represents the version of the Regulation Clause that tracks amendments. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ChangeSummary | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA description of the changes or revisions made in the regulation clause version. |
| ClauseText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe clause text of the regulation clause version. |
| ContentDocumentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe content document associated with the record.This field is a relationship field.Relationship NameContentDocumentRefers ToContentDocument |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe effective start date of the regulation clause version. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expiry date of the regulation clause version. |
| IsAiGenerated | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the version of a regulation clause is extracted using Generative AI (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name for the record. |
| RegulationClauseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe regulation clause associated with the regulation clause version.This field is a relationship field.Relationship NameRegulationClauseRelationship TypeMaster-detailRefers ToRegulationClause (the master object) |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the regulation clause version.Possible values are:ActiveDraftPublishedRetired |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RegulationClauseVersionChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[RegulationClauseVersionFeed](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[RegulationClauseVersionHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- RegulationClauseVersionChangeEvent (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)
- RegulationClauseVersionFeed (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)
- RegulationClauseVersionHistory (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)
