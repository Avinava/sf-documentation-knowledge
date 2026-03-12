---
title: "Limit Standing Option Input"
domain: insurance-developer-guide
topic: limit-standing-option-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.924Z
estimatedTokens: 386
keywords: [Limit, Standing, Option, Input, representation, options]
---

# Limit Standing Option Input

> Input representation for limit standing options.

# Limit Standing Option Input

Input representation for limit standing options.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| shouldInclude​PendingAmount | Boolean | Indicates whether to include the pending amount in the calculated output (true) or not (false).The default value is false. | Optional | 65.0 |
| viewOption | String | Filter values for coverages.When a claimId is specified in the request, valid values are:showAllPolicyCoverages—Retrieves all policy limits for the root insurance policy and all associated policy coverages. This provides a comprehensive view of all coverage terms.showOpenClaimPolicyCoverages—(Default) Retrieves the policy limits that are associated with the open claim coverages. Additionally, the claim view includes all policy-level and claim-level limits, ensuring visibility into limits that impact the claim, even if no open coverage exists.When a policyId is specified in the request, valid values are:showAllPolicyCoverages—(Default)Retrieves all policy limit standings, regardless of whether the claim has open coverages. This option provides a full view of the policy's limits without restriction to active claims.showPolicyLevelLimitsOnly—Retrieves policy limit standings at the policy and policy coverage level, but excludes limits that are associated with policy participants or policy assets. Use this option when only high-level policy limits are needed without participant or asset specific details. | Optional | 65.0 |
