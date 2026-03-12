---
title: "Catalog Event"
domain: data-cloud
topic: catalog-event
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.078Z
estimatedTokens: 274
keywords: [Catalog, Event, interaction, capture, customer, interacts, various, tracking, items, product, blog, post, View, Comment, Favorite]
---

# Catalog Event

> Use a catalog event interaction to capture when a customer interacts with various
  tracking items. For example, a product or a blog post.

# Catalog Event

Use a catalog event interaction to capture when a customer interacts with various tracking items. For example, a product or a blog post.

| Field Name | Field Type | Description |
| --- | --- | --- |
| catalogObject.attributes | object | A dictionary of user-supplied values. |
| catalogObject.id | string | Required. A unique ID representing the catalog object. |
| catalogObject.relatedCatalogObjects | object | A dictionary of related catalog objects. |
| catalogObject.type | string | Required. A type name representing the catalog object. |

## View Catalog Event Example

**iOS**

```

```

**Android**

```

```

## Comment Catalog Event Example

**iOS**

```

```

**Android**

```

```

## Favorite Catalog Event Example

**iOS**

```

```

**Android**

```

```

## Quick View Catalog Event Example

**iOS**

```

```

**Android**

```

```

## Review Catalog Event Example

**iOS**

```

```

**Android**

```

```

## Share Catalog Event Example

**iOS**

```

```

**Android**

```

```

## View Detail Catalog Event Example

**iOS**

```

```

**Android**

```

```

## Code Examples

```
ViewCatalogObjectEvent(
    catalogObject: CatalogObject(
        type: "Product",
        id: "product-12",
        attributes: [
            "PROMO_CODE": "WINTER2022"
        ],
        relatedCatalogObjects: [
            "size": ["S", "M", "L"],
            "sku": ["1234", "5678"]
        ]
    )
)
```

```
CatalogEvent.view(
  CatalogObject(
    id = "product-1",
    type = "Product",
    attributes = mapOf(
      "PROMO_CODE" to "FALL2021"
    ),
    relatedCatalogObjects = mapOf(
      "product's size" to listOf("S", "M", "L"),
      "product-sku" to listOf("1234", "5678")
    )
  )
)
```

```
CommentCatalogObjectEvent(
    catalogObject: CatalogObject(
        type: "Product",
        id: "product-12",
        attributes: [
            "PROMO_CODE": "WINTER2022"
        ],
        relatedCatalogObjects: [
            "size": ["S", "M", "L"],
            "sku": ["1234", "5678"]
        ]
    )
)
```

```
CatalogEvent.comment(
  CatalogObject(
    id = "product-1",
    type = "Product",
    attributes = mapOf(
      "PROMO_CODE" to "FALL2021"
    ),
    relatedCatalogObjects = mapOf(
      "product's size" to listOf("S", "M", "L"),
      "product-sku" to listOf("1234", "5678")
    )
  )
)
```

```
FavoriteCatalogObjectEvent(
    catalogObject: CatalogObject(
        type: "Product",
        id: "product-12",
        attributes: [
            "PROMO_CODE": "WINTER2022"
        ],
        relatedCatalogObjects: [
            "size": ["S", "M", "L"],
            "sku": ["1234", "5678"]
        ]
    )
)
```
