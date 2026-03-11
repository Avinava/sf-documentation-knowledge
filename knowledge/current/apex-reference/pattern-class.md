---
title: "Pattern Class"
domain: apex-reference
topic: pattern-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.376Z
keywords: [Pattern, Class, Returns, list, contains, substring, String, terminated, either, regular, expression, regExp, matches, pattern, end, String., split, limit, Signature, Parameters]
---

# Pattern Class

> Returns a list that contains each substring of the String that is terminated either by
    the regular expression regExp that matches this pattern, or by the end of the
    String.

### split(regExp, limit)

Returns a list that contains each substring of the String that is terminated either by the regular expression regExp that matches this pattern, or by the end of the String.

#### Signature

public String\[\] split(String regExp, Integer limit)

#### Parameters

regExp

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

limit

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

(Optional) Controls the number of times the pattern is applied and therefore affects the length of the list.

-   If limit is greater than zero:
    -   The pattern is applied a maximum of (limit – 1) times.
    -   The list’s length is no greater than limit.
    -   The list’s last entry contains all input beyond the last matched delimiter.
-   If limit is non-positive, the pattern is applied as many times as possible, and the list can have any length.
-   If limit is zero, the pattern is applied as many times as possible, the list can have any length, and trailing empty strings are discarded.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\[\]

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

In API version 34.0 and earlier, a zero-width regExp value produces an empty list item at the beginning of the method’s output.