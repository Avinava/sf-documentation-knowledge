---
title: "BlockedRedirectEventLog"
domain: object-reference
topic: blockedredirecteventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.586Z
estimatedTokens: 528
keywords: [BlockedRedirectEventLog, Blocked, Redirect, events, capture, redirections, Salesforce, untrusted, malformed, URLs, API, version, 65.0, later, Calls]
---

# BlockedRedirectEventLog

> Blocked Redirect events capture information about blocked redirections from
         Salesforce to untrusted and malformed URLs.  This object is available in API version
      65.0 and later.

# BlockedRedirectEventLog

Blocked Redirect events capture information about blocked redirections from Salesforce to untrusted and malformed URLs. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| BlockedUri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe full string of the target for the redirection. |
| BlockedUriDomain | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf BLOCKED_URI is a URL, the domain for that URL. To allow future redirections to the BLOCKED_URI, BLOCKED_URI_DOMAIN is the value to add to RedirectWhitelistUrl. |
| IsMalformedUrl | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this redirection was blocked because the target URL failed a syntax check or not.The default value is false. |
| Origin | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe origin that caused the request to the BLOCKED_URI. For example, if a form on an Experience Cloud Visualforce site page redirects a user to an untrusted URL via the saveURL parameter, ORIGIN contains the base URL of that site. |
| Referrer | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe absolute or partial address from which the request to the BLOCKED_URI came. The Referrer-Policy HTTP Header of the request determines how much of the URL is shared. |
| RemoteAddress | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRemote IP address of the client making the request. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
