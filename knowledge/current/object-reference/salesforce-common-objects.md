---
title: "Salesforce Common Objects"
domain: object-reference
topic: salesforce-common-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:03.293Z
estimatedTokens: 877
keywords: [Salesforce, Common, Objects, any, standard, org, cloud, They, don’t, require, special, licensing, Original, Platform, Base]
---

# Salesforce Common Objects

> Common objects are available in any standard org for any cloud. They don’t require
        any special licensing.

# Salesforce Common Objects

Common objects are available in any standard org for any cloud. They don’t require any special licensing.

Optimized for: ACID transactions

Object types: Original, Base, and Setup.

Database storage: Relational and transactional database that scales to millions of records

Reference information: Object Reference for the Salesforce Platform

Documentation: Documented in Salesforce Help by product

## Original Platform Objects

Original platform objects are sometimes called hero or legacy objects. They’re the oldest of the Salesforce objects.

Objects: Account, Contact, Lead, Opportunity

Customizable: Yes

Cloud: Common. These objects are available in any cloud that uses an org.

Packaging: Every form of packaging except data kits. See the Metadata Coverage Report.

Object Examples: [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm), [Contact](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contact.htm), [Lead](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_lead.htm), [Opportunity](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm)

Documentation: [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm), [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)

Reference:[Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_list.htm)

## Base Platform Objects

Base platform objects (BPOs) are the objects common to most Salesforce orgs that contain data.

Object Examples: [SocialPersona](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_socialpersona.htm?q=Person%20Account)

Customizable: Yes

Cloud: Common. These objects are available on any cloud that uses an org.

Packaging: Every form of packaging except data kits.

## Setup Platform Objects

Setup platform objects (SPOs) are the objects common to most Salesforce orgs that contain setup configuration information. Data about the platform is created using org Setup is stored in Setup platform objects.

Object Examples: [CompactLayout](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_compactlayout.htm), [CustomField](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_customfield.htm)

Customizable: Yes

Cloud: Common. These objects are available on any cloud that uses an org.

Packaging: The packaging available depends on the cloud, product, and feature that the objects are associated with.

## Custom Objects

You can create custom objects and define the schema for the object.

Transaction type: ACID

Object type(s): All custom objects are user defined, so they don’t have subtypes.

Object suffix: \_\_c

Customizable: N/A

Cloud: Common

Packaging: Depends on the object.

Object Examples: N/A

Documentation: [Manage Custom Objects](https://help.salesforce.com/s/articleView?id=platform.dev_objectedit.htm&type=5&language=en_US) in Salesforce Help.

Reference: N/A
