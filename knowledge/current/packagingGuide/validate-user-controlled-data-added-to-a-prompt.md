---
title: "Validate User-Controlled Data Added to a Prompt"
domain: packagingGuide
topic: validate-user-controlled-data-added-to-a-prompt
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.107Z
estimatedTokens: 173
keywords: [Validate, User-Controlled, Data, Added, Prompt, including, Ensure, meets, criteria, acceptable, input, case, isn't, met, don’t]
---

# Validate User-Controlled Data Added to a Prompt

> Before including user-controlled data in a prompt, validate the data. Ensure it meets
    criteria for an acceptable input based on your use case. If the criteria isn't met, don’t
    include the data in the prompt.

# Validate User-Controlled Data Added to a Prompt

Before including user-controlled data in a prompt, validate the data. Ensure it meets criteria for an acceptable input based on your use case. If the criteria isn't met, don’t include the data in the prompt.

Common criteria include:

-   An allowlist of characters or words that are acceptable as input, such as the use of zero-width characters. This reduces the likelihood of a prompt injection exploit. Promptfoo's guide to jailbreaking LLMs has examples of prompt injection permutations using different characters and formatting.
-   Length limitations. This helps limit the effectiveness of Do Anything Now or virtualization attacks.
