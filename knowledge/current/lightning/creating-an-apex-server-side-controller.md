---
title: "Creating an Apex Server-Side Controller"
domain: lightning
topic: creating-an-apex-server-side-controller
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.614Z
estimatedTokens: 489
keywords: [Creating, Apex, Server-Side, Controller, Developer, Console]
---

# Creating an Apex Server-Side Controller

> Use the Developer Console to create an Apex server-side controller.

# Creating an Apex Server-Side Controller

Use the Developer Console to create an Apex server-side controller.

1.  Open the Developer Console.
2.  Click **File** | **New** | **Apex Class**.
3.  Enter a name for your server-side controller.
4.  Click **OK**.
5.  Enter a method for each server-side action in the body of the class.

    Add the @AuraEnabled annotation to a method to expose it as a server-side action. Additionally, server-side actions must be static methods, and either global or public.

6.  Click **File** | **Save**.
7.  Open the component that you want to wire to the new controller class.
8.  Add a controller system attribute to the <aura:component> tag to wire the component to the controller. For example:

    ```

    ```


#### See Also

-   [*Salesforce Help*: Open the Developer Console](https://help.salesforce.com/HTViewHelpDoc?id=code_dev_console_opening.htm&language=en_US "Salesforce Help: Open the Developer Console - HTML (New Window)")

-   [Returning Data from an Apex Server-Side Controller](atlas.en-us.lightning.meta/lightning/controllers_server_apex_returning_data.htm "Return results from a server-side controller to a client-side controller using the return statement. Results data must be serializable into JSON format.")

-   [AuraEnabled Annotation Annotation](atlas.en-us.lightning.meta/lightning/controllers_server_apex_auraenabled_annotation.htm "The AuraEnabled annotation enables Lightning components to access Apex methods and properties.")

-   [Granting User Access for Apex Classes](atlas.en-us.lightning.meta/lightning/apex_grant_permission.htm "An authenticated or guest user can access an @AuraEnabled Apex method only when the user’s profile or an assigned permission set allows access to the Apex class.")

-   [Apex Class Considerations for Packages](atlas.en-us.lightning.meta/lightning/apps_packaging_apex.htm "Keep these considerations in mind when you develop Apex classes for packages.")

## Code Examples

```
<aura:component controller="SimpleServerSideController">
```

## Related Topics

- Returning Data from an Apex Server-Side Controller (atlas.en-us.lightning.meta/lightning/controllers_server_apex_returning_data.htm)
- AuraEnabled Annotation Annotation (atlas.en-us.lightning.meta/lightning/controllers_server_apex_auraenabled_annotation.htm)
- Granting User Access for Apex Classes (atlas.en-us.lightning.meta/lightning/apex_grant_permission.htm)
- Apex Class Considerations for Packages (atlas.en-us.lightning.meta/lightning/apps_packaging_apex.htm)
