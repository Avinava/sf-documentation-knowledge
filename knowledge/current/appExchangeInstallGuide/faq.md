---
title: "FAQ"
domain: appExchangeInstallGuide
topic: faq
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.553Z
estimatedTokens: 1263
keywords: [FAQ, answers, frequently, asked, questions, installing, apps, Lightning, Platform, AppExchange, uninstall, packages, installed, Why, did]
---

# FAQ

> A list of answers to frequently asked questions about installing apps from Lightning
  Platform AppExchange.

# FAQ

A list of answers to frequently asked questions about installing apps from Lightning Platform AppExchange.

## Can I uninstall packages that I installed from AppExchange?

Yes. All your installed packages are listed in the Installed Packages page. You can remove any package by clicking the **Uninstall** link next to the package name.

## Who Can Use AppExchange?

Anyone can browse and test drive AppExchange listings. Salesforce admins and users with the Download AppExchange Packages permission can install AppExchange apps. To publish a listing on AppExchange, a user needs both Create AppExchange Packages and Upload AppExchange Packages permissions.

## Why did my installation or upgrade fail?

An installation can fail for several reasons:

-   The package includes custom objects that will cause your organization to exceed its limit of custom objects.
-   The package includes custom tabs that will cause your organization to exceed its limit of custom tabs.
-   The developer of the package has uploaded a more recent version of the package and has deprecated the version associated with this installation URL. Contact the publisher of the package to get the most recent installation URL.
-   You’re trying to install an extension to a package, and you don't have the base package installed.
-   The package requires that certain components are enabled in your organization, or that required features are enabled in your edition.
-   The package contains Apex code and you are not authorized to run Apex in your organization.
-   The package you’re installing has a failing Apex test.

## Can I customize AppExchange packages?

Yes, all packages are customizable. However, to ensure compatibility with future versions, some aspects of managed packages can't be changed.

## Who can use AppExchange Packages?

If you use an Enterprise, Unlimited, Performance, or Developer Edition organization, you can choose which user profiles have access to the package as part of the installation process. Packages installed in Professional and Group Edition organizations are installed with “Full Access” to all user profiles. However, regardless of Edition, all custom objects are installed in “In Development” mode which hides them from all standard users. Users must have the “Customize Application” permission to view custom objects in “In Development” mode. When you are ready to roll out the package to other users, change the custom object status to “Deployed.”

## How can I upgrade an installed package?

Managed packages are completely upgradeable. Before installing a package, contact the publisher to determine if it’s managed.

## How secure are the components I install?

Salesforce performs periodic security reviews of all publicly listed applications on AppExchange. When installing third party applications with access to data, these applications may have access to other data within the organization where the package was installed. Private listings do not go through a security review and administrators should inspect the application carefully before determining whether it should be installed within their organization.

## What happens to my namespace prefix when I install a package?

A namespace prefix is a globally unique identifier that you can request if you plan to create a managed package. All the components from a managed package that you install from another developer contain the developer's namespace prefix in your organization. Unmanaged packages can have a namespace prefix while they're developed in an org that contains a managed package. This namespace isn’t used outside of the development (publisher) org. If an unmanaged package is installed in an org that has no namespace, then the unmanaged components have no namespace in the subscriber org. If an unmanaged package is installed in an org that has a namespace, then the components get the namespace of the subscriber org.

## Can I reinstall an AppExchange package after uninstalling it?

Yes. You can reinstall a package in the same manner that you installed it.

## When I install a package that’s listed on AppExchange, do custom objects, custom fields, tabs, and apps in the package count against the limits of my Salesforce edition?

Your Salesforce edition is allocated a certain number of custom objects, custom fields, tabs, and other customizations. At the same time, all Salesforce orgs have a total limit on some of these items. If you install a package from AppExchange, its custom objects, custom fields, tabs, and apps don’t count against your edition’s allocation, but they do count against the total limit of your Salesforce org.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=appExchangeInstallGuide)

#### Note

These rules apply only to managed packages that are listed on AppExchange. If you install an unmanaged package or a managed package that’s not publicly listed on AppExchange, its custom objects, custom fields, tabs, and apps count against the allocation for your Salesforce edition.
