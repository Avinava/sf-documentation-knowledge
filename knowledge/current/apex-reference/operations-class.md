---
title: "Operations Class"
domain: apex-reference
topic: operations-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.998Z
keywords: [Operations, Class, Retrieves, list, custom, metadata, components., retrieve, type, fullNames, Signature, Parameters, Return, Value]
---

# Operations Class

> Retrieves a list of custom metadata components.

### retrieve(type, fullNames)

Retrieves a list of custom metadata components.

#### Signature

public static List<Metadata.Metadata> retrieve(Metadata.MetadataType type, List<String\> fullNames)

#### Parameters

type

Type: [Metadata.MetadataType](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_MetadataType.htm#apex_enum_Metadata_MetadataType "Represents the custom metadata components available in Apex.")

The metadata component type.

fullNames

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of component names to retrieve. For information on component name formats, see [Metadata.fullName()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm#apex_Metadata_Metadata_fullName "The full name of the custom metadata, which can include the namespace, type, and component name.").

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.Metadata](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm#apex_class_Metadata_Metadata "An abstract base class that represents a custom metadata component.")\>