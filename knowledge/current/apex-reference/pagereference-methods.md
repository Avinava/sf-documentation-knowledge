---
title: "PageReference Methods"
domain: apex-reference
topic: pagereference-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.256Z
estimatedTokens: 934
keywords: [PageReference, following, PageReference., instance, methods.]
---

# PageReference Methods

> The following are methods for PageReference. All are instance methods.

# PageReference Methods

The following are methods for PageReference. All are instance methods.

-   **[forResource(resourceName, path)](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_forResource.htm)**
    Create a PageReference for nested content inside a zip static resource, by name and path.
-   **[forResource(resourceName)](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_forResource_2.htm)**
    Create a PageReference for a static resource, by name.
-   **[getAnchor()](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getAnchor.htm)**
    Returns the name of the anchor referenced in the page’s URL. That is, the part of the URL after the hashtag (#).
-   **[getContent()](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getContent.htm)**
    Returns the output of the page, as displayed to a user in a web browser.
-   **[getContentAsPDF()](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getContentAsPDF.htm)**
    Returns the page in PDF, regardless of the <apex:page\> component’s renderAs attribute.
-   **[getCookies()](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getCookies.htm)**
    Returns a map of cookie names and cookie objects, where the key is a String of the cookie name and the the value contains the cookie object with that name.
-   **[getHeaders()](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getHeaders.htm)**
    Returns a map of the request headers, where the key string contains the name of the header, and the value string contains the value of the header.
-   **[getParameters()](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getParameters.htm)**
    Returns a map of the query string parameters for the PageReference; both POST and GET parameters are included. The key string contains the name of the parameter, while the value string contains the value of the parameter.
-   **[getRedirect()](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getRedirect.htm)**
    Returns the current value of the PageReference object's redirect attribute.
-   **[getRedirectCode()](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getRedirectCode.htm)**
    Returns the HTTP redirect code used when [getRedirect()](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getRedirect.htm "Returns the current value of the PageReference object's redirect attribute.") is set to true for the PageReference object.
-   **[getUrl()](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getUrl.htm)**
    Returns the relative URL associated with the PageReference when it was originally defined, including any query string parameters and anchors.
-   **[setAnchor(anchor)](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_setAnchor.htm)**
    Sets the URL’s anchor reference to the specified string.
-   **[setCookies(cookies)](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_setCookies.htm)**
    Creates a list of cookie objects. Used in conjunction with the Cookie class.
-   **[setRedirect(redirect)](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_setRedirect.htm)**
    Sets the value of the PageReference object's redirect attribute. If set to true, a redirect is performed through a client side redirect.
-   **[setRedirectCode(redirectCode)](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_setRedirectCode.htm)**
    Sets the HTTP redirect code to use for the PageReference object when [setRedirect(redirect)](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_setRedirect.htm "Sets the value of the PageReference object's redirect attribute. If set to true, a redirect is performed through a client side redirect.") is set to true.

## Related Topics

- forResource(resourceName, path) (atlas.en-us.apexref.meta/apexref/apex_System_PageReference_forResource.htm)
- forResource(resourceName) (atlas.en-us.apexref.meta/apexref/apex_System_PageReference_forResource_2.htm)
- getAnchor() (atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getAnchor.htm)
- getContent() (atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getContent.htm)
- getContentAsPDF() (atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getContentAsPDF.htm)
- getCookies() (atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getCookies.htm)
- getHeaders() (atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getHeaders.htm)
- getParameters() (atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getParameters.htm)
- getRedirect() (atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getRedirect.htm)
- getRedirectCode() (atlas.en-us.apexref.meta/apexref/apex_System_PageReference_getRedirectCode.htm)
