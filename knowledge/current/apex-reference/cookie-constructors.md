---
title: "Cookie Constructors"
domain: apex-reference
topic: cookie-constructors
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-11T15:42:36.549Z
keywords: [Cookie, Constructors, Creates, new, instance, class, specified, name, value, path, age, secure, setting., maxAge, isSecure, Signature, Parameters, SameSite, Note, See]
---

# Cookie Constructors

> Creates a new instance of the Cookie class using the specified name, value, path, age,
and the secure setting.

## Cookie Constructors

The following are constructors for Cookie.

-   **[Cookie(name, value, path, maxAge, isSecure)](atlas.en-us.apexref.meta/apexref/apex_classes_sites_cookie.htm#apex_System_Cookie_ctor)**  
    Creates a new instance of the Cookie class using the specified name, value, path, age, and the secure setting.
-   **[Cookie(name, value, path, maxAge, isSecure, SameSite)](atlas.en-us.apexref.meta/apexref/apex_classes_sites_cookie.htm#apex_System_Cookie_SameSite_ctor)**  
    Creates a new instance of the Cookie class using the specified name, value, path, and age, and settings for security and cross-domain behavior.
-   **[Cookie(name, value, path, maxAge, isSecure, SameSite, isHttpOnly)](atlas.en-us.apexref.meta/apexref/apex_classes_sites_cookie.htm#apex_System_Cookie_isHttpOnly_ctor)**  
    Creates a new instance of the Cookie class using the specified name, value, path, age, and settings for security, cross-domain behavior, and JavaScript access.

### Cookie(name, value, path, maxAge, isSecure)

Creates a new instance of the Cookie class using the specified name, value, path, age, and the secure setting.

#### Signature

public Cookie(String name, String value, String path, Integer maxAge, Boolean isSecure)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The cookie name. It can’t be null.

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The cookie data, such as session ID.

path

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The path from where you can retrieve the cookie.

maxAge

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

A number representing how long a cookie is valid for in seconds. If set to less than zero, a session cookie is issued. If set to zero, the cookie is deleted.

isSecure

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

A value indicating whether the cookie can only be accessed through HTTPS (true) or not (false).

### Cookie(name, value, path, maxAge, isSecure, SameSite)

Creates a new instance of the Cookie class using the specified name, value, path, and age, and settings for security and cross-domain behavior.

#### Signature

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Google Chrome 80 introduces a new default cookie attribute setting of SameSite, which is set to Lax. Previously, the SameSite cookie attribute defaulted to the value of None. When SameSite is set to None, cookies must be tagged with the isSecure attribute indicating that they require an encrypted HTTPS connection.

public Cookie(String name, String value, String path, Integer maxAge, Boolean isSecure, String SameSite)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The cookie name. It can’t be null.

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The cookie data, such as session ID.

path

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The path from where you can retrieve the cookie.

maxAge

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

A number representing how long a cookie is valid for in seconds. If set to less than zero, a session cookie is issued. If set to zero, the cookie is deleted.

isSecure

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

A value indicating whether the cookie can only be accessed through HTTPS (true) or not (false).

SameSite

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The SameSite attribute on a cookie controls its cross-domain behavior. The valid values are None, Lax, and Strict. After the Chrome 80 release, a cookie with a SameSite value of None must also be marked secure by setting a value of None; Secure.

#### See Also

-   [*Salesforce Spring ’20 Release Notes:* Prepare for Google Chrome’s Changes in SameSite Cookie Behavior That Can Break Salesforce Integrations](http://releasenotes.docs.salesforce.com/en-us/spring20/release-notes/rn_general_chrome_samesite.htm "Salesforce Spring ’20 Release Notes: Prepare for Google
    Chrome’s Changes in SameSite Cookie Behavior That Can Break Salesforce
    Integrations - HTML (New Window)")
    
-   [*Chrome Platform Status*: Reject insecure SameSite=None cookies](https://www.chromestatus.com/feature/5633521622188032 "Chrome Platform Status: Reject insecure SameSite=None
    cookies - HTML (New Window)")
    

### Cookie(name, value, path, maxAge, isSecure, SameSite, isHttpOnly)

Creates a new instance of the Cookie class using the specified name, value, path, age, and settings for security, cross-domain behavior, and JavaScript access.

#### Signature

public Cookie(String name, String value, String path, Integer maxAge, Boolean isSecure, String SameSite, Boolean isHttpOnly)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The cookie name. It can’t be null.

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The cookie data, such as session ID.

path

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The path from where you can retrieve the cookie.

maxAge

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

A number representing how long a cookie is valid for in seconds. If set to less than zero, a session cookie is issued. If set to zero, the cookie is deleted.

isSecure

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

A value indicating whether the cookie can only be accessed through HTTPS (true) or not (false).

SameSite

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The SameSite attribute on a cookie controls its cross-domain behavior. The valid values are None, Lax, and Strict. After the Chrome 80 release, a cookie with a SameSite value of None must also be marked secure by setting a value of None; Secure.

isHttpOnly

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

A value indicating whether the [HttpOnly](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#httponly) attribute for the cookie is set (true) or not (false). If true, client-side JavaScript can’t access the cookie.

#### See Also

-   [*MDN Web Docs*: Set-Cookie HTTP Response Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#httponly "MDN Web Docs: Set-Cookie HTTP Response Header - HTML (New Window)")