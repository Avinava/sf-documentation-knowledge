---
title: "Einstein LLM Generations Safety Score"
domain: chatterapi
topic: einstein-llm-generations-safety-score
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.351Z
estimatedTokens: 500
keywords: [Einstein, LLM, Generations, Safety, Score]
---

# Einstein LLM Generations Safety Score

> Safety score information related to the LLM response.

# Einstein LLM Generations Safety Score

Safety score information related to the LLM response.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| hateScore | Double | A higher value means the generated response is more likely to contain text that expresses, incites, or promotes hatred, violence, or severe harm towards the targeted group. Minimum value of 0.0. Maximum value of 1.0. | Medium, 60.0 | 60.0 |
| physical​Score | Double | A higher value means the generated response is more likely to contain text with unsafe advice that may harm the user or others physically, or text that promotes, encourages, or depicts acts of self-harm. Minimum value of 0.0. Maximum value of 1.0. | Medium, 60.0 | 60.0 |
| profanity​Score | Double | A higher value means the generated response is more likely to contain swear words, curse words, or obscene or profane language. Minimum value of 0.0. Maximum value of 1.0. | Medium, 60.0 | 60.0 |
| safetyScore | Double | Overall safety score based on the hateScore, physicalScore, profanityScore, sexualScore, toxicityScore, and violenceScore. A higher value means the generated response is more likely to be safe. Minimum value of 0.0. Maximum value of 1.0. | Medium, 60.0 | 60.0 |
| sexualScore | Double | A higher value means the generated response is more likely to contain text meant to arouse sexual excitement or promote sexual services. Minimum value of 0.0. Maximum value of 1.0. | Medium, 60.0 | 60.0 |
| toxicity​Score | Double | A higher value means the generated response is more likely to contain text that is rude, disrespectful, or unreasonable. Minimum value of 0.0. Maximum value of 1.0. | Medium, 60.0 | 60.0 |
| violence​Score | Double | A higher value means the generated response is more likely to contain text that promotes or glorifies violence or celebrates the suffering or humiliation of others. Minimum value of 0.0. Maximum value of 1.0. | Medium, 60.0 | 60.0 |
