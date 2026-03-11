---
title: "Pattern and Matcher Example"
domain: apex-guide
topic: pattern-and-matcher-example
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.619Z
keywords: [Pattern, Matcher, Example, See]
---

# Pattern and Matcher Example

# Pattern and Matcher Example

The Matcher class end method returns the position in the match string after the last character that was matched. You would use this when you are parsing a string and want to do additional work with it after you have found a match, such as find the next match.

In regular expression syntax, ? means match once or not at all, and + means match 1 or more times.

In the following example, the string passed in with the Matcher object matches the pattern since (a(b)?) matches the string 'ab' - 'a' followed by 'b' once. It then matches the last 'a' - 'a' followed by 'b' not at all.

```

```

In the following example, email addresses are normalized and duplicates are reported if there is a different top-level domain name or subdomain for similar email addresses. For example, john@fairway.smithco is normalized to john@smithco.

```

```

#### See Also

-   [*Apex Reference Guide*: Pattern Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm "Apex Reference Guide: Pattern Class - HTML (New Window)")
    
-   [*Apex Reference Guide*: Matcher Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm "Apex Reference Guide: Matcher Class - HTML (New Window)")