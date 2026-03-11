---
title: "CmplValidationProcdParam"
domain: omnistudio
topic: cmplvalidationprocdparam
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:11.800Z
keywords: [CmplValidationProcdParam, Supported, Calls, Fields, Associated, Objects]
---

# CmplValidationProcdParam

# CmplValidationProcdParam

Represents the input parameters passed in the business context when the Compliance API is invoked, and the output parameters expected by the Validation Procedure check. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CmplValidationProcdVerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the related validation procedure version.This field is a relationship field.Relationship NameCmplValidationProcdVerRelationship TypeMaster-detailRefers ToCmplValidationProcdVer (the master object) |
| DataType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionData type of the validation procedure parameter.Possible values are:RecordID—Record ID |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the validation procedure parameter. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the validation procedure parameter. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of the validation procedure parameter.Possible values are:Input |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CmplValidationProcdParamChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.