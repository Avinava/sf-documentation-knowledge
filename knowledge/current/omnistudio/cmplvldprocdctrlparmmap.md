---
title: "CmplVldProcdCtrlParmMap"
domain: omnistudio
topic: cmplvldprocdctrlparmmap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:52.228Z
estimatedTokens: 628
keywords: [CmplVldProcdCtrlParmMap, association, Validation, Procedure, Control, Param, Map, record, Context, Attribute, API, version, 65.0, later, Calls]
---

# CmplVldProcdCtrlParmMap

> Represents the association between a Validation Procedure Control Param Map
         record and a Context Attribute for a specified Validation Procedure and Control. This
      object is available in API version 65.0 and later.

# CmplVldProcdCtrlParmMap

Represents the association between a Validation Procedure Control Param Map record and a Context Attribute for a specified Validation Procedure and Control. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CmplValidationProcdControlId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the related validation procedure control.This field is a relationship field.Relationship NameCmplValidationProcdControlRelationship TypeMaster-detailRefers ToCmplValidationProcdControl (the master object) |
| CmplValidationProcdParamId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the related validation procedure parameter.This field is a relationship field.Relationship NameCmplValidationProcdParamRefers ToCmplValidationProcdParam |
| ContextMappingId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the related context mapping.This field is a polymorphic relationship field.Relationship NameContextMappingRefers ToContextNodeMapping |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the validation procedure control parameter map. |
| UniqueIndexFormula | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe index formula.This field is a calculated field. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CmplVldProcdCtrlParmMapChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- CmplVldProcdCtrlParmMapChangeEvent (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)
