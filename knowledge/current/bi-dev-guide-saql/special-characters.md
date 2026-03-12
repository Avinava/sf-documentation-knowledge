---
title: "Special Characters"
domain: bi-dev-guide-saql
topic: special-characters
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.728Z
estimatedTokens: 316
keywords: [Special, Characters, Certain, meanings, SAQL]
---

# Special Characters

> Certain characters have special meanings in SAQL.

# Special Characters

Certain characters have special meanings in SAQL.

| Character | Name | Description |
| --- | --- | --- |
| ; | Semicolon | Used to terminate statements. |
| ' | Single quote | Used to quote identifiers. |
| " | Double quote | Used to quote strings. |
| () | Parentheses | Used for function calls, to enforce precedence, for order clauses, and to group expressions. Parentheses are mandatory when you’re defining more than one group or order field. |
| [] | Brackets | Used to denote arrays. For example, this is an array of strings:[ "this", "is", "a", "string", "array" ]Also used for referencing a particular member of an object. For example, em['miles'], which is the same as em.miles. |
| . | Period | Used for referencing a particular member of an object. For example, em.miles, which is the same as em['miles']. |
| :: | Two colons | Used to explicitly specify the dataset that a measure or dimension belongs to, by placing it between a dataset name and a column name. Using two colons is the same as using a period (.) between names. For example:data = foreach data generate left::airline as airline |
| .. | Two periods | Used to separate a range of values. For example:c = filter b by "the_date" in ["2011-01-01".."2011-01-31"]; |
