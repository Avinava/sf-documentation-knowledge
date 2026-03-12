---
title: "Remote Engagement"
domain: life-sciences-dev-guide
topic: remote-engagement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.748Z
estimatedTokens: 853
keywords: [Remote, Engagement, Enable, sales, medical, teams, connect, healthcare, professionals, virtually, across, multiple, channels, interactive, compliant]
---

# Remote Engagement

> Enable sales and medical teams to connect with healthcare professionals virtually across
  multiple channels, with interactive and compliant content, data collection capabilities, and
  technology flexibility. The benefits of Remote Engagement include accessibility, compliance with
  regulations like GDPR, increased productivity, convenience in scheduling, and the ability to
  create interactions through video, voice, and digital assets. Users can plan, launch, conduct, and
  finish remote calls or meetings, by using tracking, screen sharing, remote signatures, and
  feedback capture.

# Remote Engagement

Enable sales and medical teams to connect with healthcare professionals virtually across multiple channels, with interactive and compliant content, data collection capabilities, and technology flexibility. The benefits of Remote Engagement include accessibility, compliance with regulations like GDPR, increased productivity, convenience in scheduling, and the ability to create interactions through video, voice, and digital assets. Users can plan, launch, conduct, and finish remote calls or meetings, by using tracking, screen sharing, remote signatures, and feedback capture.

![The data model diagram for Advanced Therapy Management with Health Cloud objects and Salesforce Scheduler objects.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_remote_engagement.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/remote-engagement.html "HTML (New Window)").

-   **[DigitalSignatureRequest](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_digitalsignaturerequest.htm)**
    Reserved for future use.
-   **[VideoCall](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_videocall.htm)**
    Standard and custom fields extend the standard VideoCall object to represent a video call. The VideoCall object stores important information about the video session, including the meeting ID for connection, video call duration, associated participants, linked recordings, and vendor-specific attributes, ensuring a seamless and organized approach to managing video call data. This object is available in API version 65.0 and later.
-   **[VideoCallParticipant](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_videocallparticipant.htm)**
    Standard and custom fields extend the standard VideoCallParticipant object to represent a participant of a video call. Participant information can come from the video call provider (for example, Zoom), or Salesforce. This object is available in API version 65.0 and later.
-   **[VideoCallRecording](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_videocallrecording.htm)**
    Standard and custom fields extend the standard VideoCallRecording object to represent a recording from a video call, such as a video recording, a voice recording, or a transcript. This object is availavle in API version 65.0 and later.
-   **[VideoCallPtcpRequest](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_videocallptcprequest.htm)**
    Represents information about remote signature request for video call participants, including key details such as status, type, and other relevant information for tracking and managing the signature process. This object is available in API version 65.0 and later.
-   **[VideoCallPtcpSession](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_videocallptcpsession.htm)**
    Represents information about participants during remote sessions, including duration, device type, operating system, and browser. It logs reconnections separately, offering a comprehensive view of each participant's experience. This object is available in API version 65.0 and later.

## Related Topics

- DigitalSignatureRequest (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_digitalsignaturerequest.htm)
- VideoCall (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_videocall.htm)
- VideoCallParticipant (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_videocallparticipant.htm)
- VideoCallRecording (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_videocallrecording.htm)
- VideoCallPtcpRequest (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_videocallptcprequest.htm)
- VideoCallPtcpSession (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_videocallptcpsession.htm)
