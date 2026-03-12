---
title: "QuickActionDefaults Class"
domain: apex-reference
topic: quickactiondefaults-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.239Z
estimatedTokens: 825
namespace: QuickAction
keywords: [QuickActionDefaults, abstract, Apex, context, running, standard, Email, Action, Case, Feed, container, Message, payload, override, target]
---

# QuickActionDefaults Class

> Represents an abstract Apex class that provides the context for
      running the standard Email Action on Case Feed and the container of the Email Message fields
      for the action payload.  You can override the target fields before the standard Email Action
      is rendered.

**Namespace:** `QuickAction`

# QuickActionDefaults Class

Represents an abstract Apex class that provides the context for running the standard Email Action on Case Feed and the container of the Email Message fields for the action payload. You can override the target fields before the standard Email Action is rendered.

## Namespace

[QuickAction](atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm "The QuickAction namespace provides classes and methods for quick actions.")

## Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

You cannot extend this abstract class. You can use the getter methods when using it in the context of QuickAction.QuickActionDefaultsHandler. Salesforce provides a class that extends this class (See QuickAction.SendEmailQuickActionDefaults.)

-   **[QuickActionDefaults Methods](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm#apex_QuickAction_QuickActionDefaults_methods)**


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

## Related Topics

- QuickAction (atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm)
- QuickActionDefaults Methods (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm)
- getActionName() (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm)
- getActionType() (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm)
- getContextId() (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm)
- getTargetSObject() (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- SObject (atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm)
