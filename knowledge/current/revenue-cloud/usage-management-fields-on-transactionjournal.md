---
title: "Usage Management Fields on TransactionJournal"
domain: revenue-cloud
topic: usage-management-fields-on-transactionjournal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.899Z
estimatedTokens: 270
keywords: [Usage, Management, TransactionJournal, Standard, custom, extend, Transaction, Journal, represent, consumption, resource, recorded, creating, summaries, API]
---

# Usage Management Fields on TransactionJournal

> Standard and custom fields extend the standard Transaction Journal object for
         use in Usage Management to represent  consumption details of a usage resource that are
         recorded for creating usage summaries. This object is available for usage management
      in API version 63.0 and later.

# Usage Management Fields on TransactionJournal

Standard and custom fields extend the standard Transaction Journal object for use in Usage Management to represent consumption details of a usage resource that are recorded for creating usage summaries. This object is available for usage management in API version 63.0 and later.

## Fields

| Field | Details |
| --- | --- |
| UsageResourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage resource that's associated with the transaction journal.This field is a relationship field.Relationship NameUsageResourceRefers ToUsageResource |
| UsageSummaryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage summary that's associated with the transaction journal. Available in API version 64.0 and later.This field is a relationship field.Relationship NameUsageSummaryRefers ToUsageSummary |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of usage.Valid value is UsageManagement. |
