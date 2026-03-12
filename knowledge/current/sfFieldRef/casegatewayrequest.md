---
title: "CaseGatewayRequest"
domain: sfFieldRef
topic: casegatewayrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.640Z
estimatedTokens: 336
keywords: [CaseGatewayRequest, Holds, JSON, output, Financial, Services, Cloud, flows, serves, endpoint, integration, backend, systems, records, data]
---

# CaseGatewayRequest

> Holds the JSON output from the Financial Services Cloud flows and serves as an
      endpoint for integration with backend systems. It records the data interchange between the
      integrated systems.

# CaseGatewayRequest

Holds the JSON output from the Financial Services Cloud flows and serves as an endpoint for integration with backend systems. It records the data interchange between the integrated systems.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CaseGatewayRequest in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CaseId | Case ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Case Gateway Request ID | id |  | 18 |  |  |
| IntegrationPayload | Integration Payload | textarea |  | 32000 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| StatusCode | Status Code | string |  | 100 |  |  |
| StatusMessage | Status Message | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
