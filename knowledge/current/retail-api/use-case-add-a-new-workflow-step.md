---
title: "Use Case: Add a New Workflow Step"
domain: retail-api
topic: use-case-add-a-new-workflow-step
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.807Z
estimatedTokens: 1201
keywords: [Case, Add, New, Workflow, Step, updates, Tactic, Comment, send, input]
---

# Use Case: Add a New Workflow Step

> In this use case, you will create a complete new workflow step that updates the
        Tactic Comment field with a new specified value that you will send as input.

# Use Case: Add a New Workflow Step

In this use case, you will create a complete new workflow step that updates the Tactic Comment field with a new specified value that you will send as input.

1.  Go to Business Object APIs tab and navigate to the “Promotion” entry. If it does not exist, create a new record with those attributes.
2.  You need to configure the BO API Output entities. The Output entities for a BO API define which kind of objects the API works with. Since you’re working with promotions and tactics, you need to add the related ones. In the “Output Entities” related list, ensure the following entities are displayed. If not present in the related list, add them:

    1.  TPM\_Promotion (Main promotion object wrapper)
    2.  TPM\_Promotion.Tactic (Tactic Records)
    3.  TPM\_Promotion.Promotion (Promotion Record)

3.  In the workflows tab, create a new workflow with the following attributes:

    1.  1.  Name: updateTacticComments
        2.  Description: Updates Tactic Comments with the input parameters.

4.  Navigate to your new workflow record.
5.  We need to configure how the input records are going to be mapped to the output records. To do so, you will add entries to the Input Entities and Mapping related list. Create the following records in the related list:

    1.  1.  Record 1
            1.  Business Object API Entity: Promotion
            2.  Output Entity: TPM\_Promotion.Promotion
            3.  Input Mapping Field: Id
            4.  Output Mapping Field: Id, cgcloud\_\_ExternalId\_\_c
        2.  Record 2
            1.  Business Object API Entity: Tactic
            2.  Output Entity: TPM\_Promotion.Tactic
            3.  Input Mapping Field: Id
            4.  Output Mapping Field: Id, cgcloud\_\_ExternalId\_\_c

6.  Add Steps into our workflow. To load all the required promotion data, you can reuse Managed Package provided workflow steps. In the Workflow Steps related list, create the following records.

    1.  1.  Record 1
            1.  Business Object API Workflow Step: loadPromotionDefaults(update)2
            2.  Enabled: checked
            3.  Sort: 10
        2.  Record 2
            1.  Business Object API Workflow Step: loadTacticDefaults(update)2
            2.  Enabled: checked
            3.  Sort: 20

7.  At this point, you’ll have a functional new API that reads the promotion and saves it. You can check the input payloads structure for this API by clicking the View Schema button on the Workflow header. The sample schema is provided below.

    ```

    ```

8.  Add custom behavior. To add additional workflow steps, you need to create APEX classes that implement the behavior. For our example, you are going to create an APEX class that copies an input attribute from the input into the SObject Field Comment\_\_c. Create the following APEX class in your org.

    ```

    ```

9.  After creating the apex class, you need to create the BO API Workflow Step record. To do so, navigate to the Business Object API Workflow Steps tab and create a new Record.

    1.  1.  Business Object API Workflow Step Name: SetCommentValue
        2.  Classname: SetCommentValue (Name of the APEX class)
        3.  Description: Sets the Comment Value for Tactic from the input attributes.
        4.  Method: test (Method is passed to the callable class. This way, with different methods, the same class can implement multiple behaviors)
        5.  Entity: Tactic (Since you want to apply this step on each Input Tactic)
        6.  Sales Org: 0001

10.  After Creating the Workflow Step, you need to define which input structures the step needs. To do so, create new records in the Step Input Structures related list of the Workflow Step. Since our example uses an Attribute called MyComment, you should add a definition for it. The attributes for the Step input structures are used to determine the schema for the input. If the input does not match the schema, an error is displayed.

     1.  RecordType String
     2.  Description: New Comment Attribute value
     3.  Path: .MyComment
     4.  Required: unchecked
     5.  Maximum Length: 80

11.  After creating your step input structure, you can go back to your Workflow record and add it as a Workflow Step.

     1.  Business Object API Workflow Step: SetCommentValue
     2.  Enabled: checked
     3.  Sort: 30

12.  Click again on View Schema and the following is displayed.

     ```

     ```

13.  Test the API by sending a request to the Promotion BO API endpoint and passing the required parameters.

     POST /services/apexrest/cgcloud/promotions/ingest

     ```

     ```

14.  After sending the request, you can track the execution status from the Business Object API Transaction Logs tab by referencing the request through the returned import Id.

## Code Examples

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
            
        // After setting the value, you can return. The promotion and its
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
