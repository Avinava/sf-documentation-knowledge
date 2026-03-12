---
title: "GetPolicy(policyId, connectDynamicParameters)"
domain: insurance-developer-guide
topic: getpolicypolicyid-connectdynamicparameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.988Z
estimatedTokens: 367
keywords: [GetPolicy, policyId, connectDynamicParameters, insurance, policy, Pass, additional, context, metadata, customize, that's, fetched, API, Version, Requires]
---

# GetPolicy(policyId, connectDynamicParameters)

> Get details of an insurance policy. Pass additional context or metadata to customize the
    information that's fetched.

# GetPolicy(policyId, connectDynamicParameters)

Get details of an insurance policy. Pass additional context or metadata to customize the information that's fetched.

## API Version

63.0

## Requires Chatter

No

## Signature

public static ConnectApi.GetPolicyOutputRepresentation GetPolicy(String policyId, Map<String,String\> connectDynamicParameters)

```

```

## Parameters

policyId

Type: String

ID of the policy for which the details are to be fetched.

connectDynamicParameters

Type: Map<String,String>

Map of connect dynamic parameters to fetch the policy details.

## Return Value

Type: [ConnectApi.GetPolicyOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_get_policy_output.htm "Output representation of the policy details.")

## Usage

Use this API to fetch the insurance policy details. This includes related assets, participants, and coverages. Use query parameters to request additional information.

-   When the contextOnly parameter is true, the API returns a context ID along with the insurance policy details.
-   When you send a request with additional fields with the operator $in, it returns a list of field-set IDs. When the operator is $eq, the request returns a single field-set ID.

For examples, see [Get Policy](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_get_policy_output.htm).

## Code Examples

```apex
ConnectApi.InsurancePolicyAdminFamily, GetPolicy, [String, Map<String,String>], ConnectApi.GetPolicyOutputRepresentation
```

## Related Topics

- ConnectApi.GetPolicyOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_get_policy_output.htm)
