---
title: "Clone a Dashboard"
domain: api-analytics
topic: clone-a-dashboard
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.754Z
estimatedTokens: 120
keywords: [Clone, Dashboard, Creates, copy, sending, POST, resource]
---

# Clone a Dashboard

> Creates a copy of a dashboard by sending a POST request to the Dashboard List
        resource.

# Clone a Dashboard

Creates a copy of a dashboard by sending a POST request to the Dashboard List resource.

## Example

You want to clone dashboard 01ZR00000008gkvMAA and save it in a new folder with ID 00lR0000000DnRZIA0.

This POST request /services/data/v35.0/analytics/dashboards/?cloneId=01ZR00000008gkvMAA to the Dashboard List resource clones the dashboard.

```

```

The response to the POST request returns the following details about the cloned dashboard.

```

```

## Code Examples

```
{"folderId":"00lR0000000DnRZIA0"}
```

```
{ "attributes" : 
  {  "dashboardId" : "01ZR00000004SZZMA2",     
     "dashboardName" : "Sales Manager Dashboard",     
     "statusUrl" : "/services/data/v35.0/analytics/dashboards/01ZR00000004SZZMA2/status",     
     "type" : "Dashboard" },   
...
  "folderId" : "00lR0000000DnRZIA0",   
  "id" : "01ZR00000004SZZMA2",   
  "layout" : { 
    "columns" : [ 
      { "components" : [ 0, 1, 2, 3 ] }, 
      { "components" : [ 4, 5, 6 ] }, 
      { "components" : [ 7 ] } ],     
    "gridLayout" : false },   
  "name" : "Sales Manager Dashboard",   
  "runningUser" : { "displayName" : "Fred Wiliamson", "id" : "005R0000000Hv5rIAC" } 
}
```
