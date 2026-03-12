---
title: "Group Fields (GET)"
domain: psc-api
topic: group-fields-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.543Z
estimatedTokens: 167
keywords: [Group, Retrieve, two, party, relationship, groups]
---

# Group Fields (GET)

> Retrieve details from two party relationship
    groups.

# Group Fields (GET)

Retrieve details from two party relationship groups.

Resource

```

```

Resource example

```

```

Available version

58.0

Requires Chatter

No

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| groupIds | String[] | Comma-separated list of the group IDs to merge the party relationship group details. | Required | 58.0 |

Response body for GET

[Group Fields](atlas.en-us.psc_api.meta/psc_api/connect_responses_merge_group_fields_output.htm "Output representation of the fields of the party relationship groups to be merged.")

## Code Examples

```
/connect/group/group-fields
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/group/group-fields?groupIds=<0wKRM000000001n2AA>,<0wKRM000000004n2YY>
```

## Related Topics

- Group
            Fields (atlas.en-us.psc_api.meta/psc_api/connect_responses_merge_group_fields_output.htm)
