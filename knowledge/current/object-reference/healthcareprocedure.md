---
title: "HealthCareProcedure"
domain: object-reference
topic: healthcareprocedure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.041Z
estimatedTokens: 1145
keywords: [HealthCareProcedure, industry-standard, healthcare, procedure, codes, Spring, ’21, release, Diagnosis, objects, stored, specifically, procedures, diagnoses, were]
---

# HealthCareProcedure

> Represents information related to industry-standard healthcare
			procedure codes. Before the Spring ’21 release, the Healthcare Procedure and Healthcare
			Diagnosis objects stored codes specifically related to procedures and diagnoses. These
			codes were used for prior-authorization requests and approval processes. Since the
			Spring’21 release, Health Cloud uses the Code Set and Code Set Bundle objects for this
			purpose instead.

# HealthCareProcedure

Represents information related to industry-standard healthcare procedure codes. Before the Spring ’21 release, the Healthcare Procedure and Healthcare Diagnosis objects stored codes specifically related to procedures and diagnoses. These codes were used for prior-authorization requests and approval processes. Since the Spring’21 release, Health Cloud uses the Code Set and Code Set Bundle objects for this purpose instead.

## Example

The Code Set and Code Set Bundle objects improve on the old objects by adding support for terminology system information. This added support comes in the form of the Source System and Version fields.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Objects, flows, and apps that previously used Healthcare Diagnosis and Healthcare Procedure have been or will be extended to support the use of Code Set and Code Set Bundle. Healthcare Diagnosis and Healthcare Procedure are to be gradually phased out with future releases.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionCategory of the procedure code such as anesthesia, surgery, radiology, and so on. |
| Code | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndustry standard procedure code such as CPT or HCPCS. |
| CodeDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the procedure code. |
| CodeShortDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionShort description of the procedure code. |
| CodeType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionType of procedure code represented in the record such as CPT or HCPCS. |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStart date for the code. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnd date for the code. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the diagnosis code is available for use. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the code that displays in search and lookup fields. Salesforce recommends using the code along with the description to populate this field. For example, use <Code>: <Description> or <Code>-<Description> such as 95115: Allergy injection. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[HealthCareProcedureChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 60.0)

Change events are available for the object.

[HealthCareProcedureHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[HealthCareProcedureOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[HealthCareProcedureShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
