---
title: "Package and Test Your First-Generation Managed Package"
domain: pkg1-dev
topic: package-and-test-your-first-generation-managed-package
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.602Z
estimatedTokens: 1058
keywords: [Package, Test, First-Generation, Managed, how, upload, install, beta, version, part, iterative, development, approach, running, fix]
---

# Package and Test Your First-Generation Managed Package

> Learn how to package, upload, and install a beta version of your first-generation
  managed package as part an iterative development approach. After your beta is up and running,
  learn how to test, fix, extend, and uninstall the package.

# Package and Test Your First-Generation Managed Package

Learn how to package, upload, and install a beta version of your first-generation managed package as part an iterative development approach. After your beta is up and running, learn how to test, fix, extend, and uninstall the package.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Building a new app? Have you considered using second-generation managed packages? Flexible versioning and the ability to share a namespace across packages are just two reasons why developers love creating second-generation managed packages. We think you’d love it, too. To learn more, see: [Why Switch to Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/why_switch_2GP.htm), and [Comparison of First- and Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_comparison.htm).

-   **[Install a Managed Package](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_install.htm)**
    During the development and testing cycle, you might need to periodically install and uninstall packages before you install the next beta. Follow these steps to install a package.
-   **[Install First-Generation Managed Packages Using Metadata API](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_api_introduction.htm)**
    You can install, upgrade, and uninstall managed packages using the Metadata API, instead of the user interface. Automating these repeated tasks can help you can work more efficiently and speed up application development.
-   **[Component Availability After Deployment](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_component_availability.htm)**
    Many components have an **Is Deployed** attribute that controls whether they’re available for end users. After installation, all components are immediately available if they were available in the developer's organization.
-   **[Install Notifications for Unauthorized Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_install_notification.htm)**
    When you distribute a managed package that AppExchange Partner Program hasn’t authorized, we notify customers during the installation process. The notification is removed after the package is approved.
-   **[Resolve Apex Test Failures](atlas.en-us.pkg1_dev.meta/pkg1_dev/resolving_test_failures.htm)**
    Package installs or upgrades may fail for not passing Apex test coverage. However, some of these failures can be ignored. For example, a developer might write an Apex test that makes assumptions about a subscriber's data.
-   **[Run Apex on Package Install/Upgrade](atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_post_install_script.htm)**
    App developers can specify an Apex script to run automatically after a subscriber installs or upgrades a managed package. This script makes it possible to customize the package install or upgrade, based on details of the subscriber’s organization. For instance, you can use the script to populate custom settings, create sample data, send an email to the installer, notify an external system, or kick off a batch operation to populate a new field across a large set of data. For simplicity, you can only specify one post install script. It must be an Apex class that is a member of the package.
-   **[Run Apex on Package Uninstall](atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_uninstall_script.htm)**
    App developers can specify an Apex script to run automatically after a subscriber uninstalls a managed package. This script makes it possible to perform cleanup and notification tasks based on details of the subscriber’s organization. For simplicity, you can only specify one uninstall script. It must be an Apex class that is a member of the package.
-   **[Uninstall a First-Generation Managed Package](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_uninstall.htm)**
    You can uninstall a first-generation managed package from an org using the Setup UI. When you uninstall a first-generation managed package, all components in the package, including any deprecated components that were previously associated with the package, are deleted from the org.

## Related Topics

- Install a Managed Package (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_install.htm)
- Install First-Generation Managed Packages Using Metadata API (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_api_introduction.htm)
- Component Availability After Deployment (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_component_availability.htm)
- Install Notifications for Unauthorized Managed Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_install_notification.htm)
- Resolve Apex Test Failures (atlas.en-us.pkg1_dev.meta/pkg1_dev/resolving_test_failures.htm)
- Run Apex on Package Install/Upgrade (atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_post_install_script.htm)
- Run Apex on Package Uninstall (atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_uninstall_script.htm)
- Uninstall a First-Generation Managed Package (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_uninstall.htm)
