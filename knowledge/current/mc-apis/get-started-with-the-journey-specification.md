---
title: "Get Started with the Journey Specification"
domain: mc-apis
topic: get-started-with-the-journey-specification
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.291Z
estimatedTokens: 3685
keywords: [Started, Journey, Specification, structured, JSON, representation, Builder, scale, meet, massive, enterprise, demands, event-driven, one-to-one, cloud]
---

# Get Started with the Journey Specification

> The Journey Specification is a structured JSON representation of a single journey in Journey Builder. It allows Journey Builder to scale to meet the massive enterprise demands that true, event-driven, one-to-one cloud applications offer.

# Get Started with the Journey Specification

## What is the Journey Specification?

The **Journey Specification** is a structured JSON representation of a single journey in Journey Builder. It allows Journey Builder to scale to meet the massive enterprise demands that true, event-driven, one-to-one cloud applications offer.

The Journey Spec is used via REST API requests to the Marketing Cloud Interaction Service.

## What benefits does it offer developers?

The largest benefit of the Journey Spec is that it provides developers with a structural syntax to programmatically compose journeys. Some other benefits include:

-   Makes the Marketing Cloud Interaction Service available for customers and developers to create journeys completely via REST API requests.
-   Provides constructs for composing extremely complex journeys in Journey Builder without the need of a browser.
-   Designed to be somewhat readable by humans (assuming a basic understanding of JSON formatting), with textual references for statuses and options instead of cryptic database enumerations.
-   Allows developers to quickly use CRUD (Create, Read, Update, and Delete) operations in conjunction with journeys.
-   Allows for the Journey Builder APIs to have a constant, portable definition format for journeys, which can easily be shared in support and social.
-   Allows Journey Builder engineers to rapidly create a robust ecosystem of Journey Builder functionality.
-   Guarantees that all changes to a journey are atomic, preventing partial data corruption.

## Structure

The Journey Spec is represented using a JSON serialized string. Journey, event, activity, and goals are the four (4) primary object properites the specification makes available:

-   Journey: (sometimes called interaction) The **core** object, without this object you are unable to create any other properties of a journey using the spec.
-   Event: This is called a trigger in the Journey Spec and determines entry settings for the journey.
-   Activity: Instead of separating Waits, Activities, Exits, and so on, the Journey Spec calls all of these activities. Outcomes are used to map one activity to the next activity in the flow of a journey, once the current activity has completed.
-   Goal: This object is how Journey Builder can provide information on the success of a journey.

Using the primary objects of the Journey Spec, you can create extremely complex journeys using just a text editor and a REST client.

#### Important considerations about the Journey Spec hierarchy

-   The trigger contains the eventDefinitionKey of the entry event that will trigger this journey. There can only be a single entry event.
-   There is no start activity. The first activity is the activity which has no preceding activity. It is generally the first one in the list of activities.
-   There is no end activity. Endings or exits are denoted by an outcome with a next value of null. Contacts will be ejected from the journey when they reach that outcome.
-   Goal is unique, and is not an activity (primarily due to the fact that it may or may not cause a person to exit the journey).
-   Journey keys must be unique within a MID.
-   Activity keys must be unique within a journey.
-   Arguments may contain expressions to be processed by the engine using Data Binding. Use the Mustache template language to write these expressions. These expressions can access data that are available in the journey context (e.g. contact data) or data that are the output of a previous activity.
-   Outcomes will be an array of outcome objects on the activity. The outcome object(s) will denote the next activity/activities.

### Journey Object

The journey object has the following properties:

-   id \[read-only\] - A unique identifier for this journey that is generated and assigned by the journey API during creation.
-   version \[read-only\] - This number denotes the iteration of this particular journey.
-   key \[required\] - The customer key (also a unique identifier within the MID) for this journey. This is defined by the developer and can be used to address this journey in most API calls.
-   name \[required\] - The display name used in the Journey Builder UI for this journey, this will be visible to everyone who logs into your Marketing Cloud account. This can also be used as a filter with the nameOrDescription Query param.
-   description - The human readable description of this journey that informs others of purpose. This can also be used as a filter with the nameOrDescription Query param.
-   workflowApiVersion \[required\] - This number represents the current release of the Journey Spec that the Journey Builder APIs will expect in order to understand how to parse and properly respond to your API requests. This specification defines version "1.0".
-   goals - This is an array of goals containing a single object. (We currently only support a single goal per journey.)
-   triggers - This is an array of triggers containing a single object. (We currently only support a single trigger per journey.)
-   defaults - This object contains an ordered list of email expressions used to determine which email address to use as the default, starting with the first expression.
-   activities - This is an array that includes all the activities of the journey.

#### Example Journey Object

```js
// If you are just building the JSON to use in an API request, use the following syntax. This object contains the required properties to create any journey in Journey Builder.

{
    "key": "a-key-that-is-unique-for-MID",
    "name": "This is my first journey",
    "description": "This is a description of my journey.",
    "defaults": {
       "email": [
           "{{Event.event-key.EmailAddress}}",
           "{{Contact.Default.Email}}"
       ]
       },
    "workflowApiVersion": 1.0
}

// To reference the journey later, perhaps for an AJAX request, the following format for creating a journey Object might be more useful.

// In JavaScript, this is a variable named 'myInteraction' whose value is an **empty object**.
var myInteraction = {};

// This is an alternative syntax for adding attributes to an object along with their respective properties (just for your reference).
myInteraction.key                   = "a-key-that-is-unique-for-MID";
myInteraction.name                  = "This is our first journey";
myInteraction.description           = "This is a description of my journey.";
myInteraction.workflowApiVersion    = 1.0;
myInteraction.version               = 1;
myInteraction.triggers              = [];
myInteraction.defaults                = [];
myInteraction.activities            = [];
myInteraction.goal                  = [];
```

### Event Object

An event (called trigger in the Journey Spec) is an object on the journey Object that determines the entry settings for the journey. The recommended type for events fired via the API and for custom events is Event, which uses the contact model and an optional expression to determine when contacts should enter the journey.

The Event object has the following properties:

-   key - The MID-unique key used to identify this entry Event.
-   name - The display name for this Entry Event which will be shown in the Journey Builder UI.
-   type - The type of Entry Event this is (only value currently supported is event.
-   eventDefinitionKey - This is the key used to filter appropriate events into filter for evaluation on entry into the journey. Do not include a period in the event definition key.
-   arguments - This object represents the arguments this Event expects to be passed **for use at runtime**.
-   configurationArguments - This object represents the arguments this particular event expects to be passed **for use both at publish and runtime**.
    -   criteria - This is an XML string that represents the contact filter critieria.

```js
// This is the format of an Event (trigger) object (outside of the journey Object).

{
    "key": "event-key",
    "name": "Starting point for the journey",
    "type": "Event",
    "eventDefinitionKey": "my-entry-event-key",
    "arguments": {},
    "configurationArguments": {},

}

// The Event object can be plugged in to the Journey Spec like this:

{
    "key": "a-key-that-is-unique-for-MID",
    "name": "This is our first journey",
    "description": "We are using this journey to learn how to use the Journey Spec in Journey Builder",
    "workflowApiVersion": 1.0,
    "triggers": [
        {
            "key": "event-key",
            "name": "Starting point for the journey",
            "type": "Event",
            "eventDefinitionKey": "my-entry-event-key",
            "arguments": {},
            "configurationArguments": {},
        }
    ]
}
```

### Activity Objects

Activity Objects represent *almost* every object type in the Journey Spec. The only objects that are not technically considered an activity are goals and events.

Supported Activity types:

-   [Email](atlas.en-us.noversion.mc-apis.meta/mc-apis/send-email.htm)
-   [MultiCriteriaDecision](atlas.en-us.noversion.mc-apis.meta/mc-apis/decision-split.htm)
-   [RandomSplit](atlas.en-us.noversion.mc-apis.meta/mc-apis/random-split.htm)
-   [EngagementSplit](atlas.en-us.noversion.mc-apis.meta/mc-apis/engagement-split.htm)
-   [DataExtensionUpdate](atlas.en-us.noversion.mc-apis.meta/mc-apis/data-extension-update.htm)
-   [Rest](atlas.en-us.noversion.mc-apis.meta/mc-apis/rest.htm)
-   [Wait](atlas.en-us.noversion.mc-apis.meta/mc-apis/wait.htm)

The Activity object has the following properties:

-   id - This is the Marketing Cloud-provided unique ID for this particular activity.
-   key - This is the customer key (journey-unique) for this particular activity.
-   name - This is the display name for this activity, it will be shown in the Journey Builder UI.
-   type - This property defines what type of activity this is. The expected input for each activity must be passed as an argument to operate correctly.
-   outcomes - This is an array of 'outcome' objects (the following represents a single, generic outcome object).
    -   key - This is the customer key (journey-Unique) for this particular outcome.
    -   next - This value is a string which must map to a valid, journey-unique activity key.
-   arguments - This is an object which represents the arguments this particular activity expects to be passed **for use at runtime**. Each activity type has its own unique argument parameters which are expected (see below).
-   configurationArguments - This is an object which represents the arguments this particular activity expects to be passed **for use both at publish and runtime**. Each activity type has its own unique argument parameters which are expected (see below).

```js
// This is the format of an activity object (outside of the array and journey object).
{
    "key": "activity-key",
    "name": "The display name for the activity",
    "type": "[one of the supported activity types]",
    "outcomes": [],
    "configurationArguments": {},
    "arguments": {},
    "metaData": {}
}

// Outcomes and configurationArguments are addressed in the Activity Outcome Objects section.

// The activity object can be plugged in to the Journey Spec like this:

{
    "key": "a-key-that-is-unique-for-MID",
    "name": "This is our first journey",
    "description": "We are using this journey to learn how to use the Journey Spec in Journey Builder",
    "workflowApiVersion": 1.0,
    "activities": [
        {
            "key": "activity-key",
            "name": "The display name for the activity",
               "type": "[one of the supported activity types]",
            "outcomes": [],
            "configurationArguments": {},
            "arguments": {},
            "metaData": {}
        }
    ]
}
```

#### Activity Outcome

The outcome objects provide some context for decision activities in determining which outcome they should select from the array. For example, on a RandomSplit the arguments are used to determine the likelihood that each contact has of traversing each outcome. Here is an example of an activity outcome:

```js
// Please note that the arguments attribute is [optional] on some activities and required by others.
{
    "next": "the-key-of-the-next-activity-to-start-when-this-activity-is-done",
    "arguments": {
        "someKey": "someValue"
    }
}
```

### Goal Object

The goal object is used to measure effectiveness of an associated journey. Goals are only evaluated via their criteria / Filter XML.

The goal object has the following properties:

-   name - The display name for this goal.
-   key - The customer key for this goal.
-   type - The type of goal this is (only option currently is ContactEvent).
-   description - The description for this goal, will be displayed in the Journey Builder user interface.
-   metaData - A set of properties which are not specific to the definition or execution of this Event, but are related to it.
    -   conversionUnit - This value is used for deterministic evaluations of the goal, can be either "percentage" or "wholenumber".
    -   conversionValue - Based on the conversionUnit this is the metric Journey Builder uses to determine if the goal has been satisfied.

```js
// This is the format of a Goal object (outside of the journey object).
    {
     "key": "goal-key",
     "name": "Our success metric",
     "description": "This goal determines the success of the journey",
     "type": "ContactEvent",
     "arguments": {},
     "configurationArguments": {
         "criteria": "<Filter XML goes here>"
         },
     "metaData": {}
    }

// The Goal object can be plugged in to the Journey Spec like this:

{
    "key": "a-key-that-is-unique-for-MID",
    "name": "This is our first journey",
    "description": "We are using this journey to learn how to use the Journey Spec in Journey Builder",
    "workflowApiVersion": 1.0,
    "goals": [
        {
            "key": "goal-key",
            "name": "Our success metric",
            "description": "This goal determines the success of the journey",
            "type": "ContactEvent",
            "arguments": {},
            "configurationArguments": {},
            "metaData": {}
        }
    ]
}
```

Using the above JSON, we could make a PUT request to Journey Builder and update our original journey with this new goal.

## Related Items

-   [How Data Binding Works](atlas.en-us.noversion.mc-apis.meta/mc-apis/how-data-binding-works.htm)
-   [Mustache Template Language](http://mustache.github.io/)
-   [Journey Specification Example](atlas.en-us.noversion.mc-apis.meta/mc-apis/reference.htm)
-   [Goal Format](atlas.en-us.noversion.mc-apis.meta/mc-apis/goals.htm)

## Related Topics

- Email (atlas.en-us.noversion.mc-apis.meta/mc-apis/send-email.htm)
- MultiCriteriaDecision (atlas.en-us.noversion.mc-apis.meta/mc-apis/decision-split.htm)
- RandomSplit (atlas.en-us.noversion.mc-apis.meta/mc-apis/random-split.htm)
- EngagementSplit (atlas.en-us.noversion.mc-apis.meta/mc-apis/engagement-split.htm)
- DataExtensionUpdate (atlas.en-us.noversion.mc-apis.meta/mc-apis/data-extension-update.htm)
- Rest (atlas.en-us.noversion.mc-apis.meta/mc-apis/rest.htm)
- Wait (atlas.en-us.noversion.mc-apis.meta/mc-apis/wait.htm)
- How Data Binding Works (atlas.en-us.noversion.mc-apis.meta/mc-apis/how-data-binding-works.htm)
- Journey Specification Example (atlas.en-us.noversion.mc-apis.meta/mc-apis/reference.htm)
- Goal Format (atlas.en-us.noversion.mc-apis.meta/mc-apis/goals.htm)
