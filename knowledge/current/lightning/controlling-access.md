---
title: "Controlling Access"
domain: lightning
topic: controlling-access
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:47.866Z
estimatedTokens: 1760
keywords: [Controlling, Access, framework, control, applications, attributes, components, events, interfaces, via, system, attribute, whether, resource, outside]
---

# Controlling Access

> The framework enables you to control access to your applications, attributes,
    components, events, interfaces, and methods via the access
    system attribute. The access system attribute indicates
    whether the resource can be used
    outside of its own namespace.

# Controlling Access

The framework enables you to control access to your applications, attributes, components, events, interfaces, and methods via the access system attribute. The access system attribute indicates whether the resource can be used outside of its own namespace.

Use the access system attribute on these tags:

-   <aura:application>
-   <aura:attribute>
-   <aura:component>
-   <aura:event>
-   <aura:interface>
-   <aura:method>

## Access Values

You can specify these values for the access system attribute.

private

Available within the component, app, interface, or event, or method and can’t be referenced outside the resource. This value can only be used for <aura:attribute>.

Marking an attribute as private makes it easier to refactor the attribute in the future as the attribute can only be used within the resource.

Accessing a private attribute returns undefined unless you reference it from the component in which it’s declared. You can’t access a private attribute from a sub-component that extends the component containing the private attribute.

public

Available within your org only. This is the default access value.

global

Available in all orgs.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Mark your resources, such as a component, with access="global" to make the resource usable outside of your own org. For example, if you want a component to be usable in an installed package or by a Lightning App Builder user or a Experience Builder user in another org.

You can also create documentation for a component, event, or interface marked access="global". This documentation is automatically displayed in the Component Library of an org that uses or installs your package.

## Example

This sample component has global access.

```

```

## Access Violations

If your code accesses a resource, such as a component, that doesn’t have an access system attribute allowing you to access the resource:

-   Client-side code doesn’t execute or returns undefined. If you enabled debug mode, you see an error message in your browser console.
-   Server-side code results in the component failing to load. If you enabled debug mode, you see a popup error message.

## Anatomy of an Access Check Error Message

Here is a sample access check error message for an access violation.

```

```

An error message has four parts:

1.  The context (who is trying to access the resource). In our example, this is markup://c:sourceComponent.
2.  The target (the resource being accessed). In our example, this is markup://c:targetComponent.
3.  The type of failure. In our example, this is not visible.
4.  The code that triggered the failure. This is usually a class method. In our example, this is ComponentService.getDef(), which means that the target definition (component) was not accessible. A definition describes metadata for a resource, such as a component.

## Fixing Access Check Errors

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=lightning)

#### Tip

If your code isn’t working as you expect, enable debug mode to get better error reporting.

You can fix access check errors using one or more of these techniques.

-   Add appropriate access system attributes to the resources that you own.
-   Remove references in your code to resources that aren’t available. In the earlier example, markup://c:targetComponent doesn’t have an access value allowing markup://c:sourceComponent to access it.
-   Ensure that an attribute that you’re accessing exists by looking at its <aura:attribute> definition. Confirm that you’re using the correct case-sensitive spelling for the name.

    Accessing an undefined attribute or an attribute that is out of scope, for example a private attribute, triggers the same access violation message. The access context doesn’t know whether the attribute is undefined or inaccessible.


## Example: is not visible to 'undefined'

```

```

The key word in this error message is undefined, which indicates that the framework has lost context. This happens when your code accesses a component outside the normal framework lifecycle, such as in a setTimeout() or setInterval() call or in an ES6 Promise.

Fix this error by wrapping the code in a $A.getCallback() call. For more information, see [Modifying Components Outside the Framework Lifecycle](atlas.en-us.lightning.meta/lightning/js_cb_mod_ext_js.htm "Use $A.getCallback() to wrap any code that modifies a component outside the normal rerendering lifecycle, such as in a setTimeout() call. The $A.getCallback() call ensures that the framework rerenders the modified component and processes any enqueued actions.").

## Example: Cannot read property 'Yb' of undefined

```

```

This error message happens when you reference a property on a variable with a value of undefined. The error can happen in many contexts, one of which is the side-effect of an access check failure. For example, let’s see what happens when you try to access an undefined attribute, imaginaryAttribute, in JavaScript.

```

```

This is an access check error and whatDoYouExpect is set to undefined. Now, if you try to access a property on whatDoYouExpect, you get an error.

```

```

The c$sourceComponent$controller$doInit portion of the error message tells you that the error is in the doInit method of the controller of the sourceComponent component in the c namespace.

-   **[Application Access Control](atlas.en-us.lightning.meta/lightning/access_apps.htm)**
    The access attribute on the aura:application tag controls whether the app can be used outside of the app’s namespace.
-   **[Interface Access Control](atlas.en-us.lightning.meta/lightning/access_intf.htm)**
    The access attribute on the aura:interface tag controls whether the interface can be used outside of the interface’s namespace.
-   **[Component Access Control](atlas.en-us.lightning.meta/lightning/access_components.htm)**
    The access attribute on the aura:component tag controls whether the component can be used outside of the component’s namespace.
-   **[Attribute Access Control](atlas.en-us.lightning.meta/lightning/access_attr.htm)**
    The access attribute on the aura:attribute tag controls whether the attribute can be used outside of the attribute’s namespace.
-   **[Event Access Control](atlas.en-us.lightning.meta/lightning/access_events.htm)**
    The access attribute on the aura:event tag controls whether the event can be used outside of the event’s namespace.

#### See Also

-   [*Salesforce Help:* **Enable Debug Mode for Lightning Components**](https://help.salesforce.com/articleView?id=aura_debug_mode.htm&language=en_US)

-   [Writing Documentation for the Component Library](atlas.en-us.lightning.meta/lightning/docs_intro.htm "Documentation helps developers use your components to develop their apps more effectively. You can provide interactive examples, documentation, and specification descriptions for a component, event, or interface.")

## Code Examples

```apex
<aura:component access="global">
    ...
</aura:component>
```

```
Access  Check  Failed ! ComponentService.getDef():'markup://c:targetComponent' is not visible to 'markup://c:sourceComponent'.
```

```
ComponentService.getDef():'markup://c:targetComponent' is not visible to 'undefined'
```

```
Action failed: c$sourceComponent$controller$doInit [Cannot read property 'Yb' of undefined]
```

```
var whatDoYouExpect = cmp.get("v.imaginaryAttribute");
```

## Related Topics

- Modifying Components Outside the Framework Lifecycle (atlas.en-us.lightning.meta/lightning/js_cb_mod_ext_js.htm)
- Application Access Control (atlas.en-us.lightning.meta/lightning/access_apps.htm)
- Interface Access Control (atlas.en-us.lightning.meta/lightning/access_intf.htm)
- Component Access Control (atlas.en-us.lightning.meta/lightning/access_components.htm)
- Attribute Access Control (atlas.en-us.lightning.meta/lightning/access_attr.htm)
- Event Access Control (atlas.en-us.lightning.meta/lightning/access_events.htm)
- Writing Documentation for the Component Library (atlas.en-us.lightning.meta/lightning/docs_intro.htm)
