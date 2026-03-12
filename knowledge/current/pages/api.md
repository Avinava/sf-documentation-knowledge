---
title: "$Api"
domain: pages
topic: api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.345Z
estimatedTokens: 657
keywords: [$Api, merge, referencing, API, URLs, Usage]
---

# $Api

> A global merge field type to use when referencing API URLs.

# $Api

A global merge field type to use when referencing API URLs.

## Usage

Use dot notation to specify an API URL from either the Enterprise or Partner WSDL, or to return the session ID.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

$Api.Session\_ID and GETSESSIONID() return the same value, an identifier for the current session in the current context. This context varies depending on where the global variable or function is evaluated. For example, if you use either in a custom formula field, and that field is displayed on a standard page layout in Salesforce Classic, the referenced session is a basic Salesforce session. That same field (or the underlying variable or formula result), when used in a Visualforce page, references a Visualforce session instead.

Session contexts are based on the domain of the request. That is, the session context changes whenever you cross a hostname boundary, such as from .salesforce.com to .vf.force.com or .lightning.force.com.

Session identifiers from different contexts, and the sessions themselves, are different. When you transition between contexts, the old session is replaced by the new one, and the old session is no longer valid. The session ID also changes at this time.

Normally Salesforce transparently handles session hand-off between contexts, but if you’re passing the session ID around yourself, you might need to re-access $Api.Session\_ID or GETSESSIONID() from the new context to ensure a valid session ID.

Not all sessions are created equal. In particular, sessions obtained in a Lightning Experience context have reduced privileges, and don't have API access. You can't use these session IDs to make API calls. {!$Api.Session\_ID} isn’t generated for guest users.

If you use a JWT-based access token for session authentication, you can’t use $Api.Session\_ID. To use $Api.Session\_ID, use an opaque access token instead. Make sure that the “Issue JSON Web Token (JWT)-based access tokens for named users” setting isn’t selected for your external client app or connected app.

## Example

-   {!$Api.Enterprise\_Server\_URL\_\_xxx}: The Enterprise WSDL SOAP endpoint where xxx represents the version of the API. For example, {!$Api.Enterprise\_Server\_URL\_260} is the expression for the endpoint for version 26.0 of the API.
-   {!$Api.Partner\_Server\_URL\_\_xxx}: The Partner WSDL SOAP endpoint where xxx represents the version of the API. {!$Api.Partner\_Server\_URL\_250} is the expression for the endpoint for version 25.0 of the API.
-   {!$Api.Session\_ID}: The session ID.
