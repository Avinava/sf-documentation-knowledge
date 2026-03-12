---
title: "ExternalAccountHierarchyHistory"
domain: object-reference
topic: externalaccounthierarchyhistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:09.896Z
estimatedTokens: 480
namespace: Percent
keywords: [ExternalAccountHierarchyHistory, history, changes, external, account, hierarchy, API, version, 50.0, later, Calls, Special, Access, Rules]
---

# ExternalAccountHierarchyHistory

> Represents the history of changes to values in the fields of an
         external account hierarchy. This object is available in API version 50.0 and
      later.

**Namespace:** `Percent`

# ExternalAccountHierarchyHistory

Represents the history of changes to values in the fields of an external account hierarchy. This object is available in API version 50.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Special Access Rules

You must have a Partner or Customer Community Plus license.

## Fields

| Field | Details |
| --- | --- |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionPossible values are:AddressAnyTypeAutoNumberBase64BitVectorBooleanContentCurrencyDataCategoryGroupReferenceDateOnlyDateTimeDivisionDoubleDynamicEnumEmailEncryptedBase64EncryptedTextEntityIdEnumOrIdExternalIdFaxFileHtmlMultiLineTextHtmlStringPlusClobInetAddressJsonLocationMultiEnumMultiLineTextNamespacePercentPersonNamePhoneRawRecordTypeSfdcEncryptedTextSimpleNamespaceStringPlusClobSwitchable_PersonNameTextTimeOnlyUrlYearQuarter |
| ExternalAccountHierarchyId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the external account hierarchy. |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionPossible values are:AccountHierarchyType - Hierarchy TypeIsAccessibleToParent - Is Accessible to ParentIsActive - Is Hierarchy ActiveNameOwnerParentCreated - Created.FeedEvent - Feed EventIndividualMerged - Individual MergedLocked - Record LockedOwnerAccepted - Owner (Accepted)OwnerAssignment - Owner (Assignment)Unlocked - Record unlocked |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionThe updated value of the changed field. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionThe previous value of the changed field. |
