---
title: "Supporting Multiple Editions Using an Extension Package"
domain: packagingGuide
topic: supporting-multiple-editions-using-an-extension-package
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.774Z
estimatedTokens: 669
keywords: [Supporting, Multiple, Editions, Extension, Package, approach, uses, base-managed, core, app, functionality, base, features, Group, Professional]
---

# Supporting Multiple Editions Using an Extension Package

> This approach uses a base-managed package that contains core app functionality. The base
         package only contains features supported in Group and Professional Editions. You then use a
         second managed package, or extension package, that extends and enhances the base package.
         Th

# Supporting Multiple Editions Using an Extension Package

This approach uses a base-managed package that contains core app functionality. The base package only contains features supported in Group and Professional Editions. You then use a second managed package, or extension package, that extends and enhances the base package. The extension package adds more features supported in Enterprise, Unlimited, and Performance Editions. For example, you have a warehouse application that tracks inventory and an extension to this app includes workflow (which isn't available in Group). Your Group and Professional Edition customers can install the base warehouse application, while your other customers install the base package and then the extension package with workflow components.

Using a Base and Extension Package to Support Multiple Editions ![Relationship between base and extension packages](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fbase_extension_package.png&folder=packagingGuide)

Using extension packages enables you to avoid multiple code sets and to upsell your customers. Upgrading a customer only requires installing the extension package.

Here is the process for creating an extension package.

1.  Create your base-managed package that uses features supported by Group and Professional Editions.
2.  Install your base-managed package in a separate Developer Edition org.
3.  In this org, create your extension package that includes more functionality supported in Group and Professional Editions. You can reference the base-managed package to avoid duplicating functionality. Any component that references the base-managed package automatically triggers this package to be an extension package.

Since your extension package depends on your base package, it’s important to spend time designing your app and the interfaces between the packages. For example, if the extension package calls an Apex class in the base package, you must make sure that the desired Apex class is made global.

It’s also important to consider the entire application life cycle. For example, If you want to add new features, include them in the appropriate package. Ensure that updates to the base package do not break the extension package.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

To access history information for custom objects in your extension package, work with the base package owner to enable history tracking in the org for the base package. Enabling history tracking in a base package can result in an error when you install the package and create patch orgs for the extension package.
