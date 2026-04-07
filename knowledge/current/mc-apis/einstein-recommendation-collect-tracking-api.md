---
title: "Einstein Recommendation Collect Tracking API"
domain: mc-apis
topic: einstein-recommendation-collect-tracking-api
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:18.073Z
estimatedTokens: 2042
keywords: [Einstein, Recommendation, Collect, API, implemented, server, side, option, implementation, HTTP, POST, call, appropriate, URL, corresponding, payload, Definitions, MID, title, referrer, email, user, _id, session, Item, Detail, View, Additional, Real-Time, Rating, Cart, quantity, price, Clear, _cart, Conversion, order, _number, shipping, discount, Search, Category]
---

> Einstein Recommendation Collect Tracking calls are available to be implemented with a server side option.  To use these implementation methods, make an HTTP POST call to the appropriate URL, with the corresponding payload parameter values.

# Einstein Recommendation Collect Tracking API

## Overview

Einstein Recommendation Collect Tracking calls are available to be implemented with a server side option. To use these implementation methods, make an HTTP POST call to the appropriate URL, with the corresponding payload parameter values.

In order to manage session and user values you will need to send user\_id and session\_id on the same node level as the payload. On the first call, you don't need to pass these values and they are returned in the JSON response.

See the parameter definitions and example URLs below.

NOTE: All calls must be sent with Content-Type: application/json.

Below is a sample of the minimum requirement to implement an observation script, also referred to as “Collect".

```
http://MID.collect.igodigital.com/c2/MID/track_page_view.json
{
    "payload": {
        "title": "INSERT_PAGE_TITLE",
        "url": "INSERT_PAGE_URL",
        "referrer": "INSERT_REFERRER_URL",
        "user_info": {
            "email": "INSERT_EMAIL_OR_SUBSCRIBER_ID"
        }
    },
    "user_id": "",
    "session_id": ""
}
```

### Parameter Definitions

#### MID

A unique client identifier, typically the MID associated with the Marketing Cloud Business Unit.

#### title:

The title of the page the user is viewing. This is pulled from the page title with web applications.

#### url:

The url or path to the application page.

#### referrer:

The previous page or referring url for the application.

#### email:

Any page where the user’s email address (or other identifier) is known to the site, this value should be sent. The users email address should be sent on the following pages and any others where the users email address is known: Newsletter signup, login, account overview, cart, checkout, purchase confirmation, order history.

#### user\_id:

The user\_id value returned from the first Collect API call for an individual user. This value should be persisted for all future API calls for that individual.

NOTE: If you are unable to persist this value for future sessions, a new profile may will be created along with the new session. Duplicate records sharing the same email will be merged at the end of the session.

#### session\_id:

The session\_id value returned from the first Collect API call for the user’s current session. This value should be persisted for all API calls in an individual’s session.

## Item Detail View Collect Example

The following sample implements an observation script to track a specific item detail page view.

```
http://MID.collect.igodigital.com/c2/MID/track_page_view.json
{
    "payload": {
        "item": "INSERT_ITEM",
        "user_info": {
            "email": "INSERT_EMAIL_OR_SUBSCRIBER_ID"
        },
    "user_id": "",
    "session_id": ""
    }
}
```

### Additional Parameter Definitions

#### item:

Represents the item that is being displayed to the customer, such as on an item detail page.

## Real-Time Rating Collect Example

The following sample implements an observation script to track when a user submits a rating for a specific item, using the minimum requirements.

```
http://MID.collect.igodigital.com/c2/MID/track_rating.json?
{
    "payload": {
        "item": "INSERT_ITEM",
        "rating": "INSERT_ITEM_RATING",
        "user_info": {
            "email": "INSERT_EMAIL_OR_SUBSCRIBER_ID"
        }
    },
    "user_id": "",
    "session_id": ""
}
```

### Additional Parameter Definitions

#### rating:

This variable should be populated with a numerical representation of the rating submitted by the user, only when the user has actually rated the item. The item value must be passed in within the same call in order for the rating to be properly recorded.

## Cart Collect Example

The following sample implements an observation script to track a snapshot of all items in the user’s cart.

```
http://MID.collect.igodigital.com/c2/MID/track_cart.json?
{
    "payload": {
        "cart": [
{
                  "item": "INSERT_ITEM",
                  "quantity": "INSERT_QUANTITY",
                  "price": "INSERT_ITEM_PRICE",
             "unique_id": "INSERT_UNIQUE_ID"
},
{
                  "item": "INSERT_ITEM",
                  "quantity": "INSERT_QUANTITY",
                  "price": "INSERT_ITEM_PRICE",
                  "unique_id": "INSERT_UNIQUE_ID"
}
          ],
        "user_info": {
            "email": "INSERT_EMAIL_OR_SUBSCRIBER_ID"
        }
    },
    "user_id": "",
    "session_id": ""
}
```

### Additional Parameter Definitions

#### item:

This variable should be sent with an identifier of the item that is in the user’s cart.

#### quantity:

This variable should contain the quantities of each corresponding item in the.

#### price:

This variable should contain the unit price for each corresponding cart item. Even if the customer is purchasing multiples of an item this variable should still be sent with the unit price.

## Clear Cart Collect Example

The following sample implements an observation script to indicate that the user has emptied their shopping cart.

```
http://MID.collect.igodigital.com/c2/MID/track_cart.json?
{
    "payload": {
        "cart": {"clear_cart": true},
        "user_info": {
            "email": "INSERT_EMAIL_OR_SUBSCRIBER_ID"
        }
    },
    "user_id": "",
    "session_id": ""
}
```

### Additional Parameter Definitions

#### clear\_cart:

When true, indicates that the user has removed all items from their shopping cart.

## Conversion Collect Example

The following sample implements an observation script to track a conversion event.

```
http://MID.collect.igodigital.com/c2/MID/track_conversion.json?
{
    "payload": {
        "cart": [
{
                  "item": "INSERT_ITEM",
                  "quantity": "INSERT_QUANTITY",
                  "price": "INSERT_ITEM_PRICE"
},
{
                  "item": "INSERT_ITEM",
                  "quantity": "INSERT_QUANTITY",
                  "price": "INSERT_ITEM_PRICE"
}
          ],
        "user_info": {
            "email": "INSERT_EMAIL_OR_SUBSCRIBER_ID"
        },
        "order_number": "INSERT_ORDER_NUMBER",
        "shipping": "INSERT_SHIPPING_CHARGE",
        "discount": "INSERT_DISCOUNT_AMOUNT"
    },
    "user_id": "",
    "session_id": ""
}
```

### Additional Parameter Definitions

#### order\_number:

This is a value that should contain the customer’s order number once a conversion event occurs.

#### shipping:

This optional variable may be sent with the shipping charge associated with the user’s order.

#### discount:

This optional variable may be sent with the discount amount that was applied to the user’s order.

## Search Collect Example

The following sample implements an observation script to track a specific item detail page view.

```
http://MID.collect.igodigital.com/c2/MID/track_page_view.json?
{
    "payload": {
        "search": "INSERT_SEARCH_TERM",
        "title": "INSERT_PAGE_TITLE",
        "url": "INSERT_PAGE_URL",
        "referrer": "INSERT_REFERRER_URL",
        "user_info": {
            "email": "INSERT_EMAIL_OR_SUBSCRIBER_ID"
        }
    },
    "user_id": "",
    "session_id": ""
}
```

### Additional Parameter Definitions

#### search:

This variable is used to hold search terms. This variable should be populated with internal and external search terms (for example, from Google) when available. Example: search=Blue Sky

## Category Page Collect Example

The following sample implements an observation script to track a specific item detail page view.

```
http://MID.collect.igodigital.com/c2/MID/track_page_view.json?
{
    "payload": {
        "category": "INSERT_CATEGORY_NAME",
        "title": "INSERT_PAGE_TITLE",
        "url": "INSERT_PAGE_URL",
        "referrer": "INSERT_REFERRER_URL",
        "user_info": {
            "email": "INSERT_EMAIL_OR_SUBSCRIBER_ID"
        }
    },
    "user_id": "",
    "session_id": ""
}
```

### Additional Parameter Definitions

#### category:

This variable should be sent on each category and subcategory page.

### Example Response

```
{
user_id: "5fb6fd46-7fd6-11e4-93db-123139337486"
session_id: "5fb70c14-7fd6-11e4-93db-123139337486"
}
```
