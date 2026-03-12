---
title: "Writing XML Using Streams"
domain: apex-guide
topic: writing-xml-using-streams
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.260Z
estimatedTokens: 284
keywords: [Writing, XML, Streams, XmlStreamWriter, enable, writing, data., Writer, Example]
---

# Writing XML Using Streams

> The XmlStreamWriter class methods enable the writing of
XML data.

# Writing XML Using Streams

The XmlStreamWriter class methods enable the writing of XML data.

Those methods are used in conjunction with HTTP callouts to construct an XML document to send in the callout request to an external service. The following example shows how to instantiate a new XmlStreamReader object:

```

```

## XML Writer Methods Example

The following example writes an XML document and tests its validity.

This Hello World sample requires custom objects. You can either create these objects on your own, or download the objects and Apex code as an unmanaged package from AppExchange. To obtain the sample assets in your org, install the [Apex Tutorials Package](https://appexchange.salesforce.com/listingDetail?listingId=a0N30000001saDCEAY "html (New Window)"). This package also contains sample code and objects for the Shipping Invoice example.

```

```

```

```

#### See Also

-   [*Apex Reference Guide*: XmlStreamWriter Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm "Apex Reference Guide: XmlStreamWriter Class - HTML (New Window)")

## Code Examples

```
String xmlString = '<books><book>My Book</book><book>Your Book</book></books>';
XmlStreamReader xsr = new XmlStreamReader(xmlString);
```

```apex
public class XmlWriterDemo {

     public String getXml() {
          XmlStreamWriter w = new XmlStreamWriter();
          w.writeStartDocument(null, '1.0');
          w.writeProcessingInstruction('target', 'data');
          w.writeStartElement('m', 'Library', 'http://www.book.com');
          w.writeNamespace('m', 'http://www.book.com');
          w.writeComment('Book starts here');
          w.setDefaultNamespace('http://www.defns.com');
          w.writeCData('<Cdata> I like CData </Cdata>');
          w.writeStartElement(null, 'book', null);
          w.writedefaultNamespace('http://www.defns.com');
          w.writeAttribute(null, null, 'author', 'Manoj');
          w.writeCharacters('This is my book');
          w.writeEndElement(); //end book
          w.writeEmptyElement(null, 'ISBN', null);
          w.writeEndElement(); //end library
          w.writeEndDocument();
          String xmlOutput = w.getXmlString();
          w.close();
          return xmlOutput;
        }
}
```

```apex
@isTest
private class XmlWriterDemoTest {
    static TestMethod void basicTest() {
        XmlWriterDemo demo = new XmlWriterDemo();
        String result = demo.getXml();
        String expected = '<?xml version="1.0"?><?target data?>' +
            '<m:Library xmlns:m="http://www.book.com">' + 
            '<!--Book starts here-->' +
            '<![CDATA[<Cdata> I like CData </Cdata>]]>' +
'<book xmlns="http://www.defns.com" author="Manoj">This is my book</book><ISBN/></m:Library>';
        
        System.assert(result == expected);
    }
}
```
