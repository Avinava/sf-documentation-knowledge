---
title: "Cookie Methods"
domain: apex-reference
topic: cookie-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.549Z
keywords: [Cookie, Methods, Returns, name, server, making, request., getDomain, Signature, Return, Value, getMaxAge, getName, getPath, getSameSite, See, getValue, isSecure, isHttpOnly]
---

# Cookie Methods

> Returns the name of the server making the request.

## Cookie Methods

The following are methods for Cookie. All are instance methods.

-   **[getDomain()](atlas.en-us.apexref.meta/apexref/apex_classes_sites_cookie.htm#apex_System_Cookie_getDomain)**  
    Returns the name of the server making the request.
-   **[getMaxAge()](atlas.en-us.apexref.meta/apexref/apex_classes_sites_cookie.htm#apex_System_Cookie_getMaxAge)**  
    Returns a number representing how long the cookie is valid for, in seconds. If set to < 0, a session cookie is issued. If set to 0, the cookie is deleted.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_classes_sites_cookie.htm#apex_System_Cookie_getName)**  
    Returns the name of the cookie. Can't be null.
-   **[getPath()](atlas.en-us.apexref.meta/apexref/apex_classes_sites_cookie.htm#apex_System_Cookie_getPath)**  
    Returns the path from which you can retrieve the cookie. If null or blank, the location is set to root, or “/”.
-   **[getSameSite()](atlas.en-us.apexref.meta/apexref/apex_classes_sites_cookie.htm#apex_System_Cookie_getSameSite)**  
    Returns the value for the SameSite attribute of the cookie.
-   **[getValue()](atlas.en-us.apexref.meta/apexref/apex_classes_sites_cookie.htm#apex_System_Cookie_getValue)**  
    Returns the data captured in the cookie, such as Session ID.
-   **[isSecure()](atlas.en-us.apexref.meta/apexref/apex_classes_sites_cookie.htm#apex_System_Cookie_isSecure)**  
    Returns true if the cookie can only be accessed through HTTPS, otherwise returns false.
-   **[isHttpOnly()](atlas.en-us.apexref.meta/apexref/apex_classes_sites_cookie.htm#apex_System_Cookie_isHttpOnly)**  
    Returns true if client-side JavaScript is forbidden from accessing the cookie; otherwise returns false.

### getDomain()

Returns the name of the server making the request.

#### Signature

public String getDomain()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getMaxAge()

Returns a number representing how long the cookie is valid for, in seconds. If set to < 0, a session cookie is issued. If set to 0, the cookie is deleted.

#### Signature

public Integer getMaxAge()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getName()

Returns the name of the cookie. Can't be null.

#### Signature

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getPath()

Returns the path from which you can retrieve the cookie. If null or blank, the location is set to root, or “/”.

#### Signature

public String getPath()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSameSite()

Returns the value for the SameSite attribute of the cookie.

#### Signature

public String getSameSite()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### See Also

-   [*web.dev*: SameSite Cookies Explained](https://web.dev/samesite-cookies-explained/ "web.dev: SameSite Cookies Explained - HTML (New Window)")
    

### getValue()

Returns the data captured in the cookie, such as Session ID.

#### Signature

public String getValue()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### isSecure()

Returns true if the cookie can only be accessed through HTTPS, otherwise returns false.

#### Signature

public Boolean isSecure()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isHttpOnly()

Returns true if client-side JavaScript is forbidden from accessing the cookie; otherwise returns false.

#### Signature

public Boolean isHttpOnly()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### See Also

-   [*MDN Web Docs*: Set-Cookie HTTP Response Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#httponly "MDN Web Docs: Set-Cookie HTTP Response Header - HTML (New Window)")