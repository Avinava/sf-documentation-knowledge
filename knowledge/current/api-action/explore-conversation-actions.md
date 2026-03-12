---
title: "Explore Conversation Actions"
domain: api-action
topic: explore-conversation-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.028Z
estimatedTokens: 570
keywords: [Explore, Conversation, Actions, Answer, user's, questions, voice, video, call, contents, transcript, REST, HTTP, Inputs, Outputs]
---

# Explore Conversation Actions

> Answer a user's questions about a voice or video call based on the contents of the call
  transcript.

# Explore Conversation Actions

Answer a user's questions about a voice or video call based on the contents of the call transcript.

This action is available in API version 60.0 and later.

On invocation, this action takes a natural language question about a voice or video call and uses an LLM to return an answer in rich text based on the call transcript.

Typical use cases include:

-   Answering questions about call sentiment
-   Determining whether a deal is likely to close based on a call transcript
-   Identifying customer blockers or challenges in a call

The user calling the action must have the Einstein Sales Call Explorer permission set and Read access to the voice or video call. This action does not respect flows that try to override this privilege, so flows in the system context still need to use a user with Read access to the call.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/exploreConversation

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| recordId | TypestringDescriptionRequired. The ID of the related voice or video call record to answer a question for. |
| question | TypestringDescriptionRequired. The question asked about the voice or video call. |
| promptVersion | TypestringDescriptionThe prompt used when answering a voice or video call. |

## Outputs

| Input | Details |
| --- | --- |
| answer | TypestringDescriptionThe answer to the call question in rich text format. |
| type | TypestringDescriptionThe format of the answer, such as rich text. |
| responseId | TypestringDescriptionThe response ID from the LLM, used for gathering feedback data. |
| requestId | TypestringDescriptionThe request ID from the LLM, used for gathering feedback data. |

## Usage

Sample Input

```

```

Sample Output

```

```

For more information about this action, see [Flow Core Actions: Explore Conversation](https://help.salesforce.com/s/articleView?id=platform.flow_ref_elements_actions_explore_conversation.htm&language=en_US "HTML (New Window)") and [Explore Conversation Invocable Action](https://help.salesforce.com/s/articleView?id=sales.ci_ia_explore_conv.htm&language=en_US "HTML (New Window)") in Salesforce Help.

## Code Examples

```
{
  "inputs": [{
      "recordId":"0LQSG000000gNTF4A2",
      "question":"What is the call about?"
  }]
}
```

```
[
  {
    "actionName":"exploreConversation",
    "errors":null,
    "invocationId":null,
    "isSuccess":true,
    "outcome":null,
    "outputValues":{
 "answer":"The call is about discussing the next steps for moving forward with an intermediate subscription for 25 user licenses. The salesperson, Sam Rhodes, is trying to coordinate with Jon Amos and Dale to finalize the purchase, considering the possibility of upgrading to an Advanced subscription if the budget allows.",
"requestId":"chatcmpl-BCxbhgFVv2CwHZVsAHYYX1PHfNwRc",
"type":"richtext",
"responseId":"dee515cc-4493-4bfe-a3ec-be07d993f020"
    }
  "sortOrder":-1,
  "version":1
  }
]
```
