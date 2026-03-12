---
title: "Flow for Insurance Claims"
domain: insurance-developer-guide
topic: flow-for-insurance-claims
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.864Z
estimatedTokens: 473
keywords: [Flow, Insurance, Claims, metadata, associated, application, users, series, pages, query, records, database, execute, logic, provide]
---

# Flow for Insurance Claims

> Represents the metadata associated with a flow. Use Flow to create an application that
    takes users through a series of pages to query and update records in the database. You can also
    execute logic and provide branching capability based on user input to build dynamic
    applications.

# Flow for Insurance Claims

Represents the metadata associated with a flow. Use Flow to create an application that takes users through a series of pages to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Insurance Claim exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid values only for Insurance Claims include:calculateAdjustments—Calculate the adjusted amount for a loss item and generate data for Insurance Policy Limit Tracking and Claim Coverage Payment Adjustment records.cancelClaimCvrPaymentDetail—Cancel payment for a claim coverage payment detail record.createClaim—Create a claim.createClaimCvrPaymentDetail—Create a claim coverage payment detail record.createPolicyLimits—Create insurance policy limit records for policy coverage and root attributes.deleteClaimCvrPaymentDetail—Remove unpaid claim coverage payment details by updating the status of the claim coverage payment detail record to Deleted.getClaim—Get the details of a claim.getInsPolicyCurrentStandings—Get the current standings of the insurance policy.openClaimCoverage—Open a claim coverage.payClaimCvrPaymentDetail—Initiate the payment for a claim coverage payment detail record, track the policy limit consumption for the payout, and update the status of the claim coverage payment detail record status to Paid upon successful completion.updateClaim—Update a claim.updateClaimCoverage—Update a claim coverage.verifyPolicyCoverage—Verify whether a policy coverage is applicable for a specified loss date under an insurance policy, so that only eligible coverages are processed for claims. |
