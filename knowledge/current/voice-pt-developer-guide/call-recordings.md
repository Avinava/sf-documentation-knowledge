---
title: "Call Recordings"
domain: voice-pt-developer-guide
topic: call-recordings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.125Z
estimatedTokens: 1828
keywords: [Call, Recordings, voice, supports, recording, participant, added, component, calls, updated, URL, duration, getSignedRecordingUrl, Pause, Resume]
---

# Call Recordings

> Each voice call supports one call recording. If a participant is added to the call, each
  of the component voice calls can be updated to list the recording URL and duration
  details.

# Call Recordings

Each voice call supports one call recording. If a participant is added to the call, each of the component voice calls can be updated to list the recording URL and duration details.

During the [Post-Call CTR Sync](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_setup_post_call_ctr.htm "This API updates a VoiceCall record after the call has ended. Use this API to update call-related parameters that are unavailable during the VoiceCall creation stage, such as callDuration and numberOfHold."), you can call the [Update Voice Call API](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_update.htm) with the following fields to add call recording information to a voice call.

-   **recordingLocation:** A complete call recording URL. This URL belongs to your domain, and can be accessed only if the rep is logged into the telephony system through SSO or a login page. Otherwise, the rep sees a message indicating that they don’t have access or need to log into the phone system. This URL can be a public URL or a URL only accessible through a rep SSO or login page.
-   **totalHoldDuration:** The total number of seconds the call was on hold. If an audio recording doesn’t include hold time, this value is zero.
-   **agentInteractionDuration:** The total number of seconds the call wasn’t on hold.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

The call recording duration shown in the Call Audio Player is the sum of the agentInteractionDurationand and totalHoldDuration values. If this sum doesn’t equal the recording’s actual duration, the recording may appear to end before or after the boundaries of the slider.

![Call audio player window.](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fcall_audio_player.png&folder=voice_pt_developer_guide)The callDurationInSeconds field on voice calls is determined by calculating the difference between the startTime and endTime fields, and is unrelated to call recording duration.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

The date in the top-right corner of the media player is the call’s start time, and it matches the start time shown in the Voice Call details. If the date doesn’t display properly on an inbound call, verify that:

-   The start time is sent correctly when calling the Create Voice Call API
-   The start time in the Voice Call details is correct

**Trusted URL:** To allow recordings to be loaded, add your domain as a Trusted URL in Salesforce Setup. To learn more, see [Manage Trusted URLs](https://help.salesforce.com/articleView?id=trusted_urls_manage.htm&language=en_US).

**Example and testing:** See [Use the Demo Connector](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_demo_connector.htm "The demo connector is a sample application for partner telephony systems that integrate with Service Cloud Voice. It demonstrates an optimal Voice implementation based on a group of telephony API mocks. It also includes a voice call simulation tool that you can use to test call actions such as making and answering calls and using phone controls.") for a demonstration of calling [Update Voice Call API](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_update.htm) with a recording URL and duration details. The recording link is capped at 1,000 characters and should not exceed this length. The Call Recording section in the Voice Call Simulator lets you experiment with the recording feature.![Call recording window.](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fcall_recording.png&folder=voice_pt_developer_guide)

## getSignedRecordingUrl

In order to provide recording URLs based on the vendorCallKey, Salesforce Voice Call ID, or recordingUrl inserted via [Update Voice Call API](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_update.htm), vendors can implement Service Cloud Connector API getSignedRecordingUrl in their connectors. This API accepts vendorCallKey, callId, recordingUrl as parameters and returns a SignedRecordingUrlResult object.

The vendor specifies hasSignedRecordingUrl as true. When the recording component loads, Salesforce issues a request to the Service Cloud Connector API getSignedRecordingUrl to get the recording URL for the Voice Call. Using this method, the vendor can provide updated recording URLs when requested by the Voice Call Recording component.

```

```

## Pause and Resume Recording

Reps can pause and resume recording while on a call. This feature can be used when call participants want to share confidential details and don’t want them to be recorded.

Implement these Service Cloud Connector APIs to allow users to pause and resume recording:

-   pauseRecording(call)
-   resumeRecording(call)

![Omni-Channel utility with recording button highlighted.](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fcall_control_recording.png&folder=voice_pt_developer_guide)

## Universal Call Recording Playback

Contact centers can be configured so that you can share voice calls (and the associated voice call recordings) with other users in your contact center. This feature can be enabled with the **Universal Call Recording Access** checkbox on the contact center record details page.

To view this configuration setting, the following requirements must be met:

1.  Partners must set the supportsUniversalCallRecordingAccess capability to true in their ConversationVendorInfo object.
2.  The contact center should be connected to the partner telephony system.
3.  The Apex integration class must implement the RecordingMediaProvider interface. This interface includes the getSignedUrls method, which is called to fetch the signed recording URL from the partner telephony system for loading the voice call recording playback.

After these requirements are met, check **Let any Salesforce user listen to this contact center’s recordings**.

![Universal call recording checkbox](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fvoice_pt_universal_call_recording.png&folder=voice_pt_developer_guide)

When a warning dialog appears, click **Allow**.

![Allow universal call recording](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fvoice_pt_universal_call_recording_allow.png&folder=voice_pt_developer_guide)

#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: Get Started with the Service Cloud Connector API](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_get_started.hm "Service Cloud Connector API Reference: Get Started with the Service Cloud Connector API - HTML (New Window)")

## Code Examples

```
// Create a signed recording url capability 
function getCapabilities() {
   return new CapabilitiesResult({
        hasSignedRecordingUrl: true
   });
}

function getSignedRecordingUrl(recordingUrl, vendorCallKey, callId) {
   // Implementation goes in here
}
```

## Related Topics

- Post-Call CTR Sync (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_setup_post_call_ctr.htm)
- Use the Demo Connector (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_demo_connector.htm)
