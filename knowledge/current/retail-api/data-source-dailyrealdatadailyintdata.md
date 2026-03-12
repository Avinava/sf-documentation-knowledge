---
title: "Data Source: DailyRealData/DailyIntData"
domain: retail-api
topic: data-source-dailyrealdatadailyintdata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.258Z
estimatedTokens: 63
keywords: [Data, Source, DailyRealData, DailyIntData, sample, code, snippets, integration, metadata, JSON, datasources, configuration, payload]
---

# Data Source: DailyRealData/DailyIntData

> This section provides sample code snippets for the integration metadata JSON with the
    data source. The following example shows the datasources configuration payload for
      DailyRealData/dailyIntData.

# Data Source: DailyRealData/DailyIntData

This section provides sample code snippets for the integration metadata JSON with the data source. The following example shows the datasources configuration payload for DailyRealData/dailyIntData.

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
