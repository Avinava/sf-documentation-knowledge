---
title: "GenericVisitTask"
domain: psc-api
topic: genericvisittask
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.778Z
estimatedTokens: 1072
keywords: [GenericVisitTask, task, performed, visit, Calls, Associated, Objects]
---

# GenericVisitTask

> Represents information about a task that can be performed during a
         visit.

# GenericVisitTask

Represents information about a task that can be performed during a visit.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DefinitionReferenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe definition record associated with the runtime record. The value is null when the definition record is created.This field is a relationship field.Relationship NameDefinitionReferenceRelationship TypeLookupRefers ToGenericVisitTask |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the task. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the visit task. |
| IsDefinition | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record is a definition record.The default value is false. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a task must be completed to complete a visit.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the generic visit task. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the generic visit task record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Sequence | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sequence in which the visit task can be performed. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the visit task. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the generic visit task.Possible values are:CompletedIn ProgressIs DefinedNot StartedThe default value is Is Defined. |
| StatusCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionSpecifies the status code of the generic visit task.Possible values are:CompletedInProgress— In ProgressIsDefined— Is DefinedNotStarted— Not StartedThe default value is IsDefined. |
| VisitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe visit associated with the record.This field is a relationship field.Relationship NameVisitRelationship TypeLookupRefers ToVisit |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GenericVisitTaskChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[GenericVisitTaskFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[GenericVisitTaskHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[GenericVisitTaskOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[GenericVisitTaskShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
