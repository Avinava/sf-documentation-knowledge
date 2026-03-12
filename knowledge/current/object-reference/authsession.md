---
title: "AuthSession"
domain: object-reference
topic: authsession
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:05.420Z
estimatedTokens: 1336
keywords: [AuthSession, individual, user, session, organization, versions, 29.0, later, Calls, Usage]
---

# AuthSession

> The AuthSession object represents an individual user session in your
   organization. This object is available in versions 29.0 and later.

# AuthSession

The AuthSession object represents an individual user session in your organization. This object is available in versions 29.0 and later.

## Supported Calls

delete(), describeSObjects(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| CreatedDate | TypedateTimePropertiesDefaulted on create, Filter, SortDescriptionThe date and time this session was created. This field is a standard system field. |
| Id | TypeidPropertiesDefaulted on create, Filter, Group, ID Lookup, SortDescriptionThe current session’s ID. |
| IsAssociatedWithJwtAccessToken | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the session is associated with a JSON Web Token (JWT)-based access token. This field is available in API version 64.0 and later. |
| IsCurrent | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the session is a member of the user’s current session family. This field is available in API version 37.0 and later. |
| LastModifiedDate | TypedateTimePropertiesDefaulted on create, Filter, SortDescriptionThe date and time this session was last updated. A session expires when the current date and time equals LastModifiedDate + NumSecondsValid. This field is a standard system field. |
| LoginGeoId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe 18-character ID for the record of the geographic location of the user for a login event. Due to the nature of geolocation technology, the accuracy of geolocation fields (for example, country, city, postal code) can vary. This field is available in API version 34.0 and later.This is a relationship field.Relationship NameLoginGeoRelationship TypeLookupRefers ToLoginGeo |
| LoginHistoryId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe 18-character ID for a successful login event. When a session is reused, Salesforce updates the LoginHistoryId with the value from the most recent login. This field is available in API version 33.0 and later.This is a relationship field.Relationship NameLoginHistoryRelationship TypeLookupRefers ToLoginHistory |
| LoginType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of login used to access the session. Possible values are:AJAX ToolkitApex Office ToolkitAppExchangeApplicationAppStoreCertificate-based loginChatter Communities External UserChatter Communities External User Third Party SSOCommunityCustomer Service Portal Third-Party SSOCustomer Service PortalDataJunctionDB ReplicationEmployee Login to CommunityExcel IntegrationHelp and TrainingHOTP YubiKeyLightning LoginNetworks Portal API OnlyOffline ClientOrder CenterOther Apex APIOutlook IntegrationPartner Portal Third-Party SSOPartner PortalPartner ProductPasswordless LoginRemote Access 2.0Remote Access ClientSales AnywhereSalesforce Outlook IntegrationSalesforce.com WebsiteSAML Chatter Communities External User SSOSAML Customer Service Portal SSOSAML Idp Initiated SSOSAML Partner Portal SSOSAML Sfdc Initiated SSOSAML Site SSOSelf-ServiceSignupSyncSysAdmin SwitchThird Party SSOUnknownValidate |
| LogoutUrl | TypestringPropertiesFilter, Nillable, SortDescriptionThe page or view to display after users log out of an Experience Cloud site, or an org if they authenticated using SAML. This field is available in API version 32.0 and later. |
| NumSecondsValid | TypeintPropertiesFilter, Group, SortDescriptionThe number of seconds before the session expires, starting from the last update time. |
| ParentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe 18-character ID for the parent session, if one exists (for example, if the current session is for a canvas app). If the current session doesn’t have a parent, this value is the current session’s own ID. |
| SessionSecurityLevel | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionStandard or High, depending upon the authentication method used. |
| SessionType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of session. Common ones are UI, Content, API, and Visualforce.For more information, see User Session Types in the Object Reference Guide. |
| SourceIp | TypestringPropertiesFilter, Group, SortDescriptionIP address of the end user’s device from which the session started. This address can be an IPv4 or IPv6 address.The SourceIp field doesn't support the LIKE comparison operator. |
| UserType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe kind of user for this session. Types include Standard, Partner, Customer Portal Manager, High Volume Portal, and CSN Only. |
| UsersId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe user’s Salesforce user ID.This is a relationship field.Relationship NameUsersRelationship TypeLookupRefers ToUser |

## Usage

The AuthSession object exposes session data and enables read and delete operations on that data. For example, use this object to see who is signed in to your org. Or you can use this object to create a tool to delete a session, ending that user’s session. For a user, only their own sessions are available, while administrators can see all sessions.

You can’t change user sessions with this object. You can only read and delete them.
