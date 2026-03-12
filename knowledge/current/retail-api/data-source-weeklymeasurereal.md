---
title: "Data Source: WeeklyMeasureReal"
domain: retail-api
topic: data-source-weeklymeasurereal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.328Z
estimatedTokens: 58
keywords: [Data, Source, WeeklyMeasureReal, sample, code, snippets, integration, metadata, JSON, datasources, configuration, payload]
---

# Data Source: WeeklyMeasureReal

> This section provides sample code snippets for the integration metadata JSON with the
  data source. The following example shows the datasources configuration payload for
   WeeklyMeasureReal.

# Data Source: WeeklyMeasureReal

This section provides sample code snippets for the integration metadata JSON with the data source. The following example shows the datasources configuration payload for WeeklyMeasureReal.

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
