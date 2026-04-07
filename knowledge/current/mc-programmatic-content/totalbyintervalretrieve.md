---
title: "TotalByInterval.Retrieve"
domain: mc-programmatic-content
topic: totalbyintervalretrieve
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:24.069Z
estimatedTokens: 226
keywords: [TotalByInterval.Retrieve, Function, Ordinal, aggregate, include, Send, Open, CLick, Bounce, Unsubscribe, datetime, **Overview**, **Syntax**]
---

> TotalByInterval.Retrieve(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Type of data to aggregate and return. Valid values include Send, Open, CLick, Bounce, and Unsubscribe.



    2
    datetime

# TotalByInterval.Retrieve

## **Overview**

Returns tracking data related to an initialized triggered send specified by type, duration, and interval

### **Syntax**

TotalByInterval.Retrieve(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Type of data to aggregate and return. Valid values include Send, Open, CLick, Bounce, and Unsubscribe. |
| 2 | datetime | Required | Start date for data period |
| 3 | datetime | Required | End date for data period |
| 4 | string | Required | Interval used to aggregate data. Valid values include day and hour. |

## Example

This sample code returns a month's worth of click data for the initialized triggered send aggregated by day:

```
var tsd = TriggeredSend.Init("MyTSDKey");
var results = tsd.Tracking.TotalByInterval.Retrieve('Click', '07-01-2010', '07-31-2010', 'day');
```

Last Updated: Jun 8, 2021
