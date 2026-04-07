---
title: "Downloading Files and Managing Sharing"
domain: mobile-sdk
topic: downloading-files-and-managing-sharing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.538Z
estimatedTokens: 314
keywords: [Downloading, Files, Managing, Sharing, Salesforce, Mobile, SDK, convenience, build, specialized, REST, requests, file, download, operations]
---

# Downloading Files and Managing Sharing

> Salesforce Mobile SDK provides convenience methods that build specialized REST requests
for file download and sharing operations. You can use these requests
to:

# Downloading Files and Managing Sharing

Salesforce Mobile SDK provides convenience methods that build specialized REST requests for file download and sharing operations. You can use these requests to:

-   Access the byte stream of a file.
-   Download a page of a file.
-   Preview a page of a file.
-   Retrieve details of File records.
-   Access file sharing information.
-   Add and remove file shares.

## Pages in Requests

The term “page” in REST requests can refer to either a specific item or a group of items in the result set, depending on the context. When you preview a page of a specific file, for example, the request retrieves the specified page from the rendered pages. For most other requests, a page refers to a section of the list of results. The maximum number of records or topics in a page defaults to 25.

The response includes a NextPageUrl field. If this value is defined, there is another page of results. If you want your app to scroll through pages of results, you can use this field to avoid sending unnecessary requests. You can also detect when you’re at the end of the list by simply checking the response status. If nothing or an error is returned, there’s nothing more to display and no need to issue another request.
