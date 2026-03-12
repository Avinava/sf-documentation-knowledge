---
title: "EmailRelay"
domain: object-reference
topic: emailrelay
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.402Z
estimatedTokens: 1206
keywords: [EmailRelay, configuration, sending, email, relay, routes, sent, Salesforce, company’s, servers, API, version, 43.0, later, Calls]
---

# EmailRelay

> Represents the configuration for sending an email relay. An email
			relay routes email sent from Salesforce through your company’s email servers. This
		object is available in API version 43.0 and later.

# EmailRelay

Represents the configuration for sending an email relay. An email relay routes email sent from Salesforce through your company’s email servers. This object is available in API version 43.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

You must have the Email Administration, Customize Application, and View Setup user permissions to use this object.

## Fields

| Field Name | Details |
| --- | --- |
| AuthType | TypepicklistPropertiesCreate, Filter, Group, Restricted Picklist, Sort, UpdateDescriptionSpecifies which SASL mechanism Salesforce uses for SMTP authentication. This field is available when Enable SMTP Auth is selected. Select an option:PLAIN- Salesforce uses PLAIN SASL mechanism for SMTP authentication. Default.LOGIN- Salesforce uses LOGIN SASL mechanism for SMTP authenticationThis field is available in API version 52.0 and later. |
| Host | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionIndicates the host name or IP address of your company's SMTP server. |
| IsRequireAuth | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether (true) or not (false) authentication is required. When setting this field to true, the TlsSetting must be set to RequiredVerify. This field is available in API version 44.0 and later. |
| Password | TypeencryptedstringPropertiesCreate, Nillable, UpdateDescriptionSpecifies the password for relay host STMP authentication. When IsRequireAuth is set to true, this field is required. This field is available in API version 44.0 and later. |
| Port | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates the port number of your company's SMTP server.255871002511025 |
| TlsSetting | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies whether Salesforce uses TLS for SMTP sessions.Off: TLS is turned off. SMTP session continues through an insecure connection.Preferred: If the remote server supports TLS, Salesforce upgrades the current SMTP session to use TLS. If TLS is unavailable, Salesforce continues the session without TLS.Required: Salesforce continues the session only if the remote server supports TLS. If TLS is unavailable, Salesforce terminates the session without delivering the email.PreferredVerify: If the remote server supports TLS, Salesforce upgrades the current SMTP session to use TLS. Before the session begins, Salesforce verifies that the certificate is signed by a valid certificate authority, and that the common name presented in the certificate matches the domain or mail exchange of the current connection. If TLS is available but the certificate is not signed or the common name does not match, Salesforce disconnects the session and does not deliver the email. If TLS is unavailable, Salesforce continues the session without TLS.RequiredVerify: Salesforce continues the session only if the remote server supports TLS, the certificate is signed by a valid certificate authority, and the common name presented in the certificate matches the domain or mail exchange to which Salesforce is connected. If any of these criteria are not met, Salesforce terminates the session without delivering the email. |
| Username | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the username for relay host STMP authentication. When IsRequireAuth is set to true, this field is required. This field is available in API version 44.0 and later. |

## Usage

An email relay must be associated with an active email domain filter to take effect. If you set up multiple email relays in one org, they are processed in the priority order of their email domain filters.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=object_reference)

#### Tip

If you also plan to activate Bounce Management and Email Compliance Management, confirm with your email admin that your company allows relaying email sent from Salesforce. For more information on bounce management, see [Configure Deliverability Settings for Emails Sent from Salesforce](https://help.salesforce.com/articleView?id=emailadmin_send_through_salesforce_configure_deliverability.htm&language=en_US "HTML (New Window)").

#### See Also

-   [EmailServicesFunction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailservicesfunction.htm "An email service.")

-   [EmailDomainFilter](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emaildomainfilter.htm "Represents a filter that determines whether an email relay is restricted to a specific list of domains. This object is available in API version 43.0 and later.")

## Related Topics

- EmailServicesFunction (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailservicesfunction.htm)
- EmailDomainFilter (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emaildomainfilter.htm)
