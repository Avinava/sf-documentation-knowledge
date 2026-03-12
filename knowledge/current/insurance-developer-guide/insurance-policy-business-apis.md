---
title: "Insurance Policy Business APIs"
domain: insurance-developer-guide
topic: insurance-policy-business-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.950Z
estimatedTokens: 661
keywords: [Insurance, Policy, Business, APIs, Manage, transactions, issuance, endorsement, renewal, cancellation, Calculate, term, taxes, transaction, durations]
---

# Insurance Policy Business APIs

> Manage policy transactions such as issuance, endorsement, renewal, and cancellation.
    Calculate term taxes based on transaction types and policy durations.

# Insurance Policy Business APIs

Manage policy transactions such as issuance, endorsement, renewal, and cancellation. Calculate term taxes based on transaction types and policy durations.

This table lists the available Insurance Policy Administration resources.

| Resource | Description |
| --- | --- |
| /connect/insurance/policies/policyId/cancel (POST) | Cancel an insurance policy version. The API takes the effective date of cancellation from the input JSON. |
| /connect/insurance/policies/policyId/endorse (POST) | Endorse the latest version of the insurance policy based on the context ID and effective date. |
| /connect/insurance/policies/policyId?_qs=contextOnly=true (GET) | Get the ID of the context and the insurance policy details. This includes related assets, participants, and coverages. Use query parameters to request additional information. |
| /connect/insurance/policies (POST) | Use the context ID provided in the input JSON to generate a new insurance policy. |
| /connect/insurance/policies/policyId/renew (POST) | Use the context ID of an existing policy to renew a policy. Modify the renewal date and also add optional fields and additional information in the input JSON. |
| /connect/insurance/policies/policyId/out-of-sequence-endorsement (POST) | Create an out-of-sequence endorsement for an insurance policy. |
| /connect/insurance/policies/policyId/reinstate (POST) | Reinstate a previously canceled insurance policy. |
| /connect/insurance/policies/multi-root (POST) | Asynchronoulsy create a multi-root insurance policy along with its child policies. A multi-root policy includes multiple child policies of different product types under a single parent policy. |
| /connect/insurance/policies/multi-root/endorse (POST) | Asynchronously endorse a multi-root insurance policy along with its child policies. |
| /connect/insurance/policies/multi-root/renew (POST) | Asynchronously renew a multi-root insurance policy, create renewed records for the parent policy and the associated child policies. |

-   **[Resources](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/insurance_policy_business_apis_resources.htm)**
    Learn more about the available Insurance Policy API resources.
-   **[Requests](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/insurance_policy_business_apis_requests.htm)**
    Learn more about the available Insurance Policy requests.
-   **[Responses](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/insurance_policy_business_apis_responses.htm)**
    Learn more about the available response bodies of Insurance Policy APIs.

## Related Topics

- /connect/insurance/policies/policyId/cancel (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_cancel_policy.htm)
- /connect/insurance/policies/policyId/endorse (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_endorse_policy.htm)
- /connect/insurance/policies/policyId?_qs=contextOnly=true (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_get_policy.htm)
- /connect/insurance/policies (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_issue_policy.htm)
- /connect/insurance/policies/policyId/renew (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_brokerage_renew_policy.htm)
- /connect/insurance/policies/policyId/out-of-sequence-endorsement (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_out_of_sequence_endorsement.htm)
- /connect/insurance/policies/policyId/reinstate (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_policy_reinstate.htm)
- /connect/insurance/policies/multi-root (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_multi_root_issue_policy.htm)
- /connect/insurance/policies/multi-root/endorse (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_multi_root_endorsement_policy.htm)
- /connect/insurance/policies/multi-root/renew (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_policy_multi_root_renew.htm)
