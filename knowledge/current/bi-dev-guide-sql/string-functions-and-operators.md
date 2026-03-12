---
title: "String Functions and Operators"
domain: bi-dev-guide-sql
topic: string-functions-and-operators
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.269Z
estimatedTokens: 704
keywords: [Functions, Operators, SQL, CRM, Analytics, supports]
---

# String Functions and Operators

> SQL for CRM Analytics supports the following string functions and operators.

# String Functions and Operators

SQL for CRM Analytics supports the following string functions and operators.

-   **[ascii(char)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_ASCII.htm)**
    Returns UTF-8 numeric value of the specified character. Returns null if n is null.
-   **[chr(int)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_chr.htm)**
    Returns the UTF-8 character for integer n. Returns null if n is null.
-   **[char\_length(str)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_char_length.htm)**
    Returns the number of characters in a given string.
-   **[ends\_with(source\_str, search\_str)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_ends_with.htm)**
    Returns a Boolean indicating whether a string ends with the search string.
-   **[index\_of(source\_str, search\_str, \[position,occurrence\])](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_index_of.htm)**
    Returns a boolean indicating whether a string ends with the search string.
-   **[lower(str)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_lower.htm)**
    Returns a copy of string str with all cased characters converted to lowercase.
-   **[mv\_to\_string(multivalue\_column\_name, \[delimeter\])](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_mts.htm)**
    Converts multivalue fields to string fields.
-   **[position(search\_str IN source\_str)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_position.htm)**
    Returns an integer that indicates the first occurrence of a substring in a given string. If the substring is not found, the function returns 0.
-   **[replace(str, old\_str, new\_str)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_replace.htm)**
    Replaces all occurrences in string str of a substring old\_str with a new substring new\_str. Returns a new string.
-   **[starts\_with(source\_str, search\_str)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_starts_with.htm)**
    Returns a Boolean indicating whether a string begins with the search string.
-   **[substring(str FROM start FOR length)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_substring.htm)**
    Returns a substring from string str that begins with the character at the start position.
-   **[trim(LEADING | TRAILING | BOTH, chars, str)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_trim.htm)**
    Removes leading or trailing characters from a string. If no characters are specified, the function removes blank spaces.
-   **[upper(str)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_upper.htm)**
    Returns a copy of string str with all cased characters converted to uppercase.

## Related Topics

- ascii(char) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_ASCII.htm)
- chr(int) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_chr.htm)
- char_length(str) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_char_length.htm)
- ends_with(source_str, search_str) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_ends_with.htm)
- index_of(source_str, search_str, [position,occurrence]) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_index_of.htm)
- lower(str) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_lower.htm)
- mv_to_string(multivalue_column_name, [delimeter]) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_mts.htm)
- position(search_str IN source_str) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_position.htm)
- replace(str, old_str, new_str) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_replace.htm)
- starts_with(source_str, search_str) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_string_starts_with.htm)
