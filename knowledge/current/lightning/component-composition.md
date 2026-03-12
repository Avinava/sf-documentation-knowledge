---
title: "Component Composition"
domain: lightning
topic: component-composition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.073Z
estimatedTokens: 872
keywords: [Component, Composition, Composing, fine-grained, components, larger, build, interesting, applications, Attribute, Passing, Definitions, versus, Instances]
---

# Component Composition

> Composing fine-grained components in a larger component
enables you to build more interesting components and applications.

# Component Composition

Composing fine-grained components in a larger component enables you to build more interesting components and applications.

Let's see how we can fit components together. We will first create a few simple components: c:helloHTML and c:helloAttributes. Then, we’ll create a wrapper component, c:nestedComponents, that contains the simple components.

Here is the source for helloHTML.cmp.

```

```

**CSS source**

```

```

**Output**

![helloHTML output](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fnested1.png&folder=lightning)

Here is the source for helloAttributes.cmp.

```

```

nestedComponents.cmp uses composition to include other components in its markup.

```

```

**Output**

![nestedComponent output](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fnested.png&folder=lightning)

Including an existing component is similar to including an HTML tag. Reference the component by its "descriptor", which is of the form namespace:component. nestedComponents.cmp references the helloHTML.cmp component, which lives in the c namespace. Hence, its descriptor is c:helloHTML.

Note how nestedComponents.cmp also references c:helloAttributes. Just like adding attributes to an HTML tag, you can set attribute values in a component as part of the component tag. nestedComponents.cmp sets the whom attribute of helloAttributes.cmp to "component composition".

## Attribute Passing

You can also pass attributes to nested components. nestedComponents2.cmp is similar to nestedComponents.cmp, except that it includes an extra passthrough attribute. This value is passed through as the attribute value for c:helloAttributes.

```

```

**Output**

![nestedComponents2 output](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fnested2.png&folder=lightning)

helloAttributes is now using the passed through attribute value.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

{#v.passthrough} is an unbound expression. This means that any change to the value of the whom attribute in c:helloAttributes doesn’t propagate back to affect the value of the passthrough attribute in c:nestedComponents2. For more information, see [Data Binding Between Components](atlas.en-us.lightning.meta/lightning/expr_data_binding.htm#expr_data_binding "When you add a component in markup, you can use an expression to initialize attribute values in the component based on attribute values of the container component. There are two forms of expression syntax, which exhibit different behaviors for data binding between the components.").

## Definitions versus Instances

In object-oriented programming, there’s a difference between a class and an instance of that class. Components have a similar concept. When you create a .cmp resource, you are providing the definition (class) of that component. When you put a component tag in a .cmp resource, you are creating a reference to (instance of) that component.

It shouldn't be surprising that we can add multiple instances of the same component with different attributes. nestedComponents3.cmp adds another instance of c:helloAttributes with a different attribute value. The two instances of the c:helloAttributes component have different values for their whom attribute .

```

```

**Output**

![nestedComponent3 output](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fnested3.png&folder=lightning)

## Code Examples

```
<!--c:helloHTML-->
<aura:component>
  <div class="white">
    Hello, HTML!
  </div>
  
  <h2>Check out the style in this list.</h2>
  
  <ul>
    <li class="red">I'm red.</li>
    <li class="blue">I'm blue.</li>
    <li class="green">I'm green.</li>
  </ul>
</aura:component>
```

```
.THIS {
    background-color: grey;
}

.THIS.white {
    background-color: white;
}

.THIS .red {
    background-color: red;
}

.THIS .blue {
    background-color: blue;
}

.THIS .green {
    background-color: green;
}
```

```
<!--c:helloAttributes-->
<aura:component>
    <aura:attribute name="whom" type="String" default="world"/>
    Hello {!v.whom}!
</aura:component>
```

```
<!--c:nestedComponents-->
<aura:component>
    Observe!  Components within components!

    <c:helloHTML/>

    <c:helloAttributes whom="component composition"/>
</aura:component>
```

```
<!--c:nestedComponents2-->
<aura:component>
    <aura:attribute name="passthrough" type="String" default="passed attribute"/>
    Observe!  Components within components!

    <c:helloHTML/>

    <c:helloAttributes whom="{#v.passthrough}"/>
</aura:component>
```

## Related Topics

- Data Binding Between Components (atlas.en-us.lightning.meta/lightning/expr_data_binding.htm)
