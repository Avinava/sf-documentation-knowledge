---
title: "Manage Features in First-Generation Managed Packages"
domain: pkg1-dev
topic: manage-features-in-first-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.362Z
estimatedTokens: 869
keywords: [Manage, Features, First-Generation, Managed, Packages, Control, how, release, customers, Feature, Management, App, FMA, extends, functionality]
---

# Manage Features in First-Generation Managed Packages

> Control how you release features to customers with the Feature Management App (FMA). The
  FMA extends the functionality of the License Management App (LMA). Use the FMA to manage features
  as easily as you manage licenses with the LMA.

# Manage Features in First-Generation Managed Packages

Control how you release features to customers with the Feature Management App (FMA). The FMA extends the functionality of the License Management App (LMA). Use the FMA to manage features as easily as you manage licenses with the LMA.

Here at Salesforce, we sometimes run pilot programs, like the one we ran when we introduced Feature Management. Sometimes we dark-launch features to see how they work in production before sharing them with you. Sometimes we make features available to select orgs for limited-time trials. And sometimes we want to track activation metrics for those features.

With feature parameters, we’re extending this functionality to you. Install the FMA in your License Management Org (LMO). The FMA extends the License Management App, and like the LMA, it’s a managed package.

-   **[Feature Parameter Metadata Types and Custom Objects](atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_types_objects.htm)**
    Feature parameters are represented as Metadata API types in your packaging org, as records of custom objects in your License Management Org, and as hidden records in your subscriber’s org.
-   **[Set Up Feature Parameters](atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_feature_parameters_setup.htm)**
    Set up the Feature Management App in your License Management Org, define feature parameters, and add them to your package.
-   **[Use LMO-to-Subscriber Feature Parameters to Enable and Disable Features](atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_lmo_to_subscriber.htm)**
    Feature parameters with a data flow direction value of LMO to Subscriber are writable at your end and read-only in your subscriber’s org. These feature parameters serve as permissions or limits. Use LMO-to-subscriber feature parameters to enable or disable new features or to control how many of a given resource your subscriber can use. Or, enable features for a limited trial period. Assign values to LMO-to-subscriber feature parameters by updating junction object records in your LMO, and then check those values in your code.
-   **[Track Preferences and Activation Metrics with Subscriber-to-LMO Feature Parameters](atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_subscriber_to_lmo.htm)**
    Use subscriber-to-LMO feature parameters to track feature activation in your subscriber’s org. Parameter values are assigned on the subscriber’s end and then sent to your LMO. To collect the values, update the feature parameters in your subscriber’s org using Apex code. Check with your legal team before obtaining activation metrics from your customers. Use activation metrics to collect only aggregated data regarding feature activation.
-   **[Hide Custom Objects and Custom Permissions in Your Subscribers’ Orgs](atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_hide_custom_objects_permissions.htm)**
    Occasionally, you want to include custom permissions or custom objects in a package but not show them to your subscribers. For example, if you're piloting a feature for a few select orgs, and want to hide custom permissions and custom objects related to the pilot feature.
-   **[Best Practices for Feature Management](atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_best_practices.htm)**
    Here are some best practices when working with feature parameters.
-   **[Considerations for Feature Management](atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_considerations.htm)**
    Keep these considerations in mind when working with feature parameters.

## Related Topics

- Feature Parameter Metadata Types and Custom Objects (atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_types_objects.htm)
- Set Up Feature Parameters (atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_feature_parameters_setup.htm)
- Use LMO-to-Subscriber Feature Parameters to Enable and Disable Features (atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_lmo_to_subscriber.htm)
- Track Preferences and Activation Metrics with Subscriber-to-LMO Feature Parameters (atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_subscriber_to_lmo.htm)
- Hide Custom Objects and Custom Permissions in Your Subscribers’ Orgs (atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_hide_custom_objects_permissions.htm)
- Best Practices for Feature Management (atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_best_practices.htm)
- Considerations for Feature Management (atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_considerations.htm)
