---
title: "SymbolTable"
domain: tooling-api
topic: symboltable
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.858Z
keywords: [SymbolTable, Fields, Annotations, Modifiers, Usage]
---

# SymbolTable

# SymbolTable

A complex type that represents all user-defined tokens in the Body of an ApexClass, ApexClassMember, or ApexTriggerMember and their associated line and column locations within the Body.

## Fields

| Field | Details |
| --- | --- |
| constructors | Typearray of ConstructorDescriptionContains the position, scope, and signature of constructors for the Apex class. Apex triggers don't have constructors.Constructor includes the following fields:annotationslocationmodifiersnamereferencesvisibility (available only in API versions 33.0 and earlier; scope: Global, Public, or Private)parameters |
| externalReferences | Typearray of ExternalReferenceDescriptionContains the name, namespace, external class, method, and variable references for the Apex class or trigger. These references can be used for symbol highlighting or code navigation.ExternalReference includes the following fields:methodsnamenamespacereferencesvariables |
| innerClasses | Typearray of SymbolTableDescriptionContains a symbol table for each inner class of the Apex class or trigger. |
| interfaces | Typearray of StringDescriptionContains a set of strings for each interface with the namespace and name, for example: ['System.Batchable', 'MyNamespace.MyInterface']. |
| methods | Typearray of MethodDescriptionContains the position, name, scope, signature, and return type of available Apex methods.Method includes the following fields:annotationslocationmodifiersnamereferencesvisibility (available only in API versions 33.0 and earlier; scope: Global, Public, or Private)parametersreturnType |
| name | TypestringDescriptionThe name of the Apex class or trigger. |
| namespace | TypestringDescriptionThe namespace of the Apex class or trigger. Null if there is no namespace. |
| parentClass | TypestringDescriptionReturns parents of inner classes and extending classes. |
| properties | Typearray of VisibilitySymbolDescriptionContains the position, name, scope, and references of properties for the Apex class or trigger.VisibilitySymbol includes the following fields:annotationslocationmodifiersnamereferencesvisibility (available only in API versions 33.0 and earlier; scope: Global, Public, or Private) |
| tableDeclaration | Typearray of SymbolDescriptionContains the position, name, and references of the Apex class or trigger.Symbol includes the following fields:annotationslocationmodifiersnamereferences |
| variables | Typearray of SymbolDescriptionContains the position, name, and references of related variables.Symbol includes the following fields:annotationslocationmodifiersnamereferences |

## Annotations

Available values for annotations fields include:

-   Deprecated
-   Future
-   HttpDelete
-   HttpGet
-   HttpPatch
-   HttpPost
-   HttpPut
-   InvocableMethod
-   InvocableVariable
-   IsTest
-   ReadOnly
-   RemoteAction
-   TestSetup
-   TestVisible
-   RestResource

## Modifiers

Modifiers can include more values than those values explicitly specified in classes and methods. All relevant modifiers, including implicit ones, are now returned. For example, all webservice methods have an implicit global modifier. Also, because fields and methods are private unless otherwise specified, the private modifier is returned by default.

The testMethod modifier is returned when either the testMethod modifier or the IsTest annotation is used.

Available values for modifiers fields include:

-   abstract
-   final
-   global
-   inherited sharing
-   override
-   private
-   protected
-   public
-   static
-   testMethod
-   transient
-   virtual
-   webService
-   with sharing
-   without sharing

## Usage

Use symbol tables instead of building a parser or compiler. Symbol tables allow you to do symbol highlighting, code navigation, code completion, symbol searches, and more.

A symbol table can’t be created if the content referenced by the ContentEntityId field doesn’t use a symbol table. Compiler errors for the last deployment of the [MetadataContainer](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacontainer.htm "Manages working copies of ApexClassMember, ApexTriggerMember, ApexPageMember, and ApexComponentMember objects, including collections of objects to be deployed together.") in the MetadataContainerId field also prevent a symbol table from being created.