---
title: "Using the  this Keyword Keyword"
domain: apex-guide
topic: using-the-this-keyword-keyword
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.594Z
keywords: [Keyword]
---

# Using the  this Keyword Keyword

# Using the this Keyword Keyword

There are two different ways of using the this keyword.

You can use the this keyword in dot notation, without parenthesis, to represent the current instance of the class in which it appears. Use this form of the this keyword to access instance variables and methods. For example:

```

```

In the above example, the class myTestThis declares an instance variable s. The initialization code populates the variable using the this keyword.

Or you can use the this keyword to do constructor chaining, that is, in one constructor, call another constructor. In this format, use the this keyword with parentheses. For example:

```

```

When you use the this keyword in a constructor to do constructor chaining, it must be the first statement in the constructor.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_super.htm "Using the super Keyword Keyword")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_transient.htm "Using the transient Keyword Keyword")