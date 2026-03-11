---
title: "ProductAttributeSet"
domain: metadata-api
topic: productattributeset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.051Z
keywords: [ProductAttributeSet, Version, Special, Access, Rules, Fields]
---

# ProductAttributeSet

# ProductAttributeSet

Represents the ProductAttribute information being used as and attribute such as color\_*c, size*\_c .

## Version

ProductAttributeSet components are available in API version 54 and later.

## Special Access Rules

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | A meaningful explanation of the attribute set. |
| developerName | string | A unique name for the attribute set. |
| masterLabel | string | The name of the attribute set. |
| productAttributeSetItems | ProductAttributeSetItem | A list of ProductAttributeSetItem. |