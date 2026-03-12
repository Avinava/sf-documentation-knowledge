---
title: "Blob Class"
domain: apex-reference
topic: blob-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.267Z
estimatedTokens: 878
namespace: System
keywords: [Blob, primitive, data, Usage, size, toPdf, stringToConvert, toString, valueOf, stringToBlob]
---

# Blob Class

> Contains methods for the Blob primitive data type.

**Namespace:** `System`

# Blob Class

Contains methods for the Blob primitive data type.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Salesforce supports Blob manipulation only with Apex class methods that are supplied by Salesforce. For more information on Blobs, see [Primitive Data Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_primitives.htm).

## Blob Methods

The following are methods for Blob.

-   **[size()](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_System_Blob_size)**
    Returns the number of bytes in the Blob.
-   **[toPdf(stringToConvert)](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_System_Blob_toPdf)**
    Creates a binary object out of the given string, encoding it as a PDF file.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_System_Blob_toString)**
    Casts the Blob into a String.
-   **[valueOf(stringToBlob)](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_System_Blob_valueOf)**
    Casts the specified String to a Blob.

### size()

Returns the number of bytes in the Blob.

#### Signature

public Integer size()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### toPdf(stringToConvert)

Creates a binary object out of the given string, encoding it as a PDF file.

#### Signature

public static Blob toPdf(String stringToConvert)

#### Parameters

stringToConvert

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Blob](#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

#### Usage

Blob.toPDF(stringToConvert) works with any string value. Since the Spring ’26 release, Blob.toPDF() uses the same PDF rendering service as Visualforce. See [Render a Visualforce Page as a PDF File](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_output_pdf_renderas.htm "html (New Window)") for details, including considerations and limitations for rendering PDF files.

The Visualforce PDF rendering service expands the range of fonts available, and includes a multibyte-capable font. The default font is sans-serif. See [Fonts Available When Using Visualforce PDF Rendering](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_output_pdf_supported_fonts.htm).

#### Example

```

```

### toString()

Casts the Blob into a String.

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### valueOf(stringToBlob)

Casts the specified String to a Blob.

#### Signature

public static Blob valueOf(String stringToBlob)

#### Parameters

stringToBlob

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Blob](#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

#### Example

```

```

## Code Examples

```
String myString = 'StringToBlob';
Blob myBlob = Blob.valueof(myString);
Integer size = myBlob.size();
```

```
String pdfContent = 'This is a test string';
Account a = new account(name = 'test');
insert a;
Attachment attachmentPDF = new Attachment();
attachmentPdf.parentId = a.id;
attachmentPdf.name = a.name + '.pdf';
attachmentPdf.body = Blob.toPDF(pdfContent);
insert attachmentPDF;
```

```apex
String myString = 'StringToBlob';
Blob myBlob = Blob.valueof(myString);
System.assertEquals('StringToBlob', myBlob.toString());
```

```
String myString = 'StringToBlob';
Blob myBlob = Blob.valueof(myString);
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- size() (atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm)
- toPdf(stringToConvert) (atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm)
- toString() (atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm)
- valueOf(stringToBlob) (atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
