---
title: "QuickActionDefaults Methods"
domain: apex-reference
topic: quickactiondefaults-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.110Z
keywords: [QuickActionDefaults, Methods, Returns, name, standard, Email, Action, Case, Feed, Case.Email, getActionName, Signature, Return, Value, getActionType, getContextId, getTargetSObject]
---

# QuickActionDefaults Methods

> Returns the name of the standard Email Action on Case Feed
      (Case.Email).

## QuickActionDefaults Methods

The following are methods for QuickActionDefaults.

-   **[getActionName()](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm#apex_QuickAction_QuickActionDefaults_getActionName)**  
    Returns the name of the standard Email Action on Case Feed (Case.Email).
-   **[getActionType()](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm#apex_QuickAction_QuickActionDefaults_getActionType)**  
    Returns the type of the standard Email Action on Case Feed (Email).
-   **[getContextId()](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm#apex_QuickAction_QuickActionDefaults_getContextId)**  
    The ID of the context related to the standard Email Action on Case Feed (Case ID).
-   **[getTargetSObject()](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm#apex_QuickAction_QuickActionDefaults_getTargetSObject)**  
    The target object of the standard Email Action on Case Feed (EmailMessage).

### getActionName()

Returns the name of the standard Email Action on Case Feed (Case.Email).

#### Signature

public String getActionName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getActionType()

Returns the type of the standard Email Action on Case Feed (Email).

#### Signature

public String getActionType()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getContextId()

The ID of the context related to the standard Email Action on Case Feed (Case ID).

#### Signature

public Id getContextId()

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getTargetSObject()

The target object of the standard Email Action on Case Feed (EmailMessage).

#### Signature

public SObject getTargetSObject()

#### Return Value

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")