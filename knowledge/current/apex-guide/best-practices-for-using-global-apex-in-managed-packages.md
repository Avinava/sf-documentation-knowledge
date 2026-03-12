---
title: "Best Practices for Using Global Apex in Managed Packages"
domain: apex-guide
topic: best-practices-for-using-global-apex-in-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:33.691Z
estimatedTokens: 4376
keywords: [Best, Practices, Apex, Managed, Packages, independent, software, vendor, ISV, developer, understand, how, design, patterns, maximize]
---

# Best Practices for Using Global Apex in Managed Packages

> As an independent software vendor (ISV) developer, understand when and how to use
      global Apex in managed packages. Learn design patterns
   that maximize flexibility and comply with the strict manageability rules applied to global Apex
    after your managed package’s release. By following these best practices, you can improve the
    stability and maintainability of your API.

# Best Practices for Using Global Apex in Managed Packages

As an independent software vendor (ISV) developer, understand when and how to use global Apex in managed packages. Learn design patterns that maximize flexibility and comply with the strict manageability rules applied to global Apex after your managed package’s release. By following these best practices, you can improve the stability and maintainability of your API.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

We recommend using the global access modifier only when necessary. The API shape of global Apex, such as the name, parameters, and return type of global methods, is subject to strict manageability rules. You generally can’t change the API shape of global Apex after it’s released in a managed package.

The [global modifier](atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm) provides the widest level of access. It makes your Apex classes, methods, interfaces, and variables accessible and callable from any Apex code outside of your package namespace, including code written by subscribers or other installed packages.

A key benefit of Apex in managed packages is Intellectual Property (IP) protection. Although global Apex signatures, such as global class and method names, parameters, and return types, are visible so subscribers can use your API, the underlying implementation logic within your methods is encapsulated and hidden. This allows you to provide powerful functionality without exposing your proprietary source code.

## When to Use Global Apex in Managed Packages

Use global Apex when:

-   Exposing a global API. You intend for subscribers to use your package’s core services by directly calling your Apex methods or instantiating your classes from their own Apex code, such as from their triggers, batch classes, or other custom logic.
-   Providing extensibility points. You’re designing global interfaces or global abstract base classes that subscribers must implement or extend to customize or enhance specific behaviors within your app.
-   Creating web service endpoints. You’re exposing Apex classes to handle incoming REST API requests or SOAP web service calls from external systems. These endpoint classes and their methods must be declared global to receive calls from external systems.

Avoid global Apex for:

-   Internal package functionality, meaning any Apex code, such as business logic, helper classes, or utility methods, that’s designed exclusively for use within your managed packages. For these internal components, [access modifiers](atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm) such as public, protected, or private avoid the manageability constraints of global. You can even combine the public access modifier with the [@NamespaceAccessible annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm) to allow access throughout your package namespace.
-   Controller methods, or methods within your package that are called by your Lightning web components (LWC) and aren’t used by your subscribers directly. Make these methods public and annotate them with [@AuraEnabled](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_AuraEnabled.htm).
-   Method signatures with external global types. Avoid using global Apex types from another managed package as parameters or return types in your own global methods. This practice locks your package into a rigid dependency. If the other package later changes or deprecates the types that your global signature relies on, it can become difficult or impossible for your package to adopt newer versions of the dependency package.

## Global Apex Manageability Rules

The decision to use global is significant because it subjects your code to strict manageability rules after your package is released. Manageability rules protect subscribers against package upgrades that break existing functionality. These rules make your initial global Apex design critical, as changes in later versions are heavily restricted.

After your managed package is released, these restrictions apply to the global Apex in the package.

-   You can’t delete a global class, interface, method, variable, or enum.
-   You can’t change the name of a global class, interface, method, variable, or enum.
-   You can’t change the access modifier of a global class, interface, method, variable, or enum from global to another access modifier.
-   You can’t change a global method’s signature, including the order, number, and types of parameters, as well as the method’s return type. You can add new methods that overload existing global methods.
-   You can’t change the value of a global static final variable.
-   You can’t change the data type of a global variable to an incompatible one.
-   You can’t change most annotations or modifiers on global members. For example, you can’t add or remove the @AuraEnabled annotation or any [Apex REST annotation](atlas.en-us.apexcode.meta/apexcode/apex_rest_annotations_list.htm) from a global method. Similarly, you can’t add or remove the static or final keyword from a global method.
-   You can’t remove a zero-argument constructor from a global class. This restriction applies both to explicitly deleting a constructor you wrote, and to implicitly removing the default constructor by adding a new constructor that requires arguments.
-   You can’t remove a global interface from a global class.
-   You can’t extend a global interface with a new interface.
-   You can’t change a global class to an interface, or vice versa.
-   You can’t add abstract methods to global interfaces or abstract classes.
-   You can’t add final methods to global virtual or global abstract classes.
-   You can’t remove or reorder global enum values, although you can add new enum values.
-   You can't add, remove or change that a global class extends another global class.

Given the strict manageability rules, a thoughtful design of your package’s global API is crucial. These best practices for defining and managing global Apex promote flexibility, reduce maintenance, and help create a stable, evolvable API.

## Only Use Global When Necessary

When designing global Apex, expose the fewest global members possible. Every global part of your package is a contract with your subscribers. Fewer global members mean fewer restrictions and more freedom for you to update your package later.

Before making something global, consider these questions.

-   Is it truly necessary? Can you use public instead? For example, use public for access only by other Apex within the same package, or public and @NamespaceAccessible for access only by other Apex in packages that have the same namespace.
-   Are there other designs? Can you achieve the same result without making methods or classes global?

## Delegate from Thin Global Entry Points

Make your global classes and methods act only as thin entry points. Place any business logic or complex processes in public classes and methods within your package. The global method then calls these public methods.

Delegating logic to public classes and methods promotes:

-   Flexibility. You can freely add new features or completely change the internal public implementation of your service in future versions without altering the global method signature.
-   Maintainability. Fixing bugs and refactoring your existing business logic is now safer and lower-risk because the work is decoupled from the stable global API contract that your subscribers depend on.
-   Testability. Your public business logic classes can be unit tested thoroughly and independently of their global entry point.

## Example

In this example, MyPackageApi.greetUsers is the stable global contract. The actual work happens in createGreetings, which is public and can be easily modified in future package versions as long as the greetUsers signature in MyPackageApi remains unchanged. For example, the ISV developer can later optimize createGreetings or add new helper methods without violating global Apex manageability rules.

```

```

## Use Parameter Objects for Global Method Inputs and Return Types

Using primitive data types, such as String or ID, directly in global method signatures creates a rigid contract that you can’t change. To avoid this restriction, we recommend using custom global Apex classes as parameter objects for both inputs and outputs. This pattern provides a stable API contract that’s evolvable, safer, and readable for subscribers.

Benefits of using parameter objects include:

-   Evolvability. You can add new parameters to your API by adding new properties to your input or output classes. The global method signature itself never changes, which avoids breaking changes.
-   Safety and discoverability. Subscribers get compile-time safety and code completion while constructing the request object, which reduces the risk of run-time errors from typos or incorrect data types.
-   Readability. Grouping related parameters into a dedicated class makes your method signature clean and its purpose clear. For example, getCoordinates(Address location) is easier for your subscribers to understand and use than getCoordinates(String street, String city, String state, String zip, ...).

Despite the benefits of using parameter objects, consider these costs.

-   Increased upfront complexity. This pattern requires more initial code, such as multiple classes, and can be excessive for simple actions that aren’t expected to change.
-   Expanded global surface area. Although the primary method signature remains stable, each global property added to the input object becomes a new, permanent part of your package’s API.

## Example

In this example, the GeocodingService.getCoordinates method is the global contract. It uses the custom global AddressRequest class as its input, and the custom global GeolocationResponse class as its output.

```

```

## Alternative for Unpredictable Inputs: The Map Pattern

For scenarios where the inputs aren’t known at compile time, you can use a Map for your method’s input parameters. An example signature with this pattern is global static GeolocationResponse processUnstructuredRequest(Map<String, Object\> inputs).

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

Use this pattern with caution. This pattern isn’t recommended for return types.

Accepting a Map allows the subscriber to construct the Map and populate the keys and values themselves. Although this pattern provides maximum flexibility, returning a Map forces the subscriber to guess key names and data types, which leads to fragile code.

Additionally, using a Map for inputs sacrifices compile-time safety and discoverability. Subscribers must rely entirely on documentation to know the required keys and their data types. Simple typos in map keys can result in hard-to-debug run-time errors instead of compile-time errors.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The standard [Callable interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_System_Callable.htm "HTML (New Window)") uses the Map pattern through its call(String action, Map<String, Object\> args) method. However, this method returns a generic Object, which forces subscribers to cast the response and risk run-time errors. It creates a single, generic entry point that can perform many different functions based on the action string. For a single-purpose action that accepts unstructured inputs, a custom method such as processUnstructuredRequest is clearer and safer.

Instead of using the Map pattern, prefer strongly-typed parameter objects as shown in the [Use Parameter Objects for Global Method Inputs and Return Types](#manpkgs_global_parameter_obj) section. Reserve the Map pattern for advanced use cases where the inputs are truly unpredictable and its risks are acceptable, but always return a strongly-typed object.

## Use Global Interfaces with Factory Methods

The facade pattern is effective if you want to define a capability and then provide one or more ways to use it. In this pattern, a global interface defines the capability, and the public classes that implement the interface define how to use the capability. A global factory method gives the subscriber the specific implementation of the interface.

Benefits of using the facade pattern include:

-   You can change the public class that does the work as long as it still follows the global interface rules.
-   You can offer new implementations of the interface later.

## Example

In this example, Notifier is the global contract, and the public class EmailNotifierImpl does the work. Because the factory class is global but the classes that implement the Notifier interface are public, the ISV developer can later change or add to these classes. For example, if the ISV developer later wants to offer an SMS notifier, they can add getSmsNotifier() to the factory class and implement a new public SmsNotifierImpl class.

```

```

## Strategies for Retiring Global Apex

Even though [deprecating Apex](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_deprecated.htm "Use the @Deprecated annotation to specify Apex identifiers that can subscribers can no longer reference in subsequent releases of the managed package. Deprecation is useful when you’re refactoring code in managed packages as the requirements evolve.") only affects future versions of your package, phasing out a global Apex member requires careful planning and clear communication to prevent subscriber disruption.

Here’s some recommendations for effectively retiring a global Apex member.

-   Communicate early and clearly. Inform subscribers well in advance—ideally, multiple release cycles—of any deprecation. Explain reasons, timelines, and migration paths. Update the documentation, and share it prominently.
-   Provide alternatives. Release well-documented and robust alternatives before or concurrent with the deprecation announcement.
-   Implement soft deprecation with non-breaking warnings.
    -   Add the @Deprecated annotation to the global member. This annotation generates compile-time warnings in developer tools, but doesn’t alter run-time behavior.
    -   Consider run-time logging when the deprecated member is invoked, guiding subscribers to the new alternative.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

        #### Note

        You can’t remove the @Deprecated annotation to undeprecate something in Apex after you’ve released a package version where that item in Apex is deprecated. You also can’t add new global access modifiers to a @Deprecated type.

-   Enforce non-operation with exceptions. Change the code to throw an informative exception, such as FeatureDeprecatedException('Method X is retired. Use Method Y.'). This breaking change at run time stops the old logic from running and forces attention to the deprecation. However, any breaking change requires extensive prior communication.
-   Retire code for obsolete global Apex. After ample time and communication, confirm that subscribers are no longer using the deprecated global member. Then minimize the member’s internal code. Although the global signature must remain, its logic can become non-operational (no-op), return a safe default, or throw a specific Feature Retired exception. Implementing these changes reduces the risk and effort of maintaining the old code.

Always thoroughly test changes related to deprecating global Apex, including testing your package’s behavior if a subscriber attempts to call the deprecated member. The goal is a graceful transition for your subscribers.

#### See Also

-   [Access Modifiers](atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm)

-   [Apex Class Definition](atlas.en-us.apexcode.meta/apexcode/apex_classes_defining.htm)

-   [Exposing Apex Classes as REST Web Services](atlas.en-us.apexcode.meta/apexcode/apex_rest.htm "You can expose your Apex classes and methods so that external applications can access your code and your application through the REST architecture.")

-   [Exposing Apex Methods as SOAP Web Services](atlas.en-us.apexcode.meta/apexcode/apex_web_services.htm "You can expose your Apex methods as SOAP web services so that external applications can access your code and your application.")

-   [NamespaceAccessible Annotation Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm)

-   [Deprecate Managed Apex](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_deprecated.htm "Use the @Deprecated annotation to specify Apex identifiers that can subscribers can no longer reference in subsequent releases of the managed package. Deprecation is useful when you’re refactoring code in managed packages as the requirements evolve.")

-   [*Apex Reference Guide*: Callable Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_System_Callable.htm)

-   [*Second-Generation Managed Packaging Developer Guide*: Components Available in Second-Generation Managed Packages–Apex Class](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_packageable_components.htm#mdc_apex_class)

## Code Examples

```apex
// --- ISV's Managed Package Code ---
// Global Entry Point
global with sharing class MyPackageApi {
    // Note: This is a simplified example using a primitive data type. For a 
    // more flexible and future-proof design, we recommend using parameter 
    // objects for global method signatures, as explained in the next section.
    global static List<String> greetUsers(List<String> userNames) {
            // Delegate directly to a public class to do the actual work.
            // GreetingService is a 'public' class within your package.
        GreetingService service = new GreetingService();
            return service.createGreetings(userNames);
    }
}

// Public Class (Lives inside your package)
// This class can be updated easily in future package versions.
public with sharing class GreetingService {
    // This public method contains all the business logic to process a list of names.
    public List<String> createGreetings(List<String> names) {
        List<String> greetings = new List<String>(); 
        // Input validation and error handling, e.g. Return an empty list if input is null or empty.
        // Process each name in the list.
        for (String name : names) {
            greetings.add('Hello, ' + name + '!');
        }
        return greetings;
    }
    
    // If needed, you can freely add private methods here
    private void someHelperMethod() {
        // ...
    }
}


// --- Subscriber Code ---
// Subscriber creates a list and calls the global method
List<String> welcomeMessages = TheIsvNamespace.MyPackageApi.greetUsers(
    new List<String>{'Jane Doe', 'Rose Gonzalez'});
// The output is a corresponding list of greetings.
// welcomeMessages will be: ['Hello, Jane Doe!', 'Hello, Rose Gonzalez!']
```

```apex
// --- ISV's Managed Package Code ---
// The global entry point class contains the global method and input & output wrapper inner classes.
global with sharing class GeocodingService {
    // 1. The Global Method
    // The signature is clean, using the inner classes for its input parameter and return type.
    global static GeolocationResponse getCoordinates(AddressRequest location) { 
        // --- Internal logic to process the request ---
        // We recommend calling a public method to delegate all business logic. Skipping this for brevity in this example
        // This could involve callouts to an external geocoding service.
        // For this example, we will return mock data.
        if (location.postalCode == '94105') {
            return new GeolocationResponse(37.7749, -122.4194);
        } else {
			return new GeolocationResponse(0, 0);
		}
    }
   
    // 2. The Input Parameter Object (as an inner class)
    // A simple inner class with global properties to bundle input parameters.
    global with sharing class AddressRequest {
        global String street;
        global String city;
        global String state;
        global String postalCode;
    
        // A constructor helps ensure required fields are provided.
        global AddressRequest(String street, String city, String state, String postalCode) {
            this.street = street;
            this.city = city;
            this.state = state;
            this.postalCode = postalCode;
        }
    }
    
    // 3. The Output Parameter Object (as an inner class)
    // A simple inner class to provide a structured result.
    global with sharing class GeolocationResponse {
        // Using 'private set' makes these properties read-only for subscribers.
        // @AuraEnabled makes these properties visible to Lightning web components, if necessary.
        @AuraEnabled global Decimal latitude { get; private set; }
        @AuraEnabled global Decimal longitude { get; private set; }
        
        // This constructor is public, not global, so subscribers can't create their own response objects.
        public GeolocationResponse(Decimal lat, Decimal lon) {
            this.latitude = lat;
            this.longitude = lon;
        }
    }
}

// --- Subscriber Code --- 
// The subscriber's experience is clean and type-safe.
// 1. Create an instance of the input object, referencing it via the outer class.
TheIsvNamespace.GeocodingService.AddressRequest sfAddress = new TheIsvNamespace.GeocodingService.AddressRequest(
    '415 Mission St',
    'San Francisco',
    'CA',
    '94105'
);

// 2. Call the global method with the single parameter object.
TheIsvNamespace.GeocodingService.GeolocationResponse coordinates = TheIsvNamespace.GeocodingService.getCoordinates(sfAddress);

// 3. Process the structured, strongly-typed result. 
// For this example we will just log the results.
    System.debug('Coordinates found: ' + coordinates.latitude + ', ' + coordinates.longitude);
```

```apex
// --- ISV's Managed Package Code ---
// Global Interface - Defines a capability
global interface Notifier {
    global void send(String message);
}

// Global Factory Class - Provides instances
global with sharing class NotificationFactory {
    global static Notifier getEmailNotifier() {
        return new EmailNotifierImpl(); // EmailNotifierImpl is public
    }
}

// Public Implementation (Lives inside your package)
public with sharing class EmailNotifierImpl implements Notifier {
    public void send(String message) {
        // Logic to send an email (simplified here)
        System.debug('Emailing: ' + message);
    }
}

// --- Subscriber Code ---
// Subscriber gets an instance of a Notifier
Notifier myEmailer = NotificationFactory.getEmailNotifier();

// Subscriber uses the interface method
myEmailer.send('Welcome to our service!'); // Outputs: Emailing: Welcome to our service!
```

## Related Topics

- global modifier (atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm)
- access
            modifiers (atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm)
- @NamespaceAccessible
            annotation (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm)
- @AuraEnabled (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_AuraEnabled.htm)
- Apex REST
            annotation (atlas.en-us.apexcode.meta/apexcode/apex_rest_annotations_list.htm)
- deprecating Apex (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_deprecated.htm)
- Access Modifiers (atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm)
- Apex Class Definition (atlas.en-us.apexcode.meta/apexcode/apex_classes_defining.htm)
- Exposing Apex Classes as REST Web Services (atlas.en-us.apexcode.meta/apexcode/apex_rest.htm)
- Exposing Apex Methods as SOAP Web Services (atlas.en-us.apexcode.meta/apexcode/apex_web_services.htm)
