---
title: "Subscribers.Add"
domain: mc-programmatic-content
topic: subscribersadd
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.224Z
estimatedTokens: 138
keywords: [Subscribers.Add, Function, Ordinal, Subscriber, email, address, Additional, attributes, **Overview**, **Syntax**]
---

> Subscribers.Add(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Subscriber email address



    2
    string
    Required
    Additional subscriber attributes

# Subscribers.Add

## **Overview**

Allows you to add a subscriber to a list

### **Syntax**

Subscribers.Add(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Subscriber email address |
| 2 | string | Required | Additional subscriber attributes |

## Example

This sample code adds the subscriber and that subscriber's first and last names.

```
var myList = List.Init("myList");
var status = myList.Subscribers.Add("aruiz@example.com",{FirstName:"Angel",LastName:"Ruiz"});
```

Last Updated: Jun 8, 2021
