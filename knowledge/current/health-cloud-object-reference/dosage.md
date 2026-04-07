---
title: "Dosage"
domain: health-cloud-object-reference
topic: dosage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:56.211Z
estimatedTokens: 954
keywords: [Dosage, FHIR, resource, maps, Patient​Medication​Dosage​, Salesforce, V4.0, Clinical, Data, Model, Mapping]
---

# Dosage

> The Dosage FHIR resource maps to the Patient​Medication​Dosage​ object in Salesforce.

# Dosage

The Dosage FHIR resource maps to the Patient​Medication​Dosage​ object in Salesforce.

## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for [Dosage](https://www.hl7.org/fhir/dosage.html#Dosage) map to the fields in Salesforce.

| Dosage Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| sequence | Patient​Medication​Dosage​.Sequence | Double | 0.1 | N/A |
| text | Patient​Medication​Dosage​.Comments | String | 0.1 | Both dosage​.text and dosage​.timing are mapped to the Patient​Medication​Dosage​.Comments field in Salesforce. |
| additional​Instruction | Patient​Medication​Dosage​.Additional​Instruction | String | 0.1 | While FHIR defines Dosage​.additional​Instruction as a zero-to-many reference to code set bundle, the Salesforce implementation is a zero-to-one text field. |
| patient​Instruction | Patient​Medication​Dosage​.Patient​Instruction | String | 0.1 | N/A |
| timing | Patient​Medication​Dosage​.Timing​Id | String | 0.1 | N/A |
| asNeeded​.asNeeded​Boolean | Patient​Medication​Dosage​.IsAs​Needed | Boolean | 0.1 | N/A |
| asNeeded​.asNeeded​Codeable​Concept | N/A | N/A | N/A | Not supported |
| site | Patient​Medication​Dosage​.SiteId | Lookup: CodeSet​Bundle | 0.1 | N/A |
| route | Patient​Medication​Dosage​.RouteId | Lookup: CodeSet​Bundle | 0.1 | N/A |
| method | Patient​Medication​Dosage​.MethodId | Lookup: CodeSet​Bundle | 0.1 | N/A |
| dose​And​Rate | N/A | N/A | 0.1 | While FHIR defines dosage​.dose​AndRate as a zero-to-many block of child resources, the Salesforce implementation supports only a zero-to-one set of information per record. |
| dose​And​Rate​.type | Patient​Medication​Dosage​.Dosage​Definition​Type | Picklist | 0.1 | While FHIR defines dosage​.dose​AndRate​.type as a code set bundle, the Salesforce implementation is a picklist. |
| dose​And​Rate​.dose | Patient​Medication​Dosage​.Dosage​Quantity​Type | Picklist | 0.1 | A Salesforce-original field that determines whether the dosage​.dose​AndRate​.dose value in the record is a dose range or a dose quantity. |
| Patient​Medication​Dosage​.Dosage​Quantity​Numerator | Double | 0.1 | Because Salesforce doesn’t support native quantity or range data types, the dosage​.dose​AndRate​.dose FHIR resource is flattened to a set of numerator, denominator, and unit fields. |
| Patient​Medication​Dosage​.Dosage​Quantity​Denominator | Double | 0.1 |
| Patient​Medication​Dosage​.Dosage​UnitId | Lookup: UnitOf​Measure | 0.1 |
| doseAnd​Rate​.rate | Patient​Medication​Dosage​.Dosage​Rate​Type | Picklist | 0.1 | A Salesforce-original field that determines whether the dosage​.doseAnd​Rate​.rate value in the record is a simple frequency, frequency range, or frequency ratio. |
| Patient​Medication​Dosage​.Dosage​Rate​Numerator | Double | 0.1 | Because Salesforce doesn’t support native quantity, range, or ratio data types, the dosage​.doseAnd​Rate​.dose FHIR resource is flattened to a set of numerator, denominator, and unit fields. |
| Patient​Medication​Dosage​.Dosage​Rate​Denominator | Double | 0.1 |
| Patient​Medication​Dosage​.Dosage​Rate​UnitId | Lookup: UnitOf​Measure | 0.1 |
| doseAnd​Rate​.maxDose​Per​Period | N/A | N/A | N/A | Not supported |
| doseAnd​Rate​.max​DosePer​Administration | N/A | N/A | N/A | Not supported |
| doseAnd​Rate​.max​Dose​Per​Lifetime | N/A | N/A | N/A | Not supported |

#### See Also

-   [PatientMedicationDosage](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_PatientMedicationDosage.htm "Represents dosage information for medication. This object is primarily used to add dosage information in MedicationStatement, MedicationRequest, or MedicationDispense records. This object is available in API version 51.0 and later.")

## Related Topics

- PatientMedicationDosage (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_PatientMedicationDosage.htm)
