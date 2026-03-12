---
title: "Using Match Operations"
domain: apex-guide
topic: using-match-operations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.694Z
estimatedTokens: 310
keywords: [Match, Operations, Matcher, performs, character, sequence, interpreting, Pattern]
---

# Using Match Operations

> A Matcher object performs match operations on a character
sequence by interpreting a Pattern.

# Using Match Operations

A Matcher object performs match operations on a character sequence by interpreting a Pattern.

A Matcher object is instantiated from a Pattern by the Pattern's matcher method. Once created, a Matcher object can be used to perform the following types of match operations:

-   Match the Matcher object's entire input string against the pattern using the matches method
-   Match the Matcher object's input string against the pattern, starting at the beginning but without matching the entire region, using the lookingAt method
-   Scan the Matcher object's input string for the next substring that matches the pattern using the find method

Each of these methods returns a Boolean indicating success or failure.

After you use any of these methods, you can find out more information about the previous match, that is, what was found, by using the following Matcher class methods:

-   end: Once a match is made, this method returns the position in the match string after the last character that was matched.
-   start: Once a match is made, this method returns the position in the string of the first character that was matched.
-   group: Once a match is made, this method returns the subsequence that was matched.
