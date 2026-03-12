---
title: "XmlStreamReader Class Class"
domain: apex-reference
topic: xmlstreamreader-class-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.903Z
estimatedTokens: 6479
namespace: NAMESPACE
keywords: [XmlStreamReader, provides, forward, read-only, access, XML, data., pull, data, skip, unwanted, events., parse, nested, content, that’s, nodes, deep., Usage, Note]
---

# XmlStreamReader Class Class

> The XmlStreamReader class provides methods for
    forward, read-only access to XML data. You can pull data from XML or skip unwanted events. You
    can parse nested XML content that’s up to 50 nodes deep.

**Namespace:** `NAMESPACE`

# XmlStreamReader Class Class

The XmlStreamReader class provides methods for forward, read-only access to XML data. You can pull data from XML or skip unwanted events. You can parse nested XML content that’s up to 50 nodes deep.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

The XmlStreamReader class is similar to the XMLStreamReader utility class from StAX (Streaming API for XML). StAX is an API to read and write XML documents, originating from the Java programming language community.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The XmlStreamReader class in Apex is based on its counterpart in Java. See [Java XMLStreamReader class](http://download.oracle.com/javase/6/docs/api/javax/xml/stream/XMLStreamReader.html "html (New Window)").

-   **[XmlStreamReader Constructors](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_constructors)**

-   **[XmlStreamReader Methods](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_methods)**


#### See Also

-   [*Apex Developer Guide*: Reading XML Using Streams](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_xml_streaming_reading.htm "Apex Developer Guide: Reading XML Using Streams - HTML (New Window)")


## XmlStreamReader Constructors

The following are constructors for XmlStreamReader.

-   **[XmlStreamReader(xmlInput)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_ctor)**
    Creates a new instance of the XmlStreamReader class for the specified XML input.

### XmlStreamReader(xmlInput)

Creates a new instance of the XmlStreamReader class for the specified XML input.

#### Signature

public XmlStreamReader(String xmlInput)

#### Parameters

xmlInput

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The XML string input.

## XmlStreamReader Methods

The following are methods for XmlStreamReader. All are instance methods.

-   **[getAttributeCount()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getAttributeCount)**
    Returns the number of attributes on the start element, excluding namespace definitions.
-   **[getAttributeLocalName(index)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getAttributeLocalName)**
    Returns the local name of the attribute at the specified index.
-   **[getAttributeNamespace(index)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getAttributeNamespace)**
    Returns the namespace URI of the attribute at the specified index.
-   **[getAttributePrefix(index)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getAttributePrefix)**
    Returns the prefix of this attribute at the specified index.
-   **[getAttributeType(index)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getAttributeType)**
    Returns the XML type of the attribute at the specified index.
-   **[getAttributeValue(namespaceUri, localName)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getAttributeValue)**
    Returns the value of the attribute in the specified localName at the specified URI.
-   **[getAttributeValueAt(index)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getAttributeValueAt)**
    Returns the value of the attribute at the specified index.
-   **[getEventType()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getEventType)**
    Returns the type of XML event the cursor is pointing to.
-   **[getLocalName()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getLocalName)**
    Returns the local name of the current event.
-   **[getLocation()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getLocation)**
    Return the current location of the cursor.
-   **[getNamespace()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getNamespace)**
    If the current event is a start element or end element, this method returns the URI of the prefix or the default namespace.
-   **[getNamespaceCount()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getNamespaceCount)**
    Returns the number of namespaces declared on a start element or end element.
-   **[getNamespacePrefix(index)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getNamespacePrefix)**
    Returns the prefix for the namespace declared at the index.
-   **[getNamespaceURI(prefix)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getNamespaceURI)**
    Return the URI for the given prefix.
-   **[getNamespaceURIAt(index)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getNamespaceURIAt)**
    Returns the URI for the namespace declared at the index.
-   **[getPIData()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getPIData)**
    Returns the data section of a processing instruction.
-   **[getPITarget()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getPITarget)**
    Returns the target section of a processing instruction.
-   **[getPrefix()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getPrefix)**
    Returns the prefix of the current XML event or null if the event does not have a prefix.
-   **[getText()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getText)**
    Returns the current value of the XML event as a string.
-   **[getVersion()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_getVersion)**
    Returns the XML version specified on the XML declaration. Returns null if none was declared.
-   **[hasName()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_hasName)**
    Returns true if the current XML event has a name. Returns false otherwise.
-   **[hasNext()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_hasNext)**
    Returns true if there are more XML events and false if there are no more XML events.
-   **[hasText()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_hasText)**
    Returns true if the current event has text, false otherwise.
-   **[isCharacters()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_isCharacters)**
    Returns true if the cursor points to a character data XML event. Otherwise, returns false.
-   **[isEndElement()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_isEndElement)**
    Returns true if the cursor points to an end tag. Otherwise, it returns false.
-   **[isStartElement()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_isStartElement)**
    Returns true if the cursor points to a start tag. Otherwise, it returns false.
-   **[isWhiteSpace()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_isWhiteSpace)**
    Returns true if the cursor points to a character data XML event that consists of all white space. Otherwise it returns false.
-   **[next()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_next)**
    Reads the next XML event. A processor may return all contiguous character data in a single chunk, or it may split it into several chunks. Returns an integer which indicates the type of event.
-   **[nextTag()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_nextTag)**
    Skips any white space (the isWhiteSpace method returns true), comment, or processing instruction XML events, until a start element or end element is reached. Returns the index for that XML event.
-   **[setCoalescing(returnAsSingleBlock)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_setCoalescing)**
    If you specify true for returnAsSingleBlock, text is returned in a single block, from a start element to the first end element or the next start element, whichever comes first. If you specify it as false, the parser may return text in multiple blocks.
-   **[setNamespaceAware(isNamespaceAware)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_setNamespaceAware)**
    If you specify true for isNamespaceAware, the parser recognizes namespace. If you specify it as false, the parser does not. The default value is true.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_System_XmlStreamReader_toString)**
    Returns a string containing the length of the input XML given to XmlStreamReader and the first 50 characters of the input XML.

### getAttributeCount()

Returns the number of attributes on the start element, excluding namespace definitions.

#### Signature

public Integer getAttributeCount()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

This method is only valid on a start element or attribute XML events. The count for the number of attributes for an attribute XML event starts with zero.

### getAttributeLocalName(index)

Returns the local name of the attribute at the specified index.

#### Signature

public String getAttributeLocalName(Integer index)

#### Parameters

index

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

If there is no name, an empty string is returned. This method is only valid with start element or attribute XML events.

### getAttributeNamespace(index)

Returns the namespace URI of the attribute at the specified index.

#### Signature

public String getAttributeNamespace(Integer index)

#### Parameters

index

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

If no namespace is specified, null is returned. This method is only valid with start element or attribute XML events.

### getAttributePrefix(index)

Returns the prefix of this attribute at the specified index.

#### Signature

public String getAttributePrefix(Integer index)

#### Parameters

index

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

If no prefix is specified, null is returned. This method is only valid with start element or attribute XML events.

### getAttributeType(index)

Returns the XML type of the attribute at the specified index.

#### Signature

public String getAttributeType(Integer index)

#### Parameters

index

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

For example, id is an attribute type. This method is only valid with start element or attribute XML events.

### getAttributeValue(namespaceUri, localName)

Returns the value of the attribute in the specified localName at the specified URI.

#### Signature

public String getAttributeValue(String namespaceUri, String localName)

#### Parameters

namespaceUri

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

localName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Returns null if the value is not found. You must specify a value for localName. This method is only valid with start element or attribute XML events.

### getAttributeValueAt(index)

Returns the value of the attribute at the specified index.

#### Signature

public String getAttributeValueAt(Integer index)

#### Parameters

index

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This method is only valid with start element or attribute XML events.

### getEventType()

Returns the type of XML event the cursor is pointing to.

#### Signature

public System.XmlTag getEventType()

#### Return Value

Type: [System.XmlTag](#XmlTag_enum_section_title)

#### XmlTag Enum

The values for XmlTag are:

-   ATTRIBUTE
-   CDATA
-   CHARACTERS
-   COMMENT
-   DTD
-   END\_DOCUMENT
-   END\_ELEMENT
-   ENTITY\_DECLARATION
-   ENTITY\_REFERENCE
-   NAMESPACE
-   NOTATION\_DECLARATION
-   PROCESSING\_INSTRUCTION
-   SPACE
-   START\_DOCUMENT
-   START\_ELEMENT

### getLocalName()

Returns the local name of the current event.

#### Signature

public String getLocalName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

For start element or end element XML events, it returns the local name of the current element. For the entity reference XML event, it returns the entity name. The current XML event must be start element, end element, or entity reference.

### getLocation()

Return the current location of the cursor.

#### Signature

public String getLocation()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

If the location is unknown, returns -1. The location information is only valid until the next method is called.

### getNamespace()

If the current event is a start element or end element, this method returns the URI of the prefix or the default namespace.

#### Signature

public String getNamespace()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Returns null if the XML event does not have a prefix.

### getNamespaceCount()

Returns the number of namespaces declared on a start element or end element.

#### Signature

public Integer getNamespaceCount()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

This method is only valid on a start element, end element, or namespace XML event.

### getNamespacePrefix(index)

Returns the prefix for the namespace declared at the index.

#### Signature

public String getNamespacePrefix(Integer index)

#### Parameters

index

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Returns null if this is the default namespace declaration. This method is only valid on a start element, end element, or namespace XML event.

### getNamespaceURI(prefix)

Return the URI for the given prefix.

#### Signature

public String getNamespaceURI(String prefix)

#### Parameters

prefix

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

The returned URI depends on the current state of the processor.

### getNamespaceURIAt(index)

Returns the URI for the namespace declared at the index.

#### Signature

public String getNamespaceURIAt(Integer index)

#### Parameters

index

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This method is only valid on a start element, end element, or namespace XML event.

### getPIData()

Returns the data section of a processing instruction.

#### Signature

public String getPIData()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getPITarget()

Returns the target section of a processing instruction.

#### Signature

public String getPITarget()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getPrefix()

Returns the prefix of the current XML event or null if the event does not have a prefix.

#### Signature

public String getPrefix()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getText()

Returns the current value of the XML event as a string.

#### Signature

public String getText()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

The valid values for the different events are:

-   The string value of a character XML event
-   The string value of a comment
-   The replacement value for an entity reference. For example, assume getText reads the following XML snippet:

    ```

    ```

    The getText method returns Salesforce for Dummies, not &Title.
-   The string value of a CDATA section
-   The string value for a space XML event
-   The string value of the internal subset of the DTD

### getVersion()

Returns the XML version specified on the XML declaration. Returns null if none was declared.

#### Signature

public String getVersion()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### hasName()

Returns true if the current XML event has a name. Returns false otherwise.

#### Signature

public Boolean hasName()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

This method is only valid for start element and stop element XML events.

### hasNext()

Returns true if there are more XML events and false if there are no more XML events.

#### Signature

public Boolean hasNext()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

This method returns false if the current XML event is end document.

### hasText()

Returns true if the current event has text, false otherwise.

#### Signature

public Boolean hasText()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

The following XML events have text: characters, entity reference, comment and space.

### isCharacters()

Returns true if the cursor points to a character data XML event. Otherwise, returns false.

#### Signature

public Boolean isCharacters()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isEndElement()

Returns true if the cursor points to an end tag. Otherwise, it returns false.

#### Signature

public Boolean isEndElement()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isStartElement()

Returns true if the cursor points to a start tag. Otherwise, it returns false.

#### Signature

public Boolean isStartElement()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isWhiteSpace()

Returns true if the cursor points to a character data XML event that consists of all white space. Otherwise it returns false.

#### Signature

public Boolean isWhiteSpace()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### next()

Reads the next XML event. A processor may return all contiguous character data in a single chunk, or it may split it into several chunks. Returns an integer which indicates the type of event.

#### Signature

public Integer next()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### nextTag()

Skips any white space (the isWhiteSpace method returns true), comment, or processing instruction XML events, until a start element or end element is reached. Returns the index for that XML event.

#### Signature

public Integer nextTag()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

This method throws an error if elements other than white space, comments, processing instruction, start elements or stop elements are encountered.

### setCoalescing(returnAsSingleBlock)

If you specify true for returnAsSingleBlock, text is returned in a single block, from a start element to the first end element or the next start element, whichever comes first. If you specify it as false, the parser may return text in multiple blocks.

#### Signature

public Void setCoalescing(Boolean returnAsSingleBlock)

#### Parameters

returnAsSingleBlock

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: Void

### setNamespaceAware(isNamespaceAware)

If you specify true for isNamespaceAware, the parser recognizes namespace. If you specify it as false, the parser does not. The default value is true.

#### Signature

public Void setNamespaceAware(Boolean isNamespaceAware)

#### Parameters

isNamespaceAware

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: Void

### toString()

Returns a string containing the length of the input XML given to XmlStreamReader and the first 50 characters of the input XML.

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Code Examples

```
<!ENTITY
  Title "Salesforce For Dummies" >
     ]>
  <moo a="b">Name &Title;</moo>';
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- XmlStreamReader Constructors (atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm)
- XmlStreamReader Methods (atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm)
- XmlStreamReader(xmlInput) (atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- getAttributeCount() (atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm)
- getAttributeLocalName(index) (atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm)
- getAttributeNamespace(index) (atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm)
- getAttributePrefix(index) (atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm)
- getAttributeType(index) (atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm)
