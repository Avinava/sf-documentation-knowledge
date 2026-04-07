---
title: "GET /ott/v1/registration/{platform}"
domain: mc-apis
topic: get-ottv1registrationplatform
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:15.012Z
estimatedTokens: 922
keywords: [ott, registration, platform, Retrieves, paginated, collection, registered, **Overview**, Retrieve, Messenger, Resource, LINE]
---

> Retrieves paginated collection of registered OTT properties by OTT Platform.

# GET /ott/v1/registration/{platform}

## **Overview**

Retrieves paginated collection of registered OTT properties by OTT Platform.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| platform | string | Required | OTT Platform Name of property |
| $page | number |  | Page number to return from the paged results. Start with 1 and continue until you get zero results. Typically provided along with the $pagesize parameter. |
| $pagesize | number |  | Number of results per page to return. Typically provided along with the $page parameter. |

## Usage

### Example Request: Retrieve Messenger Resource Collection

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /ott/v1/registration/messenger
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response: Retrieve Messenger Resource Collection

```
HTTP/1.1 200 OK

{
    "count": 2,
    "page": 1,
    "pageSize": 50,
    "links": {
        "self": {
            "href": "/v1/registration/messenger?%24page=1&%24pagesize=50"
        },
        "next": {
            "href": "/v1/registration/messenger?%24page=2&%24pagesize=50"
        }
    },
    "items": [
        {
            "ottPlatformName" : "messenger",
            "ottPlatformAttributes" : {
                "applicationId" : "34234534532453",
                "pageId" : "2343543434231436453",
                "pageName" : "SFMC Engineers",
                "endpointUrl" : "https://example.com/23534564423435",
                "isTransactional" : true,
                "isTestChannel": false,
                "isActive": true,
                "apiVersion" : "v2.0"
            }
        },
        {
            "ottPlatformName" : "messenger",
            "ottPlatformAttributes" : {
                "applicationId" : "1232134234",
                "pageId" : "21342354235",
                "pageName" : "Some Awesome Page",
                "endpointUrl" : "https://example.com/3124234234",
                "isTransactional" : true,
                "isTestChannel": false,
                "isActive": true,
                "apiVersion" : "v2.0"
            }
        }
    ]
}
```

### Example Request: Retrieve LINE Resource Collection

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /ott/v1/registration/line?$page=1&$pagesize=50
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response: Retrieve LINE Resource Collection

```
HTTP/1.1 200 OK

{
    "count": 2,
    "page": 1,
    "pageSize": 50,
    "links": {
        "self": {
            "href": "/v1/registration/line?%24page=1&%24pagesize=50"
        },
        "next": {
            "href": "/v1/registration/line?%24page=2&%24pagesize=50"
        }
    },
    "items": [
        {
            "ottPlatformName" : "line",
            "ottPlatformAttributes" : {
                "channelId" : "342135435345",
                "channelName" : "SFMC Engineers",
                "endpointUrl" : "https://example.com/213234231213",
                "isTransactional" : true,
                "isTestChannel": false,
                "isActive": true,
                "apiVersion" : "v2.0"
            }
        },
        {
            "ottPlatformName" : "line",
            "ottPlatformAttributes" : {
                "channelId" : "324345436452342345",
                "channelName" : "Some Awesome Channel",
                "endpointUrl" : "https://example.com/3124325345234234",
                "isTransactional" : true,
                "isTestChannel": false,
                "isActive": true,
                "apiVersion" : "v2.0"
            }
        }
    ]
}
```

Last Updated: Jun 8, 2021
