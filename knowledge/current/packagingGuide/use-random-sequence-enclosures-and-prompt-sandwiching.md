---
title: "Use Random Sequence Enclosures and Prompt Sandwiching"
domain: packagingGuide
topic: use-random-sequence-enclosures-and-prompt-sandwiching
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.110Z
estimatedTokens: 317
keywords: [Random, Sequence, Enclosures, Prompt, Sandwiching, untrusted, user-controlled, data, included, secure, random-sequence, enclosure, clearly, segment, instructions]
---

# Use Random Sequence Enclosures and Prompt Sandwiching

> If untrusted or user-controlled data is included in a prompt, use a secure
    random-sequence enclosure to clearly segment the data from other instructions in the prompt. The
    goal is to prevent an attacker from guessing the random sequence.

# Use Random Sequence Enclosures and Prompt Sandwiching

If untrusted or user-controlled data is included in a prompt, use a secure random-sequence enclosure to clearly segment the data from other instructions in the prompt. The goal is to prevent an attacker from guessing the random sequence.

While you can segment the data using symbols, such as “””<user input>”””, this isn’t a security best practice. Instead, use a random-sequence enclosure, such as AK6524SH\_YTHW923 <data> AK6524SH\_YTHW923. This makes it harder for an attacker to break out of the data enclosure and jailbreak the prompt.

To implement a random-sequence enclosure:

-   Generate a random set of tokens to use for each untrusted data enclosure. Make the token long enough that an attacker can't guess or infer it. Generate the token with a secure random source.
-   Use a new random token sequence for each prompt inference operation.
-   In your prompt instructions, clearly indicate what the random-sequence enclosure is and the data it contains.

You can also reinforce instructions for the LLM by placing prompt instructions before and after the untrusted data in the prompt. This mitigation strategy is called prompt sandwiching. The Sandwich Defense by Learn Prompting has an example.
