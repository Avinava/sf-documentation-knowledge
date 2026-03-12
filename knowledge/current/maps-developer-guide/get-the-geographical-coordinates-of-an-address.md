---
title: "Get the Geographical Coordinates of an Address"
domain: maps-developer-guide
topic: get-the-geographical-coordinates-of-an-address
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.770Z
estimatedTokens: 611
keywords: [Geographical, Coordinates, Address, Geocode, Apex, formatted, Sample, Code, Geocoded]
---

# Get the Geographical Coordinates of an Address

> The Geocode() Apex method takes a
      single address and returns the geographical coordinates and the formatted
    address.

# Get the Geographical Coordinates of an Address

The Geocode() Apex method takes a single address and returns the geographical coordinates and the formatted address.

To get the geographical coordinates of more than one address, use the [BatchGeocode()](atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_batchgeocode.htm "The BatchGeocode() Apex method takes addresses and returns their geographical coordinates and formatted addresses.") Apex method.

## Signature

```

```

Where,

-   maps is the namespace that's available after you install Salesforce Maps.
-   API is the class that contains the global methods exposed to developers.
-   Geocode() is the method.

## Sample Code

This code returns the geographical coordinates of the Salesforce headquarters. The output also returns the formatted address and adds missing information, such as postal code and country, if available.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=maps_developer_guide)

#### Warning

If you invoke methods within a flow, process builder, or trigger, avoid uncommitted work errors when you perform one of the following.

-   Call the methods through a future method
-   Call the methods as queueable

Uncommitted work errors can also arise if calling out to Salesforce Maps methods more than one time in a single transaction and the Salesforce Maps token hasn’t refreshed in the last 24 hours. If these errors occur, separate each callout into individual transactions.

Different processes refresh the token, such as plotting a route or schedule. The refresh process is almost immediate after each qualifying action occurs.

**Input Format of the Address**

```

```

**Example**

```

```

## Sample Response

Although the return value is an Apex Map<String, Object> object, this JSON response illustrates the essential data you receive in the resulting map.

If you invoke this method within a flow, process builder, or trigger and want to use the data from the JSON response, implement logic to retrieve that data. For example, you want to save the latitude and longitude coordinates from the JSON response to your records.

```

```

## Sample Response If Not Geocoded

If an address can't be geocoded, you receive this response. Although the return value is an Apex Map<String, Object> object, this JSON response illustrates the essential data you receive in the resulting map.

```

```

## Code Examples

```apex
Map<String, Object> maps.API.Geocode(Map<String, Object> options)
```

```
String address = '{HouseNumber} {Street}, {City}, {State} {PostalCode} {Country}';
String address = '{HouseNumber} {Street}, {City}, {State}';
```

```apex
// Create and add an address.
String salesforceAddress = '415 Mission Street, San Francisco, CA 94105 USA';

Map<string,object> options = new Map<String,Object> {
            'version' => '1', // Required. Version of the API endpoint. Must be '1'.
            'address' => salesforceAddress
        };

// Call the Geocode() method with the address.
Map<String, Object> response = maps.API.Geocode(options);

// Log the resulting geographical coordinates and formatted address. 
system.debug(response);
```

```
{
  "baseUrl": "https://internal.na.sfmapsapi.com/core/geocoding/2?address=415+Mission+Street%2C+San+Francisco%2C+CA+94105+USA",
  "data": {
    "houseNumber": "415",
    "matchLevel": "Address",
    "score": 100,
    "country": "USA",
    "postal": "94105",
    "state": "CA",
    "city": "San Francisco",
    "street": "Mission St",
    "fullAddress": "415 Mission St, San Francisco, CA 94105, United States",
    "position": {
      "lng": -122.397,
      "lat": 37.78977
    }
  },
  "source": "http",
  "success": true
}
```

```
{
  "success": false,
  "message": "No results for that particular address."
}
```

## Related Topics

- BatchGeocode() (atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_batchgeocode.htm)
