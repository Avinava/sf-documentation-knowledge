---
title: "List or Set Iteration for Loops"
domain: apex-guide
topic: list-or-set-iteration-for-loops
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:48.162Z
keywords: [List, Set, Iteration, Loops]
---

# List or Set Iteration for Loops

# List or Set Iteration for Loops

The list or set iteration for loop iterates over all the elements in a list or set. Its syntax is:

```

```

where variable must be of the same primitive or sObject type as list\_or\_set.

When executing this type of for loop, the Apex runtime engine assigns variable to each element in list\_or\_set, and runs the code\_block for each value.

For example, the following code outputs the numbers 1 - 10 to the debug log:

```

```