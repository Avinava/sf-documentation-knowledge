---
title: "Named Query API"
domain: rest-api
topic: named-query-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.588Z
estimatedTokens: 356
keywords: [Named, Query, API, it’s, REST, call, endpoint, appear, URI]
---

# Named Query API

> When you create a Named Query API, it’s available as a REST API call. The name of
        the Named Query API defines the endpoint, while parameters appear as URI query parameters.

# Named Query API

When you create a Named Query API, it’s available as a REST API call. The name of the Named Query API defines the endpoint, while parameters appear as URI query parameters.

## Syntax

URI

/services/data/vXX.X/named/query/NQ\_API\_NAME?param\_name=param\_value

Formats

JSON

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| NQ_API_NAME | The name of the Named Query API you want to call. |
| param_name=param_value | A Named Query API parameter and its value. If the Named Query API has multiple parameters, you must include all of them as URI parameters by using the format param_name1=param_value1&param_name2=param_value2Only these literal types are supported for parameter values in a Named Query API request.String (example: name=Acme)Date (example: closedate=2025-10-14)Time (example: endtime=17:30:00-07:00)Datetime (example: date=2025-10-14T09:00:00-07:00)Date Formula (Fixed) (example: createddate=TODAY)Date Formula (Variable) (example: createddate=LAST_N_DAYS:10)Integer (example: quantity=36)Decimal (example: amount=10.99)Boolean (doNotCall=false)Multi-Currency (amount=USD20000) |

## Example

Example Request

This request references the Named Query API GetAccountDetailsFromName. The query parameter name is defined on the Named Query API that generates this sample code.

```

```

Example Response Body

```

```

## Code Examples

```
/services/data/vXX.X/named/query/Get_Account_Details_From_Name?name=Acme
```

```apex
{
    "totalSize": 1,
    "done": true,
    "records": [
        {
            "attributes": {
            "type": "Account",
            "url": "/services/data/v64.0/sobjects/Account/001Ws00003cPDMRIA4"
            },
            "Name": "Acme",
            "Description": "A trendy, fast-casual dining group offering an eclectic mix of globally inspired dishes. Known for its vibrant, urban ambiance and innovative menu, Urban Eats Collective brings city vibes to every meal.",
            "Phone": "214-555-1010",
            "Website": "www.urbaneats.com",
            "NumberOfEmployees": 500,
            "BillingAddress": {
                "city": "Dallas",
                "country": "USA",
                "geocodeAccuracy": null,
                "latitude": null,
                "longitude": null,
                "postalCode": "75219",
                "state": "TX",
                "street": "2401 Victory Avenue"
            }
        }
    ]
}
```
