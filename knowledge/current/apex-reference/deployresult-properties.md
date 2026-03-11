---
title: "DeployResult Properties"
domain: apex-reference
topic: deployresult-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.893Z
keywords: [DeployResult, Properties, user, who, canceled, queued, deployment., canceledBy, Signature, Property, Value, canceledByName, checkOnly, completedDate, createdBy, createdByName, createdDate, details, done, errorMessage]
---

# DeployResult Properties

> ID of the user who canceled the queued deployment.

## DeployResult Properties

The following are properties for DeployResult.

-   **[canceledBy](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_canceledBy)**  
    ID of the user who canceled the queued deployment.
-   **[canceledByName](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_canceledByName)**  
    Full name of the user who canceled the queued deployment.
-   **[checkOnly](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_checkOnly)**  
    Indicates whether the deployment checked only the validity of the deployed files without making changes in the org. A check-only deployment does not deploy components or change the org in any way.
-   **[completedDate](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_completedDate)**  
    Date and time for when the deployment process ended.
-   **[createdBy](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_createdBy)**  
    ID of the user who created the deployment job.
-   **[createdByName](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_createdByName)**  
    Full name of the user who created the deployment job.
-   **[createdDate](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_createdDate)**  
    Date and time the deployment job was first queued.
-   **[details](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_details)**  
    Provides the details for components in a completed deployment.
-   **[done](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_done)**  
    Indicates whether Salesforce finished processing the deployment.
-   **[errorMessage](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_errorMessage)**  
    Message corresponding to the values in the errorStatusCode property, if any.
-   **[errorStatusCode](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_errorStatusCode)**  
    If an error occurs during deployment, a status code is returned. The message corresponding to the status code is returned in the errorMessagefield property.
-   **[id](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_id)**  
    ID of the deployment job.
-   **[ignoreWarnings](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_ignoreWarnings)**  
    Specifies whether a deployment continues, even if the deployment generates warnings.
-   **[lastModifiedDate](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_lastModifiedDate)**  
    Date and time of the last update for the deployment process.
-   **[messages](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_messages)**  
    A list of all the detail messages for a deployment.
-   **[numberComponentErrors](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_numberComponentErrors)**  
    The number of components that generated errors during the deployment.
-   **[numberComponentsDeployed](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_numberComponentsDeployed)**  
    The number of components deployed in the deployment process. Use this value with the numberComponentsTotal property to get an estimate of the deployment’s progress.
-   **[numberComponentsTotal](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_numberComponentsTotal)**  
    The total number of components in the deployment. Use this value with the numberComponentsDeployed property to get an estimate of the deployment’s progress.
-   **[rollbackOnError](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_rollbackOnError)**  
    Indicates whether any failure causes a complete rollback (true) or not (false) of the deployment.
-   **[startDate](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_startDate)**  
    Date and time the deployment process began.
-   **[stateDetail](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_stateDetail)**  
    Indicates which component is being deployed.
-   **[status](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_status)**  
    Indicates the current state of the deployment.
-   **[success](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_success)**  
    Indicates whether the deployment was successful (true) or not (false).

### canceledBy

ID of the user who canceled the queued deployment.

#### Signature

public String canceledBy {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### canceledByName

Full name of the user who canceled the queued deployment.

#### Signature

public String canceledByName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### checkOnly

Indicates whether the deployment checked only the validity of the deployed files without making changes in the org. A check-only deployment does not deploy components or change the org in any way.

#### Signature

public Boolean checkOnly {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### completedDate

Date and time for when the deployment process ended.

#### Signature

public Datetime completedDate {get; set;}

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### createdBy

ID of the user who created the deployment job.

#### Signature

public String createdBy {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### createdByName

Full name of the user who created the deployment job.

#### Signature

public String createdByName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### createdDate

Date and time the deployment job was first queued.

#### Signature

public Datetime createdDate {get; set;}

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### details

Provides the details for components in a completed deployment.

#### Signature

public Metadata.DeployDetails details {get; set;}

#### Property Value

Type: [Metadata.DeployDetails](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployDetails.htm#apex_class_Metadata_DeployDetails "Contains detailed information on deployed components.")

### done

Indicates whether Salesforce finished processing the deployment.

#### Signature

public Boolean done {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### errorMessage

Message corresponding to the values in the errorStatusCode property, if any.

#### Signature

public String errorMessage {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### errorStatusCode

If an error occurs during deployment, a status code is returned. The message corresponding to the status code is returned in the errorMessagefield property.

#### Signature

public String errorStatusCode {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

For a description of each status code value, see [Core Data Types Used in API Calls](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm) in the SOAP API Developer Guide.

### id

ID of the deployment job.

#### Signature

public Id id {get; set;}

#### Property Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### ignoreWarnings

Specifies whether a deployment continues, even if the deployment generates warnings.

#### Signature

public Boolean ignoreWarnings {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### lastModifiedDate

Date and time of the last update for the deployment process.

#### Signature

public Datetime lastModifiedDate {get; set;}

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### messages

A list of all the detail messages for a deployment.

#### Signature

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Removed in API version 29.0 and later.

public List<Metadata.DeployMessage> messages {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.DeployMessage](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_class_Metadata_DeployMessage "Represents result information for the deployment of a metadata component.")\>

### numberComponentErrors

The number of components that generated errors during the deployment.

#### Signature

public Integer numberComponentErrors {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### numberComponentsDeployed

The number of components deployed in the deployment process. Use this value with the numberComponentsTotal property to get an estimate of the deployment’s progress.

#### Signature

public Integer numberComponentsDeployed {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### numberComponentsTotal

The total number of components in the deployment. Use this value with the numberComponentsDeployed property to get an estimate of the deployment’s progress.

#### Signature

public Integer numberComponentsTotal {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### rollbackOnError

Indicates whether any failure causes a complete rollback (true) or not (false) of the deployment.

#### Signature

public Boolean rollbackOnError {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### startDate

Date and time the deployment process began.

#### Signature

public Datetime startDate {get; set;}

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### stateDetail

Indicates which component is being deployed.

#### Signature

public String stateDetail {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### status

Indicates the current state of the deployment.

#### Signature

public Metadata.DeployStatus status {get; set;}

#### Property Value

Type: [Metadata.DeployStatus](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_DeployStatus.htm#apex_enum_Metadata_DeployStatus "The result status of a deployment.")

### success

Indicates whether the deployment was successful (true) or not (false).

#### Signature

public Boolean success {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")