---
title: "setRedirectCode(redirectCode)"
domain: pages
topic: setredirectcoderedirectcode
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.698Z
estimatedTokens: 602
keywords: [setRedirectCode, redirectCode, HTTP, redirect, code, PageReference, setRedirect]
---

# setRedirectCode(redirectCode)

> Sets the HTTP redirect code to use for the PageReference object when
        setRedirect(redirect) is set to true.

# setRedirectCode(redirectCode)

Sets the HTTP redirect code to use for the PageReference object when [setRedirect(redirect)](atlas.en-us.pages.meta/pages/apex_System_PageReference_setRedirect.htm "Sets the value of the PageReference object's redirect attribute. If set to true, a redirect is performed through a client side redirect.") is set to true.

## Signature

public System.PageReference setRedirectCode(Integer redirectCode)

## Parameters

redirectCode

Type: Integer

Valid values:

-   0 — Redirect using the default redirect action for this PageReference. Typically a JavaScript-based redirection or HTTP 302.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    [Site URLRewriter Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_site_urlRewriter.htm "HTML (New Window)") implementations pointing to a PageReference with a redirectCode of 0 are not redirected.

-   301 — Moved Permanently. Redirect users by sending an HTTP GET request to the target location. Includes instructions to update any references to the requested URL with the target location.
-   302 — Moved Temporarily. Redirect users by sending an HTTP GET request to the target location. Because the redirection is temporary, it doesn’t include update instructions.
-   303 — See Other. Redirect users by sending an HTTP GET request to the target location. Not commonly used. Useful when the client sends a POST request and you want the client to call the new web page using a GET request instead of a POST request.
-   307 — Temporary Redirect. Send the same HTTP request, regardless of the HTTP method, to the target location. Because the redirection is temporary, it doesn’t include update instructions.
-   308 — Permanent Redirect. Send the same HTTP request, regardless of the HTTP method, to the target location. Includes instructions to update any references to the requested URL with the target location.

If the redirect code contains an invalid integer, an error message is displayed when PageReference is used by Salesforce for redirection.

## Return Value

Type: [System.PageReference](atlas.en-us.pages.meta/pages/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

## Related Topics

- setRedirect(redirect) (atlas.en-us.pages.meta/pages/apex_System_PageReference_setRedirect.htm)
- System.PageReference (atlas.en-us.pages.meta/pages/apex_system_pagereference.htm)
