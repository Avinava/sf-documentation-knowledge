---
title: "TxnSecurity Namespace"
domain: apex-reference
topic: txnsecurity-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.135Z
keywords: [TxnSecurity, Namespace]
---

# TxnSecurity Namespace

# TxnSecurity Namespace

The TxnSecurity namespace provides an interface used for transaction security.

The following is the interface and its supporting class in the TxnSecurity namespace.

-   **[Event Class](atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm#apex_class_TxnSecurity_Event)**  
    Contains event information that the evaluate method uses to evaluate a transaction security policy.
-   **[EventCondition Interface](atlas.en-us.apexref.meta/apexref/apex_interface_TxnSecurity_EventCondition.htm#apex_interface_TxnSecurity_EventCondition)**  
    Allows an implementing class to specify whether to take action when certain events occur based on a transaction security policy. This interface is only used for Apex policies created in Real-Time Event Monitoring.
-   **[AsyncCondition Interface](atlas.en-us.apexref.meta/apexref/apex_interface_TxnSecurity_AsyncCondition_interface.htm#apex_interface_TxnSecurity_AsyncCondition)**  
    Allows an implementing class to make asynchronous Apex calls. This interface is used only for transaction security Apex policies created in Real-Time Event Monitoring.
-   **[PolicyCondition Interface](atlas.en-us.apexref.meta/apexref/apex_interface_TxnSecurity_PolicyCondition.htm#apex_interface_TxnSecurity_PolicyCondition)**  
    Apex interface that allows an implementing class to specify actions to take when certain events occur based on a transaction security policy.