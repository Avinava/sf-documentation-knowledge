---
title: "CaseGatewayRequest"
domain: financial-services-cloud-object-reference
topic: casegatewayrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.675Z
estimatedTokens: 370
keywords: [CaseGatewayRequest, Holds, JSON, output, Financial, Services, Cloud, flows, serves, endpoint, integration, backend, systems, records, data]
---

# CaseGatewayRequest

> Holds the JSON output from the Financial Services Cloud flows and serves as an
      endpoint for integration with backend systems. It records the data interchange between the
      integrated systems.

# CaseGatewayRequest

Holds the JSON output from the Financial Services Cloud flows and serves as an endpoint for integration with backend systems. It records the data interchange between the integrated systems.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the associated case. |
| IntegrationPayload | TypetextareaPropertiesCreate, UpdateDescriptionThe data payload for the integration, in JSON format. Here’s an example.{   "FlowName": "",   "ServiceRequestNumber": "",   "ServiceRequestId": "",   "AccountId": "",   "FinancialAccountId": "" } |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionAn auto-generated string assigned to this record. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system this record was obtained from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this record in the source system. |
| StatusCode | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe status code of the transmission. |
| StatusMessage | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe status of the transmission. |

## Code Examples

```
{
  "FlowName": "",
  "ServiceRequestNumber": "",
  "ServiceRequestId": "",
  "AccountId": "",
  "FinancialAccountId": ""
}
```
