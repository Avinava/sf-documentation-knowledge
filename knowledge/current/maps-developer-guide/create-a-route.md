---
title: "Create a Route"
domain: maps-developer-guide
topic: create-a-route
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.761Z
estimatedTokens: 431
keywords: [Route, CreateRoute, Apex, creates, record, includes, waypoints, reps, access, Salesforce, Maps, doesn't, include, Allocations, Sample]
---

# Create a Route

> The CreateRoute() Apex method
      creates a record that includes a list of waypoints that reps access in Salesforce Maps. The
      record doesn't include a route between waypoints.

# Create a Route

The CreateRoute() Apex method creates a record that includes a list of waypoints that reps access in Salesforce Maps. The record doesn't include a route between waypoints.

## Signature

```

```

Where,

-   maps\_\_Route\_\_c is a Salesforce Maps route record containing a list of waypoints.
-   maps is the namespace that's available after you install Salesforce Maps.
-   API is the class that contains the global methods exposed to developers.
-   CreateRoute() is the method.

## Allocations

This method requires 2–25 waypoints.

## Sample Code

This code returns a maps\_\_Route\_\_c record of waypoints of accounts with billing addresses in Atlanta.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=maps_developer_guide)

#### Warning

If you invoke methods within a flow, process builder, or trigger, avoid uncommitted work errors when you perform one of the following.

-   Call the methods through a future method
-   Call the methods as queueable

Uncommitted work errors can also arise if calling out to Salesforce Maps methods more than one time in a single transaction and the Salesforce Maps token hasn’t refreshed in the last 24 hours. If these errors occur, separate each callout into individual transactions.

Different processes refresh the token, such as plotting a route or schedule. The refresh process is almost immediate after each qualifying action occurs.

**Input Format of Waypoints**

```

```

**Example**

```

```

## Sample Response

This method returns a maps\_\_Route\_\_c record, which inserts the waypoints that appear in Salesforce Maps. This JSON response illustrates the essential data stored in the route record.

```

```

## Code Examples

```
maps__Route__c maps.API.CreateRoute(map<string,object> options)
```

```
{
version: '1', // Required. Version of the API endpoint. Must be '1'.
name: 'String', // Name of the new route record.
date: Date, // Time and date in Epoch format that the route is created for. Default is the current time and date.
waypoints: [ {recordId:String, lat:Decimal, lng:Decimal, address:String, order: Integer, baseobjectid: String, markerlayerid: String, notes:String}, {...} ] // List of waypoint objects.
}
```

```apex
// Create a list of waypoints.
List<Map<String,Object>> waypoints = new List<Map<String,Object>>();

// Retrieve the list of billing addresses from the database and
// add them to the waypoints object.
List<Account> accountList = [Select Id,BillingStreet,BillingCity,BillingState,BillingPostalcode, BillingLatitude,BillingLongitude From Account Where BillingCity = 'Atlanta' LIMIT 25];

for(Integer i = 0; i < accountList.size(); i++){
    Account thisAccount = accountList[i];
    String address = thisAccount.BillingCity + ', ' + thisAccount.BillingState + ' ' + thisAccount.BillingPostalCode;
    waypoints.add(new Map<String,Object>{
        'lat' => thisAccount.BillingLatitude,
        'lng' => thisAccount.BillingLongitude,
        'address' => address,
        'recordId' => thisAccount.id,
        'baseobjectid' => 'a0N0t000002hEyvEAE',
        'markerlayerid' => 'a0v0t000001wE91AAE',
        'order' => i + 1
    });
}

// Build the request.
Map<String,Object> request = new Map<String,Object>();
request.put('version','1');
request.put('name','Atlanta Accounts Route');
request.put('waypoints',waypoints);

// Call the CreateRoute() method with the waypoints.
maps__Route__c response = maps.API.CreateRoute(request);

// Log the route record output in JSON format.
system.debug(JSON.serialize(response));
```

```
{
  "attributes": {
    "type": "maps__Route__c",
    "url": "/services/data/v51.0/sobjects/maps__Route__c/a0y0t000001ht8HAAQ"
  },
  "Name": "Atlanta Accounts Route",
  "maps__Date__c": "2021-05-04",
  "Id": "a0y0t000001ht8HAAQ"
}
```
