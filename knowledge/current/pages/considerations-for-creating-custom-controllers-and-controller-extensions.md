---
title: "Considerations for Creating Custom Controllers and Controller Extensions"
domain: pages
topic: considerations-for-creating-custom-controllers-and-controller-extensions
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:23.254Z
estimatedTokens: 854
keywords: [Considerations, Creating, Custom, Controllers, Controller, Extensions]
---

# Considerations for Creating Custom Controllers and Controller Extensions

> Note the following considerations when creating controller extensions and custom
    controllers.

# Considerations for Creating Custom Controllers and Controller Extensions

Note the following considerations when creating controller extensions and custom controllers.

-   Unless a class has a method defined as webService, custom extension and controller classes and methods are generally defined as public. If a class includes a web service method, it must be defined as global.
-   Use sets, maps, or lists when returning data from the database. This makes your code more efficient because the code makes fewer trips to the database.
-   The Apex governor limits for Visualforce controller extensions and custom controllers are the same as the limits for anonymous block or WSDL methods. For more information about governor limits, see [Execution Governors and Limits](atlas.en-us.pages.meta/pages/pages_apex_governor_limits.htm) in the Appendix.
-   If you’re building a custom controller or controller extension, be careful that you don’t inadvertently expose sensitive data that would normally be hidden from users. Consider using the with sharing keywords on class definitions to enforce permissions. Also be careful using Web services, which are secured as top-level entry points by the profile, but execute in the system context once they are initiated.
-   Apex methods and variables aren’t instantiated in a guaranteed order. For more information, see [Controller Methods](atlas.en-us.pages.meta/pages/pages_controller_methods.htm).
-   You can’t use data manipulation language (DML) operations in a “getxxx” method in a controller. For example, if your controller had a getName method, you could not use insert or update in the method to create an object.
-   You can’t use data manipulation language (DML) operations in a constructor method in a controller.
-   You can’t use the @future annotation in a “getxxx” or “setxxx” method in a controller, or in the constructor for a controller.
-   Primitive Apex data types such as String or Integer are passed by value to the component’s controller.
-   Non-primitive Apex data types such as lists and sObjects are passed by reference to component’s controller. This means that if component’s controller changes the name of an account, the changes are available in page’s controller.
-   Don’t use the PageReference.getContent() or PageReference.getContentAsPDF() methods to retrieve the output of a different Visualforce page with the same controller and controller extensions. Doing so can cause unexpected problems that are difficult to debug. Instead, pass the base URL of the destination page.

    ```

    ```

-   If your org uses person accounts
    -   When referencing an account record’s name field with a custom controller using the <apex:inputField\>, <apex:outputField\>, or <apex:column\> components you must specify isPersonAccount in your query.
    -   If you create a new account and set name, the record will be a business account. If you create a new account and set lastname, it will be a person account.
    -   As a best practice, create a custom name formula field that will render properly for both person accounts and business accounts, then use that field instead of the standard field in your Visualforce pages.
    -   If you plan on including your Visualforce page in a Salesforce AppExchange package, in your controller or controller extension, you cannot explicitly reference fields that exist only in a person account.

## Code Examples

```
new PageReference(Site.getBaseUrl() + 
    '/apex/VisualforcePageName').getContentAsPdf();
```

## Related Topics

- Execution Governors and Limits (atlas.en-us.pages.meta/pages/pages_apex_governor_limits.htm)
- Controller Methods (atlas.en-us.pages.meta/pages/pages_controller_methods.htm)
