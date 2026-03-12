---
title: "ConnectApi.Motif"
domain: apex-reference
topic: connectapimotif
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.014Z
estimatedTokens: 399
keywords: [ConnectApi.Motif, motif, contain, URLs, small, medium, large, icons, indicate, Salesforce, record, Common, files, users, groups]
---

# ConnectApi.Motif

> The motif properties contain URLs for small, medium, and large icons that indicate the
      Salesforce record type. Common record types are files, users, and groups, but all record types
      have a set of motif icons. Custom object records use their tab style icon. All icons are
      available to unauthenticated users so that, for example, you can display the motif icons in an
      email. The motif can also contain the record type’s base color.

# ConnectApi.Motif

The motif properties contain URLs for small, medium, and large icons that indicate the Salesforce record type. Common record types are files, users, and groups, but all record types have a set of motif icons. Custom object records use their tab style icon. All icons are available to unauthenticated users so that, for example, you can display the motif icons in an email. The motif can also contain the record type’s base color.

The motif images are icons, not user uploaded images or photos. For example, every user has the same set of motif icons.

Custom object records use their tab style icon, for example, the following custom object uses the “boat” tab style:

```

```

Users use the following icons:

```

```

Groups use the following icons:

```

```

Files use the following icons:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

To view the icons in the previous examples, preface the URL with https://instance\_name. For example, https://instance\_name/img/icon/profile64.png.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| color | String | A hex value representing the base color of the record type, or null. | 29.0 |
| largeIconUrl | String | A large icon indicating the record type. | 28.0 |
| mediumIconUrl | String | A medium icon indicating the record type. | 28.0 |
| smallIconUrl | String | A small icon indicating the record type. | 28.0 |
| svgIconUrl | String | An icon in SVG format indicating the record type, or null if the icon doesn’t exist. | 34.0 |

## Code Examples

```
"motif": {
      "color: "8C004C",
      "largeIconUrl": "/img/icon/custom51_100/boat64.png",
      "mediumIconUrl": "/img/icon/custom51_100/boat32.png",
      "smallIconUrl": "/img/icon/custom51_100/boat16.png",
      "svgIconUrl": null
   },
```

```
"motif": {
      "color: "1797C0",
      "largeIconUrl": "/img/icon/profile64.png",
      "mediumIconUrl": "/img/icon/profile32.png",
      "smallIconUrl": "/img/icon/profile16.png",
      "svgIconUrl": null
   },
```

```
"motif": {
      "color: "1797C0",
      "largeIconUrl": "/img/icon/groups64.png",
      "mediumIconUrl": "/img/icon/groups32.png",
      "smallIconUrl": "/img/icon/groups16.png",
      "svgIconUrl": null
   },
```

```
"motif": {
      "color: "1797C0",
      "largeIconUrl": "/img/content/content64.png",
      "mediumIconUrl": "/img/content/content32.png",
      "smallIconUrl": "/img/icon/files16.png",
      "svgIconUrl": null
   },
```

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
