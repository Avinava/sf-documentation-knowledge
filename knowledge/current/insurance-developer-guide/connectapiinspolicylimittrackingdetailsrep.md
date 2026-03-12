---
title: "ConnectApi.InsPolicyLimitTrackingDetailsRep"
domain: insurance-developer-guide
topic: connectapiinspolicylimittrackingdetailsrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.489Z
estimatedTokens: 328
keywords: [Output, representation, insurance, policy, limit, tracking]
---

# ConnectApi.InsPolicyLimitTrackingDetailsRep

> Output representation for the insurance policy limit tracking details.

# ConnectApi.InsPolicyLimitTrackingDetailsRep

Output representation for the insurance policy limit tracking details.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| benefitName | String | Name of the benefit that's associated with the policy limit tracking. | 65.0 |
| calcInitial​Amount | Double | Calculated currency amount that's used as the base value for tracking policy attribute consumption. | 65.0 |
| calcInitialValue | Integer | Count that's used as the base for tracking policy attribute consumption. | 65.0 |
| category | String | Category of the associated attribute. | 65.0 |
| policyLimitId | String | ID of the insurance policy limit record. | 65.0 |
| postedAmount | Double | Amount that's requested by the claimant when submitting the loss. | 65.0 |
| postedValue | Integer | Count that's populated when submitting the loss. | 65.0 |
| remainingAmount | Double | Remaining amount to carry forward for the next loss processing. | 65.0 |
| remainingValue | Integer | Remaining value to carry forward for the next loss processing. | 65.0 |
| scope | String | Scope for tracking the associated attribute. | 65.0 |
| totalUsedAmount | Double | Total amount that's used to date. | 65.0 |
| totalUsedValue | Integer | Total value that's used to date. | 65.0 |
