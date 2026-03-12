---
title: "Reading XML Using Streams"
domain: apex-guide
topic: reading-xml-using-streams
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.256Z
estimatedTokens: 426
keywords: [Reading, XML, Streams, XMLStreamReader, enable, forward, read-only, access, data., XmlStreamReader, Example]
---

# Reading XML Using Streams

> The XMLStreamReader class methods enable forward, read-only access to XML
        data.

# Reading XML Using Streams

The XMLStreamReader class methods enable forward, read-only access to XML data.

Those methods are used in conjunction with HTTP callouts to parse XML data or skip unwanted events. You can parse nested XML content that’s up to 50 nodes deep. The following example shows how to instantiate a new XmlStreamReader object:

```

```

These methods work on the following XML events:

-   An attribute event is specified for a particular element. For example, the element <book\> has an attribute title: <book title="Salesforce.com for Dummies">.
-   A start element event is the opening tag for an element, for example <book\>.
-   An end element event is the closing tag for an element, for example </book\>.
-   A start document event is the opening tag for a document.
-   An end document event is the closing tag for a document.
-   An entity reference is an entity reference in the code, for example !ENTITY title = "My Book Title".
-   A characters event is a text character.
-   A comment event is a comment in the XML file.

Use the next and hasNext methods to iterate over XML data. Access data in XML using get methods such as the getNamespace method.

When iterating over the XML data, always check that stream data is available using hasNext before calling next to avoid attempting to read past the end of the XML data.

## XmlStreamReader Example

The following example processes an XML string.

```

```

```

```

#### See Also

-   [*Apex Reference Guide*: XmlStreamReader Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm "Apex Reference Guide: XmlStreamReader Class - HTML (New Window)")

## Code Examples

```
String xmlString = '<books><book>My Book</book><book>Your Book</book></books>';
XmlStreamReader xsr = new XmlStreamReader(xmlString);
```

```apex
public class XmlStreamReaderDemo {

    // Create a class Book for processing
    public class Book {
        String name;
        String author;
    }

    public Book[] parseBooks(XmlStreamReader reader) {
        Book[] books = new Book[0];
        boolean isSafeToGetNextXmlElement = true;
        while(isSafeToGetNextXmlElement) {
            // Start at the beginning of the book and make sure that it is a book
            if (reader.getEventType() == XmlTag.START_ELEMENT) {
                if ('Book' == reader.getLocalName()) {
                    // Pass the book to the parseBook method (below) 
                    Book book = parseBook(reader);
                    books.add(book);
                }
            }
            // Always use hasNext() before calling next() to confirm 
            // that we have not reached the end of the stream
            if (reader.hasNext()) {
                reader.next();
            } else {
                isSafeToGetNextXmlElement = false;
                break;
            }
        }
        return books;
    }

    // Parse through the XML, determine the author and the characters
    Book parseBook(XmlStreamReader reader) {
        Book book = new Book();
        book.author = reader.getAttributeValue(null, 'author');
        boolean isSafeToGetNextXmlElement = true;
        while(isSafeToGetNextXmlElement) {
            if (reader.getEventType() == XmlTag.END_ELEMENT) {
                break;
            } else if (reader.getEventType() == XmlTag.CHARACTERS) {
                book.name = reader.getText();
            }
            // Always use hasNext() before calling next() to confirm 
            // that we have not reached the end of the stream
            if (reader.hasNext()) {
                reader.next();
            } else {
                isSafeToGetNextXmlElement = false;
                break;
            }
        }
        return book;
    }
}
```

```apex
@isTest
private class XmlStreamReaderDemoTest {
    // Test that the XML string contains specific values
    static testMethod void testBookParser() {

        XmlStreamReaderDemo demo = new XmlStreamReaderDemo();

        String str = '<books><book author="Chatty">Alpha beta</book>' +
            '<book author="Sassy">Baz</book></books>';

        XmlStreamReader reader = new XmlStreamReader(str);
        XmlStreamReaderDemo.Book[] books = demo.parseBooks(reader);

        System.debug(books.size());

        for (XmlStreamReaderDemo.Book book : books) {
            System.debug(book);
        }
    }
}
```
