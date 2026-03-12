---
title: "InvocableVariable Annotation"
domain: apex-guide
topic: invocablevariable-annotation
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:32.438Z
estimatedTokens: 1276
keywords: [InvocableVariable, Annotation, identify, variables, used, invocable, custom, classes, annotation., Supported, Modifiers, Tip, Note, Example, Considerations]
---

# InvocableVariable Annotation

> To identify variables used by invocable
      methods in custom classes, use the InvocableVariable
      annotation.

# InvocableVariable Annotation

To identify variables used by invocable methods in custom classes, use the InvocableVariable annotation.

The InvocableVariable annotation identifies a class variable used as an input or output parameter for an InvocableMethod method’s invocable action. If you create your own custom class to use as the input or output to an invocable method, you can annotate individual class member variables to make them available to the method.

This code sample shows an invocable method with invocable variables.

```

```

This code sample shows an invocable method with invocable variables that have the generic sObject data type.

```

```

## Supported Modifiers

All modifiers are optional.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

Default values, labels, and placeholder text appear in Flow Builder for the Action element that corresponds to an invocable method. These modifiers help admins understand how to use variables in the flow.

defaultValue

Provide a vaule to the action at runtime, if no value is provided then these default values are provided to the action at runtime. Valid invocable variable data types are:

-   Boolean - fields must have a value of 'true' or 'false' and case-insensitive.

    ```

    ```

-   Decimal - fields must have a value of 'validDecimalValue' where the floating point value can’t have a suffix.

    ```

    ```

-   Double - fields must have a value of 'validDoubleValue' where the d suffix is required and case-insensitive.

    ```

    ```

-   Integer - fields must have a value of 'validIntegerValue' where the inter value can’t have a suffix.

    ```

    ```

-   Long - fields must have a value of 'validLongValue' where the l suffix is required and case-insensitive.

    ```

    ```

-   String - fields can use any valid string value including the empty string.

    ```

    ```


description

The description for the variable. The default is Null.

label

The label for the variable. The default is the variable name.

placeholderText

Provides examples or additional guidance about the invocable variable, such as examples of values that can set the invocable variable. Valid invocable variable data types are:

-   Double - fields must have a value of 'validDoubleValue' where the d suffix is required and case-insensitive.
-   Integer - fields must have a value of 'validIntegerValue' where the inter value can’t have a suffix.
-   String - fields can use any valid string value including the empty string.

required

Specifies whether the variable is required. If not specified, the default is false. The value is ignored for output variables.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The defaultValue modifier throws an error when used with required.

## Example

The invocable variable annotation supports the modifiers shown in this example.

```

```

The invocable variable annotation supports defaultValue in this example.

```

```

## InvocableVariable Considerations

-   Other annotations can’t be used with the InvocableVariable annotation.
-   Only global and public variables can be invocable variables.
-   The invocable variable can’t be any of these:
    -   A non-member variable such as a static or local variable.
    -   A property.
    -   A final variable.
    -   Protected or private.
-   The data type of the invocable variable must be one of these:
    -   A primitive other than Object
    -   An sObject, either the generic sObject or a specific sObject
    -   A list or a list of lists of primitives, sObjects, objects created from Apex classes, or collections
-   The invocable variable name in Apex must match the name in the flow. The name is case-sensitive.
-   For managed packages:
    -   Public invocable variables can be set in flows and processes within the same managed package.
    -   Global invocable variables can be set anywhere in the subscriber org. Only global invocable variables appear in Flow Builder and Process Builder in the subscriber org.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm "InvocableMethod Annotation")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_isTest.htm "IsTest Annotation")

#### See Also

-   [*Apex Developer Guide*: InvocableMethod Annotation](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm "Apex Developer Guide: InvocableMethod Annotation
    - HTML (New Window)")

-   [*Apex Reference Guide*: Action Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Invocable_Action.htm)

-   [Customize Invocable Action Input Order in Flow Builder](atlas.en-us.apexcode.meta/apexcode/apex_forcecom_flow_invocable_action_extension_customize_input_order_example.htm "Control the display order and grouping of input parameters for your Apex invocable actions in Flow Builder using the InvocableActionExtension metadata file.")

## Code Examples

```apex
global class ConvertLeadAction {
  @InvocableMethod(label='Convert Leads')
  global static List<ConvertLeadActionResult> convertLeads(List<ConvertLeadActionRequest> requests) {
    List<ConvertLeadActionResult> results = new List<ConvertLeadActionResult>();
    for (ConvertLeadActionRequest request : requests) {
      results.add(convertLead(request));
    }
    return results;
  }

  public static ConvertLeadActionResult convertLead(ConvertLeadActionRequest request) {
    Database.LeadConvert lc = new Database.LeadConvert();
    lc.setLeadId(request.leadId);
    lc.setConvertedStatus(request.convertedStatus);

    if (request.accountId != null) {
        lc.setAccountId(request.accountId);
    }

    if (request.contactId != null) {
      lc.setContactId(request.contactId);
    }

    if (request.overWriteLeadSource != null && request.overWriteLeadSource) {
      lc.setOverwriteLeadSource(request.overWriteLeadSource);
    }

    if (request.createOpportunity != null && !request.createOpportunity) {
      lc.setDoNotCreateOpportunity(!request.createOpportunity);
    }

    if (request.opportunityName != null) {
      lc.setOpportunityName(request.opportunityName);
    }

    if (request.ownerId != null) {
      lc.setOwnerId(request.ownerId);
    }

    if (request.sendEmailToOwner != null && request.sendEmailToOwner) {
      lc.setSendNotificationEmail(request.sendEmailToOwner);
    }

    Database.LeadConvertResult lcr = Database.convertLead(lc, true);
    if (lcr.isSuccess()) {
      ConvertLeadActionResult result = new ConvertLeadActionResult();
      result.accountId = lcr.getAccountId();
      result.contactId = lcr.getContactId();
      result.opportunityId = lcr.getOpportunityId();
      return result;
    } else {
      throw new ConvertLeadActionException(lcr.getErrors()[0].getMessage());
    }
  }

  global class ConvertLeadActionRequest {
    @InvocableVariable(required=true)
    global ID leadId;

    @InvocableVariable(required=true)
    global String convertedStatus;

    @InvocableVariable
    global ID accountId;

    @InvocableVariable
    global ID contactId;

    @InvocableVariable
    global Boolean overWriteLeadSource;

    @InvocableVariable
    global Boolean createOpportunity;

    @InvocableVariable
    global String opportunityName;

    @InvocableVariable
    global ID ownerId;

    @InvocableVariable
    global Boolean sendEmailToOwner;
  }

  global class ConvertLeadActionResult {
    @InvocableVariable
    global ID accountId;

    @InvocableVariable
    global ID contactId;

    @InvocableVariable
    global ID opportunityId;
  }

  class ConvertLeadActionException extends Exception {}
}
```

```apex
public with sharing class GetFirstFromCollection {
  @InvocableMethod
  public static List <Results> execute (List<Requests> requestList) {
    List<SObject> inputCollection = requestList[0].inputCollection;
    SObject outputMember = inputCollection[0];

    //Create a Results object to hold the return values
    Results response = new Results();

    //Add the return values to the Results object
    response.outputMember = outputMember;

    //Wrap the Results object in a List container 
    //(an extra step added to allow this interface to also support bulkification)
    List<Results> responseWrapper= new List<Results>();
    responseWrapper.add(response);
    return responseWrapper;    
  }

public class Requests {
  @InvocableVariable(label='Records for Input' description='yourDescription' required=true)
  public List<SObject> inputCollection;
  }

public class Results {
  @InvocableVariable(label='Records for Output' description='yourDescription' required=true)
  public SObject outputMember;
  }
}
```

```apex
@InvocableVariable(defaultValue='true')
public Boolean myBoolean;
```

```apex
@InvocableVariable(defaultValue='123.4')
public Decimal myDecimal;
```

```apex
@InvocableVariable(defaultValue='867.3D')
public Double myDouble;
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_isTest.htm)
- Customize Invocable Action Input Order in Flow Builder (atlas.en-us.apexcode.meta/apexcode/apex_forcecom_flow_invocable_action_extension_customize_input_order_example.htm)
