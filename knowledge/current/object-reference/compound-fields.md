---
title: "Compound Fields"
domain: object-reference
topic: compound-fields
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:03.160Z
estimatedTokens: 643
keywords: [Compound, group, together, multiple, elements, primitive, data, numbers, strings, represent, complex, location, address, abstraction, simplify]
---

# Compound Fields

> Compound fields group together multiple elements of primitive data types, such as
    numbers or strings, to represent complex data types, such as a location or an address. Compound
    fields are an abstraction that can simplify application code that handles the values, leading to
    more concise, understandable code.

# Compound Fields

Compound fields group together multiple elements of primitive data types, such as numbers or strings, to represent complex data types, such as a location or an address. Compound fields are an abstraction that can simplify application code that handles the values, leading to more concise, understandable code.

Address compound fields are available in the SOAP and REST APIs in API version 30.0 and later. Geolocation fields are available in the SOAP and REST APIs in API version 26.0 and later, with some limitations on SOAP for API versions below 30.0.

Compound fields are accessible as a single, structured field, or as individual component fields. The values contained within the compound field and the values in individual fields both map to the same underlying data stored in Salesforce; they always have identical values. Code that references individual component fields is unaffected by the new compound fields.

Compound fields are read-only. Changes are performed by writing to the individual component fields. This maintains a single, consistent method for performing updates, and avoids the possibility of conflicts. For example, if both the BillingAddress compound field and BillingCity individual component field were updated in the same API call, it would be unclear which value should be saved.

Compound fields are available only through the SOAP and REST APIs. Compound fields are described in both the Enterprise and Partner WSDLs. Update your WSDL to at least API 30.0 to access the new compound data types.

-   **[Address Compound Fields](atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)**
    Standard addresses—addresses built into standard objects in Salesforce—are accessible in the SOAP API and REST API as an Address, a structured compound data type, as well as individual address elements. If you enabled Custom Address Fields, you can also add custom fields that mimic the standard address field behavior.
-   **[Geolocation Compound Field](atlas.en-us.object_reference.meta/object_reference/compound_fields_geolocation.htm)**
    Geolocation fields are accessible in the SOAP and REST APIs as a Location—a structured compound data type—or as individual latitude and longitude elements.
-   **[Compound Field Considerations and Limitations](atlas.en-us.object_reference.meta/object_reference/compound_fields_limitations.htm)**
    Address and geolocation compound fields are convenient and result in more concise, clear code. Here are some things to consider when using them in your apps.

## Related Topics

- Address Compound Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
- Geolocation Compound Field (atlas.en-us.object_reference.meta/object_reference/compound_fields_geolocation.htm)
- Compound Field Considerations and Limitations (atlas.en-us.object_reference.meta/object_reference/compound_fields_limitations.htm)
