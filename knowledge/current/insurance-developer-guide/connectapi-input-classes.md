---
title: "ConnectApi Input Classes"
domain: insurance-developer-guide
topic: connectapi-input-classes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.804Z
estimatedTokens: 569
keywords: [ConnectApi, Input, Classes, take, arguments, instances]
---

# ConnectApi Input Classes

> Some ConnectApi methods take arguments that are
    instances of ConnectApi input classes.

# ConnectApi Input Classes

Some ConnectApi methods take arguments that are instances of ConnectApi input classes.

Input classes are concrete unless marked abstract in this documentation. Concrete input classes have public constructors that have no parameters.

Some methods have parameters that are typed with an abstract class. You must pass in an instance of a concrete child class for these parameters.

Most input class properties can be set. Read-only properties are noted in this documentation.

Insurance Claim includes these Apex input classes.

-   **[ConnectApi.CalculateAdjustmentsInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_calculate_adjustments.htm)**
    Input representation for calculating adjustments for claim loss items.
-   **[ConnectApi.ClaimAdditionalFieldInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_additional_field_input_re.htm)**
    Input representation for the details of the additional field.
-   **[ConnectApi.ClaimInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim.htm)**
    Input representation for creating or updating a claim.
-   **[ConnectApi.ClaimAttributeInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_attribute.htm)**
    Input representation for claim attributes.
-   **[ConnectApi.ClaimAttributeInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_attribute_input_re.htm)**
    Invocable action input representation for claim attributes.
-   **[ConnectApi.ClaimItemInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_item.htm)**
    Input representation for claim items.
-   **[ConnectApi.ClaimItemInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_item_input_re.htm)**
    Invocable action input representation for claim item.
-   **[ConnectApi.ClaimItemRelatedObjectInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_item_related_object_input_re.htm)**
    Invocable action input representation for the related object in claim items.
-   **[ConnectApi.ClaimOptionsInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_options.htm)**
    Input representation for claim options.
-   **[ConnectApi.ClaimOptionInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_options_input_re.htm)**
    Invocable action input representation for claim options
-   **[ConnectApi.ClaimParticipantInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_participant.htm)**
    Input representation for a claim participant.
-   **[ConnectApi.ClaimParticipantInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_participant_input_re.htm)**
    Invocable Action Input representation for Claim Participant
-   **[ConnectApi.ClaimRelatedObjectInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_related_object.htm)**
    Input representation for a related object on a claim.
-   **[ConnectApi.CreateClaimInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_create_claim.htm)**
    Input representation for the Create Claim action.
-   **[ConnectApi.CreateClaimCoverageInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_create_claim_coverage.htm)**
    Input representation for creating a claim coverage.
-   **[ConnectApi.CreateClaimCovPaymentDetailInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_create_claim_coverage_payment_detail.htm)**
    Input representation for creating a claim coverage payment detail record.
-   **[ConnectApi.CreatePolicyLimitsInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_create_policy_limits.htm)**
    Input representation for creating insurance policy limit records.
-   **[ConnectApi.CreatePolicyLimitsInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_create_policy_limits_input_re.htm)**
    Input representation for the apex ConnectApi.CreatePolicyLimitsInputRep record that contains the details of the policy limits to be created.
-   **[ConnectApi.DeleteClaimCvrPymtDtlInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_delete_claim_cvr_pymt_dtl_input_re.htm)**
    Input representation for deleting claim coverage payment detail operations
-   **[ConnectApi.EditClaimCvrPaymentDetailInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_edit_claim_cvr_payment_detail.htm)**
    Input representation for editing claim coverage payment detail.
-   **[ConnectApi.GetClaimInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_get_claim.htm)**
    Input representation to get the details of a claim.
-   **[ConnectApi.GetInsPlcyCurrStndInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_get_ins_plcy_curr_stnd_input_re.htm)**
    An Apex ConnectApi.GetInsPlcyLmtCurrStndInputRep record that contains the details needed to retrieve the consumed and available limits for the policy or claim.
-   **[ConnectApi.IPLStandingCalcOptions](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_i_p_l_standing_calc_option.htm)**
    Invocable action input representation for options to calculate standings.
-   **[ConnectApi.InsPolicyLmtCurrentStandingsInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_ins_policy_lmt_current_standings.htm)**
    Input representation for the current standings of the insurance policy limits.
-   **[ConnectApi.LimitStandingOptionInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_limit_standing_option.htm)**
    Input representation for limit standing options.
-   **[ConnectApi.OpenClaimCoverageInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_open_claim_coverage_input_re.htm)**
    Input representation for the open claim coverage action.
-   **[ConnectApi.PayExGratiaClaimCvrPaymentDetailInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_pay_ex_gratia_claim_cvr_payment_detail.htm)**
    Input representation for the ex gratia payment for the claim coverage payment detail.
-   **[ConnectApi.ProcessPolicyLimitsInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_process_policy_limits.htm)**
    Input representation for processing policy limits for a claim loss item.
-   **[ConnectApi.RecalculateAdjustmentsInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_recalculate_adjustments.htm)**
    Input representation for recalculating the adjustments for existing payment details.
-   **[ConnectApi.UpdateClaimInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_update_claim.htm)**
    Invocable action input representation for the update claim action.
-   **[ConnectApi.UpdateClaimCoverageInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_update_claim_coverage.htm)**
    Input representation for updating a claim coverage.
-   **[ConnectApi.UpdateClaimCoverageInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_update_claim_coverage_input_re.htm)**
    Input representation for the update claim coverage action.
-   **[ConnectApi.VerifyPolicyCoverageInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_verify_policy_coverage.htm)**
    Input representation for verifying a policy coverage's applicability for a specified loss date.
-   **[ConnectApi.VerifyPolicyCoverageInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_verify_policy_coverage_input_re.htm)**
    Invocable action input representation details to verify the coverage of a specific insurance policy.

## Related Topics

- ConnectApi.InsuranceCommissionProcessingInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_commission_processing.htm)
- ConnectApi.InsurancePolicyBulkInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_policy_bulk.htm)
- ConnectApi.InsurancePolicyBulkRenewInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_policy_bulk_renew.htm)
- ConnectApi.InsurancePolicyRenewInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_policy_renew.htm)
- ConnectApi.InsuranceTransactionBillingInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_transaction_billing.htm)
- ConnectApi.CalculateAdjustmentsInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_calculate_adjustments.htm)
- ConnectApi.ClaimAdditionalFieldInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_additional_field_input_re.htm)
- ConnectApi.ClaimInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim.htm)
- ConnectApi.ClaimAttributeInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_attribute.htm)
- ConnectApi.ClaimAttributeInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_attribute_input_re.htm)
