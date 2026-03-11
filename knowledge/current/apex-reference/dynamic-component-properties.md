---
title: "Dynamic Component Properties"
domain: apex-reference
topic: dynamic-component-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.216Z
keywords: [Dynamic, Component, Properties, Returns, reference, child, components, component., childComponents, Signature, Property, Value, Example, expressions, facets, Usage, Note]
---

# Dynamic Component Properties

> Returns a reference to the child components for the component.

## Dynamic Component Properties

The following are properties for Component.

-   **[childComponents](atlas.en-us.apexref.meta/apexref/apex_pages_dynamic_components.htm#apex_ApexPages_Component_childComponents)**  
    Returns a reference to the child components for the component.
-   **[expressions](atlas.en-us.apexref.meta/apexref/apex_pages_dynamic_components.htm#apex_ApexPages_Component_expressions)**  
    Sets the content of an attribute using the expression language notation. The notation for this is expressions.name\_of\_attribute.
-   **[facets](atlas.en-us.apexref.meta/apexref/apex_pages_dynamic_components.htm#apex_ApexPages_Component_facets)**  
    Sets the content of a facet to a dynamic component. The notation is facet.name\_of\_facet.

### childComponents

Returns a reference to the child components for the component.

#### Signature

public List <ApexPages.Component> childComponents {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[ApexPages.Component](#apex_pages_dynamic_components "Represents a dynamic Visualforce component in Apex.")\>

#### Example

```

```

### expressions

Sets the content of an attribute using the expression language notation. The notation for this is expressions.name\_of\_attribute.

#### Signature

public String expressions {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### facets

Sets the content of a facet to a dynamic component. The notation is facet.name\_of\_facet.

#### Signature

public String facets {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

This property is only accessible by components that support facets.

#### Example

```

```