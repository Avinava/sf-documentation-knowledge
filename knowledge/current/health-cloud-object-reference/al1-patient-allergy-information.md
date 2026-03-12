---
title: "AL1 - Patient Allergy Information"
domain: health-cloud-object-reference
topic: al1---patient-allergy-information
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.638Z
estimatedTokens: 244
keywords: [AL1, Patient, Allergy, HL7, segment, maps, AllergyIntolerance, Salesforce, V2.3, Clinical, Data, Model, Mapping]
---

# AL1 - Patient Allergy Information

> The Patient Allergy Information (AL1) HL7 segment maps to the AllergyIntolerance object in Salesforce.

# AL1 - Patient Allergy Information

The Patient Allergy Information (AL1) HL7 segment maps to the AllergyIntolerance object in Salesforce.

## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for AL1 map to fields in Salesforce standard objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

Only the segments supported by Salesforce are mentioned below.

| AL1 | Salesforce Field | Type | Notes |
| --- | --- | --- | --- |
| AL1.2 - Allergy Type | AllergyIntolerance.Category | Picklist | N/A |
| AL1.3 - Allergy Code/Mnemonic/ Description | AllergyIntolerance.CodeId | Lookup: CodeSetBundle | N/A |
| AL1.4 - Allergy Severity | Patient​Health​Reaction​.Severity | Picklist | N/A |
| AL1.5 - Allergy Reaction | Patient​Health​Reaction​.Manifested​SymptomId | Lookup: CodeSetBundle | N/A |
| AL1.6 - Identification Date | onset​.onset​Date​Time | DateTime | N/A |
