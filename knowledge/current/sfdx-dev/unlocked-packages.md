---
title: "Unlocked Packages"
domain: sfdx-dev
topic: unlocked-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.804Z
estimatedTokens: 1452
keywords: [Unlocked, Packages, Salesforce, offers, different, especially, suited, internal, business, apps, Unless, plan, distribute, app, AppExchange]
---

# Unlocked Packages

> Salesforce offers different types of packages, and unlocked packages are especially
  suited for internal business apps. Unless you plan to distribute an app on AppExchange, an
  unlocked package is the right package type for most use cases. You can use unlocked packages to
  organize your existing metadata, package an app, extend an app that you’ve purchased from
  AppExchange, or package new metadata.

# Unlocked Packages

Salesforce offers different types of packages, and unlocked packages are especially suited for internal business apps. Unless you plan to distribute an app on AppExchange, an unlocked package is the right package type for most use cases. You can use unlocked packages to organize your existing metadata, package an app, extend an app that you’ve purchased from AppExchange, or package new metadata.

Unlocked packages follow a source-driven development model. The source of truth of the metadata contained in the package is your version control system, not what’s in an org. This model brings with it all the benefits of modern source-driven development models.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

If you’re an AppExchange partner that plans to distribute your app to customers via AppExchange, use second-generation managed packaging. See [Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp.htm) for more information.

-   **[What’s an Unlocked Package?](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_whats_a_package.htm)**
    If you’re new to packaging, think of a package as a container that you fill with metadata. It contains a set of related features, customizations, and schema. Unlocked packages help you add, edit, and remove metadata in your org in a trackable way. You can apply your metadata to multiple orgs, and upgrade your Salesforce apps easier and faster. Unlocked packages are especially suited for internal business apps.
-   **[Package-Based Development Model](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_pkg_dev.htm)**
    To demonstrate the power of unlocked packages, here’s how packaging works in the traditional development model. For most production orgs, metadata traditionally is contained in two buckets: a set of managed packages installed from AppExchange, and unpackaged metadata.
-   **[Before You Create Unlocked Packages](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_before.htm)**
    When you use unlocked packaging, to be sure that you set it up correctly, verify the following.
-   **[Know Your Orgs](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_before_know_orgs.htm)**
    Some of the orgs that you use with unlocked packaging have a unique purpose.
-   **[Create Org-Dependent Unlocked Packages](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_org_dependent.htm)**
    Org-dependent unlocked packages are a variation of unlocked packages that allow you to create packages that depend on unpackaged metadata in the org where you plan to install the package (installation org).
-   **[Workflow for Unlocked Packages](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_workflow.htm)**
    You can create and install an unlocked package directly from the Salesforce command line.
-   **[Configure Unlocked Packages](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_config.htm)**
    You include an entry in the sfdx-project.json file for each package to specify its alias, version details, dependencies, features, and org settings. From the command line, you can also set or change options, such as specifying an installation key, update the package name, or add a description.
-   **[How We Handle Profile Settings in Unlocked Packages](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_profiles.htm)**
    During package version creation for unlocked or second-generation managed packages, the build system inspects the contents of all profiles in the DX project directory, not just the directory specified in the path, and preserves only the profile settings that are directly related to the metadata in the package. The profile itself, and any profile settings unrelated to the package’s metadata are discarded from the package.
-   **[Develop Unlocked Packages](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_create_pkg.htm)**
    A package is a top-level container that holds important details about the app or package: the package name, description, and associated namespace.
-   **[Push a Package Upgrade for Unlocked Packages](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_push_upgrade.htm)**
    Push upgrades enable you to upgrade packages installed in orgs, without asking org admins to install the upgrade themselves. You can choose which orgs receive a push upgrade, what version the package is upgraded to, and when you want the upgrade to occur. Push upgrades are particularly helpful if you need to push a change for a hot bug fix.
-   **[Install an Unlocked Package](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_install_pkg.htm)**
    Install unlocked packages using the CLI or the browser. You can install package versions in a scratch org, sandbox org, DE org, or production org.
-   **[Migrate Deprecated Metadata from Unlocked Packages](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_migrate_metadata.htm)**
    You can deprecate metadata in an unlocked package, move that metadata to a new package, and then install the new package in your production org.
-   **[Uninstall an Unlocked Package](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_installed_pkgs_uninstall.htm)**
    You can uninstall a package from an org using Salesforce CLI or from the Setup UI. When you uninstall unlocked packages, all components in the package, as well as any deprecated components previously associated with the package, are deleted from the org.
-   **[Transfer an Unlocked Package to a Different Dev Hub](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_unlocked_package_transfer.htm)**
    You can transfer the ownership of an unlocked package from one Dev Hub org to another.

## Related Topics

- What’s an Unlocked Package? (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_whats_a_package.htm)
- Package-Based Development Model (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_pkg_dev.htm)
- Before You Create Unlocked Packages (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_before.htm)
- Know Your Orgs (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_before_know_orgs.htm)
- Create Org-Dependent Unlocked Packages (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_org_dependent.htm)
- Workflow for Unlocked Packages (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_workflow.htm)
- Configure Unlocked Packages (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_config.htm)
- How We Handle Profile Settings in Unlocked Packages (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_profiles.htm)
- Develop Unlocked Packages (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_create_pkg.htm)
- Push a Package Upgrade for Unlocked Packages (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_push_upgrade.htm)
