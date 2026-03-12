---
title: "PostalAddress Class"
domain: apex-reference
topic: postaladdress-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.313Z
estimatedTokens: 1612
namespace: RichMessaging
keywords: [PostalAddress, postal, address, addressLines, subLocality, locality, postalCode, subAdministrativeArea, administrativeArea, country, countryCode]
---

# PostalAddress Class

> Represents the postal address.

**Namespace:** `RichMessaging`

# PostalAddress Class

Represents the postal address.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

-   **[PostalAddress Constructors](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_constructors)**

-   **[PostalAddress Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_properties)**


## PostalAddress Constructors

The following are constructors for PostalAddress.

-   **[PostalAddress(addressLines, subLocality, locality, postalCode, subAdministrativeArea, administrativeArea, country, countryCode)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_ctor)**
    Creates a new instance of the RichMessaging.PostalAddress class.

### PostalAddress(addressLines, subLocality, locality, postalCode, subAdministrativeArea, administrativeArea, country, countryCode)

Creates a new instance of the RichMessaging.PostalAddress class.

#### Signature

public PostalAddress(List<String> addressLines, String subLocality, String locality, String postalCode, String subAdministrativeArea, String administrativeArea, String country, String countryCode)

#### Parameters

addressLines

Type: List<String>

The street address.

subLocality

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The sub-locality of the address.

locality

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The locality of the address.

postalCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The postal code.

subAdministrativeArea

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The sub-administrative area.

administrativeArea

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The administrative area.

country

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The country.

countryCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The country code.

## PostalAddress Properties

The following are properties for PostalAddress.

-   **[addressLines](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_addressLines)**
    The street address.
-   **[administrativeArea](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_administrativeArea)**
    The administrative area.
-   **[country](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_country)**
    The country.
-   **[countryCode](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_countryCode)**
    The country code.
-   **[locality](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_locality)**
    The locality of the address.
-   **[postalCode](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_postalCode)**
    The postal code.
-   **[subAdministrativeArea](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_subAdministrativeArea)**
    The sub-administrative area.
-   **[subLocality](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_subLocality)**
    The sub-locality of the address.

### addressLines

The street address.

#### Signature

public List<String> addressLines {get; set;}

#### Property Value

Type: List<String>

### administrativeArea

The administrative area.

#### Signature

public String administrativeArea {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### country

The country.

#### Signature

public String country {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### countryCode

The country code.

#### Signature

public String countryCode {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### locality

The locality of the address.

#### Signature

public String locality {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### postalCode

The postal code.

#### Signature

public String postalCode {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### subAdministrativeArea

The sub-administrative area.

#### Signature

public String subAdministrativeArea {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### subLocality

The sub-locality of the address.

#### Signature

public String subLocality {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- RichMessaging (atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm)
- PostalAddress Constructors (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm)
- PostalAddress Properties (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm)
- PostalAddress(addressLines, subLocality, locality, postalCode, subAdministrativeArea, administrativeArea, country, countryCode) (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- addressLines (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm)
- administrativeArea (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm)
- country (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm)
- countryCode (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm)
- locality (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm)
