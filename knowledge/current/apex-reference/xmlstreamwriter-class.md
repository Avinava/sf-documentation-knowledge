---
title: "XmlStreamWriter Class"
domain: apex-reference
topic: xmlstreamwriter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.590Z
keywords: [XmlStreamWriter, Class, Writes, start, tag, specified, localName, output, stream., writeStartElement, prefix, namespaceUri, Signature, Parameters, Return, Value]
---

# XmlStreamWriter Class

> Writes the start tag specified by localName to the output stream.

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