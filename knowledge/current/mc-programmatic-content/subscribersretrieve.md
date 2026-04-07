---
title: "Subscribers.Retrieve"
domain: mc-programmatic-content
topic: subscribersretrieve
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.816Z
estimatedTokens: 160
keywords: [Subscribers.Retrieve, Function, Ordinal, Criteria, search, subscribers, **Overview**, **Syntax**]
---

# Subscribers.Retrieve

> Subscribers.Retrieve(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Criteria used to search for list subscribers

# Subscribers.Retrieve

## **Overview**

Retrieves a list of subscribers based on the passed filter. The call returns an EmailTypePreference value only if the call involves a single subscriber.

### **Syntax**

Subscribers.Retrieve(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Criteria used to search for list subscribers |

## Example

This sample code returns a list of subscribers based on the specified criteria.

```
var myList = List.Init('MyList');
var subs = myList.Subscribers.Retrieve({Property:"CustomerID", SimpleOperator:"equals", Value:"TestList"});
```

Last Updated: Jun 8, 2021
