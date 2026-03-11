---
title: "BucketFieldValue Methods"
domain: apex-reference
topic: bucketfieldvalue-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.735Z
keywords: [BucketFieldValue, Methods, Returns, user-facing, name, bucket, category., getLabel, Signature, Return, Value, getRangeUpperBound, getSourceDimensionValues, setLabel, label, Parameters, setRangeUpperBound, rangeUpperBound, setSourceDimensionValues, sourceDimensionValues]
---

# BucketFieldValue Methods

> Returns the user-facing name of the bucket category.

## BucketFieldValue Methods

The following are methods for BucketFieldValue.

-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm#apex_reports_BucketFieldValue_getLabel)**  
    Returns the user-facing name of the bucket category.
-   **[getRangeUpperBound()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm#apex_reports_BucketFieldValue_getRangeUpperBound)**  
    Returns the greatest range limit under which values are included in this bucket category (in buckets of type NUMBER).
-   **[getSourceDimensionValues()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm#apex_reports_BucketFieldValue_getSourceDimensionValues)**  
    Returns a list of the values from the source field included in this bucket category (in buckets of type PICKLIST and buckets of type TEXT).
-   **[setLabel(label)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm#apex_reports_BucketFieldValue_setLabel)**  
    Set the user-facing name of the bucket category.
-   **[setRangeUpperBound(rangeUpperBound)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm#apex_reports_BucketFieldValue_setRangeUpperBound)**  
    Sets the greatest limit of a range under which values are included in this bucket category (in buckets of type NUMBER).
-   **[setSourceDimensionValues(sourceDimensionValues)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm#apex_reports_BucketFieldValue_setSourceDimensionValues)**  
    Specifies the values from the source field included in this bucket category (in buckets of type PICKLIST and buckets of type TEXT).
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm#apex_reports_BucketFieldValue_toString)**  
    Returns a string.

### getLabel()

Returns the user-facing name of the bucket category.

#### Signature

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getRangeUpperBound()

Returns the greatest range limit under which values are included in this bucket category (in buckets of type NUMBER).

#### Signature

public Double getRangeUpperBound()

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### getSourceDimensionValues()

Returns a list of the values from the source field included in this bucket category (in buckets of type PICKLIST and buckets of type TEXT).

#### Signature

public List<String\> getSourceDimensionValues()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### setLabel(label)

Set the user-facing name of the bucket category.

#### Signature

public void setLabel(String label)

#### Parameters

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setRangeUpperBound(rangeUpperBound)

Sets the greatest limit of a range under which values are included in this bucket category (in buckets of type NUMBER).

#### Signature

public void setRangeUpperBound(Double rangeUpperBound)

#### Parameters

rangeUpperBound

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: void

### setSourceDimensionValues(sourceDimensionValues)

Specifies the values from the source field included in this bucket category (in buckets of type PICKLIST and buckets of type TEXT).

#### Signature

public void setSourceDimensionValues(List<String\> sourceDimensionValues)

#### Parameters

sourceDimensionValues

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

#### Return Value

Type: void

### toString()

Returns a string.

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")