---
title: "Service Cloud Voice Best Practices for Error Handling"
domain: voice-developer-guide
topic: service-cloud-voice-best-practices-for-error-handling
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:21.774Z
estimatedTokens: 246
keywords: [Service, Cloud, Voice, Best, Practices, Error, Handling, ensure, availability, optimal, customer, experience, follow, managing, throughput]
---

# Service Cloud Voice Best Practices for Error Handling

> To ensure service availability and an optimal customer experience, follow these best
  practices for managing throughput limits and errors.

# Service Cloud Voice Best Practices for Error Handling

To ensure service availability and an optimal customer experience, follow these best practices for managing throughput limits and errors.

-   **[Monitor Transcription-Related Limit Errors](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_limits_scaling_transcription_errors.htm)**
    When your org exceeds the transcription limit, utterances are no longer transcribed. Track when your org hits the transcription limit by using a custom field on the VoiceCall object.
-   **[Monitor VoiceCall Limit Errors](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_limits_scaling_voicecall_errors.htm)**
    When your org exceeds the limit for the maximum number of concurrent calls, the system can’t create VoiceCall records. Track when your org hits the concurrent call limit or the phone calls initiated per second limit by checking output of the InvokeTelephonyIntegrationApi Lambda function.

## Related Topics

- Monitor Transcription-Related Limit Errors (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_limits_scaling_transcription_errors.htm)
- Monitor VoiceCall Limit Errors (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_limits_scaling_voicecall_errors.htm)
