---
title: "Get the Boundary Information"
domain: maps-developer-guide
topic: get-the-boundary-information
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.779Z
estimatedTokens: 448
keywords: [Boundary, GetBoundaryInformation, Apex, geographical, IDs, locations, fit, search, criteria, Sample, Code]
---

# Get the Boundary Information

> The GetBoundaryInformation() Apex
      method returns geographical IDs of locations that fit the specified search
    criteria.

# Get the Boundary Information

The GetBoundaryInformation() Apex method returns geographical IDs of locations that fit the specified search criteria.

Salesforce Maps works with data providers that supply property data. Periodically, these providers update their data, which can affect custom code. If the providers change their data formats, update your custom code accordingly. Salesforce Maps can update, replace, or remove property data at any time.

## Signature

```

```

Where,

-   maps is the namespace of the Salesforce Maps package. It’s automatically available when the package is installed.
-   API is the class that contains the global methods exposed to developers.
-   GetBoundaryInformation() is the method.

## Sample Code

This code finds the geographical IDs of states in the USA beginning with “A”.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=maps_developer_guide)

#### Warning

If you invoke methods within a flow, process builder, or trigger, avoid uncommitted work errors when you perform one of the following.

-   Call the methods through a future method
-   Call the methods as queueable

Uncommitted work errors can also arise if calling out to Salesforce Maps methods more than one time in a single transaction and the Salesforce Maps token hasn’t refreshed in the last 24 hours. If these errors occur, separate each callout into individual transactions.

Different processes refresh the token, such as plotting a route or schedule. The refresh process is almost immediate after each qualifying action occurs.

**Example**

```

```

## Sample Response

Although the return value is an Apex Map<String, Object> object, this JSON response illustrates the essential data you receive in the resulting map.

```

```

## Code Examples

```apex
Map<String, Object> maps.API.GetBoundaryInformation(String parameters)
```

```apex
// Create the search criteria in JSON format.
String parameters = '{"overlay":"USA","level":"1","filters":[{"field_id":"label","operator":"starts with","values":["A"]}]}';

// Call the GetBoundaryInformation() method with the search criteria.
Map<String, Object> response= maps.API.GetBoundaryInformation(parameters);

// Log the resulting Geo IDs.
system.debug(response);
```

```
{
  "endPoint": "https://internal.na.sfmapsapi.com/boundary/search/1",
  "limitInfo": {
    "QueryRows": "12 / 50000",
    "Queries": "8 / 100",
    "HeapSize": "71096 / 6000000",
    "CPUTime": "133 / 10000"
  },
  "request": "{"overlay":"USA","level":"1","filters":[{"field_id":"label","operator":"starts with","values":["A"]}]}",
  "params": {
    "filters": [
      {
        "values": [
          "A"
        ],
        "operator": "starts with",
        "field_id": "label"
      }
    ],
    "level": "1",
    "overlay": "USA"
  },
  "success": true,
  "data": {
    "geoids": [
      {
        "label": "Alabama",
        "value": "USA-01"
      },
      {
        "label": "Alaska",
        "value": "USA-02"
      },
      {
        "label": "Arizona",
        "value": "USA-04"
      },
      {
        "label": "Arkansas",
        "value": "USA-05"
      }
    ]
  }
}
```
