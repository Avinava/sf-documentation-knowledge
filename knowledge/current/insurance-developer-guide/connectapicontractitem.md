---
title: "ConnectApi.ContractItem"
domain: insurance-developer-guide
topic: connectapicontractitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.141Z
estimatedTokens: 138
keywords: [ConnectApi.ContractItem, Addition, added, contract, items]
---

# ConnectApi.ContractItem

> Addition fields to be added to the contract items.

# ConnectApi.ContractItem

Addition fields to be added to the contract items.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| entity | String | API name of the entity to add fields to, such as ContractGroupPlan. | Optional | 65.0 |
| fields | List<ConnectApi.InsuranceApexStringRepresentation> | List of key-value pairs that represent the fields and their values for the entity. | Optional | 65.0 |
| instanceKey | String | Unique instance key of the Quote Line Item. | Optional | 65.0 |

## Related Topics

- ConnectApi.InsuranceApexStringRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_apex_string_representatio.htm)
