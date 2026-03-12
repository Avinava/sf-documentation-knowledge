---
title: "LearningItemSerializeDeserializer Class"
domain: apex-reference
topic: learningitemserializedeserializer-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.276Z
estimatedTokens: 1428
keywords: [LearningItemSerializeDeserializer, Serializes, deserializes, content, associated, custom, exercise, migrating, Enablement, program, org, another., Usage, Example, deserialize, serializedOutput, serialize, learningItemId]
---

# LearningItemSerializeDeserializer Class

> Serializes and deserializes the content associated with a custom exercise when migrating
    an Enablement program from one org to another.

# LearningItemSerializeDeserializer Class

Serializes and deserializes the content associated with a custom exercise when migrating an Enablement program from one org to another.

## Namespace

[sfdc\_enablement](atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_enablement.htm "The sfdc_enablement namespace provides classes for creating custom learning items to implement custom exercise types in Enablement programs. Lightning web components are used to render the custom exercises on Program Builder.")

## Usage

The class contains methods to serialize and deserialize custom exercise content between orgs when an Enablement program that includes a custom exercise is migrated from one org to another through change sets or packaging.

Extend the sfdc\_enablement.LearningItemSerializeDeserializer Apex abstract class and add the class name to the ApexSerializerDeserializer field of the [LearningItemType metadata record](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_learningitemtype.htm). If you don’t add the class name to the LearningItemType metadata record, the customContent property for the custom exercise is empty in the destination org and no corresponding LearningItem record is created for the exercise’s [EnblProgramTaskDefinition record](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_enblprogramtaskdefinition.htm).

The [serialize](#apex_sfdc_enablement_LearningItemSerializeDeserializer_serialize "Serializes the custom content associated with the specified learning item. The serialized string represents the metadata of the custom content and is used to recreate the custom content in the target Salesforce org during deployment.") method serializes the custom content of the learning item from the source org. This method is called when you retrieve custom content from the source org.

The [deserialize](#apex_sfdc_enablement_LearningItemSerializeDeserializer_deserialize "Deserializes the provided custom content string and returns the record ID of the learning item.") method is called during the deployment of a program. This method takes the serialized custom content, recreates the custom object record in the target org, and returns a new learning item record ID.

## Example

The sample code serializes and deserializes the custom content for a given learning item of a custom screen flow exercise in an Enablement program. For this example to work, make sure the screen flow exists in the target org.

```

```

-   **[LearningItemSerializeDeserializer Methods](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningItemSerializeDeserializer.htm#apex_sfdc_enablement_LearningItemSerializeDeserializer_methods)**


## LearningItemSerializeDeserializer Methods

The following are methods for LearningItemSerializeDeserializer.

-   **[deserialize(serializedOutput)](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningItemSerializeDeserializer.htm#apex_sfdc_enablement_LearningItemSerializeDeserializer_deserialize)**
    Deserializes the provided custom content string and returns the record ID of the learning item.
-   **[serialize(learningItemId)](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningItemSerializeDeserializer.htm#apex_sfdc_enablement_LearningItemSerializeDeserializer_serialize)**
    Serializes the custom content associated with the specified learning item. The serialized string represents the metadata of the custom content and is used to recreate the custom content in the target Salesforce org during deployment.

### deserialize(serializedOutput)

Deserializes the provided custom content string and returns the record ID of the learning item.

#### Signature

public String deserialize(String serializedOutput)

#### Parameters

serializedOutput

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The serialized information of custom content associated with a learning item The [serialize(learningItemId)](#apex_sfdc_enablement_LearningItemSerializeDeserializer_serialize "Serializes the custom content associated with the specified learning item. The serialized string represents the metadata of the custom content and is used to recreate the custom content in the target Salesforce org during deployment.") method returns this information as a string that is less than or equal to 250 characters.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the learning item created for the target org.

### serialize(learningItemId)

Serializes the custom content associated with the specified learning item. The serialized string represents the metadata of the custom content and is used to recreate the custom content in the target Salesforce org during deployment.

#### Signature

public String serialize(String learningItemId)

#### Parameters

learningItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the learning item associated with the custom content to be serialized.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The serialized information of the custom content of the specified learning item. The format is a string that’s less than or equal to 250 characters long.

## Code Examples

```apex
global class ScreenFlowSerializerDeserializer extends Sfdc_enablement.LearningItemSerializeDeserializer {
    // The serialize method returns the serialized output of the 
    // learning item’s custom content.
    global override String serialize(String learningItemId) {
        // Get the screen flow record ID associated with the learning item.
        LearningItem learningItem = [SELECT ScreenFlow_Field__c from LearningItem where Id =: learningItemId LIMIT 1];
        String screenFlowRecordId = learningItem.ScreenFlow_Field__c;
        
        // Get the flow version ID associated with that screen flow.
        ScreenFlow_Object__c screenFlowRecord = [SELECT FlowVersionId__c from ScreenFlow_Object__c where Id =: screenFlowRecordId LIMIT 1];
        String flowVersionId = screenFlowRecord.FlowVersionId__c;

        // Query the flow definition associated with that flow version.
        // Get the information you need to recreate the custom object
        // record in the destination org.
        // In this example, we're only getting the API name of the
        // flow version.
        FlowDefinitionView flowDefinitionView = [SELECT ApiName from FlowDefinitionView where ActiveVersionId =: flowVersionId LIMIT 1];
        
        // Return the serialized string.
        // In this example, we're only returning the API name of the flow
        // definition in the string.
        return flowDefinitionView.ApiName;
    }

    // The deserialize method deserializes the string containing the custom 
    // content. In the method, you recreate the custom object record 
    // for the destination org and populate it with the custom content. 
    // Then insert the record in the destination org and return the new
    // custom object record ID.
    global override String deserialize(String serializedOutput) {
        // Find the flow active version ID of the same screen flow in the 
        // destination org. 
        FlowDefinitionView flowDefinitionView = [SELECT ActiveVersionId from FlowDefinitionView where ApiName =: serializedOutput LIMIT 1];
        String flowActiveVersionId = flowDefinitionView.ActiveVersionId;

        // Create the screen flow custom object record using the 
        // information you passed to the string in the serialize method.
        // In this example, we only passed the API name of the screen flow
        // to the string.
        ScreenFlow_Object__c screenFlowRecord = new ScreenFlow_Object__c();
        screenFlowRecord.Name = serializedOutput;
        screenFlowRecord.FlowVersionId__c = flowActiveVersionId;

        // Insert the custom object record into the destination org.
        insert screenFlowRecord;

        // Return the new screen flow record ID for the new learning item 
        // in the destination org.      
        return screenFlowRecord.Id;
    }
}
```

## Related Topics

- sfdc_enablement (atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_enablement.htm)
- LearningItemSerializeDeserializer Methods (atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningItemSerializeDeserializer.htm)
- deserialize(serializedOutput) (atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningItemSerializeDeserializer.htm)
- serialize(learningItemId) (atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningItemSerializeDeserializer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
