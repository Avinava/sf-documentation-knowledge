---
title: "DeployMessage Class"
domain: apex-reference
topic: deploymessage-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.352Z
estimatedTokens: 2348
namespace: Metadata
keywords: [DeployMessage, Represents, result, information, deployment, metadata, component., Usage, changed, columnNumber, componentType, created, createdDate, deleted, fileName, fullName, lineNumber, problem, problemType, success]
---

# DeployMessage Class

> Represents result information for the deployment of a metadata
      component.

**Namespace:** `Metadata`

# DeployMessage Class

Represents result information for the deployment of a metadata component.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use DeployMessage to access detailed information about component deployments. Salesforce provides a list of DeployMessages for a completed deployment via the DeployDetails and DeployResults instances sent in the [DeployCallback.handleResult()](atlas.en-us.apexref.meta/apexref/apex_interface_Metadata_DeployCallback.htm#apex_Metadata_DeployCallback_handleResult "Method that is called when the asynchronous deployment of custom metadata completes.") callback.

-   **[DeployMessage Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_Metadata_DeployMessage_properties)**

-   **[DeployMessage Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_Metadata_DeployMessage_methods)**


## DeployMessage Properties

The following are properties for DeployMessage.

-   **[changed](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_Metadata_DeployMessage_changed)**
    Determines whether the component was changed after deployment. If true, the component was changed as a result of the deployment. If false, the deployed component was the same as the corresponding component already in the org.
-   **[columnNumber](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_Metadata_DeployMessage_columnNumber)**
    Each component is represented by a text file. If an error occurs during deployment, this property represents the column of the text file where the error occurred.
-   **[componentType](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_Metadata_DeployMessage_componentType)**
    The metadata type of the component in the deployment.
-   **[created](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_Metadata_DeployMessage_created)**
    If true, the component was created as a result of the deployment. If false, the component was modified as a result of the deployment.
-   **[createdDate](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_Metadata_DeployMessage_createdDate)**
    The date and time when the component was created as a result of the deployment.
-   **[deleted](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_Metadata_DeployMessage_deleted)**
    If true, the component was deleted as a result of the deployment. If false, the component was either new or modified as result of the deployment.
-   **[fileName](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_Metadata_DeployMessage_fileName)**
    The name of the file in the metadata archive used to deploy the component.
-   **[fullName](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_Metadata_DeployMessage_fullName)**
    Full name for the custom metadata component.
-   **[id](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_Metadata_DeployMessage_id)**
    ID of the component that was deployed.
-   **[lineNumber](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_Metadata_DeployMessage_lineNumber)**
    Each component is represented by a text file. If an error occurs during deployment, this field represents the line number of the text file where the error occurred.
-   **[problem](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_Metadata_DeployMessage_problem)**
    If an error or warning occurred, this field contains a description of the problem that caused the deployment to fail.
-   **[problemType](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_Metadata_DeployMessage_problemType)**
    Indicates the problem type, for example, an error or warning.
-   **[success](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_Metadata_DeployMessage_success)**
    Indicates whether the component was successfully deployed (true) or not (false).

### changed

Determines whether the component was changed after deployment. If true, the component was changed as a result of the deployment. If false, the deployed component was the same as the corresponding component already in the org.

#### Signature

public Boolean changed {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### columnNumber

Each component is represented by a text file. If an error occurs during deployment, this property represents the column of the text file where the error occurred.

#### Signature

public Integer columnNumber {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### componentType

The metadata type of the component in the deployment.

#### Signature

public String componentType {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### created

If true, the component was created as a result of the deployment. If false, the component was modified as a result of the deployment.

#### Signature

public Boolean created {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### createdDate

The date and time when the component was created as a result of the deployment.

#### Signature

public Datetime createdDate {get; set;}

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### deleted

If true, the component was deleted as a result of the deployment. If false, the component was either new or modified as result of the deployment.

#### Signature

public Boolean deleted {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### fileName

The name of the file in the metadata archive used to deploy the component.

#### Signature

public String fileName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### fullName

Full name for the custom metadata component.

#### Signature

public String fullName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### id

ID of the component that was deployed.

#### Signature

public Id id {get; set;}

#### Property Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### lineNumber

Each component is represented by a text file. If an error occurs during deployment, this field represents the line number of the text file where the error occurred.

#### Signature

public Integer lineNumber {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### problem

If an error or warning occurred, this field contains a description of the problem that caused the deployment to fail.

#### Signature

public String problem {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### problemType

Indicates the problem type, for example, an error or warning.

#### Signature

public Metadata.DeployProblemType problemType {get; set;}

#### Property Value

Type: [Metadata.DeployProblemType](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_DeployProblemType.htm#apex_enum_Metadata_DeployProblemType "Describes the problem type for an unsuccessful component deploy.")

### success

Indicates whether the component was successfully deployed (true) or not (false).

#### Signature

public Boolean success {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## DeployMessage Methods

The following are methods for DeployMessage.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_Metadata_DeployMessage_clone)**
    Makes a duplicate copy of the Metadata.DeployMessage.

### clone()

Makes a duplicate copy of the Metadata.DeployMessage.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- DeployCallback.handleResult() (atlas.en-us.apexref.meta/apexref/apex_interface_Metadata_DeployCallback.htm)
- DeployMessage Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm)
- DeployMessage Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm)
- changed (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm)
- columnNumber (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm)
- componentType (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm)
- created (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm)
- createdDate (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm)
- deleted (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm)
