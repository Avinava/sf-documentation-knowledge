---
title: "ConnectApi.ErrorOutputRepresentation"
domain: insurance-developer-guide
topic: connectapierroroutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.452Z
estimatedTokens: 127
keywords: [ConnectApi.ErrorOutputRepresentation, Output, representation, error, encountered, processing]
---

# ConnectApi.ErrorOutputRepresentation

> Output representation details of the error encountered while processing the
    request.

# ConnectApi.ErrorOutputRepresentation

Output representation details of the error encountered while processing the request.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| detail | String | Description of the error. | 63.0 |
| errors | List<ConnectApi.Error​DetailsOutput​Representation> | Output representation of the error details. | 63.0 |
| instance | String | Instance where the error occurred. | 63.0 |
| title | String | Short label of the error type. | 63.0 |

## Related Topics

- ConnectApi.Error​DetailsOutput​Representation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_error_details_output.htm)
