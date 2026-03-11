---
title: "setTestGetRelatedPosts(communityId, feedElementId, filter,
      maxResults, result)"
domain: apex-reference
topic: settestgetrelatedpostscommunityid-feedelementid-filter-maxresults-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.229Z
keywords: [setTestGetRelatedPosts, communityId, feedElementId, filter, maxResults, result, Register, ConnectApi.RelatedFeedPosts, object, returned, matching, ConnectApi.getRelatedPosts, method, called, test, context., same, parameters, receive, exception.]
---

# setTestGetRelatedPosts(communityId, feedElementId, filter,
      maxResults, result)

> Register a ConnectApi.RelatedFeedPosts object to be returned when the matching ConnectApi.getRelatedPosts(communityId, feedElementId, filter,
        maxResults) method is called in a test context. Use the method with the same
      parameters or you receive an exception.

### setTestGetRelatedPosts(communityId, feedElementId, filter, maxResults, result)

Register a ConnectApi.RelatedFeedPosts object to be returned when the matching ConnectApi.getRelatedPosts(communityId, feedElementId, filter, maxResults) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

37.0

#### Signature

public static Void setTestGetRelatedPosts(String communityId, String feedElementId, ConnectApi.RelatedFeedPostType filter, Integer maxResults, ConnectApi.RelatedFeedPosts result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element. The feed element must be a question.

filter

Type: [ConnectApi.RelatedFeedPostType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RelatedFeedPostTypeEnum)

Specifies the type of related feed post. Values are:

-   Answered—Related questions that have at least one answer.
-   BestAnswer—Related questions that have a best answer.
-   Generic—All types of related questions, including answered, with a best answer, and unanswered.
-   Unanswered—Related questions that don’t have answers.

Generic is the default value.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The maximum number of results to return. You can return up to 25 results; 5 is the default.

result

Type: [ConnectApi.RelatedFeedPosts](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_related_feed_post_collection.htm#apex_connectapi_output_abstract_related_feed_post_collection "A collection of related feed posts.")

Object containing test data.

In version 37.0 and later, related feed posts are questions.

#### Return Value

Type: Void