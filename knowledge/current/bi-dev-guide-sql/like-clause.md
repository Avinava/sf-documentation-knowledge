---
title: "LIKE Clause"
domain: bi-dev-guide-sql
topic: like-clause
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.148Z
estimatedTokens: 660
keywords: [Clause, match, characters, patterns, found, anywhere, string—beginning, ending, somewhere, Simple, Pattern, Underscore, Multiple, Underscores, End]
---

# LIKE Clause

> Use LIKE to match single characters and patterns
  found anywhere in a string—beginning, ending, or somewhere in between.

# LIKE Clause

Use LIKE to match single characters and patterns found anywhere in a string—beginning, ending, or somewhere in between.

LIKE takes this syntax.

\[NOT\] LIKE pattern

NOT—Optional.

Returns True if the left operand matches the pattern on the right. This operator is case-sensitive. A pattern must be at least two characters.

To match any single character in the string, include an underscore (\_). To match any pattern, include a percent sign (%). Starting a pattern with a percent sign returns all words that end with the specified characters. The percent sign indicates that any number of characters can precede the specified ones. Ending a pattern with a percent sign returns all the words that begin with the specified characters. Any number of characters can follow the specified ones. To match a pattern anywhere in a string, the pattern must start and end with a percent sign.

For example, let's say we have a list of countries. A query that filters on the pattern %a%a% returns Bahamas, Jamaica, Slovakia, and Trinidad and Tobago. If we change the pattern to \_a\_a\_\_\_, the query returns Bahamas and Jamaica.

To include a literal percent sign or underscore in a pattern, escape them with a backwards slash (\\).

Additional wildcard characters and regular expressions aren’t supported.

Here are some more examples.

## Simple Pattern in a String

This example checks whether a customer name contains the characters "ni" anywhere in the string. If the string contains "ni", then the condition evaluates to True and the query returns the name.

```

```

| name |
| --- |
| Annie Thurman |
| Annie Zypern |
| Benjamin Venier |
| Berenike Kampe |
| Chad Cunningham |

## One Underscore

This query returns city names that contain any single character preceding "lb" and zero or more characters following it.

```

```

| city |
| --- |
| Albuquerque |

## Multiple Underscores

If we precede the characters "lb" with two underscores, the query returns results that have any two characters before "lb."

```

```

| city |
| --- |
| Gilbert |
| Melbourne |

## End with Percent Sign

This query matches names that begin with "An." These names include Andrew Levine, Annette Boone, Annette Cline, and Annie Horne.

```

```

## Exclude Records with NOT

This query shows all customer names that don’t contain "po." These names include Aaron Davies Bruce, Aaron Day, Aaron Dillon, and Aaron Riggs.

```

```

#### See Also

-   [String Functions and Operators](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_intro.htm "SQL for CRM Analytics supports the following string functions and operators.")

## Code Examples

```
SELECT Customer_Name as 'name'
FROM "Superstore"
WHERE Customer_Name LIKE "%ni%";
GROUP BY Customer_Name;
LIMIT 5;
```

```
SELECT City as 'city'
FROM "Superstore"
WHERE City LIKE "_lb%";
GROUP BY City;
```

```
SELECT City as 'city'
FROM "Superstore"
WHERE City LIKE "__lb%";
GROUP BY City;
```

```
WHERE Customer_Name LIKE "An%"
```

```
WHERE NOT Customer_Name LIKE "%po%"
```

## Related Topics

- String Functions and Operators (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_intro.htm)
