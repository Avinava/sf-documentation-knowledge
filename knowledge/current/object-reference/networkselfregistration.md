---
title: "NetworkSelfRegistration"
domain: object-reference
topic: networkselfregistration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:13.272Z
estimatedTokens: 1035
keywords: [NetworkSelfRegistration, account, self-registering, Experience, Cloud, users, associated, site, admin, specify, setting, self-registration, isn’t, Salesforce, creates]
---

# NetworkSelfRegistration

> Represents the account that self-registering Experience Cloud users are associated with by default. Self-registering users in an Experience Cloud site are required to
		be associated with an account, which the admin must specify while setting up self-registration for the site. If an account isn’t specified, Salesforce creates person accounts (when enabled)
		for self-registering users. This object is available in API version 34.0 and later.

# NetworkSelfRegistration

Represents the account that self-registering Experience Cloud users are associated with by default. Self-registering users in an Experience Cloud site are required to be associated with an account, which the admin must specify while setting up self-registration for the site. If an account isn’t specified, Salesforce creates person accounts (when enabled) for self-registering users. This object is available in API version 34.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account that self-registering users in the Experience Cloud site are associated with. |
| ApexHandlerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Apex handler created by Configurable Self-Reg registration page type. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the org.The default value is USD. |
| ExecuteApexHandlerAsId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the user who is executing the configurable self-registration handler. |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of NetworkId is unique within your org.You can use only one account per Experience Cloud site to assign self-registering users. |
| OptionsDisableStandardRgstrComponent | TypebooleanPropertiesCreate, Filter, UpdateDescriptionDetermines whether you can use standard Aura and Lightning Web Runtime (LWR) components for self-registration. If this field is true, self-registration flows that use these components don’t work.For more control over self-registration, set this field to true if you’re not using the standard self-registration component. |
| OptionsIncludePassword | TypeBooleanPropertiesCreate, Filter, UpdateDescriptionOption on Configurable Self-Reg registration page. If true, the Include Password field is selected. |
| OptionsShowEmail | TypeBooleanPropertiesCreate, Filter, UpdateDescriptionOption on Configurable Self-Reg registration page. If true, the Email field appears on the self-registration form. |
| OptionsShowFirstName | TypeBooleanPropertiesCreate, Filter, UpdateDescriptionOption on the Configurable Self-Reg registration page. If true, the First Name field appears on the self-registration form. |
| OptionsShowLastName | TypeBooleanPropertiesCreate, Filter, UpdateDescriptionOption on the Configurable Self-Reg registration page. If true, the Last Name field appears on the self-registration form. |
| OptionsShowMobilePhone | TypeBooleanPropertiesCreate, Filter, UpdateDescriptionOption on the Configurable Self-Reg registration page. If true, the Mobile field appears on the self-registration form. |
| OptionsShowNickname | TypeBooleanPropertiesCreate, Filter, UpdateDescriptionOption on the Configurable Self-Reg registration page. If true, the Nickname field appears on the self-registration form. |
| OptionsShowUsername | TypeBooleanPropertiesCreate, Filter, UpdateDescriptionOption on the Configurable Self-Reg registration page. If true, the Username field appears on the self-registration form. |
| PermissionSetGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the permission set group used for the self registration. This field is a relationship field.Relationship NamePermissionSetGroupRefers ToPermissionSetGroup |
| VerificationMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of verification method that a user must supply when registering, which can be:SyncEmail—User must supply an email address to verify identity.SMS—User must supply a phone number to verify identity. |
