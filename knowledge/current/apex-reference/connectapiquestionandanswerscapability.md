---
title: "ConnectApi.QuestionAndAnswersCapability"
domain: apex-reference
topic: connectapiquestionandanswerscapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.830Z
keywords: [ConnectApi.QuestionAndAnswersCapability, See]
---

# ConnectApi.QuestionAndAnswersCapability

# ConnectApi.QuestionAndAnswersCapability

If a feed element has this capability, it has a question and comments on the feed element are answers to the question.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| bestAnswer | ConnectApi.​Comment | Comment selected as the best answer for the question. | 32.0 |
| bestAnswer​SelectedBy | ConnectApi.​UserSummary | User who selected the best answer for the question. | 32.0 |
| canCurrentUser​SelectOrRemove​BestAnswer | Boolean | Indicates whether the context user can select or remove a best answer (true) or not (false). | 32.0 |
| candidateAnswers | ConnectApi.CandidateAnswersStatus | Status of candidate answers for the question. | 41.0 |
| escalatedCase | ConnectApi.​Reference | If a question post is escalated, this is the case to which it was escalated. | 33.0 |
| questionTitle | String | Title for the question. | 32.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")