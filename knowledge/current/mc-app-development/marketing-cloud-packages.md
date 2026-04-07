---
title: "Marketing Cloud Packages"
domain: mc-app-development
topic: marketing-cloud-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:26.111Z
estimatedTokens: 667
keywords: [Marketing, Cloud, Packages, package, container, functionality, something, small, individual, component, large, apps, creating, administer, distribute]
---

# Marketing Cloud Packages

> A package is a container of functionality for something as small as an individual component or as large as a set of related apps. After creating a package, you can administer and distribute it to other users and business units within your account.

# Marketing Cloud Packages

Ensure that you have the Installed Package | Administer permission. This permission is automatically applied to the Administrator and Marketing Cloud Administrator system-defined roles. Add the permission for a role or user under Administration in Setup.

A package is a container of functionality for something as small as an individual component or as large as a set of related apps. After creating a package, you can administer and distribute it to other users and business units within your account.

You can install packages into your Marketing Cloud account, and then configure and manage them. To view the packages installed in business units where you have permission to install and manage packages, go to **Setup | Apps | Installed Packages**.

Each package has one or more components that determine what the package can do. Use packages to create API integrations, install custom apps, or add custom Journey Builder components.

## Example 1 - API Integration Component

You create an integration with a third-party application, which needs access to the Marketing Cloud REST API or SOAP API. To get a client ID and secret, create an installed package with an API Integration component. You can have one API integration per package.

## Example 2 - Marketing Cloud App Component

You create an app outside of Marketing Cloud that you'd like to iFrame into Marketing Cloud. Create an installed package with a Marketing Cloud App component. You can have one Marketing Cloud App per package. If your app needs access to the Marketing Cloud API, create an API Integration component as well.

## Example 3 - Journey Builder Activity Component

You need a custom activity for one of your journeys that kicks off a REST API call in a third-party application. Create an installed package with a Journey Builder Activity component. You can have multiple Journey Builder Activities per package.

## Example 4 - Journey Builder Entry Source Component

You need a custom entry source for one of your journeys that comes via a REST API call from a third-party application. Create an installed package with a Journey Builder Entry Source component. You can have multiple Journey Builder Entry Source per package.

## Example 5 - Custom Content Block Component

Instead of using Content Builder's CKEditor WYSIWYG for HTML editing, you'd like to use a different WYSIWYG, like QuillJS. Create an installed package with a Custom Content Block component.

## Related Items

-   [AppExchange](https://appexchange.salesforce.com/results?filter=15)
-   [Marketing Cloud Roles](https://help.salesforce.com/articleView?id=mc_overview_roles.htm&type=5)
