---
title: "Encounter"
domain: health-cloud-object-reference
topic: encounter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:55.937Z
estimatedTokens: 2950
keywords: [Encounter, F​HI​R, resource, maps, ​​Clinical​Encounter​, ​​Clinical​Encounter​​Diagnosis, ​​Clinical​Encounter​​Facility, ​​Clinical​Encounter​Identifier, ​​Clinical​Encounter​​Provider, ​​Clinical​Encounter​​Reason, ​​Clinical​Encounter​Svc​Request, objects, Salesforce​, V4​.0, ​Clinical]
---

# Encounter

> The Encounter F​HI​R resource maps to the ​​Clinical​Encounter​, ​​Clinical​Encounter​​Diagnosis, ​​Clinical​Encounter​​Facility, ​​Clinical​Encounter​Identifier, ​​Clinical​Encounter​​Provider, ​​Clinical​Encounter​​Reason, and ​​Clinical​Encounter​Svc​Request objects in Salesforce​.

# Encounter

The Encounter F​HI​R resource maps to the ​​Clinical​Encounter​, ​​Clinical​Encounter​​Diagnosis, ​​Clinical​Encounter​​Facility, ​​Clinical​Encounter​Identifier, ​​Clinical​Encounter​​Provider, ​​Clinical​Encounter​​Reason, and ​​Clinical​Encounter​Svc​Request objects in Salesforce​.

## F​HI​R V4​.0 - ​Clinical ​Data ​Model ​Mapping

​Here’s how the fields defined by F​HI​R for [Encounter](https://www.hl7.org/fhir/encounter.html) map to the fields in Salesforce​.

| Encounter ​Resource | Salesforce Field | ​Type | Salesforce ​Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | ​​Clinical​Encounter​Identifier | Object | 0​.​M | The identifier information for an encounter is represented as ​​Clinical​Encounter​Identifier records that reference the encounter record using their ​​Clinical​Encounter​Identifier​.​Parent​RecordId field​. |
| status | ​Clinical​Encounter​.Status | ​Picklist | 1​.1 | While F​HI​R defines encounter​.status as a code, its Salesforce implementation is a picklist​. |
| status​History | N/​A | N/​A | N/​A | Not supported |
| class | ​​Clinical​Encounter​​.​Category | ​Picklist | 1​.1 | While F​HI​R defines encounter​.class as a code set, its Salesforce implementation is a picklist​. |
| class​History | N/​A | N/​A | N/​A | Not supported |
| type | ​​Clinical​Encounter​​.​TypeId | Lookup: ​CodeSet​Bundle | 0​.1 | While F​HI​R defines encounter​.type as a zero-to-many resource, the Salesforce implementation is zero-to-one​. |
| service​Type | ​​Clinical​Encounter​​.Service​Type | ​Picklist | 0​.1 | While F​HI​R defines encounter​.service​Type as a code set bundle, its Salesforce implementation is a picklist​. |
| priority | ​​Clinical​Encounter​​.​PriorityId | Lookup: ​CodeSet​Bundle | 0​.1 | N/​A |
| subject | ​​Clinical​Encounter​​.​PatientId | Lookup: ​Account | 1​.1 | While F​HI​R defines encounter​.subject as a zero-to-one resource, the Salesforce implementation is one-to-one​. |
| episodeOf​Care | N/​A | N/​A | N/​A | Not supported |
| basedOn | ​​Clinical​Encounter​Svc​Request | Object | 0​.​M | The service request information that an encounter is based on is represented as ​​Clinical​Encounter​Svc​Request records that reference the encounter record using their ​​Clinical​Encounter​Svc​Request​.​​Clinical​Encounter​Id field​. |
| participant | ​​Clinical​Encounter​​Provider | Object | 0​.​M | The participant information for an encounter is represented as ​​Clinical​Encounter​​Provider records that reference the encounter record using their ​​Clinical​Encounter​​Provider​.​​Clinical​Encounter​Id field​. |
| participant​.type | ​​Clinical​Encounter​​Provider​.​Practitioner​TypeId | Lookup: ​CodeSet​Bundle | 0​.1 | While F​HI​R defines encounter​.participant​.type as a zero-to-many resource, the Salesforce implementation is zero-to-one​. |
| participant​.period | ​​Clinical​Encounter​​Provider​.Start​Date | ​Date​Time | 0​.1 | Because Salesforce doesn’t have a native period data type, the encounter​.participant​.period resource is flattened into a set of start date and end date fields, and set of duration and duration unit fields​. |
| ​​Clinical​Encounter​​Provider​.End​Date | ​Date​Time | 0​.1 |
| ​​Clinical​Encounter​​Provider​.​Duration | ​Double | 0​.1 |
| ​​Clinical​Encounter​​Provider​.​Duration​UnitId | Lookup: ​UnitOf​Measure | 0​.1 |
| participant​.individual | ​​Clinical​Encounter​​Provider​.​Practitioner​Id | Lookup: ​Healthcare​Provider | 0​.1 | N/​A |
| appointment | N/​A | N/​A | N/​A | Not supported |
| period | ​​Clinical​Encounter​​.Start​Date | ​Date​Time | 0​.1 | Because Salesforce doesn’t have a native period data type, the encounter​.period resource is flattened into a set of start date and end date fields​. |
| ​​Clinical​Encounter​​.End​Date | ​Date​Time | 0​.1 |
| length | ​​Clinical​Encounter​​.​Duration | ​Double | 0​.1 | Because Salesforce doesn’t have a native duration data type, the encounter​.length resource is flattened into a set of duration and duration unit fields​. |
| ​​Clinical​Encounter​​.​Duration​UnitId | Lookup: ​UnitOf​Measure | 0​.1 |
| reason​Code | ​​Clinical​Encounter​​Reason​.​Reason​CodeId | Lookup: ​CodeSet​Bundle | 0​.​M | The reason for an encounter is represented as ​​Clinical​Encounter​​Reason records that reference the encounter record using their ​​Clinical​Encounter​​Reason​.​​Clinical​Encounter​Id field​. |
| reason​Reference | ​​Clinical​Encounter​​Reason​.​Reason​Reference​Id | ​Polymorphic Lookup: ​Health​Condition, ​Care​Observation, and ​Patient​Medical​Procedure | 0​.​M | The reason for an encounter is represented as ​​Clinical​Encounter​​Reason records that reference the encounter record using their ​​Clinical​Encounter​​Reason​.​​Clinical​Encounter​Id field​. |
| diagnosis | ​​Clinical​Encounter​​Diagnosis | Object | 0​.​M | The diagnosis information for an encounter is represented as ​​Clinical​Encounter​​Diagnosis records that reference the encounter record using their ​​Clinical​Encounter​​Diagnosis​.​​Clinical​Encounter​Id field​. |
| diagnosis​.condition | ​​Clinical​Encounter​​Diagnosis​.​DiagnosisId | ​Polymorphic Lookup: ​Health​​Condition, and ​Patient​​Medical​Procedure | 0​.1 | N/​A |
| diagnosis​.use | ​​Clinical​Encounter​​Diagnosis​.Usage​TypeId | Lookup: ​CodeSet​Bundle | 0​.1 | N/​A |
| diagnosis​.rank | ​​Clinical​Encounter​​Diagnosis​.​Diagnosis​Rank | ​Double | 0​.1 | N/​A |
| account | N/​A | N/​A | N/​A | Not supported |
| hospitalization​.pre​Admission​Identifier​. | ​​Clinical​Encounter​​.​Pre​Admission​Identifier​Id | Lookup: ​​Clinical​Encounter​Identifier | 0​.1 | N/​A |
| hospitalization​.origin | ​​Clinical​Encounter​​.​Previous​FacilityId | Lookup: ​Healthcare​Facility | 0​.1 | While F​HI​R defines encounter​.hospitalization​.origin as a single resource, the Salesforce implementation flattens it into two fields​. |
| ​​Clinical​Encounter​​.​Previous​Organization​Id | Lookup: ​Account | 0​.1 |
| hospitalization​.admitSource | ​​Clinical​Encounter​​.​Admission​Source | ​Picklist | 0​.1 | While F​HI​R defines encounter​.hospitalization​.admitSource as a code set bundle, its Salesforce implementation is a picklist​. |
| hospitalization​.re​Admission | ​​Clinical​Encounter​​.​Readmission​CodeId | Lookup: ​CodeSet​Bundle | 0​.1 | N/​A |
| hospitalization​.diet​Preference | ​​Clinical​Encounter​​.​Diet​Preference | ​Multi-Select ​Picklist | 0​.​M | While F​HI​R defines encounter​.hospitalization​.diet​Preference as a code set bundle, its Salesforce implementation is a picklist​. |
| hospitalization​.special​Courtesy | ​​Clinical​Encounter​​.Special​Courtesy | ​Picklist | 0​.1 | While F​HI​R defines encounter​.hospitalization​.special​Courtesy as a zero-to-many code set bundle, its Salesforce implementation is a zero-to-one picklist​. |
| hospitalization​.special​Arrangement | N/​A | N/​A | N/​A | Not supported |
| hospitalization​.destination | ​​Clinical​Encounter​​.​Destination​FacilityId | Lookup: ​Healthcare​Facility | 0​.1 | While F​HI​R defines encounter​.hospitalization​.destination as a single resource, the Salesforce implementation flattens it into two fields​. |
| ​​Clinical​Encounter​​.​Destination​Organization​Id | Lookup: ​Account | 0​.1 |
| hospitalization​.discharge​Disposition | ​​Clinical​Encounter​​.​Discharge​Disposition​Id | Lookup: ​CodeSet​Bundle | 0​.1 | N/​A |
| location | ​​Clinical​Encounter​​Facility | Object | 0​.​M | The facility information for an encounter is represented as ​​Clinical​Encounter​​Facility records that reference the encounter record using their ​​Clinical​Encounter​​Facility​.​​Clinical​Encounter​Id field​. |
| location​.location | ​​Clinical​Encounter​​Facility​.​FacilityId | Lookup: ​Healthcare​Facility | 0​.1 | N/​A |
| location​.status | ​​Clinical​Encounter​​Facility​.Status | ​Picklist | 0​.1 | While F​HI​R defines encounter​.location​.status as a code, its Salesforce implementation is a picklist​. |
| location​.physical​Type | ​​Clinical​Encounter​​Facility​.​Facility​TypeId | Lookup: ​CodeSet​Bundle | 0​.1 | N/​A |
| location​.period | ​​Clinical​Encounter​​Facility​.Start​Date | ​Date​Time | 0​.1 | Because Salesforce doesn’t have a native period data type, the encounter​.location​.period resource is flattened into a set of start date and end date fields, and set of duration and duration unit fields​. |
| ​​Clinical​Encounter​​Facility​.End​Date | ​Date​Time | 0​.1 |
| ​​Clinical​Encounter​​Facility​.​Duration | ​Double | 0​.1 |
| ​​Clinical​Encounter​​Facility​.​Duration​UnitId | Lookup: ​UnitOf​Measure | 0​.1 |
| service​Provider | ​​Clinical​Encounter​​.​FacilityId | Lookup: ​Healthcare​Facility | 0​.1 | While F​HI​R defines encounter​.service​Provider as referencing an organization, the Salesforce implementation references a facility​. |
| partOf | ​​Clinical​Encounter​​.​Related​​Clinical​Encounter​Id | Lookup: ​​Clinical​Encounter​ | 0​.1 | N/​A |

## Sample Record Diagram

Here's a diagram that shows an example of how this resource is represented in Salesforce.

![A diagram that represents an encounter related to the patient Charles Green in Salesforce.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2FMappings_FHIR%2Fimages%2Fsrd_hc_encounter.png&folder=health_cloud_object_reference)

#### See Also

-   [ClinicalEncounter](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalEncounter.htm "Represents a healthcare related encounter of a patient with a care provider. This is a broad object that covers multiple phases of a patient’s healthcare service experience, all the way from pre-admission to stay to discharge, and everything in between. This object is available in API version 51.0 and later.")

-   [ClinicalEncounterDiagnosis](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalEncounterDiagnosis.htm "Represents a diagnosis related to a clinical encounter. This object is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.")

-   [ClinicalEncounterFacility](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalEncounterFacility.htm "Represents information about the different facilities involved in an encounter, the time spent at those facilies, and other relevant details. This is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.")

-   [ClinicalEncounterIdentifier](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalEncounterIdentifier.htm "Represents the identifier information for a clinical encounter. This object is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.")

-   [ClinicalEncounterProvider](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalEncounterProvider.htm "Represents the providers involved in an encounter. This object is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.")

-   [ClinicalEncounterReason](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalEncounterReason.htm "Represents the reasons for why the encounter was required. This object is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.")

-   [ClinicalEncounterSvcRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalEncounterSvcRequest.htm "Represents the service requests related to a clinical encounter. This object is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.")

## Related Topics

- ClinicalEncounter (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalEncounter.htm)
- ClinicalEncounterDiagnosis (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalEncounterDiagnosis.htm)
- ClinicalEncounterFacility (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalEncounterFacility.htm)
- ClinicalEncounterIdentifier (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalEncounterIdentifier.htm)
- ClinicalEncounterProvider (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalEncounterProvider.htm)
- ClinicalEncounterReason (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalEncounterReason.htm)
- ClinicalEncounterSvcRequest (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalEncounterSvcRequest.htm)
