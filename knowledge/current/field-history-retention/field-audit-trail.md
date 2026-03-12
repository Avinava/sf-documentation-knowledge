---
title: "Field Audit Trail"
domain: field-history-retention
topic: field-audit-trail
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.820Z
estimatedTokens: 1491
keywords: [Audit, Trail, extends, capabilities, History, Tracking, keep, data, indefinitely, maintain, comprehensive, historical, record, changes, tracked]
---

# Field Audit Trail

> Field Audit Trail extends the capabilities of Field History Tracking, so you can keep
    field history data indefinitely. Use Field Audit Trail to maintain a comprehensive historical
    record of field changes (up to 200 tracked fields per object) and to ensure data integrity and
    compliance with industry standards. Field History Tracking data and Field Audit Trail data don’t
    count against your data storage limits.

# Field Audit Trail

Field Audit Trail extends the capabilities of Field History Tracking, so you can keep field history data indefinitely. Use Field Audit Trail to maintain a comprehensive historical record of field changes (up to 200 tracked fields per object) and to ensure data integrity and compliance with industry standards. Field History Tracking data and Field Audit Trail data don’t count against your data storage limits.

| Available in: Lightning Experience |
| --- |
| Available in: Enterprise, Performance, and Unlimited Editions with the purchase of Salesforce Shield or Field Audit Trail licenses. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_history_retention)

#### Note

This content relates to Field Audit Trail. Read about implementing field audit trail using Shield Extension in [Own from Salesforce](https://help.salesforce.com/s/articleView?id=platform.own_from_salesforce.htm&type=5&language=en_US).

To capture field history data by using Field Audit Trail, first enable Field History Tracking for objects and for specific fields on those objects. When you enable Field History Tracking, changes that occur in tracked fields are recorded in the object’s related history object (for example, when you make changes to an account field, those changes are saved in the AccountHistory object) and these changes appear on the object’s history related list. After you define and deploy a Field Audit Trail policy, Salesforce copies the field history from the object’s history list to the FieldHistoryArchive big object. The first copy takes a long time, because it saves all the field history defined by your policy to the archive storage. Subsequent copies are faster, because they transfer only the changes since the last copy.

|  | Field History Tracking | Field Audit Trail |
| --- | --- | --- |
| Fields Tracked | Up to 20 per object | Up to 200 per object |
| Retention Period | 18-24 months | Until deleted |
| Storage | The object's history object | FieldHistoryArchive |
| Access | UI and API | API only |

The FieldHistoryArchive big object stores all archived field history changes. For each tracked object, you can also define a field history data retention policy in the HistoryRetentionPolicy object that specifies the number of months that you want to retain field history in your system. You can include these policies in both managed and unmanaged packages.

You can define field history retention policies for these objects:

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

You can’t track these fields:

-   Formula, roll-up summary, or auto-number fields
-   Created By and Last Modified By
-   The Expected Revenue field on opportunities
-   The Master Solution Title or the Master Solution Details fields on solutions
-   Long text fields
-   Multiselect fields

You use Metadata API to define and deploy your field history retention policy. After you deploy your field history retention policy to a production environment, you can query Field Audit Trail entries stored on the FieldHistoryArchive big object. See [Query Batches of Archived Field History Data](https://developer.salesforce.com/docs/atlas.en-us.260.0.securityImplGuide.meta/securityImplGuide/field_audit_trail_query.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_history_retention)

#### Note

When Field Audit Trail is turned on, Salesforce relates HistoryRetentionPolicy automatically to the supported objects. By default, Salesforce archives data after 18 months in production and after one month in sandboxes, and stores all archived data until you delete it. Salesforce doesn’t include the default retention policy when you retrieve the object’s definition through Metadata API. Salesforce retrieves only custom retention policies with the object definition.

When you delete field history archive data, use REST API, SOAP API, or Tooling API. If you delete a record in your production data, the delete cascades to the related history tracking records, but Salesforce doesn’t delete the history copied into the FieldHistoryArchive big object. For information about deleting data in FieldHistoryArchive, see [Delete Field History and Field Audit Trail Data](https://developer.salesforce.com/docs/atlas.en-us.260.0.field_history_retention.meta/field_history_retention/field_history_delete.htm).

For information about enabling Field Audit Trail, contact your Salesforce representative.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=field_history_retention)

#### Tip

If you turn on Platform Encryption, previously archived data remains unencrypted. For example, let's say that your organization uses Field Audit Trail to define a data history retention policy for an account field, such as the phone number field. After you turn on Platform Encryption, Salesforce encrypts the phone number data in the account, as well as new phone number records and previous updates stored in the Account History related list. But phone number history data that's already archived in the FieldHistoryArchive big object remains stored without encryption. To encrypt previously archived data, contact Salesforce to encrypt and rearchive the stored field history data, and then delete the unencrypted archive.
