---
title: "Retrieve Data That Salesforce Maps Hosts"
domain: maps-developer-guide
topic: retrieve-data-that-salesforce-maps-hosts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.798Z
estimatedTokens: 714
keywords: [Retrieve, Data, Salesforce, Maps, Hosts, GetHostedData, Apex, retrieves, geographical, IDs, displays, accomplish, retrieval, two, requests]
---

# Retrieve Data That Salesforce Maps Hosts

> The GetHostedData() Apex method
      retrieves geographical IDs for properties and displays them in Salesforce Maps. We
    accomplish this retrieval in two requests while using the same method. The first request returns
    geographical IDs for properties that Salesforce Maps hosts for a specified area and filter
    criteria. The second request takes these geographical IDs and display parameters, such as legend
    and popup information, and displays them in Salesforce Maps.

# Retrieve Data That Salesforce Maps Hosts

The GetHostedData() Apex method retrieves geographical IDs for properties and displays them in Salesforce Maps. We accomplish this retrieval in two requests while using the same method. The first request returns geographical IDs for properties that Salesforce Maps hosts for a specified area and filter criteria. The second request takes these geographical IDs and display parameters, such as legend and popup information, and displays them in Salesforce Maps.

Salesforce Maps works with data providers that supply property and business data. Periodically, these providers update their data, which can affect custom code. If the providers change their data formats, update your custom code accordingly. Salesforce Maps can update, replace, or remove property data at any time.

## Signature

```

```

Where,

-   maps is the namespace that's available after you install Salesforce Maps.
-   API is the class that contains the global methods exposed to developers.
-   GetHostedData() is the method.

## Sample Code to Retrieve Geographical IDs

The first example request using the GetHostedData() method returns geographical IDs for women-owned businesses that Salesforce Maps host. Those businesses produce revenue between $100,000 and $1,000,000 in a specified area.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=maps_developer_guide)

#### Warning

If you invoke methods within a flow, process builder, or trigger, avoid uncommitted work errors when you perform one of the following.

-   Call the methods through a future method
-   Call the methods as queueable

Uncommitted work errors can also arise if calling out to Salesforce Maps methods more than one time in a single transaction and the Salesforce Maps token hasn’t refreshed in the last 24 hours. If these errors occur, separate each callout into individual transactions.

Different processes refresh the token, such as plotting a route or schedule. The refresh process is almost immediate after each qualifying action occurs.

**Input Format of the Parameters**

```

```

**Example**

```

```

## Sample Response of Geographical IDs

Although the return value is an Apex Map<String, Object> object, this JSON response illustrates the essential data you receive in the resulting map.

```

```

## Sample Code to Display Geographical IDs

The second request using the GetHostedData() method takes the geographical IDs and display parameters, such as legend and popup information, and displays them in Salesforce Maps.

**Input Format of the Parameters**

```

```

**Example**

```

```

## Sample Response of Displaying the Geographical IDs

Although the return value is an Apex Map<String, Object> object, this JSON response illustrates the essential data you receive in the resulting map.

```

```

## Code Examples

```apex
Map<String, Object> maps.API.GetHostedData(String parameters)
```

```
{
  "mapinfo": { // Boundary area.
    "offset": integer, // Pagination when the number of results is large.
    "limit": integer, // Maximum number of geographical IDs to return in response.
    "celng": decimal, // Longitude coordinate to search closest records.
    "celat": decimal, // Latitude coordinate to search closest records.
    "swlng": decimal, // South-Western longitude coordinate for map boundary.
    "swlat": decimal, // South-Western latitude coordinate for map boundary.
    "nelng": decimal, // North-Eastern longitude coordinate for map boundary.
    "nelat": decimal  // North-Eastern latitude coordinate for map boundary.
  },
  "data": {
    "filters": [{}], // Filters to limit the results.
    "defaultMarkerColor": "String:String", // Hex color : Type of marker to be returned
    "level_id": "String", // Sub-section of the data specified by file_id.
    "file_id": "String" // Data being queried, for example, business, property, political boundaries, etc.
  }
}
```

```apex
// Create the boundary area.
Map<String,Decimal> mapInfo = new Map<String,Decimal>{
    'nelat' => 49.92293,
    'nelng' => -55.72265,
    'swlat' => 29.49698,
    'swlng' => -140.00976,
    'celat' => 40.48038,
    'celng' => -97.86621,
    'limit' => 6,
    'offset' => 0            
};

// Create the filters.
Map<String,Object> femaleOwned = new Map<String,Object>{
    'topic_id' => 'female_owned',
    'operator' => 'equals',
    'values' => new List<String>{'Yes'}
};
Map<String,Object> locationSalesTotal = new Map<String,Object>{
    'topic_id' => 'location_sales_total',
    'operator' => 'range',
    'min' => '100000',
    'max' => '1000000'
};
    
List<Map<String,Object>> filters = new List<Map<String,Object>>();
filters.add(femaleOwned);
filters.add(locationSalesTotal);

// Add the filters and additional 'data' parameters.
Map<String,Object> dataMap = new Map<String,Object>{
    'filters' => filters,
    'defaultMarkerColor' => '93c47d:Circle',
    'level_id' => '42', 
    'file_id' => 'business'
};   
 
// Build the request.
Map<String,Object> request = new Map<String,Object>();
request.put('data', dataMap);
request.put('mapinfo', mapInfo);
String requestString = JSON.serialize(request);

// Call the GetHostedData() method with the boundary area and filter criteria.
Map<String, Object> response = maps.API.GetHostedData(requestString);

// Log the resulting locations. 
System.debug(JSON.serialize(response));
```

```
{
   "endPoint":"https://internal.na.sfmapsapi.com/data/markers/2",
   "limitInfo":{
      "QueryRows":"12 / 50000",
      "Queries":"8 / 100",
      "HeapSize":"70683 / 6000000",
      "CPUTime":"171 / 10000"
   },
   "request":"{"mapinfo":{"offset":0,"limit":6,"celng":-97.86621,"celat":40.48038,"swlng":-140.00976,"swlat":29.49698,"nelng":-55.72265,"nelat":49.92293},"data":{"filters":[{"values":["Yes"],"operator":"equals","topic_id":"female_owned"},{"max":"1000000","min":"100000","operator":"range","topic_id":"location_sales_total"}],"defaultMarkerColor":"93c47d:Circle","level_id":"42","file_id":"business"}}",
   "params":{
      "data":{
         "file_id":"business",
         "level_id":"42",
         "defaultMarkerColor":"93c47d:Circle",
         "filters":[
            {
               "topic_id":"female_owned",
               "operator":"equals",
               "values":[
                  "Yes"
               ]
            },
            {
               "topic_id":"location_sales_total",
               "operator":"range",
               "min":"100000",
               "max":"1000000"
            }
         ]
      },
      "mapinfo":{
         "nelat":49.92293,
         "nelng":-55.72265,
         "swlat":29.49698,
         "swlng":-140.00976,
         "celat":40.48038,
         "celng":-97.86621,
         "limit":6,
         "offset":0
      }
   },
   "success":true,
   "data":{ // List of geographical IDs.
      "ids":[
         "11140017125231",
         "11140017127280",
         "11140017102994",
         "11140017127285",
         "11132553548894",
         "11140017127286"
      ]
   }
}
```

```
{
  "mapinfo": {
    "offset": integer, // Pagination when the number of results is large.
    "limit": integer, // Maximum number of geographical IDs to return in response.
    "celng": decimal, // Longitude coordinate to search closest records.
    "celat": decimal, // Latitude coordinate to search closest records.
    "swlng": decimal, // South-Western longitude coordinate for map boundary.
    "swlat": decimal, // South-Western latitude coordinate for map boundary.
    "nelng": decimal, // North-Eastern longitude coordinate for map boundary.
    "nelat": decimal  // North-Eastern latitude coordinate for map boundary.
  },
  "data": {
    "popup": { // Popup information for the displayed locations.
      "tabs": [{}],// Array of tab objects to be displayed in the popup.
      "header": [{}] // Array of objects containing information of the tab headers.
    },
    "legend": { // Map legend.
      "rows": [{}], // Array of objects containing information of each row in the legend.
      "subTitle": "String", // Subtitle of the legend.
      "title": "String" // Title of the the legend.
    },
    "defaultMarkerColor": "String:String", // Hex color : Type of marker to be returned.
    "level_id": "String", // Sub-section of the data specified by file_id.
    "file_id": "String" // Data being queried, for example, business, property, political boundaries, etc.
  },
  "aggregates": Boolean, // Aggregated data of all the records returned. It contains the min, max, sum, and averages of the records.
  "details": Boolean, // Return the details for the requested records.
  "ids": [] // Array of geographical IDs.
}
```
