---
title: "Clicks.Retrieve"
domain: mc-programmatic-content
topic: clicksretrieve
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:24.058Z
estimatedTokens: 124
keywords: [Clicks.Retrieve, Function, Ordinal, Criteria, filter, results, **Overview**, **Syntax**]
---

> Clicks.Retrieve(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Criteria used to filter tracking results

# Clicks.Retrieve

## **Overview**

Returns click tracking information for a triggered send specified by the specified filter criteria

### **Syntax**

Clicks.Retrieve(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Criteria used to filter tracking results |

## Example

```
var tsd = TriggeredSend.Init("MyTSDKey");
var results = tsd.Tracking.Clicks.Retrieve({Property:"SendUrlID",SimpleOperator:"equals",Value:12345});
```

Last Updated: Jun 8, 2021
