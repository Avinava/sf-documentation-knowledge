---
title: "getTemplateConfig(templateIdOrApiName)"
domain: apex-reference
topic: gettemplateconfigtemplateidorapiname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.655Z
keywords: [getTemplateConfig, templateIdOrApiName, Gets, CRM, Analytics, template, configuration, specified, API, name., returned, map, JSON, attributes, name, value, pairs., Signature, Parameters, Return]
---

# getTemplateConfig(templateIdOrApiName)

> Gets the CRM Analytics template configuration by the specified ID or
      API name. The returned template configuration is a map of the JSON attributes as name/value
      pairs.

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