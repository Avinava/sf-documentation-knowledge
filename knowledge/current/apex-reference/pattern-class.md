---
title: "Pattern Class"
domain: apex-reference
topic: pattern-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.659Z
estimatedTokens: 2010
namespace: System
keywords: [Pattern, Represents, compiled, representation, regular, expression., compile, regExp, matcher, stringtoMatch, matches, Usage, Example, pattern, quote, yourString, split, Note, limit]
---

# Pattern Class

> Represents a compiled representation of a regular expression.

**Namespace:** `System`

# Pattern Class

Represents a compiled representation of a regular expression.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Pattern Methods

The following are methods for Pattern.

-   **[compile(regExp)](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm#apex_System_Pattern_compile)**
    Compiles the regular expression into a Pattern object.
-   **[matcher(stringtoMatch)](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm#apex_System_Pattern_matcher)**
    Creates a Matcher object that matches the input string stringtoMatch against this Pattern object.
-   **[matches(regExp, stringtoMatch)](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm#apex_System_Pattern_matches)**
    Compiles the regular expression regExp and tries to match it against the specified string. This method returns true if the specified string matches the regular expression, false otherwise.
-   **[pattern()](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm#apex_System_Pattern_pattern)**
    Returns the regular expression from which this Pattern object was compiled.
-   **[quote(yourString)](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm#apex_System_Pattern_quote)**
    Returns a string that can be used to create a pattern that matches the string yourString as if it were a literal pattern.
-   **[split(regExp)](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm#apex_System_Pattern_split)**
    Returns a list that contains each substring of the String that matches this pattern.
-   **[split(regExp, limit)](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm#apex_System_Pattern_split_2)**
    Returns a list that contains each substring of the String that is terminated either by the regular expression regExp that matches this pattern, or by the end of the String.

### compile(regExp)

Compiles the regular expression into a Pattern object.

#### Signature

public static Pattern compile(String regExp)

#### Parameters

regExp

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [System.Pattern](#apex_classes_pattern_and_matcher_pattern_methods "Represents a compiled representation of a regular expression.")

### matcher(stringtoMatch)

Creates a Matcher object that matches the input string stringtoMatch against this Pattern object.

#### Signature

public Matcher matcher(String stringtoMatch)

#### Parameters

stringtoMatch

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Matcher](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_classes_pattern_and_matcher_matcher_methods "Matchers use Patterns to perform match operations on a character string.")

### matches(regExp, stringtoMatch)

Compiles the regular expression regExp and tries to match it against the specified string. This method returns true if the specified string matches the regular expression, false otherwise.

#### Signature

public static Boolean matches(String regExp, String stringtoMatch)

#### Parameters

regExp

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

stringtoMatch

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If a pattern is to be used multiple times, compiling it once and reusing it is more efficient than invoking this method each time.

#### Example

Note that the following code example:

```

```

produces the same result as this code example:

```

```

### pattern()

Returns the regular expression from which this Pattern object was compiled.

#### Signature

public String pattern()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### quote(yourString)

Returns a string that can be used to create a pattern that matches the string yourString as if it were a literal pattern.

#### Signature

public static String quote(String yourString)

#### Parameters

yourString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Metacharacters (such as $ or ^) and escape sequences in the input string are treated as literal characters with no special meaning.

### split(regExp)

Returns a list that contains each substring of the String that matches this pattern.

#### Signature

public String\[\] split(String regExp)

#### Parameters

regExp

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\[\]

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

In API version 34.0 and earlier, a zero-width regExp value produces an empty list item at the beginning of the method’s output.

#### Usage

The substrings are placed in the list in the order in which they occur in the String. If regExp does not match the pattern, the resulting list has just one element containing the original String.

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

## Code Examples

```
Pattern.matches(regExp, input);
```

```
Pattern.compile(regex).
matcher(input).matches();
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- compile(regExp) (atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm)
- matcher(stringtoMatch) (atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm)
- matches(regExp, stringtoMatch) (atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm)
- pattern() (atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm)
- quote(yourString) (atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm)
- split(regExp) (atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm)
- split(regExp, limit) (atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Matcher (atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm)
