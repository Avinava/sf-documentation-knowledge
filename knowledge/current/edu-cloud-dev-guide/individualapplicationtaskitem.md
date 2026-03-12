---
title: "IndividualApplicationTaskItem"
domain: edu-cloud-dev-guide
topic: individualapplicationtaskitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.297Z
estimatedTokens: 607
keywords: [IndividualApplicationTaskItem, junction, Application, Item, Individual, Task, API, version, 62.0, later, Calls, Associated, Objects]
---

# IndividualApplicationTaskItem

> Represents a junction between an Application Item and an Individual Application Task.
      This object is available in API version 62.0 and later.

# IndividualApplicationTaskItem

Represents a junction between an Application Item and an Individual Application Task. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationItem | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Application Item associated with the Individual Application Task Item. |
| ApplicationItemType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of Application Item associated with the Individual Application Task Item. |
| IndividualApplicationTaskId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Individual Application Task associated with the Individual Application Task Item.This field is a relationship field.Relationship NameIndividualApplicationTaskRelationship TypeMaster-detailRefers ToIndividualApplicationTask (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescription |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sequence number of the individual application task item. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[IndividualApplicationTaskItemHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- IndividualApplicationTaskItemHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
