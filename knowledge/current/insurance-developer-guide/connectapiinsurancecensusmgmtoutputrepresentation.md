---
title: "ConnectApi.InsuranceCensusMgmtOutputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancecensusmgmtoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.512Z
estimatedTokens: 134
keywords: [Output, representation, insurance, census, management, process]
---

# ConnectApi.InsuranceCensusMgmtOutputRepresentation

> Output representation for the insurance census management process.

# ConnectApi.InsuranceCensusMgmtOutputRepresentation

Output representation for the insurance census management process.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.InsuranceErrorRepresentation> | List of errors that occurred during processing. | 65.0 |
| isSuccess | Boolean | Indicates whether the operation is successful (true) or not (false). | 65.0 |
| memberIds | List<String> | IDs of the group census members that are successfully created or updated. | 65.0 |

## Related Topics

- ConnectApi.InsuranceErrorRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_error.htm)
