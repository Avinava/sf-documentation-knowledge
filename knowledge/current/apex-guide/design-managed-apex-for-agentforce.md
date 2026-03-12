---
title: "Design Managed Apex for Agentforce"
domain: apex-guide
topic: design-managed-apex-for-agentforce
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.646Z
estimatedTokens: 2623
keywords: [Design, Managed, Apex, Agentforce, independent, software, vendor, ISV, developer, build, custom, agent, actions, distribute, packages]
---

# Design Managed Apex for Agentforce

> As an independent software vendor (ISV) developer, you can build custom agent actions
  using Apex and distribute them in managed packages. To ensure that subscriber admins can
  declaratively configure your Apex agent actions and that Agentforce can invoke the actions at run
  time, follow these requirements and recommendations.

# Design Managed Apex for Agentforce

As an independent software vendor (ISV) developer, you can build custom agent actions using Apex and distribute them in managed packages. To ensure that subscriber admins can declaratively configure your Apex agent actions and that Agentforce can invoke the actions at run time, follow these requirements and recommendations.

## Use Global Apex

For Agentforce to use Apex [agent actions](https://help.salesforce.com/s/articleView?id=ai.copilot_actions.htm&type=5&language=en_US "HTML (New Window)") in managed packages, these Apex members must have the [global access modifier](atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm).

-   The Apex class containing the [@InvocableMethod](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm "Use the InvocableMethod annotation to identify methods that can be run as invocable actions.") that defines the agent action.
-   The input wrapper class that defines the parameters an admin can configure for the action, and the output wrapper class that defines the structured result returned to Agentforce.
-   All [@InvocableVariable](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableVariable.htm "To identify variables used by invocable methods in custom classes, use the InvocableVariable annotation.") members within these input and output wrapper classes.
-   Any custom Apex data types used as properties in your wrapper classes.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

If any of these Apex members aren’t global, then the Apex agent action can’t be invoked by Agentforce at run time.

These Apex members must be global because Agentforce agents currently can’t be packaged directly, and therefore can’t have a namespace. By definition, this means that Apex agent actions don’t have access to non-global Apex, such as public Apex, that’s part of a managed package and does have a namespace.

Importantly, managed global Apex is subject to stricter manageability rules than managed non-global Apex. See the [Global Apex Manageability Rules](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm#manpkgs_global_manageability_rules) section of [Best Practices for Using Global Apex in Managed Packages](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm "As an independent software vendor (ISV) developer, understand when and how to use global Apex in managed packages. Learn design patterns that maximize flexibility and comply with the strict manageability rules applied to global Apex after your managed package’s release. By following these best practices, you can improve the stability and maintainability of your API.").

Although global Apex is required for any direct entry point to an agent action, delegate any business logic or heavy lifting to public classes and methods. See the [Delegate from Thin Global Entry Points](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm#manpkgs_global_entry_points_section) section of [Best Practices for Using Global Apex in Managed Packages](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm "As an independent software vendor (ISV) developer, understand when and how to use global Apex in managed packages. Learn design patterns that maximize flexibility and comply with the strict manageability rules applied to global Apex after your managed package’s release. By following these best practices, you can improve the stability and maintainability of your API.").

## Use @InvocableMethod to Define the Action

To define an Apex agent action, use the [@InvocableMethod](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm "Use the InvocableMethod annotation to identify methods that can be run as invocable actions.") annotation and follow these requirements.

-   Your Apex method must be global static.
-   Your Apex method must be annotated with @InvocableMethod (label='Your Action Name' description='Clear, concise description of what the action does' category='Your ISV App Name').
    -   Use clear and descriptive label and description modifiers. The Agentforce reasoning engine uses them to determine when to invoke the action. Subscriber admins configuring Agentforce also use them to help decide which [agent topics](https://help.salesforce.com/s/articleView?id=ai.copilot_topics.htm&type=5&language=en_US "HTML (New Window)") to add the action to.
    -   Use the category modifier to help organize actions. We recommend using your ISV app name.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Only one method in a class can have the @InvocableMethod annotation. Create a separate global Apex class for each agent action in your managed package.

## Structure Inputs and Outputs with Global Wrapper Classes

In addition to the requirements of using global Apex and the @InvocableMethod annotation, we also recommend using custom global classes to structure input and output parameters. By using parameter objects, you avoid changing the global method signature when you modify the parameters of the agent action. To learn how to use this pattern, see the [Use Parameter Objects for Global Method Inputs and Return Types](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm#manpkgs_global_parameter_obj) section of [Best Practices for Using Global Apex in Managed Packages](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm "As an independent software vendor (ISV) developer, understand when and how to use global Apex in managed packages. Learn design patterns that maximize flexibility and comply with the strict manageability rules applied to global Apex after your managed package’s release. By following these best practices, you can improve the stability and maintainability of your API."). Then review these targeted guidelines to implement Apex agent actions using this pattern.

Because you can’t change managed global method signatures, make signatures flexible.

-   Define global inner Apex classes to serve as containers for input and output parameters. These classes can be in the same top-level class as the invocable method.
-   Annotate both input and output classes with @JsonAccess(serializable='always' deserializable='always'). The [@JsonAccess annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_JsonAccess.htm "The @JsonAccess annotation defined at Apex class level controls whether instances of the class can be serialized or deserialized. If the annotation restricts the JSON or XML serialization and deserialization, a runtime JSONException exception is thrown.") governs the serialization and deserialization of managed Apex. Because Agentforce serializes and deserializes complex Apex types from an unmanaged context at run time, both @JsonAccess parameters must be set to 'always'.
-   Within these input and output classes, declare global member variables annotated with @InvocableVariable(label='User-Friendly Name' description='Description of this parameter' required=true/false).
    -   Use clear and descriptive label and description modifiers, so that subscribers can configure the inputs declaratively, and Agentforce can understand the output.
    -   Set the required modifier as true or false to specify whether the input is required for the agent action to run. This modifier also helps subscriber admins configure your actions.
-   Define the invocable method to accept a List of its input class type, for example List<MyInputAction> requests.
-   Define the invocable method to return a List of its output class type, for example List<MyOutputAction> results.

## Example Code for an Apex Agent Action

In this example, the getCoordinates method is defined as an @InvocableMethod so it can be invoked by Agentforce. The method accepts a list of GeocodingRequest objects and returns a corresponding list of GeocodingResponse objects. The input and output wrapper classes are both annotated with @JsonAccess(serializable='always' deserializable='always') so Agentforce can serialize and deserialize the objects from an unmanaged context. The properties of both wrapper classes are defined as @InvocableVariable so an admin can configure them declaratively. The label and description modifiers in both @InvocableMethod and @InvocableVariable are important because they help the Agentforce reasoning engine to understand how to use the action.

```

```

#### See Also

-   [Best Practices for Using Global Apex in Managed Packages](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm "As an independent software vendor (ISV) developer, understand when and how to use global Apex in managed packages. Learn design patterns that maximize flexibility and comply with the strict manageability rules applied to global Apex after your managed package’s release. By following these best practices, you can improve the stability and maintainability of your API.")

-   [Access Modifiers](atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm)

-   [InvocableMethod Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm "Use the InvocableMethod annotation to identify methods that can be run as invocable actions.")

-   [InvocableVariable Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableVariable.htm "To identify variables used by invocable methods in custom classes, use the InvocableVariable annotation.")

-   [Use the with sharing, without sharing, and inherited sharing Keywords](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm "Use the with sharing or without sharing keywords on a class to specify whether sharing rules must be enforced. Use the inherited sharing keyword on a class to run the class in the sharing mode of the class that called it.")

-   [Enforce User Mode for Database Operations](atlas.en-us.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm "You can run database operations in user mode rather than in the default system mode by using SOQL or SOSL queries with special keywords or by using DML method overloads.")

-   [*Salesforce Developers Blog*: Build Custom Agent Actions Using Apex](https://developer.salesforce.com/blogs/2024/03/build-custom-copilot-actions-using-apex)

## Code Examples

```apex
// --- ISV's Managed Package Code ---
// --- 1. The Global Entrypoint Class ---
// This class contains the @InvocableMethod and the input/output wrapper classes.
global with sharing class GeocodingAction {
    // This method is the thin, global entry point that delegates any business logic to a separate public class.
        @InvocableMethod(
            label='Get Coordinates for Address'
            description='Retrieves the latitude and longitude for a given street address.'
            category='My ISV App Name'
        )
        global static List<GeocodingResponse> getCoordinates(List<GeocodingRequest> requests) {
            // Delegate the entire list to the internal logic class to ensure
            // any callouts or DML can be performed in bulk.
                GeocodingLogic logic = new GeocodingLogic();
                return logic.performGeocoding(requests);
        }
    
        // --- Input Wrapper Inner Class ---
        // Defines the parameters an admin can configure for this action.
        @JsonAccess(serializable='always' deserializable='always')
        global with sharing class GeocodingRequest {
            @InvocableVariable(label='Street' required=true)
            global String street;
    
            @InvocableVariable(label='City' required=true)
            global String city;
    
            @InvocableVariable(label='State/Province' required=true)
            global String state;
    
            @InvocableVariable(label='Postal Code' required=true)
            global String postalCode;
        }
    
        // --- Output Wrapper Inner Class ---
        // Defines the structured result returned to Agentforce.
        @JsonAccess(serializable='always' deserializable='always')
        global with sharing class GeocodingResponse {
            @InvocableVariable(label='Was Successful')
            global Boolean isSuccess;
    
            @InvocableVariable(label='Latitude')
            global Decimal latitude;
    
            @InvocableVariable(label='Longitude')
            global Decimal longitude;
    
            @InvocableVariable(label='Error Message')
            global String errorMessage;
        }
    
    // Static factory methods for creating consistent results.
        public static GeocodingResponse success(Decimal lat, Decimal lon) {
            GeocodingResponse result = new GeocodingResponse();
            result.isSuccess = true;
            result.latitude = lat;
            result.longitude = lon;
            return result;
        }

        public static GeocodingResponse error(String message) {
            GeocodingResponse result = new GeocodingResponse();
            result.isSuccess = false;
            result.errorMessage = message;
            return result;
        }
}


// --- 2. The Internal Logic Class (Public, not Global) ---
// This is where the actual business logic lives.
// It's separate from the global entry point class for better organization and testing.
public with sharing class GeocodingLogic {
    // Since we defined the inputs and outputs as inner classes, we use dot notation to reference them.
    public List<GeocodingAction.GeocodingResponse> performGeocoding(List<GeocodingAction.GeocodingRequest> requests) {
        List<GeocodingAction.GeocodingResponse> results = new List<GeocodingAction.GeocodingResponse>();

        // This method would contain your complex, bulkified business logic.
        // For example, you can aggregate all requests into a single callout
        // to an external geocoding service.

        // For this simplified example, we loop and return mock results.
        for (GeocodingAction.GeocodingRequest req : requests) {
            // In a real implementation, you would perform a callout and handle errors.
            if (req.postalCode == '94105') {
                results.add(GeocodingAction.success(37.7749, -122.4194));
            } else {
                results.add(GeocodingAction.error('Address could not be found.'));
            }
        }
        return results;
    }
}
```

## Related Topics

- global access modifier (atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm)
- @InvocableMethod (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm)
- @InvocableVariable (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableVariable.htm)
- Global Apex Manageability Rules (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm)
- Best Practices for Using Global Apex in Managed Packages (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm)
- Delegate from Thin Global Entry Points (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm)
- Best Practices for Using Global
                    Apex in Managed Packages (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm)
- Use Parameter Objects for Global Method Inputs and
                    Return Types (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm)
- @JsonAccess annotation (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_JsonAccess.htm)
- Access Modifiers (atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm)
