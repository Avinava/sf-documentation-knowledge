---
title: "Using the  instanceof Keyword Keyword"
domain: apex-guide
topic: using-the-instanceof-keyword-keyword
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:46.582Z
keywords: [instanceof, Keyword, Implementation, Considerations, Versioned, Behavior, Changes]
---

# Using the  instanceof Keyword Keyword

# Using the instanceof Keyword Keyword

If you need to verify at run time whether an object is actually an instance of a particular class, use the instanceof keyword. The instanceof keyword can only be used to verify if the target type in the expression on the right of the keyword is a viable alternative for the declared type of the expression on the left.

You could add the following check to the Report class in the [classes and casting example](atlas.en-us.apexcode.meta/apexcode/apex_classes_casting.htm "In general, all type information is available at run time. This means that Apex enables casting, that is, a data type of one class can be assigned to a data type of another class, but only if one class is a subclass of the other class. Use casting when you want to convert an object from one data type to another.") before you cast the item back into a CustomReport object.

```

```

## Implementation Considerations

Keep these considerations in mind while using the instanceof keyword.

-   If the declared type on the left of the expression using the instanceof keyword is always an instance of the target type, compilation fails. An example expression that’s always true and therefore causes a compilation error.
    
    ```
    
    ```
    
-   When you perform instanceof checks, implicit type casting from String to ID can result in unexpected behavior if the String meets the requirements to be cast to an ID.

## Versioned Behavior Changes

In API version 60.0 and later, if a List data type implements the Iterable data type, compilation fails. An example instanceof expression that causes a compilation error.

```

```

In API version 32.0 and later, instanceof returns false if the left operand is a null object. In API version 31.0 and earlier, instanceof returns true in this case. For example, the code sample returns false in API version 32.0 and later.

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_final.htm "Using the final Keyword Keyword")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_super.htm "Using the super Keyword Keyword")