---
title: "SObjectField Class"
domain: apex-reference
topic: sobjectfield-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.245Z
keywords: [SObjectField, Class, Returns, describe, field, result, field., method, provides, option, get, results, object., getDescribe, options, Signature, Parameters, Return, Value]
---

# SObjectField Class

> Returns the describe field result for this field. This method also
      provides an option to get all the describe field results for an object.

### getDescribe(options)

Returns the describe field result for this field. This method also provides an option to get all the describe field results for an object.

#### Signature

public Schema.DescribeFieldResult getDescribe(Object options)

#### Parameters

options

Type: Object

Use this parameter to pass FieldDescribeOptions.FULL\_DESCRIBE when a subset of system objects could have different results for picklist values based on the context they're invoked in. This parameter computes all aspects of describe field results.

For example, AIConversationContext.PersonType field is a picklist that contains a list of accessible object types.

#### Return Value

Type: [Schema.DescribeFieldResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_methods_system_fields_describe "Contains methods for describing sObject fields.")