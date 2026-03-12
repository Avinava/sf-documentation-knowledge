---
title: "Adding Visualforce to a Salesforce AppExchange App"
domain: pages
topic: adding-visualforce-to-a-salesforce-appexchange-app
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.895Z
estimatedTokens: 1003
keywords: [Adding, Visualforce, Salesforce, AppExchange, App, include, pages, components, custom, controllers, creating]
---

# Adding Visualforce to a Salesforce AppExchange App

> You can include Visualforce pages, components, or custom controllers in an app that you are
      creating for AppExchange.

# Adding Visualforce to a Salesforce AppExchange App

You can include Visualforce pages, components, or custom controllers in an app that you are creating for AppExchange.

Unlike Apex classes, the content of a Visualforce page in a managed package is not hidden when the package is installed. However, custom controllers, controller extensions, and custom components are hidden. In addition, custom components can be restricted with the access attribute to run only in your namespace.

Salesforce recommends that you only use managed packages to distribute any Visualforce or Apex components. This recommendation is because managed packages receive a unique namespace that is automatically prepended to the names of your pages, components, classes, methods, variables, and so on. This namespace prefix helps prevent duplicate names in the installer's organization.

Consider the following caveats when you create a package using a Visualforce page:

-   If the access attribute on a component that is included in a managed package is set to global, be aware of the following restrictions:
    -   The access attribute on the component cannot be changed to public.
    -   All required child <apex:attribute\> components (those that have the required attribute set to true) must have the access attribute set to global.
    -   If the default attribute is set on a required child <apex:attribute\>, it cannot be removed or changed.
    -   You cannot add new required child <apex:attribute\> components.
    -   If the access attribute on a child <apex:attribute\> component is set to global, it cannot be changed to public.
    -   If the access attribute on a child <apex:attribute\> component is set to global, the type attribute cannot be changed.
-   When a package with a non-global component is installed, users that view the component in Setup see “Component is not global” instead of the content of the component. In addition, the component is not included in the component reference.
-   If advanced currency management is enabled for an organization that is installing a package, Visualforce pages that use <apex:inputField\> and <apex:outputField\> cannot be installed.
-   Any Apex that is included as part of an AppExchange app must have at least 75% cumulative test coverage. When you upload your package to AppExchange, all tests are run to ensure that they run without errors. The tests are also run when the package is installed.
-   Beginning with version 16.0, if you have a managed global Apex class used as a Visualforce controller, it is also required that the access level be set to global for the following methods and properties for subscribers to use them:
    -   Constructors for custom controllers
    -   Getter and setter methods, including those for input and output components
    -   Get and set attributes on properties

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=pages)

#### Tip

If a custom label has translations, include the translations in a package by explicitly packaging the desired languages.

To prevent malicious code in a package from affecting your data, when a package containing Visualforce pages is installed into an organization, the pages are served from the vf.force.com, domain instead of the salesforce.com domain.

#### See Also

-   [Test a Custom Controller](atlas.en-us.pages.meta/pages/pages_controller_error_handling.htm "To ensure error-free code, create and execute Apex unit tests for every custom controller and controller extension that you write. Unit tests are class methods that verify whether a particular piece of code works properly. Unit test methods take no arguments, commit no data to the database, and are flagged with the @isTest annotation in the method definition.")

-   [*Second-Generation Managed Packaging Developer Guide*: Create a Second-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev_2gp_developing_2gp_packages.htm)

## Related Topics

- Test a Custom Controller (atlas.en-us.pages.meta/pages/pages_controller_error_handling.htm)
