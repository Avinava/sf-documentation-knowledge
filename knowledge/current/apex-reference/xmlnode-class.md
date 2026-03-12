---
title: "XmlNode Class"
domain: apex-reference
topic: xmlnode-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:24.360Z
estimatedTokens: 4821
namespace: Dom
keywords: [XmlNode, Inserts, new, child, node, addChildElement, prefix, Usage, addCommentNode, text, addTextNode, getAttribute, key, keyNamespace, getAttributeCount]
---

# XmlNode Class

> Inserts a new child node before the specified node.

**Namespace:** `Dom`

# XmlNode Class

Use the XmlNode class to work with a node in an XML document.

## Namespace

[Dom](atlas.en-us.apexref.meta/apexref/apex_namespace_Dom.htm "The Dom namespace provides classes and methods for parsing and creating XML content.")

## XmlNode Methods

The following are methods for XmlNode. All are instance methods.

-   **[addChildElement(name, namespace, prefix)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_addChildElement)**
    Creates a child element node for this node.
-   **[addCommentNode(text)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_addCommentNode)**
    Creates a child comment node for this node.
-   **[addTextNode(text)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_addTextNode)**
    Creates a child text node for this node.
-   **[getAttribute(key, keyNamespace)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_getAttribute)**
    Returns namespacePrefix:attributeValue for the given key and key namespace.
-   **[getAttributeCount()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_getAttributeCount)**
    Returns the number of attributes for this node.
-   **[getAttributeKeyAt(index)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_getAttributeKeyAt)**
    Returns the attribute key for the given index. Index values start at 0.
-   **[getAttributeKeyNsAt(index)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_getAttributeKeyNsAt)**
    Returns the attribute key namespace for the given index.
-   **[getAttributeValue(key, keyNamespace)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_getAttributeValue)**
    Returns the attribute value for the given key and key namespace.
-   **[getAttributeValueNs(key, keyNamespace)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_getAttributeValueNs)**
    Returns the attribute value namespace for the given key and key namespace.
-   **[getChildElement(name, namespace)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_getChildElement)**
    Returns the child element node for the node with the given name and namespace.
-   **[getChildElements()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_getChildElements)**
    Returns the child element nodes for this node. This doesn't include child text or comment nodes.
-   **[getChildren()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_getChildren)**
    Returns the child nodes for this node. This includes all node types.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_getName)**
    Returns the element name.
-   **[getNamespace()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_getNamespace)**
    Returns the namespace of the element.
-   **[getNamespaceFor(prefix)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_getNamespaceFor)**
    Returns the namespace of the element for the given prefix.
-   **[getNodeType()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_getNodeType)**
    Returns the node type.
-   **[getParent()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_getParent)**
    Returns the parent of this element.
-   **[getPrefixFor(namespace)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_getPrefixFor)**
    Returns the prefix of the given namespace.
-   **[getText()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_getText)**
    Returns the text for this node.
-   **[insertBefore(newChild, refChild)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_insertBefore)**
    Inserts a new child node before the specified node.
-   **[removeAttribute(key, keyNamespace)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_removeAttribute)**
    Removes the attribute with the given key and key namespace. Returns true if successful, false otherwise.
-   **[removeChild(childNode)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_removeChild)**
    Removes the given child node.
-   **[setAttribute(key, value)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_setAttribute)**
    Sets the key attribute value.
-   **[setAttributeNs(key, value, keyNamespace, valueNamespace)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_setAttributeNs)**
    Sets the key attribute value.
-   **[setNamespace(prefix, namespace)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_Dom_XmlNode_setNamespace)**
    Sets the namespace for the given prefix.

### addChildElement(name, namespace, prefix)

Creates a child element node for this node.

#### Signature

public Dom.XmlNode addChildElement(String name, String namespace, String prefix)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name argument can't have a null value.

namespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

prefix

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Dom.XmlNode](#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.")

#### Usage

-   If the namespace argument has a non-null value and the prefix argument is null, the namespace is set as the default namespace.
-   If the prefix argument is null, Salesforce automatically assigns a prefix for the element. The format of the automatic prefix is nsi, where i is a number.If the prefix argument is '', the namespace is set as the default namespace.

### addCommentNode(text)

Creates a child comment node for this node.

#### Signature

public Dom.XmlNode addCommentNode(String text)

#### Parameters

text

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The text argument can't have a null value.

#### Return Value

Type: [Dom.XmlNode](#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.")

### addTextNode(text)

Creates a child text node for this node.

#### Signature

public Dom.XmlNode addTextNode(String text)

#### Parameters

text

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The text argument can't have a null value.

#### Return Value

Type: [Dom.XmlNode](#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.")

### getAttribute(key, keyNamespace)

Returns namespacePrefix:attributeValue for the given key and key namespace.

#### Signature

public String getAttribute(String key, String keyNamespace)

#### Parameters

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

keyNamespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

For example, for the <xyz a:b="c:d" /> element:

-   getAttribute returns c:d
-   getAttributeValue returns d

### getAttributeCount()

Returns the number of attributes for this node.

#### Signature

public Integer getAttributeCount()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getAttributeKeyAt(index)

Returns the attribute key for the given index. Index values start at 0.

#### Signature

public String getAttributeKeyAt(Integer index)

#### Parameters

index

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getAttributeKeyNsAt(index)

Returns the attribute key namespace for the given index.

#### Signature

public String getAttributeKeyNsAt(Integer index)

#### Parameters

index

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getAttributeValue(key, keyNamespace)

Returns the attribute value for the given key and key namespace.

#### Signature

public String getAttributeValue(String key, String keyNamespace)

#### Parameters

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

keyNamespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

For example, for the <xyz a:b="c:d" /> element:

-   getAttribute returns c:d
-   getAttributeValue returns d

### getAttributeValueNs(key, keyNamespace)

Returns the attribute value namespace for the given key and key namespace.

#### Signature

public String getAttributeValueNs(String key, String keyNamespace)

#### Parameters

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

keyNamespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getChildElement(name, namespace)

Returns the child element node for the node with the given name and namespace.

#### Signature

public Dom.XmlNode getChildElement(String name, String namespace)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

namespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Dom.XmlNode](#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.")

### getChildElements()

Returns the child element nodes for this node. This doesn't include child text or comment nodes.

#### Signature

public Dom.XmlNode\[\] getChildElements()

#### Return Value

Type: [Dom.XmlNode](#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.")\[\]

### getChildren()

Returns the child nodes for this node. This includes all node types.

#### Signature

public Dom.XmlNode\[\] getChildren()

#### Return Value

Type: [Dom.XmlNode](#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.")\[\]

### getName()

Returns the element name.

#### Signature

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getNamespace()

Returns the namespace of the element.

#### Signature

public String getNamespace()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getNamespaceFor(prefix)

Returns the namespace of the element for the given prefix.

#### Signature

public String getNamespaceFor(String prefix)

#### Parameters

prefix

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getNodeType()

Returns the node type.

#### Signature

public Dom.XmlNodeType getNodeType()

#### Return Value

Type: [Dom.XmlNodeType](atlas.en-us.apexref.meta/apexref/apex_enum_Dom_XmlNodeType.htm "Specifies the node type in an XML document.")

Uses XmlNodeType enum to return COMMENT, ELEMENT, or TEXT as the node type.

### getParent()

Returns the parent of this element.

#### Signature

public Dom.XmlNode getParent()

#### Return Value

Type: [Dom.XmlNode](#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.")

### getPrefixFor(namespace)

Returns the prefix of the given namespace.

#### Signature

public String getPrefixFor(String namespace)

#### Parameters

namespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The namespace argument can't have a null value.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getText()

Returns the text for this node.

#### Signature

public String getText()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### insertBefore(newChild, refChild)

Inserts a new child node before the specified node.

#### Signature

public [Dom.XmlNode](#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.") insertBefore([Dom.XmlNode](#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.") newChild, [Dom.XmlNode](#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.") refChild)

#### Parameters

newChild

Type: [Dom.XmlNode](#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.")

The node to insert.

refChild

Type: [Dom.XmlNode](#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.")

The node before the new node.

#### Return Value

Type: [Dom.XmlNode](#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.")

#### Usage

-   If refChild is null, newChild is inserted at the end of the list.
-   If refChild doesn't exist, an exception is thrown.

### removeAttribute(key, keyNamespace)

Removes the attribute with the given key and key namespace. Returns true if successful, false otherwise.

#### Signature

public Boolean removeAttribute(String key, String keyNamespace)

#### Parameters

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

keyNamespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### removeChild(childNode)

Removes the given child node.

#### Signature

public Boolean removeChild(Dom.XmlNode childNode)

#### Parameters

childNode

Type: [Dom.XmlNode](#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### setAttribute(key, value)

Sets the key attribute value.

#### Signature

public Void setAttribute(String key, String value)

#### Parameters

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setAttributeNs(key, value, keyNamespace, valueNamespace)

Sets the key attribute value.

#### Signature

public Void setAttributeNs(String key, String value, String keyNamespace, String valueNamespace)

#### Parameters

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

keyNamespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

valueNamespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setNamespace(prefix, namespace)

Sets the namespace for the given prefix.

#### Signature

public Void setNamespace(String prefix, String namespace)

#### Parameters

prefix

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

namespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

## Related Topics

- Dom (atlas.en-us.apexref.meta/apexref/apex_namespace_Dom.htm)
- addChildElement(name, namespace, prefix) (atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm)
- addCommentNode(text) (atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm)
- addTextNode(text) (atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm)
- getAttribute(key, keyNamespace) (atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm)
- getAttributeCount() (atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm)
- getAttributeKeyAt(index) (atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm)
- getAttributeKeyNsAt(index) (atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm)
- getAttributeValue(key, keyNamespace) (atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm)
- getAttributeValueNs(key, keyNamespace) (atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm)
