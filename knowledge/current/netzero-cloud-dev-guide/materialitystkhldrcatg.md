---
title: "MaterialityStkhldrCatg"
domain: netzero-cloud-dev-guide
topic: materialitystkhldrcatg
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.488Z
estimatedTokens: 700
keywords: [MaterialityStkhldrCatg, category, organize, materiality, stakeholders, groups, employees, shareholders, suppliers, customers, API, version, 59.0, later, Calls]
---

# MaterialityStkhldrCatg

> Represents a category to organize materiality stakeholders into
         groups, such as employees, shareholders, suppliers, and customers. This object is
      available in API version 59.0 and later.

# MaterialityStkhldrCatg

Represents a category to organize materiality stakeholders into groups, such as employees, shareholders, suppliers, and customers. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the materiality stakeholder category.Possible values are:Business ReviewCustomer and SupplierEmployeesGlobal Agenda SetterInvestorLeadershipRegulator |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the materiality stakeholder category. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MaterialityAssessmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe materiality assessment associated with the stakeholder category.This field is a relationship field.Relationship NameMaterialityAssessmentRelationship TypeLookupRefers ToMaterialityAssessment |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the stakeholder category. |
| WeightingPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage weighting given to the relevant responses provided by the stakeholder category. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MaterialityStkhldrCatgFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MaterialityStkhldrCatgHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- MaterialityStkhldrCatgFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- MaterialityStkhldrCatgHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
