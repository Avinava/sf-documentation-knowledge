---
title: "CareProgramStatusPeriod"
domain: life-sciences-dev-guide
topic: careprogramstatusperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.464Z
estimatedTokens: 940
keywords: [CareProgramStatusPeriod, historical, changes, status, care, program, API, version, 61.0, later, Calls, Associated, Objects]
---

# CareProgramStatusPeriod

> Represents the historical changes to the status of a care program. This
      object is available in API version 61.0 and later.

# CareProgramStatusPeriod

Represents the historical changes to the status of a care program. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AreDatesTentative | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the period dates are actual or expected.The default value is false. |
| CareProgram | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent care program associated with the status.This field is a relationship field.Relationship NameCareProgramRelationship TypeMaster-detailRefers ToCareProgram (the master object) |
| EffectiveEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the period when the specified status was in effect for the specified care program. |
| EffectiveStartDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe start date and time of the period when the specified status was in effect for the specified care program. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the care program status period. |
| Reason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason why the care program was assigned the status. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the care program. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[careprogramstatusperiodChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[careprogramstatusperiodFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[careprogramstatusperiodHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- careprogramstatusperiodChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- careprogramstatusperiodFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- careprogramstatusperiodHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
