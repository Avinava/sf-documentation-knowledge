---
title: "CRM Analytics Apex Lens"
domain: bi-dev-guide-sdk
topic: crm-analytics-apex-lens
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.858Z
estimatedTokens: 447
keywords: [CRM, Analytics, Apex, Lens, Lenses, retrieve, collection, assets, describe, asset, Wave.Lenses]
---

# CRM Analytics Apex Lens

> Use the Lenses class to retrieve a collection of
    CRM Analytics lens assets and to describe a single lens asset.

# CRM Analytics Apex Lens

Use the Lenses class to retrieve a collection of CRM Analytics lens assets and to describe a single lens asset.

The CRM Analytics Wave.Lenses class provides access from Apex to the CRM Analytics lens assets.

## Wave.Lenses collection methods

Map<String, Object> getLenses()

Retrieves a collection of lenses.

Map<String, Object> getLenses(String searchOptions)

Retrieves a collection of lenses using search options.

## Example

Apex class example

```

```

## Example

LWC example

```

```

## Wave.Lenses describe methods

Map<String, Object> getLens(String lensIdOrApiName)

Retrieves a lens by ID or the API name.

Map<String, Object> getLens(String lensIdOrApiName, String filterGroup)

Retrieves a lens by ID or the API name and a filterGroup parameter.

## Example

Apex class example

```

```

## Example

LWC example

```

```

For information on request parameters and the Lens JSON responses, see the [Analytics REST API Developer Guide: Lenses List Resource](https://developer.salesforce.com/docs/atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses.htm).

#### See Also

-   [CRM Analytics Apex Query](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_query.htm "Query your data in CRM Analytics from any Apex class. Construct well-formed queries using the query builder.")

-   [CRM Analytics Apex QueryBuilder Examples](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_examples.htm "Build simple or complex SAQL queries using QueryBuilder.")

-   [CRM Analytics Apex Templates](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_templates.htm "Use the Templates class to retrieve a collection of CRM Analytics templates, describe a single template and template configuration.")

## Code Examples

```apex
public with sharing class LensController {
  public LensController() {
  }

  @AuraEnabled(cachable=true)
  public static Map<String, Object> getLenses() {
    // This has all fields available, plus filterGroup; all fields are optional/nullable
    Wave.LensesSearchOptions options = new Wave.LensesSearchOptions();
    options.q = 'widget';
    options.filterGroup = 'supplemental';
    options.scope = 'CreatedByMe';
    options.page = null;
    options.sortParam = 'Name';

    // Pass null to get the default search options or leave it off completely to return
    // a collection with no search options
    Map<String, Object> lensesJson = Wave.Lenses.getLenses(options);

    // lensesJson is the JSON response as an Apex Map (from JSON.deserializedUntyped), which
    // you can pull fields from
    return lensesJson;
  }
}
```

```
import {LightningElement, wire} from "lwc";
import getLenses from "@salesforce/apex/Wave.Lenses.getLenses";

export default class Lenses extends LightningElement {
  results;

  @wire(getLenses, {
    options: {
      // All are optional
      filterGroup = "Supplemental",
      sortParam = "Name"
    }
  })
  // can also use these
  // @wire(getLenses, { options: {} })
  // @wire(getLenses, {})
  // @wire(getLenses)
  // @wire(getLenses, { options: {'$options'} }) // with a binding
  onLenses({data, error}) {
    if (error) {
      this.results = "Error:
" + JSON.stringify(error, undefined, 2);
    } else if (data) {
      // data is the LensCollectionRepresentation JSON object 
      this.results = "Lenses: " + data.lenses.map(l => `${l.name} {$l.id}`).join(", ");
    } else {
      this.results = "No data";
    }
  }
}
```

```apex
public with sharing class LensController {
  public LensController() {
  }

  @AuraEnabled(cacheable=true)
  public static Map<String, Object> getLens(String idOrName) {
    Map<String, Object> lens = Wave.Lenses.getLens(idOrName);
    return lens;
  }
}
```

```
import {LightningElement, wire} from "lwc";
import getLenses from "@salesforce/apex/Wave.Lenses.getLens";

export default class Lens extends LightningElement {
  lensIdOrApiName; // set this to the ID or name you want to retrieve

  results;

  @wire(getLens, {
    lensIdOrApiName: '$lensIdOrApiName'
  })
  onLens({data, error}) {
    if (error) {
      this.results = "Error:
" + JSON.stringify(error, undefined, 2);
    } else if (data) {
      // data is the LensRepresentation JSON object 
      this.results = `Lens: ${data.name} ${data.id})`;
    } else {
      this.results = "No data";
    }
  }
}
```

## Related Topics

- CRM Analytics Apex Query (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_query.htm)
- CRM Analytics Apex QueryBuilder Examples (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_examples.htm)
- CRM Analytics Apex Templates (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_templates.htm)
