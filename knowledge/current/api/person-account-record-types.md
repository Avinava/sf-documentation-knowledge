---
title: "Person Account Record Types"
domain: api
topic: person-account-record-types
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.670Z
estimatedTokens: 2127
keywords: [Person, Account, Record, enable, specialized, business-to-consumer, functionality, users, sell, business, individuals, doctor, hairdresser, real, estate]
---

# Person Account Record Types

> The person account record types enable specialized business-to-consumer functionality
    for users who sell to or do business with individuals. For example, a doctor, hairdresser, or
    real estate agent whose clients are individuals.

# Person Account Record Types

The person account record types enable specialized business-to-consumer functionality for users who sell to or do business with individuals. For example, a doctor, hairdresser, or real estate agent whose clients are individuals.

Beginning with API version 8.0, a new family of record types on [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)") objects is available: “person account” record types. For more information about person accounts, see [Person Accounts](https://help.salesforce.com/s/articleView?id=sales.account_person.htm&type=5&language=en_US "HTML (New Window)") and [Considerations for Using Person Accounts](https://help.salesforce.com/s/articleView?id=sales.account_person_behavior.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

Record types are person account record types if the [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)") field [IsPersonAccount](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm#i1438064 "HTML (New Window)") is set to true. Salesforce provides one default person account record type, PersonAccount, but an administrator can create additional person account record types. Conversely, record types with the [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)") field [IsPersonAccount](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm#i1438064 "HTML (New Window)") set to false are “business account” record types, which are traditional business-to-business (B2B) Salesforce accounts.

When a person account is created (or an existing business account is changed to a person account), a corresponding contact record is also created. This contact record is referred to as a “person contact.” The person contact enables the person account to function simultaneously as both an account and a contact. This record is the only contact record that can be associated directly with the person account. Also, the ID of the corresponding person contact record is stored in the [PersonContactId](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm#i1438646 "HTML (New Window)") field on the person account.

Review these considerations for person account record types before working with them.

-   To enable person accounts, contact your Salesforce admin.
-   You can query all records with a person account record type.

    ```

    ```

-   If you issue a [query()](atlas.en-us.api.meta/api/sforce_api_calls_query.htm "Executes a query against the specified object and returns data that matches the stated conditions.") call against an account, the results return the root object type in the SojbectType field. The returned value is always [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)").
-   You can modify a person contact but you can’t create or delete a person contact. Since these kinds of contacts don’t have their own record detail page, clients must redirect users to the corresponding person account ( [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)")) page. SOSL results don’t include any of the contact fields enabled when [IsPersonAccount](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm#i1438064 "HTML (New Window)") is set to true. The contact [ReportsToId](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contact.htm#i1447142 "HTML (New Window)") field isn’t visible.
-   If you delete the account, the contact is also deleted. You can’t directly delete the contact. Instead, delete the account.
-   To set field-level security on a Person Account field, set security on the corresponding Contact field. The Person Account field inherits the same security setting from the Contact field. You can't specify a different security setting on a Person Account field compared to the corresponding Contact field.
-   You can change the record type of an account across record type families (typically performed when migrating business accounts to person accounts, but the reverse operation is also supported). When you change the record type from a business account to a person account, the person contact is created. When you change the record type from a person account to a business account, the person fields are set to null, and the person contact becomes a regular contact with the same parent account it had before the change.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

    #### Note

    You can’t change record types across record type families in the Salesforce user interface.

-   If you change the record type of a business account to a person account using either [update()](atlas.en-us.api.meta/api/sforce_api_calls_update.htm "Updates one or more existing records in your organization's data.") or [upsert()](atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm "Creates records and updates existing records; uses a custom field to determine the presence of existing records. In most cases, we recommend that you use upsert() instead of create() to avoid creating unwanted duplicate records (idempotent). This call is available in API version 7.0 and later."), you can’t make any other changes to fields in that account in the same call. Otherwise, the fault [INVALID\_FIELD\_FOR\_INSERT\_UPDATE](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421314) results. However, you can change record type values from one person account record type to another, or from one business account record type to another, in the same call with other changes.
-   When converting a business account to a person account, there must be a one-to-one relationship between each business account record and its corresponding contact record. Furthermore, fields common to both records such as Owner and Currency must have identical values.
-   Workflow and validation formulas don’t fire during a change in record types from or to person accounts.
-   When you change a business account to a person account, valid records are changed and invalid records show an error in the results array.
-   When you change a person account to a business account, no validation is performed.
-   [describeLayout()](atlas.en-us.api.meta/api/sforce_api_calls_describelayout.htm "Retrieves metadata about page layouts for the specified object type.") for version 7.0 and below returns the default business account record type as the default record type even if the tab default is a person account record type. In version 8.0 and after, it will always be the tab default.
-   [describeLayout()](atlas.en-us.api.meta/api/sforce_api_calls_describelayout.htm "Retrieves metadata about page layouts for the specified object type.") for version 7.0 and below doesn’t return any person account record types.
-   [describeSObject()](atlas.en-us.api.meta/api/sforce_api_calls_describesobject.htm "Describes metadata (field list and object properties) for the specified object.") for version 7.0 and below show [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)") objects as not creatable if the profile doesn’t have access to any business record types.
-   After conversion, the new person accounts will have unique one-to-one relationships with the contact records that formed them. As is true for all person accounts, no other contacts can be related to a person account.
-   After conversion, any existing account field history information remains on the person accounts. Any existing contact field history information is retained on the contact but isn’t added to the person accounts field history.

For more information about person accounts, see Salesforce Help.

## Code Examples

```
SELECT Name, SobjectType,IsPersonType 
  FROM RecordType 
  WHERE SobjectType='Account' AND IsPersonType=True
```

## Related Topics

- query() (atlas.en-us.api.meta/api/sforce_api_calls_query.htm)
- update() (atlas.en-us.api.meta/api/sforce_api_calls_update.htm)
- upsert() (atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm)
- INVALID_FIELD_FOR_INSERT_UPDATE (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- describeLayout() (atlas.en-us.api.meta/api/sforce_api_calls_describelayout.htm)
- describeSObject() (atlas.en-us.api.meta/api/sforce_api_calls_describesobject.htm)
