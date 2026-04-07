---
title: "GET /ott/v1/registration/{platform}/{ottPropertyId}"
domain: mc-apis
topic: get-ottv1registrationplatformottpropertyid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:19.995Z
estimatedTokens: 434
keywords: [ott, registration, platform, ottPropertyId, Retrieves, registered, **Overview**, Usage, Retrieve, Messenger, Resource, LINE]
---

# GET /ott/v1/registration/{platform}/{ottPropertyId}

> Retrieves information about a registered OTT property by Platform and ID.

# GET /ott/v1/registration/{platform}/{ottPropertyId}

## **Overview**

Retrieves information about a registered OTT property by Platform and ID.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| platform | string | Required | OTT Platform Name of the property. |
| ottPropertyId | string | Required | ID of the OTT property |

## Usage

### Example Request: Retrieve a Messenger Resource

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /ott/v1/registration/messenger/1732555047025799
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response: Retrieve a Messenger Resource

```
HTTP/1.1 200 OK

{
    "ottPlatformName" : "messenger",
    "ottPlatformAttributes" : {
        "applicationId" : "1093076390764037",
        "pageId" : "1732555047025799",
        "pageName" : "SFMC Engineers",
        "endpointUrl" : "https://example.com/1732555047025799",
        "isTransactional" : true,
        "isTestChannel": false,
        "isActive": true,
        "apiVersion" : "v2.0"
    }
}
```

### Example Request: Retrieve a LINE Resource

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /ott/v1/registration/line/1093076390764037
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response: Retrieve a LINE Resource

```
HTTP/1.1 200 OK

{
    "ottPlatformName" : "line",
    "ottPlatformAttributes" : {
        "channelId" : "1093076390764037",
        "channelName" : "SFMC Engineers",
        "endpointUrl" : "https://example.com/1732555047025799",
        "isTransactional" : true,
        "isTestChannel": false,
        "isActive": true,
        "apiVersion" : "v2.0"
    }
}
```

Last Updated: Jun 8, 2021
