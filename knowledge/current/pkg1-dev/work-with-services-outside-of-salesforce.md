---
title: "Work with Services Outside of Salesforce"
domain: pkg1-dev
topic: work-with-services-outside-of-salesforce
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.550Z
estimatedTokens: 767
keywords: [Work, Services, Outside, Salesforce, want, data, changes, occur, another, service, Likewise, send, mass, email, contacts]
---

# Work with Services Outside of Salesforce

> You might want to update your Salesforce data when changes occur in another service. Likewise,
   you might also want to update the data in a service outside of Salesforce based on changes to
   your Salesforce data. For example, you might want to send a mass email to more contacts and leads
   than

# Work with Services Outside of Salesforce

You might want to update your Salesforce data when changes occur in another service. Likewise, you might also want to update the data in a service outside of Salesforce based on changes to your Salesforce data. For example, you might want to send a mass email to more contacts and leads than Salesforce allows. You can use an external mail service that allows users to build a recipient list of names and email addresses using the contact and lead information in your Salesforce organization.

An app built on the Salesforce Platform can connect with a service outside of Salesforce in many ways. For example, you can:

-   create a custom link or custom formula field that passes information to an external service.
-   use the Platform APIs to transfer data in and out of Salesforce.
-   use an Apex class that contains a Web service method.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=pkg1_dev)

#### Warning

Don’t store usernames and passwords within any external service.

## Provisioning a Service External to Salesforce

If your app links to an external service, users who install the app must be signed up to use the service. Provide access in one of two ways:

-   Access by all active users in an organization with no real need to identify an individual
-   Access on a per user basis where identification of the individual is important

The Salesforce service provides two globally unique IDs to support these options. The user ID identifies an individual and is unique across all organizations. User IDs are never reused. Likewise, the organization ID uniquely identifies the organization.

Avoid using email addresses, company names, and Salesforce usernames when providing access to an external service. Usernames can change over time and email addresses and company names can be duplicated.

If you’re providing access to an external service, we recommend the following:

-   Use Single Sign-On (SSO) techniques to identify new users when they use your service.
-   For each point of entry to your app, such as a custom link or web tab, include the user ID in the parameter string. Have your service examine the user ID to verify that the user ID belongs to a known user. Include a session ID in the parameter string so that your service can read back through the Lightning Platform API and validate that this user has an active session and is authenticated.
-   Offer the external service for any known users. For new users, display an alternative page to collect the required information.
-   Don’t store passwords for individual users. Besides the obvious security risks, many organizations reset passwords on a regular basis, which requires the user to update the password on your system as well. We recommend designing your external service to use the user ID and session ID to authenticate and identify users.
-   If your application requires asynchronous updates after a user session has expired, dedicate a distinct administrator user license for this.
