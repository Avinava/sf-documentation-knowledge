---
title: "OBR - Observation Request Segment"
domain: health-cloud-object-reference
topic: obr---observation-request-segment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.651Z
estimatedTokens: 585
keywords: [OBR, Observation, Segment, HL7, maps, primarily, ClinicalServiceRequest, DiagnosticSummary, PatientMEdicalProcedure, objects, Salesforce, V2.3, Clinical, Data, Model]
---

# OBR - Observation Request Segment

> The Observation Request Segment (OBR) HL7 segment maps primarily to the ClinicalServiceRequest, DiagnosticSummary, and PatientMEdicalProcedure
    objects in Salesforce.

# OBR - Observation Request Segment

The Observation Request Segment (OBR) HL7 segment maps primarily to the ClinicalServiceRequest, DiagnosticSummary, and PatientMEdicalProcedure objects in Salesforce.

## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for OBR map to fields in Salesforce standard objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

Only the segments supported by Salesforce are mentioned below.

| OBR | Salesforce Field | Type | Notes |
| --- | --- | --- | --- |
| OBR.2 - Place Order Number | Identifier | Object | Place Order Number is created as an identifier record. This record will then reference the entity it belongs to using the ParentRecordId field. |
| OBR.3 - Fill Order Number | Identifier | Object | Fill Order Number is created as an identifier record. This record will then reference the entity it belongs to using the ParentRecordId field. |
| OBR.4 - Universal Service Id | ​​Clinical​Service​Request​.​Request​Code​Id​​​Patient​Medical​​Procedure​.​CodeId​​​Diagnostic​Summary​.​CodeId | Lookup: CodeSetBundle | N/A |
| OBR.5 - Order Status | ​​Clinical​Service​Request​.Status​​​Medication​​Request​.​Status | Picklists | N/A |
| OBR.7 - Observation Date/Time | Patient​Medical​​Procedure​.Start​Date | Double | N/A |
| OBR.16 - Ordering Provider | Clinical​Service​Request​.​Requester​Id | Lookup: HealthcareProvider, Account, Asset | N/A |
| OBR.22 - Results Rpt/Status Chng - Date/Time | ​​​Diagnostic​Summary​.​IssuedDateTime | DateTime | N/a |
| OBR.24 - Diagnostic Service Section ID | ​​Clinical​Service​Request​.CategoryId​​​Diagnostic​Summary​.​CategoryId | Lookup: CodeSetBundlePicklist | N/A |
| OBR.25 - Result Status | ​​Patient​Medical​​Procedure​.Status​​​Diagnostic​Summary​.​Status | Picklist | N/A |
| OBR.27 - Quantity/Timing | Clinical​Service​Request​.Quantity​Numerator | Double | N/A |
| ​​Clinical​Service​Request​.Quantity​Denominator | Double | N/A |
| Clinical​Service​Request​.Quantity​Numerator​Unit​Id | Lookup: UnitOfMeasure | N/A |
| OBR.31 - Reason For Study | ​​Patient​Medical​​Procedure​.ReasonCodeId | Lookup: CodeSetBundle | N/A |
| OBR-32 - Principal Result Interpreter | ​​​Diagnostic​Summary​.​InterpretedById | Lookup: CarePerformer | N/A |
