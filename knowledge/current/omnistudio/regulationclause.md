---
title: "RegulationClause"
domain: omnistudio
topic: regulationclause
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:12.166Z
keywords: [RegulationClause, Supported, Calls, Fields, Associated, Objects]
---

# RegulationClause

# RegulationClause

Represents the information related to a regulation or law outlining specific requirements or sections. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Comments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNotes or observations about the regulation clause. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the regulation clause. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name for the record. |
| ParentRegulationClauseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent regulation clause associated with the regulation clause.This field is a relationship field.Relationship NameParentRegulationClauseRefers ToRegulationClause |
| ReferenceDocumentList | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe links to official texts and relevant documents, such as regulatory texts, guidance documents, interpretations or official communications from regulatory authorities. |
| RegulationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSpecifies the regulation associated with the regulation clause.This field is a relationship field.Relationship NameRegulationRelationship TypeMaster-detailRefers ToRegulation (the master object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RegulationClauseChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[RegulationClauseFeed](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[RegulationClauseHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.