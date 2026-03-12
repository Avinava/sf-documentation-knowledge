---
title: "Order Summary Verification Input"
domain: chatterapi
topic: order-summary-verification-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.332Z
estimatedTokens: 177
keywords: [Order, Summary, Verification, Input]
---

# Order Summary Verification Input

> Order summary verification input.

# Order Summary Verification Input

Order summary verification input.

Root XML tag

<orderSummaryVerificationInput>

JSON example

{ "email":”Mallory.Strosin5@1667496847560.vincent.info”, "lastName":”Strosin”, "phoneNumber":"+16102347740" }

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| email | String | Guest shopper or registered buyer’s email address. | OptionalThis is required for guest shoppers. | 58.0 |
| lastName | String | Guest shopper or registered buyer’s last name. | Optional | 58.0 |
| phoneNumber | String | Guest shopper or registered buyer’s phone number. | OptionalThis is required for guest shoppers. | 58.0 |
