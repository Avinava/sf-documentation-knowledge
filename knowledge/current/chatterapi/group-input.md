---
title: "Group Input"
domain: chatterapi
topic: group-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.830Z
estimatedTokens: 447
keywords: [Group, Input, Chatter]
---

# Group Input

> Chatter group input.

# Group Input

Chatter group input.

Root XML Tag

```

```

JSON

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| announcement | String | An announcement ID.An announcement displays in a designated location in the Salesforce UI until 11:59 p.m. on its expiration date, unless it’s deleted or replaced by another announcement. | 31.0 |
| canHaveChatterGuests | Boolean | true if this group allows Chatter customers, false otherwise. After this property is set to true, it cannot be set to false. | 29.0 |
| description | String | The “Description” section of the group | 29.0 |
| information | Group Information Input | The “Information” section of the groupIf the group is private, the “Information” section is visible only to members. The “Description” section is visible to everyone. | 28.0 |
| isArchived | Boolean | true if the group is archived, false otherwise. Defaults to false. | 29.0 |
| isAutoArchiveDisabled | Boolean | true if automatic archiving is turned off for the group, false otherwise. Defaults to false. | 29.0 |
| isBroadcast | Boolean | true if only group owners and managers can create posts in the group, false otherwise. Defaults to false. | 36.0 |
| name | String | The name of the group | 29.0 |
| owner | String | The ID of the group owner. This property is available for PATCH requests only. | 29.0 |
| visibility | String | Group visibility type. One of the following values:PrivateAccess—Only members of the group can see posts to this group.PublicAccess—All users within the Experience Cloud site can see posts to this group.Unlisted—Reserved for future use. | 29.0 |

#### See Also

-   [Create a Group](atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_group.htm "Create a Chatter group.")

## Code Examples

```
{
   "announcement" : "0D5D0000000K4XT",
   "canHaveChatterGuests" : "true",
   "description" : "This group is building a powerful API.",
   "information" : {
      "text" : "Read this section before you post to the group.",
      "title" : "Information"
   },
   "isArchived" : "false",
   "isAutoArchiveDisabled" : "false",
   "name" : "Chatter API",
   "owner" : "00590000000DmPw",
   "visibility" : "PublicAccess"
}
```

## Related Topics

- Group
                                    Information Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_groupinformation_input.htm)
- Create a Group (atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_group.htm)
