---
title: "Give Guest Users Access to Create Records"
domain: communities-dev
topic: give-guest-users-access-to-create-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.296Z
estimatedTokens: 1174
keywords: [Give, Guest, Users, Access, Records, configure, user, profile, include, desired, Record, IDs, Creation, Apex, Flow]
---

# Give Guest Users Access to Create Records

> So guest users can create object records, configure the guest user profile to include
    create access for the desired object.

# Give Guest Users Access to Create Records

So guest users can create object records, configure the guest user profile to include create access for the desired object.

To grant create access to an object, you must grant read access to the object. If read access isn’t needed on that object, we recommend removing all permissions for that object and running the create logic in a without sharing controller.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=communities_dev)

#### Tip

Perform data validation on guest-created data to ensure that it doesn’t impact your automated processes.

## Record IDs and Guest Users

After record creation, don’t include the record ID in the response to the client. To create a unique record identifier for later access, encrypt the record ID with the record creation timestamp, and return the encrypted string to the client.

When you retrieve a record, the record ID is automatically included in the object. Remove the record ID from the object, and don’t pass it to the client.

## Record Creation and Access in Apex Methods

Guest user sharing rules take effect after the transaction completes. If Apex code with sharing creates and then requests the newly created record, and the guest user is relying on sharing rules to access the record, the read request fails because the guest sharing rules haven’t taken effect. To allow a guest user to create a record and read the newly created record in the same method, define the class with the without sharing keyword.

## Record Creation and Access in Flow

In a flow, the Create Records element doesn’t create records until the interview executes a Screen, Local Action, or Pause element. To create and read the same record in the same flow, insert a screen between record creation and retrieval, or read the record in an Apex action.

## Samples

-   [Sample Flow: Give Guest Users Access to Create Records](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_flow__let_guest_users_create_records.htm "In this sample flow, the guest user enters feedback and the flow stores it in a custom object record. The guest user doesn’t have access to read the record after creation.")
-   [Sample Flow Without Sharing: Give Guest Users Access to Create and Read Records in One Flow](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_flow_without_sharing__let_guest_users_create_and_read_records_in_one_flow.htm "In this sample flow, the guest user enters details to report a support issue and the flow creates a case. After the guest user creates the record, a default active user becomes the owner of the record and the guest user doesn’t have direct access to it. The flow then retrieves the new case to get the case’s CaseNumber and Status fields and displays those fields to the guest user. Because the guest user doesn’t own the record after creation and the flow must retrieve the record, the flow runs without sharing.")
-   [Sample Code Without Sharing: Give Guest Users Access to Create and Read Records in the Same Transaction](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_without_sharing__let_guest_users_create_and_read_records_in_the_same_transaction.htm "In this collection of code samples, the guest user enters details to report a support issue and Apex code creates a case. An Apex method retrieves the new record and Aura components display parts of the record to the guest user after creation. The Apex code runs without sharing because we aren’t relying on object permissions and platform sharing to allow the guest user to access the record.")

#### See Also

-   [*Salesforce Help*: Configure the Guest User Profile](https://help.salesforce.com/articleView?id=rss_config_guest_user_profile.htm&language=en_US "Salesforce Help: Configure the Guest User Profile - HTML (New Window)")

-   [Encrypt Record IDs for Guest Users](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_record_id_encryption_for_guest_users.htm "For security reasons, don’t allow guest users to look up records by record ID unless you want the record to be public. When a guest user creates a record and wants to access it later, create an encrypted string that uses a combination of the record ID, record creation timestamp, and a current timestamp. The encrypted string acts as a unique identifier for the record that only the record creator has. At a later date, the Apex code that handles the request requires the guest user to submit the encrypted string. That Apex code decrypts the string to get the record ID and other record identifiers, and it retrieves or updates the requested record.")

## Related Topics

- Sample Flow: Give Guest Users Access to Create Records (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_flow__let_guest_users_create_records.htm)
- Sample Flow Without Sharing: Give Guest Users Access to Create and Read Records in One Flow (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_flow_without_sharing__let_guest_users_create_and_read_records_in_one_flow.htm)
- Sample Code Without Sharing: Give Guest Users Access to Create and Read Records in the Same Transaction (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_without_sharing__let_guest_users_create_and_read_records_in_the_same_transaction.htm)
- Encrypt Record IDs for Guest Users (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_record_id_encryption_for_guest_users.htm)
