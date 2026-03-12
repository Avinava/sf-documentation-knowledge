---
title: "CareDiagnosis"
domain: health-cloud-object-reference
topic: carediagnosis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.195Z
estimatedTokens: 2179
keywords: [CareDiagnosis, diagnosis, including, code, care, diagnoses, associated, Calls, Objects]
---

# CareDiagnosis

> Represents the details of a diagnosis including code type, name, and
         description. One or more care diagnoses can be associated with a care
      request.

# CareDiagnosis

Represents the details of a diagnosis including code type, name, and description. One or more care diagnoses can be associated with a care request.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareRequestCaseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionCase related to the care request.This is a relationship field.Relationship NameCareRequestCaseRelationship TypeLookupRefers ToCase |
| CareRequestId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionCare request for the diagnosis.This is a relationship field.Relationship NameCareRequestRelationship TypeLookupRefers ToCareRequest |
| CodeDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDiagnosis code description. |
| CodeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCode type for the diagnosis.Possible values are:ICD-10-CM |
| CodeTypeIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the code type for the diagnosis. |
| DiagnosisCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDiagnosis code. DiagnosisCodeId will be deprecated in a future release, so use DiagnosisCodeSetId instead.This is a relationship field.Relationship NameDiagnosisCodeRelationship TypeLookupRefers ToHealthCareDiagnosis |
| DiagnosisCodeSetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDiagnosis code set.This is a polymorphic relationship field.Relationship NameDiagnosisCodeSetRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| DischargeCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDischarge diagnosis code. |
| DischargeCodeDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the discharge diagnosis code. |
| DischargeCodeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCode type for the discharge diagnosis.Possible values are:ICD-10-CM |
| DischargeCodeTypeIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the code type for the discharge diagnosis. |
| DischargeDiagnosisCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDiagnosis code at discharge.This is a relationship field.Relationship NameDischargeDiagnosisCodeRelationship TypeLookupRefers ToHealthCareDiagnosis |
| DischargeDiagnosisEffectiveDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEffective date for the discharge diagnosis. |
| DischargeDiagnosisEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTermination date for the discharge diagnosis. |
| DischrgeDiagnosisCodeSetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code set associated with the discharge diagnosis.This field is a polymorphic relationship field.Relationship NameDischrgeDiagnosisCodeSetRefers ToCodeSet, CodeSetBundle |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEffective date for the diagnosis. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTermination date for the diagnosis. |
| HealthConditionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe health condition that's associated with the member.This field is a relationship field.Relationship NameHealthConditionRelationship TypeLookupRefers ToHealthConditionThis field is available in API version 57.0 and later. |
| IsDischargeDiagnosisPrimary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this is the primary discharge diagnosis.The default value is 'false'. |
| IsModifiedDiagnosisPrimary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this modified diagnosis is the primary diagnosis.The default value is 'false'. |
| IsPrimary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this diagnosis is the primary diagnosis.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| ModifiedCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionModified diagnosis code. |
| ModifiedCodeDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionModified diagnosis code description. |
| ModifiedCodeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCode type for the modified diagnosis.Possible values are:ICD-10-CM |
| ModifiedCodeTypeIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the code type for the modified diagnosis. |
| ModifiedDiagnosisCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the code type for the modified diagnosis. ModifiedDiagnosisCodeId will be deprecated in a future release, so use ModifiedDiagnosisCodeSetId instead.This is a relationship field.Relationship NameModifiedDiagnosisCodeRelationship TypeLookupRefers ToHealthCareDiagnosis |
| ModifiedDiagnosisCodeSetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionModified diagnosis code set associated with the diagnosis.This is a polymorphic relationship field.Relationship NameModifiedDiagnosisCodeSetRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| ModifiedEffectiveDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionModified effective date for the diagnosis. |
| ModifiedEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionModified termination date for the diagnosis. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the diagnosis code. |
| PresentOnAdmission | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies if the health condition was present at the time of member admission.Possible values are:NoUndeterminedYesThis field is available in API version 57.0 and later. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record type assigned to this object.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem from which this request was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID of the system from which the request was sourced. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp of the most recent update from the source system. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareDiagnosisChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm) (API version 59.0)

Change events are available for the object.

[CareDiagnosisFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[CareDiagnosisHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

#### See Also

-   [Care Diagnosis Input](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_care_diagnosis_input.htm "Associated diagnosis including code type, name, and description. One or more care diagnoses can be associated with a care request.")

## Related Topics

- Care Diagnosis Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_care_diagnosis_input.htm)
