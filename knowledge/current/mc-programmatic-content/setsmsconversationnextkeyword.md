---
title: "SetSmsConversationNextKeyword"
domain: mc-programmatic-content
topic: setsmsconversationnextkeyword
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.373Z
estimatedTokens: 342
keywords: [SetSmsConversationNextKeyword, Function, Ordinal, Short, code, SMS, service, MOBILE_NUMBER, variable, user's, mobile, number, **Overview**, **Syntax**, Usage]
---

# SetSmsConversationNextKeyword

> SetSmsConversationNextKeyword(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Short code of the SMS service



    2
    string
    Required
    MOBILE_NUMBER variable for the user's mobile number





# SetSmsConversationNextKeyword

## **Overview**

Sets the keyword for the next conversation path based on an SMS response from an MO user. Use the current keyword or a new keyword for a different conversation path. You can use this AMPscript function for MobileConnect. This function does not create a new conversation. SetSMSConversationNextKeyword directs the current conversation to the next keyword to use as part of that overall conversation. You cannot use this function with conversation-based templates, including Double Opt-In or Info Capture

### **Syntax**

SetSmsConversationNextKeyword(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Short code of the SMS service |
| 2 | string | Required | MOBILE_NUMBER variable for the user's mobile number |
| 3 | string | Required | Keyword name to set as the next conversation keyword |

### Usage

During a conversation between the MT user and the MO user, this example will change to the conversation path indicated by the EXAMPLE keyword.

```
%%=SetSmsConversationNextKeyword('12345',MOBILE_NUMBER,'EXAMPLE')=%%
```

The conversation is moved to the new path indicated and proceeds from there. Please note that this example does not execute the set keyword immediately; it sets the keyword to handle the next message from the MO user.

Last Updated: Jun 8, 2021
