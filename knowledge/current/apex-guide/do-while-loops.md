---
title: "Do-While Loops"
domain: apex-guide
topic: do-while-loops
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:34.816Z
estimatedTokens: 171
keywords: [Do-While, Loops, Curly, braces, always, required, around, code_block., Note]
---

# Do-While Loops

> Curly braces ({}) are
            always required around a 
                code_block.

# Do-While Loops

The Apex do\-while loop repeatedly executes a block of code as long as a particular Boolean condition remains true. Its syntax is:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Curly braces ({}) are always required around a code\_block.

As in Java, the Apex do\-while loop does not check the Boolean condition statement until after the first loop is executed. Consequently, the code block always runs at least once.

As an example, the following code outputs the numbers 1 - 10 into the debug log:

```

```

-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops_while.htm "While Loops")

## Code Examples

```
do {
   code_block
} while (condition);
```

```apex
Integer count = 1;

do {
    System.debug(count);
    count++;
} while (count < 11);
```

## Related Topics

- Next → (atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops_while.htm)
