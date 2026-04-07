---
title: "Partials"
domain: mc-programmatic-content
topic: partials
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:27.010Z
estimatedTokens: 435
keywords: [Partials, simple, tag, prefix, pull, external, content, runtime, include, three, identifiers, stored, Portfolio, account]
---

# Partials

> Partials use a simple tag and a > prefix. Use partials to pull in external content at runtime. All partials include one of three identifiers for content stored in the Portfolio for your account:

# Partials

Partials use a simple tag and a > prefix. Use partials to pull in external content at runtime. All partials include one of three identifiers for content stored in the Portfolio for your account:

| Identifier | Description |
| --- | --- |
| Key | String value identifying key for content, such as Key:Mens_Shoes |
| ID | String value identifying ID for content, such as ID:348021 |
| Name | String value identifying file path for content, such as mycontent/descriptions/mens/shoes |

Partials accept an optional string parameter identifying content as originating in Portfolio or Content Builder:

-   Portfolio (Default)
-   Content Builder

If the template cannot match any of those identifiers, it inserts a blank during rendering.

Partials insert content into a template when a message publishes. You can force the content to refresh again at send time using the optional refresh tag.

To return the results of a variable, use the var: prefix. This prefix treats the value of the variable as stored content and link wraps the results as applicable.

To syndicate content from an external web page during rendering, use the get: prefix and insert the applicable URL.

Include an optional static tag to apply the content at the message level and not per each recipient.

If you do not include a prefix in the template (aside from the > character), Guide uses these rules to locate content:

1.  Uses the data field within the data context as indicated by the identifier.
2.  Uses content syndication to pull in the applicable content as indicated by the URL identifier.
3.  Uses stored content as indicated by the key, id, name in the identifier.
4.  If Guide cannot match any value, it replaces the template with a blank.
