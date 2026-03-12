---
title: "Package Dependencies in First-Generation Managed Packages"
domain: pkg1-dev
topic: package-dependencies-in-first-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.642Z
estimatedTokens: 1064
keywords: [Package, Dependencies, First-Generation, Managed, Packages, created, component, references, another, permission, preference]
---

# Package Dependencies in First-Generation Managed Packages

> Package dependencies are created when a component references another component,
    permission, or preference that is required for the component to be valid.

# Package Dependencies in First-Generation Managed Packages

Package dependencies are created when a component references another component, permission, or preference that is required for the component to be valid.

| AppExchange packages and Visualforce are available in: Group, Professional, Enterprise, Performance, Unlimited, and Developer Editions |
| --- |
| Apex available in: Enterprise, Performance, Unlimited, and Developer Editions |


| User Permissions Needed |
| --- |
| To upload packages: | Upload AppExchange Packages |
| To view Visualforce dependencies: | Developer Mode |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Building a new app? Have you considered using second-generation managed packages? Flexible versioning and the ability to share a namespace across packages are just two reasons why developers love creating second-generation managed packages. We think you’d love it, too. To learn more, see: [Why Switch to Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/why_switch_2GP.htm), and [Comparison of First- and Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_comparison.htm).

Packages, Apex classes, Apex triggers, Visualforce components, and Visualforce pages can have dependencies on components within an org. These dependencies are recorded on the Show Dependencies page.

Dependencies are important for packaging because any dependency in a component of a package is considered a dependency of the package as a whole.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

An installer’s organization must meet all dependency requirements listed on the Show Dependencies page or else the installation fails. For example, the installer's org must have divisions enabled to install a package that references divisions.

Dependencies are important for Apex classes or triggers. Any component on which a class or trigger depends must be included with the class or trigger when the code is deployed or packaged.

In addition to dependencies, the operational scope is also displayed on the Show Dependencies page. The operational scope is a table that lists any data manipulation language (DML) operations (such as insert or merge) that Apex executes on a specified object. The operational scope can be used when installing an application to determine the full extent of the application’s database operations.

To view the dependencies and operational scope for a package, Apex class, Apex trigger, or Visualforce page:

1.  Navigate to the appropriate component from Setup.
    -   For packages, enter Packages in the Quick Find box, then select **Packages**.
    -   For Apex classes, enter Apex Classes in the Quick Find box, then select **Apex Classes**.
    -   For Apex triggers, from the management settings for the appropriate object, go to Triggers.
    -   For Visualforce pages, enter Visualforce Pages in the Quick Find box, then select **Visualforce Pages**.
2.  Select the name of the component.
3.  Click **View Dependencies** for a package, or **Show Dependencies** for all other components, to see a list of objects that depend upon the selected component.

If a list of dependent objects displays, click **Fields** to access the field-level detail of the operational scope. The field-level detail includes information, such as whether Apex updates a field. For more information, see [Field Operational Scope](https://help.salesforce.com/articleView?id=field_operational_scope.htm&language=en_US).

Packages, Apex code, and Visualforce pages can depend many components, including but not limited to:

-   Custom field definitions
-   Validation formulas
-   Reports
-   Record types
-   Apex
-   Visualforce pages and components

For example, if a Visualforce page includes a reference to a multicurrency field, such as {!contract.ISO\_code}, that Visualforce page has a dependency on multicurrency. If a package contains this Visualforce page, it also has a dependency on multicurrency. Any organization that wants to install this package must have multicurrency enabled.
