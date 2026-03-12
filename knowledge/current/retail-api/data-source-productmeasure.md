---
title: "Data Source: ProductMeasure"
domain: retail-api
topic: data-source-productmeasure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.294Z
estimatedTokens: 57
keywords: [Data, Source, ProductMeasure, sample, code, snippets, integration, metadata, JSON, datasources, configuration, payload]
---

# Data Source: ProductMeasure

> This section provides sample code snippets for the integration metadata JSON with the
    data source. The following example shows the datasources configuration payload for
      ProductMeasure.

# Data Source: ProductMeasure

This section provides sample code snippets for the integration metadata JSON with the data source. The following example shows the datasources configuration payload for ProductMeasure.

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
