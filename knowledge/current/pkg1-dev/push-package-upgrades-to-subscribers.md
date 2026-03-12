---
title: "Push Package Upgrades to Subscribers"
domain: pkg1-dev
topic: push-package-upgrades-to-subscribers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.658Z
estimatedTokens: 822
keywords: [Push, Package, Upgrades, Subscribers, upgrade, automatically, upgrading, customers, newer, version, feature, ensure, latest, any, number]
---

# Push Package Upgrades to Subscribers

> A push upgrade is a method of automatically upgrading your customers to a newer
      version of your package. This feature can be used to ensure that all your customers are on the
      same or latest version of your package. You can push an upgrade to any number of organizations
      that have installed your managed package.

# Push Package Upgrades to Subscribers

A push upgrade is a method of automatically upgrading your customers to a newer version of your package. This feature can be used to ensure that all your customers are on the same or latest version of your package. You can push an upgrade to any number of organizations that have installed your managed package.

A package subscriber doesn’t need to do anything to receive the push upgrade. The only indication a subscriber receives after a successful push upgrade is that the package’s Version Number on the Package Detail page has a higher value. The developer initiating the push resolves upgrades that fail.

Use the Push Upgrade Exclusion List to exclude specific subscriber orgs from a push upgrade. You can specify up to 500 comma-separated org IDs.

Push upgrades minimize the potential risks and support costs of having multiple subscribers running different versions of your app. You can also automate many post-upgrade configuration steps, further simplifying the upgrade process for your customers.

The push upgrade feature is only available to first- and second-generation managed packages that have passed the AppExchange security review. To enable push upgrades for your managed package, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/). For details on the security review process, see [Pass the AppExchange Security Review](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/security_review_guidelines.htm) in the ISVforce Guide.

-   **[Push Upgrades](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_push_about.htm)**

-   **[Push Upgrade Best Practices](atlas.en-us.pkg1_dev.meta/pkg1_dev/push_upgrade_best_practices.htm)**
    Push Upgrade is one of the most powerful features we provide to our partners. Pushing an upgrade without proper planning and preparation can result in significant customer satisfaction issues. Here are some best practices to consider.
-   **[Assign Access to New and Changed Features in First- and Second-Generation Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/push_upgrade_assigning_access.htm)**
    Determine how to provide existing non-admin users access to new and changed features. By default, any new components included in the push upgrade package version are assigned only to admins.
-   **[Sample Post Install Script for a Push Upgrade for First- and Second-Generation Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/push_upgrade_post_install_script.htm)**
    Automate the assignment of new components to existing users of a package.
-   **[Scheduling Push Upgrades](atlas.en-us.pkg1_dev.meta/pkg1_dev/push_upgrade_scheduling.htm)**
    After you’ve created an updated version of your package, you can automatically deploy it to customers using a push upgrade.
-   **[Enable a Package Subscriber to Restrict Push Upgrades](atlas.en-us.pkg1_dev.meta/pkg1_dev/push_upgrade_customized.htm)**
    In certain scenarios, a Salesforce customer may require the ability to block push upgrades of managed packages that they have installed in their org. Customized push upgrades let Salesforce Partners give customers the ability to restrict push upgrades to a specific customer org for a specific package.

## Related Topics

- Push Upgrades (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_push_about.htm)
- Push Upgrade Best Practices (atlas.en-us.pkg1_dev.meta/pkg1_dev/push_upgrade_best_practices.htm)
- Assign Access to New and Changed Features in First- and Second-Generation Managed Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/push_upgrade_assigning_access.htm)
- Sample Post Install Script for a Push Upgrade for First- and Second-Generation Managed Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/push_upgrade_post_install_script.htm)
- Scheduling Push Upgrades (atlas.en-us.pkg1_dev.meta/pkg1_dev/push_upgrade_scheduling.htm)
- Enable a Package Subscriber to Restrict Push Upgrades (atlas.en-us.pkg1_dev.meta/pkg1_dev/push_upgrade_customized.htm)
