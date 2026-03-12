---
title: "Providing Specification Information and Descriptions"
domain: lightning
topic: providing-specification-information-and-descriptions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.795Z
estimatedTokens: 444
keywords: [Providing, Specification, Descriptions, tab, root, definition, attributes]
---

# Providing Specification Information and Descriptions

> Descriptions on the Specification tab describes a root definition and its
    attributes and methods.

# Providing Specification Information and Descriptions

Descriptions on the **Specification** tab describes a root definition and its attributes and methods.

In the Component Library, the **Specification** tab renders descriptions from your .cmp, .evt, or .intf file. For instance, see the Specification tab for lightning:avatar at [https://developer.salesforce.com/docs/component-library/bundle/lightning:avatar/specification](https://developer.salesforce.com/docs/component-library/bundle/lightning:avatar/specification).

HTML markup is not supported in inline descriptions.

The specification information is generated based on the root-level tag, which looks like this.

```

```

The specification information includes:

Access Level

Only root definitions, attributes, and methods marked with access="global" are surfaced in the Component Library.

Abstract

A root definition with abstract="true" denotes that it’s abstract. An abstract component can’t be used directly in markup. The default is false.

Extensible

A root definition with extensible="true" denotes that it’s extensible, which makes it a super component. A sub component that extends a super component inherits the attributes of the super component. The default is false.

These tags support inline descriptions via the description attribute.

<aura:component\>

The root definition tag in a component .cmp file.

```

```

<aura:event\>

The root definition tag in an event .evt file.

```

```

<aura:interface\>

The root definition tag in an interface .intf file.

```

```

<aura:attribute\>

An attribute tag in a component, event, or interface file.

```

```

<aura:method\>

A method tag in a component , event, or interface file. Each method tag can contain multiple attribute tags.

```

```

## Code Examples

```apex
<aura:component
    access="global"
    implements="lightning:myInterface"
    minVersion="41.0"
    description="A collection of vertically stacked sections with multiple content areas. This component requires version 41.0 and later.">
```

```
<aura:component description="Represents a button element.">
```

```
<aura:event type="COMPONENT" 
    description="Indicates that a key has been pressed.">
```

```
<aura:interface name="label" 
    type="String"
    description="A common interface for date components.">
```

```
<aura:attribute name="label" 
    type="String"
    description="The text to be displayed on the button.">
```
