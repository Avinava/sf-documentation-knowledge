---
title: "TaxAddressRequest(city, country, latitude, longitude,
      postalCode, state, street, locationCode)"
domain: apex-reference
topic: taxaddressrequestcity-country-latitude-longitude-postalcode-state-street-locatio
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.293Z
keywords: [TaxAddressRequest, city, country, latitude, longitude, postalCode, state, street, locationCode, Initializes, object, address, details., constructor, intended, test, usage, throws, exception, used]
---

# TaxAddressRequest(city, country, latitude, longitude,
      postalCode, state, street, locationCode)

> Initializes the TaxAddressRequest
      object using address details. This constructor is intended for test usage and throws an
      exception if used outside of the Apex test context.

### TaxAddressRequest(city, country, latitude, longitude, postalCode, state, street, locationCode)

Initializes the TaxAddressRequest object using address details. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global TaxAddressRequest(String city, String country, Double latitude, Double longitude, String postalCode, String state, String street, String locationCode)

#### Parameters

city

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

City used in an address, which is required for tax calculation.

country

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Country used in an address, which is required for tax calculation.

latitude

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

Latitude used in an address, which is required for tax calculation.

longitude

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

Longitude used in an address, which is required for tax calculation.

postalCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Postal code used in an address, which is required for tax calculation.

state

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

State used in an address, which is required for tax calculation.

street

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Street used in an address, which is required for tax calculation.

locationCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Location code used in an address, which is required for tax calculation.