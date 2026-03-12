---
title: "Interfaces"
domain: lightning
topic: interfaces
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.346Z
estimatedTokens: 663
keywords: [Interfaces, define, component’s, shape, defining, attributes, events, any, implementing, component, implement, can’t, directly, markup]
---

# Interfaces

> Interfaces define a component’s shape by defining attributes, events, or methods that
    any implementing component contains. To use an interface, a component must implement it. An
    interface can’t be used directly in markup.

# Interfaces

Interfaces define a component’s shape by defining attributes, events, or methods that any implementing component contains. To use an interface, a component must implement it. An interface can’t be used directly in markup.

An interface starts with the <aura:interface> tag, and can contain only these tags:

<aura:attribute>

This tag defines an attribute. An interface can have zero or more attributes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

To set the value of an attribute inherited from an interface, redefine the attribute in the sub component using <aura:attribute> and set the value in its default attribute. When you extend a component, you can use <aura:set> in a sub component to set the value of any attribute that’s inherited from the super component. However, this usage of <aura:set> doesn’t work for attributes inherited from an interface.

<aura:registerEvent>

This tag registers an event that can be fired by a component that implements the interface. There’s no logic in the interface for firing the event. A component that implements the interface contains the code to fire the event.

<aura:method>

This tag defines a method as part of the API of a component that implements the interface. There’s no logic for the method in the interface. A component that implements the interface contains the method logic.

You can’t use markup, renderers, controllers, or anything else in an interface.

## Implement an Interface

To implement an interface, set the implements system attribute in the <aura:component> tag to the name of the interface that you are implementing. For example:

```

```

A component can implement an interface and extend another component.

```

```

An interface can extend multiple interfaces using a comma-separated list.

```

```

Since there are fewer restrictions on the content of abstract components, they are more common than interfaces. A component can implement multiple interfaces but can only extend one abstract component, so interfaces can be more useful for some design patterns.

## Example

Here’s an example of an interface.

```

```

-   **[Marker Interfaces](atlas.en-us.lightning.meta/lightning/oo_interfaces_abstractCmp.htm)**
    A marker interface is an empty interface with no attributes, events, or methods. A marker interface is used to enable specific usage for a component in an app.

#### See Also

-   [Setting Attributes Inherited from an Interface](atlas.en-us.lightning.meta/lightning/ref_tag_set_attr_intf.htm)

-   [Abstract Components](atlas.en-us.lightning.meta/lightning/oo_abstract_cmp.htm)

## Code Examples

```
<aura:component implements="mynamespace:myinterface" >
```

```
<aura:component extends="ns1:cmp1" implements="ns2:intf1" >
```

```
<aura:interface extends="ns:intf1,ns:int2" >
```

```
<aura:interface>
    <aura:attribute name="value" type="String"/>

    <aura:registerEvent name="onItemSelected" type="ui:response"
      description="The event fired when the user selects an item" />

    <aura:method name="methodFromInterface">
        <aura:attribute name="stringAttribute" type="String" default="default string"/>
    </aura:method>
</aura:interface>
```

## Related Topics

- Marker Interfaces (atlas.en-us.lightning.meta/lightning/oo_interfaces_abstractCmp.htm)
- Setting Attributes Inherited from an Interface (atlas.en-us.lightning.meta/lightning/ref_tag_set_attr_intf.htm)
- Abstract Components (atlas.en-us.lightning.meta/lightning/oo_abstract_cmp.htm)
