---
title: "RXA - Pharmacy Administration Segment"
domain: life-sciences-dev-guide
topic: rxa---pharmacy-administration-segment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.656Z
estimatedTokens: 494
keywords: [RXA, Pharmacy, Administration, Segment, HL7, maps, primarily, PatientImmunization, Medication, objects, Salesforce, V2.3, Clinical, Data, Model]
---

# RXA - Pharmacy Administration Segment

> The Pharmacy Administration Segment (RXA) HL7 segment maps primarily to the PatientImmunization and Medication objects in Salesforce.

# RXA - Pharmacy Administration Segment

The Pharmacy Administration Segment (RXA) HL7 segment maps primarily to the PatientImmunization and Medication objects in Salesforce.

## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for RXA map to fields in Salesforce standard objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

Only the segments supported by Salesforce are mentioned below.

| RXA | Salesforce Field | Type | Notes |
| --- | --- | --- | --- |
| RXA.3 - Date/Time Start of Administration | Patient​Immunization​.Vaccination​Date | DateTime | N/A |
| RXA.5 - Administered Code | ​​Patient​Immunization​.Vaccine​CodeId​​​Medication​​.​Medication​CodeId | Lookup: CodeSetBundle | N/A |
| RXA.6 - Administered Amount | ​​​Patient​Immunization​.​Dose | Double | N/A |
| RXA.7 - Administered Unit | Patient​Immunization​.​Dose​UnitId | Lookup:UnitOfMeasure | N/A |
| RXA.8 - Administered Dosage Form | ​​​Medication​​.​Medication​FormId | Lookup: CodeSetBundle | N/A |
| RXA.10 - Administering Provider | ​​​Care​Performer | Object | The performer information for an immunization is represented as ​Care​Performer records that reference the Patient​Immunization record using their ​Care​Performer​.Parent​RecordId field​. |
| RXA.11 - Administered-at Location | ​​​Patient​Immunization​.FacilityId | Lookup: Healthcare Facility | N/A |
| RXA.15 - Substance Lot Number | ​​​Patient​Immunization​.Lot​Number | String | N/A |
| RXA.16 - Substance Expiration Date | ​​​Patient​Immunization​.Expiration​Date | DateTime | N/A |
| RXA.17 - Substance Manufacturer Name | ​​Patient​Immunization​.Manufacturer​​​Medication​​.​ManufacturerId | StringLookup: Account | N/A |
| RXA.18 - Substance Refusal Reason | ​​Patient​Immunization​.Status​Reason​​CodeId | Lookup: CodeSetBundle | N/A |
| RXA.20 - Completion Status | ​​Patient​Immunization​.Status | Picklist | N/A |
