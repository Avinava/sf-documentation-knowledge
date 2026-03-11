---
title: "Reading and Writing XML Using the DOM"
domain: apex-guide
topic: reading-and-writing-xml-using-the-dom
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.783Z
keywords: [Reading, Writing, XML, DOM, Namespaces, Document, Example, Nodes, XmlNode, See]
---

# Reading and Writing XML Using the DOM

# Reading and Writing XML Using the DOM

Apex provides classes that enable you to work with XML content using the DOM (Document Object Model).

DOM classes help you parse or generate XML content. You can use these classes to work with any XML content. One common application is to use the classes to generate the body of a request created by [HttpRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm) or to parse a response accessed by [HttpResponse](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm). The DOM represents an XML document as a hierarchy of nodes. Some nodes may be branch nodes and have child nodes, while others are leaf nodes with no children. You can parse nested XML content that’s up to 50 nodes deep.

The DOM classes are contained in the Dom namespace.

Use the [Document Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_xml_dom_document.htm) to process the content in the body of the XML document.

Use the [XmlNode Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm) to work with a node in the XML document.

Use the Document Class class to process XML content. One common application is to use it to create the body of a request for [HttpRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm) or to parse a response accessed by [HttpResponse](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm).

## XML Namespaces

An XML namespace is a collection of names identified by a URI reference and used in XML documents to uniquely identify element types and attribute names. Names in XML namespaces may appear as qualified names, which contain a single colon, separating the name into a namespace prefix and a local part. The prefix, which is mapped to a URI reference, selects a namespace. The combination of the universally managed URI namespace and the document's own namespace produces identifiers that are universally unique.

The following XML element has a namespace of http://my.name.space and a prefix of myprefix.

```

```

In the following example, the XML element has two attributes:

-   The first attribute has a key of dimension; the value is 2.
-   The second attribute has a key namespace of http://ns1; the value namespace is http://ns2; the key is example; the value is test.

```

```

## Document Example

For the purposes of the sample below, assume that the url argument passed into the parseResponseDom method returns this XML response:

```

```

The following example illustrates how to use DOM classes to parse the XML response returned in the body of a GET request:

```

```

## Using XML Nodes

Use the XmlNode class to work with a node in an XML document. The DOM represents an XML document as a hierarchy of nodes. Some nodes may be branch nodes and have child nodes, while others are leaf nodes with no children.

There are different types of DOM nodes available in Apex. XmlNodeType is an enum of these different types. The values are:

-   COMMENT
-   ELEMENT
-   TEXT

It is important to distinguish between elements and nodes in an XML document. The following is a simple XML example:

```

```

This example contains three XML elements: name, firstName, and lastName. It contains five nodes: the three name, firstName, and lastName element nodes, as well as two text nodes—Suvain and Singh. Note that the text within an element node is considered to be a separate text node.

For more information about the methods shared by all enums, see [Enum Methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_enum.htm).

## XmlNode Example

This example shows how to use XmlNode methods and namespaces to create an XML request.

```

```

#### See Also

-   [*Apex Reference Guide*: Document Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_xml_dom_document.htm "Apex Reference Guide: Document Class - HTML (New Window)")