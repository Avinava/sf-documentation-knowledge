---
title: "Shifty the Bot - Manage Your Workforce Through SMS Bot Interactions"
domain: workforce-engagement
topic: shifty-the-bot---manage-your-workforce-through-sms-bot-interactions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.665Z
estimatedTokens: 637
keywords: [Shifty, Bot, Manage, Workforce, SMS, Interactions, agents, aren't, work, they, don't, always, access, their, schedule]
---

# Shifty the Bot - Manage Your Workforce Through SMS Bot Interactions

> When your agents aren't at work, they don't always have access to
      their schedule in Salesforce. With SMS bots you can update a schedule without needing to
      access Salesforce.

# Shifty the Bot - Manage Your Workforce Through SMS Bot Interactions

When your agents aren't at work, they don't always have access to their schedule in Salesforce. With SMS bots you can update a schedule without needing to access Salesforce.

| Ease of Implementation | Easy |
| --- | --- |
| Estimated Time to Implement | 15 minutes |

## Prerequisites

-   Digital Engagement Licenses
-   SMS Messaging Setup [(Get Started)](https://help.salesforce.com/s/articleView?id=service.livemessage_intro.htm&type=5&language=en_US)
-   User phone numbers must be in a User Record to be recognized by Shifty

## Step 1: Turn on Einstein Bots

To install the package, turn on bots.

1.  From Setup, in the Quick Find box, enter Einstein Bots, and then select **Einstein Bots**.

![Einstein Bots new setup window](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Feinstein_bots_turn_on.png&folder=workforce_engagement)

## Step 2: Install Package

Install Shifty the bot in Salesforce.

1.  Go to the following link: [https://login.salesforce.com/packaging/installPackage.apexp?p0=04t5e000000W0ao](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t5e000000W0ao)
2.  Log in as a Salesforce Admin.
3.  Select **Install for Admins only**.

![Install options for Shifty the Bot](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Finstall_shifty_the_bot.png&folder=workforce_engagement)

## Step 3: Deploy Shifty the Bot to Your SMS Channel.

To allow users to start interacting with Shifty, deploy your bot to SMS.

1.  From the Bot Builder menu, click Overview.

    ![Einstein Bot Builder options](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fshifty_overview_menu.png&folder=workforce_engagement)

2.  In the Connections section, click **Add**.

    ![Shift overview connections section with options to add](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fshifty_add_connections_screen.png&folder=workforce_engagement)

3.  Select the channel and search for the deployment for your bot.
4.  To find your SMS Channel name, from Setup, in the Quick Find box, enter Messaging Settings, and then select **Message Settings**.

## Test This Example

To test this example: Text from a phone number that has an associated user record. Shifty answers and offers options.

![Text message example with message from Shifty the bot](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fshifty_text_message_test.png&folder=workforce_engagement)
