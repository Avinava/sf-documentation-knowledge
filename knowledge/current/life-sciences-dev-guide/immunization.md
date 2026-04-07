---
title: "​Immunization"
domain: life-sciences-dev-guide
topic: immunization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:58.115Z
estimatedTokens: 1578
keywords: [​Immunization, FHIR, resource, maps, Patient​Immunization, PatientHealthReaction, Salesforce​, V4​.0, ​Clinical, Model, Mapping]
---

> The ​Immunization FHIR resource maps to the
      Patient​Immunization and PatientHealthReaction objects in Salesforce​.

# ​Immunization

The ​Immunization FHIR resource maps to the Patient​Immunization and PatientHealthReaction objects in Salesforce​.

## FHIR V4​.0 - ​Clinical Data Model Mapping

Here’s how the fields defined by FHIR for [​Immunization](https://www.hl7.org/fhir/immunization.html) map to the fields in Salesforce​.

| ​Immunization Resource | Salesforce Field | Type | Salesforce ​Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | Identifier | Object | 0​.M | The identifier information for an immunization is represented as Identifier records that reference the Patient​Immunization record using their Identifier​.Parent​RecordId field​. |
| status | Patient​Immunization​.Status | Picklist | 0​.1 | While FHIR defines immunization​.status as a code set bundle, the Salesforce implementation of Patient​Immunization​.Status is picklist​. |
| status​Reason | Patient​Immunization​.Status​Reason​​CodeId | Lookup: ​CodeSet​​Bundle | 0​.1 | N/A |
| vaccine​Code | Patient​Immunization​.Vaccine​CodeId | Lookup: ​CodeSet​​Bundle | 0​.1 | N/A |
| patient | Patient​Immunization​.PatientId | Master-Detail Reference: Account | 1​.1 | N/A |
| encounter | Patient​Immunization​.​Clinical​Encounter​Id | Lookup: ​Clinical​Encounter | 0​.1 | N/A |
| occurrence​.occurrence​Date​Time | Patient​Immunization​.Vaccination​Date | Date​Time | 0​.1 | N/A |
| occurrence​.occurrence​String | Patient​Immunization​.Vaccination​Period | String | 0​.1 | N/A |
| recorded | Patient​Immunization​.Record​Creation​Date​Time | Date​Time | 0​.1 | N/A |
| primary​Source | Patient​Immunization​.Is​Recorded​By​Vaccinator | Boolean | 0​.1 | N/A |
| report​Origin | Patient​Immunization​.Information​SourceId | Lookup: ​CodeSet​​Bundle | 0​.1 | N/A |
| location | Patient​Immunization​.FacilityId | Lookup: Healthcare​.Facility | 0​.1 | N/A |
| manufacturer | Patient​Immunization​.Manufacturer | String | 0​.1 | Use this field if only the name of the organization is required. |
| Patient​Immunization​.Manufacturer​AccountId | Lookup: Account |  | N/A |
| lot​Number | Patient​Immunization​.Lot​Number | String | 0​.1 | N/A |
| expiration​Date | Patient​Immunization​.Expiration​Date | Date​Time | 0​.1 | N/A |
| site | Patient​Immunization​.SiteId | Lookup: ​CodeSet​​Bundle | 0​.1 | N/A |
| route | Patient​Immunization​.RouteId | Lookup: ​CodeSet​​Bundle | 0​.1 | N/A |
| dose | Patient​Immunization​.​Dose | Double | 0​.1 | The Salesforce equivalent of immunization​.dose is represented used the fields Patient​Immunization​.​Dose for the quantity and Patient​Immunization​.​Dose​UnitId for the unit​. |
| Patient​Immunization​.​Dose​UnitId | Lookup: UnitOf​Measure | 0​.1 |
| performer | ​Care​Performer | Object | 0​.M | The performer information for an immunization is represented as ​Care​Performer records that reference the Patient​Immunization record using their ​Care​Performer​.Parent​RecordId field​. |
| performer​.function | ​Care​Performer​.RoleId | Lookup: ​CodeSet​​Bundle | 0​.1 | N/A |
| performer​.actor | ​Care​Performer​.PersonId | Polymorphic Lookup: Account and Healthcare​Provider | 1​.1 | N/A |
| note | N/A | N/A | N/A | Not supported |
| reason​Code | Patient​Immunization​.Reason​CodeId | Lookup: ​CodeSet​Bundle | 0​.1 | N/A |
| reason​Reference | Patient​Immunization​.Health​Condition​Id | Lookup: Health​Condition | 0​.1 | The FHIR resourceimmunization​.reason​Reference is flattened into three separate zero-to-one references to Health​Condition, ​Care​Observation, and Diagnostic​Summary in the Salesforce implementation​. |
| Patient​Immunization​.​Care​Observation​Id | Lookup: ​Care​Observation | 0​.1 |
| Patient​Immunization​.Diagnostic​Summary​Id | Lookup: Diagnostic​Summary | 0​.1 |
| isSubpotent | Patient​Immunization​.IsSubpotent | Boolean | 0​.1 | N/A |
| subpotent​Reason | Patient​Immunization​.Subpotency​Reason​​CodeId | Lookup: ​CodeSet​Bundle | 0​.1 | While FHIR defines immunization​.subpotent​Reason as a zero-to-many resource, the Salesforce implementation of Patient​Immunization​.Subpotency​Reason​​CodeId is a zero-to-one reference​. |
| education | N/A | N/A | N/A | Not supported |
| program​Eligibility | N/A | N/A | N/A | Not supported |
| funding​Source | N/A | N/A | N/A | Not supported |
| reaction | Patient​Health​Reaction | Object | 0​.M | The reaction information for an immunization is represented as Patient​Health​Reaction records that reference the Patient​Immunization record using their Patient​Health​Reaction​.ParentId field​. |
| reaction​.date | Patient​Health​Reaction​.Reaction​Date​Time | Date​Time | 0​.1 | N/A |
| reaction​.detail | Patient​Health​Reaction​.Observation​Id | Lookup: ​Care​Observation | 0​.1 | N/A |
| reaction​.reported | Patient​Health​Reaction​.IsSelf​Reported | Boolean | 0​.1 | N/A |
| protocol​Applied | N/A | N/A | 0​.1 | While FHIR defines immunization​.protocol​Applied as a zero-to-many reference, the Salesforce implementation of its child resources is zero-to-one​. |
| protocol​Applied​.series | Patient​Immunization​.​Immunization​Recommendation | String | 0​.1 | N/A |
| protocol​Applied​.authority | Patient​Immunization​.Recommending​Authority | String | 0​.1 | While FHIR defines immunization​.protocol​Applied​.authority as a reference to organization, the Salesforce implementation of Patient​Immunization​.Recommending​Authority is a text field​. |
| protocol​Applied​.target​Disease | Patient​Immunization​.Target​Disease​​CodeId | Lookup: ​CodeSet​Bundle | 0​.1 | N/A |
| protocol​Applied​.dose​Number​Positive​Int | Patient​Immunization​.​Current​Dose | Double | 0​.1 | N/A |
| protocol​Applied​.dose​Number​String | N/A | N/A | N/A | The Salesforce implementation of immunization​.protocol​Applied​.dose​Number supports only integer values​. |
| protocol​Applied​.series​Doses​Positive​Int | Patient​Immunization​.Recommended​Doses | Double | 0​.1 | N/A |
| protocol​Applied​.series​Doses​String | N/A | N/A | N/A | The Salesforce implementation of immunization​.protocol​Applied​.series​Doses supports only integer values​. |

#### See Also

-   [PatientImmunization](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_PatientImmunization.htm "Represents information about a patient’s immunizations. This object is available in API version 51.0 and later.")

## Related Topics

- PatientImmunization (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_PatientImmunization.htm)
