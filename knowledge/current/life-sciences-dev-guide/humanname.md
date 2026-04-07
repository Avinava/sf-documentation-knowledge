---
title: "Human​Name"
domain: life-sciences-dev-guide
topic: humanname
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:08.565Z
estimatedTokens: 420
keywords: [Human​Name, FHIR, resource, maps, Person​Name, Salesforce​, V4​.0, Clinical, ​Data, Model, Mapping]
---

# Human​Name

> The Human​Name FHIR resource maps to the Person​Name object in Salesforce​.

# Human​Name

The Human​Name FHIR resource maps to the Person​Name object in Salesforce​.

## FHIR V4​.0 - Clinical ​Data Model Mapping

Here’s how the fields defined by FHIR for [Human​Name](https://www.hl7.org/fhir/datatypes.html#HumanName) map to the fields in Salesforce​.

| Human​Name Resource | Salesforce Field | ​Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| family | Person​Name​.Last​Name | String | 0​.1 | In cases where a person has a middle name, Person​Name​.Last​Name is supposed to store a combination of the middle name and the last name​. |
| Given | Person​Name​.First​Name | String | 0​.1 | While the cardinality defined by FHIR for Human​Name​.Given is zero-to-many, the Salesforce implementation in Person​Name​.First​Name is zero-to-one​. |
| text | Person​Name​.Full​Name | String | 0​.1 | N/A |
| use | Person​Name​.​Name​Usage​Type | ​Dynamic picklist | 0​.1 | While FHIR defines Human​Name​.use as a code, Salesforce implements Person​Name​.​Name​Usage​Type as a dynamic picklist​. |
| prefix | Person​Name​.Prefix | String | 0​.1 | While the cardinality defined by FHIR for Human​Name​.prefix is zero-to-many, the Salesforce implementation in Person​Name​.Prefix is zero-to-one​. |
| suffix | Person​Name​.Suffix | String | 0​.1 | While the cardinality defined by FHIR for Human​Name​.suffix is zero-to-many, the Salesforce implementation in Person​Name​.Suffix is zero-to-one​. |
| period | Person​Name​.Effective​Date | ​Date Time | 0​.1 | In Salesforce’s implementation, Human​Name​.period is split into two fields, Person​Name​.Effective​Date and Person​Name​.End​Date​. |
| Person​Name​.End​Date | ​Date Time | 0​.1 |
