---
title: "Vendor Prefixes"
domain: lightning
topic: vendor-prefixes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.892Z
estimatedTokens: 136
keywords: [Vendor, Prefixes, —moz-, —webkit-, among, others, automatically, added, Lightning]
---

# Vendor Prefixes

> Vendor prefixes, such as —moz- and —webkit- among many others, are automatically added in Lightning.

# Vendor Prefixes

Vendor prefixes, such as —moz- and —webkit- among many others, are automatically added in Lightning.

You only need to write the unprefixed version, and the framework automatically adds any prefixes that are necessary when generating the CSS output. If you choose to add them, they are used as-is. This enables you to specify alternative values for certain prefixes.

## Example

For example, this is an unprefixed version of border-radius.

```

```

The previous declaration results in the following declarations.

```

```

## Code Examples

```
.class {
  border-radius: 2px;
}
```

```
.class {
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}
```
