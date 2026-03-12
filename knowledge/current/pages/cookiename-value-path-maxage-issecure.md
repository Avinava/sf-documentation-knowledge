---
title: "Cookie(name, value, path, maxAge, isSecure)"
domain: pages
topic: cookiename-value-path-maxage-issecure
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.638Z
estimatedTokens: 191
keywords: [Cookie, path, maxAge, isSecure, Creates, new, instance, age, secure, setting]
---

# Cookie(name, value, path, maxAge, isSecure)

> Creates a new instance of the Cookie class using the specified name, value, path, age,
and the secure setting.

# Cookie(name, value, path, maxAge, isSecure)

Creates a new instance of the Cookie class using the specified name, value, path, age, and the secure setting.

## Signature

public Cookie(String name, String value, String path, Integer maxAge, Boolean isSecure)

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
