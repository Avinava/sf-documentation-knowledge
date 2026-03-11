---
title: "QuickActionDefaultsHandler Interface"
domain: apex-reference
topic: quickactiondefaultshandler-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.666Z
keywords: [QuickActionDefaultsHandler, Interface, Implement, method, provide, default, values, standard, Email, action, case, feed., onInitDefaults, actionDefaults, Signature, Parameters, Return, Value]
---

# QuickActionDefaultsHandler Interface

> Implement this method to provide default values for the standard
      Email action in the case feed.

### onInitDefaults(actionDefaults)

Implement this method to provide default values for the standard Email action in the case feed.

#### Signature

public void onInitDefaults(QuickAction.QuickActionDefaults\[\] actionDefaults)

#### Parameters

actionDefaults

Type: [QuickAction.QuickActionDefaults\[\]](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm#apex_class_QuickAction_QuickActionDefaults "Represents an abstract Apex class that provides the context for running the standard Email Action on Case Feed and the container of the Email Message fields for the action payload. You can override the target fields before the standard Email Action is rendered.")

This array contains only one item of type QuickAction.SendEmailQuickActionDefaults.

#### Return Value

Type: void