---
title: "NetworkDiscoverableLogin"
domain: object-reference
topic: networkdiscoverablelogin
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.223Z
estimatedTokens: 549
keywords: [NetworkDiscoverableLogin, Login, Discoverable, customers, partners, log, Experience, Cloud, site, users, External, Identity, license, any, communities]
---

# NetworkDiscoverableLogin

> Represents the Login Discoverable page from where customers and partners log in to an Experience Cloud site. Customers and partners are users with an External Identity
			license or any communities license for Experience Cloud. This object is available in API version 44.0 and later.

# NetworkDiscoverableLogin

Represents the Login Discoverable page from where customers and partners log in to an Experience Cloud site. Customers and partners are users with an External Identity license or any communities license for Experience Cloud. This object is available in API version 44.0 and later.

## Supported Calls

create(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| ApexHandlerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the Apex handler created by the Login Discovery page type. |
| ExecuteApexHandlerAsId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the user who is executing the handler. |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateUniqueDescriptionThe ID of NetworkId is unique within your org. |
| UsernameLabel | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLog in prompt on login page when the login page type is Login Discovery. |

## Usage

Use this object to access the Login Discovery Page, which is a login page type that prompts users to identify themselves with an email address, phone number, or custom identifier. DiscoverableLogin performs an interview-based login process, where users are first prompted to provide identity and then authenticated. For example, users receive a verification code that they enter to complete the login process.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The NetworkDiscoverableLogin object is created when **Login Discovery Page** is selected as the login page type on the Login & Registration (L&R) page. If you later switch to another login page type, such as a Visualforce Page or Experience Builder Page, the object isn’t deleted. The object persistence means you can’t delete the Apex class associated with the NetworkDiscoverableLogin object. To delete the Apex class, return to the L&R page and change the login page type back to **Login Discovery page**. Select another Apex class, and then you can delete the first one.
