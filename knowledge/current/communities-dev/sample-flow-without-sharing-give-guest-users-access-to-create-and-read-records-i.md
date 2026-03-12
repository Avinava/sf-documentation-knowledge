---
title: "Sample Flow Without Sharing: Give Guest Users Access to Create and Read Records in One
    Flow"
domain: communities-dev
topic: sample-flow-without-sharing-give-guest-users-access-to-create-and-read-records-i
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.467Z
estimatedTokens: 1109
keywords: [Sample, Flow, Sharing, Give, Guest, Users, Access, Records, user, enters, report, support, issue, creates, case]
---

# Sample Flow Without Sharing: Give Guest Users Access to Create and Read Records in One
    Flow

> In this sample flow, the guest user enters details to report a support issue and the flow
    creates a case. After the guest user creates the record, a default active user becomes the owner
    of the record and the guest user doesn’t have direct access to it. The flow then retrieves the
    new case to get the case’s CaseNumber and Status fields and displays those fields to the guest user.
    Because the guest user doesn’t own the record after creation and the flow must retrieve the
    record, the flow runs without sharing.

# Sample Flow Without Sharing: Give Guest Users Access to Create and Read Records in One Flow

In this sample flow, the guest user enters details to report a support issue and the flow creates a case. After the guest user creates the record, a default active user becomes the owner of the record and the guest user doesn’t have direct access to it. The flow then retrieves the new case to get the case’s CaseNumber and Status fields and displays those fields to the guest user. Because the guest user doesn’t own the record after creation and the flow must retrieve the record, the flow runs without sharing.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=communities_dev)

#### Important

Before you give create and read access to guest users, read [Give Guest Users Access to Read Records](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_give_guest_users_read_access_to_records.htm "When you allow guest users access to read record data, you expose your data to the public. Review our guidelines, and design your implementation to allow the necessary access to guest users without compromising your data.") and [Give Guest Users Access to Create Records](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_give_guest_users_access_to_create_records.htm "So guest users can create object records, configure the guest user profile to include create access for the desired object.").

![The sample flow with numbered elements](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fguest_users_flow_without_sharing_create_read_numbered.png&folder=communities_dev)

## Flow Configuration

Because the flow creates a record and then retrieves the record without sharing, set the **How to Run the Flow** setting to **System Context Without Sharing—Access All Data**.

## Case Form (1)

The first element in the flow is a screen that displays these input components:

-   A Text component for the company’s name
-   A Name component for the submitter’s name
-   An Email component for the submitter’s email address
-   A Phone component for the submitter’s phone number
-   A Picklist component with option values from the record type’s Type\_Options field
-   A Picklist component with option values from the record type’s Reason\_Options field
-   A Text component for the subject of the case
-   A Long Text Area component for the description of the case

## Assignment (2)

The second element assigns the data from the input components to a new Case record variable.

## Create Records (3)

The next element is a Create Records element that uses the Case record variable to create a Case record. In addition to the information entered by the guest user, set the element configuration to define the case’s origin field as Web.

## Get Records (4)

The Get Records element retrieves the new record by its Id field that is automatically defined by the Create Records element. The retrieved record is stored in a new Case record variable.

## End Screen (5)

The final screen element displays the Case’s CaseNumber and Status fields from the Get Record element’s Case record variable.

#### See Also

-   [*Salesforce Help*: Which Context Do Flows Run In?](https://help.salesforce.com/articleView?id=flow_distribute_context.htm&language=en_US "Salesforce Help: Which Context Do Flows Run In? - HTML (New Window)")

-   [*Salesforce Help*: Flow Elements](https://help.salesforce.com/articleView?id=flow_ref_elements.htm&language=en_US "Salesforce Help: Flow Elements - HTML (New Window)")

-   [*Salesforce Help*: Allow Guest Users to Access Flows](https://help.salesforce.com/articleView?id=rss_flow_guestuser.htm&language=en_US "Salesforce Help: Allow Guest Users to Access Flows - HTML (New Window)")

-   [*Salesforce Help*: Apex Actions](https://help.salesforce.com/articleView?id=flow_ref_elements_apex_invocable.htm&language=en_US "Salesforce Help: Apex Actions - HTML (New Window)")

-   [*Salesforce Help*: Flows in Transactions](https://help.salesforce.com/articleView?id=flow_concepts_transaction.htm&language=en_US "Salesforce Help: Flows in Transactions - HTML (New Window)")

-   [*Apex Developer Guide*: InvocableMethod Annotation](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm "Apex Developer Guide: InvocableMethod Annotation - HTML (New Window)")

## Related Topics

- Give Guest Users Access to Read Records (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_give_guest_users_read_access_to_records.htm)
- Give Guest Users Access to Create Records (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_give_guest_users_access_to_create_records.htm)
