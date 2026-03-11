---
title: "Deprecate Managed Apex"
domain: apex-guide
topic: deprecate-managed-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.311Z
keywords: [Deprecate, Managed, Apex, Note, See]
---

# Deprecate Managed Apex

# Deprecate Managed Apex

Use the @Deprecated annotation to specify Apex identifiers that can subscribers can no longer reference in subsequent releases of the managed package. Deprecation is useful when you’re refactoring code in managed packages as the requirements evolve.

Apex identifiers include methods, classes, exceptions, enums, interfaces, and variables. After you upload another package version as Managed — Released, new subscribers that install the latest package version can’t see the deprecated identifiers. However, the identifiers still function for existing subscribers and API integrations. As the package developer, you can still reference deprecated identifiers internally.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

You can’t use the @Deprecated annotation in Apex classes or triggers in unmanaged packages.

You can use Managed — Beta package versions for evaluation and feedback with a pilot set of users in different Salesforce orgs. If you deprecate an Apex identifier, and then upload a version of the package as Managed — Beta, subscribers that install the package version still see the deprecated identifier in that package version. If the package developer then uploads a Managed — Released package version, subscribers will no longer see the deprecated identifier in the package version after they install it.

#### See Also

-   [Best Practices for Using Global Apex in Managed Packages](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm "As an independent software vendor (ISV) developer, understand when and how to use global Apex in managed packages. Learn design patterns that maximize flexibility and comply with the strict manageability rules applied to global Apex after your managed package’s release. By following these best practices, you can improve the stability and maintainability of your API.")