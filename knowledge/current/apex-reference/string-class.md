---
title: "String Class"
domain: apex-reference
topic: string-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:31.294Z
estimatedTokens: 28787
namespace: System
keywords: [character, specified, index., Usage, abbreviate, maxWidth, Example, offset, capitalize, center, size, paddingString, charAt, index, codePointAt, codePointBefore, codePointCount, beginIndex, endIndex, compareTo]
---

# String Class

> Returns the value of the character at
the specified index.

**Namespace:** `System`

# String Class

Contains methods for the String primitive data type.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

All string method definitions adhere to the [Unicode Standard](https://www.unicode.org/standard/standard.html "HTML (New Window)"). For example, Unicode Roman numerals are classified as a type of number form, not a type of digit. Therefore, string methods such as isAlphanumeric() return false if used on a String that contains a Roman numeral. For Unicode classifications, see the [Unicode Character Code Charts](https://www.unicode.org/charts/ "HTML (New Window)").

For more information on Strings, see [String Data Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_primitives.htm).

## String Methods

The following are methods for String.

-   **[abbreviate(maxWidth)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_abbreviate)**
    Returns an abbreviated version of the String, of the specified length and with ellipses appended if the current String is longer than the specified length; otherwise, returns the original String without ellipses.
-   **[abbreviate(maxWidth, offset)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_abbreviate_2)**
    Returns an abbreviated version of the String, starting at the specified character offset and of the specified length. The returned String has ellipses appended at the start and the end if characters have been removed at these locations.
-   **[capitalize()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_capitalize)**
    Returns the current String with the first letter changed to title case.
-   **[center(size)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_center)**
    Returns a version of the current String of the specified size padded with spaces on the left and right, so that it appears in the center. If the specified size is smaller than the current String size, the entire String is returned without added spaces.
-   **[center(size, paddingString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_center_2)**
    Returns a version of the current String of the specified size padded with the specified String on the left and right, so that it appears in the center. If the specified size is smaller than the current String size, the entire String is returned without padding.
-   **[charAt(index)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_charAt)**
    Returns the value of the character at the specified index.
-   **[codePointAt(index)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_codePointAt)**
    Returns the Unicode code point value at the specified index.
-   **[codePointBefore(index)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_codePointBefore)**
    Returns the Unicode code point value that occurs before the specified index.
-   **[codePointCount(beginIndex, endIndex)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_codePointCount)**
    Returns the number of Unicode code points within the specified text range.
-   **[compareTo(secondString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_compareTo)**
    Compares two strings lexicographically, based on the Unicode value of each character in the Strings.
-   **[contains(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_contains)**
    Returns true if and only if the String that called the method contains the specified sequence of characters in substring.
-   **[containsAny(inputString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_containsAny)**
    Returns true if the current String contains any of the characters in the specified String; otherwise, returns false.
-   **[containsIgnoreCase(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_containsIgnoreCase)**
    Returns true if the current String contains the specified sequence of characters without regard to case; otherwise, returns false.
-   **[containsNone(inputString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_containsNone)**
    Returns true if the current String doesn’t contain any of the characters in the specified String; otherwise, returns false.
-   **[containsOnly(inputString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_containsOnly)**
    Returns true if the current String contains characters only from the specified sequence of characters and not any other characters; otherwise, returns false.
-   **[containsWhitespace()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_containsWhitespace)**
    Returns true if the current String contains any white space characters; otherwise, returns false.
-   **[countMatches(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_countMatches)**
    Returns the number of times the specified substring occurs in the current String.
-   **[deleteWhitespace()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_deleteWhitespace)**
    Returns a version of the current String with all white space characters removed.
-   **[difference(secondString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_difference)**
    Returns the difference between the current String and the specified String.
-   **[endsWith(suffix)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_endsWith)**
    Returns true if the String that called the method ends with the specified suffix.
-   **[endsWithIgnoreCase(suffix)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_endsWithIgnoreCase)**
    Returns true if the current String ends with the specified suffix; otherwise, returns false.
-   **[equals(secondString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_equals)**
    Deprecated. This method is replaced by equals(stringOrId). Returns true if the passed-in string is not null and represents the same binary sequence of characters as the current string. Use this method to perform case-sensitive comparisons.
-   **[equals(stringOrId)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_equals_2)**
    Returns true if the passed-in object is not null and represents the same binary sequence of characters as the current string. Use this method to compare a string to an object that represents a string or an ID.
-   **[equalsIgnoreCase(secondString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_equalsIgnoreCase)**
    Returns true if the secondString isn’t null and represents the same sequence of characters as the String that called the method, ignoring case.
-   **[escapeCsv()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_escapeCsv)**
    Returns a String for a CSV column enclosed in double quotes, if required.
-   **[escapeEcmaScript()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_escapeEcmaScript)**
    Escapes the characters in the String using EcmaScript String rules.
-   **[escapeHtml3()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_escapeHtml3)**
    Escapes the characters in a String using HTML 3.0 entities.
-   **[escapeHtml4()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_escapeHtml4)**
    Escapes the characters in a String using HTML 4.0 entities.
-   **[escapeJava()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_escapeJava)**
    Returns a String whose characters are escaped using Java String rules. Characters escaped include quotes and control characters, such as tab, backslash, and carriage return characters.
-   **[escapeSingleQuotes(stringToEscape)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_escapeSingleQuotes)**
    Returns a String with the escape character (\\) added before any single quotation mark (') or backslash (\\) in the String s.
-   **[escapeUnicode()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_escapeUnicode)**
    Returns a String whose Unicode characters are escaped to a Unicode escape sequence.
-   **[escapeXml()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_escapeXml)**
    Escapes the characters in a String using XML entities.
-   **[format(stringToFormat, formattingArguments)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_format)**
    Treat the first argument as a pattern and return a string using the second argument for substitution and formatting. The substitution and formatting are the same as apex:outputText and the Java MessageFormat class. Non-string types in the second argument’s List are implicitly converted to strings, respecting the toString() method overrides that exist on the type.
-   **[fromCharArray(charArray)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_fromCharArray)**
    Returns a String from the values of the list of integers.
-   **[getChars()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_getChars)**
    Returns an array of character values that represent the characters in this string.
-   **[getCommonPrefix(strings)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_getCommonPrefix)**
    Returns the initial sequence of characters as a String that is common to all the specified Strings.
-   **[getLevenshteinDistance(stringToCompare)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_getLevenshteinDistance)**
    Returns the Levenshtein distance between the current String and the specified String.
-   **[getLevenshteinDistance(stringToCompare, threshold)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_getLevenshteinDistance_2)**
    Returns the Levenshtein distance between the current String and the specified String if it is less than or equal than the given threshold; otherwise, returns -1.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_hashCode)**
    Returns a hash code value for this string.
-   **[indexOf(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_indexOf)**
    Returns the index of the first occurrence of the specified substring. If the substring does not occur, this method returns -1.
-   **[indexOf(substring, index)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_indexOf_2)**
    Returns the zero-based index of the first occurrence of the specified substring from the point of the given index. If the substring does not occur, this method returns -1.
-   **[indexOfAny(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_indexOfAny)**
    Returns the zero-based index of the first occurrence of any character specified in the substring. If none of the characters occur, returns -1.
-   **[indexOfAnyBut(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_indexOfAnyBut)**
    Returns the zero-based index of the first occurrence of a character that is not in the specified substring. Otherwise, returns -1.
-   **[indexOfChar(character)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_indexOfChar)**
    Returns the index of the first occurrence of the character that corresponds to the specified character value.
-   **[indexOfChar(character, startIndex)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_indexOfChar_2)**
    Returns the index of the first occurrence of the character that corresponds to the specified character value, starting from the specified index.
-   **[indexOfDifference(stringToCompare)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_indexOfDifference)**
    Returns the zero-based index of the character where the current String begins to differ from the specified String.
-   **[indexOfIgnoreCase(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_indexOfIgnoreCase)**
    Returns the zero-based index of the first occurrence of the specified substring without regard to case. If the substring does not occur, this method returns -1.
-   **[indexOfIgnoreCase(substring, startPosition)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_indexOfIgnoreCase_2)**
    Returns the zero-based index of the first occurrence of the specified substring from the point of index i, without regard to case. If the substring does not occur, this method returns -1.
-   **[isAllLowerCase()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isAllLowerCase)**
    Returns true if all characters in the current String are lowercase; otherwise, returns false.
-   **[isAllUpperCase()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isAllUpperCase)**
    Returns true if all characters in the current String are uppercase; otherwise, returns false.
-   **[isAlpha()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isAlpha)**
    Returns true if all characters in the current String are Unicode letters only; otherwise, returns false.
-   **[isAlphaSpace()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isAlphaSpace)**
    Returns true if all characters in the current String are Unicode letters or spaces only; otherwise, returns false.
-   **[isAlphanumeric()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isAlphanumeric)**
    Returns true if all characters in the current String are Unicode letters or digits only; otherwise, returns false.
-   **[isAlphanumericSpace()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isAlphanumericSpace)**
    Returns true if all characters in the current String are Unicode letters, digits, or spaces only; otherwise, returns false.
-   **[isAsciiPrintable()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isAsciiPrintable)**
    Returns true if the current String contains only ASCII printable characters; otherwise, returns false.
-   **[isBlank(inputString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isBlank)**
    Returns true if the specified String is white space, empty (''), or null; otherwise, returns false.
-   **[isEmpty(inputString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isEmpty)**
    Returns true if the specified String is empty ('') or null; otherwise, returns false.
-   **[isNotBlank(inputString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isNotBlank)**
    Returns true if the specified String is not whitespace, not empty (''), and not null; otherwise, returns false.
-   **[isNotEmpty(inputString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isNotEmpty)**
    Returns true if the specified String is not empty ('') and not null; otherwise, returns false.
-   **[isNumeric()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isNumeric)**
    Returns true if the current String contains only Unicode digits; otherwise, returns false.
-   **[isNumericSpace()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isNumericSpace)**
    Returns true if the current String contains only Unicode digits or spaces; otherwise, returns false.
-   **[isWhitespace()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isWhitespace)**
    Returns true if the current String contains only white space characters or is empty; otherwise, returns false.
-   **[join(iterableObj, separator)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_join)**
    Joins the elements of the specified iterable object, such as a List, into a single String separated by the specified separator.
-   **[lastIndexOf(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_lastIndexOf)**
    Returns the index of the last occurrence of the specified substring. If the substring does not occur, this method returns -1.
-   **[lastIndexOf(substring, endPosition)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_lastIndexOf_2)**
    Returns the index of the last occurrence of the specified substring, starting from the character at index 0 and ending at the specified index.
-   **[lastIndexOfChar(character)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_lastIndexOfChar)**
    Returns the index of the last occurrence of the character that corresponds to the specified character value.
-   **[lastIndexOfChar(character, endIndex)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_lastIndexOfChar_2)**
    Returns the index of the last occurrence of the character that corresponds to the specified character value, starting from the specified index.
-   **[lastIndexOfIgnoreCase(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_lastIndexOfIgnoreCase)**
    Returns the index of the last occurrence of the specified substring regardless of case.
-   **[lastIndexOfIgnoreCase(substring, endPosition)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_lastIndexOfIgnoreCase_2)**
    Returns the index of the last occurrence of the specified substring regardless of case, starting from the character at index 0 and ending at the specified index.
-   **[left(length)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_left)**
    Returns the leftmost characters of the current String of the specified length.
-   **[leftPad(length)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_leftPad)**
    Returns the current String padded with spaces on the left and of the specified length.
-   **[leftPad(length, padStr)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#unique_2086372316)**
    Returns the current String padded with String padStr on the left and of the specified length.
-   **[length()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_length)**
    Returns the number of 16-bit Unicode characters contained in the String.
-   **[mid(startIndex, length)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_mid)**
    Returns a new String that begins with the character at the specified zero-based startIndex with the number of characters specified by length.
-   **[normalizeSpace()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_normalizeSpace)**
    Returns the current String with leading, trailing, and repeating white space characters removed.
-   **[offsetByCodePoints(index, codePointOffset)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_offsetByCodePoints)**
    Returns the index of the Unicode code point that is offset by the specified number of code points, starting from the given index.
-   **[remove(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_remove)**
    Removes all occurrences of the specified substring and returns the String result.
-   **[removeEnd(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_removeEnd)**
    Removes the specified substring only if it occurs at the end of the String.
-   **[removeEndIgnoreCase(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_removeEndIgnoreCase)**
    Removes the specified substring only if it occurs at the end of the String using a case-insensitive match.
-   **[removeStart(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_removeStart)**
    Removes the specified substring only if it occurs at the beginning of the String.
-   **[removeStartIgnoreCase(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_removeStartIgnoreCase)**
    Removes the specified substring only if it occurs at the beginning of the String using a case-insensitive match.
-   **[repeat(numberOfTimes)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_repeat)**
    Returns the current String repeated the specified number of times.
-   **[repeat(separator, numberOfTimes)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_repeat_2)**
    Returns the current String repeated the specified number of times using the specified separator to separate the repeated Strings.
-   **[replace(target, replacement)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_replace)**
    Replaces each substring of a string that matches the literal target sequence target with the specified literal replacement sequence replacement.
-   **[replaceAll(regExp, replacement)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_replaceAll)**
    Replaces each substring of a string that matches the regular expression regExp with the replacement sequence replacement.
-   **[replaceFirst(regExp, replacement)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_replaceFirst)**
    Replaces the first substring of a string that matches the regular expression regExp with the replacement sequence replacement.
-   **[reverse()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_reverse)**
    Returns a String with all the characters reversed.
-   **[right(length)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_right)**
    Returns the rightmost characters of the current String of the specified length.
-   **[rightPad(length)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_rightPad)**
    Returns the current String padded with spaces on the right and of the specified length.
-   **[rightPad(length, padStr)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#unique_1213778488)**
    Returns the current String padded with String padStr on the right and of the specified length.
-   **[split(regExp)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_split)**
    Returns a list that contains each substring of the String that is terminated by either the regular expression regExp or the end of the String.
-   **[split(regExp, limit)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_split_2)**
    Returns a list that contains each substring of the String that is terminated by either the regular expression regExp or the end of the String.
-   **[splitByCharacterType()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_splitByCharacterType)**
    Splits the current String by character type and returns a list of contiguous character groups of the same type as complete tokens.
-   **[splitByCharacterTypeCamelCase()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_splitByCharacterTypeCamelCase)**
    Splits the current String by character type and returns a list of contiguous character groups of the same type as complete tokens, with the following exception: the uppercase character, if any, immediately preceding a lowercase character token belongs to the following character token rather than to the preceding.
-   **[startsWith(prefix)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_startsWith)**
    Returns true if the String that called the method begins with the specified prefix.
-   **[startsWithIgnoreCase(prefix)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_startsWithIgnoreCase)**
    Returns true if the current String begins with the specified prefix regardless of the prefix case.
-   **[stripHtmlTags()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_stripHtmlTags)**
    Removes HTML markup and returns plain text.
-   **[substring(startIndex)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_substring)**
    Returns a new String that begins with the character at the specified zero-based startIndex and extends to the end of the String.
-   **[substring(startIndex, endIndex)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_substring_2)**
    Returns a new String that begins with the character at the specified zero-based startIndex and extends to the character at endIndex - 1.
-   **[substringAfter(separator)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_substringAfter)**
    Returns the substring that occurs after the first occurrence of the specified separator.
-   **[substringAfterLast(separator)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_substringAfterLast)**
    Returns the substring that occurs after the last occurrence of the specified separator.
-   **[substringBefore(separator)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_substringBefore)**
    Returns the substring that occurs before the first occurrence of the specified separator.
-   **[substringBeforeLast(separator)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_substringBeforeLast)**
    Returns the substring that occurs before the last occurrence of the specified separator.
-   **[substringBetween(tag)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_substringBetween)**
    Returns the substring that occurs between two instances of the specified tag String.
-   **[substringBetween(open, close)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_substringBetween_2)**
    Returns the substring that occurs between the two specified Strings.
-   **[swapCase()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_swapCase)**
    Swaps the case of all characters and returns the resulting String by using the default (English US) locale.
-   **[toLowerCase()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_toLowerCase)**
    Converts all of the characters in the String to lowercase using the rules of the default (English US) locale.
-   **[toLowerCase(locale)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_toLowerCase_2)**
    Converts all of the characters in the String to lowercase using the rules of the specified locale.
-   **[toUpperCase()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_toUpperCase)**
    Converts all of the characters in the String to uppercase using the rules of the default (English US) locale.
-   **[toUpperCase(locale)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_toUpperCase_2)**
    Converts all of the characters in the String to the uppercase using the rules of the specified locale.
-   **[trim()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_trim)**
    Returns a copy of the string that no longer contains any leading or trailing white space characters.
-   **[uncapitalize()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_uncapitalize)**
    Returns the current String with the first letter in lowercase.
-   **[unescapeCsv()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_unescapeCsv)**
    Returns a String representing an unescaped CSV column.
-   **[unescapeEcmaScript()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_unescapeEcmaScript)**
    Unescapes any EcmaScript literals found in the String.
-   **[unescapeHtml3()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_unescapeHtml3)**
    Unescapes the characters in a String using HTML 3.0 entities.
-   **[unescapeHtml4()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_unescapeHtml4)**
    Unescapes the characters in a String using HTML 4.0 entities.
-   **[unescapeJava()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_unescapeJava)**
    Returns a String whose Java literals are unescaped. Literals unescaped include escape sequences for quotes (\\") and control characters, such as tab (\\\\t), and carriage return (\\ ).
-   **[unescapeUnicode()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_unescapeUnicode)**
    Returns a String whose escaped Unicode characters are unescaped.
-   **[unescapeXml()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_unescapeXml)**
    Unescapes the characters in a String using XML entities.
-   **[valueOf(dateToConvert)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_valueOf)**
    Returns a String that represents the specified Date in the standard “yyyy-MM-dd” format.
-   **[valueOf(datetimeToConvert)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_valueOf_2)**
    Returns a String that represents the specified Datetime in the standard “yyyy-MM-dd HH:mm:ss” format for the local time zone.
-   **[valueOf(decimalToConvert)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_valueOf_3)**
    Returns a String that represents the specified Decimal.
-   **[valueOf(doubleToConvert)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_valueOf_4)**
    Returns a String that represents the specified Double.
-   **[valueOf(integerToConvert)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_valueOf_5)**
    Returns a String that represents the specified Integer.
-   **[valueOf(longToConvert)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_valueOf_6)**
    Returns a String that represents the specified Long.
-   **[valueOf(toConvert)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_valueOf_7)**
    Returns a string representation of the specified object argument.
-   **[valueOfGmt(datetimeToConvert)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_valueOfGmt)**
    Returns a String that represents the specified Datetime in the standard “yyyy-MM-dd HH:mm:ss” format for the GMT time zone.

### abbreviate(maxWidth)

Returns an abbreviated version of the String, of the specified length and with ellipses appended if the current String is longer than the specified length; otherwise, returns the original String without ellipses.

#### Signature

public String abbreviate(Integer maxWidth)

#### Parameters

maxWidth

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

If maxWidth is less than four, this method throws a run-time exception.

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### abbreviate(maxWidth, offset)

Returns an abbreviated version of the String, starting at the specified character offset and of the specified length. The returned String has ellipses appended at the start and the end if characters have been removed at these locations.

#### Signature

public String abbreviate(Integer maxWidth, Integer offset)

#### Parameters

maxWidth

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Note that the offset is not necessarily the leftmost character in the returned String or the first character following the ellipses, but it appears somewhere in the result.  Regardless, abbreviate won’t return a String of length greater than maxWidth.If maxWidth is too small, this method throws a run-time exception.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### capitalize()

Returns the current String with the first letter changed to title case.

#### Signature

public String capitalize()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This method is based on the [Character.toTitleCase(char)](http://docs.oracle.com/javase/6/docs/api/java/lang/Character.html?is-external=true#toTitleCase%28char%29 "HTML (New Window)") Java method.

#### Example

```

```

### center(size)

Returns a version of the current String of the specified size padded with spaces on the left and right, so that it appears in the center. If the specified size is smaller than the current String size, the entire String is returned without added spaces.

#### Signature

public String center(Integer size)

#### Parameters

size

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### center(size, paddingString)

Returns a version of the current String of the specified size padded with the specified String on the left and right, so that it appears in the center. If the specified size is smaller than the current String size, the entire String is returned without padding.

#### Signature

public String center(Integer size, String paddingString)

#### Parameters

size

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

paddingString

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### charAt(index)

Returns the value of the character at the specified index.

#### Signature

public Integer charAt(Integer index)

#### Parameters

index

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The index of the character to get the value of.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The integer value of the character.

#### Usage

The charAt method returns the value of the character pointed to by the specified index. If the index points to the beginning of a surrogate pair (the high-surrogate code point), this method returns only the high-surrogate code point. To return the supplementary code point corresponding to a surrogate pair, call codePointAt instead.

#### Example

This example gets the value of the first character at index 0.

```

```

This example shows the difference between charAt and codePointAt. The example calls these methods on escaped supplementary Unicode characters. charAt(0) returns the high surrogate value, which corresponds to \\uD835. codePointAt(0) returns the value for the entire surrogate pair.

```

```

### codePointAt(index)

Returns the Unicode code point value at the specified index.

#### Signature

public Integer codePointAt(Integer index)

#### Parameters

index

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The index of the characters (Unicode code units) in the string. The index range is from zero to the string length minus one.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The Unicode code point value at the specified index.

#### Usage

If the index points to the beginning of a surrogate pair (the high-surrogate code point), and the character value at the following index points to the low-surrogate code point, this method returns the supplementary code point corresponding to this surrogate pair. Otherwise, this method returns the character value at the given index.

For more information on Unicode and surrogate pairs, see [The Unicode Consortium](http://www.unicode.org "HTML (New Window)").

#### Example

This example gets the code point value of the first character at index 0, which is the escaped Omega character. Also, the example gets the code point at index 20, which corresponds to the escaped supplementary Unicode characters (a pair of characters). Finally, it verifies that the escaped and unescaped forms of Omega have the same code point values.

The supplementary characters in this example (\\\\uD835\\\\uDD0A) correspond to mathematical fraktur capital G: ![Mathemtical Fraktur Capital G symbol](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2FfrakturG.png&folder=apexref)

```

```

### codePointBefore(index)

Returns the Unicode code point value that occurs before the specified index.

#### Signature

public Integer codePointBefore(Integer index)

#### Parameters

index

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The index before the Unicode code point that is to be returned. The index range is from one to the string length.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The character or Unicode code point value that occurs before the specified index.

#### Usage

If the character value at index\-1 is the low-surrogate code point, and index\-2 is not negative and the character at this index location is the high-surrogate code point, this method returns the supplementary code point corresponding to this surrogate pair. If the character value at index\-1 is an unpaired low-surrogate or high-surrogate code point, the surrogate value is returned.

For more information on Unicode and surrogate pairs, see [The Unicode Consortium](http://www.unicode.org "HTML (New Window)").

#### Example

This example gets the code point value of the first character (before index 1), which is the escaped Omega character. Also, the example gets the code point at index 20, which corresponds to the escaped supplementary characters (the two characters before index 22).

```

```

### codePointCount(beginIndex, endIndex)

Returns the number of Unicode code points within the specified text range.

#### Signature

public Integer codePointCount(Integer beginIndex, Integer endIndex)

#### Parameters

beginIndex

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The index of the first character in the range.

endIndex

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The index after the last character in the range.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The number of Unicode code points within the specified range.

#### Usage

The specified range begins at beginIndex and ends at endIndex—1. Unpaired surrogates within the text range count as one code point each.

#### Example

This example writes the count of code points in a substring that contains an escaped Unicode character and another substring that contains Unicode supplementary characters, which count as one code point.

```

```

### compareTo(secondString)

Compares two strings lexicographically, based on the Unicode value of each character in the Strings.

#### Signature

public Integer compareTo(String secondString)

#### Parameters

secondString

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

The result is:

-   A negative Integer if the String that called the method lexicographically precedes secondString
-   A positive Integer if the String that called the method lexicographically follows compsecondStringString
-   Zero if the Strings are equal

If there is no index position at which the Strings differ, then the shorter String lexicographically precedes the longer String.

Note that this method returns 0 whenever the equals method returns true.

#### Example

```

```

### contains(substring)

Returns true if and only if the String that called the method contains the specified sequence of characters in substring.

#### Signature

public Boolean contains(String substring)

#### Parameters

substring

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### containsAny(inputString)

Returns true if the current String contains any of the characters in the specified String; otherwise, returns false.

#### Signature

public Boolean containsAny(String inputString)

#### Parameters

inputString

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### containsIgnoreCase(substring)

Returns true if the current String contains the specified sequence of characters without regard to case; otherwise, returns false.

#### Signature

public Boolean containsIgnoreCase(String substring)

#### Parameters

substring

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### containsNone(inputString)

Returns true if the current String doesn’t contain any of the characters in the specified String; otherwise, returns false.

#### Signature

public Boolean containsNone(String inputString)

#### Parameters

inputString

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

If inputString is an empty string or the current String is empty, this method returns true. If inputString is null, this method returns a run-time exception.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### containsOnly(inputString)

Returns true if the current String contains characters only from the specified sequence of characters and not any other characters; otherwise, returns false.

#### Signature

public Boolean containsOnly(String inputString)

#### Parameters

inputString

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### containsWhitespace()

Returns true if the current String contains any white space characters; otherwise, returns false.

#### Signature

public Boolean containsWhitespace()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### countMatches(substring)

Returns the number of times the specified substring occurs in the current String.

#### Signature

public Integer countMatches(String substring)

#### Parameters

substring

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### deleteWhitespace()

Returns a version of the current String with all white space characters removed.

#### Signature

public String deleteWhitespace()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### difference(secondString)

Returns the difference between the current String and the specified String.

#### Signature

public String difference(String secondString)

#### Parameters

secondString

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

If secondString is an empty string, this method returns an empty string.If secondString is null, this method throws a run-time exception.

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### endsWith(suffix)

Returns true if the String that called the method ends with the specified suffix.

#### Signature

public Boolean endsWith(String suffix)

#### Parameters

suffix

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### endsWithIgnoreCase(suffix)

Returns true if the current String ends with the specified suffix; otherwise, returns false.

#### Signature

public Boolean endsWithIgnoreCase(String suffix)

#### Parameters

suffix

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### equals(secondString)

Deprecated. This method is replaced by equals(stringOrId). Returns true if the passed-in string is not null and represents the same binary sequence of characters as the current string. Use this method to perform case-sensitive comparisons.

#### Signature

public Boolean equals(String secondString)

#### Parameters

secondString

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

This method returns true when the compareTo method returns 0.

Use this method to perform case-sensitive comparisons. In contrast, the \== operator performs case-insensitive string comparisons to match Apex semantics.

#### Example

```

```

### equals(stringOrId)

Returns true if the passed-in object is not null and represents the same binary sequence of characters as the current string. Use this method to compare a string to an object that represents a string or an ID.

#### Signature

public Boolean equals(Object stringOrId)

#### Parameters

stringOrId

Type: Object

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If you compare ID values, the lengths of IDs don’t need to be equal. For example, if you compare a 15-character ID string to an object that represents the equivalent 18-character ID value, this method returns true. For more information about 15-character and 18-character IDs, see the [ID Data Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_primitives.htm).

Use this method to perform case-sensitive comparisons. In contrast, the \== operator performs case-insensitive string comparisons to match Apex semantics.

#### Example

These examples show comparisons between different types of variables with both equal and unequal values. The examples also show how Apex automatically converts certain values before comparing them.

```

```

### equalsIgnoreCase(secondString)

Returns true if the secondString isn’t null and represents the same sequence of characters as the String that called the method, ignoring case.

#### Signature

public Boolean equalsIgnoreCase(String secondString)

#### Parameters

secondString

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

The String.equalsIgnoreCase() method ignores the locale of the context user. If you want the string comparison to be performed according to the locale, use the \== operator instead. The String.equalsIgnoreCase() method typically executes faster than the operator because the method ignores the locale.

#### Example

```

```

### escapeCsv()

Returns a String for a CSV column enclosed in double quotes, if required.

#### Signature

public String escapeCsv()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

If the String contains a comma, newline or double quote, the returned String is enclosed in double quotes. Also, any double quote characters in the String are escaped with another double quote.

If the String doesn’t contain a comma, newline or double quote, it is returned unchanged.

#### Example

```

```

### escapeEcmaScript()

Escapes the characters in the String using EcmaScript String rules.

#### Signature

public String escapeEcmaScript()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

The only difference between Apex strings and EcmaScript strings is that in EcmaScript, a single quote and forward-slash (/) are escaped.

#### Example

```

```

### escapeHtml3()

Escapes the characters in a String using HTML 3.0 entities.

#### Signature

public String escapeHtml3()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### escapeHtml4()

Escapes the characters in a String using HTML 4.0 entities.

#### Signature

public String escapeHtml4()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### escapeJava()

Returns a String whose characters are escaped using Java String rules. Characters escaped include quotes and control characters, such as tab, backslash, and carriage return characters.

#### Signature

public String escapeJava()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

The escaped string.

#### Example

```

```

### escapeSingleQuotes(stringToEscape)

Returns a String with the escape character (\\) added before any single quotation mark (') or backslash (\\) in the String s.

#### Signature

public static String escapeSingleQuotes(String stringToEscape)

#### Parameters

stringToEscape

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This method is useful when creating a dynamic SOQL statement to help prevent SOQL injection. See [Dynamic SOQL](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_soql.htm).

#### Example

```

```

### escapeUnicode()

Returns a String whose Unicode characters are escaped to a Unicode escape sequence.

#### Signature

public String escapeUnicode()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

The escaped string.

#### Example

```

```

### escapeXml()

Escapes the characters in a String using XML entities.

#### Signature

public String escapeXml()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Supports only the five basic XML entities (gt, lt, quot, amp, apos). Does not support DTDs or external entities. Unicode characters greater than 0x7f are not escaped.

#### Example

```

```

### format(stringToFormat, formattingArguments)

Treat the first argument as a pattern and return a string using the second argument for substitution and formatting. The substitution and formatting are the same as apex:outputText and the Java MessageFormat class. Non-string types in the second argument’s List are implicitly converted to strings, respecting the toString() method overrides that exist on the type.

#### Signature

public static String format(String stringToFormat, List<Object\> formattingArguments)

#### Parameters

stringToFormat

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

formattingArguments

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<Object>

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Versioned Behavior Changes

From version 51.0 and later, the format() method supports single quotes in the stringToFormat parameter and returns a formatted string using the formattingArguments parameter. In version 50.0 and earlier, single quotes weren’t supported.

#### Example

```

```

### fromCharArray(charArray)

Returns a String from the values of the list of integers.

#### Signature

public static String fromCharArray(List<Integer\> charArray)

#### Parameters

charArray

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")\>

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### getChars()

Returns an array of character values that represent the characters in this string.

#### Signature

public List<Integer\> getChars()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")\>

A list of integers, each corresponding to a character value in the string.

#### Example

This sample converts a string to a character array and then gets the first array element, which corresponds to the value of 'J'.

```

```

#### Usage

If a "/" (slash) character is present in the string, String.getChars() unescapes it in the returned character array. This example uses the String.escapeJava() method to generate the desired value of "\\" in the returned string.

```

```

### getCommonPrefix(strings)

Returns the initial sequence of characters as a String that is common to all the specified Strings.

#### Signature

public static String getCommonPrefix(List<String\> strings)

#### Parameters

strings

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](#apex_methods_system_string "Contains methods for the String primitive data type.")\>

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### getLevenshteinDistance(stringToCompare)

Returns the Levenshtein distance between the current String and the specified String.

#### Signature

public Integer getLevenshteinDistance(String stringToCompare)

#### Parameters

stringToCompare

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

The Levenshtein distance is the number of changes needed to change one String into another. Each change is a single character modification (deletion, insertion or substitution).

#### Example

```

```

### getLevenshteinDistance(stringToCompare, threshold)

Returns the Levenshtein distance between the current String and the specified String if it is less than or equal than the given threshold; otherwise, returns -1.

#### Signature

public Integer getLevenshteinDistance(String stringToCompare, Integer threshold)

#### Parameters

stringToCompare

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

threshold

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

The Levenshtein distance is the number of changes needed to change one String into another. Each change is a single character modification (deletion, insertion or substitution).

Example:

In this example, the Levenshtein distance is 3, but the threshold argument is 2, which is less than the distance, so this method returns -1.

#### Example

```

```

### hashCode()

Returns a hash code value for this string.

#### Signature

public Integer hashCode()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

This value is based on the hash code computed by the Java [String.hashCode](http://docs.oracle.com/javase/6/docs/api/java/lang/String.html#hashCode%28%29 "HTML (New Window)") counterpart method.

You can use this method to simplify the computation of a hash code for a custom type that contains String member variables. You can compute your type’s hash code value based on the hash code of each String variable. For example:

For more details about the use of hash code methods with custom types, see [Using Custom Types in Map Keys and Sets](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_collections_maps_keys_userdefined.htm).

#### Example

```

```

### indexOf(substring)

Returns the index of the first occurrence of the specified substring. If the substring does not occur, this method returns -1.

#### Signature

public Integer indexOf(String substring)

#### Parameters

substring

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### indexOf(substring, index)

Returns the zero-based index of the first occurrence of the specified substring from the point of the given index. If the substring does not occur, this method returns -1.

#### Signature

public Integer indexOf(String substring, Integer index)

#### Parameters

substring

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

index

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### indexOfAny(substring)

Returns the zero-based index of the first occurrence of any character specified in the substring. If none of the characters occur, returns -1.

#### Signature

public Integer indexOfAny(String substring)

#### Parameters

substring

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### indexOfAnyBut(substring)

Returns the zero-based index of the first occurrence of a character that is not in the specified substring. Otherwise, returns -1.

#### Signature

public Integer indexOfAnyBut(String substring)

#### Parameters

substring

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### indexOfChar(character)

Returns the index of the first occurrence of the character that corresponds to the specified character value.

#### Signature

public Integer indexOfChar(Integer character)

#### Parameters

character

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The integer value of the character in the string.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The index of the first occurrence of the specified character, -1 if the character is not found.

#### Usage

The index that this method returns is in Unicode code units.

#### Example

```

```

### indexOfChar(character, startIndex)

Returns the index of the first occurrence of the character that corresponds to the specified character value, starting from the specified index.

#### Signature

public Integer indexOfChar(Integer character, Integer startIndex)

#### Parameters

character

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The integer value of the character to look for.

startIndex

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The index to start the search from.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The index, starting from the specified start index, of the first occurrence of the specified character, -1 if the character is not found.

#### Usage

The index that this method returns is in Unicode code units.

#### Example

This example shows different ways of searching for the index of the Omega character. The first call to indexOfChar doesn’t specify a start index and therefore the returned index is 0, which is the first occurrence of Omega in the entire string. The subsequent calls specify a start index to find the occurrence of Omega in substrings that start at the specified index.

```

```

### indexOfDifference(stringToCompare)

Returns the zero-based index of the character where the current String begins to differ from the specified String.

#### Signature

public Integer indexOfDifference(String stringToCompare)

#### Parameters

stringToCompare

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### indexOfIgnoreCase(substring)

Returns the zero-based index of the first occurrence of the specified substring without regard to case. If the substring does not occur, this method returns -1.

#### Signature

public Integer indexOfIgnoreCase(String substring)

#### Parameters

substring

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### indexOfIgnoreCase(substring, startPosition)

Returns the zero-based index of the first occurrence of the specified substring from the point of index i, without regard to case. If the substring does not occur, this method returns -1.

#### Signature

public Integer indexOfIgnoreCase(String substring, Integer startPosition)

#### Parameters

substring

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

startPosition

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### isAllLowerCase()

Returns true if all characters in the current String are lowercase; otherwise, returns false.

#### Signature

public Boolean isAllLowerCase()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### isAllUpperCase()

Returns true if all characters in the current String are uppercase; otherwise, returns false.

#### Signature

public Boolean isAllUpperCase()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### isAlpha()

Returns true if all characters in the current String are Unicode letters only; otherwise, returns false.

#### Signature

public Boolean isAlpha()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### isAlphaSpace()

Returns true if all characters in the current String are Unicode letters or spaces only; otherwise, returns false.

#### Signature

public Boolean isAlphaSpace()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### isAlphanumeric()

Returns true if all characters in the current String are Unicode letters or digits only; otherwise, returns false.

#### Signature

public Boolean isAlphanumeric()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

Unicode Roman numerals are classified as a type of number form, not a type of digit. Therefore, the isAlphanumeric() method returns false if used on a String that contains a Roman numeral. For Unicode classifications, see the [Unicode Character Code Charts](https://www.unicode.org/charts/ "HTML (New Window)").

#### Example

```

```

### isAlphanumericSpace()

Returns true if all characters in the current String are Unicode letters, digits, or spaces only; otherwise, returns false.

#### Signature

public Boolean isAlphanumericSpace()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

Unicode Roman numerals are classified as a type of number form, not a type of digit. Therefore, the isAlphanumericSpace() method returns false if used on a String that contains a Roman numeral. For Unicode classifications, see the [Unicode Character Code Charts](https://www.unicode.org/charts/ "HTML (New Window)").

#### Example

```

```

### isAsciiPrintable()

Returns true if the current String contains only ASCII printable characters; otherwise, returns false.

#### Signature

public Boolean isAsciiPrintable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### isBlank(inputString)

Returns true if the specified String is white space, empty (''), or null; otherwise, returns false.

#### Signature

public static Boolean isBlank(String inputString)

#### Parameters

inputString

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### isEmpty(inputString)

Returns true if the specified String is empty ('') or null; otherwise, returns false.

#### Signature

public static Boolean isEmpty(String inputString)

#### Parameters

inputString

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### isNotBlank(inputString)

Returns true if the specified String is not whitespace, not empty (''), and not null; otherwise, returns false.

#### Signature

public static Boolean isNotBlank(String inputString)

#### Parameters

inputString

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### isNotEmpty(inputString)

Returns true if the specified String is not empty ('') and not null; otherwise, returns false.

#### Signature

public static Boolean isNotEmpty(String inputString)

#### Parameters

inputString

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### isNumeric()

Returns true if the current String contains only Unicode digits; otherwise, returns false.

#### Signature

public Boolean isNumeric()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

A decimal point (1.2) is not a Unicode digit.

#### Example

```

```

### isNumericSpace()

Returns true if the current String contains only Unicode digits or spaces; otherwise, returns false.

#### Signature

public Boolean isNumericSpace()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

A decimal point (1.2) is not a Unicode digit.

#### Example

```

```

### isWhitespace()

Returns true if the current String contains only white space characters or is empty; otherwise, returns false.

#### Signature

public Boolean isWhitespace()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### join(iterableObj, separator)

Joins the elements of the specified iterable object, such as a List, into a single String separated by the specified separator.

#### Signature

public static String join(Object iterableObj, String separator)

#### Parameters

iterableObj

Type: Object

separator

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

```

```

### lastIndexOf(substring)

Returns the index of the last occurrence of the specified substring. If the substring does not occur, this method returns -1.

#### Signature

public Integer lastIndexOf(String substring)

#### Parameters

substring

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### lastIndexOf(substring, endPosition)

Returns the index of the last occurrence of the specified substring, starting from the character at index 0 and ending at the specified index.

#### Signature

public Integer lastIndexOf(String substring, Integer endPosition)

#### Parameters

substring

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

endPosition

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

If the substring doesn’t occur or endPosition is negative, this method returns -1. If endPosition is larger than the last index in the current String, the entire String is searched.

#### Example

```

```

### lastIndexOfChar(character)

Returns the index of the last occurrence of the character that corresponds to the specified character value.

#### Signature

public Integer lastIndexOfChar(Integer character)

#### Parameters

character

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The integer value of the character in the string.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The index of the last occurrence of the specified character, -1 if the character is not found.

#### Usage

The index that this method returns is in Unicode code units.

#### Example

```

```

### lastIndexOfChar(character, endIndex)

Returns the index of the last occurrence of the character that corresponds to the specified character value, starting from the specified index.

#### Signature

public Integer lastIndexOfChar(Integer character, Integer endIndex)

#### Parameters

character

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The integer value of the character to look for.

endIndex

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The index to end the search at.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The index, starting from the specified start index, of the last occurrence of the specified character. -1 if the character is not found.

#### Usage

The index that this method returns is in Unicode code units.

#### Example

This example shows different ways of searching for the index of the last occurrence of the Omega character. The first call to lastIndexOfChar doesn’t specify an end index and therefore the returned index is 12, which is the last occurrence of Omega in the entire string. The subsequent calls specify an end index to find the last occurrence of Omega in substrings.

```

```

### lastIndexOfIgnoreCase(substring)

Returns the index of the last occurrence of the specified substring regardless of case.

#### Signature

public Integer lastIndexOfIgnoreCase(String substring)

#### Parameters

substring

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

If the substring doesn’t occur, this method returns -1.

#### Example

```

```

### lastIndexOfIgnoreCase(substring, endPosition)

Returns the index of the last occurrence of the specified substring regardless of case, starting from the character at index 0 and ending at the specified index.

#### Signature

public Integer lastIndexOfIgnoreCase(String substring, Integer endPosition)

#### Parameters

substring

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

endPosition

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

If the substring doesn’t occur or endPosition is negative, this method returns -1. If endPosition is larger than the last index in the current String, the entire String is searched.

#### Example

```

```

### left(length)

Returns the leftmost characters of the current String of the specified length.

#### Signature

public String left(Integer length)

#### Parameters

length

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

If length is greater than the String size, the entire String is returned.

#### Example

```

```

### leftPad(length)

Returns the current String padded with spaces on the left and of the specified length.

#### Signature

public String leftPad(Integer length)

#### Parameters

length

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

If length is less than or equal to the current String size, the entire String is returned without space padding.

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### leftPad(length, padStr)

Returns the current String padded with String padStr on the left and of the specified length.

#### Signature

public String leftPad(Integer length, String padStr)

#### Parameters

length

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

padStr

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

String to pad with; if null or empty treated as single blank.

#### Usage

If length is less than or equal to the current String size, the entire String is returned without space padding.

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### length()

Returns the number of 16-bit Unicode characters contained in the String.

#### Signature

public Integer length()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### mid(startIndex, length)

Returns a new String that begins with the character at the specified zero-based startIndex with the number of characters specified by length.

#### Signature

public String mid(Integer startIndex, Integer length)

#### Parameters

startIndex

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

If startIndex is negative, it is considered to be zero.

length

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

If length is negative or zero, an empty String is returned. If length is greater than the remaining characters, the remainder of the String is returned.

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This method is similar to the substring(startIndex) and substring(startIndex, endIndex) methods, except that the second argument is the number of characters to return.

#### Example

```

```

### normalizeSpace()

Returns the current String with leading, trailing, and repeating white space characters removed.

#### Signature

public String normalizeSpace()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This method normalizes the following white space characters: space, tab (\\t), new line ( ), carriage return (\\r), and form feed (\\f).

#### Example

```

```

### offsetByCodePoints(index, codePointOffset)

Returns the index of the Unicode code point that is offset by the specified number of code points, starting from the given index.

#### Signature

public Integer offsetByCodePoints(Integer index, Integer codePointOffset)

#### Parameters

index

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The start index in the string.

codePointOffset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The number of code points to be offset.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The index that corresponds to the start index that is added to the offset.

#### Usage

Unpaired surrogates within the text range that is specified by index and codePointOffset count as one code point each.

#### Example

This example calls offsetByCodePoints on a string with a start index of 0 (to start from the first character) and an offset of three code points. The string contains one sequence of supplementary characters in escaped form (a pair of characters). After an offset of three code points when counting from the beginning of the string, the returned code point index is four.

```

```

### remove(substring)

Removes all occurrences of the specified substring and returns the String result.

#### Signature

public String remove(String substring)

#### Parameters

substring

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### removeEnd(substring)

Removes the specified substring only if it occurs at the end of the String.

#### Signature

public String removeEnd(String substring)

#### Parameters

substring

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### removeEndIgnoreCase(substring)

Removes the specified substring only if it occurs at the end of the String using a case-insensitive match.

#### Signature

public String removeEndIgnoreCase(String substring)

#### Parameters

substring

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### removeStart(substring)

Removes the specified substring only if it occurs at the beginning of the String.

#### Signature

public String removeStart(String substring)

#### Parameters

substring

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### removeStartIgnoreCase(substring)

Removes the specified substring only if it occurs at the beginning of the String using a case-insensitive match.

#### Signature

public String removeStartIgnoreCase(String substring)

#### Parameters

substring

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### repeat(numberOfTimes)

Returns the current String repeated the specified number of times.

#### Signature

public String repeat(Integer numberOfTimes)

#### Parameters

numberOfTimes

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### repeat(separator, numberOfTimes)

Returns the current String repeated the specified number of times using the specified separator to separate the repeated Strings.

#### Signature

public String repeat(String separator, Integer numberOfTimes)

#### Parameters

separator

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

numberOfTimes

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### replace(target, replacement)

Replaces each substring of a string that matches the literal target sequence target with the specified literal replacement sequence replacement.

#### Signature

public String replace(String target, String replacement)

#### Parameters

target

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

replacement

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### replaceAll(regExp, replacement)

Replaces each substring of a string that matches the regular expression regExp with the replacement sequence replacement.

#### Signature

public String replaceAll(String regExp, String replacement)

#### Parameters

regExp

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

replacement

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

See the Java [Pattern](http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html "html (New Window)") class for information on regular expressions.

#### Example

```

```

### replaceFirst(regExp, replacement)

Replaces the first substring of a string that matches the regular expression regExp with the replacement sequence replacement.

#### Signature

public String replaceFirst(String regExp, String replacement)

#### Parameters

regExp

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

replacement

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

See the Java [Pattern](http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html "html (New Window)") class for information on regular expressions.

#### Example

```

```

### reverse()

Returns a String with all the characters reversed.

#### Signature

public String reverse()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

### right(length)

Returns the rightmost characters of the current String of the specified length.

#### Signature

public String right(Integer length)

#### Parameters

length

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

If length is greater than the String size, the entire String is returned.

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### rightPad(length)

Returns the current String padded with spaces on the right and of the specified length.

#### Signature

public String rightPad(Integer length)

#### Parameters

length

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

If length is less than or equal to the current String size, the entire String is returned without space padding.

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### rightPad(length, padStr)

Returns the current String padded with String padStr on the right and of the specified length.

#### Signature

public String rightPad(Integer length, String padStr)

#### Parameters

length

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

padStr

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

String to pad with; if null or empty treated as single blank.

#### Usage

If length is less than or equal to the current String size, the entire String is returned without space padding.

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### split(regExp)

Returns a list that contains each substring of the String that is terminated by either the regular expression regExp or the end of the String.

#### Signature

public String\[\] split(String regExp)

#### Parameters

regExp

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")\[\]

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

In API version 34.0 and earlier, a zero-width regExp value produces an empty list item at the beginning of the method’s output.

#### Usage

See the Java Pattern class for information on regular expressions.

The substrings are placed in the list in the order in which they occur in the String. If regExp does not match any part of the String, the resulting list has just one element containing the original String.

#### Example

In the following example, a string is split using a backslash as a delimiter.

```

```

### split(regExp, limit)

Returns a list that contains each substring of the String that is terminated by either the regular expression regExp or the end of the String.

#### Signature

public String\[\] split(String regExp, Integer limit)

#### Parameters

regExp

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

A regular expression.

limit

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")\[\]

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

In API version 34.0 and earlier, a zero-width regExp value produces an empty list item at the beginning of the method’s output.

#### Usage

The optional limit parameter controls the number of times the pattern is applied and therefore affects the length of the list.

-   If limit is greater than zero:
    -   The pattern is applied a maximum of (limit – 1) times.
    -   The list’s length is no greater than limit.
    -   The list’s last entry contains all input beyond the last matched delimiter.
-   If limit is non-positive, the pattern is applied as many times as possible, and the list can have any length.
-   If limit is zero, the pattern is applied as many times as possible, the list can have any length, and trailing empty strings are discarded.

#### Example

For example, for String s = 'boo:and:moo':

-   s.split(':', 2) results in {'boo', 'and:moo'}
-   s.split(':', 5) results in {'boo', 'and', 'moo'}
-   s.split(':', -2) results in {'boo', 'and', 'moo'}
-   s.split('o', 5) results in {'b', '', ':and:m', '', ''}
-   s.split('o', -2) results in {'b', '', ':and:m', '', ''}
-   s.split('o', 0) results in {'b', '', ':and:m'}

### splitByCharacterType()

Splits the current String by character type and returns a list of contiguous character groups of the same type as complete tokens.

#### Signature

public List<String\> splitByCharacterType()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](#apex_methods_system_string "Contains methods for the String primitive data type.")\>

#### Usage

For more information about the character types used, see [java.lang.Character.getType(char)](http://docs.oracle.com/javase/7/docs/api/java/lang/Character.html#getType%28char%29 "HTML (New Window)").

#### Example

```

```

### splitByCharacterTypeCamelCase()

Splits the current String by character type and returns a list of contiguous character groups of the same type as complete tokens, with the following exception: the uppercase character, if any, immediately preceding a lowercase character token belongs to the following character token rather than to the preceding.

#### Signature

public List<String\> splitByCharacterTypeCamelCase()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](#apex_methods_system_string "Contains methods for the String primitive data type.")\>

#### Usage

For more information about the character types used, see [java.lang.Character.getType(char)](http://docs.oracle.com/javase/7/docs/api/java/lang/Character.html#getType%28char%29 "HTML (New Window)").

#### Example

```

```

### startsWith(prefix)

Returns true if the String that called the method begins with the specified prefix.

#### Signature

public Boolean startsWith(String prefix)

#### Parameters

prefix

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### startsWithIgnoreCase(prefix)

Returns true if the current String begins with the specified prefix regardless of the prefix case.

#### Signature

public Boolean startsWithIgnoreCase(String prefix)

#### Parameters

prefix

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### stripHtmlTags()

Removes HTML markup and returns plain text.

#### Signature

public String stripHtmlTags()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexref)

#### Warning

The stripHtmlTags function doesn’t recursively strip tags; therefore, tags can still exist in the returned string. Don’t use the stripHtmlTags function to sanitize input for inclusion as a raw HTML page. The unescaped output isn’t considered safe to include in an HTML document. The function will be deprecated in a future release.

#### Example

```

```

### substring(startIndex)

Returns a new String that begins with the character at the specified zero-based startIndex and extends to the end of the String.

#### Signature

public String substring(Integer startIndex)

#### Parameters

startIndex

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### substring(startIndex, endIndex)

Returns a new String that begins with the character at the specified zero-based startIndex and extends to the character at endIndex - 1.

#### Signature

public String substring(Integer startIndex, Integer endIndex)

#### Parameters

startIndex

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

endIndex

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### substringAfter(separator)

Returns the substring that occurs after the first occurrence of the specified separator.

#### Signature

public String substringAfter(String separator)

#### Parameters

separator

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### substringAfterLast(separator)

Returns the substring that occurs after the last occurrence of the specified separator.

#### Signature

public String substringAfterLast(String separator)

#### Parameters

separator

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### substringBefore(separator)

Returns the substring that occurs before the first occurrence of the specified separator.

#### Signature

public String substringBefore(String separator)

#### Parameters

separator

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### substringBeforeLast(separator)

Returns the substring that occurs before the last occurrence of the specified separator.

#### Signature

public String substringBeforeLast(String separator)

#### Parameters

separator

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### substringBetween(tag)

Returns the substring that occurs between two instances of the specified tag String.

#### Signature

public String substringBetween(String tag)

#### Parameters

tag

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### substringBetween(open, close)

Returns the substring that occurs between the two specified Strings.

#### Signature

public String substringBetween(String open, String close)

#### Parameters

open

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

close

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### swapCase()

Swaps the case of all characters and returns the resulting String by using the default (English US) locale.

#### Signature

public String swapCase()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Upper case and title case converts to lower case, and lower case converts to upper case.

#### Example

```

```

### toLowerCase()

Converts all of the characters in the String to lowercase using the rules of the default (English US) locale.

#### Signature

public String toLowerCase()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### toLowerCase(locale)

Converts all of the characters in the String to lowercase using the rules of the specified locale.

#### Signature

public String toLowerCase(String locale)

#### Parameters

locale

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### toUpperCase()

Converts all of the characters in the String to uppercase using the rules of the default (English US) locale.

#### Signature

public String toUpperCase()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### toUpperCase(locale)

Converts all of the characters in the String to the uppercase using the rules of the specified locale.

#### Signature

public String toUpperCase(String locale)

#### Parameters

locale

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### trim()

Returns a copy of the string that no longer contains any leading or trailing white space characters.

#### Signature

public String trim()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Leading and trailing ASCII control characters such as tabs and newline characters are also removed. White space and control characters that aren’t at the beginning or end of the sentence aren’t removed.

#### Example

```

```

### uncapitalize()

Returns the current String with the first letter in lowercase.

#### Signature

public String uncapitalize()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### unescapeCsv()

Returns a String representing an unescaped CSV column.

#### Signature

public String unescapeCsv()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

If the String is enclosed in double quotes and contains a comma, newline or double quote, quotes are removed. Also, any double quote escaped characters (a pair of double quotes) are unescaped to just one double quote.

If the String is not enclosed in double quotes, or is and does not contain a comma, newline or double quote, it is returned unchanged.

#### Example

```

```

### unescapeEcmaScript()

Unescapes any EcmaScript literals found in the String.

#### Signature

public String unescapeEcmaScript()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### unescapeHtml3()

Unescapes the characters in a String using HTML 3.0 entities.

#### Signature

public String unescapeHtml3()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### unescapeHtml4()

Unescapes the characters in a String using HTML 4.0 entities.

#### Signature

public String unescapeHtml4()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

If an entity isn’t recognized, it is kept as is in the returned string.

#### Example

```

```

### unescapeJava()

Returns a String whose Java literals are unescaped. Literals unescaped include escape sequences for quotes (\\") and control characters, such as tab (\\\\t), and carriage return (\\ ).

#### Signature

public String unescapeJava()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

The unescaped string.

#### Example

```

```

### unescapeUnicode()

Returns a String whose escaped Unicode characters are unescaped.

#### Signature

public String unescapeUnicode()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

The unescaped string.

#### Example

```

```

### unescapeXml()

Unescapes the characters in a String using XML entities.

#### Signature

public String unescapeXml()

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Supports only the five basic XML entities (gt, lt, quot, amp, apos). Does not support DTDs or external entities.

#### Example

```

```

### valueOf(dateToConvert)

Returns a String that represents the specified Date in the standard “yyyy-MM-dd” format.

#### Signature

public static String valueOf(Date dateToConvert)

#### Parameters

dateToConvert

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### valueOf(datetimeToConvert)

Returns a String that represents the specified Datetime in the standard “yyyy-MM-dd HH:mm:ss” format for the local time zone.

#### Signature

public static String valueOf(Datetime datetimeToConvert)

#### Parameters

datetimeToConvert

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### valueOf(decimalToConvert)

Returns a String that represents the specified Decimal.

#### Signature

public static String valueOf(Decimal decimalToConvert)

#### Parameters

decimalToConvert

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### valueOf(doubleToConvert)

Returns a String that represents the specified Double.

#### Signature

public static String valueOf(Double doubleToConvert)

#### Parameters

doubleToConvert

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### valueOf(integerToConvert)

Returns a String that represents the specified Integer.

#### Signature

public static String valueOf(Integer integerToConvert)

#### Parameters

integerToConvert

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### valueOf(longToConvert)

Returns a String that represents the specified Long.

#### Signature

public static String valueOf(Long longToConvert)

#### Parameters

longToConvert

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### valueOf(toConvert)

Returns a string representation of the specified object argument.

#### Signature

public static String valueOf(Object toConvert)

#### Parameters

toConvert

Type: Object

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

If the argument is not a String, the valueOf method converts it into a String by calling the toString method on the argument, if available, or any overridden toString method if the argument is a user-defined type. Otherwise, if no toString method is available, it returns a String representation of the argument.

#### Example

```

```

### valueOfGmt(datetimeToConvert)

Returns a String that represents the specified Datetime in the standard “yyyy-MM-dd HH:mm:ss” format for the GMT time zone.

#### Signature

public static String valueOfGmt(Datetime datetimeToConvert)

#### Parameters

datetimeToConvert

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

## Code Examples

```apex
String s = 'Hello Maximillian';
String s2 = s.abbreviate(8);
System.assertEquals('Hello...', s2);
System.assertEquals(8, s2.length());
```

```apex
String s = 'Hello Maximillian';
// Start at M
String s2 = s.abbreviate(9,6);
System.assertEquals('...Max...', s2);
System.assertEquals(9, s2.length());
```

```apex
String s = 'hello maximillian';
String s2 = s.capitalize();
System.assertEquals('Hello maximillian', s2);
```

```apex
String s = 'hello';
String s2 = s.center(9);
System.assertEquals(
   '  hello  ',
   s2);
```

```apex
String s = 'hello';
String s2 = s.center(9, '-');
System.assertEquals('--hello--', s2);
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- abbreviate(maxWidth) (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- abbreviate(maxWidth, offset) (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- capitalize() (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- center(size) (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- center(size, paddingString) (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- charAt(index) (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- codePointAt(index) (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- codePointBefore(index) (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- codePointCount(beginIndex, endIndex) (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
