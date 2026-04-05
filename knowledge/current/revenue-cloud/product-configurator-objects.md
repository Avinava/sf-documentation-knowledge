---
title: "Product Configurator Objects"
domain: revenue-cloud
topic: product-configurator-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-05T00:23:22.500Z
estimatedTokens: 208
keywords: [Product, Configurator, Objects, deployment, sequence, Revenue, Cloud, including, API, sequences, lookup]
---

# Product Configurator Objects

> This table provides the object deployment sequence and properties for Product
    Configurator in Revenue Cloud, including object types, API names, deployment sequences, and
    lookup fields.

# Product Configurator Objects

This table provides the object deployment sequence and properties for Product Configurator in Revenue Cloud, including object types, API names, deployment sequences, and lookup fields.

| Object Use Type | Object Name | Object API | Deployment Sequence | Lookup Fields (Foreign Keys) |
| --- | --- | --- | --- | --- |
| Configuration | Product Configuration Rule | ProductConfiguration​Rule | 1 | User |
| Configuration | Product Configuration Flow | ProductConfiguration​Flow | 1 | UserFlowIdentifier |
| Configuration | ExpressionSet​ConstraintObj | ExpressionSet​ConstraintObj | 1 | ExpressionSetId, ReferenceObjectId (Polymorphic) |
| Configuration | Product Configuration Flow Assignment | ProductConfig​FlowAssignment | 2 | User, ProductId, ProductClassificationId, ProductConfigurationFlow |
