---
title: "Basic Personalization"
domain: mc-programmatic-content
topic: basic-personalization
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:22.313Z
estimatedTokens: 409
keywords: [Basic, Personalization, demonstrates, how, insert, city, email, message, Subscriber]
---

> This example demonstrates how to insert the first name, last name, and city name into an email message.

# Basic Personalization

This example demonstrates how to insert the first name, last name, and city name into an email message.

## Create a Subscriber

First, create a subscriber in your Marketing Cloud account.

1.  Click the Email app in the app switcher.
2.  Click **Email**.
3.  Click **Subscribers** in the top menu of the Email app.
4.  Click **All Subscribers**.
5.  Click **Create**.
6.  Click **Next**.
7.  Enter a subscriber key value for the subscriber in the Subscriber Key field.
8.  Enter the email address for the subscriber in the Email Address field.
9.  Click **First Name** and enter a value for the first name of the subscriber.
10.  Click **Last Name** and enter a value for the last name of the subscriber.
11.  Click **City** and enter a value for the city of the subscriber.
12.  Select the list you wish to place the subscriber on.
13.  Click **Finish**.

## Create an Email Message

1.  Click **Content**.
2.  Click **Emails**.
3.  Click **Create**.
4.  Select **HTML Paste**.
5.  Enter a name for your email message in the Email Name field.
6.  Enter a subject for your email message in the Email Subject field.
7.  Add any preheader information you wish in the Preheader field.
8.  Select the location for your email message by clicking **Select** and choosing the location.
9.  Click **OK**.
10.  Click **Save**.

Paste the template below into the content section of your email message:

Given this data context:

The message renders as displayed:

![Screenshot of Send Preview Screen](/docs/resources/img/en-us/noversion?doc_id=images%2FgtlBasicPersonalizationResults.png&folder=mc-programmatic-content)
