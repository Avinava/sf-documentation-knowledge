---
title: "Subscriber"
domain: mc-apis
topic: subscriber
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.487Z
estimatedTokens: 1357
keywords: [Subscriber, instance, person, subscribed, receive, email, SMS, communication, Describe, ExtendedProperties, definitions, profile, preference, attributes, defined, client, Items]
---

> The Subscriber object is a single instance of a person subscribed to receive email or SMS communication. When using the Describe method on a Subscriber object, the ExtendedProperties property contains the definitions for all of the data profile and preference attributes defined by a client.

# Subscriber

The Subscriber object is a single instance of a person subscribed to receive email or SMS communication. When using the Describe method on a Subscriber object, the ExtendedProperties property contains the definitions for all of the data profile and preference attributes defined by a client.

-   To update a Subscriber with a SubscriberType of 1 or 2 and a SFIntegrationVersion less than 2, you need the Email | Integrations | Salesforce CRM | Resubscribe permission.
-   To update a Subscriber with a SubscriberType of 4, 5, or 6 and the MSCRMIntegration feature enabled, you need the Email | Integrations | Microsoft CRM | Resubscribe permission.

## Required Attributes

-   All Subscriber objects require at minimum a value for EmailAddress (and SubscriberKey, if that feature is enabled for your account) for Create calls involving email messages.
-   For SMS subscribers, you must include a valid value for SubscriberKey.
-   For Update and Delete calls, you must identify the subscriber via a valid EmailAddress, SubscriberKey, or ID.
-   In addition, include any attributes required by your account.
-   All Subscriber objects in Enterprise accounts must contain a value for a valid On-Your-Behalf account in the ChannelMemberID property.
-   Review your error messages for more required attributes if necessary.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Addresses | SubscriberAddress[] | Indicates addresses belonging to a subscriber, used to create, retrieve, update or delete an email or SMS Address for a given subscriber. |
| Attributes | Attribute[] | Specifies attributes associated with an object. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| EmailAddress | xsd:string | Contains the email address for a subscriber. Indicates the data extension field contains email address data. |
| EmailTypePreference | EmailType | The format to use when sending an email to a subscriber. Valid values include:HTMLText |
| GlobalUnsubscribeCategory | GlobalUnsubscribeCategory | Indicates how the application handles a globally unsubscribed subscriber. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| Lists | SubscriberList[] | Defines lists a subscriber resides on. |
| Locale | Locale | Contains the locale information for an Account. If no location is set, Locale defaults to en-US. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| PartnerType | xsd:string | Defines partner associated with a subscriber. |
| PrimaryEmailAddress | EmailAddress | Indicates primary email address for a subscriber. |
| PrimarySMSAddress | SMSAddress | Indicates primary SMS address for a subscriber. Used to create and update SMS Address for a given subscriber. |
| PrimarySMSPublicationStatus | SubscriberAddressStatus | Indicates the subscriber's modality status. |
| Status | SubscriberStatus | Defines status of object. Status of an address. |
| SubscriberKey | xsd:string | Identification of a specific subscriber. |
| SubscriberTypeDefinition | SubscriberTypeDefinition | Specifies if a subscriber resides in an integration, such as Salesforce or Microsoft Dynamics CRM |
| UnsubscribedDate | xsd:dateTime | Represents date subscriber unsubscribed from a list. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [Add Subscribers to a List](atlas.en-us.noversion.mc-apis.meta/mc-apis/adding_subscribers_to_a_list.htm)
-   [Add Subscribers to a Lock and Publish Account](atlas.en-us.noversion.mc-apis.meta/mc-apis/adding_subscribers_to_a_lock_and_publish_account.htm)
-   [Add Subscribers to an On-Your-Behalf Account](atlas.en-us.noversion.mc-apis.meta/mc-apis/adding_subscribers_to_an_on_your_behalf_account.htm)
-   [Create a Subscriber](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_subscriber.htm)
-   [Describe a Subscriber](atlas.en-us.noversion.mc-apis.meta/mc-apis/describing_a_subscriber.htm)
-   [Manage Enterprise 2.0 Accounts](atlas.en-us.noversion.mc-apis.meta/mc-apis/managing_enterprise_20_accounts_with_the_web_services_api.htm)
-   [Manage Subscribers On Lists](atlas.en-us.noversion.mc-apis.meta/mc-apis/managing_subscribers_on_lists.htm)
-   [Retrieve a Subscriber](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve_a_subscriber_via_the_web_service_api.htm)

## Related Topics

- Add Subscribers to a List (atlas.en-us.noversion.mc-apis.meta/mc-apis/adding_subscribers_to_a_list.htm)
- Add Subscribers to a Lock and Publish Account (atlas.en-us.noversion.mc-apis.meta/mc-apis/adding_subscribers_to_a_lock_and_publish_account.htm)
- Add Subscribers to an On-Your-Behalf Account (atlas.en-us.noversion.mc-apis.meta/mc-apis/adding_subscribers_to_an_on_your_behalf_account.htm)
- Create a Subscriber (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_subscriber.htm)
- Describe a Subscriber (atlas.en-us.noversion.mc-apis.meta/mc-apis/describing_a_subscriber.htm)
- Manage Enterprise 2.0 Accounts (atlas.en-us.noversion.mc-apis.meta/mc-apis/managing_enterprise_20_accounts_with_the_web_services_api.htm)
- Manage Subscribers On Lists (atlas.en-us.noversion.mc-apis.meta/mc-apis/managing_subscribers_on_lists.htm)
- Retrieve a Subscriber (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve_a_subscriber_via_the_web_service_api.htm)
