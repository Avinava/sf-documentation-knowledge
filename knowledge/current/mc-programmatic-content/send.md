---
title: "Send"
domain: mc-programmatic-content
topic: send
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:24.046Z
estimatedTokens: 361
keywords: [Send, Function, Ordinal, Email, address, triggered, Attributes, included, time, **Overview**, **Syntax**]
---

> Send(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Email address used for triggered send



    2
    string
    
    Attributes included at send time for triggered send

# Send

## **Overview**

Sends an email message using an existing triggered send definition. This function does not support the use of subscriber key as a valid parameter.

### **Syntax**

Send(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Email address used for triggered send |
| 2 | string |  | Attributes included at send time for triggered send |

## Example

This sample code initializes the triggeredSend object and sends the email to the specified email address:

```
var triggeredSend = TriggeredSend.Init("triggeredSend");
var status = triggeredSend.Send("aruiz@example.com");
```

This sample code initializes the triggeredSend object and sends the email to the specified email address, which includes the send time attributes of a first name and a coupon code. You can pass in any attribute previously defined as part of the send time attributes.

```
var triggeredSend = TriggeredSend.Init("triggeredSend");
var status = triggeredSend.Send("aruiz@example.com", {FirstName:"Angel", CouponCode:"AA1AF"});
```

The send returns a status of either OK or Error. You can review the LastMessage for more detailed error information. For example, This sample code demonstrates this using the triggeredSend from the previous example.

```
var status = triggeredSend.Send("aruiz@example.com");
if(status != "OK")
{
   var message = TriggeredSend.LastMessage;
}
```

Last Updated: Jun 8, 2021
