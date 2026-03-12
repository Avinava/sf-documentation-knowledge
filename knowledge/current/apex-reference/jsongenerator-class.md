---
title: "JSONGenerator Class"
domain: apex-reference
topic: jsongenerator-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.671Z
estimatedTokens: 5411
namespace: System
keywords: [JSONGenerator, serialize, objects, JSON, content, standard, encoding, Usage, close, getAsString, isClosed, writeBlob, blobValue, writeBlobField, fieldName]
---

# JSONGenerator Class

> Contains methods used to
serialize objects into JSON content using the standard JSON encoding.

**Namespace:** `System`

# JSONGenerator Class

Contains methods used to serialize objects into JSON content using the standard JSON encoding.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

The System.JSONGenerator class is provided to enable the generation of standard JSON-encoded content and gives you more control on the structure of the JSON output.

#### See Also

-   [*Apex Developer Guide*: JSON Generator](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_json_jsongenerator.htm "Apex Developer Guide: JSON Generator - HTML (New Window)")


## JSONGenerator Methods

The following are methods for JSONGenerator. All are instance methods.

-   **[close()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_close)**
    Closes the JSON generator.
-   **[getAsString()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_getAsString)**
    Returns the generated JSON content.
-   **[isClosed()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_isClosed)**
    Returns true if the JSON generator is closed; otherwise, returns false.
-   **[writeBlob(blobValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeBlob)**
    Writes the specified Blob value as a base64-encoded string.
-   **[writeBlobField(fieldName, blobValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeBlobField)**
    Writes a field name and value pair using the specified field name and BLOB value.
-   **[writeBoolean(blobValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeBoolean)**
    Writes the specified Boolean value.
-   **[writeBooleanField(fieldName, booleanValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeBooleanField)**
    Writes a field name and value pair using the specified field name and Boolean value.
-   **[writeDate(dateValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeDate)**
    Writes the specified date value in the ISO-8601 format.
-   **[writeDateField(fieldName, dateValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeDateField)**
    Writes a field name and value pair using the specified field name and date value. The date value is written in the ISO-8601 format.
-   **[writeDateTime(datetimeValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeDateTime)**
    Writes the specified date and time value in the ISO-8601 format.
-   **[writeDateTimeField(fieldName, datetimeValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeDateTimeField)**
    Writes a field name and value pair using the specified field name and date and time value. The date and time value is written in the ISO-8601 format.
-   **[writeEndArray()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeEndArray)**
    Writes the ending marker of a JSON array ('\]').
-   **[writeEndObject()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeEndObject)**
    Writes the ending marker of a JSON object ('}').
-   **[writeFieldName(fieldName)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeFieldName)**
    Writes a field name.
-   **[writeId(identifier)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeId)**
    Writes the specified ID value.
-   **[writeIdField(fieldName, identifier)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeIdField)**
    Writes a field name and value pair using the specified field name and identifier value.
-   **[writeNull()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNull)**
    Writes the JSON null literal value.
-   **[writeNullField(fieldName)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNullField)**
    Writes a field name and value pair using the specified field name and the JSON null literal value.
-   **[writeNumber(number)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNumber)**
    Writes the specified decimal value.
-   **[writeNumber(number)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNumber_2)**
    Writes the specified double value.
-   **[writeNumber(number)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNumber_3)**
    Writes the specified integer value.
-   **[writeNumber(number)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNumber_4)**
    Writes the specified long value.
-   **[writeNumberField(fieldName, number)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNumberField)**
    Writes a field name and value pair using the specified field name and decimal value.
-   **[writeNumberField(fieldName, number)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNumberField_2)**
    Writes a field name and value pair using the specified field name and double value.
-   **[writeNumberField(fieldName, number)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNumberField_3)**
    Writes a field name and value pair using the specified field name and integer value.
-   **[writeNumberField(fieldName, number)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeNumberField_4)**
    Writes a field name and value pair using the specified field name and long value.
-   **[writeObject(anyObject)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeObject)**
    Writes the specified Apex object in JSON format.
-   **[writeObjectField(fieldName, value)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeObjectField)**
    Writes a field name and value pair using the specified field name and Apex object.
-   **[writeStartArray()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeStartArray)**
    Writes the starting marker of a JSON array ('\[').
-   **[writeStartObject()](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeStartObject)**
    Writes the starting marker of a JSON object ('{').
-   **[writeString(stringValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeString)**
    Writes the specified string value.
-   **[writeStringField(fieldName, stringValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeStringField)**
    Writes a field name and value pair using the specified field name and string value.
-   **[writeTime(timeValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeTime)**
    Writes the specified time value in the ISO-8601 format.
-   **[writeTimeField(fieldName, timeValue)](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_System_JsonGenerator_writeTimeField)**
    Writes a field name and value pair using the specified field name and time value in the ISO-8601 format.

### close()

Closes the JSON generator.

#### Signature

public Void close()

#### Return Value

Type: Void

#### Usage

No more content can be written after the JSON generator is closed.

### getAsString()

Returns the generated JSON content.

#### Signature

public String getAsString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This method closes the JSON generator if it isn't closed already.

### isClosed()

Returns true if the JSON generator is closed; otherwise, returns false.

#### Signature

public Boolean isClosed()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### writeBlob(blobValue)

Writes the specified Blob value as a base64-encoded string.

#### Signature

public Void writeBlob(Blob blobValue)

#### Parameters

blobValue

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

#### Return Value

Type: Void

### writeBlobField(fieldName, blobValue)

Writes a field name and value pair using the specified field name and BLOB value.

#### Signature

public Void writeBlobField(String fieldName, Blob blobValue)

#### Parameters

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

blobValue

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

#### Return Value

Type: Void

### writeBoolean(blobValue)

Writes the specified Boolean value.

#### Signature

public Void writeBoolean(Boolean blobValue)

#### Parameters

blobValue

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: Void

### writeBooleanField(fieldName, booleanValue)

Writes a field name and value pair using the specified field name and Boolean value.

#### Signature

public Void writeBooleanField(String fieldName, Boolean booleanValue)

#### Parameters

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

booleanValue

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: Void

### writeDate(dateValue)

Writes the specified date value in the ISO-8601 format.

#### Signature

public Void writeDate(Date dateValue)

#### Parameters

dateValue

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

#### Return Value

Type: Void

### writeDateField(fieldName, dateValue)

Writes a field name and value pair using the specified field name and date value. The date value is written in the ISO-8601 format.

#### Signature

public Void writeDateField(String fieldName, Date dateValue)

#### Parameters

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

dateValue

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

#### Return Value

Type: Void

### writeDateTime(datetimeValue)

Writes the specified date and time value in the ISO-8601 format.

#### Signature

public Void writeDateTime(Datetime datetimeValue)

#### Parameters

datetimeValue

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Return Value

Type: Void

### writeDateTimeField(fieldName, datetimeValue)

Writes a field name and value pair using the specified field name and date and time value. The date and time value is written in the ISO-8601 format.

#### Signature

public Void writeDateTimeField(String fieldName, Datetime datetimeValue)

#### Parameters

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

datetimeValue

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Return Value

Type: Void

### writeEndArray()

Writes the ending marker of a JSON array ('\]').

#### Signature

public Void writeEndArray()

#### Return Value

Type: Void

### writeEndObject()

Writes the ending marker of a JSON object ('}').

#### Signature

public Void writeEndObject()

#### Return Value

Type: Void

### writeFieldName(fieldName)

Writes a field name.

#### Signature

public Void writeFieldName(String fieldName)

#### Parameters

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### writeId(identifier)

Writes the specified ID value.

#### Signature

public Void writeId(ID identifier)

#### Parameters

identifier

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: Void

### writeIdField(fieldName, identifier)

Writes a field name and value pair using the specified field name and identifier value.

#### Signature

public Void writeIdField(String fieldName, Id identifier)

#### Parameters

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

identifier

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: Void

### writeNull()

Writes the JSON null literal value.

#### Signature

public Void writeNull()

#### Return Value

Type: Void

### writeNullField(fieldName)

Writes a field name and value pair using the specified field name and the JSON null literal value.

#### Signature

public Void writeNullField(String fieldName)

#### Parameters

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### writeNumber(number)

Writes the specified decimal value.

#### Signature

public Void writeNumber(Decimal number)

#### Parameters

number

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: Void

### writeNumber(number)

Writes the specified double value.

#### Signature

public Void writeNumber(Double number)

#### Parameters

number

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: Void

### writeNumber(number)

Writes the specified integer value.

#### Signature

public Void writeNumber(Integer number)

#### Parameters

number

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: Void

### writeNumber(number)

Writes the specified long value.

#### Signature

public Void writeNumber(Long number)

#### Parameters

number

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Return Value

Type: Void

### writeNumberField(fieldName, number)

Writes a field name and value pair using the specified field name and decimal value.

#### Signature

public Void writeNumberField(String fieldName, Decimal number)

#### Parameters

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

number

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: Void

### writeNumberField(fieldName, number)

Writes a field name and value pair using the specified field name and double value.

#### Signature

public Void writeNumberField(String fieldName, Double number)

#### Parameters

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

number

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: Void

### writeNumberField(fieldName, number)

Writes a field name and value pair using the specified field name and integer value.

#### Signature

public Void writeNumberField(String fieldName, Integer number)

#### Parameters

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

number

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: Void

### writeNumberField(fieldName, number)

Writes a field name and value pair using the specified field name and long value.

#### Signature

public Void writeNumberField(String fieldName, Long number)

#### Parameters

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

number

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Return Value

Type: Void

### writeObject(anyObject)

Writes the specified Apex object in JSON format.

#### Signature

public Void writeObject(Object anyObject)

#### Parameters

anyObject

Type: Object

#### Return Value

Type: Void

### writeObjectField(fieldName, value)

Writes a field name and value pair using the specified field name and Apex object.

#### Signature

public Void writeObjectField(String fieldName, Object value)

#### Parameters

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

value

Type: Object

#### Return Value

Type: Void

### writeStartArray()

Writes the starting marker of a JSON array ('\[').

#### Signature

public Void writeStartArray()

#### Return Value

Type: Void

### writeStartObject()

Writes the starting marker of a JSON object ('{').

#### Signature

public Void writeStartObject()

#### Return Value

Type: Void

### writeString(stringValue)

Writes the specified string value.

#### Signature

public Void writeString(String stringValue)

#### Parameters

stringValue

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### writeStringField(fieldName, stringValue)

Writes a field name and value pair using the specified field name and string value.

#### Signature

public Void writeStringField(String fieldName, String stringValue)

#### Parameters

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

stringValue

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### writeTime(timeValue)

Writes the specified time value in the ISO-8601 format.

#### Signature

public Void writeTime(Time timeValue)

#### Parameters

timeValue

Type: [Time](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Return Value

Type: Void

### writeTimeField(fieldName, timeValue)

Writes a field name and value pair using the specified field name and time value in the ISO-8601 format.

#### Signature

public Void writeTimeField(String fieldName, Time timeValue)

#### Parameters

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

timeValue

Type: [Time](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Return Value

Type: Void

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- close() (atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm)
- getAsString() (atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm)
- isClosed() (atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm)
- writeBlob(blobValue) (atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm)
- writeBlobField(fieldName, blobValue) (atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm)
- writeBoolean(blobValue) (atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm)
- writeBooleanField(fieldName, booleanValue) (atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm)
- writeDate(dateValue) (atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm)
- writeDateField(fieldName, dateValue) (atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm)
