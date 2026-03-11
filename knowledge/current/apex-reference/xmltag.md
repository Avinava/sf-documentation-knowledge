---
title: "XmlTag"
domain: apex-reference
topic: xmltag
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:36.576Z
keywords: [XmlTag, Returns, type, XML, event, cursor, pointing, to., getEventType, Signature, Return, Value, Enum]
---

# XmlTag

> Returns the type of XML event the cursor is pointing to.

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