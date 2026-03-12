---
title: "DynamicMenuItem Class"
domain: apex-reference
topic: dynamicmenuitem-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.595Z
estimatedTokens: 1772
keywords: [DynamicMenuItem, Contains, define, hold, details, single, dynamic, menu, item, contains, information, related, such, identifiers, labels, summaries, sorting, logic., enables, bots]
---

# DynamicMenuItem Class

> Contains properties to define and hold the details for a single dynamic menu item Each
    item contains information related to an object, such as identifiers, labels, summaries, and
    sorting logic. It enables bots to present context-aware and user-relevant choices dynamically
    during conversations. .

# DynamicMenuItem Class

Contains properties to define and hold the details for a single dynamic menu item Each item contains information related to an object, such as identifiers, labels, summaries, and sorting logic. It enables bots to present context-aware and user-relevant choices dynamically during conversations. .

## Namespace

[ise\_bots\_apex](atlas.en-us.apexref.meta/apexref/apex_namespace_ise_bots_apex.htm "The ise_bots_apex namespace provides classes and properties to facilitate dynamic content generation and data handling for menu-driven bot interactions. Create and manage dynamic menu items that adapt to user inputs, context, and underlying object data.")

-   **[DynamicMenuItem Properties](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_properties)**
    Learn more about the properties available with the DynamicMenuItem class.

## DynamicMenuItem Properties

Learn more about the properties available with the DynamicMenuItem class.

The DynamicMenuItem class includes these properties.

-   **[EntityId](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_EntityId)**
    API name representing the ID field of the related Salesforce object.
-   **[EntityIdValue](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_EntityIdValue)**
    The ID value retrieved at run time for the associated object.
-   **[EntityName](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_EntityName)**
    API name or label of the object being referenced, for example Case, Contact, or a custom object such as Service\_\_c.
-   **[EntityNameValue](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_EntityNameValue)**
    The name of the specific object instance.
-   **[Label](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_Label)**
    The label used to define how the item must be displayed in the bot menu.
-   **[LabelValue](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_LabelValue)**
    The value of the label displayed to the user for the menu item at run time.
-   **[SummaryTextWithFormula](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_SummaryTextWithFormula)**
    A formula or a string of text that defines the structure of the summary text displayed for the item. This formula is used to construct a dynamic summary for the user after they make a selection.
-   **[SummaryTextWithFormulaValue](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_SummaryTextWithFormulaValue)**
    The summary string based on the formula and object data.
-   **[sortByDate](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_sortByDate)**
    The API name of a date or date/time field on the object that's used to sort the dynamic menu items.
-   **[sortByDateValue](atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm#apex_ise_bots_apex_DynamicMenuItem_sortByDateValue)**
    The DateTime value used at run time to sort the menu items chronologically.

### EntityId

API name representing the ID field of the related Salesforce object.

#### Signature

public String EntityId {get; set;}

```

```

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### EntityIdValue

The ID value retrieved at run time for the associated object.

#### Signature

public String EntityIdValue {get; set;}

```

```

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### EntityName

API name or label of the object being referenced, for example Case, Contact, or a custom object such as Service\_\_c.

#### Signature

public String EntityName {get; set;}

```

```

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### EntityNameValue

The name of the specific object instance.

#### Signature

public String EntityNameValue {get; set;}

```

```

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### Label

The label used to define how the item must be displayed in the bot menu.

#### Signature

public String Label {get; set;}

```

```

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### LabelValue

The value of the label displayed to the user for the menu item at run time.

#### Signature

public String LabelValue {get; set;}

```

```

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### SummaryTextWithFormula

A formula or a string of text that defines the structure of the summary text displayed for the item. This formula is used to construct a dynamic summary for the user after they make a selection.

#### Signature

public String SummaryTextWithFormula {get; set;}

```

```

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### SummaryTextWithFormulaValue

The summary string based on the formula and object data.

#### Signature

public String SummaryTextWithFormulaValue {get; set;}

```

```

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### sortByDate

The API name of a date or date/time field on the object that's used to sort the dynamic menu items.

#### Signature

public Date sortByDate {get; set;}

```

```

#### Property Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

### sortByDateValue

The DateTime value used at run time to sort the menu items chronologically.

#### Signature

public Date sortByDateValue {get; set;}

```

```

#### Property Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

## Code Examples

```
ise_bots_apex.DynamicMenuItem, EntityId
```

```
ise_bots_apex.DynamicMenuItem, EntityIdValue
```

```
ise_bots_apex.DynamicMenuItem, EntityName
```

```
ise_bots_apex.DynamicMenuItem, EntityNameValue
```

```
ise_bots_apex.DynamicMenuItem, Label
```

## Related Topics

- ise_bots_apex (atlas.en-us.apexref.meta/apexref/apex_namespace_ise_bots_apex.htm)
- DynamicMenuItem Properties (atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm)
- EntityId (atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm)
- EntityIdValue (atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm)
- EntityName (atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm)
- EntityNameValue (atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm)
- Label (atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm)
- LabelValue (atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm)
- SummaryTextWithFormula (atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm)
- SummaryTextWithFormulaValue (atlas.en-us.apexref.meta/apexref/apex_class_ise_bots_apex_DynamicMenuItem.htm)
