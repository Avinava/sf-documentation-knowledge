---
title: "Test Harness Drafts Tab"
domain: mobile-offline
topic: test-harness-drafts-tab
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.511Z
estimatedTokens: 607
keywords: [Test, Harness, Drafts, Tab, app, developer-centric, tool, controlling, examining, contents, Offline, Queue, including, you’ve, created]
---

# Test Harness Drafts Tab

> The Drafts tab of the Test Harness app is a developer-centric tool for controlling and
  examining the contents of the Offline Queue, including drafts you’ve created while
  offline.

# Test Harness Drafts Tab

The Drafts tab of the Test Harness app is a developer-centric tool for controlling and examining the contents of the Offline Queue, including drafts you’ve created while offline.

The **Drafts** tab displays the **Draft Control** card at the top, and then a list of the drafts currently in the Offline Queue. Tap a draft item to see the JSON data representation of the draft.

![Drafts tab of the Test Harness app, showing Offline Queue management tools, and the contents of the queue](/docs/resources/img/en-us/260.0?doc_id=images%2Fdx_harness_drafts_tab.png&folder=mobile_offline) ![Draft item view showing the JSON representation of a draft operation](/docs/resources/img/en-us/260.0?doc_id=images%2Fdx_harness_draft_item.png&folder=mobile_offline)

**Draft Control**. As a result, you can perform actions when online, such as creating or editing a record, and give you a chance to inspect the results before they’re uploaded to the Salesforce service. With the **Draft Control** card, you can only start and stop the queue and see how many drafts are waiting in the queue.

The Test Harness app starts with the Offline Queue in a paused state. Drafts that you create while the queue is paused wait in the Offline Queue until you tap **Start Queue**. When the queue is running, the button label changes to **Stop Queue**. If an error occurs while uploading a draft, the queue is paused automatically. Once the queue is empty, it returns to a paused state.

Draft records in the Offline Queue are listed in the order they were created. They are local-only data, until you start the Offline Queue to upload the draft records to the Salesforce service.

Each item in the list can be more correctly described as representing a draft operation, or instructions for applying changes, either to create a new record or modify an existing one. The representation therefore includes details of what the operation is, and data for the record before and after the operation is applied.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

Documentation regarding the format and interpretation of draft records is forthcoming.

The **Edit** menu allows you to **Copy** the JSON representation of the draft into your clipboard. Copying can be useful for pasting into a code editor for detailed examination. You can also **Delete** the draft from the queue.
