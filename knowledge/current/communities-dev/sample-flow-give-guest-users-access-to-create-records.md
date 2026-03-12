---
title: "Sample Flow: Give Guest Users Access to Create Records"
domain: communities-dev
topic: sample-flow-give-guest-users-access-to-create-records
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:23.457Z
estimatedTokens: 679
keywords: [Sample, Flow, Give, Guest, Users, Access, Records, user, enters, feedback, stores, custom, record, doesn’t, creation]
---

# Sample Flow: Give Guest Users Access to Create Records

> In this sample flow, the guest user enters feedback and the flow stores it in a custom
    object record. The guest user doesn’t have access to read the record after creation.

# Sample Flow: Give Guest Users Access to Create Records

In this sample flow, the guest user enters feedback and the flow stores it in a custom object record. The guest user doesn’t have access to read the record after creation.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=communities_dev)

#### Important

Before you give record creation access to guest users, read [Give Guest Users Access to Create Records](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_give_guest_users_access_to_create_records.htm "So guest users can create object records, configure the guest user profile to include create access for the desired object.").

![The sample flow with numbered elements](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fguest_users_flow_create_records.png&folder=communities_dev)

## Custom Feedback\_\_c Object

This scenario uses the Feedback\_\_c custom object to store feedback from guest users. A Feedback\_\_c custom object has these fields, listed in alphabetical order:

Email\_\_c

Required. The guest user’s email address. Data type: Email

Score\_\_c

Required. The feedback score entered by the guest user. Possible values are 0, 1, 2, 3, 4, 5.

Additional\_comments\_\_c

Any additional feedback entered by the guest user. Data type: Long Text Area

## Flow Configuration

Because the flow doesn’t require read access to any records and we’re not relying on object permissions, set the **How to Run the Flow** setting to **System Context without Sharing—Access All Data**.

## Feedback Form (1)

The first element in the flow is a screen that displays these components:

-   An Email component for the user’s email address.
-   A Slider component for the user’s feedback score, set to allow whole numbers from 0 to 5.
-   A Long Text Area component for any additional comments.

## Create Records (2)

The next element is a Create Records element that creates a Feedback\_\_c record.

## End Screen (3)

The final screen element displays text to thank the user for their feedback.

#### See Also

-   [*Salesforce Help*: Which Context Do Flows Run In?](https://help.salesforce.com/articleView?id=flow_distribute_context.htm&language=en_US "Salesforce Help: Which Context Do Flows Run In? - HTML (New Window)")

-   [*Salesforce Help*: Flow Elements](https://help.salesforce.com/articleView?id=flow_ref_elements.htm&language=en_US "Salesforce Help: Flow Elements - HTML (New Window)")

-   [*Salesforce Help*: Allow Guest Users to Access Flows](https://help.salesforce.com/articleView?id=rss_flow_guestuser.htm&language=en_US "Salesforce Help: Allow Guest Users to Access Flows - HTML (New Window)")

## Related Topics

- Give Guest Users Access to Create Records (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_give_guest_users_access_to_create_records.htm)
