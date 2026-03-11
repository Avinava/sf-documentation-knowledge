---
title: "DeployMessage Properties"
domain: apex-reference
topic: deploymessage-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.877Z
keywords: [DeployMessage, Properties, Determines, whether, component, changed, after, deployment., true, result, false, deployed, same, corresponding, already, org., Signature, Property, Value, columnNumber]
---

# DeployMessage Properties

> Determines whether the component was changed after deployment. If
      true, the component was changed as a result of the deployment. If false, the deployed
      component was the same as the corresponding component already in the org.

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