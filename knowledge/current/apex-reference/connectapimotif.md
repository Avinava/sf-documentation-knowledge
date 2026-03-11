---
title: "ConnectApi.Motif"
domain: apex-reference
topic: connectapimotif
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.289Z
keywords: [ConnectApi.Motif, Note]
---

# ConnectApi.Motif

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