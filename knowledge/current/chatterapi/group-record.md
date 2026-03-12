---
title: "Group Record"
domain: chatterapi
topic: group-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.501Z
estimatedTokens: 176
keywords: [Group, Record, remove, association, associated]
---

# Group Record

> Get information about a group record or remove the association
      between a record and a group.

# Group Record

Get information about a group record or remove the association between a record and a group.

Resource

```

```

```

```

Available version

34.0

Requires Chatter

Yes

HTTP methods

GET, DELETE, HEAD

Response body for GET

[Group Record](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_record.htm "A record associated with a group.")

Response body for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/chatter/group-records/groupRecordId
```

```
/connect/communities/communityId/chatter/group-records/groupRecordId
```

## Related Topics

- Group Record (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_record.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Record Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_summary.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Group Record Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_record_page.htm)
