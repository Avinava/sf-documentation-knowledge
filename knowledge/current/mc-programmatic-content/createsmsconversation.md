---
title: "CreateSmsConversation"
domain: mc-programmatic-content
topic: createsmsconversation
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.289Z
estimatedTokens: 366
keywords: [CreateSmsConversation, Function, Ordinal, Short, code, SMS, communication, Mobile, number, begin, conversation, **Overview**, **Syntax**, Usage]
---

# CreateSmsConversation

> CreateSmsConversation(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Short code used for SMS communication



    2
    string
    Required
    Mobile number value used to begin the conversation. 

# CreateSmsConversation

## **Overview**

Creates a conversation with the specified MO user. Use this AMPscript function for MobileConnect. You cannot use this function with conversation-based templates, including Double Opt-In or Info Capture. Because this function always returns a true value, don't use this function as part of a decision-making workflow.

### **Syntax**

CreateSmsConversation(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Short code used for SMS communication |
| 2 | string | Required | Mobile number value used to begin the conversation. You can use MOBILE_NUMBER to pass in the value as necessary. |
| 3 | string | Required | Keyword to use for the NEXT keyword function |
| 4 | string | Required | App used in the conversation. Enter MOBILECONNECT. |

### Usage

As a response to the MO user, this example will create the conversation.

```
%%=CreateSmsConversation("12345",MOBILE_NUMBER,"KEYWORD","MOBILECONNECT")=%%
```

Please note that this function always returns true if successful. Failure will return an exception, so this function should not be used for decision making. Please note that this function should not be used in conversation based templates such as Double Opt-In, Vote/Survey or Info-Capture. Please note that this function only accepts "MOBILECONNECT" as Source. If any other value is provided, the user will receive an error message.

Last Updated: Jun 8, 2021
