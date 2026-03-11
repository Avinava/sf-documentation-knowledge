---
title: "BucketField Constructors"
domain: apex-reference
topic: bucketfield-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.726Z
keywords: [BucketField, Constructors, Creates, instance, Reports.BucketField, class, specified, parameters., bucketType, devloperName, label, nullTreatedAsZero, otherBucketLabel, sourceColumnName, values, Signature, Parameters]
---

# BucketField Constructors

> Creates an instance of the Reports.BucketField class using the specified parameters.

## BucketField Constructors

The following are constructors for BucketField.

-   **[BucketField(bucketType, devloperName, label, nullTreatedAsZero, otherBucketLabel, sourceColumnName, values)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_ctor)**  
    Creates an instance of the Reports.BucketField class using the specified parameters.
-   **[BucketField()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_ctor_2)**  
    Creates an instance of the Reports.BucketField class. You can then set values by using the class’s set methods.

### BucketField(bucketType, devloperName, label, nullTreatedAsZero, otherBucketLabel, sourceColumnName, values)

Creates an instance of the Reports.BucketField class using the specified parameters.

#### Signature

public BucketField(Reports.BucketType bucketType, String devloperName, String label, Boolean nullTreatedAsZero, String otherBucketLabel, String sourceColumnName, List<Reports.BucketFieldValue> values)

#### Parameters

bucketType

Type: [Reports.BucketType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_BucketType.htm#apex_enum_reports_BucketType "The types of values included in a bucket.")

The type of bucket.

devloperName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the bucket.

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

User-facing name of the bucket.

nullTreatedAsZero

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether null values are converted to zero (true) or not (false).

otherBucketLabel

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the fields grouped as Other (in buckets of BucketType PICKLIST).

sourceColumnName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the bucketed field.

values

Type: List<[Reports.BucketType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_BucketType.htm#apex_enum_reports_BucketType "The types of values included in a bucket.")\>

Types of the values included in the bucket.

### BucketField()

Creates an instance of the Reports.BucketField class. You can then set values by using the class’s set methods.

#### Signature

public BucketField()