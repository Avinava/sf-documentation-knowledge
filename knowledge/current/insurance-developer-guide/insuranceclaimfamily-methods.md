---
title: "InsuranceClaimFamily Methods"
domain: insurance-developer-guide
topic: insuranceclaimfamily-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.908Z
estimatedTokens: 1218
keywords: [InsuranceClaimFamily]
---

# InsuranceClaimFamily Methods

> These methods are for InsuranceClaimFamily. All
  methods are static.

# InsuranceClaimFamily Methods

These methods are for InsuranceClaimFamily. All methods are static.

-   **[CalculateAdjustments(CalculateAdjustmentsInput, claimId, coverageId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceClaimFamily_CalculateAdjustments.htm)**
    Calculate adjustments for a loss item and determine the final payable amount for a specific claim loss item.
-   **[CancelClaimCoveragePaymentDetail(claimId, coverageId, paymentDetailId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceClaimFamily_CancelClaimCoveragePaymentDetail.htm)**
    Cancel payment for a claim coverage payment detail record.
-   **[CreateClaim(CreateClaimInput)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_ClaimFamily_CreateClaim.htm)**
    Create a claim record.
-   **[CreateClaimCoverage(claimId, CreateClaimCoverageInput)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_ClaimFamily_CreateClaimCoverage.htm)**
    Create a claim coverage record.
-   **[CreateClaimCoveragePaymentDetail(CreateClaimCoveragePaymentDetailInput, claimId, coverageId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceClaimFamily_CreateClaimCoveragePaymentDetail.htm)**
    Create a claim coverage payment detail record.
-   **[CreatePolicyLimits(policyId, CreatePolicyLimitsInput)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceClaimFamily_CreatePolicyLimits.htm)**
    insurance policy limit records for the specified policy based on the defined attributes and coverages of the insurance policy.
-   **[DeleteClaimCoveragePaymentDetail(claimId, coverageId, paymentDetailId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceClaimFamily_DeleteClaimCoveragePaymentDetail.htm)**
    Delete a claim coverage payment detail record.
-   **[EditClaimCoveragePaymentDetail(EditClaimCoveragePaymentDetailInput, claimId, coverageId, paymentDetailId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceClaimFamily_EditClaimCoveragePaymentDetail_1.htm)**
    Modify a claim coverage payment detail record.
-   **[GetClaim(claimId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_ClaimFamily_GetClaim.htm)**
    Get the details of a specific claim.
-   **[PayClaimCoveragePaymentDetail(claimId, coverageId, paymentDetailId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceClaimFamily_PayClaimCoveragePaymentDetail.htm)**
    Process payment for a specific claim coverage payment detail record.
-   **[PolicyLimitStandingCalculation(InsurancePolicyLimitStandingCalculationInput)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceClaimFamily_PolicyLimitStandingCalculation.htm)**
    Calculate the current standing for policy limits.
-   **[postVerifyPolicyCoverage(policyId, coverageId, verifyPolicyCoverageInput)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceClaimFamily_postVerifyPolicyCoverage.htm)**
    Verify the applicability of a policy coverage for a specified loss date under an insurance policy, so that only eligible coverages are processed for claims.
-   **[PayExGratiaClaimCvrPaymentDetail(claimId, coverageId, paymentDetailId, PayExGratiaClaimCvrPaymentDetailInput)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceClaimFamily_PayExGratiaClaimCvrPaymentDetail.htm)**
    Process an ex gratia payment for a claim coverage payment detail record.
-   **[ProcessPolicyLimits(ProcessPolicyLimitsInput, claimId, coverageId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceClaimFamily_ProcessPolicyLimits.htm)**
    Process the policy limits for a loss item in a claim by using the current standings of the insurance policy limits.
-   **[RecalculateAdjustments(claimId, coverageId, RecalculateAdjustmentsInput)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceClaimFamily_RecalculateAdjustments.htm)**
    Recalculate adjustments for existing payment details.
-   **[UpdateClaim(claimId, UpdateClaimInput)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_ClaimFamily_UpdateClaim.htm)**
    Update the details of a specific claim.
-   **[UpdateClaimCoverage(claimId, coverageId, UpdateClaimCoverageInput)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_ClaimFamily_UpdateClaimCoverage.htm)**
    Update the details of a specific coverage in a claim.

## Related Topics

- CalculateAdjustments(CalculateAdjustmentsInput, claimId, coverageId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceClaimFamily_CalculateAdjustments.htm)
- CancelClaimCoveragePaymentDetail(claimId, coverageId, paymentDetailId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceClaimFamily_CancelClaimCoveragePaymentDetail.htm)
- CreateClaim(CreateClaimInput) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_ClaimFamily_CreateClaim.htm)
- CreateClaimCoverage(claimId, CreateClaimCoverageInput) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_ClaimFamily_CreateClaimCoverage.htm)
- CreateClaimCoveragePaymentDetail(CreateClaimCoveragePaymentDetailInput, claimId, coverageId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceClaimFamily_CreateClaimCoveragePaymentDetail.htm)
- CreatePolicyLimits(policyId, CreatePolicyLimitsInput) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceClaimFamily_CreatePolicyLimits.htm)
- DeleteClaimCoveragePaymentDetail(claimId, coverageId, paymentDetailId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceClaimFamily_DeleteClaimCoveragePaymentDetail.htm)
- EditClaimCoveragePaymentDetail(EditClaimCoveragePaymentDetailInput, claimId, coverageId, paymentDetailId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceClaimFamily_EditClaimCoveragePaymentDetail_1.htm)
- GetClaim(claimId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_ClaimFamily_GetClaim.htm)
- PayClaimCoveragePaymentDetail(claimId, coverageId, paymentDetailId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceClaimFamily_PayClaimCoveragePaymentDetail.htm)
