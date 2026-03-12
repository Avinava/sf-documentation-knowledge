---
title: "What is Visualforce?"
domain: pages
topic: what-is-visualforce
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.724Z
estimatedTokens: 1635
keywords: [Visualforce, framework, developers, build, custom, user, interfaces, hosted, natively, Lightning, Platform, includes, tag-based, markup, language]
---

# What is Visualforce?

> Visualforce is a framework that allows developers to
        build custom user interfaces that can be hosted natively on Lightning Platform. The
        Visualforce framework includes a tag-based markup language similar to HTML. It also has a
        set of server-side “standard controllers” that ma

# What is Visualforce?

Visualforce is a framework that allows developers to build custom user interfaces that can be hosted natively on Lightning Platform. The Visualforce framework includes a tag-based markup language similar to HTML. It also has a set of server-side “standard controllers” that make basic database operations, such as queries and saves, simple to perform.

We recommend using Lightning Web Components over Visualforce to build custom functionality. Lightning web components are lightweight and deliver exceptional performance for your apps and sites. [Learn more about why you should use Lightning Web Components instead of Visualforce.](atlas.en-us.pages.meta/pages/pages_intro_when_use_lwc.htm)

In the Visualforce markup language, each Visualforce tag corresponds to a coarse or fine-grained user interface component, such as page section, a related list, or a field. The behavior of Visualforce components can be controlled by the same logic that is used in standard Salesforce pages. Alternatively, developers can associate their own logic with a controller class written in Apex.

Sample of Visualforce Components and Their Corresponding Tags ![An Apex page with callouts to the apex:page, apex:commandLink, apex:image, apex:relatedList, apex:pageBlock, apex:dataTable, and apex:detail tags](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_intro_sample_tags.jpg&folder=pages)

## What is a Visualforce Page?

Developers can use Visualforce to create a Visualforce page definition. A page definition consists of two primary elements:

-   Visualforce markup
-   A Visualforce controller

## Visualforce Markup

Visualforce markup consists of Visualforce tags, HTML, JavaScript, or any other Web-enabled code embedded within a single <apex:page\> tag. The markup defines the user interface components that are included on the page, and the way they appear.

## Visualforce Controllers

A Visualforce controller is a set of instructions for what happens when a user interacts with components specified in associated Visualforce markup. One type of interaction is when a user clicks a button or link. Controllers also provide access to the data displayed in a page, and can modify component behavior.

A developer can either use a standard controller provided by Lightning Platform, or add custom controller logic with a class written in Apex:

-   A [standard controller](atlas.en-us.pages.meta/pages/pages_controller_std.htm) consists of the same functionality and logic that is used for a standard Salesforce page. For example, if you use the standard Accounts controller, clicking a **Save** button in a Visualforce page results in the same behavior as clicking **Save** on a standard Account edit page.

    If you use a standard controller on a page and the user doesn't have access to the object, the page displays an insufficient privileges error message. Resolve this error by [checking the user's accessibility](atlas.en-us.pages.meta/pages/pages_controller_std_checking_accessibility.htm "If a user has insufficient privileges to view an object, any Visualforce page that uses a controller to render that object is inaccessible. To avoid this error, ensure that your Visualforce components only render if a user has access to the object associated with the controller.") for an object and displaying components appropriately.

-   A [standard list controller](atlas.en-us.pages.meta/pages/pages_controller_sosc_about.htm) enables you to create Visualforce pages that can display or act on a set of records. Examples of existing Salesforce pages that work with a set of records include list pages, related lists, and mass action pages.
-   A custom controller is a class written in Apex that implements all of a page's logic, without leveraging a standard controller. If you use a custom controller, you can define new navigation elements or behaviors, but you must also reimplement any functionality that was already provided in a standard controller.

    Like other Apex classes, custom controllers execute entirely in system mode, in which the object and field-level permissions of the current user are ignored. You can specify whether a user can execute methods in a custom controller based on the user's profile.

-   A controller extension is a class written in Apex that adds to or overrides behavior in a standard or custom controller. Extensions allow you to use the functionality of another controller while adding your own custom logic.

    Standard controllers execute in user mode, in which the permissions, field-level security, and sharing rules of the current user are enforced. Extending a standard controller allows you to build a Visualforce page that respects user permissions. Although the extension class executes in system mode, the standard controller executes in user mode. As with custom controllers, you can specify whether a user can execute methods in a controller extension based on the user's profile.


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Custom controllers and controller extension classes execute in system mode, so they ignore user permissions and field-level security. However, you can choose whether they respect a user's organization-wide defaults, role hierarchy, and sharing rules by using the with sharing keywords in the class definition. For information, see “Using the with sharing, without sharing, and inherited sharing Keywords” in the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm "html (New Window)").

## Where Can Visualforce Pages Be Used?

Developers can use Visualforce pages to:

-   Override standard buttons, such as the **New** button for accounts, or the **Edit** button for contacts
-   Override tab overview pages, such as the Accounts tab home page
-   Define custom tabs
-   Embed components in detail page layouts
-   Create dashboard components or custom help pages
-   Customize, extend, or integrate the sidebars in the Salesforce console (custom console components)
-   Add navigation menu items and actions in the Salesforce mobile app

#### See Also

-   [Build a Custom Controller](atlas.en-us.pages.meta/pages/pages_controller_custom.htm "A custom controller is an Apex class that uses the default, no-argument constructor for the outer, top-level class.")

-   [Building a Controller Extension](atlas.en-us.pages.meta/pages/pages_controller_extension.htm)

## Related Topics

- Learn more about why you should use Lightning
        Web Components instead of Visualforce. (atlas.en-us.pages.meta/pages/pages_intro_when_use_lwc.htm)
- standard
            controller (atlas.en-us.pages.meta/pages/pages_controller_std.htm)
- checking the user's accessibility (atlas.en-us.pages.meta/pages/pages_controller_std_checking_accessibility.htm)
- standard list controller (atlas.en-us.pages.meta/pages/pages_controller_sosc_about.htm)
- Build a Custom Controller (atlas.en-us.pages.meta/pages/pages_controller_custom.htm)
- Building a Controller Extension (atlas.en-us.pages.meta/pages/pages_controller_extension.htm)
