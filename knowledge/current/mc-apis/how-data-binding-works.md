---
title: "How Data Binding Works"
domain: mc-apis
topic: how-data-binding-works
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.369Z
estimatedTokens: 2661
keywords: [How, Data, Binding, Works, bind, Activity, created, via, Journey, Builder, API, Custom, running, process, greatly]
---

# How Data Binding Works

> Data Binding allows you to bind an Activity created via the Journey Builder API or a Custom Activity to data in a running journey. This process greatly simplifies how a marketer or developer dynamically connects data for each contact flowing through a journey.

# How Data Binding Works

**Data Binding** allows you to bind an Activity created via the Journey Builder API or a Custom Activity to data in a running journey. This process greatly simplifies how a marketer or developer dynamically connects data for each contact flowing through a journey.

The Marketing Cloud built the syntax for Data Binding on the Mustache template language library.

Data Binding lets you write expressions evaluated by the Journey Builder Engine at runtime, when an Activity executes for a contact. The inArguments and outArguments include these expressions. The system does not evaluate these expressions when saving, validating, or publishing a journey.

The standard POST body to an Activity without Data Binding leaves the inArguments and outArguments empty:

```json
{
    contents: {
        inArguments: [],
        outArguments: [],
        journeyId: "1234abcd-56ef-78gh-90ij-9876klmn5432",
        activityId: "1234abcd-56ef-78gh-90ij-9876klmn5432",
        definitionInstanceId: "1234abcd-56ef-78gh-90ij-9876klmn5432",
        keyValue: "somekeyvalue@domain.tld"
    }
}
```

While this call contains some useful information, it provides a limited approach. InArguments provide your Activity with information needed to handle internal decisions, update your data, or reach out to services your Custom Activity depends on. OutArguments contain the key and value pair for each field expected on the response body of the request. The following example uses Data Binding within the config.json:

```json
{
    "workflowApiVersion": "1.0",
    "type": "MOBILE",
    "lang": {
        "en-US": {
            "name": "My Custom Activity",
            "description": "This activity will make the world a better place"
        }
    },
    "arguments": {
        "execute": {
            "inArguments": [
                {
                    "contactIdentifier": "{{Contact.Key}}"
                },
                {
                    "emailAddress": "{{InteractionDefaults.Email}}"
                },
                {
                    "twitterHandle": "{{Contact.Default.Twitter}}"
                },
                {
                    "lastLogin": "{{Contact.Attribute.Engagement.LastLogin}}"
                }
            ],
            "outArguments": [
                {
                    "foundSignupDate": ""
                }
            ],
            "url": "https://some-endpoint.com/execute"
        }
    },
    "configurationArguments": {
        "save": {
        },
        "publish": {
        },
        "validate": {
        },
        "edit": {
            "uri": "https://my.endpoint.tld/path/to/activity/index.html",
            "height": 350,
            "width": 550
        }
    }
}
```

## Data Binding Syntax Basics

Using Mustache syntax provides a similar experience to using personalization strings in Marketing Cloud. However, Marketing Cloud limits Data Binding to Contacts and Event Data for a journey for the supplied Contact.

To illustrate how Mustache syntax works, assume you use the following JSON data:

```JSON
{
    "Contact": [
        {
            "ID": 1234567890,
            "Key": "1234abcd-56ef-78gh-90ij-9876klmn5432",
            "FirstName": "John", //Profile Attribute
            "LastName": "Smith", //Profile Attribute
            "Nickname": "Johnny", //Profile Attribute
            "PhysicalAddresses": [ //Data Extension registered w/ Contact Model
                { // A row in the Data Extension
                    "type": "work",
                    "Address1": "9876 Money Maker Lane",
                    "Address2": "Suite 100",
                    "City": "Palo Alto",
                    "State": "CA",
                    "PostalCode": "94301"
                }
            ]
        }
    ]
}
```

To bind the full name of the Contact:

```Handlebars
{{Contact.Attribute.Persona.FirstName}} {{Contact.Attribute.Persona.LastName}}
    // Would output "John Smith"
```

## Supported Methods of Data Binding

### Contact Builder Context

Using Data Binding with Contact Builder provides the most powerful set of data to Marketing Cloud customers.

-   `Contact.Key` - The Journey Builder Engine requires this contact key value to provide the appropriate context.
-   `InteractionDefaults.Email` - Use this pattern to retrieve the default address of the given type for the specified Contact.
-   `Contact.Default.[Twitter||Facebook||SMS]` - Use this pattern to retrieve the default address (non-email) of the given type for the specified Contact.
-   `Contact.Attribute.[FullyQualifiedAttributeName]` - Use this pattern to retrieve the specified attribute from the Contact Builder. The fully qualified attribute names generally appear in the form of **\[AttributeSet Name\].\[AttributeName\]**. By default, the attribute set name from Contact Builder's Data Designer is the same as the data extension name. The attribute set name of a system-defined set may be different from the data extension name, so use the attribute set name from Contact Builder. (The attribute set name is different from the attribute group name.) Attribute sets and names can use special characters like spaces, but you **must** surround these values with double quotation marks. Example: `Contact.Attribute."Product Orders"."Product Name"`

Here are some examples based on the following data assumptions:

-   The contact opted-in for subscriptions
-   The contact subscribed with Email, Twitter and SMS channels as defaults using the following values:
    -   john.smith@example.com
    -   @johnnyballgame
    -   555-555-5555
-   Contact includes related data on an AttributeSet named **Person** (using the JSON data from above)

```Handlebars
// To fetch the Default Email Address for the Contact
    {{InteractionDefaults.Email}}

    // To fetch the Default Twitter Address for the Contact
    {{Contact.Default.Twitter}}

    // To fetch the Default SMS Address for the Contact
    {{Contact.Default.SMS}}

    // To fetch the Home Postal Code for the Contact
    {{Contact.Attribute.Person.Work.PostalCode}}

    // To fetch full name for the Contact
    {{Contact.Attribute.Person.FirstName}} {{Contact.Attribute.Person.LastName}}
```

### Journey Context

You may need to retrieve information from the running journey's context. An expression can also reference the outArguments from a prior activity in the current journey context using the following placeholder patterns:

-   `Interaction.[ActivityCustomerKey].[OutArgumentName]` - Uses a journey-unique Activity Customer Key and the Activity specifies the OutArgumentName value.
-   `Context.IsTest` - Returns **true** for a journey in Test Mode. Use this parameter when the Activity needs to act differently when running the journey as a test.
-   `Context.PublicationId` - Use the publication ID to associate the currently executing activity to a particular publication (version) of the journey.
-   `Context.DefinitionId` - Use the definition ID to associate the currently executing activity to a particular definition of the journey.
-   `Context.DefinitionInstanceId` - This key identifies the actual instance of a journey. Each time a contact runs through the engine, the engine creates a unique ID. Use this information to match logs.
-   `Context.StartActivityKey` - This key contains the starting key for the session associated with the activity. The key includes a blank value when starting a new activity. Coming off of a wait, this key contains the key of the wait activity.
-   `Context.VersionNumber` - This key retrieves the entire journey response body, from which you can pull the journey version number. See the Journey Spec for an example of the response body format.

### Event Context

You can reference an event within an expression (the incoming data associated with the entry event). Adhere to the following pattern when using data binding with events:

```Handlebars
// Capture a field "ProductId" from the EventDefinitionKey "my-custom-product-entry-event-key"
    {{Event.my-custom-product-entry-event-key.ProductId}}
```

## Evaluating Expressions

An activity can include many different data bound fields. The fields include Mustache expressions specified at journey design time. For instance, for an activity with a databound field expecting an email, the customer can specify `{{InteractionDefaults.Email}}`.

-   When processing a contact in a journey, the engine evaluates all expressions.
-   Once a journey publishes, and every subsequent hour, the system compiles each expression to ensure evaluation at runtime.
-   When the system cannot compile an expression, publish fails and the system disables the journey. These types of failures could happen if a customer renames or deletes a field or does anything to invalidate the expression.
-   The system compiles all expressions in memory during this hourly validation. This process allows the engine to cache all information needed to retrieve for a given journey, and it speeds up the replacement process of the Mustache placeholders. For example, you can combine all contact calls that can happen within this session of the journey into one contact service call.
-   The `defaults` property on the journey Object contains an ordered list of email expressions that determine which email address to use as the default, starting with the first expression.

## Best Practices

Mustache and Handlebars (Handlebars extend Mustache functionality) allows for complex ways of using placeholders. Use the fully qualified name approach for specifying placeholders to cut down on the change of ambiguation issues. The system checks inner-scope before the outer-scope. Review the following code for examples.

If there is non-alpha character, such as a space or a colon, in the attribute set or field name, use double quotation marks with Mustache and Handlebar syntax.

```Handlebars
{{#with Contact.FilterId}}
    {{#with Contact.AttributeId}}
        {{1234abcd-56ef-78gh-90ij-9876klmn5432}}-{{1234abcd-56ef-78gh-90ij-9876klmn5432}}
    {{/with}}
{{/with}}
```

## Related Items

-   [Custom Activities](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/creating-activities.htm)
-   [Validation Checks to Publish a Journey](atlas.en-us.noversion.mc-apis.meta/mc-apis/interaction-operating-states.htm)
-   [Journey Specification](atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)
-   [Personalization Strings](https://help.salesforce.com/articleView?id=mc_es_personalization_strings.htm&type=5)
-   [Mustache Template Language](http://mustache.github.io/)

## Related Topics

- Validation Checks to Publish a Journey (atlas.en-us.noversion.mc-apis.meta/mc-apis/interaction-operating-states.htm)
- Journey Specification (atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)
