---
title: "SignedRecordingUrlResult"
domain: service-connector-api-developer-guide
topic: signedrecordingurlresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.620Z
estimatedTokens: 185
keywords: [SignedRecordingUrlResult, result, getting, signed, recording, URL, Functions]
---

# SignedRecordingUrlResult

> Represents the result when getting the signed recording
        URL.

# SignedRecordingUrlResult

Represents the result when getting the signed recording URL.

## Constructor

new SignedRecordingUrlResult(param)

## Functions Where Used

-   [getSignedRecordingUrl()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getsignedrecordingurl.htm "Get the signed recording URL.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionThe signed recording result. |
| param.success | TypebooleanDescriptionIndicates whether the function succeeded. |
| param.url | TypestringDescriptionOptional. The URL for the signed recording. |
| param.duration | TypenumberDescriptionOptional. Recording duration in seconds. |

## Related Topics

- getSignedRecordingUrl() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getsignedrecordingurl.htm)
