---
title: "HealthCareDiagnosis"
domain: health-cloud-object-reference
topic: healthcarediagnosis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.193Z
estimatedTokens: 1496
keywords: [HealthCareDiagnosis, industry-standard, healthcare, diagnosis, codes, Spring, ’21, release, Procedure, objects, stored, specifically, procedures, diagnoses, were]
---

# HealthCareDiagnosis

> Represents information related to industry-standard healthcare
			diagnosis codes. Before the Spring ’21 release, the Healthcare Procedure and Healthcare
			Diagnosis objects stored codes specifically related to procedures and diagnoses. These
			codes were used for prior-authorization requests and approval processes. Since the
			Spring’21 release, Health Cloud uses the Code Set and Code Set Bundle objects for this
			purpose instead.

# HealthCareDiagnosis

Represents information related to industry-standard healthcare diagnosis codes. Before the Spring ’21 release, the Healthcare Procedure and Healthcare Diagnosis objects stored codes specifically related to procedures and diagnoses. These codes were used for prior-authorization requests and approval processes. Since the Spring’21 release, Health Cloud uses the Code Set and Code Set Bundle objects for this purpose instead.

## Example

The Code Set and Code Set Bundle objects improve on the old objects by adding support for terminology system information. This added support comes in the form of the Source System and Version fields.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

Objects, flows, and apps that previously used Healthcare Diagnosis and Healthcare Procedure have been or will be extended to support the use of Code Set and Code Set Bundle. Healthcare Diagnosis and Healthcare Procedure are to be gradually phased out with future releases.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the category for this diagnosis such as newborn, pediatric, maternity, or adult. |
| Code | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndustry-standard diagnosis code. |
| CodeDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the diagnosis code. |
| CodeType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionType of diagnosis code represented in the record such as ICD-9 or ICD-10. |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStart date for the code. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnd date for the code. |
| Gender | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether this diagnosis is for males, females, or all genders. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the diagnosis code is available for use. |
| IsComplicationOrComorbidity | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this diagnosis is used to represent a complication or comorbidity. |
| IsHospitalAcquiredCondition | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this diagnosis represents a condition acquired while in the hospital. |
| IsMajorComplicationOrComorbidity | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this diagnosis is used to represent a major complication or comorbidity. |
| IsPresentOnAdmissionExempt | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether diagnosis code is exempt from the diagnosis present on admission requirement. |
| IsPrimaryDiagnosis | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether diagnosis code can be used as primary diagnosis only, or can be used in any diagnosis sequence. |
| IsUnacceptablePrincipalDxIpAdmit | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether diagnosis code is an unacceptable principal diagnosis for inpatient admission per Medicare Code Edits. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the code that displays in search and lookup fields. Salesforce recommends using the code along with the description to populate this field. For example, use <Code>: <Description> or <Code>-<Description> such as (E08.37X9 - Diabetes mellitus due to underlying condition). |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[HealthCareDiagnosisChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 60.0)

Change events are available for the object.

[HealthCareDiagnosisHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[HealthCareDiagnosisOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[HealthCareDiagnosisShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
