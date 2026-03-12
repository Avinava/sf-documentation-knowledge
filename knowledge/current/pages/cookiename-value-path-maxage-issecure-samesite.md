---
title: "Cookie(name, value, path, maxAge, isSecure, SameSite)"
domain: pages
topic: cookiename-value-path-maxage-issecure-samesite
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:35:21.633Z
estimatedTokens: 540
keywords: [Cookie, path, maxAge, isSecure, SameSite, Creates, new, instance, age, settings, security, cross-domain, behavior]
---

# Cookie(name, value, path, maxAge, isSecure, SameSite)

> Creates a new instance of the Cookie class using
  the specified name, value, path, and age, and settings for security and cross-domain
  behavior.

# Cookie(name, value, path, maxAge, isSecure, SameSite)

Creates a new instance of the Cookie class using the specified name, value, path, and age, and settings for security and cross-domain behavior.

## Signature

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Google Chrome 80 introduces a new default cookie attribute setting of SameSite, which is set to Lax. Previously, the SameSite cookie attribute defaulted to the value of None. When SameSite is set to None, cookies must be tagged with the isSecure attribute indicating that they require an encrypted HTTPS connection.

public Cookie(String name, String value, String path, Integer maxAge, Boolean isSecure, String SameSite)

## Parameters

name

Type: String

The cookie name. It can’t be null.

value

Type: String

The cookie data, such as session ID.

path

Type: String

The path from where you can retrieve the cookie.

maxAge

Type: Integer

A number representing how long a cookie is valid for in seconds. If set to less than zero, a session cookie is issued. If set to zero, the cookie is deleted.

isSecure

Type: Boolean

A value indicating whether the cookie can only be accessed through HTTPS (true) or not (false).

SameSite

Type: String

The SameSite attribute on a cookie controls its cross-domain behavior. The valid values are None, Lax, and Strict. After the Chrome 80 release, a cookie with a SameSite value of None must also be marked secure by setting a value of None; Secure.

#### See Also

-   [*Salesforce Spring ’20 Release Notes:* Prepare for Google Chrome’s Changes in SameSite Cookie Behavior That Can Break Salesforce Integrations](http://releasenotes.docs.salesforce.com/en-us/spring20/release-notes/rn_general_chrome_samesite.htm "Salesforce Spring ’20 Release Notes:
    Prepare for Google Chrome’s Changes in SameSite
    Cookie Behavior That Can Break Salesforce
    Integrations - HTML (New Window)")

-   [Chrome Platform Status: Reject insecure SameSite=None cookies](https://www.chromestatus.com/feature/5633521622188032 "Chrome Platform Status: Reject insecure
    SameSite=None cookies - HTML (New Window)")
