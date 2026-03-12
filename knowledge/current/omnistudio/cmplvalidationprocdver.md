---
title: "CmplValidationProcdVer"
domain: omnistudio
topic: cmplvalidationprocdver
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.748Z
estimatedTokens: 899
keywords: [CmplValidationProcdVer, Represents, Validation, Procedure, Version, business, process, uses., API, version, 65.0, later., Supported, Calls, Fields, Associated, Objects]
---

# CmplValidationProcdVer

> Represents a Validation Procedure Version that the business process
         uses. This object is available in API version 65.0 and later.

# CmplValidationProcdVer

Represents a Validation Procedure Version that the business process uses. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe unique name of the record in the API. |
| AssignedAdminId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe admin assigned to configure the compliance procedure.This field is a relationship field.Relationship NameAssignedAdminRefers ToUser |
| CmplValidationProcedureId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the related validation procedure.This field is a relationship field.Relationship NameCmplValidationProcedureRelationship TypeMaster-detailRefers ToCmplValidationProcedure (the master object) |
| ConfigurationStage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe configuration stage of the compliance procedure version.Possible values are:ConfigureControls—Configure ControlsDefineBusinessContext—Define Business ContextMapBusinessContext—Map Business ContextSubmit |
| Description | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the validation procedure version. |
| EffectiveFrom | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe effective start date and time. |
| EffectiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe effective end date and time. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the validation procedure version. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the validation procedure version.Possible values are:ActiveConfiguredDraftPendingApproval—Pending ApprovalPendingConfiguration—Pending ConfigurationPublishedRetired |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CmplValidationProcdVerChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- CmplValidationProcdVerChangeEvent (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)
