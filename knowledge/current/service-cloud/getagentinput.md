---
title: "getAgentInput()"
domain: service-cloud
topic: getagentinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.486Z
estimatedTokens: 229
keywords: [getAgentInput, text, currently, agent’s, input, area, chat, log, specific, key, API, version, 29.0, later, Arguments]
---

# getAgentInput()

> Returns the string of text which is currently in the agent’s text input area
        in the chat log of a chat with a specific chat key. Available in API version 29.0 or
            later.

# getAgentInput()

Returns the string of text which is currently in the agent’s text input area in the chat log of a chat with a specific chat key. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chatKey associated with the chat for which to retrieve the agent’s input text. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| text | String | The text that is currently in an agent’s text input area. |
| success | Boolean | true if getting the agent’s input was successful; false if getting the agent’s input wasn’t successful. |

## Code Examples

```
sforce.console.chat.getAgentInput(chatKey:String, callback:Function)
```

```
<apex:page >
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testGetAgentInput();">Get Agent Input</a> 

    <script type="text/javascript">

        function testGetAgentInput() {
            //Get the value for 'myChatKey'from the sforce.console.chat.getDetailsByPrimaryTabId() or other chat methods. 
            //These values are for example purposes only
            var chatKey = 'myChatKey';
            sforce.console.chat.getAgentInput(chatKey, getAgentInputSuccess);
        }
        
        function getAgentInputSuccess(result) {
            //Report whether getting the agent's input was successful
            if (result.success == true) {
                agentInput = result.text;
                alert('The text in the agent input is: ' + agentInput);
            } else {
                alert('Getting the agent input was not successful');
            }
        };
    

    </script>
</apex:page>
```
