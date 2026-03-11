---
title: "BucketField Methods"
domain: apex-reference
topic: bucketfield-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.726Z
keywords: [BucketField, Methods, Returns, bucket, type., getBucketType, Signature, Return, Value, getDevloperName, getLabel, getNullTreatedAsZero, getOtherBucketLabel, getSourceColumnName, getValues, setBucketType, value, Parameters, bucketType, setDevloperName]
---

# BucketField Methods

> Returns the bucket type.

## BucketField Methods

The following are methods for BucketField.

-   **[getBucketType()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_getBucketType)**  
    Returns the bucket type.
-   **[getDevloperName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_getDevloperName)**  
    Returns the bucket’s API name.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_getLabel)**  
    Returns the user-facing name of the bucket.
-   **[getNullTreatedAsZero()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_getNullTreatedAsZero)**  
    Returns true if null values are converted to the number zero, otherwise returns false.
-   **[getOtherBucketLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_getOtherBucketLabel)**  
    Returns the name of fields grouped as Other in buckets of type PICKLIST.
-   **[getSourceColumnName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_getSourceColumnName)**  
    Returns the API name of the bucketed field.
-   **[getValues()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_getValues)**  
    Returns the report values grouped by the bucket field.
-   **[setBucketType(value)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_setBucketType)**  
    Sets the BucketType of the bucket.
-   **[setBucketType(bucketType)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_setBucketType_2)**  
    Sets the BucketType of the bucket.
-   **[setDevloperName(devloperName)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_setDevloperName)**  
    Sets the API name of the bucket.
-   **[setLabel(label)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_setLabel)**  
    Sets the user-facing name of the bucket.
-   **[setNullTreatedAsZero(nullTreatedAsZero)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_setNullTreatedAsZero)**  
    Specifies whether null values in the bucket are converted to zero (true) or not (false).
-   **[setOtherBucketLabel(otherBucketLabel)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_setOtherBucketLabel)**  
    Sets the name of the fields grouped as Other (in buckets of BucketType PICKLIST).
-   **[setSourceColumnName(sourceColumnName)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_setSourceColumnName)**  
    Specifies the name of the bucketed field.
-   **[setValues(values)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_setValues)**  
    Specifies which type of values are included in the bucket.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_reports_BucketField_toString)**  
    Returns a string.

### getBucketType()

Returns the bucket type.

#### Signature

public Reports.BucketType getBucketType()

#### Return Value

Type: [Reports.BucketType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_BucketType.htm#apex_enum_reports_BucketType "The types of values included in a bucket.")

### getDevloperName()

Returns the bucket’s API name.

#### Signature

public String getDevloperName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLabel()

Returns the user-facing name of the bucket.

#### Signature

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getNullTreatedAsZero()

Returns true if null values are converted to the number zero, otherwise returns false.

#### Signature

public Boolean getNullTreatedAsZero()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getOtherBucketLabel()

Returns the name of fields grouped as Other in buckets of type PICKLIST.

#### Signature

public String getOtherBucketLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSourceColumnName()

Returns the API name of the bucketed field.

#### Signature

public String getSourceColumnName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValues()

Returns the report values grouped by the bucket field.

#### Signature

public List<Reports.BucketFieldValue> getValues()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.BucketFieldValue](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm#apex_class_reports_BucketFieldValue "Contains information about the report values included in a bucket field.")\>

### setBucketType(value)

Sets the BucketType of the bucket.

#### Signature

public void setBucketType(String value)

#### Parameters

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

See the [Reports.BucketType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_BucketType.htm#apex_enum_reports_BucketType "The types of values included in a bucket.") enum for valid values.

#### Return Value

Type: void

### setBucketType(bucketType)

Sets the BucketType of the bucket.

#### Signature

public void setBucketType(Reports.BucketType bucketType)

#### Parameters

bucketType

Type: [Reports.BucketType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_BucketType.htm#apex_enum_reports_BucketType "The types of values included in a bucket.")

#### Return Value

Type: void

### setDevloperName(devloperName)

Sets the API name of the bucket.

#### Signature

public void setDevloperName(String devloperName)

#### Parameters

devloperName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The API name to assign to the bucket.

#### Return Value

Type: void

### setLabel(label)

Sets the user-facing name of the bucket.

#### Signature

public void setLabel(String label)

#### Parameters

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setNullTreatedAsZero(nullTreatedAsZero)

Specifies whether null values in the bucket are converted to zero (true) or not (false).

#### Signature

public void setNullTreatedAsZero(Boolean nullTreatedAsZero)

#### Parameters

nullTreatedAsZero

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: void

### setOtherBucketLabel(otherBucketLabel)

Sets the name of the fields grouped as Other (in buckets of BucketType PICKLIST).

#### Signature

public void setOtherBucketLabel(String otherBucketLabel)

#### Parameters

otherBucketLabel

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setSourceColumnName(sourceColumnName)

Specifies the name of the bucketed field.

#### Signature

public void setSourceColumnName(String sourceColumnName)

#### Parameters

sourceColumnName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setValues(values)

Specifies which type of values are included in the bucket.

#### Signature

public void setValues(List<Reports.BucketFieldValue> values)

#### Parameters

values

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.BucketFieldValue](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm#apex_class_reports_BucketFieldValue "Contains information about the report values included in a bucket field.")\>

#### Return Value

Type: void

### toString()

Returns a string.

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")