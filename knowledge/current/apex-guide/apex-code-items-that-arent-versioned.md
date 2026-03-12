---
title: "Apex Code Items That Aren’t Versioned"
domain: apex-guide
topic: apex-code-items-that-arent-versioned
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.656Z
estimatedTokens: 491
keywords: [Apex, Code, Items, Aren’t, Versioned, managed, packages, can’t, changes, reflected, across, package, versions, Additionally, there]
---

# Apex Code Items That Aren’t Versioned

> Some Apex items in managed packages can’t be versioned. The changes that you make to
    these items are reflected across all package versions. Additionally, there are limitations to
    the changes that you can make to some of these items when they are used in Apex code in managed
    packages.

# Apex Code Items That Aren’t Versioned

Some Apex items in managed packages can’t be versioned. The changes that you make to these items are reflected across all package versions. Additionally, there are limitations to the changes that you can make to some of these items when they are used in Apex code in managed packages.

As a package developer, you can add or remove these items from Apex in manage packages.

-   @Future
-   @IsTest
-   with sharing
-   without sharing
-   transient

You can make limited changes to these Apex items in managed packages.

-   private—can be changed to global
-   protected—can be changed to global
-   public—can be changed to global
-   abstract—can be changed to virtual but can’t be removed
-   final—can be removed but can’t be added

You can’t remove or change these Apex items in managed packages.

-   global
-   virtual

You can add the webservice keyword, but once it has been added, it can’t be removed.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

You can’t deprecate webservice methods or variables in managed package code.

If a package upgrade includes an explicit global constructor for a released global class that previously only had an implicit constructor, then the new, explicit constructor will be called from the subscriber. Also, you can’t reduce the access modifier on the default constructor on a released global class in a package. See [Best Practices for Using Global Apex in Managed Packages](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm "As an independent software vendor (ISV) developer, understand when and how to use global Apex in managed packages. Learn design patterns that maximize flexibility and comply with the strict manageability rules applied to global Apex after your managed package’s release. By following these best practices, you can improve the stability and maintainability of your API.").

## Related Topics

- Best Practices for Using Global Apex in Managed
      Packages (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm)
