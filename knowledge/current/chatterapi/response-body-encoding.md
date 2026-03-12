---
title: "Response Body Encoding"
domain: chatterapi
topic: response-body-encoding
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:21.775Z
estimatedTokens: 416
keywords: [Encoding, Responses, minimally, HTML, entity-encoded]
---

# Response Body Encoding

> Responses are minimally HTML entity-encoded by
  default.

# Response Body Encoding

Responses are minimally HTML entity-encoded by default.

These characters are escaped in all strings.

| Character | Escaped as |
| --- | --- |
| < | &lt; |
| > | &gt; |
| " | &quot; |
| ' | &#39; |
| \ | &#92; |
| & | &amp; |

URL values included in response payloads have special encoding. The main part of the URL is URL-encoded as per [RFC2396](https://www.ietf.org/rfc/rfc2396.txt "html (New Window)"), and the query string is HTML-form encoded. This encoding cannot be turned off.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=chatterapi)

#### Warning

User-submitted content may not be filtered at input and can come from many sources including third-party mobile and web applications. Process API output for the context in which your app uses the output. Failing to process output can expose applications and users to Cross Site Scripting (XSS) exploits and other problems. These problems can result in data loss, application failure, and exposure of company information.

API output can be used in many contexts. Don’t assume that the default entity encoding is appropriate for all contexts. Using API output inside HTML attribute values, inside URLs, with JavaScript, inside <script> tags, and inside CSS all require different encoding. See [the Open Web Application Security Project](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html "HTML (New Window)") for information on how to handle API output in different contexts.

Clients can request raw (unencoded) output. Set the X-Chatter-Entity-Encoding HTTP header in a request to false.
