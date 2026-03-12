---
title: "Give Guest Users Access to Read Records"
domain: communities-dev
topic: give-guest-users-access-to-read-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.304Z
estimatedTokens: 1996
keywords: [Give, Guest, Users, Access, Records, allow, record, data, expose, Review, guidelines, design, implementation, necessary, compromising]
---

# Give Guest Users Access to Read Records

> When you allow guest users access to read record data, you expose your data to the
    public. Review our guidelines, and design your implementation to allow the necessary access to
    guest users without compromising your data.

# Give Guest Users Access to Read Records

When you allow guest users access to read record data, you expose your data to the public. Review our guidelines, and design your implementation to allow the necessary access to guest users without compromising your data.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=communities_dev)

#### Warning

The Summer ’20 release added new settings and [updated guidelines](https://help.salesforce.com/articleView?id=networks_guest_policies_timelines.htm&language=en_US) for guest user record access. As of Winter ’21, the guidelines introduced with the Summer ’20 update are enforced. After the Winter ’21 release, use one of the methods described in this document because the previous methods no longer work.

Each time a guest user requests to read record data, the response runs in a mode that determines if sharing rules apply to the request. Because the modes have different security implications, consider the sensitivity of your data to determine the safest method for your business needs. You can also use separate flows or multiple Apex classes to run some requests in one mode and other requests in another mode.

## How to Treat Sensitive Information

Remove all sensitive information from records before returning data to an unauthenticated user. For security reasons, don’t use guessable information like record IDs to retrieve records that contain sensitive information.

## With Sharing

A record request that runs with sharing can’t access records unless sharing rules give the guest user access to them. Consider sharing rules for read-only access if these scenarios are true:

-   You want to make the records public and accessible by anyone.
-   The target records can be selected with sharing rules without exposing other records.

## Without Sharing

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=communities_dev)

#### Warning

When you implement requests without sharing, design the requests and the response data carefully to ensure that you don’t unintentionally expose your org’s sensitive data.

A record request that runs in system mode without sharing performs actions with system-level access and bypasses sharing rules. If you aren’t careful about the actions it performs and how it performs them, the request can expose or modify record data when run without sharing. A query that runs without sharing exposes all selected records to the public.

Consider system mode without sharing if any of these scenarios are true:

-   Your guest users need more than read-only access for the records.
-   You don’t want the records to be public.
-   You can’t select the records without exposing other records.
-   The target records are part of a parent-child relationship and access to the child records is limited by write access on the parent records. Because sharing rules can’t give write access to guest users, run the request without sharing in this scenario.

## Encrypted Record IDs for Record Selection

If a guest user creates a record and must access it later, encrypt the record ID with the record creation timestamp, and return the encrypted string to the client. Provide the guest user with a URL that contains the encrypted string so they can avoid typing the long string. When they request read access to the record, retrieve the encrypted string from the URL. To select the record, use the decrypted record ID.

## Lightning Components

Lightning components that link directly with an object’s fields automatically perform object create, read, updated, and delete (CRUD) permission and field-level security (FLS) checks to determine whether the components display for the user. For records that you don’t share with guest users, the CRUD and FLS checks fail, and the components don’t display. To use Lightning components to display those records, set their values to variables, and separately associate those variables with the object’s fields in Apex code.

Because this method works around the automatic CRUD and FLS checks, implement your Lightning components with these guidelines:

-   In your queries, include only the record fields that you need.
-   Don’t pass sensitive fields to the client-side code.
-   Pass only fields that the client requires to the client. All data sent to the client is public.

## Code Samples

-   [Sample Code With Sharing: Give Guest Users Access to Read Records](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_with_sharing__give_read_access_to_guest_users.htm "In this collection of code samples, the guest user enters a date range and then views events within that range. The guest user has read access to the records via sharing rules.")
-   [Sample Code Without Sharing: Give Guest Users Access to Create and Read Records in the Same Transaction](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_without_sharing__let_guest_users_create_and_read_records_in_the_same_transaction.htm "In this collection of code samples, the guest user enters details to report a support issue and Apex code creates a case. An Apex method retrieves the new record and Aura components display parts of the record to the guest user after creation. The Apex code runs without sharing because we aren’t relying on object permissions and platform sharing to allow the guest user to access the record.")
-   [Sample Code Without Sharing: Give Guest Users Access to Create Records and Read Them Later](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_without_sharing__let_guest_users_create_records_and_read_them_later.htm "These code samples support two separate interactions. In the first interaction, the guest user creates a case. To allow for future access, an Apex method replaces the record ID with an encrypted string. When the guest user wants to read the case later, they enter the encrypted string. An Apex method decrypts the string and uses it to retrieve the case.")

## Flow Samples

-   [Sample Flow With Sharing: Give Guest Users Access to Read Records](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_flow_with_sharing__give_read_access_to_guest_users.htm "In this sample flow, the guest user enters a date range and then views events within that range. The guest user has read access to the records with sharing rules, so the guest user profile determines which fields the flow can access.")
-   [Sample Flow Without Sharing: Give Guest Users Access to Create and Read Records in One Flow](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_flow_without_sharing__let_guest_users_create_and_read_records_in_one_flow.htm "In this sample flow, the guest user enters details to report a support issue and the flow creates a case. After the guest user creates the record, a default active user becomes the owner of the record and the guest user doesn’t have direct access to it. The flow then retrieves the new case to get the case’s CaseNumber and Status fields and displays those fields to the guest user. Because the guest user doesn’t own the record after creation and the flow must retrieve the record, the flow runs without sharing.")

#### See Also

-   [*Salesforce Help*: Secure Guest Users’ Sharing Settings and Record Access](https://help.salesforce.com/articleView?id=networks_secure_guest_user_sharing.htm&language=en_US "Salesforce Help: Secure Guest Users’ Sharing Settings and Record
    Access - HTML (New Window)")

-   [*Salesforce Help*: Sharing Rules](https://help.salesforce.com/articleView?id=security_about_sharing_rules.htm&language=en_US "Salesforce Help: Sharing Rules - HTML (New Window)")

-   [*Salesforce Security Guide*: Sharing Rules](https://developer.salesforce.com/docs/atlas.en-us.260.0.securityImplGuide.meta/securityImplGuide/security_about_sharing_rules.htm "Salesforce Security Guide: Sharing Rules - HTML (New Window)")

## Related Topics

- Sample Code With Sharing: Give Guest Users Access to Read Records (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_with_sharing__give_read_access_to_guest_users.htm)
- Sample Code Without Sharing: Give Guest Users Access to Create and Read Records in the Same Transaction (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_without_sharing__let_guest_users_create_and_read_records_in_the_same_transaction.htm)
- Sample Code Without Sharing: Give Guest Users Access to Create Records and Read Them Later (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_without_sharing__let_guest_users_create_records_and_read_them_later.htm)
- Sample Flow With Sharing: Give Guest Users Access to Read Records (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_flow_with_sharing__give_read_access_to_guest_users.htm)
- Sample Flow Without Sharing: Give Guest Users Access to Create and Read Records in One Flow (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_flow_without_sharing__let_guest_users_create_and_read_records_in_one_flow.htm)
