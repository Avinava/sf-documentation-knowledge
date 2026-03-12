---
title: "Motif"
domain: chatterapi
topic: motif
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.749Z
estimatedTokens: 1096
keywords: [Motif, contain, URLs, small, medium, large, icons, indicate, Salesforce, record, Common, files, users, groups, Custom]
---

# Motif

> The motif properties contain URLs for small, medium, and large icons that indicate the
      Salesforce record type. Common record types are files, users, and groups, but all record types
      have a set of motif icons. Custom object records use their tab style icon. All icons are
      available to unauthenticated users so that, for example, you can display the motif icons in an
      email. The motif can also contain the record type’s base color.

# Motif

The motif properties contain URLs for small, medium, and large icons that indicate the Salesforce record type. Common record types are files, users, and groups, but all record types have a set of motif icons. Custom object records use their tab style icon. All icons are available to unauthenticated users so that, for example, you can display the motif icons in an email. The motif can also contain the record type’s base color.

## Example

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The motif images are icons, not user uploaded images or photos. For example, every user has the same set of motif icons.

Custom object records use their tab style icon, for example, the following custom object uses the “boat” tab style:

```

```

Users use the following icons:

```

```

Groups use the following icons:

```

```

Files use the following icons:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

To view the icons in the previous examples, preface the URL with https://instance\_name. For example, https://instance\_name/img/icon/profile64.png.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| color | String | A hex value representing the base color of the record type, or null. | Small, 29.0 | 29.0 |
| largeIconUrl | String | A large icon indicating the record type. | Small, 29.0 | 27.0 |
| mediumIconUrl | String | A medium icon indicating the record type. | Small, 29.0 | 27.0 |
| smallIconUrl | String | A small icon indicating the record type. | Small, 29.0 | 27.0 |
| svgIconUrl | String | An icon in SVG format indicating the record type, or null if the icon doesn’t exist. | Small, 34.0 | 34.0 |

#### See Also

-   [Article Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_article_summary.htm "A knowledge article summary.")

-   [Banner Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_banner_capability.htm "If this feed element has this capability, it has a banner motif and style.")

-   [File Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm "Description of a file.")

-   [Files Connect Repository](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ContentHubRepository.htm "Information about a Files Connect repository.")

-   [Folder](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_folder.htm "Description of a folder.")

-   [Group Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_detail.htm "Chatter group detail.")

-   [Non-Entity Recommendation](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_non_entity_recommendation.htm "A recommendation for a non-Salesforce entity, such as an application.")

-   [Recommended Object](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommended_object.htm "A custom or static recommendation.")

-   [Record Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_summary.htm "Record summary.")

-   [Related Feed Post](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_abstract_related_feed_post.htm "A related feed post")

-   [Repository Folder Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_repository_folder_summary.htm "Summary of a repository folder.")

-   [Record View](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordView.htm "A view of any record in the org, including a custom object record. This object is used if a specialized object, such as User or ChatterGroup, isn’t available for the record type. Contains data and metadata so you can render a record with one response.")

-   [Related Question](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_related_question.htm "A related question")

-   [Repository File Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_repository_file_summary.htm "Description of a repository file.")

-   [User Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm "User detail. If the context user doesn’t have permission to see a property, the property is set to null.")

-   [User Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm "The User Summary response body is a subset of the User Detail response body.")

## Code Examples

```
"motif": {
      "color": "8C004C",
      "largeIconUrl": "/img/icon/custom51_100/boat64.png",
      "mediumIconUrl": "/img/icon/custom51_100/boat32.png",
      "smallIconUrl": "/img/icon/custom51_100/boat16.png",
      "svgIconUrl": null
   },
```

```
"motif": {
      "color": "1797C0",
      "largeIconUrl": "/img/icon/profile64.png",
      "mediumIconUrl": "/img/icon/profile32.png",
      "smallIconUrl": "/img/icon/profile16.png",  
      "svgIconUrl": null
   },
```

```
"motif": {
      "color": "1797C0",
      "largeIconUrl": "/img/icon/groups64.png",
      "mediumIconUrl": "/img/icon/groups32.png",
      "smallIconUrl": "/img/icon/groups16.png"
   },
```

```
"motif": {
      "color": "1797C0",
      "largeIconUrl": "/img/content/content64.png",
      "mediumIconUrl": "/img/content/content32.png",
      "smallIconUrl": "/img/icon/files16.png",
      "svgIconUrl": null
   },
```

## Related Topics

- Article Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_article_summary.htm)
- Banner Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_banner_capability.htm)
- File Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm)
- Files Connect Repository (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ContentHubRepository.htm)
- Folder (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_folder.htm)
- Group Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_detail.htm)
- Non-Entity Recommendation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_non_entity_recommendation.htm)
- Recommended Object (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommended_object.htm)
- Record Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_summary.htm)
- Related Feed Post (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_abstract_related_feed_post.htm)
