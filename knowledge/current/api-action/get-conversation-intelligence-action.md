---
title: "Get Conversation Intelligence Action"
domain: api-action
topic: get-conversation-intelligence-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.063Z
estimatedTokens: 469
keywords: [Conversation, Intelligence, Action, voice, video, call, including, any, insights, summary, REST, HTTP, Inputs, Outputs, Usage]
---

# Get Conversation Intelligence Action

> Gets intelligence information about a voice or video call, including any insights and a
  conversation summary.

# Get Conversation Intelligence Action

Gets intelligence information about a voice or video call, including any insights and a conversation summary.

This action is available in API version 65.0 and later.

On invocation, this action gets a list of insights related to a call, and a call summary if one is available.

The user calling the action must have access to the related voice or video call records.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/getConversationIntelligence

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

## Outputs

| OUTput | Details |
| --- | --- |
| conversationInsights | TypeApex collectionDescriptionThe list of insights related to the content of the call as a whole, such as generative conversation insights. |
| conversationIntelligence | TypeApexDescriptionOther intelligence information related to the call, including a summary of the call if one was generated. |
| momentInsights | TypeApex collectionDescriptionThe list of insights related to conversation moments, such as pricing insights or mentions of relevant keywords about products or competitors. The list is empty if no insights are found. |

## Usage

Sample Input

```

```

Sample Output

```

```

For more information about this action, see [Flow Core Actions: Get Conversation Intelligence](https://help.salesforce.com/s/articleView?id=platform.flow_ref_elements_actions_get_conversation_intelligence.htm&language=en_US "HTML (New Window)") and [Get Conversation Intelligence Invocable Action](https://help.salesforce.com/s/articleView?id=sales.ci_ia_get_conv_intel.htm&language=en_US "HTML (New Window)") in Salesforce Help.

## Code Examples

```
{
    "inputs": [
        {
            "recordId": "6qrAAC000000BGPYB2",
        }
    ]
}
```

```
{
    "conversationInsights": [],
    "conversationIntelligence": {
        "callSummary": "&lt;p&gt;&lt;strong&gt; Customer Impression&lt;/strong&gt;&lt;/p&gt;&lt;p&gt;Sam, the customer, expressed a need for more features than their current service, Genius Solutions, offers. They appreciated the flexibility in adding licenses and were concerned about pricing due to a tight budget.&lt;/p&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt; Call Summary&lt;/strong&gt;&lt;/p&gt;&lt;p&gt;Sam, the customer, has been using Genius Solutions for several years but feels it lacks some features they need. They are exploring other options and are particularly interested in the flexibility of adding licenses, which is a significant pain point for them. Sam is also concerned about pricing and needs to stay within a budget of $1,600 per month. They are considering the intermediate subscription, which seems to fit their current needs. Sam plans to discuss the pricing and options with their partner, John, and their boss, who has significant influence over the decision. They are also interested in a demo of the intermediate subscription to prove the concept.&lt;/p&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt; Next Steps&lt;/strong&gt;&lt;/p&gt;&lt;ol&gt;&lt;li&gt;Seller to put together a quote and email it to Sam.&lt;/li&gt;&lt;li&gt;Sam to discuss the quote with their partner, John, and their boss.&lt;/li&gt;&lt;li&gt;Schedule a demo of the intermediate subscription for next week.&lt;/li&gt;&lt;li&gt;Sam to confirm the best time for the demo with their team.&lt;/li&gt;&lt;/ol&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;"
    },
    "momentInsights": [
        {
            "category": "Question",
            "insightTypeId": "00000000-0000-0000-0000-000000001010",
            "keyword": "Question",
            "momentTimes": [
                {
                    "action": null,
                    "endOffset": 39.18000030517578,
                    "entries": [
                        "Long you been with Solutions?"
                    ],
                    "isFollowup": false,
                    "mentionId": 0,
                    "momentOffset": 32.720001220703125,
                    "needsAttention": false,
                    "sequences": [
                        7
                    ],
                    "speakerId": "Speaker 2",
                    "speakerRole": null,
                    "startOffset": 27.719999313354492
                },
                {
                    "action": null,
                    "endOffset": 75.08999633789062,
                    "entries": [
                        "I&#39;m you&#39;ve had a kind comb through our as extensively, a think one missing is need be boss how this going are terms?"
                    ],
                    "isFollowup": false,
                    "mentionId": 1,
                    "momentOffset": 56.099998474121094,
                    "needsAttention": false,
                    "sequences": [
                        11
                    ],
                    "speakerId": "Speaker 2",
                    "speakerRole": null,
                    "startOffset": 51.099998474121094
                },
                {
                    "action": null,
                    "endOffset": 103.44999694824219,
                    "entries": [
                        "Many off, how licenses are you looking at?"
                    ],
                    "isFollowup": false,
                    "mentionId": 2,
                    "momentOffset": 94.66999816894531,
                    "needsAttention": false,
                    "sequences": [
                        17
                    ],
                    "speakerId": "Speaker 1",
                    "speakerRole": null,
                    "startOffset": 89.66999816894531
                },
                {
                    "action": null,
                    "endOffset": 175.7100067138672,
                    "entries": [
                        "You said 16 licenses, correct?"
                    ],
                    "isFollowup": false,
                    "mentionId": 3,
                    "momentOffset": 167.88999938964844,
                    "needsAttention": false,
                    "sequences": [
                        28
                    ],
                    "speakerId": "Speaker 1",
                    "speakerRole": null,
                    "startOffset": 162.88999938964844
                },
                {
                    "action": null,
                    "endOffset": 179.5800018310547,
                    "entries": [
                        "Like how pay, can you break me?"
                    ],
                    "isFollowup": false,
                    "mentionId": 4,
                    "momentOffset": 172.08999633789062,
                    "needsAttention": false,
                    "sequences": [
                        29
                    ],
                    "speakerId": "Speaker 1",
                    "speakerRole": null,
                    "startOffset": 167.08999633789062
                },
                {
                    "action": null,
                    "endOffset": 182.6199951171875,
                    "entries": [
                        "Like monthly it quarterly or annual?"
                    ],
                    "isFollowup": false,
                    "mentionId": 5,
                    "momentOffset": 174.82000732421875,
                    "needsAttention": false,
                    "sequences": [
                        30
                    ],
                    "speakerId": "Speaker 1",
                    "speakerRole": null,
                    "startOffset": 169.82000732421875
                }
            ]
        },
        {
            "category": "Pricing",
            "insightTypeId": "00000000-0000-0000-0000-000000001001",
            "keyword": "Pricing",
            "momentTimes": [
                {
                    "action": null,
                    "endOffset": 196.5399932861328,
                    "entries": [
                        "It&#39;s monthly can access it via once customer. intermediate subscription about $1,200 a month. the premium, an additional $55 per you include looking at about 20."
                    ],
                    "isFollowup": false,
                    "mentionId": 0,
                    "momentOffset": 191.17999267578125,
                    "needsAttention": false,
                    "sequences": [
                        31
                    ],
                    "speakerId": "Speaker 1",
                    "speakerRole": null,
                    "startOffset": 186.17999267578125
                }
            ]
        },
        {
            "category": "Next Step",
            "insightTypeId": "00000000-0000-0000-0000-000000001000",
            "keyword": "Next Step",
            "momentTimes": [
                {
                    "action": null,
                    "endOffset": 272.57000732421875,
                    "entries": [
                        "Like to subscription. available next be great just to prove out concept little me work on that with my Linda, that she can be on it have a large deal of influence."
                    ],
                    "isFollowup": false,
                    "mentionId": 0,
                    "momentOffset": 267.04998779296875,
                    "needsAttention": false,
                    "sequences": [
                        48
                    ],
                    "speakerId": "Speaker 1",
                    "speakerRole": null,
                    "startOffset": 262.04998779296875
                },
                {
                    "action": null,
                    "endOffset": 299.4653015136719,
                    "entries": [
                        "Talk soon."
                    ],
                    "isFollowup": false,
                    "mentionId": 1,
                    "momentOffset": 294.9100036621094,
                    "needsAttention": false,
                    "sequences": [
                        53
                    ],
                    "speakerId": "Speaker 2",
                    "speakerRole": null,
                    "startOffset": 289.9100036621094
                }
            ]
        }
    ]
}
```
