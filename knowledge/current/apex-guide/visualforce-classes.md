---
title: "Visualforce Classes"
domain: apex-guide
topic: visualforce-classes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.368Z
keywords: [Visualforce, Classes]
---

# Visualforce Classes

# Visualforce Classes

In addition to giving developers the ability to add business logic to Salesforce system events such as button clicks and related record updates, Apex can also be used to provide custom logic for Visualforce pages through custom Visualforce controllers and controller extensions.

-   A custom controller is a class written in Apex that implements all of a page's logic, without leveraging a standard controller. If you use a custom controller, you can define new navigation elements or behaviors, but you must also reimplement any functionality that was already provided in a standard controller.
    
    Like other Apex classes, custom controllers execute entirely in system mode, in which the object and field-level permissions of the current user are ignored. You can specify whether a user can execute methods in a custom controller based on the user's profile.
    
-   A controller extension is a class written in Apex that adds to or overrides behavior in a standard or custom controller. Extensions allow you to leverage the functionality of another controller while adding your own custom logic.
    
    Because standard controllers execute in user mode, in which the permissions, field-level security, and sharing rules of the current user are enforced, extending a standard controller allows you to build a Visualforce page that respects user permissions. Although the extension class executes in system mode, the standard controller executes in user mode. As with custom controllers, you can specify whether a user can execute methods in a controller extension based on the user's profile.
    

You can use these system-supplied Apex classes when building custom Visualforce controllers and controller extensions.

-   Action
-   Dynamic Component
-   IdeaStandardController
-   IdeaStandardSetController
-   KnowledgeArticleVersionStandardController
-   Message
-   PageReference
-   SelectOption
-   StandardController
-   StandardSetController

In addition to these classes, the transient keyword can be used when declaring methods in controllers and controller extensions. For more information, see [Using the transient Keyword](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_transient.htm).

For more information on Visualforce, see the [Visualforce Developer's Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/ "html (New Window)").

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_email_inbound_using.htm "Using the InboundEmail Object")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_invoking_javascript_remoting.htm "JavaScript Remoting")