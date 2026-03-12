---
title: "Engagement Signals"
domain: chatterapi
topic: engagement-signals
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.229Z
estimatedTokens: 848
keywords: [Engagement, Signals]
---

# Engagement Signals

> Create, list, get, and delete Engagement Signals.

# Engagement Signals

Create, list, get, and delete Engagement Signals.

Resource

This resource is applicable for POST method.

```

```

This resource is applicable for GET (collection) method.

```

```

The query parameters can include the API name of the data space, the API name of the profile data graph, a limit for the number of engagement signals returned, and the number of engagement signals to skip before the return.

This resource is applicable for GET (single) and DELETE methods.

```

```

The idOrName property is the ID or API name of the engagement signal.

Resource example

This example shows a sample resource applicable for POST method.

```

```

This example shows a sample resource applicable for GET (collection) method.

```

```

This example shows a sample resource applicable for GET (single) and DELETE methods.

```

```

Available version

63.0

HTTP methods

GET, POST, DELETE

Request Body for POST

JSON Example

```

```

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The API name of the Engagement Signal. | Required | 63.0 |
| label | String | The label of the Engagement Signal. | Required | 63.0 |
| objectName | String | The API name of the Content Object DMO with the Engagement Signal. | Required | 63.0 |
| dataSpaceName | String | The API name of the Data Space associated with the Engagement Signal. | Required | 63.0 |
| timestampField | Field Input | DateTime field on the content object DMO or its related DMO. | Required | 63.0 |
| userIdField | Field Input | A field on the content object DMO or its related DMO. | Required | 63.0 |
| uniqueIdentifierField | Field Input | A field on the content object DMO or its related DMO. | Required | 63.0 |
| catalogIdField | Field Input | A field on the content object DMO or its related DMO. | Optional | 63.0 |
| distinctFields | Field Input[] | Fields on the content object DMO or its related DMOs. | Optional | 63.0 |
| filterGroups | Engagement Signal Filter Group Collection Input | Engagement Signal Filter Group Collection. | Optional | 63.0 |
| metrics | Engagement Signal Metric Collection Input | Engagement Signal Metrics. | Optional | 63.0 |
| parameters | Engagement Signal Parameter Collection Input | Engagement Signal Parameters. | Optional | 63.0 |

Response body for POST

[Engagement Signal](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_engagement_signal.htm "Response body for an Engagement Signal.")

Query Parameters for GET (collection)

| Name | Type | Description | Required or Optional | AVAILABLE VERSION |
| --- | --- | --- | --- | --- |
| dataspaceName | String | API name of the Data Space to filter by. | Optional | 63.0 |
| profileDataGraphName | String | API name of the Profile Data Graph to filter by. | Optional | 63.0 |
| limit | Integer | Maximum number of items to return. | Optional | 63.0 |
| offset | Integer | Number of items to skip before starting to collect the result set. | Optional | 63.0 |

Response body for GET (collection)

[Engagement Signal Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_engagement_signal_collection.htm "List of Engagement Signals.")

Response body for GET (single)

[Engagement Signal](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_engagement_signal.htm "Response body for an Engagement Signal.")

## Code Examples

```
/personalization/engagement-signals
```

```
/personalization/engagement-signals?queryparameters
```

```
/personalization/engagement-signals/idOrName
```

```
https://yourInstance.salesforce.com​/services/data​/v66.0/personalization/engagement-signals
```

```
https://yourInstance.salesforce.com​/services/data​/v66.0/personalization/engagement-signalspersonalization/engagement-signals?dataspaceName=default&profileDataGraphName=validProfileDG&batchSize=25&offset=0
```

## Related Topics

- Field Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_engagement_signal_field_input.htm)
- Engagement Signal Filter Group Collection
                      Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_engagement_signal_filter_group_input.htm)
- Engagement Signal Metric Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_engagement_signal_metric_collection_input.htm)
- Engagement Signal Parameter Collection
                      Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_engagement_signal_parameter_collection_input.htm)
- Engagement Signal (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_engagement_signal.htm)
- Engagement Signal Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_engagement_signal_collection.htm)
