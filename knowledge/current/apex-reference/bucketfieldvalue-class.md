---
title: "BucketFieldValue Class"
domain: apex-reference
topic: bucketfieldvalue-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.888Z
estimatedTokens: 1869
namespace: Reports
keywords: [BucketFieldValue, Contains, information, report, values, included, bucket, field., label, sourceDimensionValues, rangeUpperBound, getLabel, getRangeUpperBound, getSourceDimensionValues, setLabel, setRangeUpperBound, setSourceDimensionValues, toString]
---

# BucketFieldValue Class

> Contains information about the report values included in a bucket
      field.

**Namespace:** `Reports`

# BucketFieldValue Class

Contains information about the report values included in a bucket field.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

-   **[BucketFieldValue Constructors](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm#apex_reports_BucketFieldValue_constructors)**

-   **[BucketFieldValue Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm#apex_reports_BucketFieldValue_methods)**


## BucketFieldValue Constructors

The following are constructors for BucketFieldValue.

-   **[BucketFieldValue(label, sourceDimensionValues, rangeUpperBound)](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm#apex_reports_BucketFieldValue_ctor)**
    Creates an instance of the Reports.BucketFieldValue class using the specified parameters.
-   **[BucketFieldValue()](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm#apex_reports_BucketFieldValue_ctor_2)**
    Creates an instance of the Reports.BucketFieldValue class. You can then set values by using the class’s set methods.

### BucketFieldValue(label, sourceDimensionValues, rangeUpperBound)

Creates an instance of the Reports.BucketFieldValue class using the specified parameters.

#### Signature

public BucketFieldValue(String label, List<String\> sourceDimensionValues, Double rangeUpperBound)

#### Parameters

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The user-facing name of the bucket.

sourceDimensionValues

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of the values from the source field included in this bucket category (in buckets of type PICKLIST and buckets of type TEXT).

rangeUpperBound

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The greatest range limit under which values are included in this bucket category (in buckets of type NUMBER).

### BucketFieldValue()

Creates an instance of the Reports.BucketFieldValue class. You can then set values by using the class’s set methods.

#### Signature

public BucketFieldValue()

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

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- BucketFieldValue Constructors (atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm)
- BucketFieldValue Methods (atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm)
- BucketFieldValue(label, sourceDimensionValues, rangeUpperBound) (atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm)
- BucketFieldValue() (atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm)
- getRangeUpperBound() (atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm)
