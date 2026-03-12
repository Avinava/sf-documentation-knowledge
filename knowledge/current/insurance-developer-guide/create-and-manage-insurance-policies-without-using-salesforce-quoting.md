---
title: "Create and Manage Insurance Policies Without Using Salesforce Quoting"
domain: insurance-developer-guide
topic: create-and-manage-insurance-policies-without-using-salesforce-quoting
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:41.024Z
estimatedTokens: 813
keywords: [Manage, Insurance, Policies, Salesforce, Quoting, how, Policy, APIs, invocable, actions, lifecycle, isn't, third-party, system, handles]
---

# Create and Manage Insurance Policies Without Using Salesforce Quoting

> Learn how to use the Insurance Policy APIs and invocable actions to manage the policy
    lifecycle when Salesforce quoting isn't used, or when a third-party system handles the quoting
    process.

# Create and Manage Insurance Policies Without Using Salesforce Quoting

Learn how to use the Insurance Policy APIs and invocable actions to manage the policy lifecycle when Salesforce quoting isn't used, or when a third-party system handles the quoting process.

-   **[Endorse Policy](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/endorse_policy_without_using_quote.htm)**
    Policy endorsement, also known as a Mid-Term Adjustment (MTA), is a process where you change an active insurance policy. The endorsement process changes the policy version and the premiums. This user journey shows you how to endorse a policy when Salesforce's quoting capabilities aren't used.
-   **[Issue Policy](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/issue_policy_without_using_quote.htm)**
    Issue a new insurance policy when quoting is managed outside Salesforce, by a third-party system. This process results in the creation of a policy record in Salesforce, formally establishing coverage for the customer.
-   **[Renew Policy](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/renew_policy_without_using_quote.htm)**
    Policy renewal extends insurance coverage for an additional term, creating a new policy record. This journey details renewing a policy without using Salesforce quoting, relying on the Rating API for pricing the new term.
-   **[Create Out of Sequence Policy Endorsement](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/out_of_sequence_policy_endorsement_without_using_quote.htm)**
    Perform a backdated change on a policy in the past, current, or future policy term, even when another policy version with an effective date later than the endorsement date already exists. The impacted policy versions are canceled and replaced with new, repriced versions that include the change. The premium impact for each affected policy term is captured in an individual out-of-sequence endorsement transaction.
-   **[Issue Multi-Root Policy](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/issue_multi_root_policy_without_using_quote.htm)**
    Creates a new multi-root insurance policy when quoting is managed outside Salesforce by a third-party system. This process uses the Rating API to generate a priced context and create a parent–child policy structure without persisting a quote record.
-   **[Endorse Multi-Root Policy](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/endorse_multi_root_policy_without_using_quote.htm)**
    Perform a mid-term adjustment on an active multi-root policy when pricing is handled through the Rating API instead of a Salesforce Quote. This process bypasses the creation of a Quote record while ensuring accurate pricing and versioned updates to the parent and child policies.
-   **[Renew Multi-Root Policy](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/renew_multi_root_policy_without_using_quote.htm)**
    Creates a new policy term for a multi-root policy when pricing is handled through the Rating API instead of a quote. This process bypasses the creation of a quote record while generating new parent and child policy records for the renewed term.

## Related Topics

- Endorse Policy (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/endorse_policy_without_using_quote.htm)
- Issue Policy (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/issue_policy_without_using_quote.htm)
- Renew Policy (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/renew_policy_without_using_quote.htm)
- Create Out of Sequence Policy Endorsement (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/out_of_sequence_policy_endorsement_without_using_quote.htm)
- Issue Multi-Root Policy (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/issue_multi_root_policy_without_using_quote.htm)
- Endorse Multi-Root Policy (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/endorse_multi_root_policy_without_using_quote.htm)
- Renew Multi-Root Policy (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/renew_multi_root_policy_without_using_quote.htm)
