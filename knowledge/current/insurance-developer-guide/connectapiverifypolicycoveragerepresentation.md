---
title: "ConnectApi.VerifyPolicyCoverageRepresentation"
domain: insurance-developer-guide
topic: connectapiverifypolicycoveragerepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.637Z
estimatedTokens: 122
keywords: [Output, representation, policy, coverage's, applicability, loss, date]
---

# ConnectApi.VerifyPolicyCoverageRepresentation

> Output representation of a policy coverage's applicability for a specified loss date.

# ConnectApi.VerifyPolicyCoverageRepresentation

Output representation of a policy coverage's applicability for a specified loss date.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.ErrorDetail> | Errors that are encountered during the processing of the API request. | 65.0 |
| isSuccess | Boolean | Indicates whether the policy coverage is valid for the date on which the incident occurred (true) or not (false). | 65.0 |

## Related Topics

- ConnectApi.ErrorDetail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_error_detail.htm)
