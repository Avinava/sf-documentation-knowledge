---
title: "Unauthenticated Guest User Guidelines"
domain: communities-dev
topic: unauthenticated-guest-user-guidelines
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:23.477Z
estimatedTokens: 551
keywords: [Unauthenticated, Guest, User, Guidelines, Consider, record, encryption, providing, different, levels, access, users, choose, declarative, custom]
---

# Unauthenticated Guest User Guidelines

> Consider these guidelines about record ID encryption and providing different levels
        of access to unauthenticated guest users before you choose a declarative or custom access
        control model.

# Unauthenticated Guest User Guidelines

Consider these guidelines about record ID encryption and providing different levels of access to unauthenticated guest users before you choose a declarative or custom access control model.

-   **[Encrypt Record IDs for Guest Users](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_record_id_encryption_for_guest_users.htm)**
    For security reasons, don’t allow guest users to look up records by record ID unless you want the record to be public. When a guest user creates a record and wants to access it later, create an encrypted string that uses a combination of the record ID, record creation timestamp, and a current timestamp. The encrypted string acts as a unique identifier for the record that only the record creator has. At a later date, the Apex code that handles the request requires the guest user to submit the encrypted string. That Apex code decrypts the string to get the record ID and other record identifiers, and it retrieves or updates the requested record.
-   **[Give Guest Users Access to Read Records](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_give_guest_users_read_access_to_records.htm)**
    When you allow guest users access to read record data, you expose your data to the public. Review our guidelines, and design your implementation to allow the necessary access to guest users without compromising your data.
-   **[Give Guest Users Access to Create Records](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_give_guest_users_access_to_create_records.htm)**
    So guest users can create object records, configure the guest user profile to include create access for the desired object.
-   **[Give Guest Users Access to Update Records](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_give_guest_users_access_to_update_records.htm)**
    To allow guest users to update records, perform the action in the system context without sharing. Before you allow a user to update a record, verify an encrypted token previously provided to the user as a best practice. To ensure that it’s the correct record, verify information about the record, such as its creator.

## Related Topics

- Encrypt Record IDs for Guest Users (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_record_id_encryption_for_guest_users.htm)
- Give Guest Users Access to Read Records (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_give_guest_users_read_access_to_records.htm)
- Give Guest Users Access to Create Records (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_give_guest_users_access_to_create_records.htm)
- Give Guest Users Access to Update Records (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_give_guest_users_access_to_update_records.htm)
