---
title: "Create and Upload a First-Generation Managed Package"
domain: pkg1-dev
topic: create-and-upload-a-first-generation-managed-package
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:35:25.747Z
estimatedTokens: 3710
keywords: [Upload, First-Generation, Managed, Package, procedure, Tooling, API, sample, code, PackageUploadRequest, Developer]
---

# Create and Upload a First-Generation Managed Package

> Use the following procedure to create and upload a managed package through the UI. You
    can also upload a package using the Tooling API. For sample code and more details, see the
    PackageUploadRequest object in the Tooling API Developer Guide.

# Create and Upload a First-Generation Managed Package

Use the following procedure to create and upload a managed package through the UI. You can also upload a package using the Tooling API. For sample code and more details, see the PackageUploadRequest object in the *Tooling API Developer Guide*.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Building a new app? Have you considered using second-generation managed packages? Flexible versioning and the ability to share a namespace across packages are just two reasons why developers love creating second-generation managed packages. We think you’d love it, too. To learn more, see: [Why Switch to Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/why_switch_2GP.htm), and [Comparison of First- and Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_comparison.htm).


| User Permissions Needed |
| --- |
| To create packages: | Create AppExchange Packages |
| To upload packages: | Upload AppExchange Packages |

These steps assume you’ve already created a namespace and beta package. If you’re uploading a beta package for testing, see [Create and Upload a Beta Package](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_upload_beta.htm#packaging_upload_beta "Follow this procedure to create and upload a beta package through the UI. (You can also upload a package using the Tooling API. For sample code and more details, see the PackageUploadRequest object in the Tooling API Developer Guide.)").

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
    9.  Optionally, specify a post install script. You can run an Apex script in the subscriber organization after the package is installed or upgraded. For more information, see [Running Apex on Package Install/Upgrade](atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_post_install_script.htm#apex_post_install_script "App developers can specify an Apex script to run automatically after a subscriber installs or upgrades a managed package. This script makes it possible to customize the package install or upgrade, based on details of the subscriber’s organization. For instance, you can use the script to populate custom settings, create sample data, send an email to the installer, notify an external system, or kick off a batch operation to populate a new field across a large set of data. For simplicity, you can only specify one post install script. It must be an Apex class that is a member of the package.").
    10.  Optionally, specify an uninstall script. You can run an Apex script in the subscriber organization after the package is uninstalled. For more information, see [Running Apex on Package Uninstall](atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_uninstall_script.htm#apex_uninstall_script "App developers can specify an Apex script to run automatically after a subscriber uninstalls a managed package. This script makes it possible to perform cleanup and notification tasks based on details of the subscriber’s organization. For simplicity, you can only specify one uninstall script. It must be an Apex class that is a member of the package.").
    11.  Click **Save**.
2.  Salesforce sets your package API access privileges to Unrestricted. You can change this setting to further restrict API access of Salesforce components in the package. For more information, see [Manage API and Dynamic Apex Access in Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/editing_client_security_profile.htm "API Access is a package setting that controls the dynamic Apex and API access that package components have to standard and custom objects. The setting displays for both the developer and installer on the package detail page.").
3.  Add the necessary components for your app.

    1.  Click **Add Components**.
    2.  From the dropdown list, choose the type of component you want to add to your package.
        -   At the top of the list, click a letter to display the contents of the sorted column that begin with that character.
        -   If available, click the **Next Page** (or **Previous Page**) link to go to the next or previous set of components.
        -   If available, click **fewer** or **more** at the bottom of the list to view a shorter or longer display list.
    3.  Select the components you want to add.
    4.  Click **Add To Package**.
    5.  Repeat these steps until you added all the components you want in your package.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

    #### Note

    Some related components are automatically included in the package even if they don’t display in the Package Components list. For example, when you add a custom object to a package, its custom fields, page layouts, and relationships with standard objects are automatically included.

    When you package a joined report, each block is included in the package. Although the blocks appear in the package as reports, when you click a block, an error message indicates that you have “insufficient privileges” to view the report. This error message is expected behavior. Instead, click the name of the joined report to run it.

4.  Optionally, click **View Dependencies** and review a list of components that rely on other components, permissions, or preferences within the package. An entity can include such things as an s-control, a standard or custom field, or an organization-wide setting like multicurrency. Your package can’t be installed unless the installer has the listed components enabled or installed. For more information on dependencies, see [Understanding Dependencies](atlas.en-us.pkg1_dev.meta/pkg1_dev/about_dependencies.htm "Package dependencies are created when a component references another component, permission, or preference that is required for the component to be valid."). To return to the Package detail page, click **Done**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

    #### Note

    You can’t upload packages that contain any of the following:

    -   Workflow rules or workflow actions (such as field updates or outbound messages) that reference record types.
    -   Reports that reference record types on standard objects.

5.  Click **Upload**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

    #### Note

    If you create a managed package to publish on AppExchange, you must certify your application before you package it. For more information, see [Security Review](https://partners.salesforce.com/s/education/appvendors/Security_Review "HTML (New Window)") on AppExchange.

6.  On the Upload Package page, do the following:
    1.  Enter a Version Name. As a best practice, it's useful to have a short description and the date.
    2.  Enter a Version Number for the upload, such as 1.0. The format is majorNumber.minorNumber.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

        #### Note

        If you’re uploading a new patch version, you can't change the patch number.

        The version number represents a release of a package. This field is required for managed and unmanaged packages. For a managed package, the version number corresponds to a Managed - Released upload. All beta uploads use the same version number until you upload a Managed - Released package version with a new version number.

        For example, the following is a sequence of version numbers for a series of uploads.

        | Upload Sequence | Type | Version Number | Notes |
        | --- | --- | --- | --- |
        | First upload | Managed - Beta | 1.0 | The first Managed - Beta upload. |
        | Second upload | Managed - Released | 1.0 | A Managed - Released upload. The version number doesn’t change. |
        | Third upload | Managed - Released | 1.1 | Note the change of minor release number for the Managed - Released upload. |
        | Fourth upload | Managed - Beta | 2.0 | The first Managed - Beta upload for version number 2.0. Note the major version number update. |
        | Fifth upload | Managed - Released | 2.0 | A Managed - Released upload. The version number doesn’t change. |

    3.  For managed packages, select a Release Type:
        -   Choose Managed - Released to upload an upgradeable version. After upload, some attributes of the metadata components are locked.
        -   Choose Managed - Beta if you want to upload a version of your package to a small sampling of your audience for testing purposes. You can still change the components and upload other beta versions.

            ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

            #### Note

            Beta packages can only be installed in Developer Edition, scratch, or sandbox orgs, and thus can't be pushed to customer orgs.

    4.  Change the Description, if necessary.
    5.  (Optional) Specify a link to release notes for the package. Click **URL** and enter the details in the text field that appears. This link will be displayed during the installation process, and on the Package Details page after installation.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

        #### Note

        As a best practice, point to an external URL, so you can make the information available to customers before the release, and update it independently of the package.

    6.  (Optional) Specify a link to post install instructions for the package. Click **URL** or **Visualforce page** and enter the details in the text field that appears. This link will be displayed on the Package Details page after installation.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

        #### Note

        As a best practice, point to an external URL, so you can update the information independently of the package.

    7.  (Optional) Enter and confirm a password to share the package privately with anyone who has the password. Don't enter a password if you want to make the package available to anyone on AppExchange and share your package publicly.
    8.  Salesforce automatically selects the requirements it finds. In addition, select any other required components from the Package Requirements and Object Requirements sections to notify installers of any requirements for this package.
    9.  Click **Upload**.

You receive an email that includes an installation link when your package has been uploaded successfully.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

-   When using the install URL, the old installer is displayed by default. You can customize the installation behavior by modifying the installation URL you provide your customers.
    -   To access the new installer, append the text &newui=1 to the installation URL.
    -   To access the new installer with the "All Users" option selected by default, append the additional text &p1=full to the installation URL.
-   If you uploaded from your Salesforce production org, notify installers who want to install it in a sandbox org to replace the login.salesforce.com portion of the installation URL with test.salesforce.com.t”

After your upload is complete you can do any of the following.

-   To revert the Managed - Released package version back to Managed - Beta, click **Revert to Beta**.

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pkg1_dev)

    #### Important

    The Revert to Beta option is available only for the latest released package version that is not a patch version. For example, if both package versions 1.0 and 2.0 are released, the Revert to Beta option is available only on the detail page of package version 2.0. To revert the released package version to beta, the package version can’t be installed in any orgs and it can’t be associated with a patch development org. If the package version is installed in any subscriber orgs, uninstall the package version before reverting the version to the beta state. After you revert a package version to beta, when you create a new package version, the new package version number is the highest package version number that’s in the beta state.

-   To change the password option, click **Change Password** link.
-   To prevent new installations of this package while allowing existing installations to continue operating, click **Deprecate**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

    #### Note

    You can’t deprecate the most recent version of a managed package.

    When you deprecate a package, remember to remove it from AppExchange as well.

-   To make a deprecated version available for installation again, click **Undeprecate**.

## Related Topics

- Create and Upload a Beta
          Package (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_upload_beta.htm)
- Configure
                Option (atlas.en-us.pkg1_dev.meta/pkg1_dev/develop_documentation.htm)
- Running Apex on Package Install/Upgrade (atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_post_install_script.htm)
- Running Apex on Package
                Uninstall (atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_uninstall_script.htm)
- Manage API and Dynamic Apex Access in
          Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/editing_client_security_profile.htm)
- Understanding
              Dependencies (atlas.en-us.pkg1_dev.meta/pkg1_dev/about_dependencies.htm)
