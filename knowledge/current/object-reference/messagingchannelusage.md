---
title: "MessagingChannelUsage"
domain: object-reference
topic: messagingchannelusage
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.806Z
estimatedTokens: 1581
keywords: [MessagingChannelUsage, status, enhanced, Messaging, channel, application, Unified, API, version, 60.0, later, Calls]
---

# MessagingChannelUsage

> Represents the status of an enhanced Messaging channel or of an application
         in a Unified Messaging channel. This object is available in API version 60.0 and
      later.

# MessagingChannelUsage

Represents the status of an enhanced Messaging channel or of an application in a Unified Messaging channel. This object is available in API version 60.0 and later.

A MessagingChannel can be associated with up to three MessagingChannelUsage records, each with a unique DeploymentType. The role of a MessagingChannelUsage record differs slightly depending on whether it's used in an enhanced Messaging channel or a Unified Messaging channel.

-   In enhanced WhatsApp, Facebook Messenger, Apple Messages for Business, and LINE channels, each channel has one associated MessagingChannelUsage record with a DeploymentType of Conversation. The MessagingChannelUsage record determines the channel's flow of messaging traffic. When you activate such a channel in Setup, its MessagingChannelUsage record updates to use a DeploymentStatus of Active, and messaging traffic can flow to and from Salesforce. Similarly, deactivating the channel in Setup causes its MessagingChannelUsage record to update to a DeploymentStatus of Disabled, and stops the flow of messaging traffic.
-   In Unified Messaging channels, the MessagingChannelUsage record represents the status of a connected Service Cloud or Marketing Cloud application. For example, if a WhatsApp Unified Messaging channel is connected to both Service Cloud and Marketing Cloud, the MessagingChannel record has two associated MessagingChannelUsage records with a DeploymentType of Conversation and MJ, respectively. These MessagingChannelUsage records are created when a user selects the Marketing or Service application during Unified Messaging setup.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ConsentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of customer consent required for your business to message a customer on this channel. Customers can opt out at any time.Possible values are:Implicit Opt-In: By sending an initial message to your business, the customer agrees to receive messages.Explicit Opt-In: The customer uses keywords to actively opt into receiving messages.Double Opt-In: The customer uses keywords to opt in twice to receiving messages. |
| DeploymentStatus | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the connected channel or application. If the DeploymentStatus is Active, messages can be sent or received (if permitted).Possible values are:New—Admin selected the Marketing or Service application in Unified Messaging Setup, or created a new enhanced WhatsApp, Facebook Messenger, Apple Messages for Business, or LINE channel on the Messaging Settings page in Setup.Provisioning—Admin clicked Connect on an application in Unified Messaging Setup, or Activate on an enhanced Messaging channel.Active—Provisioning was successful and the channel can be used to message with customers via the connected application or channel.Error—Provisioning or deprovisioning wasn’t successful. The admin can retry.Deprovisioning—Admin clicked Disconnect on an application in Unified Messaging Setup, or Deactivate on an enhanced Messaging channel.Disabled—Deprovisioning was successful and the channel or application can no longer be used to message with customers. |
| DeploymentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionIndicates whether the record is related to Service Cloud or Marketing Cloud.Possible values are:Conversation—Relating to Service Cloud.MessagingEngagement—Relating to Marketing Cloud.MJ—Relating to Marketing Cloud. J stands for Journey Builder. |
| DisabledTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time the MessagingChannelUsage record entered the Disabled state after an admin clicked Disconnect or Deactivate on the application or channel.When the record is disabled, all inbound and outbound messages aren’t sent via the connected application. Any sessions with a status other than Ended or Error are automatically ended within 48 hours unless the MessagingChannelUsage record is reenabled. |
| ErrorReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf an error occurs during connection, activation, disconnection, or deactivation of a MessagingChannelUsage record, the ErrorReason provides more information about what went wrong. For example, if an associated Service Cloud application for a Unified Messaging channel is missing a fallback queue or consent keywords, the connection attempt fails with an ErrorReason of ProvisioningError.Possible values are:DeprovisioningErrorInternalErrorInvalidSelectionProvisioningError |
| MessagingChannelId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe enhanced Messaging channel or Unified Messaging channel that the MessagingChannelUsage record is associated with. A MessagingChannel can be associated with up to three MessagingChannelUsage records.This field is a relationship field.Relationship NameMessagingChannelRelationship TypeLookupRefers ToMessagingChannel |
| RoutingOverride | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionApplicable only to MessagingChannelUsage records with a deployment type of MJ (Marketing Cloud). RoutingOverride indicates how messages are delivered in a unified channel where both the Service and Marketing applications are connected.   Possible values are:MJKeywordsOnly—If a messaging user sends a marketing keyword that is defined in Journey Builder, Journey Builder handles the message delivery and response. If a messaging user sends a non-keyword message, Omni-Channel handles the message delivery and response.NonSessionMessages—If a messaging user is engaged in an active Service Cloud messaging session, Service Cloud handles message delivery and response. If the user isn’t engaged in an active session, Journey Builder handles message delivery and response.Regardless of the RoutingOverride value, outbound messages are always handled by Service Cloud if the messaging user is engaged in an active Service Cloud messaging session. A session is considered active if its status isn't Ended or Error. |
