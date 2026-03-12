---
title: "InformationOrigin"
domain: life-sciences-dev-guide
topic: informationorigin
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.508Z
estimatedTokens: 204
keywords: [InformationOrigin, CRDMetricData, FHIR, resource, maps, AssessmentQuestionResponse, V4.0, Discovery, Framework, Data, Model, Mapping]
---

# InformationOrigin

> The CRDMetricData FHIR resource maps to the
   AssessmentQuestionResponse object.

# InformationOrigin

The CRDMetricData FHIR resource maps to the AssessmentQuestionResponse object.

## FHIR V4.0 - Discovery Framework Data Model Mapping

Here’s how the fields defined by FHIR for [InformationOrigin](https://build.fhir.org/ig/HL7/davinci-dtr/StructureDefinition-information-origin.html) map to the fields in Salesforce.

| informationorigin element | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| extension:source.value[x] | AssessmentQuestionResponse.OriginType | Picklist | 0.1 | N/A |
| extension:author | AssessmentQuestionResponse.ReviewerId | Reference: Account, Contact, Healthcare Provider, User | 0.1 | N/A |
| extension:author.extension:role | AssessmentQuestionResponse.ReviewerRoleId | Reference: Code Set, Code Set Bundle | 0.M | N/A |
