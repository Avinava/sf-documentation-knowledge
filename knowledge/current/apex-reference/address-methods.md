---
title: "Address Methods"
domain: apex-reference
topic: address-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.080Z
keywords: [Address, Methods, Returns, city, field, address., getCity, Signature, Return, Value, getCountry, getCountryCode, getDistance, toLocation, unit, Parameters, getGeocodeAccuracy, Note, getLatitude, getLongitude]
---

# Address Methods

> Returns the city field of this address.

## Address Methods

The following are methods for Address.

-   **[getCity()](atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm#apex_system_Address_getCity)**  
    Returns the city field of this address.
-   **[getCountry()](atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm#apex_system_Address_getCountry)**  
    Returns the text-only country/territory name component of this address.
-   **[getCountryCode()](atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm#apex_system_Address_getCountryCode)**  
    Returns the country/territory code of this address if state and country/territory picklists are enabled in your organization. Otherwise, returns null.
-   **[getDistance(toLocation, unit)](atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm#apex_system_Address_getDistance)**  
    Returns the distance from this location to the specified location using the specified unit.
-   **[getGeocodeAccuracy()](atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm#apex_System_Address_getGeocodeAccuracy)**  
    When using geolocation data for a given address, this method gives you relative location information based on latitude and longitude values. For example, you can find out if the latitude and longitude values point to the middle of the street, instead of the exact address.
-   **[getLatitude()](atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm#apex_system_Address_getLatitude)**  
    Returns the latitude field of this address.
-   **[getLongitude()](atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm#apex_system_Address_getLongitude)**  
    Returns the longitude field of this address.
-   **[getPostalCode()](atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm#apex_system_Address_getPostalCode)**  
    Returns the postal code of this address.
-   **[getState()](atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm#apex_system_Address_getState)**  
    Returns the text-only state name component of this address.
-   **[getStateCode()](atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm#apex_system_Address_getStateCode)**  
    Returns the state code of this address if state and country/territory picklists are enabled in your organization. Otherwise, returns null.
-   **[getStreet()](atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm#apex_system_Address_getStreet)**  
    Returns the street field of this address.

### getCity()

Returns the city field of this address.

#### Signature

public String getCity()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getCountry()

Returns the text-only country/territory name component of this address.

#### Signature

public String getCountry()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getCountryCode()

Returns the country/territory code of this address if state and country/territory picklists are enabled in your organization. Otherwise, returns null.

#### Signature

public String getCountryCode()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getDistance(toLocation, unit)

Returns the distance from this location to the specified location using the specified unit.

#### Signature

public Double getDistance(Location toLocation, String unit)

#### Parameters

toLocation

Type: [Location](atlas.en-us.apexref.meta/apexref/apex_class_system_Location.htm#apex_class_system_Location "Contains methods for accessing the component fields of geolocation compound fields.")

The Location to which you want to calculate the distance from the current Location.

unit

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The distance unit you want to use: mi or km.

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### getGeocodeAccuracy()

When using geolocation data for a given address, this method gives you relative location information based on latitude and longitude values. For example, you can find out if the latitude and longitude values point to the middle of the street, instead of the exact address.

#### Signature

public String getGeocodeAccuracy()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The getGeocodeAccuracy() return value tells you more about the location at a latitude and longitude for a given address. For example, Zip means the latitude and longitude point to the center of the zip code area, in case a match for an exact street address can’t be found.

| Accuracy Value | Description |
| --- | --- |
| Address | In the same building |
| NearAddress | Near the address |
| Block | Midway point of the block |
| Street | Midway point of the street |
| ExtendedZip | Center of the extended zip code area |
| Zip | Center of the zip code area |
| Neighborhood | Center of the neighborhood |
| City | Center of the city |
| County | Center of the county |
| State | Center of the state |
| Unknown | No match for the address was found |

Geocodes are added only for some standard addresses.

-   Billing Address on accounts
-   Shipping Address on accounts
-   Mailing Address on contacts
-   Address on leads

Person accounts are not supported.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

For getGeocodeAccuracy() to work, set up and activate the geocode data integration rules for the related address fields.

### getLatitude()

Returns the latitude field of this address.

#### Signature

public Double getLatitude()

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### getLongitude()

Returns the longitude field of this address.

#### Signature

public Double getLongitude()

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### getPostalCode()

Returns the postal code of this address.

#### Signature

public String getPostalCode()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getState()

Returns the text-only state name component of this address.

#### Signature

public String getState()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getStateCode()

Returns the state code of this address if state and country/territory picklists are enabled in your organization. Otherwise, returns null.

#### Signature

public String getStateCode()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getStreet()

Returns the street field of this address.

#### Signature

public String getStreet()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")