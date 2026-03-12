---
title: "AuraEnabled Annotation Annotation"
domain: lightning
topic: auraenabled-annotation-annotation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.611Z
estimatedTokens: 1689
keywords: [AuraEnabled, Annotation, Lightning, components, access, Apex, Component, Security, Caching, Results, Continuations]
---

# AuraEnabled Annotation Annotation

> The AuraEnabled annotation enables Lightning
    components to access Apex methods and properties.

# AuraEnabled Annotation Annotation

The AuraEnabled annotation enables Lightning components to access Apex methods and properties.

The AuraEnabled annotation is overloaded, and is used for two separate and distinct purposes.

-   Use @AuraEnabled on Apex **class static methods** to make them accessible as remote controller actions in your Lightning components.
-   Use @AuraEnabled on Apex **instance methods and properties** to make them serializable when an instance of the class is returned as data from a server-side action.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

-   Don’t mix-and-match these different uses of @AuraEnabled in the same Apex class.
-   Only static @AuraEnabled Apex methods can be called from client-side code. Visualforce-style instance properties and getter/setter methods aren’t available. Use client-side component attributes instead.
-   You can’t use an Apex inner class as a parameter or return value for an Apex method that's called by an Aura component.
-   You can't use the @NamespaceAccessible Apex annotation for an @AuraEnabled Apex method referenced from an Aura component.

## Component Security

In Apex, every method that is annotated @AuraEnabled should be treated as a web service interface. That is, the developer should assume that an attacker can call this method with any parameter, even if the developer's client-side code does not invoke the method or invokes it using only sanitized parameters. For more information, see the [Secure Coding Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.secure_coding_guide.meta/secure_coding_guide/secure_coding_lightning_security.htm "HTML (New Window)").

For API version of 50.0 or higher, you must specify which users can access Apex classes that contain @AuraEnabled methods. For more information, see [Salesforce Developers Blog: Breezing Through the Upcoming @AuraEnabled Critical Update](https://developer.salesforce.com/blogs/2020/08/breezing-through-the-upcoming-auraenabled-critical-update).

## Caching Method Results

To improve runtime performance, set @AuraEnabled(cacheable=true) to cache the method results on the client. To set cacheable=true, a method must only get data. It can’t mutate data.

Marking a method as storable (cacheable) improves your component’s performance by quickly showing cached data from client-side storage without waiting for a server trip. If the cached data is stale, the framework retrieves the latest data from the server. Caching is especially beneficial for users on high latency, slow, or unreliable connections such as 3G networks.

To cache data returned from an Apex method for any component with an API version of 44.0 or higher, you must annotate the Apex method with @AuraEnabled(cacheable=true). For example:

```

```

Prior to API version 44.0, to cache data returned from an Apex method, you had to call setStorable() in JavaScript code on every action that called the Apex method. For API version of 44.0 or higher, you must mark the Apex method as storable (cacheable) and you can get rid of any setStorable() calls in JavaScript code. The Apex annotation approach is better because it centralizes your caching notation for a method in the Apex class.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Client-side storage is automatically configured in Lightning Experience and the Salesforce mobile app. A component shouldn’t assume a cache duration because it may change as we optimize the platform.

## Example

The AccountController.cls Apex class from the [github.com/trailheadapps/lwc-recipes](https://github.com/trailheadapps/lwc-recipes "HTML (New Window)") repo shows how to use @AuraEnabled(cacheable=true).

## Using Continuations

Use the Continuation class in Apex to make a long-running request to an external Web service.

Continuations use the @AuraEnabled annotation. Here are the rules for usage.

@AuraEnabled(continuation=true)

An Apex controller method that returns a continuation must be annotated with @AuraEnabled(continuation=true).

@AuraEnabled(continuation=true cacheable=true)

To cache the result of a continuation action, set cacheable=true on the annotation for the Apex callback method.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

There’s a space, **not a comma**, between continuation=true cacheable=true.

#### See Also

-   [Returning Data from an Apex Server-Side Controller](atlas.en-us.lightning.meta/lightning/controllers_server_apex_returning_data.htm "Return results from a server-side controller to a client-side controller using the return statement. Results data must be serializable into JSON format.")

-   [Custom Apex Class Types](atlas.en-us.lightning.meta/lightning/ref_attr_types_apex.htm "An Aura component attribute type can correspond to values held in an Apex class. An attribute type can be a custom Apex class, a List standard Apex class, or a Map standard Apex class. To use values held in other standard Apex classes, first create a custom Apex class, and then copy the needed values from instances of the standard class into your custom class.")

-   [Storable Actions](atlas.en-us.lightning.meta/lightning/controllers_server_storable_actions.htm "Enhance your component’s performance by marking actions as storable (cacheable) to quickly show cached data from client-side storage without waiting for a server trip. If the cached data is stale, the framework retrieves the latest data from the server. Caching is especially beneficial for users on high latency, slow, or unreliable connections such as 3G networks.")

-   [Securing Data in Apex Controllers](atlas.en-us.lightning.meta/lightning/apex_crud_fls.htm "By default, Apex runs in system mode, which means that it runs with substantially elevated permissions, acting as if the user had most permissions and all field- and object-level access granted. Because these security layers aren’t enforced like they are in the Salesforce UI, you must write code to enforce them. Otherwise, your components may inadvertently expose sensitive data that would normally be hidden from users in the Salesforce UI.")

-   [@AuraEnabled Annotations for Continuations](atlas.en-us.lightning.meta/lightning/apex_continuations_auraenabled.htm "Continuations use the @AuraEnabled annotation for Apex code. Here are the rules for usage.")

-   [*Apex Developer Guide*: NamespaceAccessible Annotation](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm "Apex Developer Guide: NamespaceAccessible Annotation - HTML (New Window)")

## Code Examples

```apex
@AuraEnabled(cacheable=true)
public static Account getAccount(Id accountId) {
    // your code here
}
```

## Related Topics

- Returning Data from an Apex Server-Side Controller (atlas.en-us.lightning.meta/lightning/controllers_server_apex_returning_data.htm)
- Custom Apex Class Types (atlas.en-us.lightning.meta/lightning/ref_attr_types_apex.htm)
- Storable Actions (atlas.en-us.lightning.meta/lightning/controllers_server_storable_actions.htm)
- Securing Data in Apex Controllers (atlas.en-us.lightning.meta/lightning/apex_crud_fls.htm)
- @AuraEnabled Annotations for Continuations (atlas.en-us.lightning.meta/lightning/apex_continuations_auraenabled.htm)
