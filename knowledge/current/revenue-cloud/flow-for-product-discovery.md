---
title: "Flow for Product Discovery"
domain: revenue-cloud
topic: flow-for-product-discovery
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.458Z
estimatedTokens: 372
keywords: [Flow, Product, Discovery, metadata, associated, application, users, series, pages, query, records, database, run, logic, provide]
---

# Flow for Product Discovery

> Represents the metadata associated with a flow. With Flow, you can create an
    application that takes users through a series of pages to query and update the records in the
    database. You can also run logic and provide branching capability based on user input to build
    dynamic applications.

# Flow for Product Discovery

Represents the metadata associated with a flow. With Flow, you can create an application that takes users through a series of pages to query and update the records in the database. You can also run logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Product Discovery exposes additional actionType values for the FlowActionCall metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid values for Product Discovery are:findProducts—Search for the products from a catalog, category, or subcategory by using the specified search term.GetProducts—Get products from the specified catalog, category, or subcategory, including product qualification and pricing details.GetProductDetails—Get details such as attributes, hierarchy, and cardinality for the specified product.executeQualificationProcedure—Execute a qualification procedure, which returns the qualification status for the specified products.getCatalogDetails—Get details of a catalog record.getCatalogs—Get a list of catalog records.getCategories—Get the list of categories associated with a catalog record.getCategoryDetails—Get details of a category record.getMultipleProductDetails—Get product details for a list of products.searchPrdctWithGuidedSelection—Use guided product selection to search for products. |
