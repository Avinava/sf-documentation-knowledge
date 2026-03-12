---
title: "Get the Geographical Coordinates of Addresses in Batch"
domain: maps-developer-guide
topic: get-the-geographical-coordinates-of-addresses-in-batch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.756Z
estimatedTokens: 624
keywords: [Geographical, Coordinates, Addresses, Batch, BatchGeocode, Apex, their, formatted, API, Call, Allocations, Sample, Code, Error]
---

# Get the Geographical Coordinates of Addresses in Batch

> The BatchGeocode() Apex method
      takes addresses and returns their geographical coordinates and formatted
    addresses.

# Get the Geographical Coordinates of Addresses in Batch

The BatchGeocode() Apex method takes addresses and returns their geographical coordinates and formatted addresses.

## Signature

```

```

Where,

-   maps is the namespace that's available after you install Salesforce Maps.
-   API is the class that contains the global methods exposed to developers.
-   BatchGeocode() is the method.

## API Call Allocations

-   For geocoding, submit up to 120 requests per minute.
-   Send batches of up to 50 addresses per request.

## Sample Code

This code returns the geographical coordinates of the White House and Washington Monument. The output also returns the formatted address and adds missing information, such as postal code and country, if available.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=maps_developer_guide)

#### Warning

If you invoke methods within a flow, process builder, or trigger, avoid uncommitted work errors when you perform one of the following.

-   Call the methods through a future method
-   Call the methods as queueable

Uncommitted work errors can also arise if calling out to Salesforce Maps methods more than one time in a single transaction and the Salesforce Maps token hasn’t refreshed in the last 24 hours. If these errors occur, separate each callout into individual transactions.

Different processes refresh the token, such as plotting a route or schedule. The refresh process is almost immediate after each qualifying action occurs.

**Input Format of an Address**

```

```

**Example**

```

```

## Sample Response

Although the return value is an Apex Map<String, Object> object, this JSON response illustrates the essential data you receive in the resulting map.

If you invoke this method within a flow, process builder, or trigger and want to use the data from the JSON response, implement logic to retrieve that data. For example, you want to save the latitude and longitude coordinates from the JSON response to your records.

Responses include geocoding confidence scores based on address accuracy and completeness. For example, addresses missing city and state information result in scores lower than 100. Success results can include:

-   False, which indicates no match.
-   Partial, which indicates scores less than 100.
-   Full, which indicates scores of 100.

```

```

## Sample Error Response

If you submit improperly created requests, expect a response similar to this.

```

```

## Code Examples

```apex
Map<String, Object> maps.API.BatchGeocode(Map<String, Object>)
```

```
String address = '{HouseNumber} {Street}, {City}, {State} {PostalCode} {Country}';
String address = '{HouseNumber} {Street}, {City}, {State}';
```

```apex
public with sharing class exampleBatchGeocode {
    public exampleBatchGeocode() {}

    public exampleBatchGeocodeWithSFMaps(){
        List<Account> accountList = [SELECT Id, Name, BillingAddress FROM Account WHERE Name like 'W%' AND BillingLongitude = Null];
        Map<String, Account> accounts = new Map<String, Account>(); // Map of the Accounts to link the results back to
        Map<String, Map<String, String>> addresses = new Map<String, Map<String, String>>();
        for (Account acc : accounts) {
            // It is recommended to prevent sending null fields. Not done here for illustrative purposes.
            Map<String, String> address = new Map<String, String>{
                'address' => acc.BillingAddress.getStreet() + ', ' + acc.BillingAddress.getCity() + ', ' + acc.BillingAddress.getPostalCode() + ', ' + acc.BillingAddress.getCountry()
            };
            String idstr = Id.valueOf(acc.id);
            addresses.put(idstr, address);
            accounts.put(idstr.toLowerCase(), acc);// Ids will be lowercase in results.
            // Illustrative Sample: Three accounts in list.
            // [{
            //     id: '005B0000005LDrUIA1',
            //     name: 'White House',
            //     address: '1600 Pennsylvania Ave NW, Washington, DC 20500, United States'
            // }, {
            //     id: '005B0000005LDrUIA2',
            //     name: 'Washington Monument'
            //     address: '2 15th St NW, Washington, null, United States'
            // }, {
            //     id: '005B0000005LDrUIA3',
            //     name: 'Wash and Ride',
            //     address: 'null, null, null, United States'
            // }]
        }

        Map<String, Object> response; // Deserialized Untyped Response
        try {
            response = maps.API.BatchGeocode(new Map<String, Object> {
                'version' => '2', // Required. Hardcode value to 2. Has no impact on results or process.
                'address_info' => JSON.serialize(addresses)
            });
        }
        catch (Exception ex) {
            // Handle exception. Simple log for illustrative purposes.
            System.debug(ex);
            return;
        }
        List<Account> accountsWithBadData = new List<Account>();
        Boolean callSuccess = (Boolean)response.get('success');
        if(callSuccess != null){
            Map<String, Object> results = (Map<String, Object>)response.get('results');
            for(String accountId: results.keySet()){
                Account acc = accounts.get(accountId);
                Map<String, Object> record = (Map<String, Object>)results.get(accountId);
                if((Boolean) record.get('success')){
                    Map<String, Object> data = (Map<String, Object>)record.get('data');
                    Map<String, Object> position = (Map<String, Object>) data.get('position');
                    acc.BillingLatitude = (Decimal) position.get('lat');
                    acc.BillingLongitude = (Decimal) position.get('lng');
                    if((Integer) data.get('score') < 50) {
                        // Low confidence in address match. Marking the accounts needed for review.
                        accountsWithBadData.add(acc);
                    }
                }
                else {
                    // Unable to match address provided.
                    accountsWithBadData.add(acc);
                }
            }
            update accountList; // Update records with Latitude and Longitude.
            reviewBadAccounts(accountsWithBadData); // Pushing accounts with bad data to another process to be handled.
        }
        else {
            // Three primary types of failed requests.
            String errorCode = (String) response.get('error_code');
            if(errorCode == 'GC-0500'){
                // Internal Server Error
                // Retry the request at a later time and/or reach out to support.
                return;
            }
            else if(errorCode == 'GC-0429'){
                // Too many requests. Perform an exponential back off for the retries.
                // Bad requests count against limits. Be sure to not waste calls on bad addresses and improperly created requests.
                return;
            }
            else if(errorCode.startsWith('GC-1')){
                System.debug(response);
                 // Improperly created requests. Fix errors before trying again.
                return;
            }
            else {
                // Fail safe catch for future error codes.
                System.debug(response);
                return;
            }
        }
    }

}
```

```
{
    "baseUrl": "https://sfmapsgateway-uengage1.sfdc-lywfpd.svc.sfdcfc.net/core/batchgeocode/3",
    "results": {
        "001ru00000ca1teiad": {
            "message": "Invalid address",
            "success": false
        },
        "001ru00000ca1tdiad": {
            "success": true,
            "source": "http",
            "data": {
                "city": "Washington",
                "country": "USA",
                "fullAddress": "2 15th St NW, Washington, DC 20004, United States",
                "houseNumber": "2",
                "matchLevel": "Address",
                "position": {
                    "lat": 38.889043,
                    "lng": -77.0330958
                },
                "postal": "20004",
                "score": 86,
                "state": "DC",
                "street": "15th St NW",
            }
        },
        "001ru00000ca1tciad": {
            "data": {
                "city": "Washington",
                "country": "USA",
                "fullAddress": "1600 Pennsylvania Ave NW, Washington, DC 20500, United States",
                "houseNumber": 1600,
                "matchLevel": "Address",
                "position": {
                    "lat": 38.89768,
                    "lng": -77.03655
                },
                "postal": "20500",
                "score": 100,
                "state": "DC",
                "street": "Pennsylvania Ave NW"
            }
        }
    },
    "success": true
}
```

```
{
    "api_info": {
        "method": "POST",
        "request_id": "fcad404b-ea52-429e-8989-40df1daccf4b",
        "uri": "/core/batchgeocode/3"
    },
    "baseUrl": "https://sfmapsgateway-uengage1.sfdc-lywfpd.svc.sfdcfc.net/core/batchgeocode/3",
    "error": {
        "data": {
            "minimum": 1,
            "property": "root map"
        },
        "message": "Property mimimum not met"
    },
    "error_code": "GC-1011"
}
```
