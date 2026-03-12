---
title: "Resources"
domain: insurance-developer-guide
topic: resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.818Z
estimatedTokens: 698
keywords: [Resources, Insurance, Brokerage, API, Claims, insurance, group, benefits, Policy, Product, Administration, Quoting]
---

# Resources

> Learn more about the available insurance group benefits API resources.

# Resources

Learn more about the available insurance group benefits API resources.

-   **[Insurance Person Accounts and Users (POST)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_accounts_create.htm)**
    Create person accounts and portal users for group census members. The Person Account is used for linking to the appropriate policy for policy association, and the corresponding portal user is created to allow the member to log in to the community portal.
-   **[Insurance Contacts and Users (POST)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_create_contacts.htm)**
    Create contacts and portal users for group census members. The Contact record is used for linking to the appropriate policy for policy association, and the corresponding portal user is created to allow the member to log in to the community portal.
-   **[Insurance Member Rating (POST)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_individual_members_rating.htm)**
    Calculate pricing along with employee and employer contribution for individual members of a group census based on plan and coverages within the plan.
-   **[Insurance Group Census Members (POST, PATCH, DELETE)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_census_management.htm)**
    Add (POST) and update (PATCH) group census members. Delete all census members for the specified group census ID.
-   **[Insurance Group Census Members Delete (POST)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_census_management_delete.htm)**
    Delete one or more census members of the specified group census ID.
-   **[Insurance Bulk Census Management (POST)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_bulk_census_management.htm)**
    Process group census data in bulk.
-   **[Insurance Census Summary Sync (POST)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_census_summary_sync.htm)**
    Synchronize and recalculate the summary data for a group census.
-   **[Insurance Member Plans (POST, PATCH)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_member_plans_management.htm)**
    Create and update insurance plans for a group census member.
-   **[Insurance Member Plans Delete (POST)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_delete_member_plans.htm)**
    Delete specified plans for a group census member.
-   **[Insurance Member Eligible Plans (GET)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_get_member_eligible_plans.htm)**
    Get the contract group plans for which a group census member and their dependents are eligible.
-   **[Insurance Plans Eligibility Check (POST, PATCH)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_invoke_enrollment_rules.htm)**
    Evaluate product configuration rules for a group census member based on their selected plan and coverage options during initial enrollment (POST). Reevaluate plan eligibility for a group census member when plans are added or removed (PATCH).
-   **[Insurance Contract from Quote (POST)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_create_contract_from_quote.htm)**
    Create a group benefits contract from a quote. This API supports asynchronous operation for long-running conversions.
-   **[Insurance Group Rating (POST)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_group_rating.htm)**
    Rate a group benefits quote to calculate premiums for all quote line items. Rate specific root plans to calculate premiums for their associated quote line items.
-   **[Individual Enrollment (POST)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_individual_enrollment.htm)**
    Enroll a group census member in a group benefit insurance plan, creating the necessary policy records.

#### See Also

-   [*Insurance*: Explore Group Benefits in Digital Insurance](https://help.salesforce.com/s/articleView?id=ind.insurance_group_benefits_core_explore_group_benefits_in_digital_insurance.htm&language=en_US "Insurance: Explore Group Benefits in Digital
    Insurance - HTML (New Window)")

## Related Topics

- Bulk Cancel Policy (POST) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_brokerage_bulk_cancel_policy.htm)
- Bulk Renew Policy (POST) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_brokerage_bulk_renew_policy.htm)
- Commission Processing (POST) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_commission_processing.htm)
- Cost Calculation (PATCH) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_cost_calculation.htm)
- Expected Revenue (PATCH) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_expected_revenue.htm)
- Insurance Billing Schedules (POST) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_billing.htm)
- Plan Benefits (GET, POST, PATCH, DELETE) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_plan_benefits.htm)
- Plan Benefits Product Model (GET) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_plan_benefits_product_model.htm)
- Renew Policy (POST) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_brokerage_renew_policy.htm)
- Calculate or Recalculate Adjustments (POST, PATCH) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_calculate_adjustments.htm)
