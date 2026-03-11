---
title: "ConnectApi.PollCapabilityInput"
domain: apex-reference
topic: connectapipollcapabilityinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.432Z
keywords: [ConnectApi.PollCapabilityInput, See]
---

# ConnectApi.PollCapabilityInput

# ConnectApi.PollCapabilityInput

Create, update, or vote on a poll on a feed element.

This class is a subclass of [ConnectApi.FeedElementCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capability.htm#apex_connectapi_input_feed_element_capability "A feed element capability.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| choices | List<String> | The choices used to create a new poll. You must specify 2–10 poll choices for each poll. | Required for creating a poll | 32.0 |
| myChoiceId | String | ID of an existing choice on the feed poll. Used to vote on an existing poll. | Required for voting on a poll | 32.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilitiesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capabilities.htm "A container for all capabilities that can be included when creating a feed element.")