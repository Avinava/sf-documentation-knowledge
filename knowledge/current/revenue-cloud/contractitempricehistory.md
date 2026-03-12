---
title: "ContractItemPriceHistory"
domain: revenue-cloud
topic: contractitempricehistory
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:09.938Z
estimatedTokens: 460
namespace: Namespace
keywords: [ContractItemPriceHistory, Represents, history, changes, values, fields, ContractItemPrice, object., API, version, 61.0, later., Supported, Calls, Special, Access, Rules, Fields]
---

# ContractItemPriceHistory

> Represents the history of changes to the values in the fields of a
         ContractItemPrice object. This object is available in API version 61.0 and
      later.

**Namespace:** `Namespace`

# ContractItemPriceHistory

Represents the history of changes to the values in the fields of a ContractItemPrice object. This object is available in API version 61.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is available in Enterprise, Unlimited, and Developer Editions of Revenue Cloud.

## Fields

| Field | Details |
| --- | --- |
| ContractItemPriceId | TypereferencePropertiesFilter, Group, SortDescriptionID of the ContractItemPrice record.This field is a relationship field.Relationship NameContractItemPriceRelationship TypeLookupRefers ToContractItemPrice |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed.Valid values are:AddressAnyTypeAutoNumberBase64BitVectorBooleanContentCurrencyDataCategoryGroupReferenceDateOnlyDateTimeDivisionDoubleDynamicEnumEmailEncryptedBase64EncryptedTextEntityIdEnumOrIdExternalIdFaxFileHtmlMultiLineTextHtmlStringPlusClobInetAddressJsonLocationMultiEnumMultiLineTextNamespacePercentPersonNamePhoneRawRecordTypeSfdcEncryptedTextSimpleNamespaceStringPlusClobSwitchable_PersonNameTextTimeOnlyUrlYearQuarter |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionName of the field that was changed.Possible values are:AdjustmentMethodContractDiscountTypeDiscountValueEndDateItemNamePriceProductSellingModelStartDatecreatedcustomPersonMergedfeedEventindividualMergedlocked—Record locked.ownerAccepted—Owner (Accepted)ownerAssignment—Owner (Assignment)unlocked—Record unlocked. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionNew value of the field that was changed. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionLatest value of the field before it was changed. |
