---
title: "​Procedure"
domain: life-sciences-dev-guide
topic: procedure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:58.205Z
estimatedTokens: 3134
keywords: [​Procedure, procedure, FHIR, resource, maps, Patient​Medical​​Procedure, Patient​Medical​​Procedure​Detail, Salesforce​, V4​.0, Clinical​, Model, Mapping, Sample, Record, Diagram]
---

> The procedure FHIR resource maps to the Patient​Medical​​Procedure and Patient​Medical​​Procedure​Detail objects in Salesforce​.

# ​Procedure

The procedure FHIR resource maps to the Patient​Medical​​Procedure and Patient​Medical​​Procedure​Detail objects in Salesforce​.

## FHIR V4​.0 - Clinical​ Data Model Mapping

Here’s how the fields defined by FHIR for [​Procedure](https://www.hl7.org/fhir/procedure.html) map to the fields in Salesforce​.

| ​Procedure Resource | Salesforce Field | ​Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | Identifier | Object | 0​.M | The identifier information for a ​Procedure is represented as Identifier records that reference the Patient​Medical​​Procedure record using their Identifier​.Parent​RecordId field​. |
| instantiates​Canonical​ | N/A | N/A | N/A | Not Supported |
| instantiates​Canonical​ | N/A | N/A | N/A | Not Supported |
| basedOn | Patient​Medical​​Procedure​Detail | Object | 0​.M | The information about the service request that a procedure is based on is represented as Patient​Medical​​Procedure​Detail records that reference the Patient​Medical​​Procedure record using their Patient​Medical​​Procedure​Detail​.Patient​Medical​​Procedure​Id field​.The Salesforce implementation of procedure​.basedOn doesn’t support references to care plans​. |
| Patient​Medical​​Procedure​Detail​.​Detail​RecordId | Lookup: Clinical​Service​Request | 0​.1 | For procedure​.basedOn information, Patient​Medical​​Procedure​Detail​.​Detail​RecordId must reference a Clinical​Service​Request record​. |
| Patient​Medical​​Procedure​Detail​.​Detail​Type | PicklistValue: Based On | 0​.1 | For procedure​.basedOn information, Patient​Medical​​Procedure​Detail​.​Detail​Type must use the value Based On​. |
| partOf | Patient​Medical​​Procedure​Detail | Object | 0​.M | The information about the procedure or observation that a procedure is a part of is represented as Patient​Medical​​Procedure​Detail records that reference the Patient​Medical​​Procedure record using their Patient​Medical​​Procedure​Detail​.Patient​Medical​​Procedure​Id field​.The Salesforce implementation of procedure​.partOf doesn’t support references to medication administration​. |
| Patient​Medical​​Procedure​Detail​.​Detail​RecordId | Polymorphic Lookup: Patient​Medical​​Procedure, Care​Observation | 0​.1 | For procedure​.partOf information, Patient​Medical​​Procedure​Detail​.​Detail​RecordId must reference a either a Patient​Medical​​Procedure record or a Care​Observation​. |
| Patient​Medical​​Procedure​Detail​.​Detail​Type | PicklistValue: Part Of | 0​.1 | For procedure​.partOf information, Patient​Medical​​Procedure​Detail​.​Detail​Type must use the value Part Of​. |
| status | Patient​Medical​​Procedure​.Status | Picklist | 0​.1 | While FHIR defines procedure​.status as a code set bundle, the Salesforce implementation of Patient​Medical​​Procedure​.Status is picklist​. |
| status​Reason | Patient​Medical​​Procedure​.Status​Reason​​CodeId | Lookup: ​CodeSet​Bundle | 0​.1 | N/A |
| category | Patient​Medical​​Procedure​.​TypeId | Lookup: ​CodeSet​Bundle | 0​.1 | N/A |
| code | Patient​Medical​​Procedure​.​CodeId | Lookup: ​CodeSet​Bundle | 0​.1 | N/A |
| subject | Patient​Medical​​Procedure​.PatientId | Master​Detail: Account | 1​.1 | The Salesforce implementation of procedure​.subject doesn’t support references to groups​. |
| encounter | Patient​Medical​​Procedure​.Clinical​Encounter​Id | Lookup: Clinical​Encounter | 0​.1 | N/A |
| performed​.performed​Date​Time | Patient​Medical​​Procedure​.Start​Date | Date​Time | 0​.1 | Patient​Medical​​Procedure​.Start​Date is used for both procedure​.performed​.performed​Date​Time and procedure​.performed​.performed​Period​. For the latter, the field is used to represent the start date of the period​. |
| performed​.performed​Period | Patient​Medical​​Procedure​.Start​Date | Date​Time | 0​.1 | Because Salesforce doesn’t support a native period data type, the procedure​.performed​.performed​Period field is flattened into a set of start date and end date fields​. |
| Patient​Medical​​Procedure​.End​Date | Date​Time | 0​.1 |
| performed​.performed​String | Patient​Medical​​Procedure​.Duration​Time​String | String | 0​.1 | N/A |
| performed​.performedAge | Patient​Medical​​Procedure​.Performed​AtAge | Double | 0​.1 | Because Salesforce doesn’t support a native age data type, the procedure​.performed​.performedAge FHIR resource is flattened into a set of age and unit fields​. |
| Patient​Medical​​Procedure​.PerformedAt​AgeUnitId | Lookup: UnitOf​Measure | 0​.1 |
| performed​.performed​Range | Patient​Medical​​Procedure​.PerformedAt​AgeLower​Limit | Double | 0​.1 | Because Salesforce doesn’t support a native range data type, the procedure​.performed​.performed​Range FHIR resource is flattened into a set of lower limit, upper limit, and unit fields​. |
| Patient​Medical​​Procedure​.PerformedAt​​AgeUpper​Limit | Double | 0​.1 |
| Patient​Medical​​Procedure​.Performed​AgeRange​Unit | Lookup: UnitOf​Measure | 0​.1 |
| recorder | Patient​Medical​​Procedure​.​Record​Creator​Id | Lookup: Account, HealthcareProvider | 0​.1 | N/A |
| asserter | Patient​Medical​​Procedure​.Assertion​SourceId | Lookup: Account, Healthcare​Provider | 0​.1 | N/A |
| performer | Care​Performer | Object | 0​.M | The performer information for a ​Procedure is represented as Care​Performer records that reference the Patient​Medical​​Procedure record using their Care​Performer​.Parent​RecordId field​. |
| performer​.function | Care​Performer​.RoleId | Polymorphic Lookup: ​CodeSet, ​CodeSet​Bundle | 0​.1 | N/A |
| performer​.actor | Care​Performer​.PersonId | Polymorphic Lookup: Account, Healthcare​Provider | 0​.1 | The Salesforce implementation doesn’t support references to devices​. |
| performer​.actoron​BehalfOf | Care​Performer​.Affiliated​Organization​Id | Lookup: Account | 0​.1 | 0​.1 |
| location | Patient​Medical​​Procedure​.FacilityId | Lookup: Healthcare​.Facility | 0​.1 | N/A |
| reason​Code | Patient​Medical​​Procedure​.Reason​CodeId | Lookup: ​CodeSet​Bundle | 0​.1 | While FHIR defines procedure​.reason​Code as a zero-to-many resource, the Salesforce implementation is zero-to-one​. |
| reason​Reference | Patient​Medical​​Procedure​.Reason​Reference​Id | Polymorphic Lookup: Health​Condition, Care​Observation, Patient​Medical​​Procedure, and Diagnostic​Summary | 0​.1 | While FHIR defines procedure​.reason​Code as a zero-to-many resource, the Salesforce implementation is zero-to-one​.The Salesforce implementation doesn’t support document reference records​. |
| bodySite | Patient​Medical​​Procedure​Detail | Object | 0​.M | The body site information of a procedure is represented as Patient​Medical​​Procedure​Detail records that reference the Patient​Medical​​Procedure record using their Patient​Medical​​Procedure​Detail​.Patient​Medical​​ProcedureId field​. |
| Patient​Medical​​Procedure​Detail​.​Detail​CodeId | Polymorphic Lookup: ​CodeSet, ​CodeSet​Bundle | 0​.1 | For procedure​.bodySite information, Patient​Medical​​Procedure​Detail​.​Detail​CodeId must reference a ​CodeSet or ​CodeSet​Bundle record​. |
| Patient​Medical​​Procedure​Detail​.​Detail​Type | PicklistValue: Body Site | 0​.1 | For procedure​.bodySite information, Patient​Medical​​Procedure​Detail​.​Detail​Type must use the value Body Site​. |
| outcome | Patient​Medical​​Procedure​.Outcome | Picklist | 0​.1 | While FHIR defines procedure​.outcome as a code, the Salesforce implementation of Patient​Medical​​Procedure​.Outcome is a picklist​. |
| report | Patient​Medical​​Procedure​.ReportId | Lookup: Diagnostic​Summary | 0​.1 | While FHIR defines procedure​.report as a zero-to-many resource, the Salesforce implementation is zero-to-one​.The Salesforce implementation of procedure​.report doesn’t support references to composition or document reference records​. |
| complication | Patient​Medical​​Procedure​Detail | Object | 0​.M | The complication information of a procedure is represented as Patient​Medical​​Procedure​Detail records that reference the Patient​Medical​​Procedure record using their Patient​Medical​​Procedure​Detail​.Patient​Medical​​ProcedureId field​. |
| Patient​Medical​​Procedure​Detail​.​Detail​CodeId | Polymorphic Lookup: ​CodeSet, ​CodeSet​Bundle | 0​.1 | For procedure​.complication information, Patient​Medical​​Procedure​Detail​.​Detail​CodeId must reference a ​CodeSet or ​CodeSet​Bundle record​. |
| Patient​Medical​​Procedure​Detail​.​Detail​Type | PicklistValue: Complication | 0​.1 | For procedure​.complication information, Patient​Medical​​Procedure​Detail​.​Detail​Type must use the value Complication​. |
| complication​Detail | Patient​Medical​​Procedure​Detail | Object | 0​.M | The complication detail information of a procedure is represented as Patient​Medical​​Procedure​Detail records that reference the Patient​Medical​​Procedure record using their Patient​Medical​​Procedure​Detail​.Patient​Medical​​ProcedureId field​. |
| Patient​Medical​​Procedure​Detail​.​Detail​RecordId | Lookup: Health​Condition | 0​.1 | For procedure​.complication​Detail information, Patient​Medical​​Procedure​Detail​.​Detail​RecordId must reference a Health​Condition record​. |
| Patient​Medical​​Procedure​Detail​.​Detail​Type | PicklistValue: Complication ​Detail | 0​.1 | For procedure​.complication​Detail information, Patient​Medical​​Procedure​Detail​.​Detail​Type must use the value Complication ​Detail​. |
| followUp | Patient​Medical​​Procedure​Detail | Object | 0​.M | The follow up information of a procedure is represented as Patient​Medical​​Procedure​Detail records that reference the Patient​Medical​​Procedure record using their Patient​Medical​​Procedure​Detail​.Patient​Medical​​ProcedureId field​. |
| Patient​Medical​​Procedure​Detail​.​Detail​CodeId | Polymorphic Lookup: ​CodeSet, ​CodeSet​Bundle | 0​.1 | For procedure​.followUp information, Patient​Medical​​Procedure​Detail​.​Detail​CodeId must reference a ​CodeSet or ​CodeSet​Bundle record​. |
| Patient​Medical​​Procedure​Detail​.​Detail​Type | PicklistValue: Follow Up | 0​.1 | For procedure​.complication​Detail information, Patient​Medical​​Procedure​Detail​.​Detail​Type must use the value Follow Up​. |
| Note | AuthorNote | Object | 0.M | Use the AuthorNote object to add notes to a procedure, and use the ParentRecordId field to reference the parent procedure the note belongs to. |
| focal​Device | Patient​Medical​​Procedure​Detail​.​Detail​recordId | Lookup: Care​Registered​Device | 0.M | Use the Patient​Medical​​Procedure​Detail child object to add multiple focalDevice values that reference the parent procedure record. |
| used​Reference | Patient​Medical​​Procedure​Detail​.​Detail​RecordId | Lookup: Care​Registered​Device | 0.M | Use the Patient​Medical​​Procedure​Detail child object to specify devices used in a procedure, and reference the parent procedure record. |
| used​Code | Patient​Medical​​Procedure​Detail​.​Detail​CodeId | N/A | 0.M | Use the Patient​Medical​​Procedure​Detail child object to specify codes for items used in a procedure, and reference the parent procedure record. |

## Sample Record Diagram

Here's a diagram that shows an example of how this resource is represented in Salesforce.

![A diagram that shows how a procedure for Charles' sinusectomy is represented in Salesforce.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2FMappings_FHIR%2Fimages%2Fsrd_hc_procedure.png&folder=life_sciences_dev_guide)

#### See Also

-   [CarePerformer](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_CarePerformer.htm "Represents the person performing care in observations, procedure, and immunizations. This person may be a physician, the patient’s contact, or anyone who administered any sort of care to the patient in the context of the concerned care event. This object is available in API version 51.0 and later.")

-   [PatientMedicalProcedure](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_patientmedicalprocedure.htm "Represents detailed information about a healthcare procedure the patient has undergone, is undergoing or will undergo. This object is available in API version 51.0 and later.")

-   [PatientMedicalProcedureDetail](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_PatientMedicalProcedureDetail.htm "Associates records from different objects to a patient medical procedure record to add more information to the procedure record. This is a multi-object junction object. This object is available in API version 51.0 and later.")

## Related Topics

- CarePerformer (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_CarePerformer.htm)
- PatientMedicalProcedure (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_patientmedicalprocedure.htm)
- PatientMedicalProcedureDetail (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_PatientMedicalProcedureDetail.htm)
