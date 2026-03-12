---
title: "Encrypt Record IDs for Guest Users"
domain: communities-dev
topic: encrypt-record-ids-for-guest-users
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.388Z
estimatedTokens: 725
keywords: [Encrypt, Record, IDs, Guest, Users, security, reasons, don’t, allow, look, records, unless, want, user, creates]
---

# Encrypt Record IDs for Guest Users

> For security reasons, don’t allow guest users to look up records by record ID unless you
    want the record to be public. When a guest user creates a record and wants to access it later,
    create an encrypted string that uses a combination of the record ID, record creation timestamp,
    and a current timestamp. The encrypted string acts as a unique identifier for the record that
    only the record creator has. At a later date, the Apex code that handles the request requires
    the guest user to submit the encrypted string. That Apex code decrypts the string to get the
    record ID and other record identifiers, and it retrieves or updates the requested
    record.

# Encrypt Record IDs for Guest Users

For security reasons, don’t allow guest users to look up records by record ID unless you want the record to be public. When a guest user creates a record and wants to access it later, create an encrypted string that uses a combination of the record ID, record creation timestamp, and a current timestamp. The encrypted string acts as a unique identifier for the record that only the record creator has. At a later date, the Apex code that handles the request requires the guest user to submit the encrypted string. That Apex code decrypts the string to get the record ID and other record identifiers, and it retrieves or updates the requested record.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=communities_dev)

#### Tip

The [User Encryption Decryption](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FYjU2UAL) AppExchange package provides the UserCryptoHelper class, which uses the System.Crypto Apex library for the encryption and decryption, stores the related data for you, and provides two template flows. Use the managed package to implement customized record ID encryption, or create a similar managed package of your own.

#### See Also

-   [Sample Code Without Sharing: Give Guest Users Access to Create Records and Read Them Later](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_without_sharing__let_guest_users_create_records_and_read_them_later.htm "These code samples support two separate interactions. In the first interaction, the guest user creates a case. To allow for future access, an Apex method replaces the record ID with an encrypted string. When the guest user wants to read the case later, they enter the encrypted string. An Apex method decrypts the string and uses it to retrieve the case.")

-   [Sample Code Without Sharing: Give Guest Users Access to Create Records and Update Them Later](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_without_sharing__let_guest_users_create_records_and_update_them_later.htm "These code samples support two separate interactions. In the first interaction, the guest user creates a case. For security reasons, an Apex method replaces the record ID with an encrypted string. When the guest user wants to close the case later, they enter that encrypted string. An Apex method decrypts the string to get the record ID, uses the record ID to select the case, and updates the case’s status.")

-   [*Apex Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm "Apex Developer Guide - HTML (New Window)")

-   [*Apex Reference Guide*: Crypto Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_restful_crypto.htm "Apex Reference Guide: Crypto Class - HTML (New Window)")

## Related Topics

- Sample Code Without Sharing: Give Guest Users Access to Create Records and Read Them Later (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_without_sharing__let_guest_users_create_records_and_read_them_later.htm)
- Sample Code Without Sharing: Give Guest Users Access to Create Records and Update Them Later (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_sample_code_without_sharing__let_guest_users_create_records_and_update_them_later.htm)
