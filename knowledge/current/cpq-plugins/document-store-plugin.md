---
title: "Document Store Plugin"
domain: cpq-plugins
topic: document-store-plugin
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.947Z
estimatedTokens: 142
keywords: [Document, Store, Plugin, CPQ, quote, documents, custom, objects, third-party, integrations]
---

# Document Store Plugin

> Use a CPQ document store plugin to store your quote documents as custom objects or in
        third-party integrations.

# Document Store Plugin

Use a CPQ document store plugin to store your quote documents as custom objects or in third-party integrations.

| Available in: All Salesforce CPQ Editions |
| --- |


| Param | Type | Description |
| --- | --- | --- |
| quote | SObject (SBQQ__Quote__c) | Quote record information from the Salesforce CPQ quote. |
| document | SObject (SBQQ__QuoteDocument__c) | The quote document record from Salesforce CPQ. |
| content | Blob | Represents the actual PDF or Word file contents. |

## Example

Here's a sample document store plugin.

```

```

## Code Examples

```apex
public class TestDocumentStorePlugin implements SBQQ.DocumentStorePlugin {

   public void storeDocument(SObject quote, SObject document, Blob content) {
       // Custom document saving logic goes here.
   }

   // Reserved for future use
   public Boolean isQuoteDocumentSaved() {
      return true;
   }

   // Reserved for future use
   public SObject[] listDocuments(SObject quote) {
      return null;
   }

}
```
