---
title: "XmlStreamWriter Class"
domain: apex-reference
topic: xmlstreamwriter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.921Z
estimatedTokens: 3231
namespace: System
keywords: [XmlStreamWriter, provides, writing, XML, data., Usage, Note, close, getXmlString, setDefaultNamespace, uri, writeAttribute, prefix, namespaceUri, localName, writeCData, data, writeCharacters, text, writeComment]
---

# XmlStreamWriter Class

> The XmlStreamWriter class provides methods
        for writing XML data.

**Namespace:** `System`

# XmlStreamWriter Class

The XmlStreamWriter class provides methods for writing XML data.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

You can use the XmlStreamWriter class to programmatically construct an XML document, then use HTTP classes to send the document to an external server.

The XmlStreamWriter class is similar to the XMLStreamWriter utility class from StAX (Streaming API for XML). StAX is an API to read and write XML documents, originating from the Java programming language community.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The XmlStreamWriter class in Apex is based on its counterpart in Java. See [Java XMLStreamWriter class](http://docs.oracle.com/javase/6/docs/api/javax/xml/stream/XMLStreamWriter.html "html (New Window)").

-   **[XmlStreamWriter Constructors](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_constructors)**

-   **[XmlStreamWriter Methods](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_methods)**


#### See Also

-   [Http Class](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_http.htm#apex_classes_restful_http_http "Use the Http class to initiate an HTTP request and response.")

-   [HttpRequest Class](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_classes_restful_http_httprequest "Use the HttpRequest class to programmatically create HTTP requests like GET, POST, PATCH, PUT, and DELETE.")

-   [HttpResponse Class](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_classes_restful_http_httpresponse "Use the HttpResponse class to handle the HTTP response returned by the Http class.")


## XmlStreamWriter Constructors

The following are constructors for XmlStreamWriter.

-   **[XmlStreamWriter()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_ctor)**
    Creates a new instance of the XmlStreamWriter class.

### XmlStreamWriter()

Creates a new instance of the XmlStreamWriter class.

#### Signature

public XmlStreamWriter()

## XmlStreamWriter Methods

The following are methods for XmlStreamWriter. All are instance methods.

-   **[close()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_close)**
    Closes this instance of an XmlStreamWriter and free any resources associated with it.
-   **[getXmlString()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_getXmlString)**
    Returns the XML written by the XmlStreamWriter instance.
-   **[setDefaultNamespace(uri)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_setDefaultNamespace)**
    Binds the specified URI to the default namespace. This URI is bound in the scope of the current START\_ELEMENT – END\_ELEMENT pair.
-   **[writeAttribute(prefix, namespaceUri, localName, value)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeAttribute)**
    Writes an attribute to the output stream.
-   **[writeCData(data)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeCData)**
    Writes the specified CData to the output stream.
-   **[writeCharacters(text)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeCharacters)**
    Writes the specified text to the output stream.
-   **[writeComment(comment)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeComment)**
    Writes the specified comment to the output stream.
-   **[writeDefaultNamespace(namespaceUri)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeDefaultNamespace)**
    Writes the specified namespace to the output stream.
-   **[writeEmptyElement(prefix, localName, namespaceUri)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeEmptyElement)**
    Writes an empty element tag to the output stream.
-   **[writeEndDocument()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeEndDocument)**
    Closes any start tags and writes corresponding end tags to the output stream.
-   **[writeEndElement()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeEndElement)**
    Writes an end tag to the output stream, relying on the internal state of the writer to determine the prefix and local name.
-   **[writeNamespace(prefix, namespaceUri)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeNamespace)**
    Writes the specified namespace to the output stream.
-   **[writeProcessingInstruction(target, data)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeProcessingInstruction)**
    Writes the specified processing instruction.
-   **[writeStartDocument(encoding, version)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeStartDocument)**
    Writes the XML Declaration using the specified XML encoding and version.
-   **[writeStartElement(prefix, localName, namespaceUri)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeStartElement)**
    Writes the start tag specified by localName to the output stream.

### close()

Closes this instance of an XmlStreamWriter and free any resources associated with it.

#### Signature

public Void close()

#### Return Value

Type: Void

### getXmlString()

Returns the XML written by the XmlStreamWriter instance.

#### Signature

public String getXmlString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### setDefaultNamespace(uri)

Binds the specified URI to the default namespace. This URI is bound in the scope of the current START\_ELEMENT – END\_ELEMENT pair.

#### Signature

public Void setDefaultNamespace(String uri)

#### Parameters

uri

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### writeAttribute(prefix, namespaceUri, localName, value)

Writes an attribute to the output stream.

#### Signature

public Void writeAttribute(String prefix, String namespaceUri, String localName, String value)

#### Parameters

prefix

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

namespaceUri

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

localName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the name of the attribute.

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### writeCData(data)

Writes the specified CData to the output stream.

#### Signature

public Void writeCData(String data)

#### Parameters

data

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### writeCharacters(text)

Writes the specified text to the output stream.

#### Signature

public Void writeCharacters(String text)

#### Parameters

text

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### writeComment(comment)

Writes the specified comment to the output stream.

#### Signature

public Void writeComment(String comment)

#### Parameters

comment

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### writeDefaultNamespace(namespaceUri)

Writes the specified namespace to the output stream.

#### Signature

public Void writeDefaultNamespace(String namespaceUri)

#### Parameters

namespaceUri

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### writeEmptyElement(prefix, localName, namespaceUri)

Writes an empty element tag to the output stream.

#### Signature

public Void writeEmptyElement(String prefix, String localName, String namespaceUri)

#### Parameters

prefix

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

localName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the name of the tag to be written.

namespaceUri

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### writeEndDocument()

Closes any start tags and writes corresponding end tags to the output stream.

#### Signature

public Void writeEndDocument()

#### Return Value

Type: Void

### writeEndElement()

Writes an end tag to the output stream, relying on the internal state of the writer to determine the prefix and local name.

#### Signature

public Void writeEndElement()

#### Return Value

Type: Void

### writeNamespace(prefix, namespaceUri)

Writes the specified namespace to the output stream.

#### Signature

public Void writeNamespace(String prefix, String namespaceUri)

#### Parameters

prefix

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

namespaceUri

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### writeProcessingInstruction(target, data)

Writes the specified processing instruction.

#### Signature

public Void writeProcessingInstruction(String target, String data)

#### Parameters

target

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

data

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### writeStartDocument(encoding, version)

Writes the XML Declaration using the specified XML encoding and version.

#### Signature

public Void writeStartDocument(String encoding, String version)

#### Parameters

encoding

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

version

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### writeStartElement(prefix, localName, namespaceUri)

Writes the start tag specified by localName to the output stream.

#### Signature

public Void writeStartElement(String prefix, String localName, String namespaceUri)

#### Parameters

prefix

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

localName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

namespaceUri

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- XmlStreamWriter Constructors (atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm)
- XmlStreamWriter Methods (atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm)
- Http Class (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_http.htm)
- HttpRequest Class (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm)
- HttpResponse Class (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm)
- XmlStreamWriter() (atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm)
- close() (atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm)
- getXmlString() (atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm)
- setDefaultNamespace(uri) (atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm)
