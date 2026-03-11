---
title: "EncodingUtil Methods"
domain: apex-reference
topic: encodingutil-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.449Z
keywords: [EncodingUtil, Methods, Converts, Base64-encoded, String, Blob, representing, its, normal, form., base64Decode, inputString, Signature, Parameters, Return, Value, base64Encode, inputBlob, convertFromHex, Usage]
---

# EncodingUtil Methods

> Converts a Base64-encoded String to a Blob representing
its normal form.

## EncodingUtil Methods

The following are methods for EncodingUtil. All methods are static.

-   **[base64Decode(inputString)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_encodingUtil.htm#apex_System_EncodingUtil_base64Decode)**  
    Converts a Base64-encoded String to a Blob representing its normal form.
-   **[base64Encode(inputBlob)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_encodingUtil.htm#apex_System_EncodingUtil_base64Encode)**  
    Converts a Blob to an unencoded String representing its normal form.
-   **[convertFromHex(inputString)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_encodingUtil.htm#apex_System_EncodingUtil_convertFromHex)**  
    Converts the specified hexadecimal (base 16) string to a Blob value and returns this Blob value.
-   **[convertToHex(inputBlob)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_encodingUtil.htm#apex_System_EncodingUtil_convertToHex)**  
    Returns a hexadecimal (base 16) representation of the inputBlob. This method can be used to compute the client response (for example, HA1 or HA2) for HTTP Digest Authentication (RFC2617).
-   **[urlDecode(inputString, encodingScheme)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_encodingUtil.htm#apex_System_EncodingUtil_urlDecode)**  
    Decodes a string in application/x-www-form-urlencoded format using a specific encoding scheme, for example “UTF-8.”
-   **[urlEncode(inputString, encodingScheme)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_encodingUtil.htm#apex_System_EncodingUtil_urlEncode)**  
    Encodes a string into the application/x-www-form-urlencoded format using a specific encoding scheme, for example “UTF-8.”

### base64Decode(inputString)

Converts a Base64-encoded String to a Blob representing its normal form.

#### Signature

public static Blob base64Decode(String inputString)

#### Parameters

inputString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

### base64Encode(inputBlob)

Converts a Blob to an unencoded String representing its normal form.

#### Signature

public static String base64Encode(Blob inputBlob)

#### Parameters

inputBlob

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### convertFromHex(inputString)

Converts the specified hexadecimal (base 16) string to a Blob value and returns this Blob value.

#### Signature

public static Blob convertFromHex(String inputString)

#### Parameters

inputString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The hexadecimal string to convert. The string can contain only valid hexadecimal characters (0-9, a-f, A-F) and must have an even number of characters.

#### Return Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

#### Usage

Each byte in the Blob is constructed from two hexadecimal characters in the input string.

The convertFromHex method throws the following exceptions.

-   NullPointerException — the inputString is null.
-   InvalidParameterValueException — the inputString contains invalid hexadecimal characters or doesn’t contain an even number of characters.

#### Example

```

```

### convertToHex(inputBlob)

Returns a hexadecimal (base 16) representation of the inputBlob. This method can be used to compute the client response (for example, HA1 or HA2) for HTTP Digest Authentication (RFC2617).

#### Signature

public static String convertToHex(Blob inputBlob)

#### Parameters

inputBlob

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### urlDecode(inputString, encodingScheme)

Decodes a string in application/x-www-form-urlencoded format using a specific encoding scheme, for example “UTF-8.”

#### Signature

public static String urlDecode(String inputString, String encodingScheme)

#### Parameters

inputString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

encodingScheme

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This method uses the supplied encoding scheme to determine which characters are represented by any consecutive sequence of the form \\"%xy". For more information about the format, see [The form-urlencoded Media Type](http://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2.1) in Hypertext Markup Language - 2.0.

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