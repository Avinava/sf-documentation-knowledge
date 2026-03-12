---
title: "Install cURL"
domain: api-asynch
topic: install-curl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.261Z
estimatedTokens: 358
keywords: [Install, cURL, Bulk, API, uses, HTTP, POST, send, receive, CSV, XML, JSON, content, it’s, simple]
---

# Install cURL

> The Bulk API uses HTTP GET and HTTP POST methods to send and receive CSV, XML, and
      JSON content, so it’s simple to build client applications using the tool or the language of
      your choice. This quick start uses a command-line tool called cURL to simplify sending and
      receiving HTTP requests and responses.

# Install cURL

The Bulk API uses HTTP GET and HTTP POST methods to send and receive CSV, XML, and JSON content, so it’s simple to build client applications using the tool or the language of your choice. This quick start uses a command-line tool called cURL to simplify sending and receiving HTTP requests and responses.

cURL is pre-installed on many Linux, Mac, and Windows systems. If cURL isn’t pre-installed on Windows, users can download a version at [curl.haxx.se/](http://curl.haxx.se/ "HTML (New Window)"). When using HTTPS on Windows, ensure that your system meets the cURL requirements for SSL.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

cURL is an open-source tool and isn’t supported by Salesforce.

Escaping the Session ID or Using Single Quotes on Mac and Linux Systems

When running the cURL examples, you can get an error on Mac and Linux systems due to the presence of the exclamation mark special character in the session ID argument. To avoid getting this error, use one of these solutions:

-   Escape the exclamation mark (!) special character in the session ID by inserting a backslash before it (\\!) when the session ID is enclosed within double quotes. For example, the session ID string in this cURL command has the exclamation mark (!) escaped:

    ```

    ```

-   Enclose the session ID within single quotes. For example:

    ```

    ```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/async/66.0/job 
-H "X-SFDC-Session: 00D50000000IehZ\!AQcAQH0dMHZfz972Szmpkb58urFRkgeBGsxL_QJWwYMfAbUeeG7c1E6
LYUfiDUkWe6H34r1AAwOR8B8fLEz6n04NPGRrq0FM"
```

```
curl https://MyDomainName.my.salesforce.com/services/async/66.0/job 
-H 'X-SFDC-Session: sessionID'
```
