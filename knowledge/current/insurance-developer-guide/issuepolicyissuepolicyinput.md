---
title: "IssuePolicy(IssuePolicyInput)"
domain: insurance-developer-guide
topic: issuepolicyissuepolicyinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.991Z
estimatedTokens: 215
keywords: [IssuePolicy, IssuePolicyInput, context, provided, input, JSON, generate, new, insurance, policy, API, Version, Requires, Chatter]
---

# IssuePolicy(IssuePolicyInput)

> Use the context ID provided in the input JSON to generate a new insurance
    policy.

# IssuePolicy(IssuePolicyInput)

Use the context ID provided in the input JSON to generate a new insurance policy.

## API Version

63.0

## Requires Chatter

No

## Signature

public static ConnectApi.PolicyOutputRepresentation IssuePolicy(ConnectApi.IssuePolicyInputRepresentation IssuePolicyInput)

```

```

## Parameters

IssuePolicyInput

Type: [ConnectApi.IssuePolicyInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_issue_policy.htm "Input representation of the request to issue an insurance policy.")

Input representation of the request to issue an insurance policy.

## Return Value

Type: [ConnectApi.PolicyOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_policy_output.htm "Output representation of the policy details.")

## Code Examples

```
ConnectApi.InsurancePolicyAdminFamily, IssuePolicy, [ConnectApi.IssuePolicyInputRepresentation], ConnectApi.PolicyOutputRepresentation
```

## Related Topics

- ConnectApi.IssuePolicyInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_issue_policy.htm)
- ConnectApi.PolicyOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_policy_output.htm)
