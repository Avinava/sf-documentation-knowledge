---
title: "Sample Flow With Sharing: Give Guest Users Access to Read Records"
domain: communities-dev
topic: sample-flow-with-sharing-give-guest-users-access-to-read-records
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:23.462Z
estimatedTokens: 755
keywords: [Sample, Flow, Sharing, Give, Guest, Users, Access, Records, user, enters, date, range, views, events, rules]
---

# Sample Flow With Sharing: Give Guest Users Access to Read Records

> In this sample flow, the guest user enters a date range and then views events within that
    range. The guest user has read access to the records with sharing rules, so the guest user
    profile determines which fields the flow can access.

# Sample Flow With Sharing: Give Guest Users Access to Read Records

In this sample flow, the guest user enters a date range and then views events within that range. The guest user has read access to the records with sharing rules, so the guest user profile determines which fields the flow can access.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=communities_dev)

#### Important

Before you give read access to guest users, see [Give Guest Users Access to Read Records](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_give_guest_users_read_access_to_records.htm "When you allow guest users access to read record data, you expose your data to the public. Review our guidelines, and design your implementation to allow the necessary access to guest users without compromising your data.").

![The sample flow with numbered elements](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fguest_users_flow_with_sharing_read_numbered.png&folder=communities_dev)

## Flow Configuration

Because the guest user has access to the records via sharing rules, set the **How to Run the Flow** setting to **User or System Context—Depends on How Flow is Launched**.

## Enter Date Range (1)

The first element in the flow is a screen that displays start and end date input fields. The element saves the input dates in the variables Start\_Date and End\_Date.

## Get Events (2)

The next element is a Get Records query that selects events if they match these criteria:

-   The event’s StartDateTime is greater than the Start\_Date variable.
-   The event’s EndDateTime is less than the End\_Date variable.
-   The event’s isPrivate value is False.
-   The event’s isArchived value is False.

The element saves the selected events in the GetEvents variable.

## Loop Records (3)

The Loop element loops over each event in the GetEvents variable.

Inside the loop, the Assignment element appends each event’s StartDateTime, EndDateTime, Subject, and Location to a string.

## Show Events (4)

The final element is a screen that displays the string that contains all the events.

#### See Also

-   [*Salesforce Help*: Secure Guest Users’ Sharing Settings and Record Access](https://help.salesforce.com/articleView?id=networks_secure_guest_user_sharing.htm&language=en_US "Salesforce Help: Secure Guest Users’ Sharing Settings and Record
    Access - HTML (New Window)")

-   [*Salesforce Help*: Sharing Rules](https://help.salesforce.com/articleView?id=security_about_sharing_rules.htm&language=en_US "Salesforce Help: Sharing Rules - HTML (New Window)")

-   [*Salesforce Help*: Which Context Do Flows Run In?](https://help.salesforce.com/articleView?id=flow_distribute_context.htm&language=en_US "Salesforce Help: Which Context Do Flows Run In? - HTML (New Window)")

-   [*Salesforce Help*: Flow Elements](https://help.salesforce.com/articleView?id=flow_ref_elements.htm&language=en_US "Salesforce Help: Flow Elements - HTML (New Window)")

## Related Topics

- Give
        Guest Users Access to Read Records (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_give_guest_users_read_access_to_records.htm)
