---
title: "TransformXML"
domain: mc-programmatic-content
topic: transformxml
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:24.301Z
estimatedTokens: 178
keywords: [TransformXML, Function, Ordinal, XML, transform, XSL, document, transformation, **Overview**, **Syntax**]
---

> TransformXML(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    XML to transform



    2
    string
    Required
    XSL document used in the transformation

# TransformXML

## **Overview**

Applies an XSL transform to an XML document.

### **Syntax**

TransformXML(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | XML to transform |
| 2 | string | Required | XSL document used in the transformation |

### Usage

Given the example.xml and the transform.xsl files

```
%%= TransformXML(GetPortfolioItem('formGenXML'),GetPortfolioItem('formGenXSL')) =%%
```

The function uses the GetPortfolioItem() functions to retrieve the formGenXML and formGenXSL files from Portfolio. The ExactTarget application then applies the formGenXSL file to the formGenXML file as part of the transformation process.

Last Updated: Jun 8, 2021
