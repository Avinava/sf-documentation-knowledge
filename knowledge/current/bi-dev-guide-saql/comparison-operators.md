---
title: "Comparison Operators"
domain: bi-dev-guide-saql
topic: comparison-operators
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.665Z
estimatedTokens: 1030
keywords: [Comparison, Operators, compare, strings, numbers]
---

# Comparison Operators

> Use comparison operators to compare values of the same type. For example, you can
    compare strings with strings and numbers with numbers.

# Comparison Operators

Use comparison operators to compare values of the same type. For example, you can compare strings with strings and numbers with numbers.

| Operator | Name | Description |
| --- | --- | --- |
| == | Equals | Returns True if the operands are equal. String comparisons that use the equals operator are case-sensitive.NoteFor multivalue fields, use in to identify rows that contain some value. |
| != | Not equals | Returns True if the operands aren’t equal.NoteFor multivalue fields, use not in to identify rows that don't contain some value. |
| < | Less than | Returns True if the left operand is less than the right operand. |
| <= | Less or equal | Returns True if the left operand is less than or equal to the right operand. |
| > | Greater than | Returns True if the left operand is greater than the right operand. |
| >= | Greater or equal | Returns True if the left operand is greater than or equal to the right operand. |
| like | Like | Returns True if the left operand contains the string on the right. Wildcards and regular expressions aren’t supported. This operator is case-sensitive.To match any single character in the string, include an underscore (_). To match any pattern of zero or more characters include a percent sign (%).Starting a pattern with a percent sign returns all words that are either the pattern itself or that end with it. Ending a pattern with a percent sign returns all the words that are either the pattern itself or that begin with it. To match a pattern anywhere in a string, the pattern must start and end with a percent sign.To include a literal percent sign or underscore in a pattern, you must escape them with a backwards slash (\).This query matches names such as Anita Boyle, Annie Booth, Derek Jernigan, and Hazel Jennings.q = filter q by Customer_Name like "%ni%";This query matches names that end with "ne" or contain "ne." These names include Andrew Levine, Annette Boone, Annette Cline, and Annie Horne.q = filter q by Customer_Name like "%ne"; Use with ! to exclude records. For example, the following query shows all customer names that don’t contain "po."q = filter q by !(Customer_Name like "%po%"); |
| matches | Matches | Returns True if the left operand contains the string on the right. Wildcards and regular expressions aren’t supported. This operator isn’t case-sensitive. Single-character matches aren’t supported.For example, the following query matches airport codes such as LAX, LAS, ALA, and BLA.my_matches = filter a by origin matches "LA";Use with ! to exclude records. For example, the following query shows all opportunities where Stage isn’t equal to Closed Lost or Closed Won:q = filter q by !('Stage' matches "Closed"); |
| in | In | Returns True if the left operand contains one or more of the values in the array on the right. For example:a1 = filter a by origin in ["ORD", "LAX", "LGA"];If the left operand is a measure, the query returns True if the left operand is in the array on the right.Use the date() function to filter by date ranges.If you search for values in an empty array, in returns False.Ranges that are out of order evaluate to False. For example, ["Z" .. "A"] evaluates to False. |
| not in | Not in | Returns True if the left operand isn’t equal to any of the values in an array on the right. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

If you use matches or like with multivalue fields, make sure to use mv\_to\_string() to match all relevant values. If any of the values in the array satisfies the condition, the query returns the first value. The query returns array values in numerical or alphabetical order. The first value it returns in this case isn’t necessarily the value that satisfied the condition.

#### See Also

-   [filter](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_filter.htm "Selects rows from a dataset based on a filter predicate.")

-   [Multivalue Field](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_multivalue.htm "A multivalue field contains more than one value.")

## Related Topics

- date() function (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date.htm)
- filter (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_filter.htm)
- Multivalue Field (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_multivalue.htm)
