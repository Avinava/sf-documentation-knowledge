---
title: "Component Class"
domain: apex-reference
topic: component-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:31.798Z
estimatedTokens: 604
namespace: ApexPages
keywords: [Component, dynamic, Visualforce, Apex, childComponents, expressions, facets, Usage]
---

# Component Class

> Represents a dynamic Visualforce component in
  Apex.

**Namespace:** `ApexPages`

# Component Class

Represents a dynamic Visualforce component in Apex.

## Namespace

[ApexPages](atlas.en-us.apexref.meta/apexref/apex_namespace_ApexPages.htm "The ApexPages namespace provides classes used in Visualforce controllers.")

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

## Code Examples

```
Component.Apex.PageBlock pageBlk = new Component.Apex.PageBlock();

Component.Apex.PageBlockSection pageBlkSection = new Component.Apex.PageBlockSection(title='dummy header');

pageBlk.childComponents.add(pageBlkSection);
```

```
Component.Apex.InputField inpFld = new 
Component.Apex.InputField();
inpField.expressions.value = '{!Account.Name}';
inpField.expressions.id = '{!$User.FirstName}';
```

```
Component.Apex.DataTable myDT = new 
Component.Apex.DataTable();
Component.Apex.OutputText footer = new 
Component.Apex.OutputText(value='Footer Copyright');
myDT.facets.footer = footer;
```

## Related Topics

- ApexPages (atlas.en-us.apexref.meta/apexref/apex_namespace_ApexPages.htm)
- childComponents (atlas.en-us.apexref.meta/apexref/apex_pages_dynamic_components.htm)
- expressions (atlas.en-us.apexref.meta/apexref/apex_pages_dynamic_components.htm)
- facets (atlas.en-us.apexref.meta/apexref/apex_pages_dynamic_components.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
