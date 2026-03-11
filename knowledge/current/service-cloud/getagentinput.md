---
title: "getAgentInput()"
domain: service-cloud
topic: getagentinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.959Z
keywords: [getAgentInput, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# getAgentInput()

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