---
title: "FeatureManagement Class"
domain: apex-reference
topic: featuremanagement-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.389Z
keywords: [FeatureManagement, Class, Sets, value__c, value, FeatureParameterInteger__c, record, subscriber-to-LMO, feature, parameter, subscriber’s, org., check, record’s, checkPackageIntegerValue, apiName, setPackageIntegerValue, Signature, Parameters, Return]
---

# FeatureManagement Class

> Sets the value__c value of the
      FeatureParameterInteger__c record for a subscriber-to-LMO feature
    parameter in your subscriber’s org. You can check the record’s value using checkPackageIntegerValue(apiName).

### setPackageIntegerValue(apiName, value)

Sets the value\_\_c value of the FeatureParameterInteger\_\_c record for a subscriber-to-LMO feature parameter in your subscriber’s org. You can check the record’s value using checkPackageIntegerValue(apiName).

#### Signature

public static void setPackageIntegerValue(String apiName, Integer value)

#### Parameters

apiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The fullName\_\_c value of the feature parameter whose value you want to set—for example, 'NumberOfLicenses'.

value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The value to assign to the value\_\_c field on the FeatureParameterInteger\_\_c record that associates the feature parameter with its related license.

#### Return Value

Type: void