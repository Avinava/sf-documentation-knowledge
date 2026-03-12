---
title: "Push a Package Upgrade for Second-Generation Managed Packages"
domain: pkg2-dev
topic: push-a-package-upgrade-for-second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:26.925Z
estimatedTokens: 989
keywords: [Push, Package, Upgrade, Second-Generation, Managed, Packages, upgrades, enable, installed, subscriber, orgs, asking, customers, install, themselves]
---

# Push a Package Upgrade for Second-Generation Managed Packages

> Push upgrades enable you to upgrade second-generation managed packages installed in
    subscriber orgs, without asking customers to install the upgrade themselves. You can choose
    which orgs receive a push upgrade, what version the package is upgraded to, and when you want
    the upgrade to occur. Push upgrades are helpful if you need to push a change for a hot bug
    fix.

# Push a Package Upgrade for Second-Generation Managed Packages

Push upgrades enable you to upgrade second-generation managed packages installed in subscriber orgs, without asking customers to install the upgrade themselves. You can choose which orgs receive a push upgrade, what version the package is upgraded to, and when you want the upgrade to occur. Push upgrades are helpful if you need to push a change for a hot bug fix.

Use Salesforce CLI or SOAP API to initiate the push upgrade, track the status of each job, and review error messages if any push upgrades fail.

The push upgrade feature is only available to first- and second-generation managed packages that have passed the AppExchange security review. The CLI push upgrade commands are available to second-generation managed packages and unlocked packages. To enable push upgrades for your managed package, log a case with [Salesforce Partner Support](atlas.en-us.pkg2_dev.meta/pkg2_dev/pkg2_feature_enablement.htm "Certain packaging features can only be enabled by Salesforce Partner Support."). For details on the security review process, see [Pass the AppExchange Security Review](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/security_review_guidelines.htm) in the ISVforce Guide.

| Package Type | Push Upgrade using CLI? | Push Upgrade using API? | Push Upgrade using UI? |
| --- | --- | --- | --- |
| 2GP | Yes | Yes | No |
| 1GP | No | Yes | Yes |
| Unlocked | Yes | Yes | No |

## Push Upgrade Considerations for Second-Generation Managed Packages

-   You can push upgrades to packages that have passed AppExchange security review only.
-   The same manageability rules for package version upgrades are applicable to push upgrades.
-   When a push upgrade is installed, the Apex in package is compiled.
-   Push upgrades can be used even if the package version requires a password.

-   **[Schedule a Push Upgrade Using CLI](atlas.en-us.pkg2_dev.meta/pkg2_dev/push_upgrade_cli.htm)**
    Use Salesforce CLI commands to schedule, abort, or view details about your push upgrade requests. Push upgrades let you upgrade second-generation managed packages installed in subscriber orgs, without asking customers to install the upgrade themselves.
-   **[Schedule a Push Upgrade Using SOAP API for First- and Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/push_upgrade_use_api.htm)**
    After you’ve created an updated version of your package, you can automatically deploy it to customers using a push upgrade.
-   **[Enable a Package Subscriber to Restrict Push Upgrades](atlas.en-us.pkg2_dev.meta/pkg2_dev/push_upgrade_customized.htm)**
    In certain scenarios, a Salesforce customer may require the ability to block push upgrades of managed packages that they have installed in their org. Customized push upgrades let Salesforce Partners give customers the ability to restrict push upgrades to a specific customer org for a specific package.
-   **[Assign Access to New and Changed Features in First- and Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/push_upgrade_assigning_access.htm)**
    Determine how to provide existing non-admin users access to new and changed features. By default, any new components included in the push upgrade package version are assigned only to admins.
-   **[Sample Post Install Script for a Push Upgrade for First- and Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/push_upgrade_post_install_script.htm)**
    Automate the assignment of new components to existing users of a package.
-   **[Push Upgrade Best Practices](atlas.en-us.pkg2_dev.meta/pkg2_dev/push_upgrade_best_practices.htm)**
    Push Upgrade is one of the most powerful features we provide to our partners. Pushing an upgrade without proper planning and preparation can result in significant customer satisfaction issues. Here are some best practices to consider.

## Related Topics

- Salesforce Partner
        Support (atlas.en-us.pkg2_dev.meta/pkg2_dev/pkg2_feature_enablement.htm)
- Schedule a Push Upgrade Using CLI (atlas.en-us.pkg2_dev.meta/pkg2_dev/push_upgrade_cli.htm)
- Schedule a Push Upgrade Using SOAP API for First- and Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/push_upgrade_use_api.htm)
- Enable a Package Subscriber to Restrict Push Upgrades (atlas.en-us.pkg2_dev.meta/pkg2_dev/push_upgrade_customized.htm)
- Assign Access to New and Changed Features in First- and Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/push_upgrade_assigning_access.htm)
- Sample Post Install Script for a Push Upgrade for First- and Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/push_upgrade_post_install_script.htm)
- Push Upgrade Best Practices (atlas.en-us.pkg2_dev.meta/pkg2_dev/push_upgrade_best_practices.htm)
