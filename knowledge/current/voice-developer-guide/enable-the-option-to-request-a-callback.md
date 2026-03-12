---
title: "Enable the Option to Request a Callback"
domain: voice-developer-guide
topic: enable-the-option-to-request-a-callback
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.551Z
estimatedTokens: 1468
keywords: [Enable, Option, Callback, how, rep-first, inbound, contact, flow, interactive, voice, IVR, prompts, customer, leave, phone]
---

# Enable the Option to Request a Callback

> This example shows how to set up a rep-first callback in your
      inbound contact flow. The contact flow defines the interactive voice response (IVR) and
      prompts the customer to leave a phone number for a callback.

# Enable the Option to Request a Callback

This example shows how to set up a rep-first callback in your inbound contact flow. The contact flow defines the interactive voice response (IVR) and prompts the customer to leave a phone number for a callback.

| Ease of Implementation | Medium |
| --- | --- |
| Estimated Time to Implement | 30 minutes |

The IVR looks at how long the last person in the queue has been waiting. The wait time is five minutes by default. If the wait time is greater than the specified time, the IVR asks if the caller wants to continue waiting or to request a callback.

If the caller opts for the callback, the IVR asks the caller to enter a phone number.

When a rep becomes available, the callback request is pushed to the rep in the Omni-Channel utility. If the rep accepts the callback request, the phone number is automatically dialed.

## Prerequisites

If your contact center was created before the Spring ’21 release, download the updated [Sample SCV Inbound Flow](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Inbound%20Flow) contact flow from the [Service Cloud Voice repo on Github](https://github.com/service-cloud-voice/examples-from-doc). Import it into Amazon Connect.

If your contact center was created after the Spring ’21 release, then it already contains the Sample SCV Inbound Flow, so you can skip the first step.

To implement this use case, you need either the AWS root user or AWS administrator credentials.

## Step 1: Import the Contact Flow into Amazon Connect

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

#### Note

This step is only necessary if your contact center was created before the Spring ’21 release. In contact centers created in Spring ’21 and later, this contact flow is automatically installed, so you can skip this step.

1.  Log in to your Amazon Connect instance.
2.  Hover over **Routing**, then click **Contact flows**.
3.  Click **Create contact flow**.
4.  Click the down arrow next to **Save** in the top-right corner.
5.  Click **Import flow (beta)**.
6.  Click **Select**. In the file browser, select the Sample SCV Inbound Flow file from your downloads folder.
7.  Click **Import**. The contact flow is imported and opens in a window where you can edit it. Next, modify the contact attribute blocks.

## Step 2: Modify the Contact Flow Blocks

1.  Log in to your Amazon Connect instance.
2.  Hover over **Routing**, then click **Contact flows**.
3.  Select the **Sample SCV Inbound Flow** contact flow.
4.  Optionally modify the following blocks. To modify a block, select the block, edit the settings, and save your work.
    1.  The Check queue status block tells the system to check how long the last person in the queue has been waiting (item 1 in screenshot). You can modify the time; for example, you can make it shorter or longer.
    2.  The Get customer input block tells the system to play a prompt. The prompt asks the customer to press 1 to remain in the queue, or to press 2 to request a callback (item 2 in screenshot). You can modify the prompt’s wording.
    3.  The Store customer input block asks the customer to enter a phone number for the callback (item 3 in screenshot).
    4.  The Transfer to queue block adds the callback request to the callback queue so callbacks are pushed to available reps (item 4 in screenshot). There are three settings that you can customize:
        -   *Initial delay:* The initial delay is the minimum amount of time after the first call ends before the system attempts the callback. By default, the delay is 60 seconds.
        -   *Max number of retries:* If the customer doesn’t answer when the rep calls back, the callback request goes back in the queue and the system attempts to make another callback.

            ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

            #### Note

            If a callback gets voicemail, Amazon Connect treats it as a completed callback and doesn’t retry the call.

        -   *Minimum time between attempts:* If the customer doesn't answer the phone, this setting is how long the system waits before trying again.

![Contact flow for callbacks](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_example_queued_callback_cropped.png&folder=voice_developer_guide)

## Step 3: Publish the Contact Flow

1.  To make the contact flow active, click **Publish**.

## Test This Example

To test this example, you need two phones.

1.  Log in to Salesforce, open the Omni-Channel utility, and log in to Voice.
2.  Call your contact center with one phone. The call appears in the Call Controls tab in the Omni-Channel utility.
3.  Don’t accept the call, and make sure that another rep doesn’t accept it. Stay on the line and wait in the queue for at least five minutes, or for however long you specified in the contact attribute block.
4.  Use the second phone to call your contact center. If the first caller is waiting for at least five minutes, then callback prompt is played for the second caller.
5.  To select the callback option, press 2 and enter your phone number, and then hang up.

The callback request is pushed to the next available rep. When the rep accepts the call, the outbound call is dialed and your phone rings.

#### See Also

-   [*Amazon Connect Administrator Guide:* Set up queued callback](https://docs.aws.amazon.com/connect/latest/adminguide/setup-queued-callback.html "Amazon Connect Administrator Guide: Set up queued callback - HTML (New Window)")

-   [*Amazon Connect Administrator Guide:* About queued callbacks in metrics](https://docs.aws.amazon.com/connect/latest/adminguide/about-queued-callbacks.html "Amazon Connect Administrator Guide: About queued callbacks in
    metrics - HTML (New Window)")
