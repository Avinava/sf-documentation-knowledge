---
title: "Subscribers.Tracking.Retrieve"
domain: mc-programmatic-content
topic: subscriberstrackingretrieve
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.820Z
estimatedTokens: 163
keywords: [Subscribers.Tracking.Retrieve, Function, Ordinal, Criteria, search, subscribers, **Overview**, **Syntax**]
---

# Subscribers.Tracking.Retrieve

> Subscribers.Tracking.Retrieve(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Criteria used to search for list subscribers

# Subscribers.Tracking.Retrieve

## **Overview**

Returns an array of tracking data related to any subscribers specified by the passed filter argument

### **Syntax**

Subscribers.Tracking.Retrieve(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Criteria used to search for list subscribers |

## Example

This sample code returns an array of tracking data for any subscribers specified by the passed filter argument:

```
var myList = List.Init('MyList');
var results = myList.Subscribers.Tracking.Retrieve({Property:"SubscriberKey", SimpleOperator:"equals", Value:"MyKey"});
```

Last Updated: Jun 8, 2021
