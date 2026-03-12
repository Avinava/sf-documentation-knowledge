---
title: "XPN - Extended Person Name"
domain: life-sciences-dev-guide
topic: xpn---extended-person-name
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.671Z
estimatedTokens: 341
keywords: [XPN, Extended, Person, HL7, segment, maps, PersonName, Salesforce, V2.3, Clinical, Data, Model, Mapping]
---

# XPN - Extended Person Name

> The Extended Person Name (XPN) HL7 segment maps to the PersonName object in Salesforce.

# XPN - Extended Person Name

The Extended Person Name (XPN) HL7 segment maps to the PersonName object in Salesforce.

## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for XPN map to fields in Salesforce standard objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

Only the segments supported by Salesforce are mentioned below.

| XPN | Salesforce Field | Type | Notes |
| --- | --- | --- | --- |
| XPN.1 - Family Name | PersonName.LastName | String | In cases where a person has a middle name, PersonName.LastName is supposed to store a combination of the middle name and the last name. |
| XPN.2 - Given Name | PersonName.FirstName | String | N/A |
| XPN.3 - Middle Initial or Name | N/A | N/A | This attribute isn’t implemented in PersonName. In cases where a person has a middle name, PersonName.LastName is supposed to store a combination of the middle name and the last name. |
| XPN.4 - Suffix | PersonName.Suffix | String | N/A |
| XPN.5 - Prefix | PersonName.Prefix | String | N/A |
| XPN.6 - Degree | N/A | N/A | This attribute isn’t implemented in PersonName. |
| XPN.7 - Name Type Code | PersonName.NameUsageType | Dynamic Picklist | While HL7 defines XPN.7 as a code, Salesforce implements PersonName.NameUsageType as a dynamic picklist. |
