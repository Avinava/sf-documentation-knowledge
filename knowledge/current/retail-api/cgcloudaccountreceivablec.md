---
title: "cgcloud__Account_Receivable__c"
domain: retail-api
topic: cgcloudaccountreceivablec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.014Z
estimatedTokens: 696
keywords: [cgcloud__Account_Receivable__c, Holds, customer, regarding, invoices, paid, debit, credit, notes, API, version, 55.0, later, cgcloud, _Account]
---

# cgcloud__Account_Receivable__c

> Holds the customer related information regarding invoices to be paid and
         debit and credit notes. This object is available in API version 55.0 and later.

# cgcloud\_\_Account\_Receivable\_\_c

Holds the customer related information regarding invoices to be paid and debit and credit notes. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. Default name of this record. |
| cgcloud__Account__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA reference to the account for which the invoice information is stored. Required.This field is a relationship field.Relationship Namecgcloud__Account__rRelationship TypeMaster-detailRefers ToAccount (the master object) |
| cgcloud__Amount_Open__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLatest amount to be paid (calculated in ERP system based on payment transactions). Not applicable for credit notes. |
| cgcloud__Amount__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionOriginal amount with which invoice, credit, or debit note was raised. |
| cgcloud__Document_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionInvoice, credit, or debit note raised against an account.Possible values are:CreditNoteDebitNoteInvoice |
| cgcloud__Due_Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDue date of invoice. Not applicable for credit notes. |
| cgcloud__External_Id__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique reference number to track the invoice, debit note, or credit note that is generated. |
| cgcloud__Invoice_Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionConsolidated status set in ERP system based on account receivable transactions. Not applicable for credit notes.Possible values are:PartiallyPaidUnPaid |
| cgcloud__Receipt_Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate on which the invoice, credit, or debit note was generated. |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the account receivables record.This field is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__RECORD_LINK, "_top") |
