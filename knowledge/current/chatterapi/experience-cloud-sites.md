---
title: "Experience Cloud Sites"
domain: chatterapi
topic: experience-cloud-sites
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:23.925Z
estimatedTokens: 2017
keywords: [Experience, Cloud, Sites, Salesforce, lets, branded, digital, experiences, share, collaborate, people, key, business, processes, customers, partners, employees, Whether, call, portal, help, forum, support, community, something, else, site, great, place, connect, folks, life]
---

> Salesforce
    Experience Cloud lets you create branded digital experiences to share information and
    collaborate with people who are key to your business processes, such as customers, partners, or
    employees. Whether you call it a portal, help forum, support community, or something else, an
    Experience Cloud site is a great place to connect with the important folks in your
    life.

# Experience Cloud Sites

Salesforce Experience Cloud lets you create branded digital experiences to share information and collaborate with people who are key to your business processes, such as customers, partners, or employees. Whether you call it a portal, help forum, support community, or something else, an Experience Cloud site is a great place to connect with the important folks in your life.

You can request many Connect REST API resources within a specific Experience Cloud site. For example, you can make requests to CMS and Chatter resources within a specific site. If a resource is available in a site, its documentation includes a resource that starts with /connect/communities/communityId or /connect/sites/siteId.

Some Connect REST API resources are available only within a site. These include resources for flagging and moderating content, using managed topics, and getting information about a user’s reputation. Resources that are available in sites are available whether you allow access without logging in or not.

The resources that are available only within a site are listed in this table.

| Resource | HTTP Methods | Tasks |
| --- | --- | --- |
| /connect/communities | GET, POST | Get a list of all Experience Cloud sites available to the context user. Create an Experience Cloud site. |
| /connect/communities/communityId | GET | Get information about an Experience Cloud site. |
| /connect/communities/communityId/​publish | POST | Publish an Experience Cloud site. |
| /connect/communities/templates | GET | Get the Experience Builder templates available to the context user. |
| /connect/communities/communityId​/external-managed-accounts | GET | Get externally managed accounts available to the context user across all Experience Cloud sites. |
| /connect/communities/communityId​/data-category/network-data-category | GET, PUT | Get or update the network data category tree for an Experience Cloud site. |
| /connect/communities/communityId​/network-data-category/networkDataCategoryId | PATCH | Update the network data category record in an Experience Cloud site. |
| /connect/communities/communityId​/network-data-category/networkDataCategoryId​/child-category | GET | Retrieve child categories of a network data category in an Experience Cloud site. |
| /connect/communities/communityId​/network-data-category/networkDataCategoryId​/parent-path | GET | Retrieve the hierarchy of the network data categories in an Experience Cloud site. This API returns the network data category path from the parent category to the specified category. |
| /connect/communities/communityId​/category-network/categoryNetworkId/knowledge-article | GET | Get articles for a network data category in an Experience Cloud site. |
| /connect/communities/communityId​/chatter/comments/commentId/​moderation-flags | GET, POST, DELETE | If the context user is a moderator, get the number of times members flagged a comment. Also flag a comment for moderation and delete all flags on a comment.If the context user isn’t a moderator, returns whether the user flagged a comment. Also flag a comment for moderation and remove a flag the user previously added. |
| /connect/communities/communityId​/chatter/feed-elements​/feedElementId/capabilities​/moderation | GET, POST, DELETE | Get information about a feed element's moderation capability, add a moderation flag to a feed element, or delete all moderation flags from a feed element. |
| /connect/communities/communityId​/files/moderation | GET | If the context user is a moderator, get the files that members flagged. |
| /connect/communities/communityId​/files/fileId/moderation-flags | GET, POST, DELETE | If the context user is a moderator, get the number of times members flagged a file. Also flag a file for moderation and delete all flags on a file.If the context user isn’t a moderator, get whether the user flagged a file. Also flag a file for moderation and remove a flag the user previously added. |
| /connect/communities/communityId​/chatter/feeds/moderation/​feed-elements | GET | If the context user has the Moderate Experiences Feeds permission, this resource returns a list of all feed elements and comments in the Experience Cloud site that have been flagged by site members. |
| /connect/communities/communityId​/chatter/users/userId/​audit-actions/counts | GET | Get audit statistics for a user in an Experience Cloud site. |
| /connect/communities/communityId​/chatter/feeds/home/feed-elements | GET | The feed containing feed elements and comments from the Experience Cloud site home. |
| /connect/communities/communityId​/chatter/users/userId/reputation | GET | Get a user's reputation in an Experience Cloud site. |
| /connect/communities/communityId​/managed-content/delivery | GET | Get published managed content versions for an Experience Cloud site. |
| /connect/communities/communityId​/managed-topics | GET, POST, PATCH | Get all the managed topics for an Experience Cloud site. Create a managed topic, create managed topic hierarchies, and reorder managed topics. |
| /connect/communities/communityId​/managed-topics/managedTopicId | GET, DELETE | Get information about or delete a managed topic in an Experience Cloud site. |
| /connect/communities/communityId​/microbatching | POST | Ingest microbatching records. |
| /connect/communities/communityId​/microbatching/errors | GET, DELETE | Get and delete microbatching errors. |
| /connect/communities/communityId​/microbatching/errors/resubmission | POST | Resubmit microbatching error records. |
| /connect/communities/communityId​/missions/users/userId | PATCH | Update the mission activity count for a user. |
| /connect/communities/communityId​/missions/users/userId​/activities/export-job | GET | Export mission activity for a user. |
| /connect/communities/communityId​/missions/users/userId/​activities/purge-job | POST | Start a job to purge mission activity for the user. |
| /connect/communities/communityId​/missions/activities/purge-job | POST | Start a job to purge mission activity for all users. |
| /connect/communities/communityId​/navigation-menu/navigation-menu-items | GET | Get navigation menu items for an Experience Cloud site. |
| /connect/communities/communityId​/personalization/audiences | GET, POST | Get a list of assigned audiences that match the user context. Create an audience. |
| /connect/communities/communityId​/personalization/audiences/audienceId | GET, PATCH, DELETE | Get, update, and delete an audience. |
| /connect/communities/communityId​/personalization/targets | GET, POST, PATCH | Get a list of targets that match the user context, based on the assigned audiences that include the user. Create and update targets. |
| /connect/communities/communityId​/personalization/targets/batch/targetIds | GET | Get target information for a comma-separated list of target IDs. |
| /connect/communities/communityId​/personalization/targets/targetId | GET, DELETE | Get or delete a target. |
| /connect/communities/communityId​/preview-url/pages/pageApiName | GET | Get a preview URL for an Experience Cloud site page. |
| /connect/communities/communityId/​question-and-answers​/top-unanswered (pilot) | GET | Get the top unanswered questions for the context user in an Experience Cloud site. |
| /connect/communities/communityId​/topics/topicId/trending-articles | GET | Get trending articles for a topic in an Experience Cloud site. |
| /connect/communities/communityId​/trending-articles | GET | Get trending articles for an Experience Cloud site. |
| /connect/sites/siteId/search | GET | Search an Experience Cloud site. |

#### See Also

-   [Build the Resource URL](atlas.en-us.chatterapi.meta/chatterapi/intro_building_url.htm "Access Connect REST API resources by using the URI for your company's instance, combined with version and Experience Cloud site information, and the URI for the resource.")

-   [Make a Request in an Experience Cloud Site](atlas.en-us.chatterapi.meta/chatterapi/quickreference_make_request_in_community.htm "Make a request in an Experience Cloud site.")

## Related Topics

- /connect/communities (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_communities_list.htm)
- /connect/communities/communityId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_communities_specific.htm)
- /connect/communities/communityId/​publish (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_communities_publish.htm)
- /connect/communities/templates (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_communities_templates.htm)
- /connect/communities/communityId​/external-managed-accounts (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_communities_externally_managed_accounts.htm)
- /connect/communities/communityId​/data-category/network-data-category (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_network_data_categories.htm)
- /connect/communities/communityId​/network-data-category/networkDataCategoryId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_network_data_category.htm)
- /connect/communities/communityId​/network-data-category/networkDataCategoryId​/child-category (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_network_data_category_child_category.htm)
- /connect/communities/communityId​/network-data-category/networkDataCategoryId​/parent-path (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_network_data_category_parent_path.htm)
- /connect/communities/communityId​/category-network/categoryNetworkId/knowledge-article (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_category_network_articles.htm)
