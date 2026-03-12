---
title: "Custom Controllers and Controller Extensions"
domain: pages
topic: custom-controllers-and-controller-extensions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.250Z
estimatedTokens: 644
keywords: [Custom, Controllers, Controller, Extensions, Standard, provide, functionality, Visualforce, because, they, include, logic, Accounts, clicking, Save]
---

# Custom Controllers and Controller Extensions

> Standard controllers can provide all the functionality you need for a Visualforce page
         because they include the same logic that is used for a standard page. For example, if you
         use the standard Accounts controller, clicking a Save button in a
         Visualforce page results in th

# Custom Controllers and Controller Extensions

Standard controllers can provide all the functionality you need for a Visualforce page because they include the same logic that is used for a standard page. For example, if you use the standard Accounts controller, clicking a **Save** button in a Visualforce page results in the same behavior as clicking **Save** on a standard Account edit page.

However, if you want to override existing functionality, customize the navigation through an application, use callouts or Web services, or if you need finer control for how information is accessed for your page, you can write a custom controller or a controller extension using Apex.

-   **[What are Custom Controllers and Controller Extensions?](atlas.en-us.pages.meta/pages/pages_controller_def.htm)**

-   **[Build a Custom Controller](atlas.en-us.pages.meta/pages/pages_controller_custom.htm)**
    A custom controller is an Apex class that uses the default, no-argument constructor for the outer, top-level class.
-   **[Building a Controller Extension](atlas.en-us.pages.meta/pages/pages_controller_extension.htm)**

-   **[Building a Custom List Controller](atlas.en-us.pages.meta/pages/pages_custom_list_controller.htm)**

-   **[Controller Methods](atlas.en-us.pages.meta/pages/pages_controller_methods.htm)**

-   **[Controller Class Security](atlas.en-us.pages.meta/pages/pages_controller_security.htm)**

-   **[Working with Large Sets of Data](atlas.en-us.pages.meta/pages/pages_controller_readonly_context.htm)**

-   **[Considerations for Creating Custom Controllers and Controller Extensions](atlas.en-us.pages.meta/pages/pages_controller_considerations.htm)**
    Note the following considerations when creating controller extensions and custom controllers.
-   **[Order of Execution in a Visualforce Page](atlas.en-us.pages.meta/pages/pages_controller_lifecycle.htm)**

-   **[Test a Custom Controller](atlas.en-us.pages.meta/pages/pages_controller_error_handling.htm)**
    To ensure error-free code, create and execute Apex unit tests for every custom controller and controller extension that you write. Unit tests are class methods that verify whether a particular piece of code works properly. Unit test methods take no arguments, commit no data to the database, and are flagged with the @isTest annotation in the method definition.
-   **[Validation Rules and Custom Controllers](atlas.en-us.pages.meta/pages/pages_controller_validation.htm)**

-   **[Using the transient Keyword Keyword](atlas.en-us.pages.meta/pages/apex_classes_keywords_transient.htm)**

## Related Topics

- What are Custom Controllers and Controller Extensions? (atlas.en-us.pages.meta/pages/pages_controller_def.htm)
- Build a Custom Controller (atlas.en-us.pages.meta/pages/pages_controller_custom.htm)
- Building a Controller Extension (atlas.en-us.pages.meta/pages/pages_controller_extension.htm)
- Building a Custom List Controller (atlas.en-us.pages.meta/pages/pages_custom_list_controller.htm)
- Controller Methods (atlas.en-us.pages.meta/pages/pages_controller_methods.htm)
- Controller Class Security (atlas.en-us.pages.meta/pages/pages_controller_security.htm)
- Working with Large Sets of Data (atlas.en-us.pages.meta/pages/pages_controller_readonly_context.htm)
- Considerations for Creating Custom Controllers and Controller Extensions (atlas.en-us.pages.meta/pages/pages_controller_considerations.htm)
- Order of Execution in a Visualforce Page (atlas.en-us.pages.meta/pages/pages_controller_lifecycle.htm)
- Test a Custom Controller (atlas.en-us.pages.meta/pages/pages_controller_error_handling.htm)
