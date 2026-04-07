---
title: "Tag your Journeys"
domain: mc-apis
topic: tag-your-journeys
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:22.537Z
estimatedTokens: 269
keywords: [Tag, Journeys, add, tags, help, identify, categorize, journey, multiple, associated, via, API, original, definition, unique]
---

# Tag your Journeys

> You can add tags to journeys to help identify and categorize them. A journey can have multiple tags, and a tag can be associated with multiple journeys. To add tags to journeys via the API, you need the object ID, or original definition ID, for each journey, and the unique tag names.

# Tag your Journeys

You can add tags to journeys to help identify and categorize them. A journey can have multiple tags, and a tag can be associated with multiple journeys. To add tags to journeys via the API, you need the object ID, or original definition ID, for each journey, and the unique tag names.

1.  [Relate tags to journeys](atlas.en-us.noversion.mc-apis.meta/mc-apis/createTags.htm).

    The Create Tags resource creates an association for each tag/object pair. For example, if the payload includes 10 tags and 20 journeys, the API call creates 200 associations.

2.  [Filter journeys by tag](atlas.en-us.noversion.mc-apis.meta/mc-apis/getInteractionCollection.htm).

    When retrieving journeys, specify a single tag to filter results to only include journeys associated with that tag.

3.  [Delete tag associations](atlas.en-us.noversion.mc-apis.meta/mc-apis/deleteTags.htm).

    Delete one or more tags associated with a journey at the same time.


## Related Items

[Journey Tags](https://help.salesforce.com/articleView?id=mc_jb_journey_tags.htm&type=5)

## Related Topics

- Relate tags to journeys (atlas.en-us.noversion.mc-apis.meta/mc-apis/createTags.htm)
- Filter journeys by tag (atlas.en-us.noversion.mc-apis.meta/mc-apis/getInteractionCollection.htm)
- Delete tag associations (atlas.en-us.noversion.mc-apis.meta/mc-apis/deleteTags.htm)
