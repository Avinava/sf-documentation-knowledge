---
title: "Interest Tagging Business APIs"
domain: omnistudio
topic: interest-tagging-business-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:51.816Z
estimatedTokens: 668
keywords: [Interest, Tagging, Business, APIs, give, users, seamless, API, experience, Tags., Note]
---

# Interest Tagging Business APIs

> Use the Interest Tagging Business APIs to give users a seamless API
      experience for Interest Tags.

# Interest Tagging Business APIs

Use the Interest Tagging Business APIs to give users a seamless API experience for Interest Tags.

| Available in: Lightning Experience |
| --- |
| Available in: Interest Tagging is available with Enterprise, Unlimited, and Performance Editions with the Financial Services Cloud. |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

Interest Tag API is only for use with Interest Tags, not with Topics Tags or Communities Tags.

Here are some examples on how the Salesforce UI interacts with the Interest Tags resources:![A representation of create Interest Tags on the Lightning Component screen.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Findustries%2Fimages%2Finterest_tags_UI_1.png&folder=industries_reference)![A representation of modify and delete Interest Tags on the Lightning Component screen.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Findustries%2Fimages%2Finterest_tags_UI_2.png&folder=industries_reference)![A representation of Interest Tags by tag category.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Findustries%2Fimages%2Finterest_tags_UI_3.png&folder=industries_reference)![A representation of the Interest Tags assigned to a Salesforce object record.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Findustries%2Fimages%2Finterest_tags_UI_4.png&folder=industries_reference)

Following are the available Interest Tags resources as numbered in the Salesforce UI:

| Label Number in the UI | Resource | Description |
| --- | --- | --- |
| 1 | /connect/interest-tags/tags | Create an Interest Tag. |
| 2 | /connect/interest-tags/tags/${tagId} | Update an Interest Tag. |
| 3 | /connect/interest-tags/tags?tagId=tagId1 | Delete Interest Tags by tag IDs. |
| 4 | /connect/interest-tags/categories | Retrieve a list of categories assigned to an Interest Tag. |
| 5 | /connect/interest-tags/assignments/tag/${tagId} | Retrieve a list of assignments by an Interest Tag ID. |
| 6 | /connect/interest-tags/tags?categoryId={categoryId} | Retrieve a list of Interest Tags by a tag category ID. |
| 7 | /connect/interest-tags/assignments/entity/${recordId} | Retrieve a list of interest tags grouped by tag categories that are assigned to a Salesforce object record. |
| 8 | /connect/interest-tags/assignments | Create assignments for Interest Tags and the Salesforce object record. |

-   **[REST Reference](atlas.en-us.industries_reference.meta/industries_reference/interest_tagging_apis_rest_references.htm)**
    You can access Interest Tags APIs using REST endpoints. These REST APIs follow similar conventions as Connect REST APIs.

## Related Topics

- /connect/interest-tags/tags (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_delete_get_create_tags.htm)
- /connect/interest-tags/tags/${tagId} (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_update_tags.htm)
- /connect/interest-tags/tags?tagId=tagId1 (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_delete_get_create_tags.htm)
- /connect/interest-tags/categories (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_get_tag-categories.htm)
- /connect/interest-tags/assignments/tag/${tagId} (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_get_record_assignments_for_tag.htm)
- /connect/interest-tags/tags?categoryId={categoryId} (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_delete_get_create_tags.htm)
- /connect/interest-tags/assignments/entity/${recordId} (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_get_tags_assigned_to_entity.htm)
- /connect/interest-tags/assignments (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_post_record_assignments_for_tag.htm)
- REST Reference (atlas.en-us.industries_reference.meta/industries_reference/interest_tagging_apis_rest_references.htm)
