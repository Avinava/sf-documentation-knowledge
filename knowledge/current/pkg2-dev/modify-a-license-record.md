---
title: "Modify a License Record"
domain: pkg2-dev
topic: modify-a-license-record
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:26.181Z
estimatedTokens: 492
keywords: [Modify, License, Record, change, customer’s, access, offering, modifying, Management, App, LMA, increase, decrease, number, seats]
---

# Modify a License Record

> You can change a customer’s access to your offering by modifying a license record using
  the License Management App (LMA). For example, you can increase or decrease the number of seats
  included with a license or change the expiration date.

# Modify a License Record

You can change a customer’s access to your offering by modifying a license record using the License Management App (LMA). For example, you can increase or decrease the number of seats included with a license or change the expiration date.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=pkg2_dev)

#### Warning

You can't use the LMA to modify licenses provisioned through AppExchange Checkout. To modify licenses provisioned through Checkout, have your customers follow the instructions in [Add or Remove Licenses from an AppExchange Checkout Subscription](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/appexchange_checkout_update_seats.htm "HTML (New Window)").

1.  In the LMA, locate the license.
2.  Click **Modify License**.

    When the LMA is installed, the Edit button doesn’t appear on the license page layout, and the Modify License button is included instead. This setup is intentional. You must edit license records on the Modified License page, don't attempt to edit license records directly.

3.  Update the field values as needed.

    | Field | Description |
    | --- | --- |
    | Expiration | Enter the last day that the customer can access your package, or select Does not expire. |
    | Seats | Enter the number of licensed seats, or select Site License to make your package available to all users in the customer’s org. You can allocate up to 99,000,000 seats. |
    | Status | Select a value from the dropdown.Trial—Lets the customer try your offering for up to 90 days. After the trial license converts to an active license, it can’t return to a trial state.Active—Lets the customer use your package according to the license agreement.Suspended—Prohibits the customer from accessing your offering.NoteWhen your offering is uninstalled, its status is set to Uninstalled, and the license can’t be edited. |

4.  Click **Save**.
