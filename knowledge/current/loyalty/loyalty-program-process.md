---
title: "Loyalty Program Process"
domain: loyalty
topic: loyalty-program-process
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.155Z
estimatedTokens: 1172
keywords: [Loyalty, Program, Process, Run, created, template]
---

# Loyalty Program Process

> Run a loyalty process created from a loyalty program process
      template.

# Loyalty Program Process

Run a loyalty process created from a loyalty program process template.

Out-of-the-box loyalty program process templates come with a default set of process parameters. You can configure new parameters or remove the default ones by simply cloning a template and running the configured parameters as a customized loyalty process using the loyalty program process API. For example, when using the CreditPointsToMembers process template to credit points to a loyalty member, you can configure the currency value so that the credited points can be redeemed in the currency you’ve specified.

The request and response parameters for the loyalty program process API vary depending on the input and output parameters configured for a loyalty program process in a Salesforce org.

Resource

```

```

Resource examples

| Loyalty Process API | Loyalty Process Template Name | Description |
| --- | --- | --- |
| /connect/loyalty/programs/​​​DemoProgram/program-processes/​CancelVoucher | CancelVoucher | Cancel a voucher. |
| /connect/loyalty/programs/​DemoProgram/program-processes/​CreditPointsToMembers | CreditPointsToMembers | Credit pre-calculated points to a loyalty member on every transaction. |
| /connect/loyalty/programs/​DemoProgram/program-processes/​DebitPointsFromMembers | DebitPointsFromMembers | Redeem a loyalty member’s pre-calculated points on a transaction. |
| /connect/loyalty/programs/​DemoProgram/program-processes/​EnrollInPromotion | EnrollInPromotion | Enroll a loyalty member to a promotion. |
| /connect/loyalty/programs/​DemoProgram/program-processes/​GetMemberPromotions | GetMemberPromotions | View eligible promotions of a loyalty member. |
| /connect/loyalty/programs/​DemoProgram/program-processes/​IssueVoucher | IssueVoucher | Issue a new voucher to a loyalty member. |
| /connect/loyalty/programs/​DemoProgram/program-processes/​UnenrollMember | UnenrollMember | Unenroll a member from a loyalty program. |
| /connect/loyalty/programs/​DemoProgram/program-processes/​UpdateMemberDetails | UpdateMemberDetails | Update a loyalty member profile. |
| /connect/loyalty/programs/​DemoProgram/program-processes/​UpdateTier | TierProcessing | Change the tier for a loyalty member. |

Available version

56.0

Requires Chatter

No

HTTP methods

POST

Request parameters

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| programName | String | Name of the loyalty program. | Required | 56.0 |
| processName | String | Name of the process created from a loyalty program process template. | Required | 56.0 |

Request body for POST

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| processParameters | Loyalty Process Parameter Map | Input parameters for running the loyalty process. | Required | 56.0 |

Response body for POST

[Loyalty Process Output](atlas.en-us.loyalty.meta/loyalty/connect_responses_loyalty_process_output.htm "Output representation of the loyalty process response.")

-   **[Cancel a Voucher](atlas.en-us.loyalty.meta/loyalty/connect_resources_cancel_voucher.htm)**
    Change the status of a voucher to canceled.
-   **[Credit Points to Members](atlas.en-us.loyalty.meta/loyalty/connect_resources_credit_points_to_members.htm)**
    Credit pre-calculated points to a loyalty member on every transaction.
-   **[Debit Points from Members](atlas.en-us.loyalty.meta/loyalty/connect_resources_debit_points_from_members.htm)**
    Redeem a loyalty member’s pre-calculated points on a transaction.
-   **[Enroll for Promotions](atlas.en-us.loyalty.meta/loyalty/connect_resources_enroll_ln_promotion.htm)**
    Enroll a loyalty member to a promotion.
-   **[Get Member Promotions](atlas.en-us.loyalty.meta/loyalty/connect_resources_get_member_promotions.htm)**
    View all eligible promotions of a loyalty member.
-   **[Issue a Voucher](atlas.en-us.loyalty.meta/loyalty/connect_resources_issue_voucher.htm)**
    Issue a new voucher to a loyalty member.
-   **[Unenroll a Member](atlas.en-us.loyalty.meta/loyalty/connect_resources_unenroll_member.htm)**
    Unenroll a member from a loyalty program.
-   **[Opt Out from a Promotion](atlas.en-us.loyalty.meta/loyalty/connect_resources_unenroll_promotion.htm)**
    Opt out a loyalty program member from an available promotion.
-   **[Update Member Details](atlas.en-us.loyalty.meta/loyalty/connect_resources_update_member_details.htm)**
    Update personal and preference details of a member.
-   **[Update Member Tier](atlas.en-us.loyalty.meta/loyalty/connect_resources_update_tier.htm)**
    Upgrade or downgrade tier for a loyalty member.

## Code Examples

```
/connect/loyalty/programs/${programName}/program-processes/${processName}
```

## Related Topics

- /connect/loyalty/programs/​​​DemoProgram/program-processes/​CancelVoucher (atlas.en-us.loyalty.meta/loyalty/connect_resources_cancel_voucher.htm)
- /connect/loyalty/programs/​DemoProgram/program-processes/​CreditPointsToMembers (atlas.en-us.loyalty.meta/loyalty/connect_resources_credit_points_to_members.htm)
- /connect/loyalty/programs/​DemoProgram/program-processes/​DebitPointsFromMembers (atlas.en-us.loyalty.meta/loyalty/connect_resources_debit_points_from_members.htm)
- /connect/loyalty/programs/​DemoProgram/program-processes/​EnrollInPromotion (atlas.en-us.loyalty.meta/loyalty/connect_resources_enroll_ln_promotion.htm)
- /connect/loyalty/programs/​DemoProgram/program-processes/​GetMemberPromotions (atlas.en-us.loyalty.meta/loyalty/connect_resources_get_member_promotions.htm)
- /connect/loyalty/programs/​DemoProgram/program-processes/​IssueVoucher (atlas.en-us.loyalty.meta/loyalty/connect_resources_issue_voucher.htm)
- /connect/loyalty/programs/​DemoProgram/program-processes/​UnenrollMember (atlas.en-us.loyalty.meta/loyalty/connect_resources_unenroll_member.htm)
- /connect/loyalty/programs/​DemoProgram/program-processes/​UpdateMemberDetails (atlas.en-us.loyalty.meta/loyalty/connect_resources_update_member_details.htm)
- /connect/loyalty/programs/​DemoProgram/program-processes/​UpdateTier (atlas.en-us.loyalty.meta/loyalty/connect_resources_update_tier.htm)
- Loyalty Process Parameter Map (atlas.en-us.loyalty.meta/loyalty/connect_requests_loyalty_process_parameter_map.htm)
