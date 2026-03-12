---
title: "AccountingModelConfig"
domain: metadata-api
topic: accountingmodelconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:36.480Z
estimatedTokens: 1188
keywords: [AccountingModelConfig, Represents, mapping, financial, data, model, logical, configuration, generation, Transaction, Journal, records., Important, Parent, File, Suffix, Directory, Location, Version, Fields]
---

# AccountingModelConfig

> Represents the mapping of the financial data model to a
			logical data model and configuration for the generation of Transaction Journal
			records.

# AccountingModelConfig

Represents the mapping of the financial data model to a logical data model and configuration for the generation of Transaction Journal records.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

AccountingModelConfig components have the suffix .accountingModelConfig and are stored in the accountingModelConfigs folder.

## Version

AccountingModelConfig components are available in API version 57.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| accountingType | Field TypeAccountingType (enumeration of type string)DescriptionRequired.Determines whether the accounting set generates revenue or expense type transaction journal records.Valid values are:ExpenseRevenue |
| defaultAccrualAccountCode | Field TypestringDescriptionThe code for your accounting system's default accrual account. |
| defaultWriteOffAccountCode | Field TypestringDescriptionRepresents the name of your account for written off payments. |
| earliestCreatedDate | Field TypedateTimeDescriptionRequired.The date used to filter source records for processing. The Accounting Subledger only considers records created on or after this date. |
| expectedCashFlowGrouping | Field TypeExpectedCashFlowGrouping (enumeration of type string)DescriptionDetermines whether Accounting Subledger groups transaction journal records by fund account or by a combination of fund account and due date.NoteChanging this setting doesn't impact existing records; it only affects records created or reversed afterward.Valid values are:GroupByFundAccountGroupByFundAndDueDate |
| financeBook | Field TypestringDescriptionReserved for internal use. |
| internalMappingDetails | Field TypestringDescriptionRequired.Represents the structure of your financial data in JSON format. |
| isActive | Field TypebooleanDescriptionRequired.Indicates whether only records that are true are processed when the Subledger Job runs. |
| isGroupedByFundAccount | Field TypebooleanDescriptionReserved for internal use. |
| isUsed | Field TypebooleanDescriptionRequired.Indicates whether the Accounting Model has been used or activated at least once (true) or not (false).NoteIf the value is set to true, you can’t select another object for the object model or change the number of objects associated with that Accounting Model. |
| jobFilterCriteria | Field TypestringDescriptionReserved for internal use. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for AccountingModelConfig, which is defined when the AccountingModelConfig is created. |
| paidCashFlowGrouping | Field TypePaidCashFlowGrouping (enumeration of type string)DescriptionDetermines the level of detail for generated transaction journal records.Valid values are:GroupByFundAccount—Accounting Subledger splits all transaction journal records into fund accounts. Secondary records are created for payment type records but not for transaction type records.GroupBySummary—Accounting Subledger only splits credits for revenue and debits for expenses by fund accounts. |
| recordTypeFilter | Field TypestringDescriptionSpecify the record type IDs from the primary object to be processed. This field is case-sensitive.NoteIf no record type is specified in the filter, all records are processed. |
| runOrder | Field TypeintDescriptionDetermines the load order sequence of the multiple Accounting Model. The lower number runs first. For example, load order 1 runs before load order 2. |

## Declarative Metadata Sample Definition

The following is an example of an AccountingModelConfig component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AccountingModelConfig
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<fullName>ModelConfigOne</fullName>
	<masterLabel>ModelConfigOne</masterLabel>
	<defaultAccrualAccountCode>abc</defaultAccrualAccountCode>
	<defaultWriteOffAccountCode>abc</defaultWriteOffAccountCode>
	<isUsed>false</isUsed>
	<isActive>false</isActive>
	<runOrder>123</runOrder>
	<recordTypeFilter>abcabc</recordTypeFilter>
	<earliestCreatedDate>2021-12-01T00:00:00.000Z</earliestCreatedDate>
	<internalMappingDetails>abcabc</internalMappingDetails>
	<accountingType>Revenue</accountingType>
	<expectedCashFlowGrouping>GroupByFundAccount</expectedCashFlowGrouping>
	<paidCashFlowGrouping>GroupBySummary</paidCashFlowGrouping>
</AccountingModelConfig>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/​metadata">
	<types>
		<members>ModelConfigOne</members>
		<name>AccountingModelConfig</name>
	</types>
	<version>57.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
