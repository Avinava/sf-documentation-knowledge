---
title: "Overriding Default  Operations Operations"
domain: pages
topic: overriding-default-operations-operations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.116Z
estimatedTokens: 1367
keywords: [Overriding, Operations, Override, Remote, Objects, own, Apex, code, extend, customize, behavior, Access, Definitions, Overrides]
---

# Overriding Default  Operations Operations

> Override the default Remote Objects operations with your own Apex code to extend or
        customize the behavior of Remote Objects.

# Overriding Default Operations Operations

Override the default Remote Objects operations with your own Apex code to extend or customize the behavior of Remote Objects.

Behind the scenes of Remote Objects, the basic operations—create(), retrieve(), update(), and del()—use a Remote Objects controller that’s the equivalent of the standard controller for normal Visualforce pages. You can override Remote Objects operations to extend or replace the built-in behavior of this controller. Overrides of Remote Objects operations are written in Apex and take effect by adding them to your page’s Remote Objects definitions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

You can’t override the upsert() operation. It’s just a convenience function, and behind the scenes it delegates to either create() or update(). When you override either of those methods, the overridden method is automatically used by upsert() as appropriate.

## Remote Objects Access Definitions for Method Overrides

To override a Remote Objects operation with a remote method, set the attribute for the operation to the method that replaces the default method. For example, here’s how to override the create() operation for contacts with a remote method.

```

```

The attribute takes a Visualforce expression that references the @RemoteAction method to use as the override for the built-in create() operation. The expression takes the form of $RemoteAction.OverrideClassName.overrideMethodName, where the $RemoteAction global handles your organization namespace, as it does for JavaScript remoting. Note that the class that contains the @RemoteAction method needs to be set as the page’s controller or as a controller extension for the page.

With this declaration, whenever your page’s JavaScript code calls the create() function for a contact Remote Object, instead of using the Remote Objects controller, your remote method will be called.

## Remote Objects Override Methods

Remote Objects override methods are written as @RemoteAction methods in an Apex class, which you add to your page as a controller or controller extension.

The method signature for an override method is:

```

```

The type parameter is the sObject type that’s being acted upon, and the fields map is a collection that contains the values that were set on the Remote Object before the overridden method was called.

The return value is a map that represents the result of a Remote Objects operation. This map typically include the results of the call, the status, and any custom data that you want to provide as part of your custom method.

The simplest way to construct a valid return map is to use the RemoteObjectController. This is the standard controller that provides the built-in functionality for Remote Objects, and you can delegate data manipulation language (DML) operations to it by passing along your method’s parameters. For example, here’s a create() method that does nothing more than the built-in version of create() does:

```

```

This method is effectively a no-op; that is, this method does exactly the same thing the built-in version would have done, nothing more and nothing less. Your override methods can execute whatever additional Apex you need to, including logging, additional DML, other method calls, and so on. For a more complete example of a Remote Objects override method, and the page that uses it, see [An Example of Using Remote Method Overrides in](atlas.en-us.pages.meta/pages/pages_remote_objects_example_overrides.htm "This sample code illustrates how to create remote method overrides for Remote Objects operations. The example presents a sorted list of contacts and a simple form to enter a new contact. The new contact action overrides the built-in Remote Objects create() operation. The sample also illustrates blending Remote Objects with several Web development libraries to present a mobile-friendly user interface.").

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

The RemoteObjectController standard controller automatically handles sharing rules, ownership, and other security concerns for Remote Objects. In contrast, methods in a custom controller or controller extension operate in system mode by default, which allows full access to all data in the organization. This behavior is the same as for standard Visualforce pages that use custom controllers or controller extensions. When you write the controller code, you need to handle access rights and other concerns yourself.

As a best practice, use the with sharing keyword for your controller or controller extension class, and delegate as much as you can to the RemoteObjectController.

#### See Also

-   [Creating Records with](atlas.en-us.pages.meta/pages/pages_remote_objects_using_create.htm "Create a record by calling create() on a Remote Objects model instance.")

-   [Deleting Records with](atlas.en-us.pages.meta/pages/pages_remote_objects_using_delete.htm "Delete records by calling del() on a Remote Objects model instance.")

-   [Retrieving Records with](atlas.en-us.pages.meta/pages/pages_remote_objects_using_retrieve.htm "Retrieve records by calling retrieve() on a Remote Objects model instance.")

-   [Updating Records with](atlas.en-us.pages.meta/pages/pages_remote_objects_using_update.htm "Update records by calling update() on a Remote Objects model instance.")

## Code Examples

```
<apex:remoteObjectModel name="Contact" fields="FirstName,LastName,Phone" 
    create="{!$RemoteAction.RemoteObjectContactOverride.create}"/>
```

```apex
@RemoteAction
public static Map<String,Object> methodName(String type, Map<String,Object> fields)
```

```apex
@RemoteAction
public static Map<String, Object> create(String type, Map<String, Object> fields) {
    Map<String, Object> result = RemoteObjectController.create(type, fields);
    return result;
}
```

## Related Topics

- An
                Example of Using Remote Method Overrides in (atlas.en-us.pages.meta/pages/pages_remote_objects_example_overrides.htm)
- Creating Records with (atlas.en-us.pages.meta/pages/pages_remote_objects_using_create.htm)
- Deleting Records with (atlas.en-us.pages.meta/pages/pages_remote_objects_using_delete.htm)
- Retrieving Records with (atlas.en-us.pages.meta/pages/pages_remote_objects_using_retrieve.htm)
- Updating Records with (atlas.en-us.pages.meta/pages/pages_remote_objects_using_update.htm)
