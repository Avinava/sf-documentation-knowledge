---
title: "Codeable​Concept"
domain: life-sciences-dev-guide
topic: codeableconcept
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.230Z
estimatedTokens: 283
keywords: [Codeable​Concept, FHIR, resource, maps, CodeSet​BundleBundle, Salesforce, V4.0, Clinical, Data, Model, Mapping]
---

# Codeable​Concept

> The Codeable​Concept FHIR resource maps to the
      CodeSet​BundleBundle object in Salesforce.

# Codeable​Concept

The Codeable​Concept FHIR resource maps to the CodeSet​BundleBundle object in Salesforce.

## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for [Codeable​Concept](https://www.hl7.org/fhir/datatypes.html#CodeableConcept) map to the fields in Salesforce.

| Codeable Concept Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| coding | CodeSet​Bundle.CodeSet1Id, CodeSet​Bundle.CodeSet2Id, CodeSet​Bundle.CodeSet3Id,… and CodeSet​Bundle.CodeSet15Id | Lookup: CodeSet | 0.1 | FHIR defines Codeable​​Concept.coding as a zero-to-many reference. However, the Salesforce implementation has flattened this into fifteen zero-to-one references to CodeSet |
| text | CodeSet​Bundle.Name | String | 0.1 | N/A |

#### See Also

-   [CodeSetBundle](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_CodeSetBundle.htm "Represents a group of code sets across multiple systems and versions. All of these code sets refer to the same conceptual entity. This object is available in API version 50.0 and later.")

## Related Topics

- CodeSetBundle (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_CodeSetBundle.htm)
