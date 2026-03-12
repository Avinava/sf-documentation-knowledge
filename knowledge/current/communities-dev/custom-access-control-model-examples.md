---
title: "Custom Access Control Model Examples"
domain: communities-dev
topic: custom-access-control-model-examples
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.472Z
estimatedTokens: 812
keywords: [Custom, Access, Control, Model, Examples, code, flow, provide, unauthenticated, guest, users, records]
---

# Custom Access Control Model Examples

> These code and flow examples use a custom access control model to provide
        unauthenticated guest users access to create records.

# Custom Access Control Model Examples

These code and flow examples use a custom access control model to provide unauthenticated guest users access to create records.

-   **[Sample Code Without Sharing: Give Guest Users Access to Create Records and Read Them Later](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_without_sharing__let_guest_users_create_records_and_read_them_later.htm)**
    These code samples support two separate interactions. In the first interaction, the guest user creates a case. To allow for future access, an Apex method replaces the record ID with an encrypted string. When the guest user wants to read the case later, they enter the encrypted string. An Apex method decrypts the string and uses it to retrieve the case.
-   **[Sample Flow: Give Guest Users Access to Create Records](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_flow__let_guest_users_create_records.htm)**
    In this sample flow, the guest user enters feedback and the flow stores it in a custom object record. The guest user doesn’t have access to read the record after creation.
-   **[Sample Code Without Sharing: Give Guest Users Access to Create and Read Records in the Same Transaction](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_without_sharing__let_guest_users_create_and_read_records_in_the_same_transaction.htm)**
    In this collection of code samples, the guest user enters details to report a support issue and Apex code creates a case. An Apex method retrieves the new record and Aura components display parts of the record to the guest user after creation. The Apex code runs without sharing because we aren’t relying on object permissions and platform sharing to allow the guest user to access the record.
-   **[Sample Flow Without Sharing: Give Guest Users Access to Create and Read Records in One Flow](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_flow_without_sharing__let_guest_users_create_and_read_records_in_one_flow.htm)**
    In this sample flow, the guest user enters details to report a support issue and the flow creates a case. After the guest user creates the record, a default active user becomes the owner of the record and the guest user doesn’t have direct access to it. The flow then retrieves the new case to get the case’s CaseNumber and Status fields and displays those fields to the guest user. Because the guest user doesn’t own the record after creation and the flow must retrieve the record, the flow runs without sharing.
-   **[Sample Code Without Sharing: Give Guest Users Access to Create Records and Update Them Later](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_without_sharing__let_guest_users_create_records_and_update_them_later.htm)**
    These code samples support two separate interactions. In the first interaction, the guest user creates a case. For security reasons, an Apex method replaces the record ID with an encrypted string. When the guest user wants to close the case later, they enter that encrypted string. An Apex method decrypts the string to get the record ID, uses the record ID to select the case, and updates the case’s status.

## Related Topics

- Sample Code Without Sharing: Give Guest Users Access to Create Records and Read Them Later (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_without_sharing__let_guest_users_create_records_and_read_them_later.htm)
- Sample Flow: Give Guest Users Access to Create Records (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_flow__let_guest_users_create_records.htm)
- Sample Code Without Sharing: Give Guest Users Access to Create and Read Records in the Same Transaction (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_without_sharing__let_guest_users_create_and_read_records_in_the_same_transaction.htm)
- Sample Flow Without Sharing: Give Guest Users Access to Create and Read Records in One Flow (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_flow_without_sharing__let_guest_users_create_and_read_records_in_one_flow.htm)
- Sample Code Without Sharing: Give Guest Users Access to Create Records and Update Them Later (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_without_sharing__let_guest_users_create_records_and_update_them_later.htm)
