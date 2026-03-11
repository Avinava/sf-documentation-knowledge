---
title: "Location Methods"
domain: apex-reference
topic: location-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.088Z
keywords: [Location, Methods, Calculates, distance, between, location, specified, approximation, haversine, formula, unit., getDistance, toLocation, unit, Signature, Parameters, Return, Value, firstLocation, secondLocation]
---

# Location Methods

> Calculates the distance between this location and the specified
      location, using an approximation of the haversine formula and the specified
    unit.

## Location Methods

The following are methods for Location.

-   **[getDistance(toLocation, unit)](atlas.en-us.apexref.meta/apexref/apex_class_system_Location.htm#apex_system_Location_getDistance)**  
    Calculates the distance between this location and the specified location, using an approximation of the haversine formula and the specified unit.
-   **[getDistance(firstLocation, secondLocation, unit)](atlas.en-us.apexref.meta/apexref/apex_class_system_Location.htm#apex_system_Location_getDistance_2)**  
    Calculates the distance between the two specified locations, using an approximation of the haversine formula and the specified unit.
-   **[getLatitude()](atlas.en-us.apexref.meta/apexref/apex_class_system_Location.htm#apex_system_Location_getLatitude)**  
    Returns the latitude field of this location.
-   **[getLongitude()](atlas.en-us.apexref.meta/apexref/apex_class_system_Location.htm#apex_system_Location_getLongitude)**  
    Returns the longitude field of this location.
-   **[newInstance(latitude, longitude)](atlas.en-us.apexref.meta/apexref/apex_class_system_Location.htm#apex_system_Location_newInstance)**  
    Creates an instance of the Location class, with the specified latitude and longitude.

### getDistance(toLocation, unit)

Calculates the distance between this location and the specified location, using an approximation of the haversine formula and the specified unit.

#### Signature

public Double getDistance(Location toLocation, String unit)

#### Parameters

toLocation

Type: [Location](#apex_class_system_Location "Contains methods for accessing the component fields of geolocation compound fields.")

The Location to which you want to calculate the distance from the current Location.

unit

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The distance unit you want to use: mi or km.

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### getDistance(firstLocation, secondLocation, unit)

Calculates the distance between the two specified locations, using an approximation of the haversine formula and the specified unit.

#### Signature

public static Double getDistance(Location firstLocation, Location secondLocation, String unit)

#### Parameters

firstLocation

Type: [Location](#apex_class_system_Location "Contains methods for accessing the component fields of geolocation compound fields.")

The first of two locations used to calculate distance.

secondLocation

Type: [Location](#apex_class_system_Location "Contains methods for accessing the component fields of geolocation compound fields.")

The second of two locations used to calculate distance.

unit

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The distance unit you want to use: mi or km.

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### getLatitude()

Returns the latitude field of this location.

#### Signature

public Double getLatitude()

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### getLongitude()

Returns the longitude field of this location.

#### Signature

public Double getLongitude()

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

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