---
title: "getRedirectCode()"
domain: apex-reference
topic: getredirectcode
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.248Z
estimatedTokens: 508
keywords: [getRedirectCode, HTTP, redirect, code, used, getRedirect, set, true, PageReference, object.]
---

# getRedirectCode()

> Returns the HTTP redirect code used when getRedirect() is set to true
      for the PageReference object.

# getRedirectCode()

Returns the HTTP redirect code used when [getRedirect()](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getRedirect.htm "Returns the current value of the PageReference object's redirect attribute.") is set to true for the PageReference object.

## Signature

public Integer getRedirectCode()

## Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Possible Values:

-   0 — Redirect using the default redirect action for this PageReference. Typically a JavaScript-based redirection or HTTP 302.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

    #### Note

    [Site URLRewriter Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_site_urlRewriter.htm "HTML (New Window)") implementations pointing to a PageReference with a redirectCode of 0 are not redirected.

-   301 — Moved Permanently. Redirect users by sending an HTTP GET request to the target location. Includes instructions to update any references to the requested URL with the target location.
-   302 — Moved Temporarily. Redirect users by sending an HTTP GET request to the target location. Because the redirection is temporary, it doesn’t include update instructions.
-   303 — See Other. Redirect users by sending an HTTP GET request to the target location. Not commonly used. Useful when the client sends a POST request and you want the client to call the new web page using a GET request instead of a POST request.
-   307 — Temporary Redirect. Send the same HTTP request, regardless of the HTTP method, to the target location. Because the redirection is temporary, it doesn’t include update instructions.
-   308 — Permanent Redirect. Send the same HTTP request, regardless of the HTTP method, to the target location. Includes instructions to update any references to the requested URL with the target location.

## Related Topics

- getRedirect() (atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getRedirect.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
