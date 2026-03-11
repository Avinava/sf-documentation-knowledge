---
title: "Location Class"
domain: apex-reference
topic: location-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.088Z
keywords: [Location, Class, Creates, instance, class, specified, latitude, longitude., newInstance, longitude, Signature, Parameters, Return, Value]
---

# Location Class

> Creates an instance of the Location class, with the specified latitude and longitude.

### newInstance(latitude, longitude)

Creates an instance of the Location class, with the specified latitude and longitude.

#### Signature

public static Location newInstance(Decimal latitude, Decimal longitude)

#### Parameters

latitude

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

longitude

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Location](#apex_class_system_Location "Contains methods for accessing the component fields of geolocation compound fields.")