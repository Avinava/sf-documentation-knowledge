---
title: "Game Zone UI Customization for Android"
domain: loyalty
topic: game-zone-ui-customization-for-android
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.848Z
estimatedTokens: 408
keywords: [Game, Zone, Customization, Android, build, Gamification, Mobile, SDK, customize, components, Spinner, Scratch, Card]
---

# Game Zone UI Customization for Android

> After you build the Gamification Mobile SDK for Android, you can customize the game
    zone UI components.

# Game Zone UI Customization for Android

After you build the Gamification Mobile SDK for Android, you can customize the game zone UI components.

## Spinner Customization

The game zone UI components are available in the /LoyaltyMobileSDK-Android/SampleApps/MyNTORewards/src/main/java/com/salesforce/loyalty/mobile/myntorewards/views/gamezone package.

Customize the spinner components, such as the wheel size, frame width and color, and more in the SpinnerConfiguration.kt file. Here are all the parameters you can modify.

```

```

For example, to change the spinner frame color to blue, open the /LoyaltyMobileSDK-Android/SampleApps/MyNTORewards/src/main/java/com/salesforce/loyalty/mobile/myntorewards/views/gamezone/spinner/SpinnerConfiguration.kt file in Android Studio, and change the value of val WHEEL\_FRAME\_COLOUR from SpinnerFrameColour to Color.Blue.

To increase the padding between two segments of the wheel, change the value of const val PADDING\_ANGLE\_BETWEEN\_WHEEL\_SEGMENT from 2f to 4f.

## Scratch Card Customization

You can customize the scratch card components, such as the box and canvas in the ScratchCanvasView.kt file.

For example, to change the scratch card background color to white, open the /LoyaltyMobileSDK-Android/SampleApps/MyNTORewards/src/main/java/com/salesforce/loyalty/mobile/myntorewards/views/gamezone/spinner/ScratchCanvasView.kt file in Android Studio, and inside the CanvasForScratching method, replace Box( modifier = modifier.background(VibrantPurple40).testTag(TEST\_TAG\_SCRATCH\_CARD) with Box( modifier = modifier.background(Color.White).testTag(TEST\_TAG\_SCRATCH\_CARD).

## Code Examples

```
class SpinnerConfiguration {

    companion object {
        //preferences
        val WHEEL_SIZE = 280.dp
        val WHEEL_FRAME_WIDTH = 4.dp
        val WHEEL_FRAME_COLOUR = SpinnerFrameColour
        val WHEEL_BORDER_WIDTH = 12.dp
        val WHEEL_SEGMENT_BACKGROUND = Color.White //same colour will apply on border
        const val START_DEGREE = 0f
        //spinner default loading position degree 30f represents when spinner will load it will be at 30 degree
        const val ROTATION_PER_SECOND = 3f
        const val PADDING_ANGLE_BETWEEN_WHEEL_SEGMENT = 2f //padding between two segments of wheel
        const val ROTATION_DURATION = 3000 // duration of wheel rotate after the API responds
        const val INITIAL_ROTATION_DURATION = 20000 // duration of wheel rotate till API responds
        const val WHEEL_TEXT_INITIAL_ROTATION = 0f // we can configure the orientation of text
        //based on this angle,we can make wheel content straight or with angle inside the wheel 
    }
}
```
