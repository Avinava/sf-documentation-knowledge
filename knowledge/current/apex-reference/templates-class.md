---
title: "Templates Class"
domain: apex-reference
topic: templates-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.501Z
estimatedTokens: 1376
namespace: Wave
keywords: [Templates, provides, retrieving, CRM, Analytics, template, collections, individual, templates, configurations., Usage, Examples, getTemplate, templateIdOrApiName, Example, getTemplateConfig, getTemplates, options]
---

# Templates Class

> The Templates class provides methods for retrieving CRM Analytics
      template collections, individual templates, and template configurations.

**Namespace:** `Wave`

# Templates Class

The Templates class provides methods for retrieving CRM Analytics template collections, individual templates, and template configurations.

## Namespace

[Wave](atlas.en-us.apexref.meta/apexref/apex_namespace_wave.htm "The classes in the Wave namespace are part of the CRM Analytics Analytics SDK, designed to facilitate querying CRM Analytics data from Apex code.")

## Usage

Use Templates and its associated class Wave.TemplatesSearchOptions to get CRM Analytics template information.

## Examples

This code sample declares a method that returns a list of the template names.

```

```

Adding the @AuraEnabled annotation allows Lightning Web Components to access Templates methods directly.

For example, in the lwc.js file:

```

```

-   **[Templates Methods](atlas.en-us.apexref.meta/apexref/apex_class_Wave_Templates.htm#apex_Wave_Templates_methods)**


## Templates Methods

The following are methods for Templates.

-   **[getTemplate(templateIdOrApiName)](atlas.en-us.apexref.meta/apexref/apex_class_Wave_Templates.htm#apex_Wave_Templates_getTemplate_2)**
    Gets a CRM Analytics template by the specified ID or API name. The returned template is a map of the template JSON attributes as name/value pairs.
-   **[getTemplateConfig(templateIdOrApiName)](atlas.en-us.apexref.meta/apexref/apex_class_Wave_Templates.htm#apex_Wave_Templates_getTemplateConfig_2)**
    Gets the CRM Analytics template configuration by the specified ID or API name. The returned template configuration is a map of the JSON attributes as name/value pairs.
-   **[getTemplates(options)](atlas.en-us.apexref.meta/apexref/apex_class_Wave_Templates.htm#apex_Wave_Templates_getTemplates)**
    Get a filtered collection of CRM Analytics templates using search options.
-   **[getTemplates()](atlas.en-us.apexref.meta/apexref/apex_class_Wave_Templates.htm#apex_Wave_Templates_getTemplates_2)**
    Gets all CRM Analytics templates.

### getTemplate(templateIdOrApiName)

Gets a CRM Analytics template by the specified ID or API name. The returned template is a map of the template JSON attributes as name/value pairs.

#### Signature

public static Map<String,Object\> getTemplate(String templateIdOrApiName)

#### Parameters

templateIdOrApiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The template ID or API name of the template to retrieve.

#### Return Value

Type: [Map](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_collections_maps.htm)<String,Object>

A map of the template JSON attribute name/value pairs, where the name is a string with an object value. For attributes details, see [TemplateRepresentation](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_id.htm).

#### Example

```

```

### getTemplateConfig(templateIdOrApiName)

Gets the CRM Analytics template configuration by the specified ID or API name. The returned template configuration is a map of the JSON attributes as name/value pairs.

#### Signature

public static Map<String,Object\> getTemplateConfig(String templateIdOrApiName)

#### Parameters

templateIdOrApiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The template ID or developer name to retrieve the template configuration for.

#### Return Value

Type: [Map](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm)<String,Object>

A map of template configuration JSON attribute names and the object values. For attribute details, see [TemplateConfigurationRepresentation](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_configuration.htm).

#### Example

```

```

### getTemplates(options)

Get a filtered collection of CRM Analytics templates using search options.

#### Signature

public static Map<String,Object\> getTemplates(Wave.TemplatesSearchOptions options)

#### Parameters

options

Type: [Wave.TemplatesSearchOptions](atlas.en-us.apexref.meta/apexref/apex_class_Wave_TemplatesSearchOptions.htm#apex_class_Wave_TemplatesSearchOptions "The TemplatesSearchOptions class provides optional properties to filter the template collection.")

The search options to use for filtering the template collection.

#### Return Value

Type: [Map](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm)<String,Object>

A map of template names and the template object values. For template collection details, see [TemplateCollectionRepresentation](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates.htm).

#### Example

```

```

### getTemplates()

Gets all CRM Analytics templates.

#### Signature

public static Map<String,Object\> getTemplates()

#### Return Value

Type: [Map](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm)<String,Object>

A map of template names and the template object values. For template collection details, see [TemplateCollectionRepresentation](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates.htm).

#### Example

```

```

## Code Examples

```apex
@AuraEnabled(cacheable=true)
public static void List<String> getTemplateNames() {
  Map<String, Object> o = Wave.Templates.getTemplates(new Wave.TemplatesSearchOptions());
  List<Object> templates = (List<Object>) o.get('templates');
  List<String> names = new List<String>();
  for (Object templateObj : templates) {
    names.add((String) ((Map<String, Object>) templateObj.get('name'));
  }
  return names;
}
```

```
import getTemplates from '@salesforce/apex/Wave.Templates.getTemplates';
export default class Templates extends LightningElement {
  @wire(getTemplates, {
    // specifying 'options' is optional
    options: {
      // values in TemplatesSearchOptions go here; all optional
      type: 'app'
    }
  })
  onTemplates({ data, error }) {
    if (data) {
      console.log('template names=' + data.templates.map(l => l.name).join(', '));
    }
  }
}
```

```
String templateName = (String) Wave.Templates.getTemplate(templateId).get('name');
```

```apex
Map<String, Object> templateVariables = (Map<String, Object>) Wave.Templates.getTemplateConfig(templateId).get('variables');
```

```apex
Map<String,Object> templatesMap = Wave.Templates.getTemplates(new Wave.TemplatesSearchOptions());
```

## Related Topics

- Wave (atlas.en-us.apexref.meta/apexref/apex_namespace_wave.htm)
- Templates Methods (atlas.en-us.apexref.meta/apexref/apex_class_Wave_Templates.htm)
- getTemplate(templateIdOrApiName) (atlas.en-us.apexref.meta/apexref/apex_class_Wave_Templates.htm)
- getTemplateConfig(templateIdOrApiName) (atlas.en-us.apexref.meta/apexref/apex_class_Wave_Templates.htm)
- getTemplates(options) (atlas.en-us.apexref.meta/apexref/apex_class_Wave_Templates.htm)
- getTemplates() (atlas.en-us.apexref.meta/apexref/apex_class_Wave_Templates.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Wave.TemplatesSearchOptions (atlas.en-us.apexref.meta/apexref/apex_class_Wave_TemplatesSearchOptions.htm)
