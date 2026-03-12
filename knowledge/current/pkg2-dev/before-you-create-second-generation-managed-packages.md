---
title: "Before You Create Second-Generation Managed Packages"
domain: pkg2-dev
topic: before-you-create-second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:26.982Z
estimatedTokens: 897
keywords: [Second-Generation, Managed, Packages, packaging, sure, correctly, verify]
---

# Before You Create Second-Generation Managed Packages

> When you use second-generation managed packaging, to be sure that you set it up
        correctly, verify the following.

# Before You Create Second-Generation Managed Packages

When you use second-generation managed packaging, to be sure that you set it up correctly, verify the following.

Did you?

-   [Enable Dev Hub and Second-Generation Managed Packaging](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_enable_devhub.htm "HTML (New Window)") in your Partner Business Org (PBO)
-   Install [Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm "HTML (New Window)")
-   [Create and Register Your Namespace for Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_namespace.htm "HTML (New Window)")

Developers who work with managed 2GP packages need a user license and permission set that provides access to the Dev Hub org. See [Limited Access License for Package Developers](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_slalf_pkg_dev.htm) and [Assign Second-Generation Managed Packaging User Permissions](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_user_permission.htm).

-   **[Know Your Orgs for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_before_know_orgs.htm)**
    Some of the orgs that you use with second-generation managed packaging (managed 2GP) have a unique purpose.
-   **[Link a Namespace to a Dev Hub Org](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_reg_namespace.htm)**
    To use a namespace with a scratch org, you must link the Developer Edition org where the namespace is registered to a Dev Hub org.
-   **[Namespaces for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_plan_namespaces.htm)**
    A namespace is a 1–15 character alphanumeric identifier that distinguishes your package and its contents from other packages in your customer’s org. A namespace is assigned to a second-generation managed package (managed 2GP) at the time that it’s created, and can’t be changed.
-   **[Create and Register Your Namespace for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_namespace.htm)**
    With second-generation managed packaging (managed 2GP), you can share a single namespace with multiple packages. Since sharing of code is much easier if your package shares the same namespace, we recommend that you use a single namespace for all of your managed 2GP packages.
-   **[Key Concepts in Second-Generation Managed Packaging](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_key_concepts.htm)**
    Let’s look at some key high-level concepts in second-generation managed packaging (managed 2GP).
-   **[How Manageability Rules and Ancestry Impact Upgrades for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_rules_ancestry_upgrades.htm)**
    Before you dive in and create your first second-generation managed package (managed 2GP), it’s important to understand these concepts, and how they affect each other.
-   **[Which Package Types Can Your Package Depend On?](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_dependency_overview.htm)**
    Both second-generation managed packaging (managed 2GP) and unlocked packaging let you easily develop small interdependent packages and share logic between them. If you design your app to rely on small modular packages, both package creation and package installation are faster, and you’re less likely to hit limits.

## Related Topics

- Know Your Orgs for Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_before_know_orgs.htm)
- Link a Namespace to a Dev Hub Org (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_reg_namespace.htm)
- Namespaces for Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_plan_namespaces.htm)
- Create and Register Your Namespace for Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_namespace.htm)
- Key Concepts in Second-Generation Managed Packaging (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_key_concepts.htm)
- How Manageability Rules and Ancestry Impact Upgrades for Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_rules_ancestry_upgrades.htm)
- Which Package Types Can Your Package Depend On? (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_dependency_overview.htm)
