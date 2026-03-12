---
title: "ConnectApi.BatchResult"
domain: apex-reference
topic: connectapibatchresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:26.187Z
estimatedTokens: 1127
keywords: [ConnectApi.BatchResult, result, operation, returned, batch, method., Usage, Example]
---

# ConnectApi.BatchResult

> The result of an operation returned by a batch method.

# ConnectApi.BatchResult

The result of an operation returned by a batch method.

## Usage

Calls to batch methods return a list of BatchResult objects. Each element in the BatchResult list corresponds to the strings in the list parameter passed to the batch method. The first element in the BatchResult list matches the first string passed in the list parameter, the second element corresponds with the second string, and so on. If only one string is passed, the BatchResult list contains a single element.

## Example

The following example shows how to obtain and iterate through the returned ConnectApi.BatchResult objects. The code adds two group IDs to a list. One of group IDs is incorrect, which causes a failure when the code calls the batch method. After it calls the batch method, it iterates through the results to determine whether the operation was successful or not for each group ID in the list. The code writes the ID of every group that was processed successfully to the debug log. The code writes an error message for every failed group.

This example generates one successful operation and one failure.

```

```

-   **[BatchResult Methods](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result_methods.htm)**
    These are instance methods for BatchResult.

#### See Also

-   [getCommentBatch(communityId, commentIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getCommentBatch_1 "Get a list of comments.")

-   [getFeedElementBatch(communityId, feedElementIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementBatch_1 "Get a list of feed elements.")

-   [updateFeedElementReadByCapabilityBatch(communityId, feedElementIds, readBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_updateFeedElementReadByCapabilityBatch_1 "Mark multiple feed elements as read by the context user at the same time using an input class.")

-   [postFeedElementBatch(communityId, feedElements)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElementBatch_1 "Post a list of feed elements.")

-   [updateFeedElementReadByCapabilityBatch(communityId, feedElementIds, isReadByMe)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_updateFeedElementReadByCapabilityBatch_2 "Mark multiple feed elements as read by the context user at the same time.")

-   [getMembershipBatch(communityId, membershipIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getMembershipBatch "Get information about a list of group memberships.")

-   [getGroupBatch(communityId, groupIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getGroupBatch "Get information about a list of groups.")

-   [getUserBatch(communityId, userIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_getUserBatch "Get information about a list of users.")

-   [addItemsToCart(webstoreId, effectiveAccountId, activeCartOrId, cartItems, currencyIsoCode)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_addItemsToCart_2 "Add a batch of up to 100 items to a cart of a specific currency.")

-   [addItemsToCart(webstoreId, effectiveAccountId, activeCartOrId, cartItems)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_Commerce_addItemsToCart_1 "Add a batch of up to 100 items to a cart.")

-   [getAudienceBatch(communityId, audienceIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_getAudienceBatch_1 "Get audience information for a comma-separated list of audience IDs.")

-   [getTargetBatch(communityId, targetIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Personalization_static_methods.htm#apex_ConnectAPI_Personalization_getTargetBatch_1 "Get target information for a comma-separated list of target IDs.")

-   [getMotifBatch(communityId, idOrPrefixList)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Records_static_methods.htm#apex_ConnectAPI_Records_getMotifBatch "Get a motif for a list of objects.")

## Code Examples

```apex
List<String> myList = new List<String>();
// Add one correct group ID.
myList.add('0F9D00000000oOT'); 
// Add one incorrect group ID.
myList.add('0F9D00000000izf');

ConnectApi.BatchResult[] batchResults = ConnectApi.ChatterGroups.getGroupBatch(null, myList);

// Iterate through each returned result.
for (ConnectApi.BatchResult batchResult : batchResults) {
    if (batchResult.isSuccess()) {
        // Operation was successful. 
        // Print the group ID.
        ConnectApi.ChatterGroupSummary groupSummary;
        if(batchResult.getResult() instanceof ConnectApi.ChatterGroupSummary) {
           groupSummary = (ConnectApi.ChatterGroupSummary) batchResult.getResult();
        }
        System.debug('SUCCESS');
        System.debug(groupSummary.id);
    }
    else {
        // Operation failed. Print errors.
        System.debug('FAILURE');
        System.debug(batchResult.getErrorMessage());
    }
}
```

## Related Topics

- BatchResult Methods (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result_methods.htm)
- getCommentBatch(communityId, commentIds) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm)
- getFeedElementBatch(communityId, feedElementIds) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm)
- updateFeedElementReadByCapabilityBatch(communityId, feedElementIds, readBy) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm)
- postFeedElementBatch(communityId, feedElements) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm)
- updateFeedElementReadByCapabilityBatch(communityId, feedElementIds, isReadByMe) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm)
- getMembershipBatch(communityId, membershipIds) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm)
- getGroupBatch(communityId, groupIds) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm)
- getUserBatch(communityId, userIds) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm)
- addItemsToCart(webstoreId, effectiveAccountId, activeCartOrId, cartItems, currencyIsoCode) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm)
