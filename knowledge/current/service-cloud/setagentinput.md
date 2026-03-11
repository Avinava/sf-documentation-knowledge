---
title: "setAgentInput()"
domain: service-cloud
topic: setagentinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.668Z
keywords: [setAgentInput, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# setAgentInput()

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