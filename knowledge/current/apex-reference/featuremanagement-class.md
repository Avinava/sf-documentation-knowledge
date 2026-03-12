---
title: "FeatureManagement Class"
domain: apex-reference
topic: featuremanagement-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.600Z
estimatedTokens: 3131
namespace: System
keywords: [FeatureManagement, System.FeatureManagement, check, modify, feature, show, hide, custom, objects, permissions, subscribers’, orgs, Usage, changeProtection, apiName]
---

# FeatureManagement Class

> Use the methods in the System.FeatureManagement class to check and modify the values of feature
      parameters, and to show or hide custom objects and custom permissions in your subscribers’
      orgs.

**Namespace:** `System`

# FeatureManagement Class

Use the methods in the System.FeatureManagement class to check and modify the values of feature parameters, and to show or hide custom objects and custom permissions in your subscribers’ orgs.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

For information about feature parameters, see [Manage Features in Second Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_fma_manage_features.htm) in the Second-Generation Managed Packaging Developer Guide, or [Manage Features in First-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_manage_features.htm) in the First-Generation Managed Packaging Developer Guide.

The set methods (setPackageBooleanValue, setPackageDateValue, setPackageIntegerValue) use DML operations on setup sObjects. To learn more about mixing operations in a test, see [Mixed DML Operations in Test Methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dml_non_mix_sobjects_test_methods.htm).

-   **[FeatureManagement Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_FeatureManagement.htm#apex_System_FeatureManagement_methods)**


## FeatureManagement Methods

The following are methods for FeatureManagement.

-   **[changeProtection(apiName, typeApiName, protection)](atlas.en-us.apexref.meta/apexref/apex_class_System_FeatureManagement.htm#apex_System_FeatureManagement_changeProtection)**
    Hides or reveals custom permissions, or reveals custom objects, in your subscriber’s org.
-   **[checkPackageBooleanValue(apiName)](atlas.en-us.apexref.meta/apexref/apex_class_System_FeatureManagement.htm#apex_System_FeatureManagement_checkPackageBooleanValue)**
    Checks the value\_\_c value of the FeatureParameterBoolean\_\_c record for a feature parameter in your subscriber’s org. You set the record’s value using setPackageBooleanValue(apiName, value).
-   **[checkPackageDateValue(apiName)](atlas.en-us.apexref.meta/apexref/apex_class_System_FeatureManagement.htm#apex_System_FeatureManagement_checkPackageDateValue)**
    Checks the value\_\_c value of the FeatureParameterDate\_\_c record for a feature parameter in your subscriber’s org. You can set the record’s value using setPackageDateValue(apiName, value).
-   **[checkPackageIntegerValue(apiName)](atlas.en-us.apexref.meta/apexref/apex_class_System_FeatureManagement.htm#apex_System_FeatureManagement_checkPackageIntegerValue)**
    Checks the value\_\_c value of the FeatureParameterInteger\_\_c record for a feature parameter in your subscriber’s org. You can set the record’s value using setPackageIntegerValue(apiName, value).
-   **[checkPermission(apiName)](atlas.en-us.apexref.meta/apexref/apex_class_System_FeatureManagement.htm#apex_System_FeatureManagement_checkPermission)**
    Checks whether a custom permission is enabled.
-   **[setPackageBooleanValue(apiName, value)](atlas.en-us.apexref.meta/apexref/apex_class_System_FeatureManagement.htm#apex_System_FeatureManagement_setPackageBooleanValue)**
    Sets the value\_\_c value of the FeatureParameterBoolean\_\_c record for a subscriber-to-LMO feature parameter in your subscriber’s org. You can check the record’s value using checkPackageBooleanValue(apiName).
-   **[setPackageDateValue(apiName, value)](atlas.en-us.apexref.meta/apexref/apex_class_System_FeatureManagement.htm#apex_System_FeatureManagement_setPackageDateValue)**
    Sets the value\_\_c value of the FeatureParameterDate\_\_c record for a subscriber-to-LMO feature parameter in your subscriber’s org. You can check the record’s value using checkPackageDateValue(apiName).
-   **[setPackageIntegerValue(apiName, value)](atlas.en-us.apexref.meta/apexref/apex_class_System_FeatureManagement.htm#apex_System_FeatureManagement_setPackageIntegerValue)**
    Sets the value\_\_c value of the FeatureParameterInteger\_\_c record for a subscriber-to-LMO feature parameter in your subscriber’s org. You can check the record’s value using checkPackageIntegerValue(apiName).

### changeProtection(apiName, typeApiName, protection)

Hides or reveals custom permissions, or reveals custom objects, in your subscriber’s org.

#### Signature

public static void changeProtection(String apiName, String typeApiName, String protection)

#### Parameters

apiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The API name of the custom object or custom permission to show or hide—for example, 'MyCustomObject\_\_c' or 'MyCustomPermission'.

typeApiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The API name of the type that you want to show or hide: 'CustomObject' or 'CustomPermission'.

protection

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

To show a custom object or custom permission, 'Unprotected'.

To hide a custom permission, 'Protected'.

#### Return Value

Type: void

#### Usage

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexref)

#### Warning

For custom permissions, you can toggle the protected value indefinitely. However, after you’ve released unprotected objects to subscribers, you can’t set visibility to Protected. Be sure to protect any custom objects that you want to hide before you release the first package version that contains them.

To hide custom permissions in released packages:

```

```

To unhide custom permissions and custom objects in released packages:

```

```

```

```

### checkPackageBooleanValue(apiName)

Checks the value\_\_c value of the FeatureParameterBoolean\_\_c record for a feature parameter in your subscriber’s org. You set the record’s value using setPackageBooleanValue(apiName, value).

#### Signature

public static Boolean checkPackageBooleanValue(String apiName)

#### Parameters

apiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The fullName\_\_c value of the feature parameter whose value you want to check—for example, 'SpecialAccessAvailable'.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

The value that’s currently assigned to the value\_\_c field on the FeatureParameterBoolean\_\_c record that associates the feature parameter with its related license.

### checkPackageDateValue(apiName)

Checks the value\_\_c value of the FeatureParameterDate\_\_c record for a feature parameter in your subscriber’s org. You can set the record’s value using setPackageDateValue(apiName, value).

#### Signature

public static Date checkPackageDateValue(String apiName)

#### Parameters

apiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The fullName\_\_c value of the feature parameter whose value you want to check—for example, 'TrialExpirationDate'.

#### Return Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

The value that’s currently assigned to the value\_\_c field on the FeatureParameterDate\_\_c record that associates the feature parameter with its related license.

### checkPackageIntegerValue(apiName)

Checks the value\_\_c value of the FeatureParameterInteger\_\_c record for a feature parameter in your subscriber’s org. You can set the record’s value using setPackageIntegerValue(apiName, value).

#### Signature

public static Integer checkPackageIntegerValue(String apiName)

#### Parameters

apiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The fullName\_\_c value of the feature parameter whose value you want to check—for example, 'NumberOfLicenses'.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The value that’s currently assigned to the value\_\_c field on the FeatureParameterInteger\_\_c record that associates the feature parameter with its related license.

### checkPermission(apiName)

Checks whether a custom permission is enabled.

#### Signature

public static Boolean checkPermission(String apiName)

#### Parameters

apiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The API name of the custom permission to check the value of—for example, 'MyCustomPermission'.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Shows whether the permission is enabled (true) or disabled (false).

### setPackageBooleanValue(apiName, value)

Sets the value\_\_c value of the FeatureParameterBoolean\_\_c record for a subscriber-to-LMO feature parameter in your subscriber’s org. You can check the record’s value using checkPackageBooleanValue(apiName).

#### Signature

public static void setPackageBooleanValue(String apiName, Boolean value)

#### Parameters

apiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The fullName\_\_c value of the feature parameter whose value you want to set—for example, 'SpecialAccessAvailable'.

value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

The value to assign to the value\_\_c field on the FeatureParameterBoolean\_\_c record that associates the feature parameter with its related license.

#### Return Value

Type: void

### setPackageDateValue(apiName, value)

Sets the value\_\_c value of the FeatureParameterDate\_\_c record for a subscriber-to-LMO feature parameter in your subscriber’s org. You can check the record’s value using checkPackageDateValue(apiName).

#### Signature

public static void setPackageDateValue(String apiName, Date value)

#### Parameters

apiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The fullName\_\_c value of the feature parameter whose value you want to set—for example, 'TrialExpirationDate'.

value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

The value to assign to the value\_\_c field on the FeatureParameterDate\_\_c record that associates the feature parameter with its related license.

#### Return Value

Type: void

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

## Code Examples

```
FeatureManagement.changeProtection('YourCustomPermissionName', 'CustomPermission',
    'Protected');
```

```
FeatureManagement.changeProtection('YourCustomPermissionName', 'CustomPermission',
    'Unprotected');
```

```
FeatureManagement.changeProtection('YourCustomObjectName__c', 'CustomObject',
    'Unprotected');
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- FeatureManagement Methods (atlas.en-us.apexref.meta/apexref/apex_class_System_FeatureManagement.htm)
- changeProtection(apiName, typeApiName, protection) (atlas.en-us.apexref.meta/apexref/apex_class_System_FeatureManagement.htm)
- checkPackageBooleanValue(apiName) (atlas.en-us.apexref.meta/apexref/apex_class_System_FeatureManagement.htm)
- checkPackageDateValue(apiName) (atlas.en-us.apexref.meta/apexref/apex_class_System_FeatureManagement.htm)
- checkPackageIntegerValue(apiName) (atlas.en-us.apexref.meta/apexref/apex_class_System_FeatureManagement.htm)
- checkPermission(apiName) (atlas.en-us.apexref.meta/apexref/apex_class_System_FeatureManagement.htm)
- setPackageBooleanValue(apiName, value) (atlas.en-us.apexref.meta/apexref/apex_class_System_FeatureManagement.htm)
- setPackageDateValue(apiName, value) (atlas.en-us.apexref.meta/apexref/apex_class_System_FeatureManagement.htm)
- setPackageIntegerValue(apiName, value) (atlas.en-us.apexref.meta/apexref/apex_class_System_FeatureManagement.htm)
