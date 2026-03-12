---
title: "Geolocation Compound Field"
domain: object-reference
topic: geolocation-compound-field
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.173Z
estimatedTokens: 817
keywords: [Geolocation, Compound, accessible, SOAP, REST, APIs, Location—a, structured, data, type—or, individual, latitude, longitude, elements, Retrieving]
---

# Geolocation Compound Field

> Geolocation fields are accessible in the SOAP and REST APIs as a
      Location—a structured compound data type—or as individual latitude and
    longitude elements.

# Geolocation Compound Field

Geolocation fields are accessible in the SOAP and REST APIs as a Location—a structured compound data type—or as individual latitude and longitude elements.

In API versions 26.0 and later, geolocation fields are available in the SOAP and REST APIs as a compound field of type Location. This structured data type contains the following fields.

-   latitude
-   longitude

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

SOAP calls that use API versions earlier than 30.0 return geolocation compound values as strings. See “Returned Geolocation Data Types” later in this topic.

Geolocation fields are provided on many standard objects, such as Account, Contact, Quote, and User, as part of their address field or fields. Geolocation fields can also be added as custom fields to standard or custom objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

-   A geolocation compound field is read-only, although its latitude and longitude subfields are editable. You can only access compound fields using the SOAP or REST API. For more information about working with compound fields and their subfields, see [Compound Field Considerations and Limitations](atlas.en-us.object_reference.meta/object_reference/compound_fields_limitations.htm "Address and geolocation compound fields are convenient and result in more concise, clear code. Here are some things to consider when using them in your apps.").
-   Although geolocation fields appear as a single field in the user interface, custom geolocation fields count as *three* custom fields towards your organization’s limits: one for latitude, one for longitude, and one for internal use.

## Retrieving Compound Geolocation Fields

Using compound fields can simplify code that works with geolocations, especially for SOQL queries. SOQL SELECT clauses can reference geolocations directly, instead of the individual component fields.

```

```

To write code that’s compatible with API versions earlier than 26.0 and with API versions 26.0 and later, use the individual latitude and longitude fields.

```

```

## Returned Geolocation Data Types

A compound geolocation field value is returned as the structured data type Location. Code that works with compound geolocation fields must reference the individual components of the returned value. See the sample code in [Address Compound Fields](atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm#compound_fields_example_soap_retrieve_address).

In API versions earlier than 30.0, SOAP calls return compound geolocation field values as strings, instead of as a structured data type, for backward compatibility. If you plan to display your latitude and longitude values or pass them to a service that expects strings, use the values that are returned. If you plan to use the values in mathematical calculations or pass them to a map service that expects numbers, cast the results to numbers.

The string value format is:

```

```

An example of a regular expression to parse out the latitude and longitude values is:

```

```

The first capture is the latitude, and the third is the longitude.

## Code Examples

```
SELECT location__c 
FROM Warehouse__c
```

```
SELECT location__latitude__s, location__longitude__s 
FROM Warehouse__c
```

```
API location: [latitudeValue longitudeValue]
```

```
API location: \[([-+]?\d{1,2}([.]\d+)?) ([-+]?\d{1,3}([.]\d+)?)]
```

## Related Topics

- Compound Field Considerations and Limitations (atlas.en-us.object_reference.meta/object_reference/compound_fields_limitations.htm)
- Address Compound Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
