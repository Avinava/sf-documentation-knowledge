---
title: "Cookie Methods"
domain: pages
topic: cookie-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.654Z
estimatedTokens: 318
keywords: [Cookie, instance]
---

# Cookie Methods

> The following are methods for Cookie. All are instance methods.

# Cookie Methods

The following are methods for Cookie. All are instance methods.

-   **[getDomain()](atlas.en-us.pages.meta/pages/apex_System_Cookie_getDomain.htm)**
    Returns the name of the server making the request.
-   **[getMaxAge()](atlas.en-us.pages.meta/pages/apex_System_Cookie_getMaxAge.htm)**
    Returns a number representing how long the cookie is valid for, in seconds. If set to < 0, a session cookie is issued. If set to 0, the cookie is deleted.
-   **[getName()](atlas.en-us.pages.meta/pages/apex_System_Cookie_getName.htm)**
    Returns the name of the cookie. Can't be null.
-   **[getPath()](atlas.en-us.pages.meta/pages/apex_System_Cookie_getPath.htm)**
    Returns the path from which you can retrieve the cookie. If null or blank, the location is set to root, or “/”.
-   **[getSameSite()](atlas.en-us.pages.meta/pages/apex_System_Cookie_getSameSite.htm)**
    Returns the value for the SameSite attribute of the cookie.
-   **[getValue()](atlas.en-us.pages.meta/pages/apex_System_Cookie_getValue.htm)**
    Returns the data captured in the cookie, such as Session ID.
-   **[isSecure()](atlas.en-us.pages.meta/pages/apex_System_Cookie_isSecure.htm)**
    Returns true if the cookie can only be accessed through HTTPS, otherwise returns false.

## Related Topics

- getDomain() (atlas.en-us.pages.meta/pages/apex_System_Cookie_getDomain.htm)
- getMaxAge() (atlas.en-us.pages.meta/pages/apex_System_Cookie_getMaxAge.htm)
- getName() (atlas.en-us.pages.meta/pages/apex_System_Cookie_getName.htm)
- getPath() (atlas.en-us.pages.meta/pages/apex_System_Cookie_getPath.htm)
- getSameSite() (atlas.en-us.pages.meta/pages/apex_System_Cookie_getSameSite.htm)
- getValue() (atlas.en-us.pages.meta/pages/apex_System_Cookie_getValue.htm)
- isSecure() (atlas.en-us.pages.meta/pages/apex_System_Cookie_isSecure.htm)
