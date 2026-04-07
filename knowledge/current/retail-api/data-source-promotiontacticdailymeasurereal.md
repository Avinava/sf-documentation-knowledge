---
title: "Data Source: PromotionTacticDailyMeasureReal"
domain: retail-api
topic: data-source-promotiontacticdailymeasurereal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:39:11.886Z
estimatedTokens: 83
keywords: [Source, PromotionTacticDailyMeasureReal, integration, metadata, JSON, datasources, configuration, payload]
---

> This example provides details on the integration metadata JSON with the data source.
    This example provides details on the integration metadata JSON with the data source. The
    following example shows the datasources configuration payload for
      PromotionTacticDailyMeasureReal.

# Data Source: PromotionTacticDailyMeasureReal

This example provides details on the integration metadata JSON with the data source. This example provides details on the integration metadata JSON with the data source. The following example shows the datasources configuration payload for PromotionTacticDailyMeasureReal.

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
