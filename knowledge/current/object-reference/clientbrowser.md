---
title: "ClientBrowser"
domain: object-reference
topic: clientbrowser
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.544Z
estimatedTokens: 339
keywords: [ClientBrowser, cookie, added, browser, upon, login, includes, application, inserted, version, 28.0, later, Calls, Usage]
---

# ClientBrowser

> Represents a cookie added to the browser upon login, and also includes
   information about the browser application where the cookie was inserted. This object is
  available in version 28.0 and later.

# ClientBrowser

Represents a cookie added to the browser upon login, and also includes information about the browser application where the cookie was inserted. This object is available in version 28.0 and later.

## Supported Calls

describeSObjects(), delete(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| FullUserAgent | TypestringPropertiesFilter, Nillable, SortDescriptionDetailed information about the client (browser). For example, Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.1) Gecko/2008070208 Firefox/3.0.1 |
| LastUpdate | TypedateTimePropertiesFilter, Nillable, SortDescriptionRepresents the last time the cookie was changed. |
| ProxyInfo | TypestringPropertiesFilter, Nillable, SortDescriptionThe browser’s current proxy information. |
| UsersId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user associated with this item.This is a relationship field.Relationship NameUsersRelationship TypeLookupRefers ToUser |

## Usage

At every login, the device the login request is from is checked against the known devices using ClientBrowser. A match means a cookie was found on the browser that matches an entry in the ClientBrowser table, so the device is known. No match means that no matching cookie was found, so the device is unknown, and the user is asked to confirm their identity.
