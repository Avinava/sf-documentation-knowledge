---
title: "Install a Managed Package"
domain: pkg1-dev
topic: install-a-managed-package
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.559Z
estimatedTokens: 1998
keywords: [Install, Managed, Package, development, testing, cycle, periodically, uninstall, packages, beta, Follow, steps, Pre-Installation, Installation, Custom]
---

# Install a Managed Package

> During the development and testing cycle, you might need to periodically install and
  uninstall packages before you install the next beta. Follow these steps to install a
  package.

# Install a Managed Package

During the development and testing cycle, you might need to periodically install and uninstall packages before you install the next beta. Follow these steps to install a package.

## Pre-Installation

1.  In a browser, type in the installation URL you received when you uploaded the package.
2.  Enter your username and password for the Salesforce organization in which you want to install the package, and then click **Log In**.
3.  If the package is password-protected, enter the password you received from the publisher.

## Default Installation

Click **Install**. You’ll see a message that describes the progress and a confirmation message after the installation is complete.

## Custom Installation

Follow these steps if you need to modify the default settings, as an administrator.

1.  Choose one or more of these options, as appropriate.
    -   Click **View Components**. You see an overlay with a list of components in the package. For managed packages, the screen also contains a list of connected apps (trusted applications that are granted access to a user's Salesforce data after the user and the application are verified). To confirm that the components and any connected apps shown are acceptable, review the list and then close the overlay.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

        #### Note

        Some package items, such as validation rules, record types, or custom settings don’t appear in the Package Components list but are included in the package and installed with the other items. If there are no items in the Package Components list, it’s likely that the package contains only minor changes.

    -   If the package contains a remote site setting, you must approve access to websites outside of Salesforce. The dialog box lists all the websites that the package communicates with. We recommend that a website uses SSL (secure sockets layer) for transmitting data. After you verify that the websites are safe, select **Yes, grant access to these third-party websites** and click **Continue**, or click **Cancel** to cancel the installation of the package.

        ![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=pkg1_dev)

        #### Warning

        By installing remote site settings, you’re allowing the package to transmit data to and from a third-party website. Before using the package, contact the publisher to understand what data is transmitted and how it's used. If you have an internal security contact, ask the contact to review the application so that you understand its impact before use.

    -   Click **API Access**. You see an overlay with a list of the API access settings that package components have been granted. Review the settings to verify they’re acceptable, and then close the overlay to return to the installer screen.
    -   In Enterprise, Performance, Unlimited, and Developer Editions, choose one of the following security options.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

        #### Note

        This option is visible only in specific types of installations. For example, in Group and Professional Editions, or if the package doesn’t contain a custom object, Salesforce skips this option, which gives all users full access.

        Install for Admins Only

        Specifies the following settings on the installing administrator’s profile and any profile with the "Customize Application" permission.

        -   Object permissions—Read, Create, Edit, Delete, View All Records, and Modify All Records enabled
        -   Field-level security—set to visible and editable for all fields
        -   Apex classes—enabled
        -   Visualforce pages—enabled
        -   App settings—enabled
        -   Tab settings—determined by the package developer
        -   Page layout settings—determined by the package developer
        -   Record Type settings—determined by the package developer

        After installation, if you have Enterprise, Performance, Unlimited, or Developer Edition, set the appropriate user and object permissions on custom profiles as needed.

        Install for All Users

        Specifies the following settings on all internal custom profiles.

        -   Object permissions— Read, Create, Edit, and Delete enabled
        -   Field-level security—set to visible and editable for all fields
        -   Apex classes—enabled
        -   Visualforce pages—enabled
        -   App settings—enabled
        -   Tab settings—determined by the package developer
        -   Page layout settings—determined by the package developer
        -   Record Type settings—copied from admin profile

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

        #### Note

        The Customer Portal User, Customer Portal Manager, High Volume Customer Portal, Authenticated Website, Partner User, and standard profiles receive no access.

        Install for Specific Profiles...

        Lets you determine package access for all custom profiles in your org. You can set each profile to have full access or no access for the new package and all its components.

        -   Full Access—Specifies the following settings for each profile.
            -   Object permissionsRead, Create, Edit, and Delete enabled
            -   Field-level security—set to visible and editable for all fields
            -   Apex classes—enabled
            -   Visualforce pages—enabled
            -   App settings—enabled
            -   Tab settings—enabled
            -   Page layout settings—determined by the package developer
            -   Record Type settings—determined by the package developer
        -   No Access—Page layout and Record Type settings are determined by the package developer. All other settings are hidden or disabled.

        If the package developer has included settings for custom profiles, you can incorporate the settings of the publisher’s custom profiles into your profiles without affecting your settings. Choose the name of the profile settings in the dropdown list next to the profile that you’re applying them to. The current settings in that profile remain intact.

        Alternatively, click **Set All** next to an access level to give this setting to all user profiles.

2.  Click **Install**. You’ll see a message that describes the progress and a confirmation message after the installation is complete.

## Post-Installation Steps

If the package includes post-installation instructions, they’re displayed after the installation is completed. Review and follow the instructions provided. In addition, before you deploy the package to your users, make any necessary changes for your implementation. Depending on the contents of the package, some of the following customization steps are required.

-   If the package includes permission sets, assign the included permission sets to your users who need them. In managed packages, you can't edit permission sets that are included in the package, but subsequent upgrades happen automatically. If you clone a permission set that comes with a managed package or create your own, you can edit the permission set, but subsequent upgrades won't affect it.
-   If you’re reinstalling a package and need to reimport the package data by using the export file that you received after uninstalling, see [Import Package Data](https://help.salesforce.com/s/articleView?id=xcloud.distribution_reimport_package_data.htm&type=5&language=en_US).
-   If you installed a managed package, click **Manage Licenses** to assign licenses to users.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

    #### Note

    You can’t assign licenses in Lightning Experience. To assign a license, switch to Salesforce Classic.

-   Configure components in the package as required.
