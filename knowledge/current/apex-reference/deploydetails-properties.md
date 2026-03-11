---
title: "DeployDetails Properties"
domain: apex-reference
topic: deploydetails-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.865Z
keywords: [DeployDetails, Properties, Contains, list, information, components, failed, deploy., componentFailures, Signature, Property, Value, componentSuccesses]
---

# DeployDetails Properties

> Contains a list of information about components that failed to
      deploy.

## DeployDetails Properties

The following are properties for DeployDetails.

-   **[componentFailures](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployDetails.htm#apex_Metadata_DeployDetails_componentFailures)**  
    Contains a list of information about components that failed to deploy.
-   **[componentSuccesses](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployDetails.htm#apex_Metadata_DeployDetails_componentSuccesses)**  
    Contains a list of information about components that deployed successfully.

### componentFailures

Contains a list of information about components that failed to deploy.

#### Signature

public List<Metadata.DeployMessage> componentFailures {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.DeployMessage](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_class_Metadata_DeployMessage "Represents result information for the deployment of a metadata component.")\>

### componentSuccesses

Contains a list of information about components that deployed successfully.

#### Signature

public List<Metadata.DeployMessage> componentSuccesses {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.DeployMessage](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_class_Metadata_DeployMessage "Represents result information for the deployment of a metadata component.")\>