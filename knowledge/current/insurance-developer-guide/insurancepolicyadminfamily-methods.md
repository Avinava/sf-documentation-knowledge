---
title: "InsurancePolicyAdminFamily Methods"
domain: insurance-developer-guide
topic: insurancepolicyadminfamily-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:39.034Z
estimatedTokens: 817
keywords: [InsurancePolicyAdminFamily]
---

# InsurancePolicyAdminFamily Methods

> These methods are for InsurancePolicyAdminFamily. All methods are static.

# InsurancePolicyAdminFamily Methods

These methods are for InsurancePolicyAdminFamily. All methods are static.

-   **[CancelPolicy(CancelPolicyInput, policyId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsurancePolicyAdminFamily_CancelPolicy_1.htm)**
    Cancel an insurance policy version. The API takes the effective date of cancellation from the input JSON. You can advance the cancellation date within the policy term, but you can’t postpone the cancellation.
-   **[EndorsePolicy(EndorsePolicyInput, policyId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsurancePolicyAdminFamily_EndorsePolicy_1.htm)**
    Endorse the latest version of the insurance policy based on the context ID and effective date. You can also include other optional fields and additional details in the input JSON.
-   **[GetPolicy(policyId, connectDynamicParameters)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsurancePolicyAdminFamily_GetPolicy_1.htm)**
    Get details of an insurance policy. Pass additional context or metadata to customize the information that's fetched.
-   **[IssuePolicy(IssuePolicyInput)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsurancePolicyAdminFamily_IssuePolicy_1.htm)**
    Use the context ID provided in the input JSON to generate a new insurance policy.
-   **[MultiRootEndorsePolicy(EndorsePolicyInput, policyId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/pex_ConnectAPI_InsurancePolicyAdminFamily_MultiRootEndorsePolicy.htm)**
    Resource for the Insurance Multi Root Endorsement Policy Connect API POST Method.
-   **[MultiRootIssuePolicy(IssuePolicyInput)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsurancePolicyAdminFamily_MultiRootIssuePolicy.htm)**
    Asynchronously create a multi-root insurance policy along with its child policies.
-   **[MultiRootRenewPolicy(RenewPolicyInput, policyId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsurancePolicyAdminFamily_MultiRootRenewPolicy_1.htm)**
    Asynchronouly renew a multi-root insurance policy, create renewed records for the parent policy and the associated child policies. Use the priced context ID for the renewal process.
-   **[OutOfSequenceEndorsePolicy(OutOfSequenceEndorsePolicyInput, policyId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsurancePolicyAdminFamily_OutOfSequenceEndorsePolicy.htm)**
    Create an out-of-sequence endorsement for an insurance policy.
-   **[ReinstatePolicy(ReinstatePolicyInput, policyId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsurancePolicyAdminFamily_ReinstatePolicy_1.htm)**
    Reinstate a previously canceled insurance policy.
-   **[RenewPolicy(RenewPolicyInput, policyId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsurancePolicyAdminFamily_RenewPolicy_1.htm)**
    Use the context ID of an existing policy to renew a policy. Modify the renewal date, and add optional fields and additional information in the input JSON.

## Related Topics

- CancelPolicy(CancelPolicyInput, policyId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsurancePolicyAdminFamily_CancelPolicy_1.htm)
- EndorsePolicy(EndorsePolicyInput, policyId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsurancePolicyAdminFamily_EndorsePolicy_1.htm)
- GetPolicy(policyId, connectDynamicParameters) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsurancePolicyAdminFamily_GetPolicy_1.htm)
- IssuePolicy(IssuePolicyInput) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsurancePolicyAdminFamily_IssuePolicy_1.htm)
- MultiRootEndorsePolicy(EndorsePolicyInput, policyId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/pex_ConnectAPI_InsurancePolicyAdminFamily_MultiRootEndorsePolicy.htm)
- MultiRootIssuePolicy(IssuePolicyInput) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsurancePolicyAdminFamily_MultiRootIssuePolicy.htm)
- MultiRootRenewPolicy(RenewPolicyInput, policyId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsurancePolicyAdminFamily_MultiRootRenewPolicy_1.htm)
- OutOfSequenceEndorsePolicy(OutOfSequenceEndorsePolicyInput, policyId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsurancePolicyAdminFamily_OutOfSequenceEndorsePolicy.htm)
- ReinstatePolicy(ReinstatePolicyInput, policyId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsurancePolicyAdminFamily_ReinstatePolicy_1.htm)
- RenewPolicy(RenewPolicyInput, policyId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsurancePolicyAdminFamily_RenewPolicy_1.htm)
