---
title: "Subscribers.Unsubscribe"
domain: mc-programmatic-content
topic: subscribersunsubscribe
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.825Z
estimatedTokens: 146
keywords: [Subscribers.Unsubscribe, Function, Ordinal, Attribute, containing, Email, address, subscriber, JSON, EmailAddress, SubscriberKey, subscri, **Overview**, **Syntax**]
---

# Subscribers.Unsubscribe

> Subscribers.Unsubscribe(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Attribute containing Email address of subscriber or a JSON object containing the EmailAddress and SubscriberKey values for the subscri

# Subscribers.Unsubscribe

## **Overview**

Unsubscribes the specified subscriber from the list

### **Syntax**

Subscribers.Unsubscribe(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Attribute containing Email address of subscriber or a JSON object containing the EmailAddress and SubscriberKey values for the subscriber |

## Example

This sample code removes the specified subscriber from the list.

```
var myList = List.Init("myList");
var status = myList.Subscribers.Unsubscribe("aruiz@example.com");
```

Last Updated: Jun 8, 2021
