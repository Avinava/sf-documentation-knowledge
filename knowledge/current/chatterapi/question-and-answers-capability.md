---
title: "Question and Answers Capability"
domain: chatterapi
topic: question-and-answers-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.731Z
estimatedTokens: 298
keywords: [Question, Answers, Capability, feed, element, comments]
---

# Question and Answers Capability

> If a feed element has this capability, it has a question and comments on the feed element
    are answers to the question.

# Question and Answers Capability

If a feed element has this capability, it has a question and comments on the feed element are answers to the question.

| Property Name | Type | Description | Filter and Version | Available Version |
| --- | --- | --- | --- | --- |
| bestAnswer | Comment | Comment selected as the best answer for the question. | Small, 32.0 | 32.0 |
| bestAnswer​SelectedBy | User Summary | User who selected the best answer for the question. | Small, 32.0 | 32.0 |
| canCurrent​UserSelectOr​RemoveBestAnswer | Boolean | Indicates whether the context user can select or remove a best answer (true) or not (false). | Small, 32.0 | 32.0 |
| candidateAnswers | Candidate Answers Status | Status of candidate answers for the question. | Small, 41.0 | 41.0 |
| escalatedCase | Reference | If a question post is escalated, this is the case to which it was escalated. | Medium, 33.0 | 33.0 |
| questionTitle | String | Title for the question. | Small, 32.0 | 32.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- Comment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Candidate Answers Status (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_candidate_answers_status.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
