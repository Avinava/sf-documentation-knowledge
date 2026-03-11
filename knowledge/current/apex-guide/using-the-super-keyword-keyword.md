---
title: "Using the  super Keyword Keyword"
domain: apex-guide
topic: using-the-super-keyword-keyword
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.592Z
keywords: [super, Keyword, Best, Practices]
---

# Using the  super Keyword Keyword

# Using the super Keyword Keyword

The super keyword can be used by classes that are extended from virtual or abstract classes. By using super, you can override constructors and methods from the parent class.

For example, if you have the following virtual class:

```

```

You can create the following class that extends Superclass and overrides its printName method:

```

```

The expected output when calling Subclass.printName is My name is Mr. Vonderburg. But you can call me Carl.

You can also use super to call constructors. Add the following constructor to SubClass:

```

```

Now, the expected output of Subclass.printName is My name is Madam Clapentrap. But you can call me Brenda.

## Best Practices for Using the super Keyword

-   Only classes that are extending from virtual or abstract classes can use super.
-   You can only use super in methods that are designated with the override keyword.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_instanceof.htm "Using the instanceof Keyword Keyword")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_this.htm "Using the this Keyword Keyword")