---
title: "Apex Classes Used in Visualforce Controllers"
domain: pages
topic: apex-classes-used-in-visualforce-controllers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.820Z
estimatedTokens: 761
keywords: [Apex, Classes, Visualforce, Controllers, appendix, includes, system-supplied, building, custom, controller, extensions]
---

# Apex Classes Used in Visualforce Controllers

> This appendix includes information about the system-supplied Apex classes that can be used
      when building custom Visualforce
      controllers and controller extensions.

# Apex Classes Used in Visualforce Controllers

This appendix includes information about the system-supplied Apex classes that can be used when building custom Visualforce controllers and controller extensions.

For more information on custom controllers and extensions, see [Custom Controllers and Controller Extensions](atlas.en-us.pages.meta/pages/pages_controller.htm).

For more information on Apex, see the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/ "Adobe Acrobat PDF (New Window)").

-   **[ApexPages Class](atlas.en-us.pages.meta/pages/apex_methods_system_apexpages.htm)**
    Use ApexPages to add and check for messages associated with the current page, as well as to reference the current page.
-   **[Action Class](atlas.en-us.pages.meta/pages/apex_pages_action.htm)**
    You can use ApexPages.Action to create an action method that you can use in a Visualforce custom controller or controller extension.
-   **[Cookie Class](atlas.en-us.pages.meta/pages/apex_classes_sites_cookie.htm)**
    The Cookie class lets you access cookies for your Salesforce site using Apex.
-   **[IdeaStandardController Class](atlas.en-us.pages.meta/pages/apex_pages_ideastandardcontroller.htm)**
    IdeaStandardController objects offer Ideas-specific functionality in addition to what is provided by the StandardController.
-   **[IdeaStandardSetController Class](atlas.en-us.pages.meta/pages/apex_pages_ideastandardsetcontroller.htm)**
    IdeaStandardSetController objects offer Ideas-specific functionality in addition to what is provided by the StandardSetController.
-   **[KnowledgeArticleVersionStandardController Class](atlas.en-us.pages.meta/pages/apex_pages_knowledgearticleversionstandardcontroller.htm)**
    KnowledgeArticleVersionStandardController objects offer article-specific functionality in addition to what is provided by the StandardController.
-   **[Message Class](atlas.en-us.pages.meta/pages/apex_pages_message.htm)**
    Contains validation errors that occur when the user saves the page that uses a standard controller.
-   **[PageReference Class](atlas.en-us.pages.meta/pages/apex_system_pagereference.htm)**
    A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.
-   **[SelectOption Class](atlas.en-us.pages.meta/pages/apex_pages_selectoption.htm)**
    A SelectOption object specifies one of the possible values for a Visualforce selectCheckboxes, selectList, or selectRadio component.
-   **[StandardController Class](atlas.en-us.pages.meta/pages/apex_pages_standardcontroller.htm)**
    Use a StandardController when defining an extension for a standard controller.
-   **[StandardSetController Class](atlas.en-us.pages.meta/pages/apex_pages_standardsetcontroller.htm)**
    StandardSetController objects allow you to create list controllers similar to, or as extensions of, the pre-built Visualforce list controllers provided by Salesforce.

## Related Topics

- Custom Controllers and Controller
        Extensions (atlas.en-us.pages.meta/pages/pages_controller.htm)
- ApexPages Class (atlas.en-us.pages.meta/pages/apex_methods_system_apexpages.htm)
- Action Class (atlas.en-us.pages.meta/pages/apex_pages_action.htm)
- Cookie Class (atlas.en-us.pages.meta/pages/apex_classes_sites_cookie.htm)
- IdeaStandardController Class (atlas.en-us.pages.meta/pages/apex_pages_ideastandardcontroller.htm)
- IdeaStandardSetController Class (atlas.en-us.pages.meta/pages/apex_pages_ideastandardsetcontroller.htm)
- KnowledgeArticleVersionStandardController Class (atlas.en-us.pages.meta/pages/apex_pages_knowledgearticleversionstandardcontroller.htm)
- Message Class (atlas.en-us.pages.meta/pages/apex_pages_message.htm)
- PageReference Class (atlas.en-us.pages.meta/pages/apex_system_pagereference.htm)
- SelectOption Class (atlas.en-us.pages.meta/pages/apex_pages_selectoption.htm)
