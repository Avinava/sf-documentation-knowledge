---
title: "EmailType"
domain: mc-apis
topic: emailtype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:21.637Z
estimatedTokens: 205
keywords: [EmailType, email, Requests, cannot, included, ignored, Items, case, insensitive]
---

# EmailType

> The EmailType object specifies type of email. Requests cannot update the EmailType. If the EmailType is included in an update request, it is ignored.

# EmailType

The EmailType object specifies type of email. Requests cannot update the EmailType. If the EmailType is included in an update request, it is ignored.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Normal (HTML) | Enumeration | Indicates that messages are formatted as HTML. |
| Text Only (Text) | Enumeration | Indicates that the data extension field holds text data, so the email message consists of text-only content. |

## Related Items

-   [Create a Text-Only Email](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_text_only_email_via_the_web_service_api.htm "Creating_a_Text-Only_Email_Via_the_Web_Service_API")
-   [Create an Email](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_an_email_via_the_web_service_api.htm "Creating_an_Email_Via_the_Web_Service_API")

## Related Topics

- Create a Text-Only Email (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_text_only_email_via_the_web_service_api.htm)
- Create an Email (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_an_email_via_the_web_service_api.htm)
