---
title: "Google Books™ Custom Adapter for Salesforce Connect"
domain: apex-guide
topic: google-books-custom-adapter-for-salesforce-connect
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:46.806Z
keywords: [Google, Books™, Custom, Adapter, Salesforce, Connect, BooksDataSourceConnection, Class, BooksDataSourceProvider]
---

# Google Books™ Custom Adapter for Salesforce Connect

# Google Books™ Custom Adapter for Salesforce Connect

This example illustrates how to work around the requirements and limits of an external system’s APIs: in this case, the Google Books API Family.

To integrate with the Google Books™ service, we set up Salesforce Connect as follows.

-   The Google Books API allows a maximum of 40 returned results, so we develop our custom adapter to handle result sets with more than 40 rows.
-   The Google Books API can sort only by search relevance and publish dates, so we develop our custom adapter to disable sorting on columns.
-   To support OAuth, we set up our authentication settings in Salesforce so that the requested scope of permissions for access tokens includes https://www.googleapis.com/auth/books.
-   To allow Apex callouts, we define these remote sites in Salesforce:
    -   https://www.googleapis.com
    -   https://books.google.com

## BooksDataSourceConnection Class

```

```

## BooksDataSourceProvider Class

```

```