---
title: "EpisodeOfCare"
domain: life-sciences-dev-guide
topic: episodeofcare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:58.339Z
estimatedTokens: 573
keywords: [EpisodeOfCare, FHIR, resource, maps, Care​Episode​, Care​EpisodeDetail​, Salesforce, V4.0, Clinical, Model, Mapping]
---

> The episodeOfCare FHIR resource maps to the
      Care​Episode​ and Care​EpisodeDetail​ objects in Salesforce.

# EpisodeOfCare

The episodeOfCare FHIR resource maps to the Care​Episode​ and Care​EpisodeDetail​ objects in Salesforce.

## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for [episodeOfCare](http://hl7.org/fhir/R4/episodeofcare.html#resource) map to the fields in Salesforce.

| Goal Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | Identifier | Object | 0​.M | The identifier information for an episode of care is represented as Identifier records that reference the Care​Episode record using their Identifier​.Parent​RecordId field​. |
| status | Care​Episode​.Status | Picklist | 1.1 | While FHIR defines this field as a code value, the Salesforce implementation is a picklist. |
| status​History | N/A | N/A | N/A | Not supported |
| type | Care​Episode​.Type | Multi-Select Picklist | 0.M | While FHIR defines this field as a codeable concept, the Salesforce implementation is a multi-select picklist. |
| diagnosis​.condition | Care​Episode​Detail​.Detail​Type | Picklist | 0.M | Select Diagnosis as the picklist value in detailType. |
| Care​Episode​Detail​.Detail​RecordId | Lookup: Health​Condition |
| diagnosis​.role | Care​Episode​Detail​.RoleCodeId | Lookup: CodeSet​Bundle, Code​Set | 0.1 | N/A |
| diagnosis​.rank | Care​Episode​Detail​.Rank | Number | 0.1 | N/A |
| patient | Care​Episode​.PatientId | Master-Detail: Account | 1.1 | N/A |
| managing​Organization | Care​Episode​.Responsible​Organization​Id | Lookup: Account, Healthcare​Provider | 0.1 | N/A |
| period | Care​Episode​.Start​Date​Time | DateTime | 0.1 | The Salesforce implementation implements the Period data type as a pair of DateTime fields. |
| Care​Episode​.End​End​Date​Time | DateTime | 0.1 |
| referral​Request | Care​Episode​Detail​.Detail​Type | Picklist | 0.1 | Select Referral Request as the picklist value in detailType. |
| Care​Episode​Detail​.Detail​RecordId | Lookup: Clinical​Service​Request | Select Clinical​Service​Request as the domain set for Reference​RecordId. |
| care​Manager | Care​Episode​.Care​Coordinator​Id | Lookup: Healthcare​Provider, Healthcare​Practitioner​Facility | 0.1 | N/A |
| team | N/A | N/A | N/A | Not supported |
| account | N/A | N/A | N/A | Not supported |
