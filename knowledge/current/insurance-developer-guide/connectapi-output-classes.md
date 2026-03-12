---
title: "ConnectApi Output Classes"
domain: insurance-developer-guide
topic: connectapi-output-classes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.806Z
estimatedTokens: 492
keywords: [ConnectApi, Output, Classes, instances]
---

# ConnectApi Output Classes

> Most ConnectApi methods return instances of
      ConnectApi output classes.

# ConnectApi Output Classes

Most ConnectApi methods return instances of ConnectApi output classes.

All properties are read-only, except for instances of output classes created within test code.

All output classes are concrete unless marked abstract in this documentation.

All concrete output classes have no-argument constructors that you can invoke only from test code. See [Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm).

Insurance Claim includes these Apex output classes.

-   **[ConnectApi.CalculateAdjustmentsRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_calculate_adjustments.htm)**
    Output representation of the details for calculating the adjustments for the claim loss item.
-   **[ConnectApi.CancelClaimCoveragePaymentDetailRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_cancel_claim_coverage_payment_detail.htm)**
    Output representation for the details of the cancel claim coverage payment detail record.
-   **[ConnectApi.ClaimAttributeOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_attribute_output.htm)**
    Output representation for a claim attribute.
-   **[ConnectApi.ClaimCovPaymentAdjDetailsRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_cov_payment_adj_details.htm)**
    Output representation for the claim coverage payment adjustment details.
-   **[ConnectApi.ClaimCoverageRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_coverage.htm)**
    Output representation for a claim coverage operation.
-   **[ConnectApi.ClaimDetailOutputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_detail_output_re.htm)**
    Invocable action output representation for claim details.
-   **[ConnectApi.ClaimItemOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_item_output.htm)**
    Output representation for a claim item.
-   **[ConnectApi.ClaimItemOutputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_item_output_re.htm)**
    Invocable action output representation for claim item.
-   **[ConnectApi.ClaimItemOutputs](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_item_outputs.htm)**
    Invocable action output representation for a wrapper that contains a list of claim items.
-   **[ConnectApi.ClaimOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_output.htm)**
    Output representation for a retrieved claim.
-   **[ConnectApi.ClaimParticipantOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_participant_output.htm)**
    Output representation for a claim participant.
-   **[ConnectApi.ClaimParticipantOutputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_participant_output_re.htm)**
    Invocable action output representation for claim participant.
-   **[ConnectApi.ClaimParticipantOutputs](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_participant_outputs.htm)**
    Invocable action output representation for a wrapper that contains a list of claim participants.
-   **[ConnectApi.ClaimRelatedObjectOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_related_object_output.htm)**
    Output representation for a related object.
-   **[ConnectApi.CreateClaimCoveragePaymentDetailRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_create_claim_coverage_payment_detail.htm)**
    Output representation for the details of the create claim coverage payment detail record.
-   **[ConnectApi.CreateClaimOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_create_claim_output.htm)**
    Output representation for a create or update claim operation.
-   **[ConnectApi.CreatePolicyLimitsRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_create_policy_limits.htm)**
    Output representation of the created insurance policy limit records.
-   **[ConnectApi.DeleteClaimCoveragePaymentDetailRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_delete_claim_coverage_payment_detail.htm)**
    Output representation for the Delete Claim Coverage Payment Detail resource.
-   **[ConnectApi.EditClaimCoveragePaymentDetailRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_edit_claim_coverage_payment_detail.htm)**
    Output representation for editing claim coverage payment detail.
-   **[ConnectApi.ErrorDetail](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_error_detail.htm)**
    Output representation of an error.
-   **[ConnectApi.GetClaimOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_get_claim_output.htm)**
    Output representation for the Get Claim action.
-   **[ConnectApi.GetInsPlcyCurrStndOutputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_get_ins_plcy_curr_stnd_output_re.htm)**
    An Apex ConnectApi.GetInsPlcyCurrStndOutputRep record that contains the details of the consumed and available limits that are retrieved for the policy or claim.
-   **[ConnectApi.IPLStandingCalcAmounts](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_i_p_l_standing_calc_amount.htm)**
    Invocable action output representation for insurance policy limit standing calculation amounts.
-   **[ConnectApi.IPLStandingCalcCoverageInfo](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_i_p_l_standing_calc_coverage_inf.htm)**
    Output representation for insurance policy limit standing calculation.
-   **[ConnectApi.IPLStandingCalcLimitAttributes](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_i_p_l_standing_calc_limit_attribute.htm)**
    Invocable action output representation for limit attributes.
-   **[ConnectApi.IPLStandingCalcOutputNode](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_i_p_l_standing_calc_output_node.htm)**
    Node representation for the Insurance Policy Term Current Standing invocable action node.
-   **[ConnectApi.IPLStandingCalcValues](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_i_p_l_standing_calc_value.htm)**
    Invocable Action Output representation for IPL Standing Calculation Values
-   **[ConnectApi.IPLStandingMappedScopes](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_i_p_l_standing_mapped_scope.htm)**
    Invocable action output representation for insurance policy limit standing mapped scopes.
-   **[ConnectApi.InsPolicyLimitTrackingDetailsRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_ins_policy_limit_tracking_details.htm)**
    Output representation for the insurance policy limit tracking details.
-   **[ConnectApi.InsPolicyLmtCalcStandingRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_ins_policy_lmt_calc_standing.htm)**
    Output representation for the current standings of the insurance policy limits.
-   **[ConnectApi.InsPolicyLmtCalcStandingNode](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_ins_policy_lmt_calc_standing_node.htm)**
    Node representation for an insurance policy limit standing calculation.
-   **[ConnectApi.PayClaimCoveragePaymentDetailRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_pay_claim_coverage_payment_detail.htm)**
    Output representation for a claim coverage payment detail operation.
-   **[ConnectApi.PayExGratiaClaimCvrPaymentDetailRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_pay_ex_gratia_claim_cvr_payment_detail.htm)**
    Output representation for the details of the ex gratia payment that’s made for the claim coverage payment detail.
-   **[ConnectApi.ProcessPolicyLimitsRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_process_policy_limits.htm)**
    Output representation for processing the policy limits for a claim loss item.
-   **[ConnectApi.VerifyPolicyCoverageRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_verify_policy_coverage.htm)**
    Output representation of a policy coverage's applicability for a specified loss date.
-   **[ConnectApi.VerifyPolicyCoverageOutputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_verify_policy_coverage_output_re.htm)**
    Invocable action output representation for verify policy coverage.

## Related Topics

- ConnectApi.InsuranceCommissionProcessingOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_commission_processing_output.htm)
- ConnectApi.InsuranceOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_output.htm)
- ConnectApi.InsurancePolicyBulkOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_policy_bulk_output.htm)
- ConnectApi.InsurancePolicyProcessOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_policy_process_output.htm)
- ConnectApi.InsuranceTransactionBillingOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_transaction_billing_output.htm)
- ConnectApi.CalculateAdjustmentsRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_calculate_adjustments.htm)
- ConnectApi.CancelClaimCoveragePaymentDetailRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_cancel_claim_coverage_payment_detail.htm)
- ConnectApi.ClaimAttributeOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_attribute_output.htm)
- ConnectApi.ClaimCovPaymentAdjDetailsRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_cov_payment_adj_details.htm)
- ConnectApi.ClaimCoverageRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_coverage.htm)
