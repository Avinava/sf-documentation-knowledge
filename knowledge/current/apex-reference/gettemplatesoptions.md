---
title: "getTemplates(options)"
domain: apex-reference
topic: gettemplatesoptions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.655Z
keywords: [getTemplates, options, Get, filtered, collection, CRM, Analytics, templates, search, options., Signature, Parameters, Return, Value, Example]
---

# getTemplates(options)

> Get a filtered collection of CRM Analytics templates using search
      options.

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