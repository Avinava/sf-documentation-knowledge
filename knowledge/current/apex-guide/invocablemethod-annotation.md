---
title: "InvocableMethod Annotation"
domain: apex-guide
topic: invocablemethod-annotation
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:32.465Z
estimatedTokens: 2226
keywords: [InvocableMethod, Annotation, identify, run, invocable, actions, Modifiers, Considerations]
---

# InvocableMethod Annotation

> Use the InvocableMethod annotation to identify methods that can be run as invocable
      actions.

# InvocableMethod Annotation

Use the InvocableMethod annotation to identify methods that can be run as invocable actions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If a flow invokes Apex, the running user must have the corresponding Apex class security set in their user profile or permission set.

Invocable methods are called natively from REST, Apex, flows, Agentforce agents or AI bots that interact with the external API source. Invocable methods have dynamic input and output values and support describe calls.

This code sample shows an invocable method with primitive data types.

```

```

This code sample shows an invocable method with a specific sObject data type.

```

```

This code sample shows an invocable method with the generic sObject data type.

```

```

This code sample shows an invocable method with a custom icon from an SVG file.

```

```

This code sample shows an invocable method with a custom icon from the Salesforce Lightning Design System (SLDS).

```

```

To handle exceptions within an invocable method, wrap the results in an Apex object that reports failures. The execution of the invocable method must run and return the same number of results as inputs received even if errors occur.

For example, this code sample adjusts positive values by taking their square root and multiplying by pi, setting a success flag to true. For negative values, it sets the success flag to false.

```

```

This test method checks whether the value adjustments were successful and verifies the calculated values for positive inputs.

```

```

## Supported Modifiers

All modifiers are optional.

label

The label for the method, which appears as the action name in Flow Builder. The default is the method name, though we recommend that you provide a label.

description

The description for the method, which appears as the action description in Flow Builder. The default is Null.

callout

The callout modifier identifies whether the method calls to an external system. If the method calls to an external system, add callout\=true. The default value is false.

capabilityType

The capability that integrates with the method. The valid format is Name://Name, for example: PromptTemplateType://SalesEmail

category

The category for the method, which appears as the action category in Flow Builder. If no category is provided (by default), actions appear under Uncategorized.

configurationEditor

The custom property editor that is registered with the method and appears in Flow Builder when an admin configures the action. If you don’t specify this modifier, Flow Builder uses the standard property editor.

iconName

The name of the icon to use as a custom icon for the action in the Flow Builder canvas. You can specify an SVG file that you uploaded as a static resource or a Salesforce Lightning Design System standard icon.

## InvocableMethod Considerations

Implementation Notes

-   The invocable method must be static and public or global, and its class must be an outer class.
-   Only one method in a class can have the InvocableMethod annotation.
-   The only annotation that can be used with the InvocableMethod annotation is Deprecated.

Inputs and Outputs

There can be at most one input parameter and its data type must be one of the following:

-   A list of a primitive data type or a list of lists of a primitive data type – the generic Object type isn’t supported.
-   A list of an sObject type or a list of lists of an sObject type.
-   A list of the generic sObject type (List<sObject>) or a list of lists of the generic sObject type (List<List<sObject>>).
-   A list of a user-defined type, containing variables of the supported types or user-defined Apex types, with the InvocableVariable annotation. To implement your data type, create a custom global or public Apex class. The class must contain at least one member variable with the invocable variable annotation.

If the return type isn’t Null, the data type returned by the method must be one of the following:

-   A list of a primitive data type or a list of lists of a primitive data type – the generic Object type isn’t supported.
-   A list of an sObject type or a list of lists of an sObject type.
-   A list of the generic sObject type (List<sObject>) or a list of lists of the generic sObject type (List<List<sObject>>).
-   A list of a user-defined type, containing variables of the supported types or user-defined Apex types, with the InvocableVariable annotation. To implement your data type, create a custom global or public Apex class. The class must contain at least one member variable with the invocable variable annotation.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

    #### Note

    For a correct bulkification implementation, the Inputs and Outputs must match on both the size and the order. For example, the i-th Output entry must correspond to the i-th Input entry. Matching entries are required for data correctness when your action is in bulkified execution, such as when an apex action is used in a record trigger flow.


Managed Packages

-   You can use invocable methods in packages, but after you add an invocable method you can’t remove it from later versions of the package.
-   Public invocable methods can be referred to by flows and processes within the managed package.
-   Global invocable methods can be referred to anywhere in the subscriber org. Only global invocable methods appear in Flow Builder and Process Builder in the subscriber org. See [Best Practices for Using Global Apex in Managed Packages](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm "As an independent software vendor (ISV) developer, understand when and how to use global Apex in managed packages. Learn design patterns that maximize flexibility and comply with the strict manageability rules applied to global Apex after your managed package’s release. By following these best practices, you can improve the stability and maintainability of your API.").

For more information about invocable actions, see [Apex Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_action.meta/api_action/actions_intro.htm "HTML (New Window)") in the Actions Developer Guide.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_future.htm "Future Annotation")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableVariable.htm "InvocableVariable Annotation")

#### See Also

-   [InvocableVariable Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableVariable.htm "To identify variables used by invocable methods in custom classes, use the InvocableVariable annotation.")

-   [*Actions Developer Guide*: Apex Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_action.meta/api_action/actions_obj_apex.htm "Actions Developer Guide: Apex Actions  - HTML (New Window)")

-   [*REST API Developer Guide*: Invocable Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_actions_invocable.htm "REST API Developer Guide: Invocable Actions  - HTML (New Window)")

-   [*Salesforce Help*: Add a Custom Icon to an Apex-Defined Action](https://help.salesforce.com/s/articleView?id=platform.flow_build_extend_apex_type_add_a_custom_icon.htm&type=5&language=en_US "Salesforce Help: Add a Custom Icon to an Apex-Defined
    Action - HTML (New Window)")

-   [*Apex Reference Guide*: Action Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Invocable_Action.htm "Apex Reference Guide: Action Class - HTML (New Window)")

-   [*Lightning Web Components Developer Guide*: Develop Custom Property Editors for Flow Builder](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_flow_custom_property_editor "Lightning Web Components Developer Guide: Develop Custom
    Property Editors for Flow Builder - HTML (New Window)")

-   [*Prompt Builder*: Ground with Apex](https://help.salesforce.com/s/articleView?id=ai.prompt_builder_ground_apex.htm&type=5&language=en_US "Prompt Builder: Ground with Apex - HTML (New Window)")

-   [Making Callouts to External Systems from Invocable Actions](atlas.en-us.apexcode.meta/apexcode/apex_forcecom_flow_invocable_action_callout.htm "When you define a method that runs as an invocable action in a screen flow and makes a callout to an external system, use the callout modifier.")

-   [Customize Invocable Action Input Order in Flow Builder](atlas.en-us.apexcode.meta/apexcode/apex_forcecom_flow_invocable_action_extension_customize_input_order_example.htm "Control the display order and grouping of input parameters for your Apex invocable actions in Flow Builder using the InvocableActionExtension metadata file.")

## Code Examples

```apex
public with sharing class AccountQueryAction {
  @InvocableMethod(
    label='Get Account Names'
    description='Returns the list of account names corresponding to the specified account IDs.'
    category='Account'
  )
  public static List<String> getAccountNames(List<ID> ids) {
    List<Account> accounts = [
      SELECT Name
      FROM Account
      WHERE Id IN :ids
      WITH USER_MODE
    ];
    Map<ID, String> idToName = new Map<ID, String>();
    for (Account account : accounts) {
      idToName.put(account.Id, account.Name);
    }
    // put each name in the output at the same position as the id in the input
    List<String> accountNames = new List<String>();
    for (String id : ids) {
      accountNames.add(idToName.get(id));
    }
    return accountNames;
  }
}
```

```apex
public with sharing class AccountInsertAction {
  @InvocableMethod(
    label='Insert Accounts'
    description='Inserts the accounts specified and returns the IDs of the new accounts or null if account is failed to create.'
    category='Account'
  )
  public static List<ID> insertAccounts(List<Account> accounts) {
    Database.SaveResult[] results = Database.insert(
      accounts,
      false,
      AccessLevel.USER_MODE
    );
    List<ID> accountIds = new List<ID>();

    for (Database.SaveResult result : results) {
      if (result.isSuccess()) {
        accountIds.add(result.getId());
      } else {
        accountIds.add(null);
      }
    }

    return accountIds;
  }
}
```

```apex
public with sharing class GetFirstFromCollection {
  @InvocableMethod
  public static List<Results> execute(List<Requests> requestList) {
    List<Results> results = new List<Results>();
    for (Requests request : requestList) {
      List<SObject> inputCollection = request.inputCollection;
      SObject outputMember = inputCollection[0];

      //Create a Results object to hold the return values
      Results result = new Results();

      //Add the return values to the Results object
      result.outputMember = outputMember;

      //Add Result to the results List at the same position as the request is in the requests List
      results.add(result);
    }
    return results;
  }

  public with sharing class Requests {
    @InvocableVariable(
      label='Records for Input'
      description='yourDescription'
      required=true
    )
    public List<SObject> inputCollection;
  }

  public with sharing class Results {
    @InvocableVariable(
      label='Records for Output'
      description='yourDescription'
      required=true
    )
    public SObject outputMember;
  }
}
```

```apex
global with sharing class CustomSvgIcon { 
  @InvocableMethod(label='myIcon' iconName='resource:myPackageNamespace__google:top')
  global static List<Integer> myMethod(List<Integer> request) {
    List<Integer> results = new List<Integer>();
    for(Integer reqInt : request) { 
       results.add(reqInt);
    }
    return results;
  }
}
```

```apex
public with sharing class CustomSldsIcon { 
  
  @InvocableMethod(iconName='slds:standard:choice') 
  public static void run() {} 
  
  }
```

## Related Topics

- Best Practices for Using Global Apex in Managed Packages (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_future.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableVariable.htm)
- InvocableVariable Annotation (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableVariable.htm)
- Making Callouts to External Systems from Invocable Actions (atlas.en-us.apexcode.meta/apexcode/apex_forcecom_flow_invocable_action_callout.htm)
- Customize Invocable Action Input Order in Flow Builder (atlas.en-us.apexcode.meta/apexcode/apex_forcecom_flow_invocable_action_extension_customize_input_order_example.htm)
