---
title: "ConnectApi.CartCouponCollection"
domain: apex-reference
topic: connectapicartcouponcollection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.096Z
keywords: [ConnectApi.CartCouponCollection]
---

# ConnectApi.CartCouponCollection

# ConnectApi.CartCouponCollection

Collection of coupons related to a cart.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| cartCoupons | ConnectApi.CartCouponList | Collection of coupons. | 54.0 |
| cartId | String | ID of the cart. | 54.0 |
| cartStatus | ConnectApi.​CartStatus | Status of the cart. Values are:Active—Cart is created and available for modifications, like adding or removing products or promotions.Checkout—Cart is in checkout. If the customer modifies the cart, the current checkout session is canceled.Closed—Checkout is complete and an order was created. The cart cannot be modified.PendingClosed—Cart is marked to be closed, but the request isn't completed yet. The cart can’t be modified. This value is available in API version 57.0 and later.PendingDelete—Cart is marked for delete, but the request isn't completed yet. The cart can’t be modified.Processing—Cart is processing. For example, taxes are being calculated. The cart can’t be modified. | 54.0 |
| ownerId | String | ID of the user who owns the cart. | 54.0 |