---
title: "getSignedRecordingUrl"
domain: service-connector-api-developer-guide
topic: getsignedrecordingurl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.412Z
estimatedTokens: 205
keywords: [getSignedRecordingUrl, signed, recording, URL]
---

# getSignedRecordingUrl

> Get the signed recording URL.

# getSignedRecordingUrl

Get the signed recording URL.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=service_connector_api_developer_guide)

#### Note

You need to enable the signedUrl capability in the rep config to use this feature.

## Signature

getSignedRecordingUrl(recordingUrl, vendorCallKey, callId) → Promise.<[SignedRecordingUrlResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_signedrecordingurlresult.htm "Represents the result when getting the signed recording URL.")\>

## Parameters

| Field | Details |
| --- | --- |
| recordingUrl | TypestringDescriptionThe URL for the recording. |
| vendorCallKey | TypestringDescriptionVendor call key. |
| callId | TypestringDescriptionID of the call. |

## Related Topics

- SignedRecordingUrlResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_signedrecordingurlresult.htm)
