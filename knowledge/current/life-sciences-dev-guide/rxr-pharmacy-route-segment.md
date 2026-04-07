---
title: "RXR - Pharmacy Route Segment"
domain: life-sciences-dev-guide
topic: rxr---pharmacy-route-segment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:04:09.022Z
estimatedTokens: 226
keywords: [RXR, Pharmacy, Route, Segment, HL7, maps, primarily, PatientImmunization, PatientMedicationDosage, objects, Salesforce, V2.3, Clinical, Data, Model]
---

# RXR - Pharmacy Route Segment

> The Pharmacy Route Segment (RXR) HL7 segment maps primarily to the PatientImmunization and PatientMedicationDosage objects in Salesforce.

# RXR - Pharmacy Route Segment

The Pharmacy Route Segment (RXR) HL7 segment maps primarily to the PatientImmunization and PatientMedicationDosage objects in Salesforce.

## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for RXR map to fields in Salesforce standard objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

Only the segments supported by Salesforce are mentioned below.

| RXR | Salesforce Field | Type | Notes |
| --- | --- | --- | --- |
| RXR.1 - Route | ​​Patient​Immunization​.RouteIdPatient​​​Medication​Dosage​​.​RouteId | Lookup: CodeSetBundle | N/A |
| RXR.2 - Site | ​​Patient​Immunization​.SiteIdPatient​​​Medication​Dosage​​.​SiteId | Lookup: CodeSetBundle | N/A |
| RXR.4 - Administration Method | Patient​​​Medication​Dosage​​.​MethodId | Lookup: CodeSetBundle | N/A |
