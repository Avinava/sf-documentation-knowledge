---
title: "Insurance Policy Details (GET)"
domain: insurance-developer-guide
topic: insurance-policy-details-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.132Z
estimatedTokens: 218
keywords: [Insurance, Policy, context, includes, assets, participants, coverages, query, additional]
---

# Insurance Policy Details (GET)

> Get the context ID and the insurance policy details. This includes related assets,
    participants, and coverages. Use query parameters to request additional information.

# Insurance Policy Details (GET)

Get the context ID and the insurance policy details. This includes related assets, participants, and coverages. Use query parameters to request additional information.

Resource

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

Resource example

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

Available version

63.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| connectDynamicParameters | Map<String,String> | Map of connect dynamic parameters. | Optional | 63.0 |

Response body for GET

[Get Policy](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_get_policy_output.htm "Output representation of policy details.")

## Code Examples

```
/connect/insurance/policies/policyId?_qs=contextOnly=true
```

```
/connect/insurance/policies/policyId?_qs=expand[attributes]=true
```

```
/connect/insurance/policies/policyId?_qs=expand[attributes]=true&expand[surcharges]=true
```

```
/connect/insurance/policies/policyId?_qs=expand[additionalFields][fieldSet][$in]={fieldSetIds}
```

```
/connect/insurance/policies/policyId?_qs=expand[additionalFields][fieldSet][$eq]={fieldSetId}
```

## Related Topics

- Get Policy (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_get_policy_output.htm)
