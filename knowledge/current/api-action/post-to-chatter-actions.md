---
title: "Post to Chatter Actions"
domain: api-action
topic: post-to-chatter-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.175Z
estimatedTokens: 648
keywords: [Post, Chatter, Actions, feed, specific, record, user, group, REST, HTTP, Inputs, Outputs]
---

# Post to Chatter Actions

> Post to the feed for a specific record, user, or Chatter group.

# Post to Chatter Actions

Post to the feed for a specific record, user, or Chatter group.

Use a Post to Chatter action to post a message at run time to a specified feed. Post to Chatter supports @mentions and topics, but only text posts are supported.

This object is available in API version 32.0 and later.

## Supported REST HTTP Methods

URI

Get a list of available post to Chatter actions:

/services/data/vXX.X/actions/standard/chatterPost

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| communityId | TypereferenceDescriptionOptional. Specifies the ID of an Experience Cloud site to post to. Valid only if Digital Experiences is enabled. Required if posting to a user or Chatter group that belongs to an Experience Cloud site. This value is available in API version 35.0 and later. |
| subjectNameOrId | TypestringDescriptionRequired. Reference to the user, Chatter group, or record whose feed you want to post to.To post to a user’s feed, enter the user’s ID or Username. For example: jsmith@salesforce.comTo post to a Chatter group, enter the group’s Name or ID. For example: Entire OrganizationTo post to a record, enter the record’s ID. For example: 001D000000JWBDx |
| text | TypestringDescriptionRequired. The text that you want to post. Must be a string of no more than 10,000 characters.To mention a user or group, enter @[reference], where reference is the ID for the user or group that you want to mention. The reference can be a literal value, a merge field, or a flow resource.To add a topic, enter #[string], where string is the topic that you want to add.For example, the string Hi @[005000000000001] check this out #[some_topic]. is stored appropriately as Hi @Joe, check this out #some_topic. where “@Joe” and “#some_topic” are links to the user and topic, respectively. |
| type | TypepicklistDescriptionRequired only if subjectNameOrId is set to a username or a Chatter group name. The type of feed that you want to post to.User—Enter this value if subjectNameOrId is set to a user’s Username.Group—Enter this value if subjectNameOrId is set to a Chatter group’s Name. |
| visibility | TypepicklistDescriptionOptional. Valid only if Digital Experiences is enabled. Specifies whether this feed item is available to all users or internal users only. Valid values are:allUsersinternalUsersThis value is available in API version 35.0 and later. |

## Outputs

| Output | Details |
| --- | --- |
| feedItemId | TypereferenceDescriptionThe ID of the new Chatter feed item. |
