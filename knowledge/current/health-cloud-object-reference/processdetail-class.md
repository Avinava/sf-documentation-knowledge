---
title: "ProcessDetail Class"
domain: health-cloud-object-reference
topic: processdetail-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.389Z
estimatedTokens: 3384
keywords: [ProcessDetail, verification, process, dataSourceType, searchObjectName, searchSequenceNo, searchType, searchResultUniqueIdField, searchResultFilter, searchResultSortOrder, optionalVerifierCount, apexClassName, verificationProcessFieldList, linkedVerificationProcessDetailName, retryLimit]
---

# ProcessDetail Class

> Contains the verification process details.

# ProcessDetail Class

Contains the verification process details.

## Namespace

[id\_verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm "The id_verification namespace provides an interface and classes for Health Cloud to verify the caller’s identity.")

-   **[ProcessDetail Constructors](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_constructors)**

-   **[ProcessDetail Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_properties)**


## ProcessDetail Constructors

The following are constructors for ProcessDetail.

-   **[ProcessDetail(dataSourceType, searchObjectName, searchSequenceNo, searchType, searchResultUniqueIdField, searchResultFilter, searchResultSortOrder, optionalVerifierCount, apexClassName, verificationProcessFieldList, linkedVerificationProcessDetailName, retryLimit, isRetryAllowedAfterLimit, label, developerName, displayRecordFieldName)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_ctor)**
    Creates an instance of the [ProcessDetail](#apex_class_id_verification_ProcessDetail "Contains the verification process details.") class with the specified parameter values.
-   **[ProcessDetail()](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_ctor_2)**
    Creates an instance of the [ProcessDetail](#apex_class_id_verification_ProcessDetail "Contains the verification process details.") class.

### ProcessDetail(dataSourceType, searchObjectName, searchSequenceNo, searchType, searchResultUniqueIdField, searchResultFilter, searchResultSortOrder, optionalVerifierCount, apexClassName, verificationProcessFieldList, linkedVerificationProcessDetailName, retryLimit, isRetryAllowedAfterLimit, label, developerName, displayRecordFieldName)

Creates an instance of the [ProcessDetail](#apex_class_id_verification_ProcessDetail "Contains the verification process details.") class with the specified parameter values.

#### Signature

public ProcessDetail(String dataSourceType, String searchObjectName, Integer searchSequenceNo, String searchType, String searchResultUniqueIdField, String searchResultFilter, String searchResultSortOrder, Integer optionalVerifierCount, String apexClassName, id\_verification.VerificationProcessFieldList verificationProcessFieldList, String linkedVerificationProcessDetailName, Integer retryLimit, Boolean isRetryAllowedAfterLimit, String label, String developerName, String displayRecordFieldName)

```

```

#### Parameters

dataSourceType

Type: String

Specifies the source type of the data.

searchObjectName

Type: String

Specifies the API name of the object on which search is performed.

searchSequenceNo

Type: Integer

Specifies the sequence in which the search is performed and the search result is displayed.

searchType

Type: String

Specifies whether the search is text-based or object-based.

searchResultUniqueIdField

Type: String

Specifies the unique idenfitying field of the selected search result.

searchResultFilter

Type: String

Specifies the conditions used to filter search results.

searchResultSortOrder

Type: String

Specifies the values used to sort search results.

optionalVerifierCount

Type: Integer

Specifies the minimum number of optional verifiers that must be checked.

apexClassName

Type: String

Specifies the apex class that’s used to search and verify data in an external system.

verificationProcessFieldList

Type: [id\_verification.VerificationProcessFieldList](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessFieldList.htm#apex_class_id_verification_VerificationProcessFieldList "Contains information about the list of fields used for both search and the verification process.")

Specifies the list of verification process fields.

linkedVerificationProcessDetailName

Type: String

Specifies the name of the process detail for secondary search.

retryLimit

Type: Integer

Specifies the retry limit to verify process details.

isRetryAllowedAfterLimit

Type: Boolean

Indicates whether retry is allowed after the retry limit (true) or not (false). The default value is false.

label

Type: String

Specifies the label for the process detail.

developerName

Type: String

Specifies the developer name for the process detail.

displayRecordFieldName

Type: String

Specifies the name of the field that contains details about the record that's shown to the user after identity verification is successful.

### ProcessDetail()

Creates an instance of the [ProcessDetail](#apex_class_id_verification_ProcessDetail "Contains the verification process details.") class.

#### Signature

public ProcessDetail()

```

```

## ProcessDetail Properties

The following are properties for ProcessDetail.

-   **[apexClassName](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_apexClassName)**
    Specifies the apex class that’s used to search and verify data in an external system.
-   **[dataSourceType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_dataSourceType)**
    Specifies the source type of the data.
-   **[developerName](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_developerName)**
    Specifies the developer name for the process detail.
-   **[displayRecordFieldName](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_displayRecordFieldName)**
    Specifies the name of the field that contains details about the record that's shown to the user after identity verification is successful.
-   **[isRetryAllowedAfterLimit](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_isRetryAllowedAfterLimit)**
    Indicates whether retry is allowed after the retry limit (true) or not (false). The default value is false.
-   **[label](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_label)**
    Specifies the label for the process detail.
-   **[linkedVerificationProcessDetailName](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_linkedVerificationProcessDetailName)**
    Specifies the name of the process detail for secondary search.
-   **[optionalVerifierCount](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_optionalVerifierCount)**
    Specifies the minimum number of optional verifiers that must be checked.
-   **[retryLimit](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_retryLimit)**
    Specifies the retry limit to verify process details.
-   **[searchObjectName](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_searchObjectName)**
    Specifies the API name of the object on which search is performed.
-   **[searchResultFilter](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_searchResultFilter)**
    Specifies the conditions used to filter search results.
-   **[searchResultSortOrder](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_searchResultSortOrder)**
    Specifies the values used to sort search results.
-   **[searchResultUniqueIdField](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_searchResultUniqueIdField)**
    Specifies the unique idenfitying field of the selected search result.
-   **[searchSequenceNo](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_searchSequenceNo)**
    Specifies the sequence in which the search is performed and the search result is displayed.
-   **[searchType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_searchType)**
    Specifies whether the search is text-based or object-based.
-   **[verificationProcessFieldList](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_id_verification_ProcessDetail_verificationProcessFieldList)**
    Specifies the list of verification process fields.

### apexClassName

Specifies the apex class that’s used to search and verify data in an external system.

#### Signature

public String apexClassName {get; set;}

```

```

#### Property Value

Type: String

### dataSourceType

Specifies the source type of the data.

Possible value is:

-   External
-   Internal

#### Signature

public String dataSourceType {get; set;}

```

```

#### Property Value

Type: String

### developerName

Specifies the developer name for the process detail.

#### Signature

public String developerName {get; set;}

```

```

#### Property Value

Type: String

### displayRecordFieldName

Specifies the name of the field that contains details about the record that's shown to the user after identity verification is successful.

#### Signature

public String displayRecordFieldName {get; set;}

```

```

#### Property Value

Type: String

### isRetryAllowedAfterLimit

Indicates whether retry is allowed after the retry limit (true) or not (false). The default value is false.

#### Signature

public Boolean isRetryAllowedAfterLimit {get; set;}

```

```

#### Property Value

Type: Boolean

### label

Specifies the label for the process detail.

#### Signature

public String label {get; set;}

```

```

#### Property Value

Type: String

### linkedVerificationProcessDetailName

Specifies the name of the process detail for secondary search.

#### Signature

public String linkedVerificationProcessDetailName {get; set;}

```

```

#### Property Value

Type: String

### optionalVerifierCount

Specifies the minimum number of optional verifiers that must be checked.

#### Signature

public Integer optionalVerifierCount {get; set;}

```

```

#### Property Value

Type: String

### retryLimit

Specifies the retry limit to verify process details.

#### Signature

public Integer retryLimit {get; set;}

```

```

#### Property Value

Type: Integer

### searchObjectName

Specifies the API name of the object on which search is performed.

#### Signature

public String searchObjectName {get; set;}

```

```

#### Property Value

Type: String

### searchResultFilter

Specifies the conditions used to filter search results.

For example, if the search is to perform only in a person account, use isPerson = true.

#### Signature

public String searchResultFilter {get; set;}

```

```

#### Property Value

Type: String

### searchResultSortOrder

Specifies the values used to sort search results.

For example, if you want to sort the results by policy date and arrange them in a descending order, use PolicyDate\_\_c Desc.

#### Signature

public String searchResultSortOrder {get; set;}

```

```

#### Property Value

Type: String

### searchResultUniqueIdField

Specifies the unique idenfitying field of the selected search result.

#### Signature

public String searchResultUniqueIdField {get; set;}

```

```

#### Property Value

Type: String

### searchSequenceNo

Specifies the sequence in which the search is performed and the search result is displayed.

#### Signature

public Integer searchSequenceNo {get; set;}

```

```

#### Property Value

Type: Integer

### searchType

Specifies whether the search is text-based or object-based.

#### Signature

public String searchType {get; set;}

```

```

#### Property Value

Type: String

### verificationProcessFieldList

Specifies the list of verification process fields.

#### Signature

public id\_verification.VerificationProcessFieldList verificationProcessFieldList {get; set;}

```

```

#### Property Value

Type: [id\_verification.VerificationProcessFieldList](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessFieldList.htm#apex_class_id_verification_VerificationProcessFieldList "Contains information about the list of fields used for both search and the verification process.")

## Code Examples

```
id_verification.ProcessDetail, newinstance, [String, String, Integer, String, String, String, String, Integer, String, id_verification.VerificationProcessFieldList, String, Integer, Boolean, String, String, String], id_verification.ProcessDetail
```

```
id_verification.ProcessDetail, newinstance, [], id_verification.ProcessDetail
```

```
id_verification.ProcessDetail, apexClassName
```

```
id_verification.ProcessDetail, dataSourceType
```

```
id_verification.ProcessDetail, developerName
```

## Related Topics

- id_verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm)
- ProcessDetail Constructors (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm)
- ProcessDetail Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm)
- ProcessDetail(dataSourceType, searchObjectName, searchSequenceNo, searchType, searchResultUniqueIdField, searchResultFilter, searchResultSortOrder, optionalVerifierCount, apexClassName, verificationProcessFieldList, linkedVerificationProcessDetailName, retryLimit, isRetryAllowedAfterLimit, label, developerName, displayRecordFieldName) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm)
- ProcessDetail() (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm)
- id_verification.VerificationProcessFieldList (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessFieldList.htm)
- apexClassName (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm)
- dataSourceType (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm)
- developerName (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm)
- displayRecordFieldName (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm)
