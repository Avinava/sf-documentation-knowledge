---
title: "ExtendedCommerceDelivery Class"
domain: apex-reference
topic: extendedcommercedelivery-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.175Z
estimatedTokens: 582
namespace: ConnectApi
keywords: [ExtendedCommerceDelivery, Access, information, delivery, estimation., estimateDeliveryDate, estimateDeliveryDateInput, externalReference, API, Version, Guest, Users, Requires, Chatter]
---

# ExtendedCommerceDelivery Class

> Access information about delivery estimation.

**Namespace:** `ConnectApi`

# ExtendedCommerceDelivery Class

Access information about delivery estimation.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## ExtendedCommerceDelivery Methods

This method is for ExtendedCommerceDelivery. It is static.

-   **[estimateDeliveryDate(estimateDeliveryDateInput, externalReference)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ExtendedCommerceDelivery_static_methods.htm#apex_ConnectAPI_ExtendedCommerceDelivery_estimateDeliveryDate_1)**
    Forecast an expected delivery date and time based on delivery estimation settings and the selected shipping carrier method. Provide information on when a package is expected to be shipped and delivered.

### estimateDeliveryDate(estimateDeliveryDateInput, externalReference)

Forecast an expected delivery date and time based on delivery estimation settings and the selected shipping carrier method. Provide information on when a package is expected to be shipped and delivered.

#### API Version

63.0

#### Available to Guest Users

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.EstimateDeliveryDateOutputRepresentation estimateDeliveryDate(ConnectApi.EstimateDeliveryDateInputRepresentation estimateDeliveryDateInput, String externalReference)

#### Parameters

estimateDeliveryDateInput

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

[ConnectApi.EstimateDeliveryDateInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_estimate_delivery_date.htm "Delivery date estimation information.")

Estimated delivery date.

externalReference

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Delivery estimation setup external reference ID.

#### Return Value

Type: [ConnectApi.EstimateDeliveryDateOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_estimate_delivery_date_output.htm "Estimated delivery dates.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- estimateDeliveryDate(estimateDeliveryDateInput, externalReference) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ExtendedCommerceDelivery_static_methods.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.EstimateDeliveryDateInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_estimate_delivery_date.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.EstimateDeliveryDateOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_estimate_delivery_date_output.htm)
