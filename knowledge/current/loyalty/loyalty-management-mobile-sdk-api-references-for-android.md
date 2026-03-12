---
title: "Loyalty Management Mobile SDK API References for Android"
domain: loyalty
topic: loyalty-management-mobile-sdk-api-references-for-android
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.517Z
estimatedTokens: 350
keywords: [Loyalty, Management, Mobile, SDK, API, References, Android, interacts, Salesforce, APIs, retrieves, member, benefits, transactions, profiles]
---

# Loyalty Management Mobile SDK API References for Android

> The Loyalty Management Mobile SDK for Android interacts with Salesforce Loyalty
    Management APIs and retrieves member benefits, transactions, profiles, promotions, vouchers,
    enrolls an individual member, opts a member out of a promotion.

# Loyalty Management Mobile SDK API References for Android

The Loyalty Management Mobile SDK for Android interacts with Salesforce Loyalty Management APIs and retrieves member benefits, transactions, profiles, promotions, vouchers, enrolls an individual member, opts a member out of a promotion.

| Available in: all editions that have Loyalty Management enabled |
| --- |


Interact with the Loyalty Management APIs, including:

| Resource | Description |
| --- | --- |
| /loyalty-programs/${loyaltyProgramName}/individual-member-enrollments | Individual Member Enrollments |
| /connect/loyalty/programs/${programName}/program-processes/EnrollInPromotion | Enroll for Promotions |
| services/apexrest/expense-analysis | Expense Analysis |
| /connect/loyalty/programs/${programName}/program-processes/GetMemberPromotions | Get Member Promotions |
| /connect/loyalty/member/${memberId}/memberbenefits | Member Benefits |
| /loyalty-programs/${loyaltyProgramName}/members | Member Profile |
| /loyalty/programs/${programName}/members/${membershipNumber}/vouchers | Member Vouchers |
| services/apexrest/receipt-status-updation | Receipt Status Updation |
| services/apexrest/upload-receipt | Receipt Upload |
| /connect/loyalty/programs/${programName}/transaction-history | Transaction History |
| /connect/loyalty/programs/${programName}/program-processes/UnenrollMember | Opt Out from a Promotion |

## Related Topics

- /loyalty-programs/${loyaltyProgramName}/individual-member-enrollments (atlas.en-us.loyalty.meta/loyalty/connect_resources_enroll_individual_member.htm)
- /connect/loyalty/programs/${programName}/program-processes/EnrollInPromotion (atlas.en-us.loyalty.meta/loyalty/connect_resources_enroll_ln_promotion.htm)
- services/apexrest/expense-analysis (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_expenseanalysis.htm)
- /connect/loyalty/programs/${programName}/program-processes/GetMemberPromotions (atlas.en-us.loyalty.meta/loyalty/connect_resources_get_member_promotions.htm)
- /connect/loyalty/member/${memberId}/memberbenefits (atlas.en-us.loyalty.meta/loyalty/connect_resources_member_benefits.htm)
- /loyalty-programs/${loyaltyProgramName}/members (atlas.en-us.loyalty.meta/loyalty/connect_resources_member_profile.htm)
- /loyalty/programs/${programName}/members/${membershipNumber}/vouchers (atlas.en-us.loyalty.meta/loyalty/connect_resources_member_vouchers.htm)
- services/apexrest/receipt-status-updation (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_receiptstatusupdation.htm)
- services/apexrest/upload-receipt (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_receiptupload.htm)
- /connect/loyalty/programs/${programName}/transaction-history (atlas.en-us.loyalty.meta/loyalty/connect_resources_transaction_history.htm)
