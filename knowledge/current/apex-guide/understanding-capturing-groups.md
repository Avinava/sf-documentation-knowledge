---
title: "Understanding Capturing Groups"
domain: apex-guide
topic: understanding-capturing-groups
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:46.616Z
keywords: [Understanding, Capturing, Groups]
---

# Understanding Capturing Groups

# Understanding Capturing Groups

During a matching operation, each substring of the input string that matches the pattern is saved. These matching substrings are called capturing groups.

Capturing groups are numbered by counting their opening parentheses from left to right. For example, in the regular expression string ((A)(B(C))), there are four capturing groups:

1.  ((A)(B(C)))
2.  (A)
3.  (B(C))
4.  (C)

Group zero always stands for the entire expression.

The captured input associated with a group is always the substring of the group most recently matched, that is, that was returned by one of the Matcher class match operations.

If a group is evaluated a second time using one of the match operations, its previously captured value, if any, is retained if the second evaluation fails.