---
title: "Usage Management Standard Invocable Actions"
domain: revenue-cloud
topic: usage-management-standard-invocable-actions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:12.905Z
estimatedTokens: 544
keywords: [Usage, Management, Standard, Invocable, Actions]
---

# Usage Management Standard Invocable Actions

> Learn more about the standard invocable actions available with Usage
    Management.

# Usage Management Standard Invocable Actions

Learn more about the standard invocable actions available with Usage Management.

-   **[Invoke Summary Creation Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_invoke_summary_creation.htm)**
    Invoke the service that creates various summaries, such as usage, ratable, and liable summaries where the usage amount is zero. The service also checks and updates the billing period of the usage entitlement account if the billing period is expired.
-   **[Process Consumption Overages Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_process_consumption_overages.htm)**
    Process consumption overages for the usage summary records with SummaryComplete status. This action uses the entitlement service to process the overages.
-   **[Refresh Usage Entitlement Bucket Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_refresh_usage_entitlement_bucket.htm)**
    Refresh entitlements by evaluating the usage entitlement bucket records and creating a new usage entitlement entry.
-   **[Retrigger Entitlement Creation Process Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_retrigger_entitlement_creation_process.htm)**
    Retrigger entitlement creation process for failed or unprocessed assets.

#### See Also

-   [*Actions Developer Guide*: Overview](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_action.meta/api_action/actions_intro_overview.htm "Actions Developer Guide: Overview - HTML (New Window)")

-   [*REST API Developer Guide*: Invocable Actions Standard](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_actions_invocable_standard.htm "REST API Developer Guide: Invocable Actions Standard - HTML (New Window)")

-   [*Salesforce Help*: Usage Management](https://help.salesforce.com/s/articleView?id=ind.um_usage_management.htm&language=en_US "Salesforce Help: Usage Management - HTML (New Window)")

## Related Topics

- Invoke Summary Creation Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_invoke_summary_creation.htm)
- Process Consumption Overages Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_process_consumption_overages.htm)
- Refresh Usage Entitlement Bucket Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_refresh_usage_entitlement_bucket.htm)
- Retrigger Entitlement Creation Process Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_retrigger_entitlement_creation_process.htm)
