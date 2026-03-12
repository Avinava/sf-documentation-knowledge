---
title: "ConnectApi.InsuranceContractCreationInputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancecontractcreationinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.257Z
estimatedTokens: 204
keywords: [Input, representation, creating, contract]
---

# ConnectApi.InsuranceContractCreationInputRepresentation

> Input representation for creating contract.

# ConnectApi.InsuranceContractCreationInputRepresentation

Input representation for creating contract.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | List<ConnectApi.ContractItem> | List of additional fields to add to contract items. | Optional | 65.0 |
| contractEndDate | String | End date of the contract. | Required | 65.0 |
| contractStartDate | String | Start date of the contract. | Required | 65.0 |
| contractTerm | Integer | Contract terms in months. | Optional | 65.0 |
| enrollmentEndDate | String | End date for plan enrollment. | Optional | 65.0 |
| enrollmentStartDate | String | Start date for plan enrollment. | Optional | 65.0 |
| quoteId | String | ID of the quote to create the contract from. | Required | 65.0 |

## Related Topics

- ConnectApi.ContractItem (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_contract_ite.htm)
