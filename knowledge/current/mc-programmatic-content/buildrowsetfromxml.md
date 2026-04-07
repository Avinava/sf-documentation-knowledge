---
title: "BuildRowSetFromXML"
domain: mc-programmatic-content
topic: buildrowsetfromxml
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.625Z
estimatedTokens: 524
keywords: [BuildRowSetFromXML, Function, Ordinal, XML, node, XPATH, argument, building, rowset, **Overview**, **Syntax**, Usage, Content]
---

# BuildRowSetFromXML

> BuildRowSetFromXML(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    XML within the node



    2
    string
    Required
    XPATH argument that specifies the XML node for use in building the rowset




# BuildRowSetFromXML

## **Overview**

Creates a rowset from XML. This function can return an empty rowset on error. This function is for use at send time only.

### **Syntax**

BuildRowSetFromXML(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | XML within the node |
| 2 | string | Required | XPATH argument that specifies the XML node for use in building the rowset |
| 3 | boolean | Required | Indicates whether to return an empty rowset on error. A value of 0 does not return an empty rowset. A value of 1 returns an empty rowset. |

### Usage

Review [this standard](https://www.w3.org/TR/1999/REC-xpath-19991116/) for additional information on XPATH. We recommend also reviewing the [Rowset information](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/languageElements.htm) in the AMPscript Language Elemets document.

#### Rowset Content

Value includes the value of any element nodes. This value returns empty for these nodes:

-   CDATA
-   Comment
-   Document
-   Document Fragments
-   DocumentType
-   Entities
-   Entity References
-   Notation
-   ProcessingInformation
-   Whitespace
-   XmlDeclaration

XML includes any XML contained within the node and will appear empty if the node does not contain XML. The rowset also provides a column for each attribute found in any of the nodes. If a node is missing a value for that attribute, the rowset includes an empty value.

Given the @xml variable contains this text:

```xml
<root>
<Flight origin='IND' dest='NYC'>100.00</Flight>
<Flight origin='IND' dest='LAX' carrier='UAL'>200.00</Flight>
<Flight origin='IND' dest='SEA'>500<PerBagSurcharge>25</PerBagSurcharge></Flight>
</root>
```

Using this function call:

```
BuildRowsetFromXml(@xml, '//Flight', 1)
```

The system returns this rowset:

| Value | Xml | Origin_att | Dest_att | Carrier_att |
| --- | --- | --- | --- | --- |
| 100.00 | 100.00 | IND | NYC | '' |
| 200.00 | 200.00 | IND | LAX | UAL |
| 500.00 | 25 | IND | SEA | '' |

Last Updated: Jun 8, 2021
