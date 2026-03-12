---
title: "Data Source: WeeklyMeasureInt"
domain: retail-api
topic: data-source-weeklymeasureint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.326Z
estimatedTokens: 58
keywords: [Data, Source, WeeklyMeasureInt, sample, code, snippets, integration, metadata, JSON, datasources, configuration, payload]
---

# Data Source: WeeklyMeasureInt

> This section provides sample code snippets for the integration metadata JSON with the
  data source. The following example shows the datasources configuration payload for
   WeeklyMeasureInt.

# Data Source: WeeklyMeasureInt

This section provides sample code snippets for the integration metadata JSON with the data source. The following example shows the datasources configuration payload for WeeklyMeasureInt.

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
