---
title: "Document Methods"
domain: apex-reference
topic: document-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.595Z
keywords: [Document, Methods, Creates, top-level, root, element, document., createRootElement, name, namespace, prefix, Signature, Parameters, Return, Value, Usage, getRootElement, load, xml, Example]
---

# Document Methods

> Creates the top-level root element for a document.

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