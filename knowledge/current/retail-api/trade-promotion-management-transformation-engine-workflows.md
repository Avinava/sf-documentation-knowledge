---
title: "Trade Promotion Management Transformation Engine Workflows"
domain: retail-api
topic: trade-promotion-management-transformation-engine-workflows
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:36.516Z
estimatedTokens: 2320
keywords: [Trade, Promotion, Management, Transformation, Engine, Workflows, workflow, comprises, APEX, callable, apply, transformations, input, JSON, output]
---

# Trade Promotion Management Transformation Engine Workflows

> The workflow comprises APEX callable class to apply the transformations from the input
   JSON into the output structure.

# Trade Promotion Management Transformation Engine Workflows

The workflow comprises APEX callable class to apply the transformations from the input JSON into the output structure.

Business object API workflow rules use the concept of Entities to identify records in both the data input (input payloads) and output (generated objects or records). The supported entities on the engine can be found on the business object API entities object. The ones provided by the managed package are:

| Entity Name | Location | Description |
| --- | --- | --- |
| Promotion | Input | Represents the input Promotion. The attributes for the object are defined in the Workflow Rules that use this Entity. |
| Tactic | Input | Represents an input Tactic. The attributes for the object are defined in the Workflow Rules that use this Entity. |
| ManualInputs | Input | Represents a Manual Inputs Array. The attributes for the object are defined in the Workflow Rules that use this Entity. |
| ProductFilter | Input | Represents a Product Filter Structure. The attributes for the object are defined in the Workflow Rules that use this Entity. |
| TPM_Promotion | Output | Represents the TPM_Promotion Instance with all the promotion data. |
| TPM_Promotion.Promotion | Output | Represents a TPM_Promotion.Record instance with all the Promotion SObject Data. SObject fields can be used with dot notation. |
| TPM_Promotion.Tactic | Output | Represents a TPM_Promotion.TacticRecord instance with all the Tactic SObject Data. SObject fields can be used with dot notation. |
| TPM_Promotion.Attachment | Output | Represents a TPM_Promotion.Record instance with all the Promotion Attachment SObject Data. SObject fields can be used with dot notation. |
| TPM_Promotion.AttachmentLink | Output | Represents a TPM_Promotion.Record instance with all the Promotion Attachment Link SObject Data. SObject fields can be used with dot notation. |
| TPM_Promotion.ProductFilter | Output | Represents a TPM_ProductFilter instance with all the Promotion Product filter information. |
| TPM_Promotion.ProductShare | Output | Represents a TPM_Promotion.Record instance with all the Promotion Product Share SObject Data. SObject fields can be used with dot notation. |
| TPM_Promotion.TacticConditionCreationDefinition | Output | Represents a TPM_Promotion.Record instance with all the Tactic Condition Creation Definition SObject Data. SObject fields can be used with dot notation. |
| TPM_Promotion.TacticFund | Output | Represents a TPM_Promotion.Record instance with all the Tactic Fund SObject Data. SObject fields can be used with dot notation. |
| TPM_Promotion.TacticProductFilter | Output | Represents a TPM_ProductFilter instance with all the Tactic Product filter information. |
| CustomState | Output | Represents a generic Object that is passed to the Promotion Saving Process while saving. |

Workflow Step SObject

Workflow steps are defined in the Workflow StepSObject. Each step requires the following series of attributes:

| Object | Description | Required/Optional |
| --- | --- | --- |
| Name | Name of the business rule. | Required |
| Entity | Entity of the Input the rule must be applied to. | Optional |
| Method | Action method that is passed to the callable class. | Optional |
| Classname | Name of the APEX Callable class implementing the transformation. | Required |
| Description | High-level overview of what the rule does | Optional |

Input Structure records

Every rule must have a list of input structure records that reflect the expected inputs for the rule. Each record requires the following information:

| Object | Description |
| --- | --- |
| Path | Path of the input JSON, in which the rule reads a value.Possible values are:.TacticTemplate.Categories |
| Required | Boolean to indicate if the property is mandatory or optional. |
| RecordType | The type of the input expected for the property.Possible values are:ObjectArrayStringNumberBooleanMaximum and Minimum (Numbers)Pattern (String) |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

The input structure records are used to generate the JSON schema. If an input attribute received isn’t as per the rules, the step reports an error.

Applied Transformation Rules

Applied Transformation Rules are configured in the Transformation Configuration Record. The following table provides information about the record fields that must be updated:

| Object | Description |
| --- | --- |
| Transformation Rule | Transformation rule to be applied. |
| Enabled | Indicates whether the rule is applied or not. |
| Sort | Rules are executed in ascending order (allows the creation of dependencies). |

Transformation Rules APEX classes receive a context object with the following attributes:

```

```

## Example

Create a complete new workflow that to update the Tactic Comment field with a new specified value.

1.  Navigate to Business Object APIs Tab and navigate to the Promotion entry for Sales Org 0001. If it does not exist, create a record with those attributes.
2.  Configure the BO API Output entities. The Output entities for a BO API define which kind of objects the API works with. In the Output Entities related list, ensure the following entities are displayed. If not present in the related list, add them:
    1.  TPM\_Promotion (Main promotion object wrapper)
    2.  TPM\_Promotion.Tactic (Tactic Records)
    3.  TPM\_Promotion.Promotion (Promotion Record)
3.  In the workflows tab, create a workflow with the following attributes:
    1.  Name: updateTacticComments
    2.  Description: Updates Tactic Comments with the input parameters
4.  Navigate to your new workflow record.
5.  Configure how the input records are going to be mapped to the output records. To do so, add entries to the “Input Entities and Mapping” related list. Create the following records in the related list.

    Record 1

    1.  Business Object API Entity: Promotion
    2.  Output Entity: TPM\_Promotion.Promotion
    3.  Input Mapping Field: Id
    4.  Output Mapping Field: Id, cgcloud\_\_ExternalId\_\_c

    Record 2

    1.  Business Object API Entity: Tactic
    2.  Output Entity: TPM\_Promotion.Tactic
    3.  Input Mapping Field: Id
    4.  Output Mapping Field: Id, cgcloud\_\_ExternalId\_\_c
6.  Add Steps into the workflow. To load all the required promotion data, we can reuse Managed Package provided workflow steps. In the Workflow Steps related list, create the following records:

    Record 1

    1.  Business Object API Workflow Step: loadPromotionDefaults(update)2
    2.  Enabled: checked
    3.  Sort: 10

    Record 2

    1.  Business Object API Workflow Step: loadTacticDefaults(update)2
    2.  Enabled: checked
    3.  Sort: 20
7.  Check the input payloads structure for this API by clicking the “View Schema” button on the Workflow header. The schema should look like:

    ```

    ```

8.  Add custom behavior. To add additional workflow steps create an APEX class that copies an input attribute from the input into the SObject Field Comment\_\_c. Create the following APEX class in your org:

    ```

    ```

9.  Create the BO API Workflow Step record. Navigate to the “Business Object API Workflow Steps” Tab and create a new Record:
    1.  Business Object API Workflow Step Name: SetCommentValue
    2.  Classname: SetCommentValue (Name of the APEX class)
    3.  Description: Sets the Comment Value for Tactic from the input attributes.
    4.  Method: test (Method is passed to the callable class. This way, with different methods, the same class can implement multiple behaviors)
    5.  Entity: Tactic (Since we want to apply this step on each Input Tactic)
    6.  Sales Org: 0001
10.  Define which input structures the step needs. Create records in the Step Input Structures related list of the Workflow Step. The attributes for the Step input structures are used to determine the schema that the input should have (View Schema button). If the input does not match the schema, an error is displayed.
     1.  RecordType String
     2.  Description: New Comment Attribute value
     3.  Path: .MyComment
     4.  Required: unchecked
     5.  Maximum Length: 80
11.  Add a Workflow step into the Workflow record.
     1.  Business Object API Workflow Step: SetCommentValue
     2.  Enabled: checked
     3.  Sort: 30
12.  Click View Schema and the schema should have the following structure.

     ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

     #### Note

     The schema accpets the new MyComment attribute.

     ```

     ```

13.  Test the API by making a REST call to the Promotion BO API endpoint and passing the required parameters.

     ```

     ```

14.  Track the execution status from the “Business Object API Transaction Logs” Tab by referencing the request by the returned importId.

## Coding Guidelines

-   Avoid expensive operations (such as significant JSON serializations or deserializations) in the Business Rules code.
-   Cache the SObject records from the database, as other rules might be impacted. (check SimplePromotionCoreBusinessRules.readSObjectById)
-   Ensure that the Business Rules focus on a single job, to enable a modular and configurable approach.

## Code Examples

```apex
// Common to all steps.
String txId: TransactionId of the process
String salesOrg: Sales organization passed to the execution.
Object input: Whole Input Object
Object output: Whole Output Object
 
// Step specific
SObject workflowStepRecord: Workflow Step Record.
 
// Entity specific
String inputPath: Path of the current input in the main input object.
String inputEntityPath: A list of the names of the parent input entities ordered based on the deepness level. (i.e. Promotion/Tactic/TacticBrand).
Object currentInput: Current block of the input object being processed.
List<Object> parentInputs: A list of the parent Input Entities for this step. Each entry on the list will be the input Entity. Has the same number of elements as the inputEntityPath. (i.e. [ 0 ] → Promotion, [ 1 ] → Tactic, [ 2 ] → TacticBrand)
 
String outputPath: Path of the current output in the main output object.
String outputEntityPath: A list of the names of the parent output entities ordered based on the deepness level. (i.e. BOPromotion/LOTactic).
Object currentOutput:  Output object where the rule is expected to set the attributes. Rules are expected to set this object into the proper place of the parent.
List<Object> parentOutputs: A list of the parent Output Entities for this step. Each entry on the list will be the output Object for the Entity. Has the same number of elements as the outputEntityPath. (i.e. [ 0 ] → BOPromotion, [ 1 ] → LOTactic)
```

```
{
  "required" : [ "Id" ], // Promotion requires an Id because of the Promotion workflow step
  "properties" : {
    "Tactics" : {
      "items" : {
        "required" : [ "Id" ], // Tactic requires an Id because of the Tactic workflow step
        "properties" : {
          "TacticTemplate" : {
            "pattern" : null,
            "minLength" : null,
            "maxLength" : 40,
            "type" : "string"
          },
          "Id" : {
            "pattern" : null,
            "minLength" : null,
            "maxLength" : 40,
            "type" : "string"
          }
        },
        "additionalProperties" : false,
        "type" : "object"
      },
      "type" : "array"
    },
    "PromotionTemplate" : {
      "pattern" : null,
      "minLength" : null,
      "maxLength" : 40,
      "type" : "string"
    },
    "Id" : {
      "pattern" : null,
      "minLength" : null,
      "maxLength" : 40,
      "type" : "string"
    }
  },
  "additionalProperties" : false,
  "type" : "object"
}
```

```apex
global with sharing class SetCommentValue implements System.Callable {
    public class SetCommentValueException extends Exception {}
    /**
    * This Sample Business Rule copies the value from the MyComment input attribute,
    * into the Output Comment__c field
    */
    public static Object call(String method, Map<String, Object> context) {
        // We use the context to extract variables
        // The type of the output object is defined by it's output entity in the mapping.
        cgcloud.TPM_Promotion.TacticRecord tactic = (cgcloud.TPM_Promotion.TacticRecord)
            context.get('currentOutput');
        // For input entities, it's type is always Map<String, Object>
        Map<String, Object> input = (Map<String, Object>) context.get('currentInput');
        
        // Set the value to the record
        cgcloud__Tactic__c myRecord = (cgcloud__Tactic__c) tactic.getRecord();
        
        myRecord.Comment__c = input.get('MyComment') != null 
            ? String.valueOf(input.get('MyComment'))
            : '';
            
        // After setting the value, we can return. The promotion and its
        // related records will be saved
        
        // If any exception is thrown, no data is committed
        return null;
    }
}
```

```
{
  "required" : [ "Id" ],
  "properties" : {
    "Tactics" : {
      "items" : {
        "required" : [ "Id" ],
        "properties" : {
          "MyComment" : {
            "pattern" : null,
            "minLength" : null,
            "maxLength" : 80,
            "type" : "string"
          },
          "TacticTemplate" : {
            "pattern" : null,
            "minLength" : null,
            "maxLength" : 40,
            "type" : "string"
          },
          "Id" : {
            "pattern" : null,
            "minLength" : null,
            "maxLength" : 40,
            "type" : "string"
          }
        },
        "additionalProperties" : false,
        "type" : "object"
      },
      "type" : "array"
    },
    "PromotionTemplate" : {
      "pattern" : null,
      "minLength" : null,
      "maxLength" : 40,
      "type" : "string"
    },
    "Id" : {
      "pattern" : null,
      "minLength" : null,
      "maxLength" : 40,
      "type" : "string"
    }
  },
  "additionalProperties" : false,
  "type" : "object"
}
```

```
POST /services/apexrest/cgcloud/promotions/ingest

{
  "workflow": "updateTacticComments", // Name of your workflow
  "salesOrg": "0001",
  "promotions": [
    {
      "Id": "a2VTC0000001lJR2AY",  // A promotion in the system
      "Tactics": [
        {
          "Id": "a36TC0000000XYfYAM", // It's tactics
          "MyComment": "Comment 1 - updated"
        },
        {
          "Id": "a36TC0000000XYgYAM",
          "MyComment": "Comment 2 - updated"
        }
      ]
    }
  ]
}
```
