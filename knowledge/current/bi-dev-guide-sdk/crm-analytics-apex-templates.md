---
title: "CRM Analytics Apex Templates"
domain: bi-dev-guide-sdk
topic: crm-analytics-apex-templates
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.867Z
estimatedTokens: 763
keywords: [CRM, Analytics, Apex, Templates, retrieve, collection, describe, template, configuration, Wave.Templates]
---

# CRM Analytics Apex Templates

> Use the Templates class to retrieve a collection
    of CRM Analytics templates, describe a single template and template configuration.

# CRM Analytics Apex Templates

Use the Templates class to retrieve a collection of CRM Analytics templates, describe a single template and template configuration.

The CRM Analytics Wave.Templates class provides access from Apex to CRM Analytics templates. The methods are annotated with @AuraEnabled for use in Lightning Web Components (LWC).

## Wave.Templates collection methods

Map<String, Object> getTemplates()

Retrieves a collection of templates.

Map<String, Object> getTemplates(Wave.TemplatesSearchOptions searchOptions)

Retrieves a collection of templates using search options.

## Example

Apex class example

public with sharing class TemplatesController { public TemplatesController() { } @AuraEnabled(cachable=true) public static List<String, Object> getTemplateNames() { // This has filterGroup, type, and options; all fields are optional/nullable Wave.TemplatesSearchOptions options = new Wave.TemplatesSearchOptions(); options.type = 'app'; options.filterGroup = 'small'; options.options = 'ViewOnly'; // Pass null to get the default search options or leave it off completely to return // a collection with no search options Map<String, Object> templates = Wave.Templates.getTemplates(options); // templates is the JSON response as an Apex Map (from JSON.deserializedUntyped), which // you can pull fields from List<Object> templateList = (List<Object>) templates.get('templates'); List<String> names = new List<String>(); for (Object templateObj : templateList) { names.add((String) ((Map<String, Object>) templateObj).get('name')); } return names; } }

## Example

LWC example

```

```

## Wave.Templates describe methods

Map<String, Object> getTemplate(String templateIdOrApiName)

Retrieves a template by ID or the API name.

Map<String, Object> getTemplateConfig(String templateIdOrApiName)

Retrieves a template configuration by ID or the API name.

## Example

Apex class example

```

```

## Example

LWC example

```

```

For information on request parameters and the Template JSON responses, see the [Analytics REST API Developer Guide: Templates List Resource](https://developer.salesforce.com/docs/atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates.htm). To see the full reference for the Templates Apex class, see the [Apex Reference Guide: wave Namespace](https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_namespace_wave.htm).

#### See Also

-   [CRM Analytics Apex Lens](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_lens.htm "Use the Lenses class to retrieve a collection of CRM Analytics lens assets and to describe a single lens asset.")

-   [CRM Analytics Apex Query](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_query.htm "Query your data in CRM Analytics from any Apex class. Construct well-formed queries using the query builder.")

-   [CRM Analytics Apex QueryBuilder Examples](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_examples.htm "Build simple or complex SAQL queries using QueryBuilder.")

## Code Examples

```
import {LightningElement, wire} from "lwc";
import getTemplates from "@salesforce/apex/Wave.Templates.getTemplates";

export default class Templates extends LightningElement {
  results;
  
  @wire(getTemplates, {
    options: {
      // All are optional
      type = 'app'
    }
  })
  
  // can also use these
  // @wire(getTemplates, { options: {} })
  // @wire(getTemplates, {})
  // @wire(getTemplates)
  // @wire(getTemplates, { options: {'$options'} }) // with a binding
  onTemplates({ data, error }) {
    if (error) {
      this.results = "Error:
" + JSON.stringify(error, undefined, 2);
    } else if (data) {
      // data is the TemplateCollectionRepresentation JSON object
      this.results = 'Template names: ' + data.templates.map(l => ${l.name}).join(', ');
    } else {
       this.results = "No data";
    }
  }
}
```

```apex
public with sharing class TemplateController {
    public TemplateController() {
    }
    
    @AuraEnabled(cacheable=true)
    public static Map<String, Object> getTemplate(String idOrName) {
      Map<String, Object> template = Wave.Templates.getTemplate(idOrName);
      return template;
    }
}
```

```
import {LightningElement, wire} from "lwc";
import getTemplate from "@salesforce/apex/Wave.Templates.getTemplate";
    
export default class Lens extends LightningElement {
    templateIdOrApiName; // set this to the ID or name you want to retrieve
    
    results;
    
    @wire(getTemplate, {
      templateIdOrApiName: '$templateIdOrApiName'
    })
    onTemplate({data, error}) {
      if (error) {
        this.results = "Error:
" + JSON.stringify(error, undefined, 2);
      } else if (data) {
        // data is the TemplateRepresentation JSON object 
        this.results = 'Template: ${data.name} ${data.id}';
      } else {
        this.results = "No data";
      }
    }
}
```

## Related Topics

- CRM Analytics Apex Lens (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_lens.htm)
- CRM Analytics Apex Query (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_query.htm)
- CRM Analytics Apex QueryBuilder Examples (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_examples.htm)
