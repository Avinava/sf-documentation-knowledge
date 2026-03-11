---
title: "Use the Consent API with Data 360"
domain: rest-api
topic: use-the-consent-api-with-data-360
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.339Z
keywords: [Consent, API, Data, 360, Note, Required, Permissions, Actions, Supported, Read, Parameters, Syntax, Example, Write]
---

# Use the Consent API with Data 360

# Use the Consent API with Data 360

The Consent API supports Data 360. Use the Consent API to read and write to the Data 360 profile. Contact your Salesforce Representative for consumer rights guidance within Data 360.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

The response for Consent API requests can include a 200 status code even if errors are returned.

## Required Permissions

To use Data 360 parameters for Consent API, you must have either the ModifyAllData or the ConsentApiUpdate user permission. Requiring a perm ensures that the Salesforce admin gives explicit permission. These parameters write org-wide consent data, such as links between records and the value of consent flags, which are usually inaccessible to non-admin users.

## Actions Supported by Consent API with Data 360

| Action | Description |
| --- | --- |
| Processing | This action is used to restrict processing of data in Data 360 processes such as query and segmentation. |
| Portability | This action is used to allow export of Data 360 profile data. |
| ShouldForget | This action indicates the right to be forgotten, which means permanently deleting PII (Personally Identifiable Information) data and any related records. After a profile is processed, it can no longer be used again. |

## Data 360 Read Parameters

The Consent API allows you to gather information about the Data 360 profile. Use the mode and ids Data 360 parameters as described below.

## Syntax

HTTP method

GET

Available since release:

48.0

URI

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

You can access the consent API using three different URIs based on the Action. The Actions supported are processing,portability, and shouldforget.

```

```

Request parameters

| Parameter | Description |
| --- | --- |
| ids | Required. Comma-separated list of IDs. The ID provided must be present in a field mapped to Individual.Individual Id. |
| mode | Optional. Default is normal. Valid value to retrieve a Data 360 profile is cdp. |

## Read Example

URI

/services/data/v66.0/consent/action/portability?ids=00932I3SU92&mode=cdp

Response

{ "j00932I3SU92" : { "result" : "Success", "proceed" : { "portability" : "true" "portabilityResult" : "Success" } } }

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

When a profile or Individual ID is created in Data 360, it doesn't have default consent data. Before making a GET request using the Consent API with Data 360 for the first time, you must make a PATCH call to set the consent flag for the profile. See [Consent API call Troubleshooting](https://help.salesforce.com/s/articleView?id=000397169&type=1&language=en_US).

## Write Parameters

The Consent API also allows you to write information to the Data 360 profile. Use the ids, mode, and status parameters as described below.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

You can update your consent information with the consent API using three different URIs. The URIs are based on the action that is to be performed on the Data 360 profile. The actions supported are processing, portability, and shouldforget.

## Syntax

HTTP method

PATCH

Available since release

50.0

URI when action is processing

/services/data/vXX.X/consent/action/processing?ids=list\_of\_ids&mode=cdp&status=optin or optout

Request parameters when action is processing

| Parameter | Description |
| --- | --- |
| ids | Required. Comma-separated list of IDs. The ID provided must be present in a field mapped to Individual.Individual Id. |
| mode | Optional. Default is normal. Valid value to use for updating a Data 360 profile is cdp. |
| status | Required. Status of the consent. Allowed values are optin or optout. However, when action is processing use status as optout. |

URI when action is shouldforget

/services/data/vXX.X/consent/action/shouldforget?ids=list\_of\_ids&mode=cdp&status=optin or optout

Request parameters when action is shouldforget

| Parameter | Description |
| --- | --- |
| ids | Required. Comma-separated list of IDs. The ID provided must be present in a field mapped to Individual.Individual Id. |
| mode | Optional. Default is normal. Valid value to use for updating a Data 360 CDP profile is cdp. |
| status | Required. Status of the consent. Allowed values are optin or optout. However, when action is shouldforget use status as optin. |

URI action is portability

/services/data/vXX.X/consent/action/portability?ids=list\_of\_ids&mode=cdp&status=optin or optout

Request parameters when action is portability

| Parameter | Description |
| --- | --- |
| ids | Required. Comma-separated list of IDs. The ID provided must be present in a field mapped to Individual.Individual Id. |
| mode | Optional. Default is normal. Valid value to use for updating a Data 360 profile is cdp. |
| status | Required. Status of the consent. Allowed values are optin or optout. When action is portability use status as optin. |
| aws_s3_bucket_id | Required only when mode is 'cdp' and the action is 'portability'. This parameter must be passed in as part of the PATCH request body. This parameter is used to pass the S3 bucket location for portability requests to Data 360. |
| aws_access_key_id | Required only when mode is 'cdp' and the action is 'portability'. This parameter must be passed in as part of the PATCH request body. This parameter is used to pass the S3 bucket access key for portability requests to Data 360. |
| aws_secret_access_key | Required only when mode is 'cdp' and the action is 'portability'. This parameter must be passed in as part of the PATCH request body. This parameter is used to pass the S3 bucket secret access key for portability requests to Data 360. |
| aws_s3_folder | Required only when mode is 'cdp' and the action is 'portability'. This parameter must be passed in as part of the PATCH request body. This parameter is used to pass the S3 bucket folder for portability requests to Data 360. |
| aws_region | Required only when mode is 'cdp' and the action is 'portability'. This parameter must be passed in as part of the PATCH request body. This parameter is used to pass the S3 bucket's aws region for portability requests to Data 360. |

## Write Example

When action is processing

```

```

When action is portability

```

```

When action is shouldforget

```

```