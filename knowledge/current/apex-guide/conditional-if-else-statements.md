---
title: "Conditional (If-Else) Statements"
domain: apex-guide
topic: conditional-if-else-statements
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.709Z
estimatedTokens: 76
keywords: [Conditional, If-Else, Statements, statement, Apex, works, similarly, Java]
---

# Conditional (If-Else) Statements

> The conditional statement in Apex works similarly to Java.

# Conditional (If-Else) Statements

The conditional statement in Apex works similarly to Java.

```

```

The else portion is always optional, and always groups with the closest if. For example:

```

```

is equivalent to:

```

```

Repeated else if statements are also allowed. For example:

```

```

## Code Examples

```
if ([Boolean_condition]) 
    // Statement 1
else
    // Statement 2
```

```
Integer x, sign;
// Your code
if (x <= 0) if (x == 0) sign = 0; else sign = -1;
```

```
Integer x, sign;
// Your code
if (x <= 0) {
    if (x == 0) {
           sign = 0; 
    } else  {
           sign = -1;
    }
}
```

```
if (place == 1) {
    medal_color = 'gold';
} else if (place == 2) {
    medal_color = 'silver';
} else if (place == 3) {
    medal_color = 'bronze';
} else {
    medal_color = null;
}
```
