---
title: "Advanced Features for Second-Generation Managed Packages"
domain: pkg2-dev
topic: advanced-features-for-second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:26.979Z
estimatedTokens: 1565
keywords: [Advanced, Features, Second-Generation, Managed, Packages, you're, comfortable, creating, customize, package, development, processes]
---

# Advanced Features for Second-Generation Managed Packages

> After you're comfortable with creating second-generation managed packages, learn about
  these advanced features to customize your package development processes.

# Advanced Features for Second-Generation Managed Packages

After you're comfortable with creating second-generation managed packages, learn about these advanced features to customize your package development processes.

-   **[Package Ancestors for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_package_ancestor_intro.htm)**
    Second-generation managed packaging (managed 2GP) offers a flexible package versioning model that lets you break your linear versioning and abandon a package version you no longer want to build upon. We call these versioning decisions *package ancestry*.
-   **[Patch Versions for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_patch_version.htm)**
    Patch versions are a way to fix small issues with your second-generation managed package without introducing major feature changes. Customers who are using an older version of your package can install a patch and not be forced to upgrade to a new major package version.
-   **[Create Dependencies Between Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_dependencies.htm)**
    To avoid monolithic package development practices, plan to develop smaller, modular packages that group similar functionality and components. You can then define the dependencies between these packages. A package dependency is when metadata contained in one package depends on metadata contained in another package. For example, defining dependencies allow you to extend the functionality of a base package with components and metadata located in a separate package.
-   **[Considerations for Promoting Packages with Dependencies](atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_considerations_pkg_dependency.htm)**
    If your company is developing a package that has a package dependency, ask yourself these questions before promoting (releasing) a new package version.
-   **[Advanced Project Configuration Parameters for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_adv_config_file.htm)**
    As your managed 2GP package development becomes more complex, consider including these optional parameters in your sfdx-project.json file.
-   **[Second-Generation Managed Packaging Keywords](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_keywords.htm)**
    A keyword is a variable that you can use to specify a package version number.
-   **[Target a Specific Release for Your Second-Generation Managed Packages During Salesforce Release Transitions](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_target_release_version.htm)**
    During major Salesforce release transitions, you can specify preview or previous when creating a package version. Specifying the release version for a package allows you to test upcoming features, run regression tests, and support customers regardless of which Salesforce release their org is on. Previously, you could only create package versions that matched the Salesforce release your Dev Hub org was on.
-   **[Use Branches in Second-Generation Managed Packaging](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_use_branches.htm)**
    Development teams who use branches in their source control system (SCS), often build package versions based on the metadata in a particular branch of code.
-   **[Specify Unpackaged Metadata or Apex Access for Package Version Creation Tests for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_unpackaged_md.htm)**
    For scenarios where you require metadata that isn’t part of your second-generation managed package, but is necessary for Apex test runs, you can specify the path containing unpackaged metadata in the sfdx-project.json file. The unpackaged metadata isn’t included in the package and isn’t installed in subscriber orgs.
-   **[Package IDs and Aliases for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_plan_pkg_types_pkg_ids.htm)**
    During the package lifecycle, packages and package versions are identified by an ID or package alias. When you create a second-generation managed package or package version, Salesforce CLI creates a package alias based on the package name, and stores that name in the packageAliases section of the sfdx-project.json file. When you run CLI commands or write scripts to automate packaging workflows, it’s often easier to reference the package alias, instead of the package ID or package version ID.
-   **[Avoid Namespace Collisions in Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_namespace_collisions.htm)**
    Namespaces impact the combination of package types that you can install in an org.
-   **[Remove Metadata Components from Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm)**
    Remove metadata components such as Apex classes that you no longer want in your second-generation managed packages.
-   **[Delete a Second-Generation Managed Package or Package Version](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_package_deletion.htm)**
    Use the sf package version delete and sf package delete commands to delete packages and package versions that you no longer need.
-   **[Frequently Used Packaging Operations for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_packaging_operations.htm)**

-   **[Transfer a Second-Generation Managed Package to a Different Dev Hub](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_package_transfer.htm)**
    You can transfer the ownership of a second-generation managed package (managed 2GP) from one Dev Hub org to another. These transfers can occur either internally between two Dev Hub orgs your company owns, or you can transfer a package externally to another Salesforce Partner or ISV. This change provides a way to sell a second-generation managed package to a different company.
-   **[Contact Salesforce Partner Support to Enable Specific Packaging Features](atlas.en-us.pkg2_dev.meta/pkg2_dev/pkg2_feature_enablement.htm)**
    Certain packaging features can only be enabled by Salesforce Partner Support.

## Related Topics

- Package Ancestors for Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_package_ancestor_intro.htm)
- Patch Versions for Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_patch_version.htm)
- Create Dependencies Between Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_dependencies.htm)
- Considerations for Promoting Packages with Dependencies (atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_considerations_pkg_dependency.htm)
- Advanced Project Configuration Parameters for Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_adv_config_file.htm)
- Second-Generation Managed Packaging Keywords (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_keywords.htm)
- Target a Specific Release for Your Second-Generation Managed Packages During Salesforce Release Transitions (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_target_release_version.htm)
- Use Branches in Second-Generation Managed Packaging (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_use_branches.htm)
- Specify Unpackaged Metadata or Apex Access for Package Version Creation Tests for Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_unpackaged_md.htm)
- Package IDs and Aliases for Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_plan_pkg_types_pkg_ids.htm)
