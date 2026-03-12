---
title: "Get Report Data"
domain: retail-api
topic: get-report-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.850Z
estimatedTokens: 213
keywords: [Report, Data, runtime, display, user-interface]
---

# Get Report Data

> Get runtime report data for display on the
    user-interface.

# Get Report Data

Get runtime report data for display on the user-interface.

Resource

```

```

Available version

55.0

Request Parameters

| Property Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| filters | Map<String, Object> | Specify filters for the report execution. For more information on the report filters, see Consumer Good Cloud Real Time Reporting Developer Guide. | Required |
| reportName | String | Report name to execute. The Report name must exist on the target Sales org. | Required |
| unZippedResponse | String | Report data without compressing the reponse. Always send true from APEX. | Required |
| productIdsForApex | Boolean | Indicates whether the product IDs are in a format that can be used by Apex (true) or not (false). Always specify true. | Required |

Apex Request Example

```

```

## Code Examples

```
GET_REPORT_DATA
```

```apex
// Logical endpoint name
String endpointName = 'GET_REPORT_DATA';

// name of the salesorg for which the report should be executed
String salesOrg = '0001';

<namespace>.OffplatformCallout callout = new <namespace>.OffplatformCallout(endpointName,
salesOrg);

// Log Transaction Id
String txId = <namespace>.TransactionHandler.getTransactionIdentifier();

// Execute callout
<namespace>.OffplatformCalloutResponse response = callout.execute(
    txId,
    new Map<String, String>(), // No URL Parameters
    JSON.serialize(
        new Map<String, Object> {
            'unzippedresponse' => 'true', // Required
            'productidsforapex' => true, // Required
            'reportname' => 'Promotion Report', // Report to execute
            'filters' => new Map<String, Object> { // Report filters. Filters are dependent on the report definition!
                'periodmonth' => new Map<String, Object> {
                    'start' => 0,
                    'total' => 12,
                    'year' => 2022
                },
                'accountsfids' => new List<String> {'001TC000000Ot6mYAC'},
                'productsfids' => new List<String> {'01tTC0000001oHLYAY'},
                'promo_templatesfid' => new List<String> {'a2UTC00000017Hd2AI', 'a2UTC00000017Hb2AI'},
                'promo_phase' => new List<String> {
                    'Planning',
                    'Modeling',
                    'Committed',
                    'ForApproval'
                },
                'productlevel'=> 'product'
            }
            
        }
    )
);

if (response.status != 200) {
    // Handle error and return error info to caller
}

// Deserialize Response
Map<String, Object> report = (Map<String, Object>) JSON.deserializeUntyped(response.result);

// The names of the components come from the uimapping section of the 
// report definition. The UI components defined in the report definition will be present
// in the result

// ScoreCard component is represented by an array of decimals.
// Each value matches the kpi defined in the report configuration inside the "scorecard"
// KPI Group under attributes->kpidimension
// the matching is index based (Kpi in first position is index 0)
List<Object> scoreCard = (List<Object>) report.get('ScoreCard');

// Flatlist components are represented by an object with a header and data property.
// header property contains all the column headers
// data property is an array of arrays. Each outer
// array represents a row and inner array represent column values
// The 3 first elements of each row are reserved
// - Index 0 represent the row type. All row types can be mapped with the "rowTypeMapping"
// Present in the response.
// All product related ids use a shorter format. These product ids can be mapped
// to SFDC Product2 ids by using the "internalIdToSfId" property of the reponse

Map<String, Object> prodIdToSFIdMap = (Map<String, Object>) report.get('internalIdToSfId');

Map<String, Object> flatlist = (Map<String, Object>) report.get('FlatList');
List<Object> header = (List<Object>) flatlist.get('header');
Map<String, Object> rowTypeMapping = (Map<String, Object>) flatlist.get('rowTypeMapping');
List<Object> data = (List<Object>) flatlist.get('data');

// extract header names
List<String> headerNames = new List<String>();
for (Object obj: header) {
    Map<String, Object> casted = (Map<String, Object>) obj;
    headerNames.add(String.valueOf(casted.get('name')));
}

// Print all the data
for (Integer i = 0; i < data.size(); ++i) {
    system.debug('Printing Row #' + i);
    List<Object> dataRow = (List<Object>) data.get(i);

    // print rowTypeMapping
    System.debug('RowType: ' + String.valueOf(rowTypeMapping.get(String.valueOf(dataRow.get(1)))));

    for (Integer j = 0; j < headerNames.size(); ++j) {
        String headerName = headerNames.get(j);
        Object dataCell = dataRow.get(j + 3); // Offset by 3
        if (headerName.startsWith('productdimension') 
            && dataCell != null
            && prodIdToSFIdMap.containsKey(String.valueOf(dataCell))) {
            dataCell = prodIdToSFIdMap.get(String.valueOf(dataCell));
        }
        System.debug(headerName + ': ' + dataCell);
    }
}
```
