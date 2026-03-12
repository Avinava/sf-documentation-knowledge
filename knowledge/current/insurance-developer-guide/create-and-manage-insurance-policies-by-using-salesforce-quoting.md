---
title: "Create and Manage Insurance Policies by Using Salesforce Quoting"
domain: insurance-developer-guide
topic: create-and-manage-insurance-policies-by-using-salesforce-quoting
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:41.021Z
estimatedTokens: 968
keywords: [Manage, Insurance, Policies, Salesforce, Quoting, how, effectively, Policy, Connect, APIs, along, associated, invocable, actions, build]
---

# Create and Manage Insurance Policies by Using Salesforce Quoting

> Learn how to effectively use the Insurance Policy and Quoting Connect APIs, along with
    the associated invocable actions, to build comprehensive user journeys by using Salesforce Flows
    and Omniscripts.

# Create and Manage Insurance Policies by Using Salesforce Quoting

Learn how to effectively use the Insurance Policy and Quoting Connect APIs, along with the associated invocable actions, to build comprehensive user journeys by using Salesforce Flows and Omniscripts.

The Salesforce Insurance Policy and Quoting APIs, and the related invocable actions provide a complete set of tools to manage the entire insurance policy lifecycle. These APIs support key policy administration processes, such as policy issuance, endorsement, renewal, and cancellation. By using these APIs and invocable actions, you can create user journeys for insurance representatives who use the Salesforce console, as well as the policyholders and partners who access the services through community portals.

-   **[Endorse Policy](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/endorse_policy_using_quote.htm)**
    Policy endorsement, also known as Mid-Term Adjustment (MTA), is the process of making modifications to an active insurance policy during its term. Common modifications include adding or removing coverage, or updating policy attributes, such as limits and deductibles. Endorsements usually affect the policy price and create a new policy version instead of updating the existing record. This new version includes the applied changes, along with a recalculated standard premium. It also contains a prorated term premium that’s calculated based on the effective date of the endorsement.
-   **[Issue Policy](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/issue_policy_using_quote.htm)**
    The policy issuance process begins after the policyholder accepts the quote provided by the insurance company.
-   **[Renew Policy](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/renew_policy_using_quote.htm)**
    Policy renewal is the process of extending insurance coverage for an additional policy term, typically as the current policy approaches its effective-to date. A key part of renewal is that a renewed policy creates a new policy record.
-   **[Create Out of Sequence Policy Endorsement](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/out_of_sequence_policy_endorsement_using_quote.htm)**
    Perform a backdated change on a policy in the past, current, or future policy term, even when another policy version with an effective date later than the endorsement date already exists. The impacted policy versions are canceled and replaced with new, repriced versions that include the change. The premium impact for each affected policy term is captured in an individual out-of-sequence endorsement transaction.
-   **[Issue Multi-Root Policy](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/issue_multi_root_policy_using_quote.htm)**
    The policy issuance process begins after the policyholder accepts the quote provided by the insurance company. This process creates a parent–child insurance policy structure in which a parent policy serves as a lifecycle container for one or more insured child policies.
-   **[Endorse Multi-Root Policy](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/endorse_multi_root_policy_using_quote.htm)**
    Modifies an active multi-root insurance policy by creating new versions of the parent policy and all child policies, regardless of which child policy is changed. The resulting policy versions include recalculated standard and prorated premiums based on the endorsement effective date.
-   **[Renew Multi-Root Policy](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/renew_multi_root_policy_using_quote.htm)**
    Renew a multi-root policy to create a new policy term for the parent policy and all associated child policies. The parent–child policy structure is preserved in the renewed term.

## Related Topics

- Endorse Policy (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/endorse_policy_using_quote.htm)
- Issue Policy (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/issue_policy_using_quote.htm)
- Renew Policy (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/renew_policy_using_quote.htm)
- Create Out of Sequence Policy Endorsement (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/out_of_sequence_policy_endorsement_using_quote.htm)
- Issue Multi-Root Policy (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/issue_multi_root_policy_using_quote.htm)
- Endorse Multi-Root Policy (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/endorse_multi_root_policy_using_quote.htm)
- Renew Multi-Root Policy (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/renew_multi_root_policy_using_quote.htm)
