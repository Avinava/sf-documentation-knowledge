---
title: "InsuranceGroupBenefitsFamily Methods"
domain: insurance-developer-guide
topic: insurancegroupbenefitsfamily-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.926Z
estimatedTokens: 1244
keywords: [InsuranceGroupBenefitsFamily]
---

# InsuranceGroupBenefitsFamily Methods

> These methods are for InsuranceGroupBenefitsFamily. All methods are static.

# InsuranceGroupBenefitsFamily Methods

These methods are for InsuranceGroupBenefitsFamily. All methods are static.

-   **[postInsuranceAddMembers(censusMgmtInputParam, groupCensusId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_postInsuranceAddMembers.htm)**
    Add new group census members.
-   **[postInsuranceAddMemberPlans(insuranceAddMemberPlansInputRepresentation, memberId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_postInsuranceAddMemberPlans.htm)**
    Add plans for a group census member.
-   **[postInsuranceBulkAddMembers(bulkCensusMgmtInputParam, groupCensusId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_postInsuranceBulkAddMembers.htm)**
    Add or update group census member data in bulk.
-   **[postInsuranceCheckPlansEligibility(plansEligibilityInputParam, memberId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_postInsuranceCheckPlansEligibility.htm)**
    Check the eligibility of a group census member for a given set of plans and create a new eligibility context.
-   **[patchInsuranceCheckPlansEligibility(plansEligibilityInputParamWithContextId, memberId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_patchInsuranceCheckPlansEligibility.htm)**
    Check the eligibility of a group census member for a set of added and deleted plans within an existing context.
-   **[postInsuranceCreateAccounts(createAccountsInputParam, createPortalUsers)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_postInsuranceCreateAccounts.htm)**
    Create person accounts and portal users for group census members.
-   **[postInsuranceCreateContacts(createContactsInputParam, createPortalUsers)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_postInsuranceCreateContacts.htm)**
    Create contacts and portal users for group census members.
-   **[deleteInsuranceDeleteAllMembers(groupCensusId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_deleteInsuranceDeleteAllMembers.htm)**
    Delete all census members for the specified group census ID.
-   **[postInsuranceDeleteMemberPlans(insuranceDeleteMemberPlansInputRepresentation, memberId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_postInsuranceDeleteMemberPlans.htm)**
    Delete the specified plans for a group census member.
-   **[postInsuranceGroupRating(gbGroupRatingInputParam, quoteId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_postInsuranceGroupRating.htm)**
    Rate a group benefits quote to calculate premiums for all quote line items.
-   **[postInsuranceIndividualEnrollment(insuranceIndividualEnrollmentInputParam, memberId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_postInsuranceIndividualEnrollment.htm)**
    Enroll a group census member in one or more insurance plans, creating the necessary policy records.
-   **[getInsuranceMemberEligiblePlans(memberId, shouldIncludeDependents)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_getInsuranceMemberEligiblePlans.htm)**
    Get the enrollment plans for which a group census member and their dependents are eligible.
-   **[postInsuranceMembersRating(insuranceMemberRatingInputParam, memberId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_postInsuranceMembersRating.htm)**
    Calculate pricing for individual members of a group census, with the support for plan and individual coverages within the plan.
-   **[postInsuranceSyncCensusSummary(groupCensusId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_postInsuranceSyncCensusSummary.htm)**
    Synchronize and recalculate the summary data for a group census.
-   **[patchInsuranceUpdateMembers(censusMgmtInputParam, groupCensusId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_patchInsuranceUpdateMembers.htm)**
    Update group census members.
-   **[patchInsuranceUpdateMemberPlans(insuranceUpdateMemberPlansInput, memberId)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_patchInsuranceUpdateMemberPlans.htm)**
    Update the plans that are associated with a group census member.

## Related Topics

- postInsuranceAddMembers(censusMgmtInputParam, groupCensusId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_postInsuranceAddMembers.htm)
- postInsuranceAddMemberPlans(insuranceAddMemberPlansInputRepresentation, memberId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_postInsuranceAddMemberPlans.htm)
- postInsuranceBulkAddMembers(bulkCensusMgmtInputParam, groupCensusId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_postInsuranceBulkAddMembers.htm)
- postInsuranceCheckPlansEligibility(plansEligibilityInputParam, memberId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_postInsuranceCheckPlansEligibility.htm)
- patchInsuranceCheckPlansEligibility(plansEligibilityInputParamWithContextId, memberId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_patchInsuranceCheckPlansEligibility.htm)
- postInsuranceCreateAccounts(createAccountsInputParam, createPortalUsers) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_postInsuranceCreateAccounts.htm)
- postInsuranceCreateContacts(createContactsInputParam, createPortalUsers) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_postInsuranceCreateContacts.htm)
- deleteInsuranceDeleteAllMembers(groupCensusId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_deleteInsuranceDeleteAllMembers.htm)
- postInsuranceDeleteMemberPlans(insuranceDeleteMemberPlansInputRepresentation, memberId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_postInsuranceDeleteMemberPlans.htm)
- postInsuranceGroupRating(gbGroupRatingInputParam, quoteId) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_ConnectAPI_InsuranceGroupBenefitsFamily_postInsuranceGroupRating.htm)
