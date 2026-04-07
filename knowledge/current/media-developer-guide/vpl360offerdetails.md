---
title: "VPL360_OfferDetails"
domain: media-developer-guide
topic: vpl360offerdetails
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:38:11.094Z
estimatedTokens: 100
keywords: [VPL360_OfferDetails, Integration, Procedure, fetches, offers, customer, already, purchased, self, care, portal, VPL360, _OfferDetails]
---

> This Integration Procedure fetches the details of offers which the
                      customer has not already purchased in the self care portal.

# VPL360\_OfferDetails

This Integration Procedure fetches the details of offers which the customer has not already purchased in the self care portal.

## Called By

-   Flows:

    -   Self care: Shopping flow ShopAddon/ShopBasepack

-   Components:

    -   LWC: VPLS360SelfCareShopAddOns.js


## Calls

-   Remote Action: GetResponse

    -   Class: VPLS360ShopAddOn

    -   Method: trimjsonnode
