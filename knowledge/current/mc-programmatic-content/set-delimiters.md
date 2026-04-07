---
title: "Set Delimiters"
domain: mc-programmatic-content
topic: set-delimiters
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:22.418Z
estimatedTokens: 159
keywords: [Delimiters, simple, tags, prefix, suffix, include, whitespace, delimiter, tokens, cannot, sample, new]
---

> Set Delimiters use simple tags and use the = prefix and suffix. You must also include a single whitespace between the specified delimiter tokens, and you cannot include whitespace before or after those tokens. This sample sets the new delimiter tokens to {< and >}.

# Set Delimiters

Set Delimiters use simple tags and use the = prefix and suffix. You must also include a single whitespace between the specified delimiter tokens, and you cannot include whitespace before or after those tokens. This sample sets the new delimiter tokens to {< and >}.

If you set the delimiter tokens to anything other than {{ and }}, you cannot use the {{{var}}} in the same context. You must also explicitly provide the raw formatter tag where applicable. When you change the delimiters in the scope of any included content, the delimiter changes do not apply to the parent context once the included content processes.
