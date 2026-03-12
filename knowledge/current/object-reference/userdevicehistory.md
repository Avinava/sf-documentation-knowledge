---
title: "UserDeviceHistory"
domain: object-reference
topic: userdevicehistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.783Z
estimatedTokens: 527
namespace: Namespace
keywords: [UserDeviceHistory, tracking, UserDevice, sObject, API, version, 50.0, later, Calls]
---

# UserDeviceHistory

> Represents tracking information on the UserDevice sObject. This object is
    available in API version 50.0 and later.

**Namespace:** `Namespace`

# UserDeviceHistory

Represents tracking information on the UserDevice sObject. This object is available in API version 50.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of data that has changed.Possible values are:AddressAnyTypeAutoNumberBase64BitVectorBooleanContentCurrencyDataCategoryGroupReferenceDateOnlyDateTimeDivisionDoubleDynamicEnumEmailEncryptedBase64EncryptedTextEntityIdEnumOrIdExternalIdFaxFileHtmlMultiLineTextHtmlStringPlusClobInetAddressJsonLocationMultiEnumMultiLineTextNamespacePercentPersonNamePhoneRawRecordTypeSfdcEncryptedTextSimpleNamespaceStringPlusClobSwitchable_PersonNameTextTimeOnlyUrlYearQuarter |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe field that has changed.Possible values are:BrowserType—BrowserDeviceNativeUid—Device Native IDDeviceType—Device TypeHashedBrowserFingerPrint—Hashed Browser FingerprintIsVerified—Is Device VerifiedLastLoginHistory—Login HistoryNamePlatformType—Platform or OS TypePlatformVersion—Platform or OS VersionRawBrowserFingerPrint—Raw Browser Fingerprint DataStatus—Device StatusUserUserLastSeen—Last time user was seenUserProvidedDeviceIdentifier—User provided device identifiercreated—Created.feedEvent—Feed eventindividualMerged—Individual Mergedlocked—Record locked.ownerAccepted—Owner (Accepted)ownerAssignment—Owner (Assignment)unlocked—Record unlocked. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionThe value after a change has occurred. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionThe value before a change has occurred. |
| UserDeviceId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the UserDevice object. |
