---
title: "FHIR Reference"
domain: life-sciences-dev-guide
topic: fhir-reference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.828Z
estimatedTokens: 357
keywords: [FHIR, output, representation]
---

# FHIR Reference

> The output representation of the FHIR reference
    values.

# FHIR Reference

The output representation of the FHIR reference values.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountContact​RelationId | String | The Salesforce ID of junction record. This record is created to connect a person’s person account record with the person account record of an associated person, such as a contact party or practitioner. | Small, 53.0 | 53.0 |
| contactContact​RelationId | String | The Salesforce ID of junction record. This record is created to connect a person’s person account record with the business account record of an associated organization, such as an issuer or a managing organization. | Small, 53.0 | 53.0 |
| message | String | A message with any errors that can encounter while processing the request. | Small, 53.0 | 53.0 |
| referenceId | String | The source system ID of the person or organization referenced. | Small, 53.0 | 53.0 |
| referenceResource | String | The FHIR resource type of the referenced entity, for instance practitioner or organization. | Small, 53.0 | 53.0 |
| relationship | String | The relationship between the patient and the healthcare provider or the managing organization, stored using Reciprocal Roles records. | Small, 53.0 | 53.0 |
| salesforceId | String | The Salesforce ID of the record that represents the referenced person or organization. | Small, 53.0 | 53.0 |
