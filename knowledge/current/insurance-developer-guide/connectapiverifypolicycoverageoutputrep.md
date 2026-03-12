---
title: "ConnectApi.VerifyPolicyCoverageOutputRep"
domain: insurance-developer-guide
topic: connectapiverifypolicycoverageoutputrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.640Z
estimatedTokens: 117
keywords: [Invocable, action, output, representation, verify, policy, coverage]
---

# ConnectApi.VerifyPolicyCoverageOutputRep

> Invocable action output representation for verify policy coverage.

# ConnectApi.VerifyPolicyCoverageOutputRep

Invocable action output representation for verify policy coverage.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.ErrorDetailOutputRep> | List of errors that are encountered during the API operation. | 65.0 |
| isSuccess | Boolean | Indicates whether the policy coverage is valid for the date on which the incident occurred (true) or not (false). | 65.0 |

## Related Topics

- ConnectApi.ErrorDetailOutputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_error_detail.htm)
