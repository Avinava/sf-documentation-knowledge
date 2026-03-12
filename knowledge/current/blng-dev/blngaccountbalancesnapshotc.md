---
title: "blng__AccountBalanceSnapshot__c"
domain: blng-dev
topic: blngaccountbalancesnapshotc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.216Z
estimatedTokens: 1895
keywords: [blng__AccountBalanceSnapshot__c, outstanding, invoice, debt, account, grouped, number, days, past, due, date, balance, snapshot, includes, amounts]
---

# blng__AccountBalanceSnapshot__c

> Represents a list of outstanding invoice debt within an account, grouped by
         the number of days past the due date. The account balance snapshot also includes the
         amounts of unapplied credit notes and payments within the same account.

# blng\_\_AccountBalanceSnapshot\_\_c

Represents a list of outstanding invoice debt within an account, grouped by the number of days past the due date. The account balance snapshot also includes the amounts of unapplied credit notes and payments within the same account.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the legacy entity when multiple currencies are enabled. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the account. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed an accounting balance snapshot indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed an accounting balance snapshot record. If this value is null, it’s possible that the user only accessed the accounting period record or a related list view (LastReferencedDate), but not viewed the accounting balance snapshot record itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the account balance snapshot. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__AccountBalance__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe number of unpaid balances across all the account’s invoices.This field is a calculated field. |
| blng__Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account for which the invoices are calculated.This field is a relationship field.Relationship Nameblng__Account__rRefers ToAccount |
| blng__BalanceSnapshotRunCreatedBy__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe balance snapshot run that created the account balance snapshot record.This field is a relationship field.Relationship Nameblng__BalanceSnapshotRunCreatedBy__rRefers Toblng__BalanceSnapShotRun__c |
| blng__InvoiceAgingBucket10__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAn aging bucket represents a range of dates beyond an invoice’s due date. For instance, one bucket might cover invoices that are 1–30 days overdue, while another could cover those that are 31–60 days overdue. Users can set up to 10 aging buckets for each org. When a balance snapshot is generated, the overdue amounts are categorized into these aging buckets based on how long they’ve been past due. For example, if your account had three invoices that were 45 days overdue, their total debt would be grouped and displayed in the 31 to 60-day aging bucket. |
| blng__InvoiceAgingBucket1__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAn aging bucket represents a range of dates beyond an invoice’s due date. |
| blng__InvoiceAgingBucket2__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAn aging bucket represents a range of dates beyond an invoice’s due date. |
| blng__InvoiceAgingBucket3__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAn aging bucket represents a range of dates beyond an invoice’s due date. |
| blng__InvoiceAgingBucket4__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAn aging bucket represents a range of dates beyond an invoice’s due date. |
| blng__InvoiceAgingBucket5__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAn aging bucket represents a range of dates beyond an invoice’s due date. |
| blng__InvoiceAgingBucket6__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAn aging bucket represents a range of dates beyond an invoice’s due date. |
| blng__InvoiceAgingBucket7__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAn aging bucket represents a range of dates beyond an invoice’s due date. |
| blng__InvoiceAgingBucket8__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAn aging bucket represents a range of dates beyond an invoice’s due date. |
| blng__InvoiceAgingBucket9__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAn aging bucket represents a range of dates beyond an invoice’s due date. |
| blng__Invoices__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA list of invoices assessed by the balance snapshot run to generate the account balance snapshot, displayed by the record name. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information or comments related to the account balance snapshot record. |
| blng__SnapshotDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe day that the balance snapshot run created the account balance snapshot record. |
| blng__TotalInvoiceAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all invoice balances on the account, including debit notes. This field is different from the total invoice amount that’s described in your contractual terms for Salesforce Billing.This field is a calculated field. |
| blng__UnappliedCreditNoteAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of all unapplied credit note amounts on the account. |
| blng__UnappliedCreditNotes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA list of the unapplied credit notes that the balance snapshot run evaluated, shown by the record name. |
| blng__UnappliedDebitNoteAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of all unapplied debit note amounts on this account. |
| blng__UnappliedDebitNotes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA list of unapplied debit notes evaluated by the balance snapshot, shown by the record name. |
| blng__UnappliedPaymentAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of all unapplied payments in this account. |
| blng__UnappliedPayments__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA list of the unapplied payments that the balance snapshot run evaluated, shown by the record name. |
| blng__UniqueId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identification number associated with the account balance snapshot record. This field is unique within your organization. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[blng\_\_AccountBalanceSnapshot\_\_ChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.
