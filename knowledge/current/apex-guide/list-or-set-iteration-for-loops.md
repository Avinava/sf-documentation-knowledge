---
title: "List or Set Iteration for Loops"
domain: apex-guide
topic: list-or-set-iteration-for-loops
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:34.833Z
estimatedTokens: 117
keywords: [List, Set, Iteration, Loops, executing, loop, Apex, runtime, engine, assigns, variable, element, list_or_set, runs, code_block, value.]
---

# List or Set Iteration for Loops

> When executing this type of for loop, the Apex
            runtime engine assigns 
                variable to each element in 
                list_or_set, and runs the 
                code_block for each value.

# List or Set Iteration for Loops

The list or set iteration for loop iterates over all the elements in a list or set. Its syntax is:

```

```

where variable must be of the same primitive or sObject type as list\_or\_set.

When executing this type of for loop, the Apex runtime engine assigns variable to each element in list\_or\_set, and runs the code\_block for each value.

For example, the following code outputs the numbers 1 - 10 to the debug log:

```

```

## Code Examples

```
for (variable : list_or_set) {
    code_block
}
```

```apex
Integer[] myInts = new Integer[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

for (Integer i : myInts) {
    System.debug(i);
}
```
