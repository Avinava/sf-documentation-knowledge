---
title: "Subscribers.Upsert"
domain: mc-programmatic-content
topic: subscribersupsert
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.835Z
estimatedTokens: 197
keywords: [Subscribers.Upsert, Function, Ordinal, Attribute, containing, Email, address, subscriber, JSON, EmailAddress, SubscriberKey, subscribe, **Overview**, **Syntax**]
---

# Subscribers.Upsert

> Subscribers.Upsert(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Attribute containing Email address of subscriber or a JSON object containing the EmailAddress and SubscriberKey values for the subscribe

# Subscribers.Upsert

## **Overview**

Adds any subscriber not on the specified list and updates any specified attributes

### **Syntax**

Subscribers.Upsert(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Attribute containing Email address of subscriber or a JSON object containing the EmailAddress and SubscriberKey values for the subscriber |
| 2 | string | Required | Any additional attributes regarding the subscriber. If the Status attribute exists in the passed attributes, it updates the subscriber status |

## Example

This sample code adds the specified values to the subscriber.

```
var myList = List.Init("myList");
var status = myList.Subscribers.Upsert("aruiz@example.com",{ZipCode:"46202"});
```

Last Updated: Jun 8, 2021
