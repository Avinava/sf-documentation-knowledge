---
title: "Field Audit Trail"
domain: securityImplGuide
topic: field-audit-trail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.769Z
estimatedTokens: 1261
keywords: [Audit, Trail, Define, policy, retain, archived, history, data, Comply, industry, regulations, capability, retention, tracking, don’t]
---

# Field Audit Trail

> Define a policy to retain archived field history data. Comply with industry regulations
    related to audit capability and data retention. Field history tracking data and Field Audit
    Trail data don’t count against your data storage limits.

# Field Audit Trail

Define a policy to retain archived field history data. Comply with industry regulations related to audit capability and data retention. Field history tracking data and Field Audit Trail data don’t count against your data storage limits.

| Available in: Salesforce Classic (not available in all orgs), Lightning Experience, and the Salesforce mobile app |
| --- |
| Available in: Enterprise, Performance, and Unlimited Editions |


Use Salesforce Metadata API to define a field history retention policy for the fields that have history tracking enabled. Then use REST API, SOAP API, and Tooling API to work with your archived data. For information about enabling Field Audit Trail, contact your Salesforce representative.

Field history is copied from the History related list into the FieldHistoryArchive big object. To specify Field Audit Trail retention policies for the objects that you want to archive, define a HistoryRetentionPolicy for your related history lists, such as Account History. Then, deploy your policy by using Metadata API. You can update the retention policy on an object as often as needed. With Field Audit Trail, you can track up to 200 fields per object, and Salesforce retains archived field history data until you delete it. You can delete data that falls outside of your policy window. Without Field Audit Trail, you can track only up to 20 fields per object.

You can set field history retention policies on these objects.

-   Accounts, including Person Accounts
-   Assets
-   Authorization Form Consent
-   Campaigns
-   Cases
-   Communication Subscription Consent
-   Contacts
-   Contact Point Consent
-   Contact Point Type Consent
-   Contracts
-   Contract Line Items
-   Crisis
-   Employee
-   Employee Crisis Assessment
-   Entitlements
-   Individuals
-   Internal Organization Unit
-   Leads
-   Net Zero Cloud objects
-   Opportunities
-   Orders
-   Order Products
-   Party Consent
-   Price Books
-   Price Book Entries
-   Products
-   Service Appointments
-   Service Contracts
-   Solutions
-   Work Orders
-   Work Order Line Items
-   Custom objects with field history tracking enabled

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

When Field Audit Trail is turned on, Salesforce relates HistoryRetentionPolicy automatically to the supported objects. By default, Salesforce archives data after 18 months in production, after one month in sandboxes, and stores all archived data until you delete it. Salesforce doesn’t include the default retention policy when you retrieve the object’s definition through Metadata API. Salesforce retrieves only custom retention policies with the object definition.

You can include field history retention policies in managed and unmanaged packages.

You can’t track these fields:

-   Formula, roll-up summary, or auto-number fields
-   Created By and Last Modified By
-   Expected Revenue field on opportunities
-   Master Solution Title or the Master Solution Details fields on solutions
-   Long text fields
-   Multi-select fields

After you define and deploy a Field Audit Trail policy, Salesforce migrates production data from related history lists such as Account History into the FieldHistoryArchive big object. The first copy writes the field history that’s defined by your policy to archive storage and sometimes takes a long time. Subsequent copies transfer only the changes since the last copy and are faster. A bounded set of SOQL is available to query your archived data. If you delete a record in your production data, the delete cascades to the related history tracking records, but Salesforce doesn’t delete the history copied into the FieldHistoryArchive big object. For information about deleting data in FieldHistoryArchive, see [Delete Field History and Field Audit Trail Data](https://developer.salesforce.com/docs/atlas.en-us.260.0.field_history_retention.meta/field_history_retention/field_history_delete.htm).

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=securityImplGuide)

#### Tip

If you turn on Platform Encryption, the previously archived data remains unencrypted. For example, your organization uses Field Audit Trail to define a data history retention policy for an account field, such as the phone number field. After you turn on Platform Encryption, Salesforce encrypts the phone number data in the account, as well as new phone number records and previous updates stored in the Account History related list. But phone number history data already archived in the FieldHistoryArchive object remains stored without encryption. To encrypt previously archived data, contact Salesforce to encrypt and rearchive the stored field history data, and then delete the unencrypted archive.

-   **[Query Batches of Archived Field History Data](atlas.en-us.securityImplGuide.meta/securityImplGuide/field_audit_trail_query.htm)**
    You can query Field Audit Trail entries stored on the FieldHistoryArchive object.

## Related Topics

- Query Batches of Archived Field History Data (atlas.en-us.securityImplGuide.meta/securityImplGuide/field_audit_trail_query.htm)
