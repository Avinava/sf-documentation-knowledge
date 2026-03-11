---
title: "StandardSetController Constructors"
domain: apex-reference
topic: standardsetcontroller-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.296Z
keywords: [StandardSetController, Constructors, Creates, instance, ApexPages.StandardSetController, class, list, objects, returned, query, locator., queryLocator, Signature, Parameters, controllerSObjects, Example]
---

# StandardSetController Constructors

> Creates an instance of the ApexPages.StandardSetController class for the list of objects returned by the query
  locator.

## StandardSetController Constructors

The following are constructors for StandardSetController.

-   **[StandardSetController(queryLocator)](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_ctor)**  
    Creates an instance of the ApexPages.StandardSetController class for the list of objects returned by the query locator.
-   **[StandardSetController(controllerSObjects)](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_ctor_2)**  
    Creates an instance of the ApexPages.StandardSetController class for the specified list of standard or custom objects.

### StandardSetController(queryLocator)

Creates an instance of the ApexPages.StandardSetController class for the list of objects returned by the query locator.

#### Signature

public StandardSetController(Database.QueryLocator queryLocator)

#### Parameters

queryLocator

Type: [Database.QueryLocator](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_batch.htm#apex_methods_system_database_batch "Represents the record set returned by Database.getQueryLocator and used with Batch Apex.")

A query locator representing a list of sObjects.

### StandardSetController(controllerSObjects)

Creates an instance of the ApexPages.StandardSetController class for the specified list of standard or custom objects.

#### Signature

public StandardSetController(List<sObject> controllerSObjects)

#### Parameters

controllerSObjects

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_methods)\>

A List of standard or custom objects.

#### Example

```

```