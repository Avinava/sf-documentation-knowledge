---
title: "Create a Beta Package for First-Generation Managed Packages"
domain: pkg1-dev
topic: create-a-beta-package-for-first-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.624Z
estimatedTokens: 1860
keywords: [Beta, Package, First-Generation, Managed, Packages, Follow, procedure, upload, Tooling, API, sample, code, PackageUploadRequest, Developer]
---

# Create a Beta Package for First-Generation Managed Packages

> Follow this procedure to create and upload a beta package through the UI. (You can
    also upload a package using the Tooling API. For sample code and more details, see the
    PackageUploadRequest object in the Tooling API Developer Guide.)

# Create a Beta Package for First-Generation Managed Packages

Follow this procedure to create and upload a beta package through the UI. (You can also upload a package using the Tooling API. For sample code and more details, see the PackageUploadRequest object in the *Tooling API Developer Guide*.)


| User Permissions Needed |
| --- |
| To create packages: | Create AppExchange Packages |
| To upload packages: | Upload AppExchange Packages |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Building a new app? Have you considered using second-generation managed packages? Flexible versioning and the ability to share a namespace across packages are just two reasons why developers love creating second-generation managed packages. We think you’d love it, too. To learn more, see: [Why Switch to Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/why_switch_2GP.htm), and [Comparison of First- and Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_comparison.htm).

1.  Create a package:
    1.  From Setup, enter Package Manager in the Quick Find box, then select **Package Manager**.
    2.  Click **New**.
    3.  Enter a name for your package. You can use a different name than what appears on AppExchange.
    4.  From the dropdown menu, select the default language of all component labels in the package.
    5.  Optionally, choose a custom link from the Configure Custom Link field to display configuration information to installers of your app. You can select a predefined custom link to a URL or s-control that you’ve created for your home page layouts; see the [Configure Option](atlas.en-us.pkg1_dev.meta/pkg1_dev/develop_documentation.htm#ConfigureOption). The custom link displays as a **Configure** link within Salesforce on AppExchange Downloads page and app detail page of the installer's organization.
    6.  Optionally, in the Notify on Apex Error field, enter the username of the person to notify if an uncaught exception occurs in the Apex code. If you don’t specify a username, all uncaught exceptions generate an email notification that is sent to Salesforce. This option is only available for managed packages.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

        #### Note

        Apex can only be packaged from Developer, Enterprise, Unlimited, and Performance Edition organizations.

    7.  Optionally, in the Notify on Packaging Error field, enter the email address of the person who receives an email notification if an error occurs when a subscriber’s attempt to install, upgrade, or uninstall a packaged app fails. This field appears only if packaging error notifications are enabled. To enable notifications, contact your Salesforce representative.
    8.  Optionally, enter a description that describes the package. You can change this description before you upload it to AppExchange.
    9.  Optionally, specify a post install script. You can run an Apex script in the subscriber organization after the package is installed or upgraded. For more information, see [Running Apex on Package Install or Upgrade](atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_post_install_script.htm#apex_post_install_script "App developers can specify an Apex script to run automatically after a subscriber installs or upgrades a managed package. This script makes it possible to customize the package install or upgrade, based on details of the subscriber’s organization. For instance, you can use the script to populate custom settings, create sample data, send an email to the installer, notify an external system, or kick off a batch operation to populate a new field across a large set of data. For simplicity, you can only specify one post install script. It must be an Apex class that is a member of the package.").
    10.  Optionally, specify an uninstall script. You can run an Apex script in the subscriber organization after the package is uninstalled. For more information, see [Running Apex on Package Uninstall](atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_uninstall_script.htm#apex_uninstall_script "App developers can specify an Apex script to run automatically after a subscriber uninstalls a managed package. This script makes it possible to perform cleanup and notification tasks based on details of the subscriber’s organization. For simplicity, you can only specify one uninstall script. It must be an Apex class that is a member of the package.").
    11.  Click **Save**.
2.  Optionally, change the API access privileges. By default, API access is set to Unrestricted, but you can change this setting to further restrict API access of the components in the package.
3.  Add the necessary components for your app.

    1.  Click **Add Components**.
    2.  From the dropdown list, choose the type of component.
    3.  Select the components you want to add.
    4.  Click **Add To Package**.
    5.  Repeat these steps until you added all the components you want in your package.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

    #### Note

    Some related components are automatically included in the package even though they don’t display in the Package Components list. For example, when you add a custom object to a package, its custom fields, page layouts, and relationships with standard objects are automatically included. For a complete list of components, see [Components Automatically Added to First-Generation Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_components_auto_added.htm#packaging_components_auto_added "When adding components to your first-generation managed package, related components are automatically added. For example, if you add a Visualforce page to a package that references a custom controller, that Apex class is also added.").

4.  Optionally, click **View Dependencies** and review a list of components that rely on other components, permissions, or preferences within the package. To return to the Package detail page, click **Done**.
5.  Click **Upload**.
6.  On the Upload Package page, do the following:
    1.  Enter a Version Name, such as Spring ’22. The version name is the marketing name for a specific release of a package and allows you to create a more descriptive title for the version than just a number.
    2.  Enter a Version Number, such as 1.0. For more information on versions, see [Update Your First-Generation Managed Package](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_upgrading.htm "Your app is ready for an update. Learn how to fix small issues with patches and make major changes with upgrades.").
    3.  Select a Release Type of Managed - Beta.
    4.  (Optional) Enter and confirm a password to share the package privately with anyone who has the password. Don't enter a password if you want to make the package available to anyone on AppExchange and share your package publicly.
    5.  Salesforce automatically selects the requirements it finds. In addition, select any other required components from the Package Requirements and Object Requirements sections to notify installers of any requirements for this package.
    6.  Click **Upload**.

After your package has uploaded successfully, you receive an email with an installation link.

## Related Topics

- Configure Option (atlas.en-us.pkg1_dev.meta/pkg1_dev/develop_documentation.htm)
- Running Apex on Package Install or
                        Upgrade (atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_post_install_script.htm)
- Running Apex on Package
                        Uninstall (atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_uninstall_script.htm)
- Components Automatically Added to First-Generation Managed Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_components_auto_added.htm)
- Update Your First-Generation Managed Package (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_upgrading.htm)
