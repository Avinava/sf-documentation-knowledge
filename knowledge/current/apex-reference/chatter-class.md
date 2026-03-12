---
title: "Chatter Class"
domain: apex-reference
topic: chatter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:18.065Z
estimatedTokens: 2506
namespace: ConnectApi
keywords: [Chatter, Submit, daily, weekly, email, digest, job, deleteSubscription, communityId, subscriptionId, API, Version, Requires, Usage, getFollowers]
---

# Chatter Class

> Submit a daily or weekly Chatter email digest job.

**Namespace:** `ConnectApi`

# Chatter Class

Access information about followers and subscriptions for records.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Chatter Methods

These methods are for Chatter. All methods are static.

All methods in this class require Chatter and are subject to the per user, per namespace, per hour rate limit.

-   **[deleteSubscription(communityId, subscriptionId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Chatter_static_methods.htm#apex_ConnectAPI_Chatter_deleteSubscription)**
    Delete a subscription. Use this method to stop following a record, a user, or a file.
-   **[getFollowers(communityId, recordId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Chatter_static_methods.htm#apex_ConnectAPI_Chatter_getFollowers)**
    Get the first page of followers for a record.
-   **[getFollowers(communityId, recordId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Chatter_static_methods.htm#apex_ConnectAPI_Chatter_getFollowers_2)**
    Get a page of followers for a record.
-   **[getSubscription(communityId, subscriptionId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Chatter_static_methods.htm#apex_ConnectAPI_Chatter_getSubscription)**
    Get information about a subscription.
-   **[submitDigestJob(period)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Chatter_static_methods.htm#apex_ConnectAPI_Chatter_submitDigestJob_1)**
    Submit a daily or weekly Chatter email digest job.

### deleteSubscription(communityId, subscriptionId)

Delete a subscription. Use this method to stop following a record, a user, or a file.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static void deleteSubscription(String communityId, String subscriptionId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

subscriptionId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID for a subscription.

#### Return Value

Type: Void

#### Usage

“Following” a user, group, or record is the same as “subscribing” to a user, group, or record. A “follower” is the user who followed the user, group, or record. A “subscription” is an object describing the relationship between the follower and the user, group, or record they followed.

To leave a group, call [deleteMember(communityId, membershipId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_deleteMember "Remove a member from a group.").

#### Example

When you follow a user, the call to ConnectApi.ChatterUsers.follow returns a ConnectApi.Subscription object. To stop following the user, pass the id property of that object to this method.

```

```

#### See Also

-   [Follow a Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_follow_record.htm "Follow a Record - HTML (New Window)")

-   [follow(communityId, userId, subjectId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_follow "Follow a user or record.")


### getFollowers(communityId, recordId)

Get the first page of followers for a record.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FollowerPage getFollowers(String communityId, String recordId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a record or the keyword me.

#### Return Value

Type: [ConnectApi.​FollowerPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Follower_Page.htm "Page of followers.")

#### Usage

“Following” a user, group, or record is the same as “subscribing” to a user, group, or record. A “follower” is the user who followed the user, group, or record. A “subscription” is an object describing the relationship between the follower and the user, group, or record they followed.

#### See Also

-   [Follow a Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_follow_record.htm "Follow a Record - HTML (New Window)")


### getFollowers(communityId, recordId, pageParam, pageSize)

Get a page of followers for a record.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FollowerPage getFollowers(String communityId, String recordId, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a record or the keyword me.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.​FollowerPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Follower_Page.htm "Page of followers.")

#### Usage

“Following” a user, group, or record is the same as “subscribing” to a user, group, or record. A “follower” is the user who followed the user, group, or record. A “subscription” is an object describing the relationship between the follower and the user, group, or record they followed.

#### See Also

-   [Follow a Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_follow_record.htm "Follow a Record - HTML (New Window)")


### getSubscription(communityId, subscriptionId)

Get information about a subscription.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Subscription getSubscription(String communityId, String subscriptionId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

subscriptionId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID for a subscription.

#### Return Value

Type: [ConnectApi.​Subscription](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_subscription.htm "Subscription.")

#### Usage

“Following” a user, group, or record is the same as “subscribing” to a user, group, or record. A “follower” is the user who followed the user, group, or record. A “subscription” is an object describing the relationship between the follower and the user, group, or record they followed.

#### See Also

-   [Follow a Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_follow_record.htm "Follow a Record - HTML (New Window)")


### submitDigestJob(period)

Submit a daily or weekly Chatter email digest job.

#### API Version

37.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.DigestJobRepresentation submitDigestJob(ConnectApi.DigestPeriod period)

#### Parameters

period

Type: [ConnectApi.DigestPeriod](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#DigestFrequencyEnum)

Time period that’s included in a Chatter email digest. Values are:

-   DailyDigest—The email includes up to the 50 latest posts from the previous day.
-   WeeklyDigest—The email includes up to the 50 latest posts from the previous week.

#### Return Value

Type: [ConnectApi.DigestJob](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_digest_job.htm#apex_connectapi_output_digest_job "Represents a successfully enqueued API digest job request.")

#### Usage

The times when Chatter sends email digests are not configurable in the UI. To control when email digests are sent and to use this method, contact Salesforce to enable API-only Chatter Digests.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexref)

#### Warning

Enabling API-only Chatter Digests disables the scheduled digests for your org. You must call the API for your users to receive their digests.

We recommend scheduling digest jobs by implementing the Apex Schedulable interface with this method. To monitor your digest jobs from Setup, enter Background Jobs in the Quick Find box, then select **Background Jobs**.

#### Example

Schedule daily digests:

```

```

Schedule weekly digests:

```

```

#### See Also

-   [Apex Scheduler](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_scheduler.htm "Apex Scheduler - HTML (New Window)")

## Code Examples

```
ConnectApi.Chatter.deleteSubscription(null, '0E8RR0000004CnK0AU');
```

```apex
global class ExampleDigestJob1 implements Schedulable {
   global void execute(SchedulableContext context) {
      ConnectApi.Chatter.submitDigestJob(ConnectApi.DigestPeriod.DailyDigest);
   }
}
```

```apex
global class ExampleDigestJob2 implements Schedulable {
   global void execute(SchedulableContext context) {
      ConnectApi.Chatter.submitDigestJob(ConnectApi.DigestPeriod.WeeklyDigest);
   }
}
```

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- deleteSubscription(communityId, subscriptionId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Chatter_static_methods.htm)
- getFollowers(communityId, recordId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Chatter_static_methods.htm)
- getFollowers(communityId, recordId, pageParam, pageSize) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Chatter_static_methods.htm)
- getSubscription(communityId, subscriptionId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Chatter_static_methods.htm)
- submitDigestJob(period) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Chatter_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- deleteMember(communityId, membershipId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm)
- follow(communityId, userId, subjectId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm)
- ConnectApi.​FollowerPage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Follower_Page.htm)
