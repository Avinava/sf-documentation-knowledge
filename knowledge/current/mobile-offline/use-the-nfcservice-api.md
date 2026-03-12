---
title: "Use the NFCService API"
domain: mobile-offline
topic: use-the-nfcservice-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.144Z
estimatedTokens: 661
keywords: [NFCService, API, develop, Lightning, web, component, capable, interacting, NFCs, Add, Test, Availability, NFC, Tag, Erase]
---

# Use the NFCService API

> To develop a Lightning web component capable of interacting with NFCs, use the
        NFCService API.

# Use the NFCService API

To develop a Lightning web component capable of interacting with NFCs, use the NFCService API.

1.  Import NFCService into your component definition to make the NFCService API functions available to your code.
2.  Test to make sure NFCService is available before you call NFC-related functions.
3.  Use the feature functions to perform NFC-related operations.

For complete API reference documentation of the NFCService API, see NFCService API in the Lightning Web Components Developer Guide.

## Add NFCService to a Lightning Web Component

In your component’s JavaScript file, import NFCService using the standard JavaScript import statement. Specifically, import the getNFCService() factory function from the lightning/mobileCapabilities module, like so:

```

```

After it’s imported into your component, use the factory function to get an instance of NFCService. With your NFCService instance, use the utility functions and constants to verify availability. Then use NFC-related functions to perform the associated functionality.

## Test NFCService Availability

NFCService depends on physical device hardware and platform features. A component that uses NFCService renders without errors on a desktop computer or in a mobile browser, but NFC scanning functions fail. To avoid these errors, test if NFCService functionality is available before you use it.

```

```

## Read an NFC Tag

Perform NFC read operations with read(). First, call the read() function, optionally passing in an NFCServiceOptions object as a parameter. Then, handle the result of the operation in any manner you wish.

For example:

```

```

## Erase an NFC Tag

Perform NFC erase operations with erase(). First, call the erase() function, optionally passing in an NFCServiceOptions object as a parameter. Then, handle the result of the operation in any manner you wish.

For example:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

The erase() function can only be performed on writable NFC tags. Attempting this function on a read-only NFC tag results in an error.

## Write to an NFC Tag

Perform NFC write operations with write(). First, call the write() function, optionally passing in an NFCServiceOptions object as a parameter. Then, handle the result of the operation in any manner you wish.

For example:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

The write() function can only be performed on writable NFC tags. Attempting this function on a read-only NFC tag will result in an error.

## Code Examples

```
import { getNFCService } from 'lightning/mobileCapabilities';
```

```
handleBeginNFCEventClick(event) {
    const myNFCService = getNFCService();
    if(myNFCService.isAvailable()) {
        // Perform NFC-related operations
    }
    else {
        // NFCService not available, or consuming app hasn’t implemented it         
        // Not running on hardware with NFC capabilities
        // Handle with message, error, beep, and so on
    }
}
```

```
myNFCService
  .read(options)
  .then((result) => {
    // Do something with the result of the read operation
    console.log(result);
    this.readResult = result.value;
  })
  .catch((error) => {
    // Handle cancellation and read errors here
    console.error(error);
  });
```

```
myNFCService
  .erase(options)
  .then((successMessage) => {
    // Receive a success message following a successful erase operation
    console.log(successMessage);
  })
  .catch((error) => {
    // Handle cancellation and erase errors here
    console.error(error);
  });
```

```
myNFCService
  .write(options)
  .then((successMessage) => {
    // Receive a success message following a successful write operation
    console.log(successMessage);
  })
  .catch((error) => {
    // Handle cancellation and write errors here
    console.error(error);
  });
```
