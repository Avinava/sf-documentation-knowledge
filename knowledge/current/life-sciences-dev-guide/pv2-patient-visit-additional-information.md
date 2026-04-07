---
title: "PV2 - Patient Visit - Additional Information"
domain: life-sciences-dev-guide
topic: pv2---patient-visit---additional-information
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:58.526Z
estimatedTokens: 252
keywords: [PV2, Patient, Visit, Additional, HL7, segment, maps, primarily, ClinicalEncounter, Salesforce, V2.3, Clinical, Model, Mapping]
---

> The Patient Visit - Additional Information (PV2) HL7 segment maps primarily to the
      ClinicalEncounter object in Salesforce.

# PV2 - Patient Visit - Additional Information

The Patient Visit - Additional Information (PV2) HL7 segment maps primarily to the ClinicalEncounter object in Salesforce.

## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for PV2 map to fields in Salesforce standard objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

Only the segments supported by Salesforce are mentioned below.

| PV2 | Salesforce Field | Type | Notes |
| --- | --- | --- | --- |
| PV2.3 - Admit Reason | ​​Clinical​Encounter​​Reason​.​Reason​CodeId | Lookup: CodeSetBundle | N/A |
| PV2.7 - Visit User Code | ClinicalAlert.CodeId | Lookup: CodeSetBundle | N/A |
| PV2.11 - Actual Length of Inpatient Stay | ​​Clinical​Encounter​​.​Duration | Double | N/A |
| Clinical​Encounter​​.​Duration​UnitId | Lookup: UnitOfMeasure | N/A |
| PV2.25 - Patient Status Code | Clinical​Encounter​​.​PriorityId | Lookup: CodeSetBundle | N/A |
