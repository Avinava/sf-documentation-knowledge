---
title: "Rebate Management Standard Invocable Actions"
domain: channel-revenue-management-dev-guide
topic: rebate-management-standard-invocable-actions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.079Z
estimatedTokens: 876
keywords: [Rebate, Management, Standard, Invocable, Actions, Add, members, program, calculate, amounts, upsert, payouts, generate, payout, periods]
---

# Rebate Management Standard Invocable Actions

> Add members to a rebate program, calculate rebate amounts and
      upsert payouts, generate rebate payout periods, process rebate calculation batch jobs, and
      process a rebate CSV file for Rebate Management. For more information on standard
    invocable actions, see
        REST API Developer Guide and Actions Developer
    Guide.

# Rebate Management Standard Invocable Actions

Add members to a rebate program, calculate rebate amounts and upsert payouts, generate rebate payout periods, process rebate calculation batch jobs, and process a rebate CSV file for Rebate Management. For more information on standard invocable actions, see **[REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_actions_invocable_standard.htm)** and **[Actions Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_action.meta/api_action/actions_intro.htm)**.

-   **[Add Rebate Member List](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/rebate_actions_add_rebate_member_list.htm)**
    Add a list of members to a rebate program. The list of rebate members is based on the accounts in the specified account list view.
-   **[Calculate Rebate Amount and Upsert Payout](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/rebate_actions_cal_rebate_amt_and_upsert_payout.htm)**
    Calculate the rebate amount and upsert the rebate payout for the specified aggregate record.
-   **[Calculate Projected Rebate Amount](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/actions_obj_calc_projected_rebate_amt.htm)**
    Calculate the projected rebate amount for rebate types associated with a specified transaction reference ID.
-   **[Generate Rebate Payout Periods](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/rebate_actions_generate_rebate_payout_periods.htm)**
    Generate payout periods for a rebate program based on the frequency specified in the program.
-   **[Get Benefit and Calculate Rebate Amount](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/rebate_actions_get_benefit_and_cal_rebate_amt.htm)**
    Get the details benefits and optionally calculate the rebate amount for the specified aggregate record.
-   **[Get Eligible Program Rebate Types](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/actions_obj_get_eligible_rebates.htm)**
    Retrieve the eligible program rebate types for a mapped object.
-   **[Process Program Rebate Type Products](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/actions_obj_process_program_rebatetype_products.htm)**
    Insert or delete the records in the Program Rebate Type Product object. The inserted products participate as inclusion or exclusion as defined in the Product Filter Type option on Program Rebate Type.
-   **[Process Rebate Batch Calculation Jobs](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/rebate_actions_process_rebates_batch_calc_job.htm)**
    Process a rebate batch calculation job from the Data Processing Engine.
-   **[Process Rebate CSV Files](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/rebate_actions_rebates_process_csv.htm)**
    Process an uploaded CSV file using Bulk API 2.0 and convert the file’s data into records in the target object.
-   **[Upsert Custom Rebate Payout](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/rebate_actions_upsert_custom_rebate_payout.htm)**
    Upsert the custom calculated rebate payout for a specified aggregate record.

## Related Topics

- Add Rebate Member List (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/rebate_actions_add_rebate_member_list.htm)
- Calculate Rebate Amount and Upsert Payout (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/rebate_actions_cal_rebate_amt_and_upsert_payout.htm)
- Calculate Projected Rebate Amount (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/actions_obj_calc_projected_rebate_amt.htm)
- Generate Rebate Payout Periods (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/rebate_actions_generate_rebate_payout_periods.htm)
- Get Benefit and Calculate Rebate Amount (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/rebate_actions_get_benefit_and_cal_rebate_amt.htm)
- Get Eligible Program Rebate Types (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/actions_obj_get_eligible_rebates.htm)
- Process Program Rebate Type Products (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/actions_obj_process_program_rebatetype_products.htm)
- Process Rebate Batch Calculation Jobs (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/rebate_actions_process_rebates_batch_calc_job.htm)
- Process Rebate CSV Files (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/rebate_actions_rebates_process_csv.htm)
- Upsert Custom Rebate Payout (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/rebate_actions_upsert_custom_rebate_payout.htm)
