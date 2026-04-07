---
title: "Create and Install Packages"
domain: mc-app-development
topic: create-and-install-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:21.394Z
estimatedTokens: 833
keywords: [Install, Packages, installed, package, Marketing, Cloud, account, API, integrations, apps, add, Journey, Builder, Uninstall, Items]
---

> Create an installed package in your Marketing Cloud account to create API integrations, install custom apps, or add custom Journey Builder components.

# Create and Install Packages

Create an installed package in your Marketing Cloud account to create API integrations, install custom apps, or add custom Journey Builder components.

To create and install packages you must have the Installed Package | Administer permission. This permission is automatically applied to the Administrator and Marketing Cloud Administrator system-defined roles. Add the permission for a different role or user in the Administration area.

1.  In Marketing Cloud, go to **Setup | Apps | Installed Packages**.
2.  Click **New**.
3.  Give the package a name and description.
4.  Save the package. After the package is saved, you can view the package details. See Installed Packages Definitions for more information about each field. You see the Package ID, JWT Signing Secret, and Source Account only for packages created in your account.
5.  Under Components, click **Add Component**, and select a component.

    After you add a Marketing Cloud app or API integration component, you can’t remove it.

    -   [API Integration](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/api-integration.htm)
    -   [Marketing Cloud App](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/create-a-mc-app.htm)
    -   [Journey Builder Activity](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/define-jb-extension-app-center.htm)
    -   [Journey Builder Entry Source](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/define-jb-extension-app-center.htm)
    -   [Custom Content Block](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/create-content-block.htm)

> To install a MobilePush app, go to **Marketing Cloud | MobilePush | Administration**.

## Delete Packages

You can delete packages and apps created in an account in your organization. Only users with the Installed Packages | Administer permission and access to the account in which the package was created can delete the package or app. The package or app is deleted from all accounts in the enterprise. To delete a package, navigate to it, and click Delete.

## Install Packages

You can install packages and apps from AppExchange or from an implementation partner. Only users with the Installed Packages | Administer permission and access to all the accounts in the enterprise can install a package or app. The package or app can be installed in all accounts in the enterprise.

## Uninstall Packages

You can uninstall packages and apps installed from AppExchange or an implementation partner. Only users with the Installed Packages | Administer permission and access to all the accounts in the enterprise can uninstall a package or app. The package or app is uninstalled from all accounts in the enterprise.

## Related Items

-   [Installed Packages Definitions](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/installed-packages-definitions.htm)
-   [MobilePush Administration](http://help.marketingcloud.com/en/documentation/mobilepush/administering_your_mobilepush_account/)
-   [Marketing Cloud Roles and Permissions](https://help.salesforce.com/articleView?id=mc_overview_roles_assign_a_role_users_screen.htm&type=5)
-   [List Your App in AppExchange](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/list-app-appexchange.htm)

## Related Topics

- API Integration (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/api-integration.htm)
- Marketing Cloud App (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/create-a-mc-app.htm)
- Journey Builder Activity (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/define-jb-extension-app-center.htm)
- Journey Builder Entry Source (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/define-jb-extension-app-center.htm)
- Custom Content Block (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/create-content-block.htm)
- Installed Packages Definitions (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/installed-packages-definitions.htm)
- List Your App in AppExchange (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/list-app-appexchange.htm)
