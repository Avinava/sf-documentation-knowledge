---
title: "DataFolder"
domain: mc-apis
topic: datafolder
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:21.303Z
estimatedTokens: 1161
keywords: [DataFolder, folder, Marketing, Cloud, Content, Child, Folders, Items]
---

# DataFolder

> The DataFolder object represents a folder in Marketing Cloud.

# DataFolder

The DataFolder object represents a folder in Marketing Cloud.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AllowChildren | xsd:boolean | Specifies whether a data folder can have child data folders. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| ContentType | xsd:string | Defines the type of content contained within a folder. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| Description | xsd:string | Describes and provides information regarding the object. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| IsActive | xsd:boolean | Specifies whether the object is active |
| IsEditable | xsd:boolean | Indicates if the property can be edited by the end-user in the profile center |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| ParentFolder | DataFolder | Specifies the parent folder for a data folder. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |

## Content Types for Child Folders

Use these content types when creating child folders for existing entities within your account. The Type column corresponds to the ContentType property for the DataFolder object.

| Entity | Type |
| --- | --- |
| AB test | ABTest |
| Asset | asset |
| simple automated emails | automated_email |
| Automations | automations |
| Build audience activity | BuildAudienceActivity |
| Campaign | campaign |
| Condensed preview | condensedlpview |
| my contents | content |
| Contextual suppression list | contextual_suppression_list |
| Data extensions | dataextension |
| my documents | document |
| ELT activity | ELTactivity |
| my emails | email |
| Email hidden message model | email_hidden_messagemodel |
| Filter activities | filteractivity |
| Data Filters | filterdefinition |
| Global email | global_email |
| Global email subscribers | global_email_sub |
| my groups | group |
| Hidden | Hidden |
| my images | image |
| my tracking | job |
| my lists | list |
| Live content | livecontent |
| Measures | measure |
| Portfolio | media |
| Message | message |
| Microsites | microsite |
| Microsite layouts | micrositelayout |
| my subscribers | mysubs |
| Organizations | organization |
| Playbooks | playbooks |
| Programs | programs2 |
| Publication lists | publication |
| Query Activity | queryactivity |
| Salesforce data extension | salesforcedataextension |
| Salesforce sends | salesforcesends |
| Salesforce sends v5 | salesforcesendsv5 |
| Shared content | shared_content |
| Shared contextual suppression list | shared_contextual_suppression_list |
| Shared data | shared_data |
| Shared data extensions | shared_dataextension |
| Shared email messages | shared_email |
| Shared items | shared_item |
| Shared portfolios | shared_portfolio |
| Shared publication lists | shared_publication |
| Shared Salesforce data extension | shared_salesforcedataextension |
| Shared suppression lists | shared_suppression_list |
| Shared surveys | shared_survey |
| Shared templates | shared_template |
| SSJS Activity | ssjsactivity |
| Suppression Lists | suppression_list |
| my surveys | survey |
| Synchronized Data Extension | synchronizeddataextension |
| my templates | template |
| Triggered sends | triggered_send |
| Triggered sends Journey Builder | triggered_send_journeybuilder |
| User-initiated sends | userinitiatedsends |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [Creating, Retrieving, Updating, and Deleting Folders](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_retrieving_updating_and_deleting_folders.htm)

## Related Topics

- Creating, Retrieving, Updating, and Deleting Folders (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_retrieving_updating_and_deleting_folders.htm)
