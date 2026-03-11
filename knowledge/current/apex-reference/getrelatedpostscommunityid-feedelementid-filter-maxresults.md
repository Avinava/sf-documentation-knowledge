---
title: "getRelatedPosts(communityId, feedElementId, filter,
      maxResults)"
domain: apex-reference
topic: getrelatedpostscommunityid-feedelementid-filter-maxresults
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getRelatedPosts, communityId, feedElementId, filter, maxResults, Get, posts, related, context, feed, element., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters]
---

# getRelatedPosts(communityId, feedElementId, filter,
      maxResults)

> Get posts related to the context feed element.

### getRelatedPosts(communityId, feedElementId, filter, maxResults)

Get posts related to the context feed element.

#### API Version

37.0

#### Available to Guest Users

37.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.RelatedFeedPosts getRelatedPosts(String communityId, String feedElementId, ConnectApi.RelatedFeedPostType filter, Integer maxResults)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element. The feed element must be a question.

filter

Type: [ConnectApi.RelatedFeedPostType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RelatedFeedPostTypeEnum)

Specifies the type of related post. Values are:

-   Answered—Related questions that have at least one answer.
-   BestAnswer—Related questions that have a best answer.
-   Generic—All types of related questions, including answered, with a best answer, and unanswered.
-   Unanswered—Related questions that don’t have answers.

Generic is the default value.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The maximum number of results to return. You can return up to 25 results; 5 is the default.

#### Return Value

Type: [ConnectApi.RelatedFeedPosts](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_related_feed_post_collection.htm#apex_connectapi_output_abstract_related_feed_post_collection "A collection of related feed posts.")

In version 37.0 and later, related feed posts are questions.

Each related feed post has a score indicating how closely it’s related to the context feed post. We return related feed posts sorted by score, with the highest score first.

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.