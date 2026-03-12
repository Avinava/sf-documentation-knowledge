---
title: "Setting Attributes Inherited from an Interface"
domain: lightning
topic: setting-attributes-inherited-from-an-interface
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.858Z
estimatedTokens: 81
keywords: [Setting, Attributes, Inherited, attribute, redefine, component, Let’s, look, myIntf]
---

# Setting Attributes Inherited from an Interface

> To set the value of an attribute inherited from an interface, redefine the attribute in the
            component and set its default value. Let’s look at an example with the
                c:myIntf interface.

# Setting Attributes Inherited from an Interface

To set the value of an attribute inherited from an interface, redefine the attribute in the component and set its default value. Let’s look at an example with the c:myIntf interface.

```

```

This component implements the interface and sets myBoolean to false.

```

```

## Code Examples

```
<!--c:myIntf-->
<aura:interface>
    <aura:attribute name="myBoolean" type="Boolean" default="true" />
</aura:interface>
```

```
<!--c:myIntfImpl-->
<aura:component implements="c:myIntf">
    <aura:attribute name="myBoolean" type="Boolean" default="false" />

    <p>myBoolean: {!v.myBoolean}</p>
</aura:component>
```
