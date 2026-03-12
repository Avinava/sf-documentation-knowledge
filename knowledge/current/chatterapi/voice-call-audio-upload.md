---
title: "Voice Call Audio Upload"
domain: chatterapi
topic: voice-call-audio-upload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:17.012Z
estimatedTokens: 276
keywords: [Voice, Call, Audio, Upload, recording]
---

# Voice Call Audio Upload

> Upload an audio recording of a voice call.

# Voice Call Audio Upload

Upload an audio recording of a voice call.

To upload an audio binary file that resides locally, send it in a multipart/form-data request with the audioFileData header parameter in the binary upload body part of the request. To upload an audio file that resides on a third-party vendor’s system, use the recordingURL and name request parameters for the URL and named credential, respectively.

For information about how to create the multipart/form-data message, see [Inputs and Binary File Upload Examples](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm "Make HTTP POST, PATCH, and PUT requests using inputs and learn more about uploading binary files.").

Resource

```

```

Available version

49.0

HTTP methods

POST

Request parameters for POST

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | Named credential used to authenticate to the third-party vendor’s system. | Optional | 57.0 |
| recordingURL | String | URL of the signed link where the audio file resides. | Optional | 57.0 |

## Code Examples

```
/voicecalls/voiceCallId/audio_upload
```

## Related Topics

- Inputs and Binary File Upload Examples (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
