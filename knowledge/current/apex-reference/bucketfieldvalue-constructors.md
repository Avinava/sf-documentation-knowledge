---
title: "BucketFieldValue Constructors"
domain: apex-reference
topic: bucketfieldvalue-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.735Z
keywords: [BucketFieldValue, Constructors, Creates, instance, Reports.BucketFieldValue, class, specified, parameters., label, sourceDimensionValues, rangeUpperBound, Signature, Parameters]
---

# BucketFieldValue Constructors

> Creates an instance of the Reports.BucketFieldValue class using the specified parameters.

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