---
title: "Personalization Resources"
domain: chatterapi
topic: personalization-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:13.620Z
estimatedTokens: 412
keywords: [Personalization, Resources, assigned, audiences, match, user, context, audience, batch, IDs, targets, include, target]
---

# Personalization Resources

> Get a list of assigned audiences that match the user context. Get audience information
      for a batch of audience IDs. Create, get, update, and delete an audience. Get a list of
      targets that match the user context, based on the assigned audiences that include the user.
      Create and update targets. Get target information for a batch of target IDs. Get and delete a
      target.

# Personalization Resources

Get a list of assigned audiences that match the user context. Get audience information for a batch of audience IDs. Create, get, update, and delete an audience. Get a list of targets that match the user context, based on the assigned audiences that include the user. Create and update targets. Get target information for a batch of target IDs. Get and delete a target.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Personalization varies what the user can see in the browser but doesn’t secure data in any way. To prevent users accessing sensitive data, use standard Salesforce security features, such as sharing rules and permission sets.

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/communities/communityId/​personalization/audiences | Get a list of assigned audiences that match the user context. Create an audience. |
| /connect/communities/communityId/​personalization/audiences/batch/audienceIds | Get audience information for a comma-separated list of audience IDs. |
| /connect/communities/communityId/​personalization/audiences/audienceId | Get, update, and delete an audience. |
| /connect/communities/communityId/​personalization/targets | Get a list of targets that match the user context, based on the assigned audiences that include the user. Create and update targets. |
| /connect/communities/communityId/​personalization/targets/batch/targetIds | Get target information for a comma-separated list of target IDs. |
| /connect/communities/communityId/​personalization/targets/targetId | Get or delete a target. |

## Related Topics

- /connect/communities/communityId/​personalization/audiences (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_personalization_audiences.htm)
- /connect/communities/communityId/​personalization/audiences/batch/audienceIds (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_personalization_audience_batch.htm)
- /connect/communities/communityId/​personalization/audiences/audienceId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_personalization_audience.htm)
- /connect/communities/communityId/​personalization/targets (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_personalization_targets.htm)
- /connect/communities/communityId/​personalization/targets/batch/targetIds (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_personalization_target_batch.htm)
- /connect/communities/communityId/​personalization/targets/targetId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_personalization_target.htm)
