---
title: "Constants"
domain: apex-guide
topic: constants
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.560Z
estimatedTokens: 208
keywords: [Constants, Apex, variables, whose, don’t, change, initialized, once, defined, final, keyword]
---

# Constants

> Apex constants are variables whose values don’t change after being initialized
        once. Constants can be defined using the final
        keyword.

# Constants

Apex constants are variables whose values don’t change after being initialized once. Constants can be defined using the final keyword.

The final keyword means that the variable can be assigned at most once, either in the declaration itself, or with a static initializer method if the constant is defined in a class. This example declares two constants. The first is initialized in the declaration statement. The second is assigned a value in a static block by calling a static method.

```

```

For more information, see [Using the final Keyword](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_final.htm).

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_variables.htm "Variables")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_expressions.htm "Expressions and Operators")

## Code Examples

```apex
public class myCls {
   static final Integer PRIVATE_INT_CONST = 200;
   static final Integer PRIVATE_INT_CONST2; 

   public static Integer calculate() {
       return 2 + 7;
   }

   static {
       PRIVATE_INT_CONST2 = calculate();
   }
}
```

## Related Topics

- Using
                the final Keyword (atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_final.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/langCon_apex_variables.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/langCon_apex_expressions.htm)
