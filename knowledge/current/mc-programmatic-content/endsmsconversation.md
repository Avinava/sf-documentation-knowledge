---
title: "EndSmsConversation"
domain: mc-programmatic-content
topic: endsmsconversation
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.338Z
estimatedTokens: 219
keywords: [EndSmsConversation, Function, Ordinal, Short, code, SMS, communication, mobile, number, end, conversation, **Overview**, **Syntax**, Usage]
---

# EndSmsConversation

> EndSmsConversation(1, 2)


  
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
    The mobile number value used to end the conversation. You can

# EndSmsConversation

## **Overview**

End any current conversation on an SMS response from an MO user. Use this AMPscript function for MobileConnect. You cannot use this function with conversation-based templates, including Double Opt-In or Info Capture. Becase this function always returns a true value, don't use this function as part of a decision-making workflow.

### **Syntax**

EndSmsConversation(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Short code used for SMS communication |
| 2 | string | Required | The mobile number value used to end the conversation. You can use MOBILE_NUMBER to pass in the value as necessary. |

### Usage

During a conversation between the MT user and the MO user, this example will end the conversation.

```
%%=EndSmsConversation("12345",MOBILE_NUMBER)=%%
```

Last Updated: Jun 8, 2021
