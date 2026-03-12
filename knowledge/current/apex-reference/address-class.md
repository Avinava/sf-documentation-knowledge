---
title: "Address Class"
domain: apex-reference
topic: address-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.290Z
estimatedTokens: 2347
namespace: System
keywords: [Address, Contains, accessing, component, fields, address, compound, fields., Usage, Important, Example, getCity, getCountry, getCountryCode, getDistance, toLocation, unit, getGeocodeAccuracy, Note, getLatitude]
---

# Address Class

> Contains methods for accessing the component fields of address
      compound fields.

**Namespace:** `System`

# Address Class

Contains methods for accessing the component fields of address compound fields.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Each of these methods is also equivalent to a read-only property. For each getter method, you can access the property using dot notation. For example, myAddress.getCity() is equivalent to myAddress.city.

You can’t use dot notation to access compound fields’ subfields directly on the parent field. Instead, assign the parent field to a variable of type Address, and then access its components. For example, to access the City field in myAccount.BillingAddress, do the following:

```

```

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

“Address” in Salesforce can also refer to the Address standard object. When referencing the Address object in your Apex code, always use Schema.Address instead of Address to prevent confusion with the standard Address compound field. If referencing both the Address object and the Address standard field in the same snippet, you can differentiate between the two by using System.Address for the field and Schema.Address for the object.

## Example

```

```

-   **[Address Methods](atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm#apex_system_Address_methods)**


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

## Code Examples

```
Address addr = myAccount.BillingAddress;
String acctCity = addr.City;
```

```apex
// Select and access Address fields.
// Call the getDistance() method in different ways.
Account[] records = [SELECT id, BillingAddress FROM Account LIMIT 10];
for(Account acct : records) {
   Address addr = acct.BillingAddress;
   Double lat = addr.latitude;
   Double lon = addr.longitude;
   Location loc1 = Location.newInstance(30.1944,-97.6682);
   Double apexDist1 = addr.getDistance(loc1, 'mi');
   Double apexDist2 = loc1.getDistance(addr, 'mi');
   System.assertEquals(apexDist1, apexDist2);
   Double apexDist3 = Location.getDistance(addr, loc1, 'mi');
   System.assertEquals(apexDist2, apexDist3);
}
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- Address Methods (atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm)
- getCity() (atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm)
- getCountry() (atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm)
- getCountryCode() (atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm)
- getDistance(toLocation, unit) (atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm)
- getGeocodeAccuracy() (atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm)
- getLatitude() (atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm)
- getLongitude() (atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm)
- getPostalCode() (atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm)
