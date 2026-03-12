---
title: "ORC - Common Order Segment"
domain: health-cloud-object-reference
topic: orc---common-order-segment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.661Z
estimatedTokens: 481
keywords: [ORC, Common, Order, Segment, HL7, maps, primarily, ClinicalServiceRequest, MedicationRequest, objects, Salesforce, V2.3, Clinical, Data, Model]
---

# ORC - Common Order Segment

> The Common Order Segment (ORC) HL7 segment maps primarily to the ClinicalServiceRequest and MedicationRequest objects in Salesforce.

# ORC - Common Order Segment

The Common Order Segment (ORC) HL7 segment maps primarily to the ClinicalServiceRequest and MedicationRequest objects in Salesforce.

## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for ORC map to fields in Salesforce standard objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

Only the segments supported by Salesforce are mentioned below.

| ORC | Salesforce Field | Type | Notes |
| --- | --- | --- | --- |
| ORC.1 - Order Control | ​​Clinical​Service​Request​.Status​​​Medication​​Request​.​Status | Picklists | N/A |
| ORC.2 - Place Order Number | Identifier | Object | Place Order Number is created as an identifier record. This record will then reference the entity it belongs to using the ParentRecordId field. |
| ORC.3 - Fill Order Number | Identifier | Object | Fill Order Number is created as an identifier record. This record will then reference the entity it belongs to using the ParentRecordId field. |
| ORC.4 - Placer Group Number | ​​Clinical​Service​Request​.Service​Request​Group​Identifier​Id | Lookup: Identifier | N/A |
| ORC.5 - Order Status | ​​Clinical​Service​Request​.Status​​​Medication​​Request​.​Status | Picklists | N/A |
| ORC.7 - Quantity/Timing | Clinical​Service​Request​.Quantity​Numerator | Double | N/A |
| ​​Clinical​Service​Request​.Quantity​Denominator | Double | N/A |
| Clinical​Service​Request​.Quantity​Numerator​Unit​Id | Lookup: UnitOfMeasure | N/A |
| ORC.9 - Date and Time of Transaction | Clinical​Service​Request​.Date​Signed | DateTime | N/A |
| ORC.12 - Ordering Provider | Clinical​Service​Request​.​Requester​Id | Lookup: HealthcareProvider, Account, Asset | N/A |
| ORC.12 - Order Control Code Reason | ​​Clinical​Service​Request​.ReasonCodeId​​​Medication​​Request​.​StatusReasonCodeId | Lookup: CodeSetBundle | N/a |
