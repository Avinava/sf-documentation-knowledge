---
title: "Edit a Feed Element"
domain: apex-guide
topic: edit-a-feed-element
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.309Z
estimatedTokens: 374
keywords: [Edit, Feed, Element, Call]
---

# Edit a Feed Element

> Call a method to edit a feed element.

# Edit a Feed Element

Call a method to edit a feed element.

Call [updateFeedElement(communityId, feedElementId, feedElement)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_updateFeedElement) to edit a feed element. Feed items are the only type of feed element that can be edited.

String communityId = Network.getNetworkId(); // Get the last feed item created by the context user. List<FeedItem> feedItems = \[SELECT Id FROM FeedItem WHERE CreatedById = :UserInfo.getUserId() ORDER BY CreatedDate DESC\]; if (feedItems.isEmpty()) { // Return null within anonymous apex. return null; } String feedElementId = feedItems\[0\].id; ConnectApi.FeedEntityIsEditable isEditable = ConnectApi.ChatterFeeds.isFeedElementEditableByMe(communityId, feedElementId); if (isEditable.isEditableByMe == true){ ConnectApi.FeedItemInput feedItemInput = new ConnectApi.FeedItemInput(); ConnectApi.MessageBodyInput messageBodyInput = new ConnectApi.MessageBodyInput(); ConnectApi.TextSegmentInput textSegmentInput = new ConnectApi.TextSegmentInput(); messageBodyInput.messageSegments = new List<ConnectApi.MessageSegmentInput>(); textSegmentInput.text = 'This is my edited post.'; messageBodyInput.messageSegments.add(textSegmentInput); feedItemInput.body = messageBodyInput; ConnectApi.FeedElement editedFeedElement = ConnectApi.ChatterFeeds.updateFeedElement(communityId, feedElementId, feedItemInput); }
