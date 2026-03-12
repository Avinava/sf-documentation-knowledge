---
title: "Insurance Claims Developer Journey"
domain: insurance-developer-guide
topic: insurance-claims-developer-journey
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:40.797Z
estimatedTokens: 412
keywords: [Insurance, Claims, Developer, Journey, how, effectively, Connect, APIs, along, associated, invocable, actions, automate, end-to-end, processing]
---

# Insurance Claims Developer Journey

> Learn how to effectively use the Insurance Claims Connect APIs, along with the
    associated invocable actions, to automate end-to-end claims processing workflows, from initial
    coverage verification to final payment settlement or cancellation by using Salesforce Flows and
    Omniscripts.

# Insurance Claims Developer Journey

Learn how to effectively use the Insurance Claims Connect APIs, along with the associated invocable actions, to automate end-to-end claims processing workflows, from initial coverage verification to final payment settlement or cancellation by using Salesforce Flows and Omniscripts.

This guide walks you through the complete claims lifecycle, explaining:

-   The business scenario behind a claim.
-   The sequence of API calls across the Claims and Financial domains.
-   The data states and system transitions at each step.
-   The standard claim resolution flow for successful payments.
-   The exception paths for voiding or canceling payments.

| Key TERMS | DESCRIPTIONS |
| --- | --- |
| Coverage Validation | Confirms policy status, coverage type, and claim eligibility. |
| Claim Coverage Payment Detail (CCPD) | The payment record that’s created for each coverage-level payment request. |
| Claim Status | Represents lifecycle stages, such as Submitted, Pending Review, Approved, and Paid. |
| Deductible | The portion of loss the policyholder pays before insurer coverage applies. |
| Limit | The maximum payout that’s allowed for a policy coverage type. |

-   **[Claims Processing Journey](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/claims_workflow.htm)**
    A claim is a formal request submitted by a policyholder to receive benefits or compensation for a covered loss under an active insurance policy. A claim journey begins when the policyholder reports an incident, such as damage, injury, or another qualifying event that they believe is covered by their policy.

## Related Topics

- Claims Processing Journey (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/claims_workflow.htm)
