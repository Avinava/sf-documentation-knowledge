---
title: "When to Use Asynchronous Processing"
domain: mc-apis
topic: when-to-use-asynchronous-processing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:15.348Z
estimatedTokens: 441
keywords: [Asynchronous, Processing, necessary, API, Analyze, scenarios, identify, best, suited, Items]
---

> Asynchronous processing is not necessary for all your API calls. Analyze these scenarios to identify which API calls are best suited for asynchronous processing.

# When to Use Asynchronous Processing

Asynchronous processing is not necessary for all your API calls. Analyze these scenarios to identify which API calls are best suited for asynchronous processing.

| Async Scenario | Description |
| --- | --- |
| High Availability | If Marketing Cloud is unavailable or undergoing maintenance, your API calls are accepted and queued. |
| Instant Response | The asynchronous server responds instantly to let your system know that the call has been queued, even if the call is scheduled for future processing. |
| Sequential Processing | To process multiple API calls in sequence, use the conversation concept. Multiple calls sent synchronously could process out of order, but the sequence numbers you assign to the calls in the conversation ensure the correct processing order. |
| Avoid Duplication | Often, it is important not to repeat an API call, even if the call is sent more than once. For example, you don't want to send the same email message multiple times. The conversation concept prevents duplicate processing of API calls because each ConversationID must be unique and cannot be processed more than once. |
| Scheduled API Calls | To schedule a date and time to process the call, use the Options parameter. |
| Multiple Notification Mechanisms | Choose whether to receive notifications regarding your API calls via email, HTTP POST, or Retrieve. |
| Prioritize Sends | Choose the order and frequency in which items in the asynchronous queue are processed. |

## Related Items

-   [Triggered Send](atlas.en-us.noversion.mc-apis.meta/mc-apis/submitting_a_triggered_send_definition_using_the_asynchronous_api.htm)
-   [Data Extensions Async API](atlas.en-us.noversion.mc-apis.meta/mc-apis/data-extensions-api.htm)

## Related Topics

- Triggered Send (atlas.en-us.noversion.mc-apis.meta/mc-apis/submitting_a_triggered_send_definition_using_the_asynchronous_api.htm)
- Data Extensions Async API (atlas.en-us.noversion.mc-apis.meta/mc-apis/data-extensions-api.htm)
