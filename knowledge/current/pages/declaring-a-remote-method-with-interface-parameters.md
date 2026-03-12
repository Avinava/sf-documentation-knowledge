---
title: "Declaring a Remote Method with Interface Parameters"
domain: pages
topic: declaring-a-remote-method-with-interface-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.781Z
estimatedTokens: 443
namespace: RemoteController
keywords: [Declaring, Remote, declare, @RemoteAction, instead, restricted, concrete, classes, package, provider, associated, subscriber, orgs, call, Visualforce]
---

# Declaring a Remote Method with Interface Parameters

> You can declare @RemoteAction methods with interface parameters and return
        types, instead of being restricted to concrete classes. With interface
        parameters and return types, a package provider can package a remote
        method and associated interface, which subscriber orgs can call from
        Visualforce pages. Subscriber orgs pass in their own class that
        implements the packaged interface.

**Namespace:** `RemoteController`

# Declaring a Remote Method with Interface Parameters

You can declare @RemoteAction methods with interface parameters and return types, instead of being restricted to concrete classes. With interface parameters and return types, a package provider can package a remote method and associated interface, which subscriber orgs can call from Visualforce pages. Subscriber orgs pass in their own class that implements the packaged interface.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

If a @RemoteAction method is in a managed package and used by Visualforce Remoting, it must have global visibility if user profile or permission set access is used.

Here’s a brief example:

```

```

Objects sent from a JavaScript remoting call to a @RemoteAction that declares interface parameters must include an apexType value, which must be a fully qualified path to the concrete class, that is, namespace\[.BaseClass\]\[.ContainingClass\].ConcreteClass. For example, to make a JavaScript remoting call to RemoteController:

```

```

If the class definition is within your organization, you can simplify the remoting call and use the default c namespace:

```

```

#### See Also

-   [Namespaces and JavaScript Remoting](atlas.en-us.pages.meta/pages/pages_js_remoting_namespaces.htm "You can use the $RemoteAction global to automatically resolve the correct namespace, if any, for your remote action. This makes it easier to work with namespaces, especially for pages that make remoting calls to methods provided in packages.")

-   [Scope and Visibility of @RemoteAction Methods Methods](atlas.en-us.pages.meta/pages/pages_js_remoting_scope_visibility.htm "Apex @RemoteAction methods must be static and either global or public.")

## Code Examples

```apex
public class RemoteController {
    public interface MyInterface { String getMyString(); }
    public class MyClass implements MyInterface { 
        private String myString; 
        public String getMyString() { return myString; }
        public void setMyString(String s) { myString = s; }
    }
    
    @RemoteAction
    public static MyInterface setMessage(MyInterface i) {
        MyClass myC = new MyClass();
        myC.setMyString('MyClassified says "' + i.getMyString() + '".');
        return myC;
    }
}
```

```
Visualforce.remoting.Manager.invokeAction(
    '{!$RemoteAction.RemoteController.setMessage}',
    {'apexType':'thenamespace.RemoteController.MyClass', 'myString':'Lumos!'}, 
    handleResult
);
```

```
RemoteController.setMessage(
    {'apexType':'c.RemoteController.MyClass', 'myString':'Lumos!'}, 
    handleResult
);
```

## Related Topics

- Namespaces and JavaScript Remoting (atlas.en-us.pages.meta/pages/pages_js_remoting_namespaces.htm)
- Scope and Visibility of @RemoteAction Methods Methods (atlas.en-us.pages.meta/pages/pages_js_remoting_scope_visibility.htm)
