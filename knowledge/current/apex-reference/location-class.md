---
title: "Location Class"
domain: apex-reference
topic: location-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.677Z
estimatedTokens: 1492
keywords: [Location, accessing, component, geolocation, compound, Usage, getDistance, toLocation, unit, firstLocation, secondLocation, getLatitude, getLongitude, newInstance, latitude]
---

# Location Class

> Contains methods for accessing the component fields of geolocation
      compound fields.

# Location Class

Contains methods for accessing the component fields of geolocation compound fields.

## Namespace

[system](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Each of these methods is also equivalent to a read-only property. For each getter method you can access the property using dot notation. For example, myLocation.getLatitude() is equivalent to myLocation.latitude.

You can’t use dot notation to access compound fields’ subfields directly on the parent field. Instead, assign the parent field to a variable of type Location, and then access its components.

```

```

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

“Location” in Salesforce can also refer to the Location standard object. When referencing the Location object in your Apex code, always use Schema.Location instead of Location to prevent confusion with the standard Location compound field. If referencing both the location object and the Location field in the same snippet, you can differentiate between the two by using System.Location for the field and Schema.Location for the object.

## Example

```

```

-   **[Location Methods](atlas.en-us.apexref.meta/apexref/apex_class_system_Location.htm#apex_system_Location_methods)**


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

## Code Examples

```
Location loc = myAccount.MyLocation__c;
Double lat = loc.latitude;
```

```
// Select and access the Location field. MyLocation__c is the name of a geolocation field on Account.
Account[] records = [SELECT id, MyLocation__c FROM Account LIMIT 10];
for(Account acct : records) {
   Location loc = acct.MyLocation__c;
   Double lat = loc.latitude;
   Double lon = loc.longitude;
}

// Instantiate new Location objects and compute the distance between them in different ways.
Location loc1 = Location.newInstance(28.635308,77.22496);
Location loc2 = Location.newInstance(37.7749295,-122.4194155);
Double dist = Location.getDistance(loc1, loc2, 'mi');
Double dist2 = loc1.getDistance(loc2, 'mi');
```

## Related Topics

- system (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- Location Methods (atlas.en-us.apexref.meta/apexref/apex_class_system_Location.htm)
- getDistance(toLocation, unit) (atlas.en-us.apexref.meta/apexref/apex_class_system_Location.htm)
- getDistance(firstLocation, secondLocation, unit) (atlas.en-us.apexref.meta/apexref/apex_class_system_Location.htm)
- getLatitude() (atlas.en-us.apexref.meta/apexref/apex_class_system_Location.htm)
- getLongitude() (atlas.en-us.apexref.meta/apexref/apex_class_system_Location.htm)
- newInstance(latitude, longitude) (atlas.en-us.apexref.meta/apexref/apex_class_system_Location.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- Decimal (atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm)
