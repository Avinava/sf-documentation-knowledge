---
title: "Tracking.ClickRetrieve"
domain: mc-programmatic-content
topic: trackingclickretrieve
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.904Z
estimatedTokens: 147
keywords: [Tracking.ClickRetrieve, Function, Ordinal, Criteria, filter, results, **Overview**, **Syntax**]
---

> Tracking.ClickRetrieve(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Criteria used to filter tracking results

# Tracking.ClickRetrieve

## **Overview**

Returns click tracking information for this send specified by the specified filter criteria

### **Syntax**

Tracking.ClickRetrieve(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Criteria used to filter tracking results |

## Example

This sample code returns click tracking information for the send with the send ID of 12345.

```
var singleSend = Send.Init(12345);
var results = singleSend.Tracking.Clicks.Retrieve({Property:"ID",SimpleOperator:"equals",Value:12345});
```

Last Updated: Jun 8, 2021
