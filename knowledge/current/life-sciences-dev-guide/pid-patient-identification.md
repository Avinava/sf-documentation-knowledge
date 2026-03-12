---
title: "PID - Patient Identification"
domain: life-sciences-dev-guide
topic: pid---patient-identification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.638Z
estimatedTokens: 726
keywords: [PID, Patient, Identification, HL7, segment, maps, ContactPointPhone, Salesforce, V2.3, Clinical, Data, Model, Mapping]
---

# PID - Patient Identification

> The Patient Identification (PID) HL7 segment maps to the ContactPointPhone object in Salesforce.

# PID - Patient Identification

The Patient Identification (PID) HL7 segment maps to the ContactPointPhone object in Salesforce.

## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for PID map to fields in Salesforce standard objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

Only the Segments supported by Salesforce are mentioned below.

| PID | Salesforce Field | Type | Notes |
| --- | --- | --- | --- |
| PID.2 - Patient ID (External ID) | Identifier | Object | The identifier record for the patient is associated to the patient by referencing the patient’s account record using the ParentRecordId field in Identifier. |
| PID.3 - Patient ID (Internal ID) | Identifier | Object | The identifier record for the patient is associated to the patient by referencing the patient’s account record using the ParentRecordId field in Identifier. |
| PID.4 - Alternate Patient ID | Identifier | Object | The identifier record for the patient is associated to the patient by referencing the patient’s account record using the ParentRecordId field in Identifier. |
| PID.5 - Patient Name | PersonName | Object | The name information for a patient is represented as Person​Name records that reference the patient record using their Person​Name​.Parent​RecordId field​. |
| PID.7 - Date/Time of Birth | Contact.BirthDate | Date | Salesforce supports only the date of birth. The time of birth isn’t supported. |
| PID.8 - Sex | Contact.Gender | Picklist | N/A |
| PID.9 - Patient Alias | PersonName | Object | The name information for a patient is represented as Person​Name records that reference the patient record using their Person​Name​.Parent​RecordId field​. |
| PID.11 - Patient Address | ContactPointAddress | Object | The address information for a patient is represented as Contact​Point​Address records that reference the patient record using their Contact​Point​Address​.ParentId field​. |
| PID.13 - Home Phone | ContactPointPhone | Object | The telecom information for a patient is represented as Contact​Point​Phone records that reference the patient record using their Contact​Point​Phone​.ParentId field​. |
| PID.14 - Work Phone | ContactPointPhone | Object | The telecom information for a patient is represented as Contact​Point​Phone records that reference the patient record using their Contact​Point​Phone​.ParentId field​. |
| PID.15 - Primary Langauge | PersonLanguage | Object | The name information for a patient is represented as Person​Name records that reference the patient record using their Person​Language​.IndividualId field​. |
| PID.16 - Marital Status | Contact.MaritalStatus | Picklist | N/A |
| PID.25 - Multiple Birth Indicator | Contact​.Sequence​In​Multiple​Birth | Double | N/A |
| PID.29 - Patient Death Date and Time | Contact.Deceased​Date | DateTime | N/A |
