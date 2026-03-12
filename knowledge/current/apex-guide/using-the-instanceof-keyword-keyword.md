---
title: "Using the  instanceof Keyword Keyword"
domain: apex-guide
topic: using-the-instanceof-keyword-keyword
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:32.635Z
estimatedTokens: 530
keywords: [instanceof, Keyword, verify, run, time, whether, actually, instance, particular, target, expression, right, viable, Implementation, Considerations]
---

# Using the  instanceof Keyword Keyword

> If you need to verify at run time whether an object is actually an instance of a
            particular class, use the instanceof keyword.
            The instanceof keyword can only be used to
            verify if the target type in the expression on the right of the keyword is a viable
          

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

## Code Examples

```
if (Reports.get(0) instanceof CustomReport) {
    // Can safely cast it back to a custom report object
   CustomReport c = (CustomReport) Reports.get(0);
   } else {
   // Do something with the non-custom-report.
}
```

```
Account acc = new Account();
if(acc instanceOf Account) {
     //condition is always true since an instance of Account is always an instance of Account
}
```

```apex
public class BaseClass {}
public class SubClass extends BaseClass {}

List<SubClass> subClasses = new List<SubClass>();
if(subClasses instanceof Iterable<BaseClass>) {
    //condition is always true since an instance of SubClass is always an instance of BaseClass
}
```

```apex
Object o = null;
Boolean result = o instanceof Account;
System.assertEquals(false, result);
```

## Related Topics

- classes and
                casting example (atlas.en-us.apexcode.meta/apexcode/apex_classes_casting.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_final.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_super.htm)
