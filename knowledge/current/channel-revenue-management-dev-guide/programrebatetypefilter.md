---
title: "ProgramRebateTypeFilter"
domain: channel-revenue-management-dev-guide
topic: programrebatetypefilter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.581Z
estimatedTokens: 536
keywords: [ProgramRebateTypeFilter, definition, filters, transaction, journals, eligible, rebate, filter, rebates, data, processing, engines, API, version, 51.0]
---

# ProgramRebateTypeFilter

> The definition that filters the transaction journals eligible for a rebate
      type. This filter definition is used in the rebates data processing engines. This object
    is available in API version 51.0 and later.

# ProgramRebateTypeFilter

The definition that filters the transaction journals eligible for a rebate type. This filter definition is used in the rebates data processing engines. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| FilterField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field name to use for the program rebate type filter.Possible values are:ActivityDate—Activity date.CloneSourceId—Cloned source ID.CreatedById—Created by.CreatedDate—Created date.ExternalTransactionNumber—External transaction ID.Id— IDIsDeleted—Deleted.JournalDate—Journal date.LastModifiedById—Last modified by.LastModifiedDate—The most recent date on which a user modified this record.LastReferencedDate—The most recent date on which a user referenced this record.LastViewedDate—The most recent date on which a user viewed this record.MemberId—Program MemberNameOrderId—OrderOrderItemId—Order Product.ProductCategoryId—Product CategoryProductId—ProductQuantityQuantityUnitOfMeasureId—Quantity UnitSystemModstamp—System ModstampTransactionAmount—Transaction Amount.UsageType—Usage Type.UserRecordAccessId—Object Access Level. |
| Operator | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe filter operator.Possible values are:Contains—inEquals—equalsGreaterThan—greater thanGreaterThanOrEquals—greater or equalLessThan—less thanLessThanOrEquals—less or equalNotEquals—not equal to |
| ProgramRebateTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent program rebate type associated with the filter. |
| Sequence | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique sequence number for each condition within the program rebate type filter. |
| Value | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe value for filtering the program rebate type. |
