---
title: "Asset Model Examples"
domain: mc-apis
topic: asset-model-examples
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:15.230Z
estimatedTokens: 339
keywords: [Asset, Model, Examples, created, basic, HTML, paste, template-based, emails, Email, Simple, Template, Complex, Items]
---

> Use these examples to created basic HTML paste and template-based emails.

# Asset Model Examples

Use these examples to created basic HTML paste and template-based emails.

> When pasting HTML into the content attribute, HTML contains certain reserved chars that need to be escaped in JSON. Run the HTML through a JSON escape tool first to ensure that the HTML is valid in the JSON payload.

-   [HTML Paste Email Example](#html-paste-email-example)
-   [Simple Template Based Email Example](#simple-template-based-email-example)
-   [Complex Template Based Email Example](#complex-template-based-email-example)

## HTML Paste Email Example

```json
{
  "name": "my first message",
  "channels": {
    "email": true,
    "web": false
  },
  "views": {
    "html": {
      "content": "<!DOCTYPE html><body>This is a simple html paste email.</body></html>"
    },
    "text": {},
    "subjectline": {},
    "preheader": {}
  },
  "assetType": {
    "name": "htmlemail",
    "id": 208
   }
}
```

## Simple Template Based Email Example

## Complex Template Based Email Example

Character encoding in `data.email.options.characterEncoding` can be one of the following:

-   utf-8
-   us-ascii
-   shift\_jis
-   EUC-KR
-   iso-8859-1
-   iso-8859-2
-   iso-8859-6
-   iso-8859-11
-   big5
-   koi8-r
-   iso-2022-jp
-   GB2312

## Related Items

[List of Asset Types](atlas.en-us.noversion.mc-apis.meta/mc-apis/base-asset-types.htm)

## Related Topics

- List of Asset Types (atlas.en-us.noversion.mc-apis.meta/mc-apis/base-asset-types.htm)
