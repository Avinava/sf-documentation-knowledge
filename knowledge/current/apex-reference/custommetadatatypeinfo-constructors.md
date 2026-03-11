---
title: "CustomMetadataTypeInfo Constructors"
domain: apex-reference
topic: custommetadatatypeinfo-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.018Z
keywords: [CustomMetadataTypeInfo, Constructors, Constructor, providing, custom, metadata, type, information., cmtRecordId, cmtSfResultCodeFieldName, Signature, Parameters]
---

# CustomMetadataTypeInfo Constructors

> Constructor for providing custom metadata type
    information.

## CustomMetadataTypeInfo Constructors

The following are constructors for CustomMetadataTypeInfo.

-   **[CustomMetadataTypeInfo(cmtRecordId, cmtSfResultCodeFieldName)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CustomMetadataTypeInfo.htm#apex_commerce_payments_CustomMetadataTypeInfo_ctor)**  
    Constructor for providing custom metadata type information.

### CustomMetadataTypeInfo(cmtRecordId, cmtSfResultCodeFieldName)

Constructor for providing custom metadata type information.

#### Signature

global CustomMetadataTypeInfo(String cmtRecordId, String cmtSfResultCodeFieldName)

#### Parameters

cmtRecordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the matchedcustom metadata type record

cmtSfResultCodeFieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Field that contains the Salesforce result code values. Belongs to the custom metadata type.