---
title: "setAgentInput()"
domain: service-cloud
topic: setagentinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.445Z
estimatedTokens: 224
keywords: [setAgentInput, text, agent’s, input, area, chat, log, specific, key.Available, API, version, 29.0, later, Arguments, Sample]
---

# setAgentInput()

> Sets the string of text in the agent’s text input area in the chat log of a
        chat with a specific chat key.Available in API version 29.0 or
            later.

# setAgentInput()

Sets the string of text in the agent’s text input area in the chat log of a chat with a specific chat key.Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chatKey associated with the chat for which to set the agent’s input text. |
| text | String | The string of text which you want to set into an agent's input. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if setting the agent’s input was successful; false if setting the agent’s input wasn’t successful. |

## Code Examples

```
sforce.console.chat.setAgentInput(chatKey:String, text:String, callback:Function)
```

```
<apex:page >
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testSetAgentInput();">Set Agent Input</a> 

    <script type="text/javascript">

        function testSetAgentInput() {
            //Get the value for 'myChatKey'from the sforce.console.chat.getDetailsByPrimaryTabId() or other chat methods. 
            //These values are for example purposes only
            var chatKey = 'myChatKey';
            var text = 'This is example text to set the agent input'
            sforce.console.chat.setAgentInput(chatKey, text, setAgentInputSuccess);
        }
        
        function setAgentInputSuccess(result) {
            //Report whether setting the agent's input was succesful
            if (result.success == true) {
                alert('The text in the agent input has been updated');
            } else {
                alert('Setting the agent input was not Succesful');
            }
        };
    

    </script>
</apex:page>
```
