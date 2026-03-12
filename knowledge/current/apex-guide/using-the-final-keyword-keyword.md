---
title: "Using the  final Keyword Keyword"
domain: apex-guide
topic: using-the-final-keyword-keyword
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.600Z
estimatedTokens: 278
keywords: [final, Keyword]
---

# Using the  final Keyword Keyword

# Using the final Keyword Keyword

Keep in mind these consideration while using the final keyword to modify variables.

-   Final variables can be assigned a value only once. Static final variables can be initialized in static initialization code blocks or where defined. Member final variables can be initialized in initialization code blocks, constructors, or where defined.
-   To define a constant, mark a variable as both static and final.
-   Non-final static variables are used to communicate state at the class level (such as state between triggers). However, they aren’t shared across requests.
-   Methods and classes are final by default. You can’t use the final keyword in the declaration of a class or method. This means they can’t be overridden. Use the virtual keyword if you need to override a method or class.
-   You can’t use the final keyword with properties.

-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_instanceof.htm "Using the instanceof Keyword Keyword")

#### See Also

-   [Extended Class Example](atlas.en-us.apexcode.meta/apexcode/apex_classes_example.htm)

## Related Topics

- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_instanceof.htm)
- Extended Class Example (atlas.en-us.apexcode.meta/apexcode/apex_classes_example.htm)
