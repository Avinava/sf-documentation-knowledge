---
title: "Tracking.TotalByIntervalRetrieve"
domain: mc-programmatic-content
topic: trackingtotalbyintervalretrieve
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.481Z
estimatedTokens: 216
keywords: [Tracking.TotalByIntervalRetrieve, Function, Ordinal, data, aggregate, Choose, Send, Open, Click, Bounce, Unsubscribe, Requ, **Overview**, **Syntax**]
---

# Tracking.TotalByIntervalRetrieve

> Tracking.TotalByIntervalRetrieve(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Type of data to aggregate and return. Choose Send, Open, Click, Bounce, or Unsubscribe.



    2
    string
    Requ

# Tracking.TotalByIntervalRetrieve

## **Overview**

Returns tracking data related to an initialized send specified by type, duration, and interval

### **Syntax**

Tracking.TotalByIntervalRetrieve(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Type of data to aggregate and return. Choose Send, Open, Click, Bounce, or Unsubscribe. |
| 2 | string | Required | Start date of data period |
| 3 | string | Required | End date of data period |
| 4 | string | Required | Interval used to aggregate data. Choose day or hour. |

## Example

This sample code returns a month's worth of click data for the initialized send aggregated by day:

```
var singleSend = Send.Init(12345);
var results = singleSend.Tracking.TotalByInterval.Retrieve('Click', '07-01-2010', '07-31-2010', 'day');
```

Last Updated: Jun 8, 2021
