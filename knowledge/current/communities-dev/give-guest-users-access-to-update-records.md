---
title: "Give Guest Users Access to Update Records"
domain: communities-dev
topic: give-guest-users-access-to-update-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.299Z
estimatedTokens: 1019
keywords: [Give, Guest, Users, Access, Records, allow, perform, action, system, context, sharing, user, record, verify, encrypted]
---

# Give Guest Users Access to Update Records

> To allow guest users to update records, perform the action in the system context without
    sharing. Before you allow a user to update a record, verify an encrypted token previously
    provided to the user as a best practice. To ensure that it’s the correct record, verify
    information about the record, such as its creator.

# Give Guest Users Access to Update Records

To allow guest users to update records, perform the action in the system context without sharing. Before you allow a user to update a record, verify an encrypted token previously provided to the user as a best practice. To ensure that it’s the correct record, verify information about the record, such as its creator.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=communities_dev)

#### Warning

The Summer ’20 release added new settings and [updated guidelines](https://help.salesforce.com/articleView?id=networks_guest_policies_timelines.htm&language=en_US) for guest user record access. As of Winter ’21, the guidelines introduced with the Summer ’20 update are enforced. After the Winter ’21 release, you must use the without sharing mode because you can’t use sharing rules to grant guest users update access to records..

## Lightning Components and Guest Users

Lightning components that link directly with an object’s fields automatically perform object permissions and field-level security (FLS) checks to determine whether the components display for the user. If you have the **Secure guest user record access** setting enabled, then you can’t give guest users access to update records. In that scenario, object permission checks that require update permissions fail and the components don’t display.

To use Lightning components to handle guest user input, use variables to set the values of the Lightning components. Then separately associate those variables with the record’s fields in the Apex code. Because this method works around the automatic object permissions and FLS checks, implement your Lightning components with these guidelines:

-   Use server-side code to retrieve the record and verify it’s the record that you want to update before you perform the update.
-   Don’t pass record fields to the client unless you want to display them to the user. Any data you send to the client is public.
-   Don’t pass record IDs to the client. Don’t accept record IDs from the client. To create a unique identifier for a record, encrypt the record ID as a string.
-   Use server-side logic to restrict the update to only the desired fields. Don’t use client-side code to determine server-side behavior.
-   Use server-side logic to validate data from the client before the code performs the update.

#### See Also

-   [Sample Code Without Sharing: Give Guest Users Access to Create Records and Update Them Later](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_without_sharing__let_guest_users_create_records_and_update_them_later.htm "These code samples support two separate interactions. In the first interaction, the guest user creates a case. For security reasons, an Apex method replaces the record ID with an encrypted string. When the guest user wants to close the case later, they enter that encrypted string. An Apex method decrypts the string to get the record ID, uses the record ID to select the case, and updates the case’s status.")

-   [*Salesforce Developers Wiki*: Enforcing CRUD and FLS](https://developer.salesforce.com/wiki/enforcing_crud_and_fls "Salesforce Developers Wiki: Enforcing CRUD and FLS - HTML (New Window)")

-   [Encrypt Record IDs for Guest Users](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_record_id_encryption_for_guest_users.htm "For security reasons, don’t allow guest users to look up records by record ID unless you want the record to be public. When a guest user creates a record and wants to access it later, create an encrypted string that uses a combination of the record ID, record creation timestamp, and a current timestamp. The encrypted string acts as a unique identifier for the record that only the record creator has. At a later date, the Apex code that handles the request requires the guest user to submit the encrypted string. That Apex code decrypts the string to get the record ID and other record identifiers, and it retrieves or updates the requested record.")

## Related Topics

- Sample Code Without Sharing: Give Guest Users Access to Create Records and Update Them Later (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_without_sharing__let_guest_users_create_records_and_update_them_later.htm)
- Encrypt Record IDs for Guest Users (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_record_id_encryption_for_guest_users.htm)
