---
title: "Address Compound Fields"
domain: object-reference
topic: address-compound-fields
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:03.169Z
estimatedTokens: 1535
keywords: [Address, Compound, Standard, addresses—addresses, built, objects, Salesforce—are, accessible, SOAP, API, REST, structured, data, well, individual]
---

# Address Compound Fields

> Standard addresses—addresses built into standard objects in Salesforce—are accessible
        in the SOAP API and REST API as an Address, a structured compound data
        type, as well as individual address elements. If you enabled Custom Address Fields, you can
        also add custom fields that mimic the standard address field behavior.

# Address Compound Fields

Standard addresses—addresses built into standard objects in Salesforce—are accessible in the SOAP API and REST API as an Address, a structured compound data type, as well as individual address elements. If you enabled Custom Address Fields, you can also add custom fields that mimic the standard address field behavior.

The Address type extends the Location type, the data type used for compound geolocation fields. Using API 30.0 and later, standard addresses are available in the SOAP and REST APIs as a compound field of type Address, a structured data type that combines these fields.

| Field | Type | Description |
| --- | --- | --- |
| Accuracy | picklist | Accuracy level of the geocode for the address. For example, this field is known as MailingGeocodeAccuracy on Contact. |
| City | string | The city component of the address. For example, this field is known as MailingCity on Contact. |
| Country | string | The country component of the address. For example, this field is known as MailingCountry on Contact. |
| CountryCode | picklist | The ISO country code for the address. For example, this field is known as MailingCountryCode on Contact.For Standard Address Fields, CountryCode is only available when state and country/territory picklists are enabled in your organization.For Custom Address Fields, CountryCode is always available, whether or not state and country/territory picklists are enabled in your organization. |
| Latitude | double | Used with Longitude to specify the precise geolocation of the address. For example, this field is known as MailingLatitude on Contact. |
| Longitude | double | Used with Latitude to specify the precise geolocation of the address. For example, this field is known as MailingLongitude on Contact. |
| PostalCode | string | The postal code for the address. For example, this field is known as MailingPostalCode on Contact. |
| State | string | The state component of the address. For example, this field is known as MailingState on Contact. |
| StateCode | picklist | The ISO state code for the address. For example, this field is known as MailingStateCode on Contact.StateCode is available only when state and country/territory picklists are enabled in your organization. |
| Street | textarea | The street component of the address. For example, this field is known as MailingStreet on Contact. |

Address fields are provided on many standard objects, such as Account, Contact, Quote, and User. Some objects provide fields for multiple addresses. For example, Account provides four different addresses. In this case, address field names are prefixed with the type of address, for example, BillingAddress and ShippingAddress.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Standard address compound fields are read-only, and are only accessible using the SOAP and REST APIs. To learn about the limitations of compound fields, see [Compound Field Considerations and Limitations](atlas.en-us.object_reference.meta/object_reference/compound_fields_limitations.htm "Address and geolocation compound fields are convenient and result in more concise, clear code. Here are some things to consider when using them in your apps.").

When an address is geocoded, its latitude and longitude fields are populated with coordinates. A related geolocation field is also populated. Typically, geocoding service providers geocode addresses, and rate the accuracy of the geocodes.

The accuracy subfield GeocodeAccuracy stores the accuracy data for a geocoded location. External geolocation apps can get the accuracy level of a geocoded address via the API. When you retrieve an address via the API, any accuracy data is included. You can also retrieve the accuracy information by itself, if needed.

Like its parent, the compound Address field, the GeocodeAccuracy field is only available for standard address fields on standard objects.

## Custom Address Fields

If you enabled Custom Address Fields, the Address field type is available in Object Manager when you add a custom field. Custom address fields mimic the behavior or standard address fields with some limitations.

For more information, see the [Custom Address Fields Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.caf_dev_guide.meta/caf_dev_guide/caf_dev_guide.htm).

## Retrieving Compound Address Fields

Using compound fields can simplify code that works with addresses, especially for SOQL queries. SOQL SELECT clauses can reference addresses directly, instead of all of the individual component fields.

```

```

To write a SOQL query that’s compatible with API versions earlier than 30.0, as well as API 30.0 and later, use the individual fields:

```

```

Compound address field values are returned as a structured data type, Address. Code that works with compound address fields must reference the individual components of the returned value. See the code sample below.

## Retrieve a Standard Address Compound Field with the SOAP API

This Java method uses the Salesforce SOAP API to retrieve and display the Mailing Address for a list of contacts.

```

```

## Using Compound Address Fields as Locations

Compound address fields include latitude and longitude fields. Address fields can be used as locations in SOQL WHERE and ORDER BY clauses. For example, here’s a SOQL query that uses the GEOLOCATION function to retrieve the 10 accounts closest to San Francisco.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

In Developer, Professional, Enterprise, Unlimited, and Performance editions, Salesforce can automatically add or update geolocation fields for Account, Contact, Lead, and WorkOrder records. To use this feature, your administrator must enable the geo data integration rule for each object. For all other objects and editions, set values for latitude and longitude by using SOQL, SOAP or REST API, or a geocoding service. You can then use address fields as locatable values. To find geocoding services, search AppExchange.

## Code Examples

```
SELECT Name, BillingAddress
FROM Account
```

```
SELECT Name, BillingStreet, BillingCity, BillingState, BillingPostalCode,
       BillingCountry, BillingLatitude, BillingLongitude
FROM Account
```

```apex
// Modified version of code in the SOAP API QuickStart
private void querySample() {
    String soqlQuery = "SELECT FirstName, LastName, MailingAddress FROM Contact";
    try {
        QueryResult qr = connection.query(soqlQuery);
        boolean done = false;

        if (qr.getSize() > 0) {
            System.out.println("
Logged-in user can see "
              + qr.getRecords().length + " contact records.");

            while (!done) {
                System.out.println("");
                SObject[] records = qr.getRecords();
                for (int i = 0; i < records.length; ++i) {
                    Contact con = (Contact) records[i];
                    String fName = con.getFirstName();
                    String lName = con.getLastName();

                    // Access the compound address field MailingAddress
                    Address addr = (Address) con.getMailingAddress();
                    String streetAddr = "";
                    if (null != addr) streetAddr = addr.getStreet();

                    if (fName == null) {
                        System.out.println("Contact " + (i + 1) + ": " + lName +
                            " -- " + streetAddr);
                    } else {
                        System.out.println("Contact " + (i + 1) + ": " + fName +
                            " " + lName +
                            " -- " + streetAddr);
                    }
                }

                if (qr.isDone()) {
                    done = true;
                } else {
                    qr = connection.queryMore(qr.getQueryLocator());
                }
            }
        } else {
            System.out.println("No records found.");
        }
    } catch (ConnectionException ce) {
        ce.printStackTrace();
    }
}
```

```
SELECT Id, Name, BillingAddress
FROM Account
WHERE DISTANCE(BillingAddress, GEOLOCATION(37.775,-122.418), 'mi') < 20 
ORDER BY DISTANCE(BillingAddress, GEOLOCATION(37.775,-122.418), 'mi')
LIMIT 10
```

## Related Topics

- Compound Field Considerations and Limitations (atlas.en-us.object_reference.meta/object_reference/compound_fields_limitations.htm)
