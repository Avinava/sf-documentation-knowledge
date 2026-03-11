---
title: "getTemplate(templateIdOrApiName)"
domain: apex-reference
topic: gettemplatetemplateidorapiname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.655Z
keywords: [getTemplate, templateIdOrApiName, Gets, CRM, Analytics, template, specified, API, name., returned, map, JSON, attributes, name, value, pairs., Signature, Parameters, Return, Value]
---

# getTemplate(templateIdOrApiName)

> Gets a CRM Analytics template by the specified ID or API name. The
      returned template is a map of the template JSON attributes as name/value
    pairs.

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