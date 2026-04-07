---
title: "ConnectApi.GetPolicyOutputRepresentation"
domain: insurance-developer-guide
topic: connectapigetpolicyoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:50.301Z
estimatedTokens: 108
keywords: [policy]
---

> Output representation of the policy details.

# ConnectApi.GetPolicyOutputRepresentation

Output representation of the policy details.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| contextId | String | ID of the context. | 63.0 |
| error | ConnectApi.ErrorOutputRepresentation | List of errors encountered during the processing of the API request. | 63.0 |
| insurancePolicy | Map<String, Object> | Details of insurance policy. | 63.0 |

## Related Topics

- ConnectApi.ErrorOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_error_output.htm)
