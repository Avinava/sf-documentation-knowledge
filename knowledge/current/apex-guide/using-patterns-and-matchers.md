---
title: "Using Patterns and Matchers"
domain: apex-guide
topic: using-patterns-and-matchers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.626Z
keywords: [Patterns, Matchers, Note]
---

# Using Patterns and Matchers

# Using Patterns and Matchers

Apex provides patterns and matchers that enable you to search text using regular expressions.

A pattern is a compiled representation of a regular expression. Patterns are used by matchers to perform match operations on a character string.

A regular expression is a string that is used to match another string, using a specific syntax. Apex supports the use of regular expressions through its Pattern and Matcher classes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

In Apex, Patterns and Matchers, as well as regular expressions, are based on their counterparts in Java. See [http://java.sun.com/j2se/1.5.0/docs/api/index.html?java/util/regex/Pattern.html](http://java.sun.com/j2se/1.5.0/docs/api/index.html?java/util/regex/Pattern.html "html (New Window)").

Many Matcher objects can share the same Pattern object, as shown in the following illustration:

Many Matcher objects can be created from the same Pattern object ![A flow chart showing flow from Regular Expression to Matcher object](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2FPatternAndMatcher.gif&folder=apexcode)

Regular expressions in Apex follow the standard syntax for regular expressions used in Java. Any Java-based regular expression strings can be easily imported into your Apex code.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Salesforce limits the number of times an input sequence for a regular expression can be accessed to 1,000,000 times. If you reach that limit, you receive a runtime error.

All regular expressions are specified as strings. Most regular expressions are first compiled into a Pattern object: only the String split method takes a regular expression that isn't compiled.

Generally, after you compile a regular expression into a Pattern object, you only use the Pattern object once to create a Matcher object. All further actions are then performed using the Matcher object. For example:

```

```

If you are only going to use a regular expression once, use the Pattern class matches method to compile the expression and match a string against it in a single invocation. For example, the following is equivalent to the code above:

```

```

-   **[Using Regions](atlas.en-us.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_regions.htm)**  
    
-   **[Using Match Operations](atlas.en-us.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_matching.htm)**  
    
-   **[Using Bounds](atlas.en-us.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_bounds.htm)**  
    
-   **[Understanding Capturing Groups](atlas.en-us.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_capturing_groups.htm)**  
    
-   **[Pattern and Matcher Example](atlas.en-us.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_example.htm)**