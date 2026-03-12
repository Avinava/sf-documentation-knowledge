---
title: "Package Data Cloud Metadata Components"
domain: pkg2-dev
topic: package-data-cloud-metadata-components
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:26.087Z
estimatedTokens: 854
keywords: [Package, Data, Cloud, Metadata, Components, Utilize, power, apps, including, managed, packages, Working, unique, requirements, Review]
---

# Package Data Cloud Metadata Components

> Utilize the power of Data Cloud in your
  apps by including Data
  Cloud metadata in your managed packages. Working with Data Cloud metadata has some unique
  requirements. Review these details to understand how to work with Data Cloud metadata in your
  packages.

# Package Data Cloud Metadata Components

Utilize the power of Data Cloud in your apps by including Data Cloud metadata in your managed packages. Working with Data Cloud metadata has some unique requirements. Review these details to understand how to work with Data Cloud metadata in your packages.

## Enable Data Cloud for Scratch Orgs

To create scratch orgs or package Data Cloud components, you must have Dev Hub enabled in your Partner Business Org. Then, you can request that Data Cloud for Scratch Orgs be enabled by logging a case with [Salesforce Partner Support](https://partners.salesforce.com). Data Cloud for Scratch Orgs is only available to scratch orgs associated with the Dev Hub in your Partner Business Org.

## Create Dedicated Data Cloud Packages

When creating a managed package with Data Cloud metadata, you must isolate the Data Cloud metadata from the other Salesforce metadata by creating separate packages that contain only Data Cloud metadata. Then create package dependencies between your dedicated Data Cloud package and any related packages.

## Add Data Cloud Metadata to a Data Kit

When packaging Data Cloud metadata, you must add the metadata to a data kit, and then add the data kit to the managed package. Data kits streamline the package creation and installation process. For more details, see [Packages and Data Kits](https://developer.salesforce.com/docs/platform/data-cloud-dev/guide/packages-data-kits.html) in the Data Cloud Developer Guide.

## Data Cloud One Companion Connected Orgs

Packages can’t be installed on orgs that are connected to Data Cloud as Data Cloud One companion orgs. When Data Cloud customers install a managed package containing Data Cloud metadata, they must install the package in their Data Cloud home org. For customers using Data Cloud One, any package installed into data spaces shared with a companion org are automatically installed into the companion org. Companion orgs automatically receive package updates when the package in the home org is upgraded.

These package-related actions can’t be initiated in companion connected orgs, and must instead be initiated in the Data Cloud One home org.

-   Installing a managed package
-   Uninstalling a managed package
-   Deleting package metadata
-   Receiving a package push upgrade

#### See Also

-   [*Data Cloud Developer Guide*: Get Started with Data Cloud Development](https://developer.salesforce.com/docs/platform/data-cloud-dev/guide/get-started.html "Data Cloud Developer Guide: Get Started with Data Cloud Development - HTML (New Window)")

-   [*Data Cloud Developer Guide*: Workflow for Data Cloud Second-Generation Managed Packages](https://developer.salesforce.com/docs/platform/data-cloud-dev/guide/data-cloud-2gp-workflow.html "Data Cloud Developer Guide: Workflow for Data Cloud Second-Generation Managed Packages - HTML (New Window)")

-   [*Data Cloud Developer Guide*: Metadata Components for Data Cloud Cheat Sheet](https://developer.salesforce.com/docs/platform/data-cloud-dev/guide/component-cheatsheet.html "Data Cloud Developer Guide: Metadata Components for Data Cloud Cheat Sheet - HTML (New Window)")

-   [*Salesforce Help*: Connect Salesforce CRM Orgs to Data Cloud](https://help.salesforce.com/s/articleView?id=data.c360_a_connect_salesforce_orgs.htm&type=5&language=en_US "Salesforce Help: Connect Salesforce CRM Orgs to Data Cloud - HTML (New Window)")
