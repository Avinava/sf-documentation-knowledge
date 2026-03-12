---
title: "Claims Processing Journey"
domain: insurance-developer-guide
topic: claims-processing-journey
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:39.653Z
estimatedTokens: 2824
keywords: [Claims, Processing, Journey, claim, formal, submitted, policyholder, receive, benefits, compensation, covered, loss, under, active, insurance]
---

# Claims Processing Journey

> A claim is a formal request submitted by a policyholder to receive benefits or
    compensation for a covered loss under an active insurance policy. A claim journey begins when
    the policyholder reports an incident, such as damage, injury, or another qualifying event that
    they believe is covered by their policy.

# Claims Processing Journey

A claim is a formal request submitted by a policyholder to receive benefits or compensation for a covered loss under an active insurance policy. A claim journey begins when the policyholder reports an incident, such as damage, injury, or another qualifying event that they believe is covered by their policy.

A valid claim requires an active insurance policy, a reported loss date, and an incident that falls within the policy's covered benefits. Once initiated, the claim process includes creating policy limits for the policyholder, verifying policy coverage, creating a claim record, collecting supporting claim items and participant details, routing the claim for adjuster review, assessing eligibility and damages, performing financial calculations, and determining the payout amount. The process concludes with issuing payment for the claim. As an exception, the process also concludes when the customer withdraws the claim or when the payment is voided because it was initiated based on inaccurate data.

This diagram outlines the sequence of operations that are involved in the claim process.

![A flow diagram representing the user journey for managing claims.](/docs/resources/img/en-us/260.0?doc_id=insurance%2Fimages%2Finsurance_claims_workflow.png&folder=insurance_developer_guide)

1.  **Create Policy Limits**—Generate a record of the trackable policy or coverage attributes, such as deductibles and limits, and store the record details in a separate entity. You can create policy limits by either:

    -   Making a POST request on the [Policy Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_generate_policy_limits.htm "HTML (New Window)") Connect API, or
    -   Using the [Create Policy Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_create_policy_limits.htm "HTML (New Window)") invocable action.

    **Result:** The system retrieves the financial rules for the policyholder’s specific policy, including deductible and coverage limits.
2.  **Verify Policy Coverage**—Validate whether the policy covers the type of claim being submitted by either:

    -   Making a POST request on the [Verify Policy Coverage](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_verify_policy_coverage.htm "HTML (New Window)") Connect API, or
    -   Using the [Verify Coverage](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_verify_policy_coverage.htm "HTML (New Window)") invocable action.

    Specify the policyId and coverageId during the API call. **Result:** The system returns coverage details indicating whether the claim is eligible under the policy’s coverage rules or not.
3.  **Create Claim**—Create a new claim for the covered incident, including related details, such as involved items and participants. Create a claim by either:

    -   Making a POST request on the [Claim](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_create_claim.htm "HTML (New Window)") Connect API, or
    -   Using the [Create Claim](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_create_claim.htm "HTML (New Window)") invocable action.

    **Result:**A unique claim ID is generated. The claim is submitted for review to a claims adjuster.
4.  **(Optional)Update Claim**—Update an existing claim, including its items and participant details by either:

    -   Making a PATCH request on the [Claim](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_claim.htm "HTML (New Window)") Connect API, or
    -   Using the [Update Claim](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_update_claim.htm "HTML (New Window)") invocable action.

    **Result:** The claim record is updated, and its status changes from New to Pending Review.
5.  **Invoke Claim Workflow Rules**—Route the claim for automated or manual review by triggering the underwriting API by either:

    -   Making a POST request on the [Insurance Invoke Underwriting Rule](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_underwriting_rules_invoke.htm "HTML (New Window)") Connect API, or
    -   Using the [Invoke Underwriting Rules](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_invoke_underwriting_rules.htm "HTML (New Window)") invocable action.

    **Result:** The system evaluates claim parameters, such as claim amount and type, and assigns it to a claims adjuster or workflow queue.
6.  **Open Claim Coverage**—Open a claim coverage record that tracks the coverage-level reserves, payments, and other financial transactions, and maps them to the corresponding insurance policy coverage, asset, or participant. Open a claim coverage by either:

    -   Making a POST request on the [Claim Coverage](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_create_claim_coverage.htm "HTML (New Window)") Connect API, or
    -   Using the [Open Claim Coverage](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_open_claim_coverage.htm "HTML (New Window)") invocable action.

    **Result:** The claim coverage record is created that’s used to store and track the associated payment details for the claim.
7.  **Calculate Adjustments**—Calculate how much the insurer must pay after applying adjustments to the policy’s deductible, copay, coinsurance, and out-of-pocket maximums (OOPM). Calculate the adjusted amount by either:

    -   Making a POST request on the [Calculate Adjustments](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_calculate_adjustments.htm "HTML (New Window)") Connect API, or
    -   Using the [Calculate Adjustments](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_calculate_adjustments.htm "HTML (New Window)") invocable action.

    **Result**: Financial details are computed and made available for payment generation.
8.  **Create Claim Coverage Payment Detail (CCPD)**—Create a claim coverage payment detail record capturing the amount requested by the claimant. The record is used to track payment requests and associated claim coverage details. Create a CCPD by either:

    -   Making a POST request on the [Create Claim Coverage Payment Detail](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_calculate_adjustments.htm "HTML (New Window)") Connect API, or
    -   Using the [Create Claim Coverage Payment Detail](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_calculate_adjustments.htm "HTML (New Window)") invocable action.

    **Result:** A claim coverage payment detail (CCPD) record is created for the calculated payout amount.

## Standard Claim Resolution Flow (Successful Payment)

When the reviewer approves the claim, use this sequence to process and complete payment.

-   **(Optional) Validate Payment Limits**—Before the payment is executed, the system must validate that the payout amount is within the policy’s applicable coverage limits, such as the collision limit or other coverage-specific maximums. This prevents overpayments and protects the insurer from financial leakage.

    Make a POST request to the [Process Policy Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_process_policy_limits.htm "HTML (New Window)") Connect API to ensure the payout is within policy limits.

-   **Execute Payment Transaction**Initiate the payment process by either:

    -   Making a POST request on the [Pay Claim Coverage Payment Detail](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_pay_claim_coverage_payment_detail.htm "HTML (New Window)") Connect API, or
    -   Using the [Pay Claim Coverage Payment Detail](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_pay_claim_coverage_payment_detail.htm) invocable action.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=insurance_developer_guide)

    #### Note

    When the Pay Claim Coverage Payment Detail Connect API is executed, it automatically invokes the Process Policy Limits Connect API to check the correctness of the payout amount.

    **Result:** The claim payment is processed successfully, and the policyholder receives a payment confirmation notification. The claim is marked Closed.

## Exception Flows

**Void Payment Record**—The reviewer approves the claim based on inaccurate data. Before payment processing, the admin must void the incorrect CCPD record that's already created. Invalidate the payment record by either:

-   Making a POST request on the [Delete Claim Coverage Payment Detail](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_delete_claim_coverage_payment_detail.htm "HTML (New Window)") Connect API, or
-   Using the [Delete Claim Coverage Payment Detail](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_delete_claim_coverage_payment_detail.htm "HTML (New Window)") invocable action.

The payment instruction is permanently deleted from the financial system, and the claim must be re-evaluated.

**Cancel Payment**—After the Pay CCPD record is created and payment is initiated, policyholder withdraws the claim before payout. Cancel the payment by either:

-   Making a POST request on the [Cancel Claim Coverage Payment Detail](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_delete_claim_coverage_payment_detail.htm "HTML (New Window)") Connect API, or
-   Using the [Cancel Claim Coverage Payment Detail](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_delete_claim_coverage_payment_detail.htm "HTML (New Window)") invocable action.

The payment instruction is formally canceled. The claim is logged as Canceled at Customer’s Request and closed with status Withdrawn. Any policy-related financial updates are rolled back, and the original policyholder information remains unchanged.
