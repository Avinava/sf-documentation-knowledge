---
title: "Dynamically Creating Components"
domain: lightning
topic: dynamically-creating-components
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.063Z
estimatedTokens: 1696
keywords: [Dynamically, Creating, Components, component, client-side, JavaScript, code, $A.createComponent, multiple, $A.createComponents, Versus, Server-Side, Creation, Nested, Destroying]
---

# Dynamically Creating Components

> Create a component dynamically in your client-side JavaScript code by using the
            $A.createComponent() method. To create multiple
        components, use $A.createComponents().

# Dynamically Creating Components

Create a component dynamically in your client-side JavaScript code by using the $A.createComponent() method. To create multiple components, use $A.createComponents().

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Use $A.createComponent() instead of the deprecated $A.newCmp() and $A.newCmpAsync() methods.

## Client-Side Versus Server-Side Component Creation

The $A.createComponent() and $A.createComponents() methods support both client-side (synchronous) and server-side (asynchronous) component creation. For performance and other reasons, client-side creation is preferred.

To use $A.createComponent(), we need the component definition. If we don’t have the definition already on the client, the framework makes a server trip to get it. You can avoid this server trip by adding an <aura:dependency> tag for the component you’re creating in the markup of the component that calls $A.createComponent(). The tag ensures that the component definition is always available on the client. The tradeoff is that the definition is always downloaded instead of only when it’s needed. This performance tradeoff decision depends on your use case.

If no server-side dependencies are found, the methods are executed synchronously on the client-side. The top-level component determines whether a server request is necessary for component creation. A component with server-side dependencies must be created on the server. Server-side dependencies include component definitions or dynamically loaded labels that aren’t already on the client, and other elements that can’t be predetermined by static markup analysis.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

A server-side controller isn’t a server-side dependency for component creation because controller actions are only called after the component has been created.

A single call to createComponent() or createComponents() can result in many components being created. The call creates the requested component and all its child components. In addition to performance considerations, server-side component creation has a limit of 10,000 components that can be created in a single request. If you hit this limit, explicitly declare component dependencies with the <aura:dependency> tag or otherwise pre-load dependent elements. The components are then created on the client side instead.

There’s no limit on component creation on the client side.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Creating components where the top-level components don’t have server dependencies but nested inner components do have dependencies isn’t currently supported.

## Syntax

The syntax is:

```

```

1.  type—The type of component to create; for example, "lightning:button".
2.  attributes—A map of attributes for the component, including the local Id (aura:id).
3.  callback(cmp, status, errorMessage)—The callback to invoke after the component is created.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=lightning)

    #### Tip

    Component creation is asynchronous if it requires a server trip. Follow good asynchronous practices, such as only using the new component in the callback.

    The callback has three parameters.

    1.  cmp—The component that was created. This parameter enables you to do something with the new component, such as add it to the body of the component that creates it. If there’s an error, cmp is null.
    2.  status—The status of the call. The possible values are SUCCESS, INCOMPLETE, or ERROR. Always check that the status is SUCCESS before you try to use the component.
    3.  errorMessage—The error message if the status is ERROR.

## Example

Let’s add a dynamically created button to this sample component.

```

```

The client-side controller calls $A.createComponent() to create a lightning:button with a local ID (aura:id) and a handler for the onclick attribute. The function(newButton, ...) callback appends the button to the body of c:createComponent. The newButton that’s dynamically created by $A.createComponent() is passed as the first argument to the callback.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

c:createComponent contains a {!v.body} expression. When you use cmp.set("v.body", ...) to set the component body, you must explicitly include {!v.body} in your component markup.

## Creating Nested Components

To dynamically create a component in the body of another component, use $A.createComponents() to create the components. In the function callback, nest the components by setting the inner component in the body of the outer component. This example creates a lightning:icon component in the body of a lightning:card component.

```

```

## Destroying Dynamically Created Components

After a component that is declared in markup is no longer in use, the framework automatically destroys it and frees up its memory.

If you create a component dynamically in JavaScript and don’t add it to a facet like v.body or another attribute of type Aura.Component\[\], you have to destroy it manually. Use Component.destroy() to destroy the component and free up its memory to avoid memory leaks.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

When a user navigates to a different page, components on the previous page remain in the cache and are hidden, not destroyed. See [Event Handler Behavior for Active Components](atlas.en-us.lightning.meta/lightning/event_handler_active_components.htm "To prevent active event handlers on cached pages from causing problems, add a workaround to your code to check if the component is still visible. To avoid this scenario and the workaround, use Lightning message service instead to communicate across the DOM within a Lightning page. The default scope used by Lightning message service channels publishes only to active components.").

#### See Also

-   [aura:dependency](atlas.en-us.lightning.meta/lightning/ref_tag_dependency.htm "The <aura:dependency> tag enables you to declare dependencies, which improves their discoverability by the framework.")

-   [Invoking Actions on Component Initialization](atlas.en-us.lightning.meta/lightning/js_cb_init_handler.htm "Use the init event to initialize a component or fire an event after component construction but before rendering.")

-   [Dynamically Adding Event Handlers To a Component](atlas.en-us.lightning.meta/lightning/js_cb_dynamic_handler.htm "You can dynamically add a handler for an event that a component fires.")

## Code Examples

```
$A.createComponent(String type, Object attributes, function callback)
```

```
<!--c:createComponent-->
<aura:component>
    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>

    <p>Dynamically created button</p>
    {!v.body}
</aura:component>
```

```
/*createComponentController.js*/
({
    doInit : function(cmp) {
        $A.createComponent(
            "lightning:button",
            {
                "aura:id": "findableAuraId",
                "label": "Press Me",
                "onclick": cmp.getReference("c.handlePress")
            },
            function(newButton, status, errorMessage){
                //Add the new button to the body array
                if (status === "SUCCESS") {
                    var body = cmp.get("v.body");
                    body.push(newButton);
                    cmp.set("v.body", body);
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                    // Show offline error
                }
                else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                    // Show error message
                }
            }
        );
    },

    handlePress : function(cmp) {
        // Find the button by the aura:id value
        console.log("button: " + cmp.find("findableAuraId"));
        console.log("button pressed");
    }
})
```

```
$A.createComponents([
    ["lightning:card",{
                "title" : "Dynamic Components"
            }],
            ["lightning:icon",{
                "iconName" : "utility:success",
                "alternativeText": "Icon that represents a successful step",
                "variant": "success",
                "class": "slds-m-around_small"
            }]
    ],
    function(components, status, errorMessages){
        if (status === "SUCCESS") {
            var card = components[0];
            var icon = components[1];
            // set lightning:icon as the body of lightning:card
            card.set("v.body", icon);
            cmp.set("v.body", card);
        }
        else if (status === "INCOMPLETE") {
            console.log("No response from server or client is offline.")
            // Show offline error
        }
        else if (status === "ERROR") {
            console.log("Error message: " + errorMessages[0].message);
        }
    }
);
```

## Related Topics

- Event Handler Behavior for Active Components (atlas.en-us.lightning.meta/lightning/event_handler_active_components.htm)
- aura:dependency (atlas.en-us.lightning.meta/lightning/ref_tag_dependency.htm)
- Invoking Actions on Component Initialization (atlas.en-us.lightning.meta/lightning/js_cb_init_handler.htm)
- Dynamically Adding Event Handlers To a Component (atlas.en-us.lightning.meta/lightning/js_cb_dynamic_handler.htm)
