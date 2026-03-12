---
title: "Retail Order LWC"
domain: retail-api
topic: retail-order-lwc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.213Z
estimatedTokens: 1080
namespace: The
keywords: [Retail, Order, LWC, Access, data, layer, orderExtensionUtils, service, component, getOrderData, updateOrderData, getOrderItemData, updateOrderItemData, setCustomState, getIsOrderInEditMode]
---

# Retail Order LWC

> Access the RE order data in the LWC layer using the orderExtensionUtils service component.

**Namespace:** `The`

# Retail Order LWC

Access the RE order data in the LWC layer using the orderExtensionUtils service component.

## Namespace

The orderExtensionUtils LWC exposes events and methods to get the order state and extract data from the order, and push new data to the order.

```

```

## Supported Methods

Here are all the available methods in the orderExtensionUtils service component. You can import these methods in your custom LWC.

## getOrderData

Get the order data.

API Version

59.0

Signature

getOrderData(recordId)

Example

```

```

## updateOrderData

Update the managed packaged Order sObject (Order\_\_c) fields.

API Version

59.0

Signature

updateOrderData(recordId, srcThisRef, fieldApiName, value)

Example

```

```

## getOrderItemData

Get the order item data.

API Version

59.0

Signature

getOrderItemData(recordId)

Example

```

```

## updateOrderItemData

Update the managed packaged Order Item sObject (Order\_Item\_\_c) fields.

API Version

59.0

Signature

updateOrderItemData(recordId, srcThisRef, itemId, fieldApiName, value)

Example

```

```

## setCustomState

Sets a custom state for the order that is saved. Using the custom state, you can set up additional data to be saved along the order data in the same transaction as the order. This custom state gets forwarded to the Apex class that handles order save customizations.

API Version

59.0

Signature

setCustomState(recordId, customState)

Example

```

```

## getIsOrderInEditMode

Check if the order is in the edit mode or read-only mode. Use this method to render custom LWC components in the read-only or edit mode.

API Version

59.0

Signature

getIsOrderInEditMode()

Example

```

```

## registerListenerForOrderDataUpdates

Listen for the order data changes. Register a callback method, which gets invoked when an order field changes.

API Version

59.0

Signature

registerListenerForOrderDataUpdates(recordId, thisRef, callback)

Example

```

```

## registerOrderDataInlineValidator

Validate the order data changes. Register a callback method, which gets invoked when an order field changes. The method returns an error message if any validation fails.

API Version

59.0

Signature

registerOrderDataInlineValidator(recordId, thisRef, callback)

Example

```

```

## registerListenerForOrderItemDataUpdates

Listen for the order item data changes. Register a callback method, which gets invoked whenever any order item field changes.

API Version

59.0

Signature

registerListenerForOrderItemDataUpdates(recordId, thisRef, callback)

Example

```

```

## registerOrderItemDataInlineValidator

Validate the order item data changes. Register a callback method, which gets invoked whenever any order item field changes. The method returns an error message if any validation fails.

API Version

59.0

Signature

registerOrderItemDataInlineValidator(recordId, thisRef, callback)

Example

```

```

## registerBeforeAddItemActionHandler

Register callbacks before adding items.

API Version

59.0

Signature

registerBeforeAddItemActionHandler(recordId, thisRef, callback)

Example

```

```

## registerBeforeSaveActionHandler

Register a callback before the save action.

API Version

59.0

Signature

registerBeforeSaveActionHandler(recordId, thisRef, callback)

Example

```

```

## registerListenerForEnablingOrDisablingEditMode

Register a callback for the edit action. Render the custom LWC component in the read-only or edit mode.

API Version

59.0

Signature

registerListenerForEnablingOrDisablingEditMode(recordId, thisRef, callback)

Example

```

```

orderExtensionUtils Component Example

```

```

If your org has [Lightning Web Security](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.security_lwsec_intro) enabled, the runtimeNamespace property on the metadata file isn’t required.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

Lightning web security is a feature that must be tested before enabling. [LWC Security](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.security_lwsec_when)

When setting the runtimeNamespace property in the metadata file, your component can’t use modules from the @salesforce package (any import whose route starts with @salesforce).

## Code Examples

```
import { LightningElement, api } from 'lwc';
import { getOrderData } from 'cgcloud/orderExtensionUtils';

export default class CustomComponent extends LightningElement {
  @api recordId;
  initialOrderData = {};

  connectedCallback() {
    getOrderData(this.recordId).then((data) => {
      this.initialOrderData = data;
    });
  }
}
```

```
import { LightningElement, api } from 'lwc';
import { getOrderData, updateOrderData } from 'cgcloud/orderExtensionUtils';

export default class CustomComponent extends LightningElement {
  @api recordId;
  initialOrderData = {};

  connectedCallback() {
    getOrderData(this.recordId).then((data) => {
      this.initialOrderData = data;
    });
  }

  // You can invoke this method with the click of a button
  updateOrderFieldValue() {
    const fieldName = 'cgcloud__Delivery_Note__c';
    const newValue = 'test-note';

    updateOrderData(this.recordId, this, fieldName, newValue);
  }
}
```

```
import { LightningElement, api } from 'lwc';
import { getOrderItemData } from 'cgcloud/orderExtensionUtils';

export default class CustomComponent extends LightningElement {
  @api recordId;
  initialOrderItemsData = [];

  connectedCallback() {
    getOrderItemData(this.recordId).then((data) => {
      this.initialOrderItemsData = data;
    });
  }
}
```

```
import { LightningElement, api } from 'lwc';
import { getOrderItemData, updateOrderItemData } from 'cgcloud/orderExtensionUtils';

export default class CustomComponent extends LightningElement {
  @api recordId;
  initialOrderItemsData = [];

  connectedCallback() {
    getOrderItemData(this.recordId).then((data) => {
      this.initialOrderItemsData = data;
    });
  }

  updateOrderItemFieldData() {
    const orderItemId = this.initialOrderItemsData[0].Id;
    const fieldName = 'cgcloud__Discount__c';
    const value = 9;

    updateOrderItemData(this.recordId, this, orderItemId, fieldName, value);
  }
}
```

```
import { LightningElement, api } from 'lwc';
import { setCustomState } from 'cgcloud/orderExtensionUtils';

export default class CustomComponent extends LightningElement {
  @api recordId;

  connectedCallback() {}

  setOrderCustomState() {
    setCustomState(this.recordId, {
      customProp: 'Test'
    });
  }
}
```
