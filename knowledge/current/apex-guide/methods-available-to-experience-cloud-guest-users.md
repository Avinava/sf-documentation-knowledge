---
title: "Methods Available to Experience Cloud Guest Users"
domain: apex-guide
topic: methods-available-to-experience-cloud-guest-users
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.764Z
keywords: [Methods, Available, Experience, Cloud, Guest, Users, Important, See]
---

# Methods Available to Experience Cloud Guest Users

# Methods Available to Experience Cloud Guest Users

If your Experience Cloud site allows access without logging in, guest users have access to many Apex methods. These methods return information the guest user has access to.

All overloads of these methods are available to guest users.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

If an overload of a method listed here indicates that Chatter is required, you must also [enable public access](https://help.salesforce.com/articleView?id=community_builder_page_access_settings.htm&type=5&language=en_US) to your Experience Cloud site to make the method available to guest users. If you don’t enable public access, data retrieved by methods that require Chatter doesn’t load correctly on public site pages.

-   Announcements methods:
    -   [getAnnouncements()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Announcements_static_methods.htm#apex_ConnectAPI_Announcements_getAnnouncements_1)
-   ChatterFeeds methods:
    -   [getComment()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getComment)
    -   [getCommentInContext()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getCommentInContext_1)
    -   [getCommentsForFeedElement()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getCommentsForFeedElement_1)
    -   [getExtensions()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getExtensions_1)
    -   [getFeed()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeed)
    -   [getFeedElement()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElement_1)
    -   [getFeedElementBatch()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementBatch_1)
    -   [getFeedElementPoll()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementPoll_1)
    -   [getFeedElementsFromFeed()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_1)
    -   [getFeedElementsUpdatedSince()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_1)
    -   [getFeedWithFeedElements()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedWithFeedElements_5)
    -   [getLike()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getLike)
    -   [getLikesForComment()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getLikesForComment)
    -   [getLikesForFeedElement()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getLikesForFeedElement_1)
    -   [getLinkMetadata()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getLinkMetadata_1)
    -   [getPinnedFeedElementsFromFeed()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getPinnedFeedElementsFromFeed_1)
    -   [getRelatedPosts()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getRelatedPosts_1)
    -   [getThreadsForFeedComment()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getThreadsForFeedComment_1)
    -   [getVotesForComment()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getVotesForComment_1)
    -   [getVotesForFeedElement()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getVotesForFeedElement_1)
    -   [searchFeedElements()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElements_1)
    -   [searchFeedElementsInFeed()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_1)
    -   [updatePinnedFeedElements()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_updatePinnedFeedElements_2)
-   ChatterGroups methods:
    -   [getGroup()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getGroup)
    -   [getGroups()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getGroups)
    -   [getMembers()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getMembers)
    -   [searchGroups()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_searchGroups)
-   ChatterUsers methods:
    -   [getFollowers()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_getFollowers)
    -   [getFollowings()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_getFollowings)
    -   [getReputation()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_getReputation_1)
    -   [getUser()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_getUser)
    -   [getUserBatch()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_getUserBatch)
    -   [getUserGroups()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_getGroups_3)
    -   [getUsers()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_getUsers)
    -   [searchUserGroupDetails()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_searchUserGroups_3)
    -   [searchUsers()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_searchUsers)
-   CommerceCart methods:
    -   [addItemsToCart()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_addItemsToCart_1)
    -   [addItemToCart()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_addItemToCart_1)
    -   [applyCartCoupon()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_applyCartCoupon_1)
    -   [calculateCart()](https://developer.salesforce.com/docs/atlas.en-us.252.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_Commerce_calculateCart_1)
    -   [cloneCart()](https://developer.salesforce.com/docs/atlas.en-us.246.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_Commerce_cloneCart_1)
    -   [copyCartToWishlist()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_copyCartToWishlist_1)
    -   [createCart()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_createCart_1)
    -   [deleteCart()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_deleteCart_1)
    -   [deleteCartCoupon()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_deleteCartCoupon_1)
    -   [deleteCartItem()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_deleteCartItem_1)
    -   [deleteInventoryReservation()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_deleteInventoryReservation_1) (developer preview)
    -   [evaluateShipping()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_evaluateShipping_1)
    -   [evaluateTaxes()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_evaluateTaxes_1)
    -   [getCartCoupons()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_getCartCoupons_1)
    -   [getCartItems()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_getCartItems_6)
    -   [getCartCompactSummary()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_getCartCompactSummary_1)
    -   [getCartSummary()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_getCartSummary_1)
    -   [getOrCreateActiveCartSummary()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_getOrCreateActiveCartSummary_2)
    -   [makeCartPrimary()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_makeCartPrimary_1)
    -   [setCartMessagesVisibility()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_setCartMessagesVisibility_1)
    -   [updateCartItem()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_updateCartItem_2)
    -   [upsertInventoryReservation()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_upsertInventoryReservation_2.htm) (developer preview)
-   CommerceCatalog methods:
    -   [getCategoryMenuItems()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCatalog_static_methods.htm#apex_ConnectAPI_CommerceCatalog_getCategoryMenuItems_1)
    -   [getProduct()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCatalog_static_methods.htm#apex_ConnectAPI_CommerceCatalog_getProduct_6)
    -   [getProducts()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCatalog_static_methods.htm#apex_ConnectAPI_CommerceCatalog_getProducts_4)
    -   [getProductCategory()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCatalog_static_methods.htm#apex_ConnectAPI_CommerceCatalog_getProductCategory_2)
    -   [getProductCategoryChildren()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCatalog_static_methods.htm#apex_ConnectAPI_CommerceCatalog_getProductCategoryChildren_1)
    -   [getProductCategoryPath()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCatalog_static_methods.htm#apex_ConnectAPI_CommerceCatalog_getStorefrontCategoryPath_1)
    -   [getProductChildCollection()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCatalog_static_methods.htm#apex_ConnectAPI_CommerceCatalog_getProductChildCollection_5)
-   CommercePromotions methods:
    -   decreaseRedemption()
    -   [evaluate()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm#apex_ConnectAPI_CommercePromotions_evaluate_1.xml)
    -   increaseRedemption()
-   CommerceSearch methods:
    -   [getSortRules()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceSearch_static_methods.htm#apex_ConnectAPI_CommerceSearch_getSortRules_1)
    -   [getSuggestions()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceSearch_static_methods.htm#apex_ConnectAPI_CommerceSearch_getSuggestions_1)
    -   [searchProducts()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceSearch_static_methods.htm#apex_ConnectAPI_CommerceSearch_productSearch_1)
-   CommerceStorePricing methods:
    -   [getProductPrice()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceStorePricing_static_methods.htm#apex_ConnectAPI_CommerceStorePricing_getProductPrice_1)
    -   [getProductPrices()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceStorePricing_static_methods.htm#apex_ConnectAPI_CommerceStorePricing_getProductPrices_1)
-   Communities methods:
    -   [getCommunity()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Communities_static_methods.htm#apex_ConnectAPI_Communities_getCommunity)
-   EmployeeProfiles methods:
    -   [getPhoto()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_getPhoto_2)
-   ExtendedCommerceDelivery methods:
    -   [estimateDeliveryDate()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ExtendedCommerceDelivery_static_methods.htm#apex_ConnectAPI_ExtendedCommerceDelivery_estimateDeliveryDate_1)
-   Knowledge methods:
    -   [getTopViewedArticlesForTopic()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm#apex_ConnectAPI_Knowledge_getTopicTopViewedArticles_1)
    -   [getTrendingArticles()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm#apex_ConnectAPI_Knowledge_getTrendingArticles_1)
    -   [getTrendingArticlesForTopic()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm#apex_ConnectAPI_Knowledge_getTrendingArticlesForTopic_1)
-   ManagedContent methods:
    -   [getAllContent()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getAllContent_1)
    -   [getAllDeliveryChannels()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getAllDeliveryChannels_1)
    -   [getAllManagedContent()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getAllManagedContent_1)
    -   [getContentByContentKeys()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getContentByContentKeys_2)
    -   [getContentByIds()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getContentByIds_2)
    -   [getManagedContentByContentKeys()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentByContentKeys_2)
    -   [getManagedContentByIds()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentByIds_2)
    -   [getManagedContentByTopics()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentByTopics_3)
    -   [getManagedContentByTopicsAndContentKeys()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentByTopicsAndContentKeys_3a)
    -   [getManagedContentByTopicsAndIds()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentByTopicsAndIds_4)
-   ManagedContentDelivery methods:
    -   [getChannel()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getChannel_1 "HTML (New Window)")
    -   [getChannels()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getChannels_1 "HTML (New Window)")
    -   [getCollectionItemsForChannel()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getCollectionItemsForChannel_1)
    -   [getCollectionItemsForSite()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getCollectionItemsForSite_2)
    -   [getManagedContentChannel()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentChannel_1)
    -   [getManagedContentForChannel()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentForChannel_1)
    -   [getManagedContentForSite()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentForSite_4)
    -   [getManagedContentsForChannel()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentsForChannel_2)
    -   [getManagedContentsForSite()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentsForSite_4)
-   ManagedTopics methods:
    -   [getManagedTopic()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_getManagedTopic)
    -   [getManagedTopics()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_getManagedTopics_1)
-   MarketingIntegration methods:
    -   [submitForm()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_MarketingIntegration_static_methods.htm#apex_ConnectAPI_MarketingIntegration_submitForm_1)
-   NavigationMenu methods:
    -   [getCommunityNavigationMenu()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_NavigationMenu_static_methods.htm#apex_ConnectAPI_NavigationMenu_getCommunityNavigationMenu_1)
-   NextBestActions methods:
    -   [executeStrategy()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_NextBestAction_static_methods.htm#apex_ConnectAPI_NextBestAction_executeStrategy_1)
    -   [setRecommendationReaction()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_NextBestAction_static_methods.htm#apex_ConnectAPI_NextBestAction_setRecommendationReaction_1)
-   Personalization methods:
    -   [getAudience()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_getAudience_2)
    -   [getAudienceBatch()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_getAudienceBatch_1)
    -   [getAudiences()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_getAudiences_1)
    -   [getTarget()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_getTarget_2)
    -   [getTargetBatch()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_getTargetBatch_1)
    -   [getTargets()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_getTargets_1)
-   Recommendations methods:
    -   [getRecommendationsForUser()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationsForUser_1a)
        
        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)
        
        #### Note
        
        Only article and file recommendations are available to guest users.
        
-   RecordUi methods.
    -   [getPicklistValuesByRecordType()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_RecordUi_static_methods.htm#apex_ConnectAPI_RecordUi_getPicklistValuesByRecordType_1)
-   Search methods.
    -   [answer()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_answer_objects_1)
    -   [find()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_find_object_1)
    -   [findAndGroup()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_find_objects_1)
-   Sites methods:
    -   [searchSite()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Sites_static_methods.htm#apex_ConnectAPI_Sites_searchSite_1)
-   Topics methods:
    -   [getGroupsRecentlyTalkingAboutTopic()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getGroupsRecentlyTalkingAboutTopic)
    -   [getRecentlyTalkingAboutTopicsForGroup()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getRecentlyTalkingAboutTopicsForGroup)
    -   [getRecentlyTalkingAboutTopicsForUser()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getRecentlyTalkingAboutTopicsForUser)
    -   [getRelatedTopics()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getRelatedTopics)
    -   [getTopic()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopic)
    -   [getTopics()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopics)
    -   [getTrendingTopics()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTrendingTopics)
-   UserProfiles methods:
    -   [getPhoto()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_UserProfiles_static_methods.htm#apex_ConnectAPI_UserProfiles_getPhoto)

#### See Also

-   [*Salesforce Help*: Give Secure Access to Unauthenticated Users with the Guest User Profile](https://help.salesforce.com/HTViewHelpDoc?id=networks_public_access.htm&language=en_US "Salesforce Help: Give Secure Access to Unauthenticated
    Users with the Guest User Profile - HTML (New Window)")