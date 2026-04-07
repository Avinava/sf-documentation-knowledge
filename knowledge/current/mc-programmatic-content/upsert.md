---
title: "Upsert"
domain: mc-programmatic-content
topic: upsert
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.988Z
estimatedTokens: 195
keywords: [Upsert, Function, Ordinal, **Overview**, **Syntax**]
---

> Upsert(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required

# Upsert

## **Overview**

Updates a subscriber if one currently exists. If the subscriber does not exist, this function will add it.

### **Syntax**

Upsert(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required |  |

## Example

This sample code updates the specified values for an existing subscriber or creates a new subscriber if necessary.

```
var newSubscriber = {
    "EmailAddress": "test.008@example.com",
    "SubscriberKey": "20100730001",
    "EmailTypePreference": "Text",
    "Attributes":{"First Name": "test.008", "Last Name": "test.008" },
    "Lists": {"Status": "Active", "ID": 12345, "Action": "Upsert"}
};

var subObj = Subscriber.Init("SubKey");
var status = subObj.Upsert(newSubscriber);
```

Last Updated: Jun 8, 2021
