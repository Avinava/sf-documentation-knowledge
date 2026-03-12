---
title: "Care Services Review Requests (GET)"
domain: health-cloud-object-reference
topic: care-services-review-requests-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:33.292Z
estimatedTokens: 471
keywords: [Care, Services, Review, Requests]
---

# Care Services Review Requests (GET)

> Get details of existing care services review
    requests.

# Care Services Review Requests (GET)

Get details of existing care services review requests.

Resource

/services/data/vXX.X/connect/health/care-services/{ids}

where ids is the semicolon separated list of IDs. The items in this list can be Salesforce ID, or a SourceSystemIdentifier. Use idName query parameter to specify the type of ids provided in the URI.

URI Example to retrieve care requests using Salesforce IDs:

```

```

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

Ensure that semicolon character is not a part of any id, if using SourceSystemIdentifier to retrieve care requests.

Available version

46.0

Authentication

Use OAuth to connect to Salesforce and get an access token. Pass the access token in your requests. For more information, see [Connect to Connect REST API Using OAuth](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/quickstart_connecting.htm "HTML (New Window)").

HTTP methods

GET

Query parameters

| Parameter Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| idName | String | Indicates the type of identifiers used in the path parameter ids. The valid values are:id: Salesforce object ID.SourceSystemIdentifier: ID of the external system. | Yes | 46.0 |
| sectionNames | String | Semicolon separated list of section names for which data is requested. For example, Subscriber, Patient, CareDiagnoses, CareRequestItems, CareRequestDrugs, TransportLocations, CareRequest, or CareRequestCase. | No | 46.0 |

Response body for GET

[Care Authorization Request Get Result](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_authorization_request_get_result.htm "The response body for the Care Services Review GET request.")

## Code Examples

```
/connect/health/care-services/0Uk7859783498540;0Uk6712899900;0Um4367564378788?idName=Id&sectionNames=Subscriber;CareRequest
```

## Related Topics

- Care Authorization Request Get Result (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_authorization_request_get_result.htm)
