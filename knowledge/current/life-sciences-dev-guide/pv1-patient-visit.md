---
title: "PV1 - Patient Visit"
domain: life-sciences-dev-guide
topic: pv1---patient-visit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.646Z
estimatedTokens: 976
keywords: [PV1, Patient, Visit, HL7, segment, maps, Encounter, among, objects, Salesforce, V2.3, Clinical, Data, Model, Mapping]
---

# PV1 - Patient Visit

> The Patient Visit (PV1) HL7 segment maps to the Encounter object, among other objects in Salesforce.

# PV1 - Patient Visit

The Patient Visit (PV1) HL7 segment maps to the Encounter object, among other objects in Salesforce.

## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for PV1 map to fields in Salesforce standard objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

Only the Segments supported by Salesforce are mentioned below.

| PV1 | Salesforce Field | Type | Notes |
| --- | --- | --- | --- |
| PV1.2 - Patient Class | ​​Clinical​Encounter​​.​Category | Picklist | N/A |
| PV1.3 - Assigned Patient Location | ​​Clinical​Encounter​​Facility | Object | The facility information for a patient visit is represented as ​​Clinical​Encounter​​Facility records that reference the encounter record using their ​​Clinical​Encounter​​Facility​.​​Clinical​Encounter​Id field​. |
| PV1.4 - Admission Type | ​​Clinical​Encounter​​.​TypeId | Lookup: ​CodeSet​Bundle | N/A |
| PV1.5 - Preadmit Number | Clinical​Encounter​​.​Pre​Admission​Identifier​Id | Lookup: ​Identifier | N/A |
| PV1.7 - Attending Doctor | Clinical​Encounter​​Provider | Object | The participant information for an encounter is represented as ​​Clinical​Encounter​​Provider records that reference the encounter record using their ​​Clinical​Encounter​​Provider​.​​Clinical​Encounter​Id field​. |
| PV1.8 - Referring Doctor | Clinical​Encounter​​Provider | Object | The participant information for an encounter is represented as ​​Clinical​Encounter​​Provider records that reference the encounter record using their ​​Clinical​Encounter​​Provider​.​​Clinical​Encounter​Id field​. |
| PV1.9 - Consulting Doctor | Clinical​Encounter​​Provider | Object | The participant information for an encounter is represented as ​​Clinical​Encounter​​Provider records that reference the encounter record using their ​​Clinical​Encounter​​Provider​.​​Clinical​Encounter​Id field​. |
| PV1.10 - Hospital Service | Clinical​Encounter​​.Service​Type | Picklist | N/A |
| PV1.13 - Readmission Indicator | Clinical​Encounter​​.​Readmission​CodeId | Lookup: CodeSetBundle | N/A |
| PV1.14 - Admit Source | ​​Clinical​Encounter​​.​Admission​Source | Picklist | N/A |
| PV1.16 - VIP Indicator | ​​Clinical​Encounter​​.Special​Courtesy | Picklist | N/A |
| PV1.17 - Admitting Doctor | Clinical​Encounter​​Provider | Object | The participant information for an encounter is represented as ​​Clinical​Encounter​​Provider records that reference the encounter record using their ​​Clinical​Encounter​​Provider​.​​Clinical​Encounter​Id field​. |
| PV1.18 - Patient Type | ​​Clinical​Encounter​​.​TypeId | Lookup: ​CodeSet​Bundle | N/A |
| PV1.19 - Visit Identifier | ​​Clinical​Encounter​Identifier | Object | The identifier information for an encounter is represented as ​​Clinical​Encounter​Identifier records that reference the encounter record using their ​​Clinical​Encounter​Identifier​.​Parent​RecordId field​. |
| PV1.22 - Courtesy Code | ​​Clinical​Encounter​​.Special​Courtesy | Picklist | N/A |
| PV1.36 - Discharge Disposition | Clinical​Encounter​​.​Discharge​Disposition​Id | Lookup: ​CodeSet​Bundle | N/A |
| PV1.37 - Discharged to Location | ​​Clinical​Encounter​​.​Destination​FacilityId | Lookup: HealthcareFacility | N/A |
| ​​Clinical​Encounter​​.​Destination​Organization​Id | Lookup: Account | N/A |
| PV1.38 - Diet Type | ​​​​Clinical​Encounter​​.​Diet​Preference | Picklist | N/A |
| PV1.44 - Admit Date/Time | ​​Clinical​Encounter​​.Start​Date | DateTime | N/A |
| PV1.45 - Discharge Date/Time | ​​Clinical​Encounter​​.End​Date | DateTime | N/A |
| PV1.50 - Alternate Visit ID | ​​Clinical​Encounter​Identifier | Object | The identifier information for an encounter is represented as ​​Clinical​Encounter​Identifier records that reference the encounter record using their ​​Clinical​Encounter​Identifier​.​Parent​RecordId field​. |
