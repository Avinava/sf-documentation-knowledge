---
title: "TemplatesSearchOptions Class"
domain: apex-reference
topic: templatessearchoptions-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.943Z
estimatedTokens: 719
namespace: Wave
keywords: [TemplatesSearchOptions, filter, template, collection, Usage, filterGroup, options]
---

# TemplatesSearchOptions Class

> The TemplatesSearchOptions class provides optional properties to
      filter the template collection.

**Namespace:** `Wave`

# TemplatesSearchOptions Class

The TemplatesSearchOptions class provides optional properties to filter the template collection.

## Namespace

[Wave](atlas.en-us.apexref.meta/apexref/apex_namespace_wave.htm "The classes in the Wave namespace are part of the CRM Analytics Analytics SDK, designed to facilitate querying CRM Analytics data from Apex code.")

## Usage

Use TemplatesSearchOptions with Wave.Templates class to filter the CRM Analytics template collection returned. For example:

```

```

-   **[TemplatesSearchOptions Properties](atlas.en-us.apexref.meta/apexref/apex_class_Wave_TemplatesSearchOptions.htm#apex_Wave_TemplatesSearchOptions_properties)**


## TemplatesSearchOptions Properties

The following are properties for TemplatesSearchOptions.

-   **[filterGroup](atlas.en-us.apexref.meta/apexref/apex_class_Wave_TemplatesSearchOptions.htm#apex_Wave_TemplatesSearchOptions_filterGroup)**
    Specifies the Connect API filter group for CRM Analytics template search options.
-   **[options](atlas.en-us.apexref.meta/apexref/apex_class_Wave_TemplatesSearchOptions.htm#apex_Wave_TemplatesSearchOptions_options)**
    Specifies the template visibility option to filter the CRM Analytics template collection by.
-   **[type](atlas.en-us.apexref.meta/apexref/apex_class_Wave_TemplatesSearchOptions.htm#apex_Wave_TemplatesSearchOptions_type)**
    Sets the template type to filter the CRM Analytics template collection by.

### filterGroup

Specifies the Connect API filter group for CRM Analytics template search options.

#### Signature

public String filterGroup {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Uses the [ConnectFilterGroupEnum](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_filter_groups.htm) values.

#### Example

```

```

### options

Specifies the template visibility option to filter the CRM Analytics template collection by.

#### Signature

public String options {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Uses the ConnectWaveTemplateVisibilityOptionsEnum values. Valid values are CreateApp, ViewOnly, and ManageableOnly.

#### Example

```

```

### type

Sets the template type to filter the CRM Analytics template collection by.

#### Signature

public String type {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Uses the ConnectWaveTemplateTypeEnum values. Valid values are app, dashboard, embedded, and lens.

#### Example

```

```

## Code Examples

```apex
public static void List<String> getAppTemplates() {
  Wave.TemplateSearchOptions tsOptions = new Wave.TemplatesSearchOptions();
  tsOptions.type = 'app';
  
  Map<String, Object> o = Wave.Templates.getTemplates(tsOptions);
  List<Object> appTemplates = (List<Object>) o.get('templates');
  List<String> names = new List<String>();
  for (Object templateObj : appTemplates) {
    names.add((String) ((Map<String, Object>) templateObj.get('name'));
  }
  return names;
}
```

```
Wave.TemplateSearchOptions tsOptions = new Wave.TemplatesSearchOptions();
tsOptions.filterGroup = 'small';
```

```
Wave.TemplateSearchOptions tsOptions = new Wave.TemplatesSearchOptions();
tsOptions.options = 'ViewOnly';
```

```
Wave.TemplateSearchOptions tsOptions = new Wave.TemplatesSearchOptions();
tsOptions.type = 'app';
```

## Related Topics

- Wave (atlas.en-us.apexref.meta/apexref/apex_namespace_wave.htm)
- TemplatesSearchOptions Properties (atlas.en-us.apexref.meta/apexref/apex_class_Wave_TemplatesSearchOptions.htm)
- filterGroup (atlas.en-us.apexref.meta/apexref/apex_class_Wave_TemplatesSearchOptions.htm)
- options (atlas.en-us.apexref.meta/apexref/apex_class_Wave_TemplatesSearchOptions.htm)
- type (atlas.en-us.apexref.meta/apexref/apex_class_Wave_TemplatesSearchOptions.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
