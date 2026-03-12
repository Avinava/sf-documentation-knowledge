---
title: "AR SpaceCapture Example"
domain: field-service
topic: ar-spacecapture-example
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:53.834Z
estimatedTokens: 51
keywords: [SpaceCapture, component’s, HTML, template, minimal, includes, button, initiates, room, scan]
---

# AR SpaceCapture Example

> The component’s HTML template is minimal and includes a button that initiates the room
		scan.

# AR SpaceCapture Example

The component’s HTML template is minimal and includes a button that initiates the room scan.

```

```

This example uses AR SpaceCapture to let the user scan a room.

```

```

## Code Examples

```
<template>
  <div style="height: 100%; padding: 0px;margin: 0px;">
    <table class="rootTable" style="width: 100%; height: 100%; padding: 0px; border-spacing: 5px">
      <thead>
        <tr>
          <th colspan="3">
            <h1>AR SpaceCapture Demo</h1>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr style="height: 1px;">
          <td><input type="button" class="lightningButton" onclick={handleBeginScanRoomClick} value='Scan Room' style="width: 100%; height: 50px; border: none; color: white; background: #0072d9; border-radius: 6px; font-size: medium; white-space: normal; word-wrap: break-word;"/></td>
        </tr>
        <tr>
          <td colspan="3">
            <div lwc:ref="previewDivSummary" class="previewDivSummary" style="width: 100%; height: 100%; border: 1px solid #c3c3c3; border-radius: 6px;">
              Summary: <br>
              <div lwc:ref="outputDivSummary" id="outputDivSummary" style="margin: 10px;">Results will be shown here soon...</div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <div lwc:ref="previewDiv" class="previewDiv" style="width: 100%; height: 100%; border: 1px solid #c3c3c3; border-radius: 6px;">
              Full JSON: <br>
              <div lwc:ref="outputDiv" id="outputDiv" style="margin: 10px;">Results will be shown here soon...</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
```

```
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getARSpaceCapture } from 'lightning/mobileCapabilities';


export default class ArSpaceCaptureNew extends LightningElement {
	myARSpaceCaptureScanner;
	scanRoomDisabled = false;
	capturedRoomsData = '';


	// When the component is initialized, determine whether to enable the Scan Room button
	connectedCallback() {
		this.myARSpaceCaptureScanner = getARSpaceCapture();
		if (this.myARSpaceCaptureScanner?.isAvailable() != true) {
			this.scanRoomDisabled = true;
		}
	}


	handleBeginScanRoomClick() {
		// Reset capturedRoomsData to empty string before starting a new scan
		this.capturedRoomsData = '';


		// Make sure AR SpaceCapture is available before trying to use it.
		// Scan Room button also disabled when scanner unavailable
		if (this.myARSpaceCaptureScanner?.isAvailable()) {
			let options = {};


			// Starting the scanning process
			this.myARSpaceCaptureScanner.scanRoom(options)
				.then((results) => {
					try {
						this.refs.outputDiv.innerHTML = "";
					} catch (ex) {


					}


					const capturedRooms = results.capturedRooms ?? [];
					if (capturedRooms) {
						// Array of Rooms
						let summary = {};


						try {
							summary.isSuccess = results.isSuccess;
							summary.wallsCount = results.capturedRooms[0].walls.length;
							summary.floorsCount = results.capturedRooms[0].floors.length;
							summary.openingsCount = results.capturedRooms[0].openings.length;
							summary.doorsCount = results.capturedRooms[0].doors.length;
							summary.windowsCount = results.capturedRooms[0].windows.length;


							if (results.capturedRooms[0].floors.length > 0) {
								summary.roomSizeWidth = results.capturedRooms[0].floors[0].dimensions[0];
								summary.roomSizeHeight = results.capturedRooms[0].floors[0].dimensions[1];
								summary.roomVolume = summary.roomSizeWidth * summary.roomSizeHeight;
							}


							if (results.capturedRooms[0].openings.length > 0) {
								summary.openingSizeWidth = results.capturedRooms[0].openings[0].dimensions[0];
								summary.openingSizeHeight = results.capturedRooms[0].openings[0].dimensions[1];
								summary.openingVolume = summary.openingSizeWidth * summary.openingSizeHeight;
							}


							if (results.capturedRooms[0].doors.length > 0) {
								summary.doorSizeWidth = results.capturedRooms[0].doors[0].dimensions[0];
								summary.doorSizeHeight = results.capturedRooms[0].doors[0].dimensions[1];
								summary.openingVolume = summary.doorSizeWidth * summary.doorSizeHeight;
							}


							this.refs.outputDivSummary.innerHTML = "<pre><code>" + JSON.stringify(summary, undefined, 2) + "</code></pre>";
							this.refs.outputDiv.innerHTML = "<pre><code>" + JSON.stringify(results, undefined, 2) + "</code></pre>";
						} catch (ex) {
							this.refs.outputDivSummary.innerHTML = ex.code + "<br>" + ex.message;
						}
					} else {
// Single Room


					try {
							let summary = {};


							summary.isSuccess = results.isSuccess;
							summary.wallsCount = results.capturedRoom.walls.length;
							summary.floorsCount = results.capturedRoom.floors.length;
							summary.openingsCount = results.capturedRoom.openings.length;
							summary.doorsCount = results.capturedRoom.doors.length;
							summary.windowsCount = results.capturedRoom.windows.length;


							if (results.capturedRoom.floors.length > 0) {
								summary.roomSizeWidth = results.capturedRoom.floors[0].dimensions[0];
								summary.roomSizeHeight = results.capturedRoom.floors[0].dimensions[1];
								summary.roomVolume = summary.roomSizeWidth * summary.roomSizeHeight;
							}




							if (results.capturedRoom.openings.length > 0) {
								summary.openingSizeWidth = results.capturedRoom.openings[0].dimensions[0];
								summary.openingSizeHeight = results.capturedRoom.openings[0].dimensions[1];
								summary.openingVolume = summary.openingSizeWidth * summary.openingSizeHeight;
							}


							if (results.capturedRoom.doors.length > 0) {
								summary.doorSizeWidth = results.capturedRoom.doors[0].dimensions[0];
								summary.doorSizeHeight = results.capturedRoom.doors[0].dimensions[1];
								summary.doorVolume = summary.doorSizeWidth * summary.doorSizeHeight;
							}


							this.refs.outputDivSummary.innerHTML = "<pre><code>" + JSON.stringify(summary, undefined, 2) + "</code></pre>";
							this.refs.outputDiv.innerHTML = "<pre><code>" + JSON.stringify(results, undefined, 2) + "</code></pre>";
						} catch (ex) {
							this.refs.outputDivSummary.innerHTML = ex.code + "<br>" + ex.message;
						}
					}
				})
				.catch((error) => {
					// There was an error while scanning
					this.refs.outputDivSummary.innerHTML = error.code + "<br>" + error.message;
				})
				.finally({
					// Close capture process regardless of whether we completed successfully or had an error
					// this.myARSpaceCaptureScanner.dismiss();
				});
		} else {
			this.refs.outputDivSummary.innerHTML = 'AR SpaceCapture is not available on your device.';
		}
	}
}
```
