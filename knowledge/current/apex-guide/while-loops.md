---
title: "While Loops"
domain: apex-guide
topic: while-loops
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:48.166Z
keywords: [While, Loops, Note]
---

# While Loops

# While Loops

The Apex while loop repeatedly executes a block of code as long as a particular Boolean condition remains true. Its syntax is:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Curly braces ({}) are required around a code\_block only if the block contains more than one statement.

Unlike do\-while, the while loop checks the Boolean condition statement before the first loop is executed. Consequently, it is possible for the code block to never execute.

As an example, the following code outputs the numbers 1 - 10 into the debug log:

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops_do_while.htm "Do-While Loops")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops_for.htm "For Loops")