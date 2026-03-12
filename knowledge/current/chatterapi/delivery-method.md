---
title: "Delivery Method"
domain: chatterapi
topic: delivery-method
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:18.267Z
estimatedTokens: 584
keywords: [Delivery, Commerce, store, checkout]
---

# Delivery Method

> Delivery method for a Commerce store checkout.

# Delivery Method

Delivery method for a Commerce store checkout.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| adjustedShippingFee | String | Shipping fee, including totalAdjustmentAmount, for the delivery. | Small, 60.0 | 60.0 |
| carrier | String | Carrier for the delivery. | Small, 55.0 | 55.0 |
| class​Of​Service | String | Class of service for the delivery. | Small, 55.0 | 55.0 |
| currency​IsoCode | String | Three-letter ISO 4217 currency code associated with the delivery. | Small, 55.0 | 55.0 |
| earliest​Estimated​DeliveryTime | String | Earliest estimated delivery date and time for the delivery in ISO 8601 format. Determined by the time at checkout, plus processTime, plus transitTimeMin. | Small, 61.0 | 61.0 |
| id | String | ID of the delivery method. | Small, 55.0 | 55.0 |
| latest​Estimated​DeliveryTime | String | Latest estimated delivery date and time for the delivery in ISO 8601 format. Determined by the time at checkout, plus processTime, plus transitTimeMax. | Small, 61.0 | 61.0 |
| name | String | Name of the delivery method. | Small, 55.0 | 55.0 |
| process​Time | Integer | Merchant-specified process time for the delivery. Process time includes the time between when an order is placed and when the shipment is given to the shipping carrier. | Small, 61.0 | 61.0 |
| process​Time​Unit | String | Unit of time used to define processTime. Values are:HoursDaysWeeks | Small, 61.0 | 61.0 |
| shipping​Fee | String | Shipping fee for the delivery. | Small, 55.0 | 55.0 |
| totalAdjustmentAmount | String | The adjustment amount of a promotion applicable to the delivery method. | Small, 60.0 | 60.0 |
| transit​TimeMax | Integer | Maximum estimate of transit time for the delivery. Transit time includes the time between when a shipping carrier receives a shipment and when the shipment arrives at the delivery address. | Small, 61.0 | 61.0 |
| transit​TimeMin | Integer | Minimum estimate of transit time for the delivery. Transit time includes the time between when a shipping carrier receives a shipment and when the shipment arrives at the delivery address. | Small, 61.0 | 61.0 |
| transit​TimeUnit | String | Unit of time used to define transit​TimeMax and transit​TimeMin. Values are:HoursDaysWeeks | Small, 61.0 | 61.0 |
