---
title: "Annotation"
domain: health-cloud-object-reference
topic: annotation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.398Z
estimatedTokens: 175
keywords: [Annotation, FHIR, resource, maps, AuthorNote​, Salesforce, V4.0, Clinical, Data, Model, Mapping]
---

# Annotation

> The Annotation FHIR resource maps to the AuthorNote​ object in Salesforce.

# Annotation

The Annotation FHIR resource maps to the AuthorNote​ object in Salesforce.

## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for [Annotation](https://www.hl7.org/fhir/datatypes.html#Annotation) map to the fields in Salesforce.

| Annotation Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| author​.author​Reference | Author​Note​.AuthorId | Lookup: Account, Contact, Healthcare​Provider | 0.1 | N/A |
| author​.author​String | Author​Note​.Author​Name | String | 0.1 | N/A |
| time | Author​Note​.Authored​DateTime | DateTime | 0.1 | N/A |
| text | Activity​Timing​.Note​Text | Double | 0.1 | N/A |
