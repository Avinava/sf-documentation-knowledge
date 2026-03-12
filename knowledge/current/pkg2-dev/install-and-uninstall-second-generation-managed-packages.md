---
title: "Install and Uninstall Second-Generation Managed Packages"
domain: pkg2-dev
topic: install-and-uninstall-second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.079Z
estimatedTokens: 980
keywords: [Install, Uninstall, Second-Generation, Managed, Packages, disposable, scratch, org, test, 2GP, package, Salesforce, CLI, command, Setup]
---

# Install and Uninstall Second-Generation Managed Packages

> Use a disposable scratch org to test your second-generation managed packages (managed
  2GP). You can install or uninstall a managed 2GP package using a Salesforce CLI command, or from
  the Setup page. Because you can't upgrade a beta package version, be sure you don't install it in
  a sandbox that you use in your release pipeline, such as UAT or staging.

# Install and Uninstall Second-Generation Managed Packages

Use a disposable scratch org to test your second-generation managed packages (managed 2GP). You can install or uninstall a managed 2GP package using a Salesforce CLI command, or from the Setup page. Because you can't upgrade a beta package version, be sure you don't install it in a sandbox that you use in your release pipeline, such as UAT or staging.

-   **[Use the CLI to Install a Second-Generation Managed Package](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_install_pkg_cli.htm)**
    If you’re working with the Salesforce CLI, you can use the sf package install command to install packages in a scratch org or target subscriber org.
-   **[Use a URL to Install a Second-Generation Managed Package](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_install_pkg_ui.htm)**
    Install a second-generation managed package from a browser.
-   **[Install Notifications for Unauthorized Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_install_notification.htm)**
    When you distribute a managed package that AppExchange Partner Program hasn’t authorized, we notify customers during the installation process. The notification is removed after the package is approved.
-   **[Upgrade a Second-Generation Managed Package Version](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_install_pkg_upgrade.htm)**
    A package upgrade occurs when you install a new package version into an org that has a previous version of that package installed.
-   **[Resolve Apex Test Failures](atlas.en-us.pkg2_dev.meta/pkg2_dev/resolving_test_failures.htm)**
    Package installs or upgrades may fail for not passing Apex test coverage. However, some of these failures can be ignored. For example, a developer might write an Apex test that makes assumptions about a subscriber's data.
-   **[Run Apex on Package Install/Upgrade](atlas.en-us.pkg2_dev.meta/pkg2_dev/apex_post_install_script.htm)**
    App developers can specify an Apex script to run automatically after a subscriber installs or upgrades a managed package. This script makes it possible to customize the package install or upgrade, based on details of the subscriber’s organization. For instance, you can use the script to populate custom settings, create sample data, send an email to the installer, notify an external system, or kick off a batch operation to populate a new field across a large set of data. For simplicity, you can only specify one post install script. It must be an Apex class that is a member of the package.
-   **[Customize Second-Generation Managed Package Installs and Uninstalls Using Scripts](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_customize_installs.htm)**
    Customize a second-generation managed package (managed 2GP) install or upgrade by specifying an Apex post install script to run automatically after a subscriber installs or upgrades a managed 2GP package. You can also specify an Apex uninstall script to run automatically when a subscriber uninstalls a managed 2GP package.
-   **[Sample Script for Installing Second-Generation Managed Packages with Dependencies](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_install_pkg_sample_script.htm)**
    Use this sample script as a basis to create your own script to install second-generation managed packages with dependencies. This script contains a query that finds dependent packages and installs them in the correct dependency order.
-   **[Uninstall a Second-Generation Managed Package](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_installed_pkgs_uninstall.htm)**
    You can uninstall a second-generation managed package from an org using Salesforce CLI or from the Setup UI. When you uninstall second-generation managed packages, all components in the package, including any deprecated components that were previously associated with the package, are deleted from the org.

## Related Topics

- Use the CLI to Install a Second-Generation Managed Package (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_install_pkg_cli.htm)
- Use a URL to Install a Second-Generation Managed Package (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_install_pkg_ui.htm)
- Install Notifications for Unauthorized Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_install_notification.htm)
- Upgrade a Second-Generation Managed Package Version (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_install_pkg_upgrade.htm)
- Resolve Apex Test Failures (atlas.en-us.pkg2_dev.meta/pkg2_dev/resolving_test_failures.htm)
- Run Apex on Package Install/Upgrade (atlas.en-us.pkg2_dev.meta/pkg2_dev/apex_post_install_script.htm)
- Customize Second-Generation Managed Package Installs and Uninstalls Using Scripts (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_customize_installs.htm)
- Sample Script for Installing Second-Generation Managed Packages with Dependencies (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_install_pkg_sample_script.htm)
- Uninstall a Second-Generation Managed Package (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_installed_pkgs_uninstall.htm)
