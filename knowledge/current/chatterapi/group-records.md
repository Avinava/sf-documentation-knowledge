---
title: "Group Records"
domain: chatterapi
topic: group-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.569Z
estimatedTokens: 350
keywords: [Group, Records, associated, Associate, record]
---

# Group Records

> Get the list of records associated with a group.
      Associate a record with a group.

# Group Records

Get the list of records associated with a group. Associate a record with a group.

Resource

```

```

```

```

Available since version

33.0

Requires Chatter

Yes

HTTP methods

GET, HEAD, POST

POST is supported in version 34.0 and later.

Request parameters for GET

| Parameter Name | Type | Description | Available Since |
| --- | --- | --- | --- |
| page | Integer | An integer specifying a page of items. The default value is 0, which returns the first page. | 33.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don't specify a size, the default is 25. | 33.0 |

Request body for POST

Root XML tag

<groupRecord>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recordId | String | ID of the record. | Required | 34.0 |

Request parameters for POST

| Parameter Name | Type | Description | Available Since |
| --- | --- | --- | --- |
| recordId | String | ID of the record. | 34.0 |

Response body for GET

[Group Record Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_record_page.htm "A paginated list of records associated with a group.")

Response body for POST

[Group Record](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_record.htm "A record associated with a group.")

## Code Examples

```
/chatter/groups/groupID/records
```

```
/connect/communities/communityId/chatter/groups/groupID/records
```

```
{"recordId" : "001D000000Io9cD"}
```

## Related Topics

- Group Record Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_record_page.htm)
- Group Record (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_record.htm)
