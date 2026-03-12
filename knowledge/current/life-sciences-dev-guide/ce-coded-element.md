---
title: "CE - Coded Element"
domain: life-sciences-dev-guide
topic: ce---coded-element
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.607Z
estimatedTokens: 174
keywords: [Coded, Element, HL7, segment, maps, CodeSet, Salesforce, V2.3, Clinical, Data, Model, Mapping]
---

# CE - Coded Element

> The Coded Element (CE) HL7 segment maps to the CodeSet object in Salesforce.

# CE - Coded Element

The Coded Element (CE) HL7 segment maps to the CodeSet object in Salesforce.

## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for CE map to fields in Salesforce standard objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

Only the segments supported by Salesforce are mentioned below.

| CE | Salesforce Field | Type | Notes |
| --- | --- | --- | --- |
| CE.1 - Identifier | CodeSet.Code | String | N/A |
| CE.2 - Text | CodeSet.Name | String | N/A |
| CodeSet​Bundle.Name | String | N/A |
| CE.3 - Name of Coding System | CodeSet.Source​System | String | N/A |
