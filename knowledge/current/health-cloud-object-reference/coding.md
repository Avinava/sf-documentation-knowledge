---
title: "Coding"
domain: health-cloud-object-reference
topic: coding
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.218Z
estimatedTokens: 331
keywords: [Coding, FHIR, resource, maps, CodeSet, Salesforce, V4.0, Clinical, Data, Model, Mapping]
---

# Coding

> The Coding FHIR resource maps to the CodeSet object in Salesforce.

# Coding

The Coding FHIR resource maps to the CodeSet object in Salesforce.

## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for [Coding](https://www.hl7.org/fhir/datatypes.html#Coding) map to the fields in Salesforce.

| Coding Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| system | CodeSet​.Source​System | String | 0.1 | FHIR defines coding​.system as a URI. However, the Salesforce implementation of CodeSet​.Source​System is a string because Salesforce doesn’t support the URI data type. |
| version | CodeSet​.System​Version | String | 0.1 | N/A |
| code | CodeSet​.Code | String | 0.1 | FHIR defines coding​.code as a code data type. However, the Salesforce implementation of CodeSet​.Code is a string because Salesforce doesn’t support the Code data type. |
| display | CodeSet​.Name | String | 0.1 | N/A |
| user​Selected | CodeSet​.IsPrimary | Boolean | 0.1 | N/A |

#### See Also

-   [CodeSet](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_CodeSet.htm "Represents various industry defined codes in the context of their systems and versions of those systems. These codes are used in all sorts of digital records. This object is available in API version 50.0 and later.")

## Related Topics

- CodeSet (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_CodeSet.htm)
