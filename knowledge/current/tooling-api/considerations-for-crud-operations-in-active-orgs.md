---
title: "Considerations for CRUD Operations in Active Orgs"
domain: tooling-api
topic: considerations-for-crud-operations-in-active-orgs
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-05-10T00:40:14.598Z
estimatedTokens: 137
keywords: [Considerations, CRUD, Operations, Active, Orgs, Tooling, API, allowed, 41.0, they, kinds, However, performance, reasons, can’t, perform, org]
---

> CRUD operations on most Tooling API objects are allowed in active orgs in API version
  41.0 and later, just as they are in other kinds of orgs. However, for performance reasons you
  can’t perform CRUD operations in an active org for some Tooling API objects.

# Considerations for CRUD Operations in Active Orgs

CRUD operations on most Tooling API objects are allowed in active orgs in API version 41.0 and later, just as they are in other kinds of orgs. However, for performance reasons you can’t perform CRUD operations in an active org for some Tooling API objects.

CRUD operations on the following Tooling API objects in an active org generate the error Save or update not supported in active organizations.

-   ApexClass
-   ApexComponent
-   ApexPage
-   ApexTrigger
-   CustomField
-   CustomObject
