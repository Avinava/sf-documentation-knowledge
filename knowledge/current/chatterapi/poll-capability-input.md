---
title: "Poll Capability Input"
domain: chatterapi
topic: poll-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.484Z
estimatedTokens: 357
keywords: [Poll, Capability, Input, vote, feed, element]
---

# Poll Capability Input

> Create or vote on a poll feed element.

# Poll Capability Input

Create or vote on a poll feed element.

To create a poll, use the [Feed Elements, Post and Search](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm "Post feed elements and search all feed elements in an organization.") resource. See [Post a Poll](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_feed_element_poll.htm "Post a poll feed element in Chatter.") for an example.

To vote on a poll, use the [Feed Elements Capability, Poll](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_poll.htm "Access a poll for a feed element or vote on a poll.") resource.

XML example for creating a poll

```

```

JSON example for creating a poll

```

```

JSON example for voting on a poll

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| choices | String[] | The choices used to create a new poll. You must specify 2–10 poll choices for each poll. | Required for creating a poll | 32.0 |
| myChoiceId | String | ID of an existing choice on the feed poll. Used to vote on an existing poll. | Required for voting on a poll | 32.0 |

#### See Also

-   [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.")

## Code Examples

```
<pollCapability>
   <pollChoices>
      <choice>Monday</choice>
      <choice>Tuesday</choice>
   </pollChoices>
</pollCapability>
```

```
{ 
   "choices" : [
      "Monday", "Tuesday"
   ]
}
```

```
{ 
   "myChoiceId" : "09ATC00000001lh2AA"
}
```

## Related Topics

- Feed Elements, Post and Search (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- Post a Poll (atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_feed_element_poll.htm)
- Feed Elements Capability, Poll (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_poll.htm)
- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
