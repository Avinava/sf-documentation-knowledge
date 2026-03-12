---
title: "Second-Generation Managed Packages"
domain: pkg2-dev
topic: second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:26.975Z
estimatedTokens: 1926
keywords: [Second-Generation, Managed, Packages, packaging, 2GP, ushers, new, way, AppExchange, partners, develop, distribute, manage, their, apps]
---

# Second-Generation Managed Packages

> Second-generation managed packaging (managed 2GP) ushers in a new way for AppExchange
    partners to develop, distribute, and manage their apps and metadata. You can use managed 2GP
    packaging to organize your source, build small modular packages, integrate with your version
    control system, and better utilize your custom Apex code. With version control being the source
    of truth, there are no packaging or patch orgs. You can execute all packaging operations via
    Salesforce CLI, or automate them using scripts. Submit second-generation managed packages for
    security review, and list them on AppExchange.

# Second-Generation Managed Packages

Second-generation managed packaging (managed 2GP) ushers in a new way for AppExchange partners to develop, distribute, and manage their apps and metadata. You can use managed 2GP packaging to organize your source, build small modular packages, integrate with your version control system, and better utilize your custom Apex code. With version control being the source of truth, there are no packaging or patch orgs. You can execute all packaging operations via Salesforce CLI, or automate them using scripts. Submit second-generation managed packages for security review, and list them on AppExchange.

Use managed 2GP to create new managed packages. You can’t currently migrate a first-generation managed package to a second-generation managed package.

Another great way to learn about second-generation managed packages, is by taking the [Second-Generation Managed Packages](https://trailhead.salesforce.com/content/learn/modules/second-generation-managed-packages "HTML (New Window)") Trailhead module.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

Second-generation managed packaging addresses the specific needs of AppExchange partners. If you’re a customer or system integrator and you don’t plan to distribute a package to multiple customers, unlocked packaging is the preferred tool. You can use unlocked packages to organize your existing metadata, package an app or extension, or package new metadata. See [Unlocked Packages](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_intro.htm) for more information.

-   **[What’s a Second-Generation Managed Package?](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_pkg_whats_a_package.htm)**
    If your goal is to build an app and distribute it on AppExchange, you’ll use managed packages to do both. Packaging is the container that you fill with metadata, and it holds the set of related features, customizations, and schema that make up your app. A package can include many different metadata components, and you can package a single component, an app, or library.
-   **[Set Up Your Development Environment](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_dev_environment.htm)**
    Second-generation managed packaging uses Salesforce DX developer tools. Ensure that you have the required tools and orgs installed and enabled.
-   **[Before You Create Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_before.htm)**
    When you use second-generation managed packaging, to be sure that you set it up correctly, verify the following.
-   **[Scratch Orgs and Package Development](atlas.en-us.pkg2_dev.meta/pkg2_dev/dev_hub_intro.htm)**
    Scratch orgs are temporary Salesforce orgs intended for development and automation. They enable source-driven deployments of Salesforce code and metadata. A scratch org is fully configurable, allowing developers to emulate different Salesforce editions with various features and preferences.
-   **[Workflow for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_workflow.htm)**
    You can create and install a second-generation managed package (managed 2GP) directly from the command line.
-   **[Components Available in Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_packageable_components.htm#packaging_packageable_components)**
    Each metadata component that you include in a second-generation managed package has certain rules that determine its behavior in a subscriber org. Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and installed.
-   **[Behavior of Specific Metadata in Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_specific_md_details.htm)**
    Learn how profiles and namespace visibility are handled for second-generation managed packages.
-   **[Develop Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev_2gp_developing_2gp_packages.htm)**
    Ready to get started? Create your first second-generation managed package, and then update and create new versions of your package.
-   **[Install and Uninstall Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_install_upgrade.htm)**
    Use a disposable scratch org to test your second-generation managed packages (managed 2GP). You can install or uninstall a managed 2GP package using a Salesforce CLI command, or from the Setup page. Because you can't upgrade a beta package version, be sure you don't install it in a sandbox that you use in your release pipeline, such as UAT or staging.
-   **[Prepare to Distribute Your Second-Generation Managed Package](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_distribute_package.htm)**
    Before you release a version of your second-generation managed package, ensure that you understand the code coverage requirements, release logistics, and how to publish your app on AppExchange.
-   **[Push a Package Upgrade for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/push_upgrade_intro_2GP.htm)**
    Push upgrades enable you to upgrade second-generation managed packages installed in subscriber orgs, without asking customers to install the upgrade themselves. You can choose which orgs receive a push upgrade, what version the package is upgraded to, and when you want the upgrade to occur. Push upgrades are helpful if you need to push a change for a hot bug fix.
-   **[Advanced Features for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_advanced_topics.htm)**
    After you're comfortable with creating second-generation managed packages, learn about these advanced features to customize your package development processes.
-   **[Best Practices for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_plan_best_practices.htm)**
    We suggest that you follow these best practices when working with second-generation managed packages.
-   **[Manage Licenses for Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/lma_intro.htm)**
    Use the License Management App (LMA) to manage leads and licenses for your AppExchange solutions. By integrating the LMA into your sales and marketing processes, you can better engage with prospects, retain existing customers, and grow your ISV business. The LMA is a managed package that is installed in all partner business orgs (PBO) and includes custom objects that track details on packages, package versions, and licenses.
-   **[Manage Features in Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_fma_manage_features.htm)**
    Take the License Management App (LMA) a step further by extending it with the Feature Management App (FMA).
-   **[Get Started with AppExchange App Analytics](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_intro_2gp.htm)**
    AppExchange App Analytics provides usage data about how subscribers interact with your AppExchange managed packages and packaged components. You can use these details to identify attrition risks, inform feature development decisions, and improve user experience.
-   **[Gaps Between First-Generation and Second-Generation Managed Packaging](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_known_limitations.htm)**
    The following functionality is supported in first-generation managed packaging, and not yet supported in second-generation managed packaging. We’re working to address these feature gaps.

## Related Topics

- What’s a Second-Generation Managed Package? (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_pkg_whats_a_package.htm)
- Set Up Your Development Environment (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_dev_environment.htm)
- Before You Create Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_before.htm)
- Scratch Orgs and Package Development (atlas.en-us.pkg2_dev.meta/pkg2_dev/dev_hub_intro.htm)
- Workflow for Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_workflow.htm)
- Components Available in Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_packageable_components.htm)
- Behavior of Specific Metadata in Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_specific_md_details.htm)
- Develop Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev_2gp_developing_2gp_packages.htm)
- Install and Uninstall Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_install_upgrade.htm)
- Prepare to Distribute Your Second-Generation Managed Package (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_distribute_package.htm)
