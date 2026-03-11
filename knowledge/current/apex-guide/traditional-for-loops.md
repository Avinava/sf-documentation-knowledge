---
title: "Traditional For Loops"
domain: apex-guide
topic: traditional-for-loops
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:48.164Z
keywords: [Traditional, Loops]
---

# Traditional For Loops

# Traditional For Loops

The traditional for loop in Apex corresponds to the traditional syntax used in Java and other languages. Its syntax is:

```

```

When executing this type of for loop, the Apex runtime engine performs the following steps, in order:

1.  Execute the init\_stmt component of the loop. Note that multiple variables can be declared and/or initialized in this statement, separated by commas.
2.  Perform the exit\_condition check. If true, the loop continues. If false, the loop exits.
3.  Execute the code\_block.
4.  Execute the increment\_stmt statement.
5.  Return to Step 2.

As an example, the following code outputs the numbers 1 - 10 into the debug log. Note that an additional initialization variable, j, is included to demonstrate the syntax:

```

```