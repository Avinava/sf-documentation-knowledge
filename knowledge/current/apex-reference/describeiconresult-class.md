---
title: "DescribeIconResult Class"
domain: apex-reference
topic: describeiconresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.022Z
keywords: [DescribeIconResult, Class, Returns, tab’s, icon, width, pixels., getWidth, Signature, Return, Value, Usage, Note]
---

# DescribeIconResult Class

> Returns the tab’s icon width in pixels.

### getWidth()

Returns the tab’s icon width in pixels.

#### Signature

public Integer getWidth()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If the icon content type is SVG, the icon won’t have a size and its width is zero.