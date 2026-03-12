---
title: "CmplValidationProcdControl"
domain: omnistudio
topic: cmplvalidationprocdcontrol
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.733Z
estimatedTokens: 535
keywords: [CmplValidationProcdControl, Represents, junction, between, Validation, Procedure, Version, Compliance, Control., API, version, 65.0, later., Supported, Calls, Fields, Associated, Objects]
---

# CmplValidationProcdControl

> Represents a junction between a Validation Procedure Version and a Compliance
         Control. This object is available in API version 65.0 and later.

# CmplValidationProcdControl

Represents a junction between a Validation Procedure Version and a Compliance Control. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CmplValidationProcdVerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the validation procedure version that the compliance validation procedure control belongs to.This field is a relationship field.Relationship NameCmplValidationProcdVerRelationship TypeMaster-detailRefers ToCmplValidationProcdVer (the master object) |
| ComplianceControlVersionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the compliance control version that the compliance validation procedure control belongs to.This field is a relationship field.Relationship NameComplianceControlVersionRefers ToComplianceControlVersion |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the validation procedure control. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CmplValidationProcdControlChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- CmplValidationProcdControlChangeEvent (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)
