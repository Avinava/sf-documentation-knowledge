---
title: "Set a Session Header"
domain: api-asynch
topic: set-a-session-header
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.053Z
estimatedTokens: 243
keywords: [Session, HTTP, requests, contain, API, obtained, SOAP, login, call, SessionHeader]
---

# Set a Session Header

> All HTTP requests must contain a valid API session ID obtained with the SOAP API
      login() call. The session ID is returned in the
    SessionHeader.

# Set a Session Header

All HTTP requests must contain a valid API session ID obtained with the SOAP API login() call. The session ID is returned in the SessionHeader.

This example shows how to specify the required information after you obtain it from the login() call.

```

```

#### See Also

-   [Quick Start: Bulk API 2.0](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart.htm "Get up and running with Bulk API 2.0 by sending a few requests to Salesforce. This Quick Start takes you from setting up a basic environment to inserting, upserting, and querying records using Bulk API 2.0. Experience how to use Bulk API 2.0 via cURL in a free Salesforce Developer Edition org by authenticating and following the examples.")

-   [Sample Client Application Using Java](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code.htm "Use this code sample to create a test client application that inserts a number of account records using the REST-based Bulk API.")

## Code Examples

```
POST /services/async/66.0/job/ HTTP/1.1
Content-Type: application/xml; charset=UTF-8
Accept: application/xml
User-Agent: Salesforce Web Service Connector For Java/1.0
X-SFDC-Session: sessionId
Host: MyDomainName.my.salesforce.com
Connection: keep-alive
Content-Length: 135

<?xml version="1.0" encoding="UTF-8"?>
<jobInfo
   xmlns="http://www.force.com/2009/06/asyncapi/dataload">
 <operation>insert</operation>
 <object>Account</object>
</jobInfo>
```

## Related Topics

- Quick Start: Bulk API 2.0 (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart.htm)
- Sample Client Application Using Java (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code.htm)
