---
title: "Installing Packages"
domain: appExchangeInstallGuide
topic: installing-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:00.561Z
estimatedTokens: 2529
keywords: [Installing, Packages, AppExchange, solution, Salesforce, org, straightforward, install, unmanaged, managed, package, configure, environment, users]
---

# Installing Packages

> Installing an AppExchange solution in your Salesforce org is straightforward. You
    install the solution as an unmanaged or managed package, and then you configure it for your
    environment and users.

# Installing Packages

Installing an AppExchange solution in your Salesforce org is straightforward. You install the solution as an unmanaged or managed package, and then you configure it for your environment and users.

| Available in: Group, Professional, Enterprise, Performance, Unlimited, and Developer Editions |
| --- |


| User Permissions Needed |
| --- |
| To install packages: | Download AppExchange Packages |

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=appExchangeInstallGuide)

#### Warning

If the solution is in a managed package, you can’t change certain Salesforce components after you install them. Managed packages also have a namespace prefix that is prepended to all uniquely named components, such as custom fields. For more information on namespace prefixes, see Register a Namespace Prefix.

Only one person in your organization can install or upload a package at a time.

1.  Go to [AppExchange](https://appexchange.salesforce.com/ "HTML (New Window)").
2.  Browse or search for a solution.
3.  Click **Get It Now** on the solution’s listing page.

    If the listing doesn’t have a **Get It Now** option, it's a partner app that you can download and use outside of Salesforce. For more information, contact the publisher.

4.  Choose a production environment.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=appExchangeInstallGuide)

    #### Note

    **Get It Now** supports package installation in production environments only. To install a package in a sandbox environment, select the **Try It** option.

5.  Enter any requested information, agree to the terms and conditions, and then click **Confirm and Install**.
6.  Enter the requested information.
7.  If the package is password-protected, enter the password you received from the publisher.
8.  Review the package items, and click **Continue**.

    To install a new version of a managed package, review the list of new items included in the upgraded package.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=appExchangeInstallGuide)

    #### Note

    Some package items, such as validation rules or record types, don't display in the Package Item list but are included in the package and install with the other items. If there are no items in the Package Items list, the package contains only minor changes not recorded in the Package Items list.

9.  Review the API access that package components have been granted to ensure that they’re acceptable and, if they are, click **Next**. If they aren’t, click **Cancel**.

    For more information, see About API and Dynamic Apex Access in Packages in Salesforce Help.

10.  When installing unmanaged packages, you can select Resolve Naming Conflicts Automatically.

     When this option is selected, Salesforce changes the name of the component in the package being installed.

11.  In Enterprise, Unlimited, Performance, and Developer Editions, choose a security option, and click **Next**.

     Install for Admins Only

     Specifies the following settings on the installing administrator’s profile and any profile with the Customize Application permission.

     -   Object permissions—Read, Create, Edit, Delete, View All Records, and Modify All Records enabled
     -   Field-level security—set to visible and editable for all fields
     -   Apex classes—enabled
     -   Visualforce pages—enabled
     -   App settings—enabled
     -   Tab settings—determined by the package creator
     -   Page layout settings—determined by the package creator
     -   Record Type settings—determined by the package creator

     After installation, if you have Enterprise, Performance, Unlimited, or Developer Editions, set the appropriate user and object permissions on custom profiles as needed.

     Install for All Users

     Specifies the following settings on all internal custom profiles.

     -   Object permissions—Read, Create, Edit, and Delete enabled
     -   Field-level security—set to visible and editable for all fields
     -   Apex classes—enabled
     -   Visualforce pages—enabled
     -   App settings—enabled
     -   Tab settings—determined by the package creator
     -   Page layout settings—determined by the package creator
     -   Record Type settings—copied from admin profile

     ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=appExchangeInstallGuide)

     #### Note

     The Customer Portal User, Customer Portal Manager, High Volume Customer Portal, Authenticated Website, Partner User, and standard profiles receive no access.

     Install for Specific Profiles

     Enables you to choose the usage access for all custom profiles in your organization. You can set each profile to have full access or no access for the new package and all its components.

     -   Full Access—Specifies the following settings for each profile.
         -   Object permissions—Read, Create, Edit, Delete, View All Records, and Modify All Records enabled
         -   Field-level security—set to visible and editable for all fields
         -   Apex classes—enabled
         -   Visualforce pages—enabled
         -   App settings—enabled
         -   Tab settings—determined by the package creator
         -   Page layout settings—determined by the package creator
         -   Record Type settings—determined by the package creator
     -   No Access—Specifies the same settings as Full Access, *except* all object permissions are disabled.

     If the publisher included settings for custom profiles, other options are available. You can incorporate publisher’s custom profile settings into your profiles without affecting your settings. Choose the name of the profile settings in the dropdown list next to the profile to which you want to apply them. The current settings in that profile remain intact.

     Alternatively, to give this setting to all user profiles, click **Set All** next to an access level.

     ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=appExchangeInstallGuide)

     #### Note

     Depending on the type of installation, it’s possible this option doesn’t appear. For example, in Group and Professional Editions, or if the package doesn’t contain a custom object, Salesforce skips this option, which gives all users full access.

12.  In Enterprise, Unlimited, Performance, and Developer Editions, if you chose **Select security settings**, select the level of access to give users in each profile, and click **Next**.

     Standard options are:

     -   Full Access—Specifies the following settings for each profile.
         -   Object permissions—Read, Create, Edit, Delete, View All Records, and Modify All Records enabled
         -   Field-level security—set to visible and editable for all fields
         -   Apex classes—enabled
         -   Visualforce pages—enabled
         -   App settings—enabled
         -   Tab settings—determined by the package creator
         -   Page layout settings—determined by the package creator
         -   Record Type settings—determined by the package creator
     -   No Access—Specifies the same settings as Full Access, *except* all object permissions are disabled.

     If the publisher included settings for custom profiles, other options are available. You can incorporate the publisher’s custom profile settings into your profiles without affecting your settings. Choose the name of the profile settings in the dropdown list next to the profile to which you want to apply them. The current settings in that profile remain intact.

     Alternatively, to give this setting to all user profiles, click **Set All** next to an access level.

13.  To install all the components in the package you selected, click **Install**.

     ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=appExchangeInstallGuide)

     #### Note

     During installation, Salesforce automatically resolves any references to package components from the source organization. For example, if a custom link in the package refers to a document, the Salesforce Help ID for the document is different after you install it. Salesforce automatically alters the installed custom link to refer to the new ID in your organization. Salesforce also checks and verifies any dependencies. An installer’s organization must meet all dependency requirements listed on the Show Dependencies page or else the installation fails. For example, the installer's organization must have divisions enabled to install a package that references divisions. For more information on package dependencies, see Understanding Dependencies in Salesforce Help.

     When you install a component that contains an Apex script, all unit tests for your organization are run, including the unit tests contained in the new package. If a unit test relies on a component that is initially installed as inactive, such as a workflow rule, this unit test can fail. You can select to install regardless of unit test failures.

     For reasons why Salesforce can prevent an install, see Why did my installation or upgrade fail? in Salesforce Help.

14.  Click **OK**.
15.  Configure your package. For more information, see Configuring Installed Packages in Salesforce Help.
16.  If the package includes permission sets, assign the included permission sets to your users who need them.

     In managed packages, you can't edit permission sets that are included in the package, but subsequent upgrades happen automatically. If you clone a permission set that comes with a managed package or create your own, you can make changes to the permission set, but subsequent upgrades don't affect it.

17.  If you’re reinstalling a package, see Importing Package Data in Salesforce Help to reimport the package data using the export file you received after uninstalling.
18.  If you installed a managed package, click **Manage Licenses** to assign licenses to users. For more information, see Managing Licenses for Installed Packages in Salesforce Help.
