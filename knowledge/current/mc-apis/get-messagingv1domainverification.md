---
title: "GET /messaging/v1/domainverification"
domain: mc-apis
topic: get-messagingv1domainverification
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:16.711Z
estimatedTokens: 598
keywords: [messaging, domainverification, Retrieve, verified, domains, particular, account, **Overview**, Marketing, Cloud, Permissions, Scope, Collection, Items]
---

> Retrieve a list of verified domains for a particular account.

# GET /messaging/v1/domainverification

## **Overview**

Retrieve a list of verified domains for a particular account.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| $page | string |  | Number of pages to retrieve |
| $pagesize | string |  | Number of records per page |
| $orderBy | string |  | Specify how to order the results. The default value is 'domainType%20ASC%20'. |
| $filter | string |  | Filter the results using a simple operator and value. |

## Usage

### Required Marketing Cloud Permissions

-   Administration, Access

### Required Scope

-   Account Settings, Read and Write
-   From Address Management, Read and Write

### Example Request (Get Collection)

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /messaging/v1/domainverification/?$page=1$pagesize=25$orderBy=domainType%20ASC%20$filter=Status in ('Verify')
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "page": "1",
    "pageSize": "25",
    "count": "2",
    "items": [
        {
        "enterpriseId": 10650010,
        "domain": "noreply.salesforce.com",
        "status": "Verified",
        "domainType": "SAP",
        "isSendable": true,
        "memberId": 10650010,
        "emailSendTime": "2017-08-24T11:39:29.61"
        },
        {
        "enterpriseId": 10650010,
        "domain": "test@test.com",
        "status": "Verified",
        "domainType": "UserDomain",
        "isSendable": true,
        "memberId": 10650010,
        "emailSendTime": "2017-08-29T15:30:52.657"
        }
    ]
}
```

### Example Response

```js
HTTP/1.1 200 OK
{
    "page": "1",
    "pageSize": "25",
    "count": "2",
    "items": [
        {
        "enterpriseId": 10650010,
        "domain": "noreply.salesforce.com",
        "status": "Verified",
        "domainType": "SAP",
        "isSendable": true,
        "memberId": 10650010,
        "emailSendTime": "2017-08-24T11:39:29.61"
        },
        {
        "enterpriseId": 10650010,
        "domain": "test@test.com",
        "status": "Verified",
        "domainType": "UserDomain",
        "isSendable": true,
        "memberId": 10650010,
        "emailSendTime": "2017-08-29T15:30:52.657"
        }
    ]
}
```

## Related Items

-   [Domain Verification in Salesforce Help](https://help.salesforce.com/articleView?id=mc_es_domain_verification.htm&type=5)

Last Updated: Jun 8, 2021
