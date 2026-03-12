---
title: "Document Class"
domain: apex-reference
topic: document-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.933Z
estimatedTokens: 1236
namespace: Dom
keywords: [Document, process, XML, content., parse, nested, content, that’s, nodes, deep., Usage, createRootElement, name, prefix, getRootElement, load, xml, Example, toXmlString]
---

# Document Class

> Use the Document
    class to process XML content. You can parse nested XML content that’s up to 50 nodes
    deep.

**Namespace:** `Dom`

# Document Class

Use the Document class to process XML content. You can parse nested XML content that’s up to 50 nodes deep.

## Namespace

[Dom](atlas.en-us.apexref.meta/apexref/apex_namespace_Dom.htm "The Dom namespace provides classes and methods for parsing and creating XML content.")

## Usage

One common application is to use it to create the body of a request for [HttpRequest](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_classes_restful_http_httprequest "Use the HttpRequest class to programmatically create HTTP requests like GET, POST, PATCH, PUT, and DELETE.") or to parse a response accessed by [HttpResponse](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_classes_restful_http_httpresponse "Use the HttpResponse class to handle the HTTP response returned by the Http class.").

-   **[Document Constructors](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm#apex_Dom_Document_constructors)**

-   **[Document Methods](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm#apex_Dom_Document_methods)**


#### See Also

-   [Reading and Writing XML Using the DOM](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_xml_dom.htm)


## Document Constructors

The following are constructors for Document.

-   **[Document()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm#apex_Dom_Document_ctor)**
    Creates a new instance of the Dom.Document class.

### Document()

Creates a new instance of the Dom.Document class.

#### Signature

public Document()

## Document Methods

The following are methods for Document. All are instance methods.

-   **[createRootElement(name, namespace, prefix)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm#apex_Dom_Document_createRootElement)**
    Creates the top-level root element for a document.
-   **[getRootElement()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm#apex_Dom_Document_getRootElement)**
    Returns the top-level root element node in the document. If this method returns null, the root element has not been created yet.
-   **[load(xml)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm#apex_Dom_Document_load)**
    Parse the XML representation of the document specified in the xml argument and load it into a document.
-   **[toXmlString()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm#apex_Dom_Document_toXmlString)**
    Returns the XML representation of the document as a String.

### createRootElement(name, namespace, prefix)

Creates the top-level root element for a document.

#### Signature

public Dom.XmlNode createRootElement(String name, String namespace, String prefix)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

namespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

prefix

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Dom.XmlNode](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.")

#### Usage

For more information about namespaces, see [Reading and Writing XML Using the DOM](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_xml_dom.htm).

Calling this method more than once on a document generates an error as a document can have only one root element.

### getRootElement()

Returns the top-level root element node in the document. If this method returns null, the root element has not been created yet.

#### Signature

public Dom.XmlNode getRootElement()

#### Return Value

Type: [Dom.XmlNode](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.")

### load(xml)

Parse the XML representation of the document specified in the xml argument and load it into a document.

#### Signature

public Void load(String xml)

#### Parameters

xml

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

#### Example

```

```

### toXmlString()

Returns the XML representation of the document as a String.

#### Signature

public String toXmlString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Code Examples

```
Dom.Document doc = new Dom.Document();
doc.load(xml);
```

## Related Topics

- Dom (atlas.en-us.apexref.meta/apexref/apex_namespace_Dom.htm)
- HttpRequest (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm)
- HttpResponse (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm)
- Document Constructors (atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm)
- Document Methods (atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm)
- Document() (atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm)
- createRootElement(name, namespace, prefix) (atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm)
- getRootElement() (atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm)
- load(xml) (atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm)
- toXmlString() (atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm)
