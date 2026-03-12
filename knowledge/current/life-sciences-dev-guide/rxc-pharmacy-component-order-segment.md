---
title: "RXC - Pharmacy Component Order Segment"
domain: life-sciences-dev-guide
topic: rxc---pharmacy-component-order-segment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.659Z
estimatedTokens: 170
keywords: [RXC, Pharmacy, Component, Order, Segment, HL7, maps, Medication, MedicationRequestobjects, Salesforce, V2.3, Clinical, Data, Model, Mapping]
---

# RXC - Pharmacy Component Order Segment

> The Pharmacy Component Order Segment (RXC) HL7 segment maps to the Medication and MedicationRequestobjects in Salesforce.

# RXC - Pharmacy Component Order Segment

The Pharmacy Component Order Segment (RXC) HL7 segment maps to the Medication and MedicationRequestobjects in Salesforce.

## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for RXC map to fields in Salesforce standard objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

Only the segments supported by Salesforce are mentioned below.

| RXC | Salesforce Field | Type | Notes |
| --- | --- | --- | --- |
| RXC.2 - Component Code | Medication​.Medication​CodeIdMedicationRequest​.Medication​CodeId | Lookup: CodeSetBundle | N/A |
