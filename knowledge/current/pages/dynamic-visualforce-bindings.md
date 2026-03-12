---
title: "Dynamic Visualforce Bindings"
domain: pages
topic: dynamic-visualforce-bindings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.432Z
estimatedTokens: 917
keywords: [Dynamic, Visualforce, Bindings, way, writing, generic, pages, display, records, necessarily, knowing, show, words, determined, run]
---

# Dynamic Visualforce Bindings

> Dynamic Visualforce
    bindings are a way of writing generic Visualforce pages that display information
   about records without necessarily knowing which fields to show. In other words, fields on the
   page are determined at run time, rather than compile time. This allows a developer to design a


# Dynamic Visualforce Bindings

Dynamic Visualforce bindings are a way of writing generic Visualforce pages that display information about records without necessarily knowing which fields to show. In other words, fields on the page are determined at run time, rather than compile time. This allows a developer to design a single page that renders differently for various audiences, based on their permissions or preferences. Dynamic bindings are useful for Visualforce pages included in managed packages since they allow for the presentation of data specific to each subscriber with very little coding.

Dynamic Visualforce binding is supported for standard and custom objects. Dynamic bindings take the following general form:

```

```

where

-   reference evaluates to either an sObject, an Apex class, or a global variable
-   expression evaluates to a string that is the name of a field, or a related object. If a related object is returned, it can be used to recursively select fields or further related objects.

Dynamic bindings can be used anywhere formula expressions are valid. Use them on a page like this:

```

```

Optionally, you can add a fieldname to the end of the whole dynamic expression. If the dynamic expression resolves to an sObject, the fieldname refers to a specific field on that object. If your reference is an Apex class, the field must be public or global. For example:

```

```

Your dynamic Visualforce pages should be designed to use a standard controller for the object on your page, and implement any further customization through [a controller extension](atlas.en-us.pages.meta/pages/pages_controller_extension.htm#pages_controller_extension).

You can use the Apex Schema.SobjectType methods to get information for your dynamic references, in particular those that access the fields of an object. For example, Schema.SobjectType.Account.fields.getMap() returns a Map of the names of the Account fields in a format that your Apex controllers and extensions can understand.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

Static references are checked for validity when you save a page, and an invalid reference will prevent you from saving it. Dynamic references, by their nature, can only be checked at run time, and if your page contains a dynamic reference that is invalid when the page is viewed, the page fails. It’s possible to create references to custom fields or global variables which are valid, but if that field or global value is later deleted, the page will fail when it is next viewed.

## Defining Relationships

Both reference and expression can be complex expressions, such as those that evaluate to object relationships. For example, suppose that an object called Object1\_\_c has a relationship to another object called Object2\_\_c. The name of the relationship between these two objects is called Relationship\_\_r.

If Object2\_\_c has a field called myField, then the following dynamically-cast lookups all return a reference to the same field:

-   Object1\_\_c.Object2\_\_c\['myField'\]
-   Object1\_\_c\['Object2\_\_c.myField'\]
-   Object1\_\_c\['Object2\_\_c'\]\['myField'\]
-   Object1\_\_c.Relationship\_\_r\[myField\]
-   Object1\_\_c\[Relationship\_\_r.myField\]
-   Object1\_\_c\[Relationship\_\_r\]\[myField\]

#### See Also

-   [Dynamic References to Global Variables](atlas.en-us.pages.meta/pages/pages_dynamic_vf_globals.htm)

-   [Global Variables](atlas.en-us.pages.meta/pages/pages_variables_global.htm "Use global variables to reference general information about the current user and your organization on a page.")

## Code Examples

```
reference[expression]
```

```
{!reference[expression]}
```

```
{!myContact['Account'][fieldname]}
```

## Related Topics

- a controller
   extension (atlas.en-us.pages.meta/pages/pages_controller_extension.htm)
- Dynamic References to Global Variables (atlas.en-us.pages.meta/pages/pages_dynamic_vf_globals.htm)
- Global Variables (atlas.en-us.pages.meta/pages/pages_variables_global.htm)
