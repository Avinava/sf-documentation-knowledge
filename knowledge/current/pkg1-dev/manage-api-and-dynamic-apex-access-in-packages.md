---
title: "Manage API and Dynamic Apex Access in Packages"
domain: pkg1-dev
topic: manage-api-and-dynamic-apex-access-in-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.744Z
estimatedTokens: 1486
keywords: [Manage, API, Dynamic, Apex, Access, Packages, package, setting, components, standard, custom, objects, displays, developer, installer]
---

# Manage API and Dynamic Apex Access in Packages

> API Access is a package setting that controls the dynamic Apex
            and API access that package components have to standard and custom objects. The setting
            displays for both the developer and installer on the package detail page.

# Manage API and Dynamic Apex Access in Packages

API Access is a package setting that controls the dynamic Apex and API access that package components have to standard and custom objects. The setting displays for both the developer and installer on the package detail page.


| User Permissions Needed |
| --- |
| To edit API and dynamic Apex access for a package you’ve created or installed: | Create AppExchange packages |
| To accept or reject package API and dynamic Apex access for a package as part of installation: | Download AppExchange packages |

-   The developer of an AppExchange package can restrict API access for a package before uploading it to AppExchange. After it’s restricted, the package components receive Apex and API sessions that are restricted to the custom objects in the package. The developer can also enable access to specific standard objects, and any custom objects in other packages that this package depends on.
-   The installer of a package can accept or reject package access privileges when installing the package to their organization.
-   After installation, an administrator can change Apex and API access for a package at any time. The installer can also enable access on additional objects such as custom objects created in the installer's organization or objects installed by unrelated packages.

## Setting API and Dynamic Apex Access in Packages

To change package access privileges in a package you or someone in your organization has created:

1.  From Setup, enter Packages in the Quick Find box, then select **Packages**.
2.  Select a package.
3.  The API Access field displays the current setting, Restricted or Unrestricted, and a link to either **Enable Restrictions** or **Disable Restrictions**. If Read, Create, Edit, and Delete access aren’t selected in the API access setting for objects, users don’t have access to those objects from the package components, even if the user has the Modify All Data and View All Data permissions.

    Use the API Access field to:

    -   **Enable Restrictions**— This option is available only if the current setting is Unrestricted. Select this option if you want to specify the dynamic Apex and API access that package components have to standard objects in the installer's organization. When you select this option, the Extended Object Permissions list is displayed. To enable access for each object in the list, select the Read, Create, Edit, or Delete checkboxes. This selection is disabled in some situations. Click **Save** when finished. For more information about choosing the Restricted option, including information about when it’s disabled, see [Considerations for API and Dynamic Apex Access in Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/about_client_security_profile.htm#RestrictedConsider).
    -   **Disable Restrictions**—This option is available only if the current setting is Restricted. Select this option if you don’t want to restrict the Apex and API access privileges that the components in the package have to standard and custom objects. This option gives all the components in the package the same API access as the user who is logged in. For example, if a user can access accounts, an Apex class in the package that accesses accounts would succeed when triggered by that user.
    -   **Restricted**—Click this link if you already restricted API access and wish to edit the restrictions.

## Accepting or Rejecting API and Dynamic Apex Access Privileges during Installation

To accept or reject the API and dynamic Apex access privileges for a package you’re installing:

-   Start the installation process on AppExchange.
-   In **Approve API Access**, either accept by clicking **Next**, or reject by clicking **Cancel**. Complete the installation steps if you haven’t canceled.

## Changing API and Dynamic Apex Access Privileges After Installation

To edit the package API and dynamic Apex access privileges after you’ve installed a package:

1.  From Setup, enter Installed Packages in the Quick Find box, then select **Installed Packages**.
2.  Click the name of the package you wish to edit.
3.  The API Access field displays the current setting, Restricted or Unrestricted, and a link to either **Enable Restrictions** or **Disable Restrictions**. If Read, Create, Edit, and Delete access aren’t selected in the API access setting for objects, users don’t have access to those objects from the package components, even if the user has the Modify All Data and View All Data permissions.

    Use the API Access field to:

    -   **Enable Restrictions**— This option is available only if the current setting is Unrestricted. Select this option if you want to specify the dynamic Apex and API access that package components have to standard objects in the installer's organization. When you select this option, the Extended Object Permissions list is displayed. To enable access for each object in the list, select the Read, Create, Edit, or Delete checkboxes. This selection is disabled in some situations. Click **Save** when finished. For more information about choosing the Restricted option, including information about when it’s disabled, see [Considerations for API and Dynamic Apex Access in Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/about_client_security_profile.htm#RestrictedConsider).
    -   **Disable Restrictions**—This option is available only if the current setting is Restricted. Select this option if you don’t want to restrict the Apex and API access privileges that the components in the package have to standard and custom objects. This option gives all the components in the package the same API access as the user who is logged in. For example, if a user can access accounts, an Apex class in the package that accesses accounts would succeed when triggered by that user.
    -   **Restricted**—Click this link if you have already restricted API access and wish to edit the restrictions.

## Related Topics

- Considerations for API and Dynamic Apex Access in
                                                Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/about_client_security_profile.htm)
