---
title: "Feed Elements Capability, Email Message"
domain: chatterapi
topic: feed-elements-capability-email-message
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.199Z
estimatedTokens: 208
keywords: [Feed, Elements, Capability, Email, Message, Access, element]
---

# Feed Elements Capability, Email Message

> Access the email message capability of a feed
    element.

# Feed Elements Capability, Email Message

Access the email message capability of a feed element.

Resource

```

```

```

```

Available version

32.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Response bodies for GET

[Email Message Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_email_message_capability.htm#connect_responses_email_message_capability "If a feed element has this capability, it has an email message from a case.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/email-message
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/email-message
```

## Related Topics

- Email Message Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_email_message_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
