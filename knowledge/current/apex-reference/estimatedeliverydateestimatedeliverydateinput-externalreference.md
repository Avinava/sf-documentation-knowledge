---
title: "estimateDeliveryDate(estimateDeliveryDateInput,
      externalReference)"
domain: apex-reference
topic: estimatedeliverydateestimatedeliverydateinput-externalreference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.105Z
keywords: [estimateDeliveryDate, estimateDeliveryDateInput, externalReference, Forecast, expected, delivery, date, time, based, estimation, settings, selected, shipping, carrier, method., Provide, information, package, shipped, delivered.]
---

# estimateDeliveryDate(estimateDeliveryDateInput,
      externalReference)

> Forecast an expected delivery date and time based on delivery estimation
    settings and the selected shipping carrier method. Provide information on when a package is
    expected to be shipped and delivered.

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