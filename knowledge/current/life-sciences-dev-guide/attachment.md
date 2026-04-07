---
title: "Attachment"
domain: life-sciences-dev-guide
topic: attachment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:58.021Z
estimatedTokens: 272
keywords: [Attachment, FHIR, resource, maps, Salesforce, V4.0, Clinical, Model, Mapping]
---

> The Attachment FHIR resource maps to the Attachment object in Salesforce.

# Attachment

The Attachment FHIR resource maps to the Attachment object in Salesforce.

## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for [Attachment](https://www.hl7.org/fhir/datatypes.html#Attachment) map to the fields in Salesforce.

| Attachment Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| content​Type | Attachment​.Content​Type | String | 0.1 | FHIR defines Attachment​.use as a code set. However, the Salesforce implementation of Attachment​.Content​Type is a string. |
| language | Diagnostic​Summary​.Attachment​Language | String | 0.1 | FHIR defines Attachment​.use as a code set. However, the Salesforce implementation of Diagnostic​Summary​.Attachment​Language is a string. |
| data | Attachment​.Body | Base64 | 0.1 | N/A |
| url | N/A | N/A | N/A | Not supported |
| size | Attachment​.Body​Length | Double | 0.1 | N/A |
| hash | N/A | N/A | N/A | Not supported |
| title | Attachment​.Name | String | 0.1 | N/A |
| Creation | Attachment​.Created​Date | Date​Time | 0.1 | N/A |
