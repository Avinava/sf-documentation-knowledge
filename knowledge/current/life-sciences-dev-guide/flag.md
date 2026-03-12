---
title: "​Flag"
domain: life-sciences-dev-guide
topic: flag
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.277Z
estimatedTokens: 644
keywords: [​Flag, ​FHI​R, resource, maps, Clinical​Alert, Salesforce​, V4​.0, Clinical, ​Data, ​Model, ​Mapping]
---

# ​Flag

> The ​Flag ​FHI​R resource maps to the Clinical​Alert object in Salesforce​.

# ​Flag

The ​Flag ​FHI​R resource maps to the Clinical​Alert object in Salesforce​.

## ​FHI​R V4​.0 - Clinical ​Data ​Model ​Mapping

Here’s how the fields defined by ​FHI​R for [​Flag](https://www.hl7.org/fhir/flag.html#Flag) map to the fields in Salesforce​.

| ​Flag ​Resource | Salesforce ​Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | Identifier | Object | 0​.​M | The identifier information for a clinical alert is represented as Identifier records that reference the clinical alert record using their Identifier​.​Parent​RecordId field​. |
| status | Clinical​Alert​.Status | ​Picklist | 0​.1 | While ​FHI​R defines ​Flag​.status as a code, the Salesforce implementation of Clinical​Alert​.Status is picklist​. |
| category | Clinical​Alert​.Categories | ​Multi-Select ​Picklist | 0​.​M | While ​FHI​R defines ​Flag​.category as a code set bundle, the Salesforce implementation of Clinical​Alert​.Categories is a multi-select picklist​. |
| code | Clinical​Alert​.CodeId | Lookup: CodeSet​Bundle | 1​.1 | While ​FHI​R defines ​Flag​.code as a code set bundle only, the Salesforce implementation flattens it into Clinical​Alert​.Code and Clinical​Alert​.Code​Description​. The latter is meant to display non-coded information to users as required​. |
| Clinical​Alert​.Code​Description | String | 0​.1 |
| subject | Clinical​Alert​.Subject | ​Polymorphic Lookup: Location, ​Account Healthcare​Provider, ​Medication, and ​Patient​Medical​Procedure | 1​.1 | The Salesforce implementation of flag​.subject doesn’t support plan definitions​. |
| period | Clinical​Alert​.Start​Date | ​Date Time | 0​.1 | In Salesforce’s implementation, ​Flag​.period is split into two fields, Clinical​Alert​.Start​Date and Clinical​Alert​.​End​Date​. |
| Clinical​Alert​.​End​Date | ​Date Time | 0​.1 |
| encounter | Clinical​Alert​.​Related​EncounterId | Lookup: Clinical​Encounter | 0​.1 | N/​A |
| author | Clinical​Alert​.​Raised​ById | ​Polymorphic Lookup: Healthcare​Provider, Care​Registered​Device, and Healthcare​Practitioner​Facility | 0​.1 | The Salesforce implementation of flag​.author doesn’t support patients, and organizations​. |

#### See Also

-   [ClinicalAlert](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalAlert.htm "Represents a warning or notification of significance related to different healthcare entities. The subject of the alert may be a patient, a location, a provider, a procedure, or even a medication. This object is available in API version 51.0 and later.")

## Related Topics

- ClinicalAlert (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_ClinicalAlert.htm)
