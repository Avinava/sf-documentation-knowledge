---
title: "API and Dynamic Apex Access in Packages"
domain: pkg1-dev
topic: api-and-dynamic-apex-access-in-packages
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:24.637Z
estimatedTokens: 1835
keywords: [API, Dynamic, Apex, Access, Packages, Package, components, via, standard, custom, objects, organization, they’re, installed, Considerations]
---

# API and Dynamic Apex Access in Packages

> Apex Package components have access via dynamic
      Apex and the API to standard and custom objects in the organization where they’re
      installed.

# API and Dynamic Apex Access in Packages

Apex Package components have access via dynamic Apex and the API to standard and custom objects in the organization where they’re installed.

API Access is a package setting that controls the dynamic Apex and API access that package components have to standard and custom objects. The setting displays for both the developer and installer on the package detail page. With this setting:

-   The developer of an AppExchange package can restrict API access for a package before uploading it to AppExchange. After it’s restricted, the package components receive Apex and API sessions that are restricted to the custom objects in the package. The developer can also enable access to specific standard objects, and any custom objects in other packages that this package depends on.
-   The installer of a package can accept or reject package access privileges when installing the package to their organization.
-   After installation, an administrator can change Apex and API access for a package at any time. The installer can also enable access on additional objects such as custom objects created in the installer's organization or objects installed by unrelated packages.

There are two possible options for the API Access setting:

-   The default Unrestricted, which gives the package components the same API access to standard objects as the user who is logged in when the component sends a request to the API. Apex runs in system mode. Unrestricted access gives Apex read access to all standard and custom objects.
-   Restricted, which allows the administrator to select which standard objects the components in the package can access. Further, the components in restricted packages can only access custom objects in the current package if the user has the object permissions that provide access to them.

## Considerations for API and Dynamic Apex Access in Packages

By default, dynamic Apex can only access the components with which the code is packaged. To provide access to standard objects not included in the package, the developer must set the API Access.

1.  From Setup, enter Packages in the Quick Find box, then select **Packages**.
2.  Select the package that contains a dynamic Apex that needs access to standard objects in the installing organization.
3.  In the Package Detail related list, click **Enable Restrictions** or Restricted, whichever is available.
4.  Set the access level (Read, Create, Edit, Delete) for the standard objects that the dynamic Apex can access.
5.  Click **Save**.

Choosing Restricted for the API Access setting in a package affects the following:

-   API access in a package overrides the following user permissions:
    -   Author Apex
    -   Customize Application
    -   Edit HTML Templates
    -   Edit Read Only Fields
    -   Manage Billing
    -   Manage Call Centers
    -   Manage Categories
    -   Manage Custom Report Types
    -   Manage Dashboards
    -   Manage Letterheads
    -   Manage Package Licenses
    -   Manage Public Documents
    -   Manage Public List Views
    -   Manage Public Reports
    -   Manage Public Templates
    -   Manage Users
    -   Transfer Record
    -   Use Team Reassignment Wizards
    -   View Setup and Configuration
    -   Weekly Export Data
-   If Read, Create, Edit, and Delete access aren’t selected in the API access setting for objects, users don’t have access to those objects from the package components, even if the user has the Modify All Data and View All Data permissions.
-   A package with Restricted API access can’t create users.
-   Salesforce denies access to Web service and executeanonymous requests from an AppExchange package that has Restricted access.

The following considerations also apply to API access in packages:

-   Workflow rules and Apex triggers fire regardless of API access in a package.
-   If a component is in more than one package in an organization, API access is unrestricted for that component in all packages in the organization regardless of the access setting.
-   If Salesforce introduces a new standard object after you select restricted access for a package, access to the new standard object isn’t granted by default. You must modify the restricted access setting to include the new standard object.
-   When you upgrade a package, changes to the API access are ignored even if the developer specified them, which ensures that the administrator installing the upgrade has full control. Installers must carefully examine the changes in package access in each upgrade during installation and note all acceptable changes. Then, because those changes are ignored, the administrator must manually apply any acceptable changes after installing an upgrade.
-   S-controls are served by Salesforce and rendered inline in Salesforce. Because of this tight integration, there are several means by which an s-control in an installed package could escalate its privileges to the user’s full privileges. In order to protect the security of organizations that install packages, s-controls have the following limitations:
    -   For packages you’re developing (that is, not installed from AppExchange), you can only add s-controls to packages with the default Unrestricted API access. After a package has an s-control, you can’t enable Restricted API access.
    -   For packages you’ve installed, you can enable access restrictions even if the package contains s-controls. However, access restrictions provide only limited protection for s-controls. Salesforce recommends that you understand the JavaScript in an s-control before relying on access restriction for s-control security.
    -   If an installed package has Restricted API access, upgrades are successful only if the upgraded version doesn’t contain any s-controls. If s-controls are present in the upgraded version, you must change the currently installed package to Unrestricted API access.

-   **[Manage API and Dynamic Apex Access in Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/editing_client_security_profile.htm)**
    API Access is a package setting that controls the dynamic Apex and API access that package components have to standard and custom objects. The setting displays for both the developer and installer on the package detail page.
-   **[Configure Default Package Versions for API Calls](atlas.en-us.pkg1_dev.meta/pkg1_dev/dev_api_package_version_settings.htm)**
    You can specify the default package versions for enterprise API and partner API calls.
-   **[About the Partner WSDL](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_partner_wsdl.htm)**
    The Partner Web Services WSDL is used for client applications that are metadata-driven and dynamic in nature. It’s particularly—but not exclusively—useful to Salesforce partners who are building client applications for multiple organizations.
-   **[Generate an Enterprise WSDL with Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/dev_wsdl_enterprise_version.htm)**
    If you’re downloading an enterprise WSDL and you have first-generation managed packages installed in your org, you must take an extra step to select the version of each installed package to include in the generated WSDL.
-   **[Work with Services Outside of Salesforce](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_external_services.htm)**

## Related Topics

- Manage API and Dynamic Apex Access in Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/editing_client_security_profile.htm)
- Configure Default Package Versions for API Calls (atlas.en-us.pkg1_dev.meta/pkg1_dev/dev_api_package_version_settings.htm)
- About the Partner WSDL (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_partner_wsdl.htm)
- Generate an Enterprise WSDL with Managed Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/dev_wsdl_enterprise_version.htm)
- Work with Services Outside of Salesforce (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_external_services.htm)
