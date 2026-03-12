---
title: "Examples from Amazon Connect"
domain: voice-developer-guide
topic: examples-from-amazon-connect
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.435Z
estimatedTokens: 350
keywords: [Examples, Amazon, Connect, Review, Service, Cloud, Voice, implementation, created, Connect’s, solutions, team, cover, scenarios, voicemail]
---

# Examples from Amazon Connect

> Review Service Cloud Voice implementation examples created by Amazon Connect’s solutions
  team. The examples cover scenarios such as voicemail setup and external line routing for
  reps.

# Examples from Amazon Connect

Review Service Cloud Voice implementation examples created by Amazon Connect’s solutions team. The examples cover scenarios such as voicemail setup and external line routing for reps.

For more examples, see the [Amazon Connect Campground for Service Cloud Voice in GitHub](https://github.com/amazon-connect/amazon-connect-salesforce-scv).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

#### Note

Salesforce does not maintain the examples provided by Amazon Connect.

-   **[Voicemail Express V2](https://github.com/amazon-connect/amazon-connect-salesforce-scv/tree/master/Solutions/VMX2-VoicemailExpress)**: Provides a basic voicemail capability for Service Cloud Voice. With Voicemail Express, customers can leave a voicemail for a rep or queue. The voicemail is stored in an S3 bucket as a .wav file, a transcription of the voicemail is created, and a new case is created in Salesforce that contains the transcription, a link to the recording, and a clickable callback number.
-   **[Follow Me Routing](https://github.com/amazon-connect/amazon-connect-salesforce-scv/tree/master/Examples/AWSSCV-FollowMeRouting)**: Provides an option that allows reps to flag themselves as available using an external phone number. When customers call specifically for that rep, the call is redirected to their external line.
