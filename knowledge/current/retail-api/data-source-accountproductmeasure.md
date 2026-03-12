---
title: "Data Source: AccountProductMeasure"
domain: retail-api
topic: data-source-accountproductmeasure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.220Z
estimatedTokens: 57
keywords: [Data, Source, AccountProductMeasure, integration, metadata, JSON, datasources, configuration, payload]
---

# Data Source: AccountProductMeasure

> This example provides details on the integration metadata JSON with the data source.
    The following example shows the datasources configuration payload for
      AccountProductMeasure.

# Data Source: AccountProductMeasure

This example provides details on the integration metadata JSON with the data source. The following example shows the datasources configuration payload for AccountProductMeasure.

```

```

## Code Examples

```
{
 
 "datasources": [
 
 {
 
 "name": "{{DatasourceName}}"
 
 }
 
 ],
 
 "dimensions": {
 
 "kpidimension": {
 
 "measures": [
 
 {
 
 "name": "ProPlanIncrVolume",
 
 "label": "Planned Incr. Volume"
 
 }
 
 ]
 
 }
 
 },
 
 "exportsettings": {
 
 "csvseparator": ",",
  
 },
 
 "exportfilters": {

 "conditions": []
 }
}
```
