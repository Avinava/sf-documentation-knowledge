---
title: "ConnectApi.InsuranceOutputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsuranceoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.589Z
estimatedTokens: 200
keywords: [Output, representation, bulk, renew, policy, cancel, requests]
---

# ConnectApi.InsuranceOutputRepresentation

> Output representation details of the bulk renew policy and bulk cancel policy
    requests.

# ConnectApi.InsuranceOutputRepresentation

Output representation details of the bulk renew policy and bulk cancel policy requests.

This class is abstract.

Superclass of [ConnectApi.InsurancePolicyBulkOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_policy_bulk_output.htm "Output representation details of the bulk cancel policy resource.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.ErrorResponseRepresentation> | List of the errors encountered during the processing of the API request. | 63.0 |
| message | String | Status message of the API execution. | 63.0 |
| status | String | Status of the API execution. Valid values are:SuccessFail | 63.0 |

## Related Topics

- ConnectApi.InsurancePolicyBulkOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_policy_bulk_output.htm)
