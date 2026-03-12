---
title: "Apex Server-Side Controller Overview"
domain: lightning
topic: apex-server-side-controller-overview
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:48.605Z
estimatedTokens: 657
keywords: [Apex, Server-Side, Controller, @AuraEnabled, annotation, enable, access]
---

# Apex Server-Side Controller Overview

> Create a server-side controller in Apex and use the @AuraEnabled annotation to enable access to the controller method.

# Apex Server-Side Controller Overview

Create a server-side controller in Apex and use the @AuraEnabled annotation to enable access to the controller method.

Only methods that you have explicitly annotated with @AuraEnabled are exposed. Calling server-side actions aren’t counted against your org’s API limits. However, your server-side controller actions are written in Apex, and as such are subject to all the usual Apex limits. Apex limits are applied per action.

This Apex controller contains a serverEcho action that prepends a string to the value passed in.

```

```

In addition to using the @AuraEnabled annotation, your Apex controller must follow these requirements.

-   Methods must be static and marked public or global. Non-static methods aren’t supported.
-   If a method returns an object, instance methods that retrieve the value of the object’s instance field must be public.
-   Use unique names for client-side and server-side actions in a component. A JavaScript function (client-side action) with the same name as an Apex method (server-side action ) can lead to hard-to-debug issues. In debug mode, the framework logs a browser console warning about the clashing client-side and server-side action names.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=lightning)

#### Tip

Don’t store component state in your controller (client-side or server-side). Store state in a component’s client-side attributes instead.

For more information, see Classes in the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/ "PDF (New Window)").

#### See Also

-   [Calling a Server-Side Action](atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm "Call a server-side controller action from a client-side controller. In the client-side controller, you set a callback, which is called after the server-side action is completed. A server-side action can return any object containing serializable JSON data.")

-   [Creating an Apex Server-Side Controller](atlas.en-us.lightning.meta/lightning/controllers_server_apex_create.htm "Use the Developer Console to create an Apex server-side controller.")

-   [AuraEnabled Annotation Annotation](atlas.en-us.lightning.meta/lightning/controllers_server_apex_auraenabled_annotation.htm "The AuraEnabled annotation enables Lightning components to access Apex methods and properties.")

-   [Apex Class Considerations for Packages](atlas.en-us.lightning.meta/lightning/apps_packaging_apex.htm "Keep these considerations in mind when you develop Apex classes for packages.")

## Code Examples

```apex
public with sharing class SimpleServerSideController {

    //Use @AuraEnabled to enable client- and server-side access to the method
    @AuraEnabled
    public static String serverEcho(String firstName) {
        return ('Hello from the server, ' + firstName);
    }
}
```

## Related Topics

- Calling a Server-Side Action (atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm)
- Creating an Apex Server-Side Controller (atlas.en-us.lightning.meta/lightning/controllers_server_apex_create.htm)
- AuraEnabled Annotation Annotation (atlas.en-us.lightning.meta/lightning/controllers_server_apex_auraenabled_annotation.htm)
- Apex Class Considerations for Packages (atlas.en-us.lightning.meta/lightning/apps_packaging_apex.htm)
