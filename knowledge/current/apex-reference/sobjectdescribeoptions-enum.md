---
title: "SObjectDescribeOptions Enum"
domain: apex-reference
topic: sobjectdescribeoptions-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.552Z
estimatedTokens: 293
keywords: [SObjectDescribeOptions, Schema.SObjectDescribeOptions, SObjectType.getDescribe, method., Usage, Values]
---

# SObjectDescribeOptions Enum

> A Schema.SObjectDescribeOptions enum value is a
    parameter in the SObjectType.getDescribe
    method.

# SObjectDescribeOptions Enum

A Schema.SObjectDescribeOptions enum value is a parameter in the SObjectType.getDescribe method.

## Usage

For more information about the method using this enum, see [getDescribe(options)](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#unique_1389787181 "Returns the describe sObject result for this field; the parameter value determines whether all child relationships are loaded up-front, or not.").

## Enum Values

The following are the values of the Schema.SObjectDescribeOptions enum.

| Value | Description |
| --- | --- |
| DEFAULT | Either eager-load or lazy-load depending on the API version. |
| DEFERRED | Lazy-load child relationships; do not load all child relationships at the time of first invocation of the method. |
| FULL | Eager-load all elements of the describe, including child relationships, up-front at the time of method invocation. |

See [getDescribe(options)](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#unique_1389787181 "Returns the describe sObject result for this field; the parameter value determines whether all child relationships are loaded up-front, or not.").

## Related Topics

- getDescribe(options) (atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm)
