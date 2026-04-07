---
title: "Data Relationships"
domain: mc-programmatic-content
topic: data-relationships
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:26.963Z
estimatedTokens: 914
keywords: [Data, Relationships, demonstrates, how, display, order, history, subscriber, including, any, product, reviews, ratings, purchased, products]
---

# Data Relationships

> This example demonstrates how to display the order history of a subscriber, including any product reviews and the ratings for the purchased products.

# Data Relationships

This example demonstrates how to display the order history of a subscriber, including any product reviews and the ratings for the purchased products.

## Create Your Data Extensions

Create these data extensions in your Marketing Cloud account:

1.  MyContacts
    -   SubscriberKey - primary key, text
    -   EmailAddress - text
    -   First\_Name - text
    -   Last\_Name - text
    -   Language - text
    -   City - text
    -   Category\_Preference - number
2.  Products
    -   Product\_Name - text
    -   SKU - primary key, number
    -   Thumbnail\_URL - text
    -   Product\_Category - number
3.  Product\_Rating
    -   Average\_Rating - number
    -   SKU - primary key, number
    -   Number\_of\_Ratings - number
    -   Last\_Review\_Text - text
4.  Order\_Details
    -   SKU - primary key, number
    -   OrderID - primary key, number
    -   CustomerID - text

Follow these steps to create each of your data extensions:

1.  Hover over Subscribers.
2.  Click **Data Extensions**.
3.  Click **Create**.
4.  Choose **Standard Data Extension**.
5.  Click **OK**.
6.  Choose **Create From New** for Creation Method.
7.  Enter the name of the data extension in the Name field.
8.  Enter the value used to access the data extension via an API call in the External Key field.
9.  Enter a description of the data extension in the Description field.
10.  Choose the location for the new data extension in the Location field.
11.  Click **Next** twice to skip the Data Retention Options.
12.  Create the attributes for your data extension as shown in the previous list.
13.  Click **Next**.
14.  Click **Create**.

## Create Your Data Relationships

Follow the directions to create a data relationship using the data extensions listed in Step 1. These steps build these data relationships:

-   Order\_Details to MyContacts (linking CustomerID to SubscriberKey)
-   Products to Order\_Details (linking SKU to SKU)
-   Product\_Ratings to Products (linking SKU to SKU)

1.  Hover over Subscribers.
2.  Click **Data Relationships**.
3.  Click **Create**.
4.  Enter a name for the data relationship in the Name field. Enter the value you wish to use to access the data relationship via an API call in the External Key field.
5.  Enter a description of the data extension in the Description field as necessary.
6.  Choose the Order\_Details and MyContacts data extensions in the Select Object section drop-downs.
7.  Choose the CustomerID field for the Order\_Details data extension and the SubcriberKey field for the MyContacts data extension in the Select Field section.
8.  Click **Save**. Repeat steps 7 through 9, substituting the supplied data, to establish the other necessary data relationships:
    -   Products data extension (SKU field) to Order\_Details data extension (SKU field)
    -   Product\_Ratings data extension (SKU field) to Products data extension (SKU field)

## Create a Subscriber

Follow the instructions to create a subscriber in the [Create a Subscriber](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/gtlBasicPersonalization.htm) section or use the same subscriber created earlier.

## Create an Email Message

Follow the instructions to create a message in the [Create an Email](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/gtlBasicPersonalization.htm) and use the following template for your content:

Given this data content:

The email message renders as displayed:

![Screenshot of email created using Data Relationships](/docs/resources/img/en-us/noversion?doc_id=images%2FgtlDataRelationships.png&folder=mc-programmatic-content)

## Related Topics

- Create a Subscriber (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/gtlBasicPersonalization.htm)
- Create an Email (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/gtlBasicPersonalization.htm)
