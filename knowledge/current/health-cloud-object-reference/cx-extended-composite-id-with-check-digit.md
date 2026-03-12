---
title: "CX - Extended Composite ID With Check Digit"
domain: health-cloud-object-reference
topic: cx---extended-composite-id-with-check-digit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.644Z
estimatedTokens: 193
keywords: [Extended, Composite, Check, Digit, HL7, segment, maps, Identifier, Salesforce, V2.3, Clinical, Data, Model, Mapping]
---

# CX - Extended Composite ID With Check Digit

> The Extended Composite ID With Check Digit (CX) HL7 segment maps to the Identifier object in Salesforce.

# CX - Extended Composite ID With Check Digit

The Extended Composite ID With Check Digit (CX) HL7 segment maps to the Identifier object in Salesforce.

## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for CX map to fields in Salesforce standard objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

Only the segments supported by Salesforce are mentioned below.

| CX | Salesforce Field | Type | Notes |
| --- | --- | --- | --- |
| CX.1 - ID | Identifier.IdValue | String | N/A |
| CX.4 - Assigning Authority | Identifier.IssuingAuthority | Lookup: Account | N/A |
| CX.5 - Identifier Type Code | Identifier.IdType | Lookup: CodeSet, CodeSet​Bundle | N/A |
