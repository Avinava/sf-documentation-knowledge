---
title: "Matcher Class"
domain: apex-reference
topic: matcher-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.646Z
estimatedTokens: 7157
namespace: System
keywords: [Matcher, Matchers, Patterns, perform, match, operations, character, string., end, groupIndex, Usage, find, group, groupCount, hasAnchoringBounds, hasTransparentBounds, hitEnd, lookingAt, matches, pattern]
---

# Matcher Class

> Matchers use Patterns to perform match operations on a
character string.

**Namespace:** `System`

# Matcher Class

Matchers use Patterns to perform match operations on a character string.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Matcher Methods

The following are methods for Matcher.

-   **[end()](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_end)**
    Returns the position after the last matched character.
-   **[end(groupIndex)](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_end_2)**
    Returns the position after the last character of the subsequence captured by the group index during the previous match operation. If the match was successful but the group itself did not match anything, this method returns -1.
-   **[find()](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_find)**
    Attempts to find the next subsequence of the input sequence that matches the pattern. This method returns true if a subsequence of the input sequence matches this Matcher object's pattern.
-   **[find(group)](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_find_2)**
    Resets the Matcher object and then tries to find the next subsequence of the input sequence that matches the pattern. This method returns true if a subsequence of the input sequence matches this Matcher object's pattern.
-   **[group()](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_group)**
    Returns the input subsequence returned by the previous match.
-   **[group(groupIndex)](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_group_2)**
    Returns the input subsequence captured by the specified group index during the previous match operation. If the match was successful but the specified group failed to match any part of the input sequence, null is returned.
-   **[groupCount()](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_groupCount)**
    Returns the number of capturing groups in this Matching object's pattern. Group zero denotes the entire pattern and is not included in this count.
-   **[hasAnchoringBounds()](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_hasAnchoringBounds)**
    Returns true if the Matcher object has anchoring bounds, false otherwise. By default, a Matcher object uses anchoring bounds regions.
-   **[hasTransparentBounds()](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_hasTransparentBounds)**
    Returns true if the Matcher object has transparent bounds, false if it uses opaque bounds. By default, a Matcher object uses opaque region boundaries.
-   **[hitEnd()](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_hitEnd)**
    Returns true if the end of input was found by the search engine in the last match operation performed by this Matcher object. When this method returns true, it is possible that more input would have changed the result of the last search.
-   **[lookingAt()](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_lookingAt)**
    Attempts to match the input sequence, starting at the beginning of the region, against the pattern.
-   **[matches()](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_matches)**
    Attempts to match the entire region against the pattern.
-   **[pattern()](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_pattern)**
    Returns the Pattern object from which this Matcher object was created.
-   **[quoteReplacement(inputString)](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_quoteReplacement)**
    Returns a literal replacement string for the specified string inputString. The characters in the returned string match the sequence of characters in inputString.
-   **[region(start, end)](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_region)**
    Sets the limits of this Matcher object's region. The region is the part of the input sequence that is searched to find a match.
-   **[regionEnd()](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_regionEnd)**
    Returns the end index (exclusive) of this Matcher object's region.
-   **[regionStart()](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_regionStart)**
    Returns the start index (inclusive) of this Matcher object's region.
-   **[replaceAll(replacementString)](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_replaceAll)**
    Replaces every subsequence of the input sequence that matches the pattern with the replacement string.
-   **[replaceFirst(replacementString)](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_replaceFirst)**
    Replaces the first subsequence of the input sequence that matches the pattern with the replacement string.
-   **[requireEnd()](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_requireEnd)**
    Returns true if more input could change a positive match into a negative one.
-   **[reset()](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_reset)**
    Resets this Matcher object. Resetting a Matcher object discards all of its explicit state information.
-   **[reset(inputSequence)](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_reset_2)**
    Resets this Matcher object with the new input sequence. Resetting a Matcher object discards all of its explicit state information.
-   **[start()](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_start)**
    Returns the start index of the first character of the previous match.
-   **[start(groupIndex)](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_start_2)**
    Returns the start index of the subsequence captured by the group specified by the group index during the previous match operation. Captured groups are indexed from left to right, starting at one. Group zero denotes the entire pattern, so the expression m.start(0) is equivalent to m.start().
-   **[useAnchoringBounds(anchoringBounds)](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_useAnchoringBounds)**
    Sets the anchoring bounds of the region for the Matcher object. By default, a Matcher object uses anchoring bounds regions.
-   **[usePattern(pattern)](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_usePattern)**
    Changes the Pattern object that the Matcher object uses to find matches. This method causes the Matcher object to lose information about the groups of the last match that occurred. The Matcher object's position in the input is maintained.
-   **[useTransparentBounds(transparentBounds)](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_System_Matcher_useTransparentBounds)**
    Sets the transparency bounds for this Matcher object. By default, a Matcher object uses anchoring bounds regions.

### end()

Returns the position after the last matched character.

#### Signature

public Integer end()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### end(groupIndex)

Returns the position after the last character of the subsequence captured by the group index during the previous match operation. If the match was successful but the group itself did not match anything, this method returns -1.

#### Signature

public Integer end(Integer groupIndex)

#### Parameters

groupIndex

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

Captured groups are indexed from left to right, starting at one. Group zero denotes the entire pattern, so the expressionm.end(0) is equivalent to m.end().

See [Understanding Capturing Groups](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_capturing_groups.htm).

### find()

Attempts to find the next subsequence of the input sequence that matches the pattern. This method returns true if a subsequence of the input sequence matches this Matcher object's pattern.

#### Signature

public Boolean find()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

This method starts at the beginning of this Matcher object's region, or, if a previous invocation of the method was successful and the Matcher object has not since been reset, at the first character not matched by the previous match.

If the match succeeds, more information can be obtained using the start, end, and group methods.

For more information, see [Using Regions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_regions.htm).

### find(group)

Resets the Matcher object and then tries to find the next subsequence of the input sequence that matches the pattern. This method returns true if a subsequence of the input sequence matches this Matcher object's pattern.

#### Signature

public Boolean find(Integer group)

#### Parameters

group

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If the match succeeds, more information can be obtained using the start, end, and group methods.

### group()

Returns the input subsequence returned by the previous match.

#### Signature

public String group()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Note that some groups, such as (a\*), match the empty string. This method returns the empty string when such a group successfully matches the empty string in the input.

### group(groupIndex)

Returns the input subsequence captured by the specified group index during the previous match operation. If the match was successful but the specified group failed to match any part of the input sequence, null is returned.

#### Signature

public String group(Integer groupIndex)

#### Parameters

groupIndex

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Captured groups are indexed from left to right, starting at one. Group zero denotes the entire pattern, so the expression m.group(0) is equivalent to m.group().

Note that some groups, such as (a\*), match the empty string. This method returns the empty string when such a group successfully matches the empty string in the input.

See [Understanding Capturing Groups](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_capturing_groups.htm).

### groupCount()

Returns the number of capturing groups in this Matching object's pattern. Group zero denotes the entire pattern and is not included in this count.

#### Signature

public Integer groupCount()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

See [Understanding Capturing Groups](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_capturing_groups.htm).

### hasAnchoringBounds()

Returns true if the Matcher object has anchoring bounds, false otherwise. By default, a Matcher object uses anchoring bounds regions.

#### Signature

public Boolean hasAnchoringBounds()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If a Matcher object uses anchoring bounds, the boundaries of this Matcher object's region match start and end of line anchors such as ^ and $.

For more information, see [Using Bounds](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_bounds.htm).

### hasTransparentBounds()

Returns true if the Matcher object has transparent bounds, false if it uses opaque bounds. By default, a Matcher object uses opaque region boundaries.

#### Signature

public Boolean hasTransparentBounds()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

For more information, see [Using Bounds](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_bounds.htm).

### hitEnd()

Returns true if the end of input was found by the search engine in the last match operation performed by this Matcher object. When this method returns true, it is possible that more input would have changed the result of the last search.

#### Signature

public Boolean hitEnd()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### lookingAt()

Attempts to match the input sequence, starting at the beginning of the region, against the pattern.

#### Signature

public Boolean lookingAt()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

Like the matches method, this method always starts at the beginning of the region; unlike that method, it does not require the entire region be matched.

If the match succeeds, more information can be obtained using the start, end, and group methods.

See [Using Regions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_regions.htm).

### matches()

Attempts to match the entire region against the pattern.

#### Signature

public Boolean matches()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If the match succeeds, more information can be obtained using the start, end, and group methods.

See [Using Regions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_regions.htm).

### pattern()

Returns the Pattern object from which this Matcher object was created.

#### Signature

public Pattern object pattern()

#### Return Value

Type: [System.Pattern](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm#apex_classes_pattern_and_matcher_pattern_methods "Represents a compiled representation of a regular expression.")

### quoteReplacement(inputString)

Returns a literal replacement string for the specified string inputString. The characters in the returned string match the sequence of characters in inputString.

#### Signature

public static String quoteReplacement(String inputString)

#### Parameters

inputString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Metacharacters (such as $ or ^) and escape sequences in the input string are treated as literal characters with no special meaning.

### region(start, end)

Sets the limits of this Matcher object's region. The region is the part of the input sequence that is searched to find a match.

#### Signature

public Matcher object region(Integer start, Integer end)

#### Parameters

start

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

end

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Matcher](#apex_classes_pattern_and_matcher_matcher_methods "Matchers use Patterns to perform match operations on a character string.")

#### Usage

This method first resets the Matcher object, then sets the region to start at the index specified by start and end at the index specified by end.

Depending on the transparency boundaries being used, certain constructs such as anchors may behave differently at or around the boundaries of the region.

See [Using Regions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_regions.htm) and [Using Bounds](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_bounds.htm).

### regionEnd()

Returns the end index (exclusive) of this Matcher object's region.

#### Signature

public Integer regionEnd()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

See [Using Regions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_regions.htm).

### regionStart()

Returns the start index (inclusive) of this Matcher object's region.

#### Signature

public Integer regionStart()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

See [Using Regions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_regions.htm).

### replaceAll(replacementString)

Replaces every subsequence of the input sequence that matches the pattern with the replacement string.

#### Signature

public String replaceAll(String replacementString)

#### Parameters

replacementString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This method first resets the Matcher object, then scans the input sequence looking for matches of the pattern. Characters that are not part of any match are appended directly to the result string; each match is replaced in the result by the replacement string. The replacement string may contain references to captured subsequences.

Note that backslashes (\\) and dollar signs ($) in the replacement string may cause the results to be different than if the string was treated as a literal replacement string. Dollar signs may be treated as references to captured subsequences, and backslashes are used to escape literal characters in the replacement string.

Invoking this method changes this Matcher object's state. If the Matcher object is to be used in further matching operations it should first be reset.

Given the regular expression a\*b, the input "aabxyzaabxyzabxyzb", and the replacement string "-", an invocation of this method on a Matcher object for that expression would yield the string "-xyz-xyz-xyz-".

### replaceFirst(replacementString)

Replaces the first subsequence of the input sequence that matches the pattern with the replacement string.

#### Signature

public String replaceFirst(String replacementString)

#### Parameters

replacementString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Note that backslashes (\\) and dollar signs ($) in the replacement string may cause the results to be different than if the string was treated as a literal replacement string. Dollar signs may be treated as references to captured subsequences, and backslashes are used to escape literal characters in the replacement string.

Invoking this method changes this Matcher object's state. If the Matcher object is to be used in further matching operations it should first be reset.

Given the regular expression dog, the input "zzzdogzzzdogzzz", and the replacement string "cat", an invocation of this method on a Matcher object for that expression would return the string "zzzcatzzzdogzzz".

### requireEnd()

Returns true if more input could change a positive match into a negative one.

#### Signature

public Boolean requireEnd()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If this method returns true, and a match was found, then more input could cause the match to be lost.

If this method returns false and a match was found, then more input might change the match but the match won't be lost.

If a match was not found, then requireEnd has no meaning.

### reset()

Resets this Matcher object. Resetting a Matcher object discards all of its explicit state information.

#### Signature

public Matcher object reset()

#### Return Value

Type: [Matcher](#apex_classes_pattern_and_matcher_matcher_methods "Matchers use Patterns to perform match operations on a character string.")

#### Usage

This method does not change whether the Matcher object uses anchoring bounds. You must explicitly use the useAnchoringBounds method to change the anchoring bounds.

For more information, see [Using Bounds](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_bounds.htm).

### reset(inputSequence)

Resets this Matcher object with the new input sequence. Resetting a Matcher object discards all of its explicit state information.

#### Signature

public Matcher reset(String inputSequence)

#### Parameters

inputSequence

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Matcher](#apex_classes_pattern_and_matcher_matcher_methods "Matchers use Patterns to perform match operations on a character string.")

### start()

Returns the start index of the first character of the previous match.

#### Signature

public Integer start()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### start(groupIndex)

Returns the start index of the subsequence captured by the group specified by the group index during the previous match operation. Captured groups are indexed from left to right, starting at one. Group zero denotes the entire pattern, so the expression m.start(0) is equivalent to m.start().

#### Signature

public Integer start(Integer groupIndex)

#### Parameters

groupIndex

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

See [Understanding Capturing Groups](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_capturing_groups.htm).

### useAnchoringBounds(anchoringBounds)

Sets the anchoring bounds of the region for the Matcher object. By default, a Matcher object uses anchoring bounds regions.

#### Signature

public Matcher object useAnchoringBounds(Boolean anchoringBounds)

#### Parameters

anchoringBounds

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If you specify true, the Matcher object uses anchoring bounds. If you specify false, non-anchoring bounds are used.

#### Return Value

Type: [Matcher](#apex_classes_pattern_and_matcher_matcher_methods "Matchers use Patterns to perform match operations on a character string.")

#### Usage

If a Matcher object uses anchoring bounds, the boundaries of this Matcher object's region match start and end of line anchors such as ^ and $.

For more information, see [Using Bounds](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_bounds.htm).

### usePattern(pattern)

Changes the Pattern object that the Matcher object uses to find matches. This method causes the Matcher object to lose information about the groups of the last match that occurred. The Matcher object's position in the input is maintained.

#### Signature

public Matcher object usePattern(Pattern pattern)

#### Parameters

pattern

Type: [System.Pattern](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm#apex_classes_pattern_and_matcher_pattern_methods "Represents a compiled representation of a regular expression.")

#### Return Value

Type: [Matcher](#apex_classes_pattern_and_matcher_matcher_methods "Matchers use Patterns to perform match operations on a character string.")

### useTransparentBounds(transparentBounds)

Sets the transparency bounds for this Matcher object. By default, a Matcher object uses anchoring bounds regions.

#### Signature

public Matcher object useTransparentBounds(Boolean transparentBounds)

#### Parameters

transparentBounds

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If you specify true, the Matcher object uses transparent bounds. If you specify false, opaque bounds are used.

#### Return Value

Type: [Matcher](#apex_classes_pattern_and_matcher_matcher_methods "Matchers use Patterns to perform match operations on a character string.")

#### Usage

For more information, see [Using Bounds](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_bounds.htm).

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- end() (atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm)
- end(groupIndex) (atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm)
- find() (atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm)
- find(group) (atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm)
- group() (atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm)
- group(groupIndex) (atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm)
- groupCount() (atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm)
- hasAnchoringBounds() (atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm)
- hasTransparentBounds() (atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm)
