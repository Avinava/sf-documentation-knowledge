---
title: "ConnectApi.PreserveCart"
domain: apex-reference
topic: connectapipreservecart
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.613Z
keywords: [ConnectApi.PreserveCart]
---

# ConnectApi.PreserveCart

# ConnectApi.PreserveCart

Represents a preserved cart.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| cartId | String | ID of the authenticated cart. | 60.0 |
| currencyIsoCode | String | Currency ISO code for the authenticated cart. | 60.0 |
| failedCartItems | List<ConnectApi.CartItem​BasicResult> | List of products that weren’t successfully transferred from the guest cart to the authenticated cart. | 60.0 |
| numberOfProducts | Integer | Total number of products in the guest cart. | 60.0 |
| numberOfProductsWithError | Integer | Total number of products that weren’t successfully transferred from the guest cart to the authenticated cart. | 60.0 |
| numberOfProductsWithSuccess | Integer | Total number of products successfully transferred from the guest cart to the authenticated cart. | 60.0 |
| succeededCartItems | List<ConnectApi.CartItem​BasicResult> | List of products successfully transferred from the guest cart to the authenticated cart. | 60.0 |