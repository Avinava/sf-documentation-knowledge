---
title: "PASMetricData"
domain: health-cloud-object-reference
topic: pasmetricdata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:35.570Z
estimatedTokens: 255
keywords: [PASMetricData, FHIR, resource, maps, CareRequestExchangeInfo, V4.0, Utilization, Management, Model, Mapping]
---

# PASMetricData

> The PASMetricData FHIR resource maps to the
   CareRequestExchangeInfo object.

# PASMetricData

The PASMetricData FHIR resource maps to the CareRequestExchangeInfo object.

## FHIR V4.0 - Utilization Management Model Mapping

Here’s how the fields defined by FHIR for [PASMetricData](https://build.fhir.org/ig/HL7/davinci-pas/StructureDefinition-PASMetricData.html) map to the fields in Salesforce.

| PASMetricdata element | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| exchange | CareRequestExchangeInfo | Object | 1.M | N/A |
| exchange.type | CareRequestExchangeInfo.ExchangeType | Picklist | 1.1 | N/A |
| exchange.with | CareRequestExchangeInfo.ExchangeTargetType | Picklist | 0.1 | N/A |
| exchange.method | CareRequestExchangeInfo.ExchangeMode | Picklist | 1.1 | N/A |
| exchange.requestTime | CareRequestExchangeInfo.RequestDateTime | DateTime | 1.1 | N/A |
| exchange.responseTime | CareRequestExchangeInfo.ResponseDateTime | DateTime | 0.1 | N/A |
| exchange.httpResponse | CareRequestExchangeInfo.ResponseStatusCode | Integer | 0.1 | N/A |
