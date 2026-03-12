---
title: "RXE - Pharmacy Encoded Order Segment"
domain: life-sciences-dev-guide
topic: rxe---pharmacy-encoded-order-segment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.663Z
estimatedTokens: 178
keywords: [RXE, Pharmacy, Encoded, Order, Segment, HL7, maps, primarily, Medication, Salesforce, V2.3, Clinical, Data, Model, Mapping]
---

# RXE - Pharmacy Encoded Order Segment

> The Pharmacy Encoded Order Segment (RXE) HL7 segment maps primarily to the Medication object in Salesforce.

# RXE - Pharmacy Encoded Order Segment

The Pharmacy Encoded Order Segment (RXE) HL7 segment maps primarily to the Medication object in Salesforce.

## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for RXE map to fields in Salesforce standard objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

Only the segments supported by Salesforce are mentioned below.

| RXE | Salesforce Field | Type | Notes |
| --- | --- | --- | --- |
| RXE.2 - Give Code | Medication​.Medication​CodeId | Lookup: CodeSetBundle | N/A |
| RXE.2 - Give Dosage Form | Medication​.Medication​FormId | Lookup: CodeSetBundle | N/A |
