---
title: "EncodingUtil Class"
domain: apex-reference
topic: encodingutil-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.449Z
keywords: [EncodingUtil, Class, Encodes, string, application, x-www-form-urlencoded, format, specific, encoding, scheme, example, “UTF-8.”, urlEncode, inputString, encodingScheme, Signature, Parameters, Return, Value, Usage]
---

# EncodingUtil Class

> Encodes a string into the application/x-www-form-urlencoded format using a specific
encoding scheme, for example “UTF-8.”

### urlEncode(inputString, encodingScheme)

Encodes a string into the application/x-www-form-urlencoded format using a specific encoding scheme, for example “UTF-8.”

#### Signature

public static String urlEncode(String inputString, String encodingScheme)

#### Parameters

inputString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

encodingScheme

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

The rules that apply when the method encodes a string:

-   These characters remain the same:
    -   Alphanumeric characters A - Z, a - z, and 0 -9.
    -   Special characters dot (.), hyphen (-), asterisk (\*), and under score (\_).
-   The space character is converted to a plus sign (+).
-   All other characters are unsafe. This method uses the supplied encoding scheme to obtain the bytes for unsafe characters. For more information about the format, see [The form-urlencoded Media Type](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2.1) in Hypertext Markup Language - 2.0.

#### Example

```

```