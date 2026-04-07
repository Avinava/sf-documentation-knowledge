---
title: "Subscribers.Update"
domain: mc-programmatic-content
topic: subscribersupdate
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.830Z
estimatedTokens: 181
keywords: [Subscribers.Update, Function, Ordinal, Attribute, containing, Email, address, subscriber, JSON, EmailAddress, SubscriberKey, subscribe, **Overview**, **Syntax**]
---

# Subscribers.Update

> Subscribers.Update(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Attribute containing Email address of subscriber or a JSON object containing the EmailAddress and SubscriberKey values for the subscribe

# Subscribers.Update

## **Overview**

Updates the status of the specified subscriber on the initialized list. Initialize the list using the list's external key value

### **Syntax**

Subscribers.Update(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Attribute containing Email address of subscriber or a JSON object containing the EmailAddress and SubscriberKey values for the subscriber |
| 2 | string | Required | New status of subscriber on initialized list |

## Example

This sample code sets the status of the subscriber to active.

```
var myList = List.Init("myList");
var status = myList.Subscribers.Update("aruiz@example.com","Active");
```

Last Updated: Jun 8, 2021
