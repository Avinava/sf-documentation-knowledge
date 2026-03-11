---
title: "describeSObjects(SObjectTypes,
      SObjectDescribeOptions)"
domain: apex-reference
topic: describesobjectssobjecttypes-sobjectdescribeoptions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.574Z
keywords: [describeSObjects, SObjectTypes, SObjectDescribeOptions, Describes, metadata, such, field, list, object, properties, specified, SObjects., default, describe, option, method, SObjectDescribeOptions.DEFERRED, which, indicates, lazy]
---

# describeSObjects(SObjectTypes,
      SObjectDescribeOptions)

> Describes metadata such as field list and object properties for the
      specified list of SObjects. The default describe option for this method is
      SObjectDescribeOptions.DEFERRED, which indicates lazy initialization of describe attributes on
      first use.

### describeSObjects(SObjectTypes, SObjectDescribeOptions)

Describes metadata such as field list and object properties for the specified list of SObjects. The default describe option for this method is SObjectDescribeOptions.DEFERRED, which indicates lazy initialization of describe attributes on first use.

#### Signature

public static List<Schema.DescribeSObjectResult> describeSObjects(List<String\> SObjectTypes, Object SObjectDescribeOptions)

#### Parameters

SObjectTypes

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The list of SObject types to describe.

SObjectDescribeOptions

Type: Object

The effective describe option used for the SObject.

#### Return Value

Type: List<[Schema.DescribeSObjectResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_methods_system_sobject_describe "Contains methods for describing SObjects. None of the methods take an argument.")\>