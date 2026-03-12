---
title: "Create a First-Generation Managed Package Using a UI"
domain: pkg1-dev
topic: create-a-first-generation-managed-package-using-a-ui
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.691Z
estimatedTokens: 1759
keywords: [First-Generation, Managed, Package, goal, build, app, distribute, AppExchange, packages, Packaging, container, fill, metadata, holds, features]
---

# Create a First-Generation Managed Package Using a UI

> If your goal is to build an app and distribute it on AppExchange, you use managed
  packages to do both. Packaging is the container that you fill with metadata, and it holds the set
  of related features, customizations, and schema that make up your app. A package can include many
  different metadata components, and you can package a single component, an app, or
  library.

# Create a First-Generation Managed Package Using a UI

If your goal is to build an app and distribute it on AppExchange, you use managed packages to do both. Packaging is the container that you fill with metadata, and it holds the set of related features, customizations, and schema that make up your app. A package can include many different metadata components, and you can package a single component, an app, or library.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Building a new app? Have you considered using second-generation managed packages? Flexible versioning and the ability to share a namespace across packages are just two reasons why developers love creating second-generation managed packages. We think you’d love it, too. To learn more, see: [Why Switch to Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/why_switch_2GP.htm), and [Comparison of First- and Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_comparison.htm).


| User Permissions Needed |
| --- |
| To create packages: | Create AppExchange Packages |

1.  From Setup, in the Quick Find box, enter Package Manager, and then select **Package Manager**.
2.  Click **New**.
3.  Enter a name for your package. You can use a different name than what appears on AppExchange.
4.  From the dropdown menu, select the default language of all component labels in the package.
5.  (Optional) Choose a custom link from the Configure Custom Link field to display configuration information to installers of your app. You can select a predefined custom link to a URL that you’ve created for your home page layouts; see the [Configure Option](atlas.en-us.pkg1_dev.meta/pkg1_dev/develop_documentation.htm#ConfigureOption). The custom link appears as a **Configure** link within Salesforce on AppExchange Downloads page and app detail page of the installer's organization.
6.  (Optional) In the Notify on Apex Error field, enter the username of the person to notify if an uncaught exception occurs in the Apex code. If you don’t specify a username, all uncaught exceptions generate an email notification that is sent to Salesforce. This option is only available for managed packages.
7.  (Optional) In the Notify on Packaging Error field, enter the email address of the person who receives an email notification if an error occurs when a subscriber’s attempt to install, upgrade, or uninstall a packaged app fails. This field appears only if packaging error notifications are enabled. To enable notifications, [contact Salesforce Partner Support](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/pkg2_feature_enablement.htm).
8.  (Optional) Enable language extension packages. (Beta)
    1.  Under Language Settings, click **Edit**.
    2.  Select Enable Language Extension Package and save your changes.
9.  (Optional) Enter a description that describes the package. You can change this description before you upload it to AppExchange.
10.  (Optional) Specify a post install script. You can run an Apex script in the subscriber organization after the package is installed or upgraded. For more information, see [Running Apex on Package Install/Upgrade](atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_post_install_script.htm#apex_post_install_script "App developers can specify an Apex script to run automatically after a subscriber installs or upgrades a managed package. This script makes it possible to customize the package install or upgrade, based on details of the subscriber’s organization. For instance, you can use the script to populate custom settings, create sample data, send an email to the installer, notify an external system, or kick off a batch operation to populate a new field across a large set of data. For simplicity, you can only specify one post install script. It must be an Apex class that is a member of the package.").
11.  (Optional) Specify an uninstall script. You can run an Apex script in the subscriber organization after the package is uninstalled. For more information, see [Running Apex on Package Uninstall](atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_uninstall_script.htm#apex_uninstall_script "App developers can specify an Apex script to run automatically after a subscriber uninstalls a managed package. This script makes it possible to perform cleanup and notification tasks based on details of the subscriber’s organization. For simplicity, you can only specify one uninstall script. It must be an Apex class that is a member of the package.").
12.  Save your work.

-   **[What Are Beta Versions of Managed Packages?](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_about_beta_packages.htm)**
    A beta package is an early version of a managed package. The purpose of a beta package is to allow the developer to test their application in different Salesforce orgs and to share the app with a pilot set of users for evaluation and feedback.
-   **[Create a Beta Package for First-Generation Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_upload_beta.htm)**
    Follow this procedure to create and upload a beta package through the UI. (You can also upload a package using the Tooling API. For sample code and more details, see the PackageUploadRequest object in the *Tooling API Developer Guide*.)
-   **[Create and Upload a First-Generation Managed Package](atlas.en-us.pkg1_dev.meta/pkg1_dev/uploading_packages.htm)**
    Use the following procedure to create and upload a managed package through the UI. You can also upload a package using the Tooling API. For sample code and more details, see the PackageUploadRequest object in the *Tooling API Developer Guide*.
-   **[Publish Extensions to Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/publish_extensions.htm)**
    An extension is any package, component, or set of components that adds to the functionality of a managed package. An extension requires that the base managed package is installed in the org. For example, if you have built a recruiting app, an extension to this app can include a component for performing background checks on candidates.
-   **[View Package Details in First-Generation Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/isv_viewing_package_details.htm)**
    From Setup, enter Packages in the Quick Find box, then select **Packages**. Click the name of a package to view its details, including added components, whether it’s a managed package, whether the package has been uploaded, and so on.
-   **[Notifications for Package Errors](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_notification.htm)**
    Accurately track failed package installations, upgrades, and uninstallations in subscriber orgs with the Notifications for Package Errors feature. Proactively address issues with managed and unmanaged packages and provide support to subscribers so that they can successfully install and upgrade your apps.

## Related Topics

- Configure
     Option (atlas.en-us.pkg1_dev.meta/pkg1_dev/develop_documentation.htm)
- Running Apex on Package Install/Upgrade (atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_post_install_script.htm)
- Running Apex on Package Uninstall (atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_uninstall_script.htm)
- What Are Beta Versions of Managed Packages? (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_about_beta_packages.htm)
- Create a Beta Package for First-Generation Managed Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_upload_beta.htm)
- Create and Upload a First-Generation Managed Package (atlas.en-us.pkg1_dev.meta/pkg1_dev/uploading_packages.htm)
- Publish Extensions to Managed Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/publish_extensions.htm)
- View Package Details in First-Generation Managed Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/isv_viewing_package_details.htm)
- Notifications for Package Errors (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_notification.htm)
