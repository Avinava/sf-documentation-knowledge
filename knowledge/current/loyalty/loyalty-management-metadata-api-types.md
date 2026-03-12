---
title: "Loyalty Management Metadata API Types"
domain: loyalty
topic: loyalty-management-metadata-api-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.156Z
estimatedTokens: 505
keywords: [Loyalty, Management, Metadata, API, access, feature, settings, customize, user, Developer]
---

# Loyalty Management Metadata API Types

> Metadata API enables you to access some types and feature settings that you can
    customize in the user interface. For more information about Metadata API and to find a complete
    reference of existing metadata types, see
        Metadata API Developer
    Guide.

# Loyalty Management Metadata API Types

Metadata API enables you to access some types and feature settings that you can customize in the user interface. For more information about Metadata API and to find a complete reference of existing metadata types, see **[Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/)**.

-   **[AnalyticsDatasetDefinition](atlas.en-us.loyalty.meta/loyalty/meta_analyticsdatasetdefinition.htm)**
    Represents the datasets used for analytics, such as those in CRM Analytics and Tableau.
-   **[BenefitAction](atlas.en-us.loyalty.meta/loyalty/meta_benefitaction.htm)**
    Represents details of an action that can be triggered automatically for a benefit.This type extends the Metadata metadata type and inherits its fullName field.
-   **[Flow for Loyalty Management](atlas.en-us.loyalty.meta/loyalty/loyalty_management_flow_metadata_api.htm)**
    Represents the metadata associated with a flow. Use Flow to create an application that takes users through a series of pages to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.
-   **[LoyaltyProgramSetup](atlas.en-us.loyalty.meta/loyalty/meta_loyaltyprogramsetup.htm)**
    Represents the configuration of a loyalty program process including its parameters and rules. Program processes determine how new transaction journals are processed. When new transaction journals meet the criteria and conditions for a program process, actions that are set up in the process are triggered for the transaction journals.
-   **[Settings](atlas.en-us.loyalty.meta/loyalty/loyalty_settings_metadata_api_parent.htm)**
    Represents the organization settings to control the update of non-qualifying points balance for members when points are credited. For more information, see **[Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm)**.

## Related Topics

- AnalyticsDatasetDefinition (atlas.en-us.loyalty.meta/loyalty/meta_analyticsdatasetdefinition.htm)
- BenefitAction (atlas.en-us.loyalty.meta/loyalty/meta_benefitaction.htm)
- Flow for Loyalty Management (atlas.en-us.loyalty.meta/loyalty/loyalty_management_flow_metadata_api.htm)
- LoyaltyProgramSetup (atlas.en-us.loyalty.meta/loyalty/meta_loyaltyprogramsetup.htm)
- Settings (atlas.en-us.loyalty.meta/loyalty/loyalty_settings_metadata_api_parent.htm)
