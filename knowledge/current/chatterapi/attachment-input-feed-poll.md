---
title: "Attachment Input: Feed Poll"
domain: chatterapi
topic: attachment-input-feed-poll
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.004Z
estimatedTokens: 219
keywords: [Attachment, Input, Feed, Poll]
---

# Attachment Input: Feed Poll

> Feed poll attachment input.

# Attachment Input: Feed Poll

Feed poll attachment input.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This request body isn’t available in version 32.0 and later. In version 32.0 and later, use [Poll Capability Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_poll_capability_input.htm "Create or vote on a poll feed element.").

XML

Note that in XML, the choices for the poll are each wrapped in a <choice> element and attachmentType is an attribute of the <attachment> element. For example:

```

```

JSON

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attachmentType | String | The attachment type. Must contain the value Poll. | 27.0–31.0 |
| pollChoices | String [] | A list of choices used in the feed poll. | 26.0–31.0 |

## Code Examples

```
<attachment attachmentType="Poll">
   <pollChoices>
      <choice>One</choice>
      <choice>Two</choice>
   </pollChoices>
</attachment>
```

```
{ "attachment": 
   {
      "attachmentType":"Poll",
      "pollChoices": [
         "Monday", 
         "Tuesday"
      ]
   }
}
```

## Related Topics

- Poll Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_poll_capability_input.htm)
