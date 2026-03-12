---
title: "Sample Client Application Using Java"
domain: api-asynch
topic: sample-client-application-using-java
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.101Z
estimatedTokens: 417
keywords: [Sample, Client, Application, Java, code, test, inserts, number, account, records, REST-based, Bulk, API]
---

# Sample Client Application Using Java

> Use this code sample to create a test client application that inserts a number of
  account records using the REST-based Bulk API.

# Sample Client Application Using Java

Use this code sample to create a test client application that inserts a number of account records using the REST-based Bulk API.

In addition to the step-by-step instructions that follow, the end of this section provides the complete code to make copying and pasting easier for you.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

Before you begin building an integration or other client application:

-   Install your development platform according to its product documentation.
-   Read through all the steps before creating the test client application. You may also wish to review the rest of this document to familiarize yourself with terms and concepts.

1.  [Set Up Your Client Application](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code_set_up_client.htm)
    The Bulk API uses HTTP GET and HTTP POST methods to send and receive XML or JSON content, so it’s simple to build clients in the language of your choice. This task uses a Java sample and the Salesforce Web Service Connector (WSC) toolkit provided by Salesforce to simplify development. WSC is a high-performing web service client stack implemented using a streaming parser. The toolkit has built-in support for the basic operations and objects used in the Bulk API.
2.  [Walk Through the Sample Code](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code_walkthrough.htm)
    After you set up your client, you can build client applications that use the Bulk API. Use the sample to create a client application. Each section steps through part of the code. The complete sample is included at the end.

## Related Topics

- Set Up Your Client Application (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code_set_up_client.htm)
- Walk Through the Sample Code (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code_walkthrough.htm)
