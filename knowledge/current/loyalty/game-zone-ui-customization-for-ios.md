---
title: "Game Zone UI Customization for iOS"
domain: loyalty
topic: game-zone-ui-customization-for-ios
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.860Z
estimatedTokens: 479
keywords: [Game, Zone, Customization, iOS, build, Gamification, Mobile, SDK, customize, components, Spinner, Scratch, Card]
---

# Game Zone UI Customization for iOS

> After you build the Gamification Mobile SDK for iOS, you can customize the game zone UI
    components.

# Game Zone UI Customization for iOS

After you build the Gamification Mobile SDK for iOS, you can customize the game zone UI components.

## Spinner Customization

The game zone UI components are available in the LoyaltyMobileSDK-iOS/SampleApps/MyNTORewards/MyNTORewards/GameZone package.

Customize the spinner components, such as the wheel size, frame width and color, wheel segments, spin button, and more in the FortuneWheelView.swift file. Here are all the parameters you can modify.

```

```

For example, to change the spin wheel outer frame width and height, open the LoyaltyMobileSDK-iOS/SampleApps/MyNTORewards/MyNTORewards/GameZone/Views/FortuneWheel/FortuneWheelView.swift file in Xcode, and replace Circle() frame(width: 316, height: 316) with Circle() frame(width: 300, height: 300).

```

```

To change the spin button background color to blue, open the LoyaltyMobileSDK-iOS/SampleApps/MyNTORewards/MyNTORewards/Misc/Color.swift file, and inside the ColorTheme structure, replace let wheelIndicatorBackground = Color("wheelIndicatorBackgroundColor") // #23475F with let wheelIndicatorBackground = Color.blue.

## Scratch Card Customization

You can customize the scratch card components, such as the box, canvas, wrapper text, and more in the ScratchCanvasView.kt file. Here are all the properties you can customize:

```

```

For example, to change the angle of the scratch card wrapper text inside the gray box, open the LoyaltyMobileSDK-iOS/SampleApps/MyNTORewards/MyNTORewards/GameZone/Views/ScrachCard/ScratchCardView.swift file in Xcode, and replace rotationEffect(Angle(degrees: -45)) with rotationEffect(Angle(degrees: -25)) . To change the number of times the text appears inside the gray box, replace Text(String(repeating: (StringConstants.Gamification.scratchCardLabel), count: 70)) with Text(String(repeating: (StringConstants.Gamification.scratchCardLabel), count: 50)) .

```

```

## Code Examples

```
VStack {
                HStack {
                    Button {
                        // Invalidating the timer to avoid unintended navigation because of the timer
                        timer?.invalidate()
                        isSpinning ? nil : dismiss()
                    } label: {
                        Image("ic-backarrow")
                    }
                    .padding(.leading, 20)
                    .padding(.bottom, 10)
                    .frame(width: 30, height: 30)
                    
                    Spacer()
                }
                ZStack {
                    Color.theme.accent
                    VStack {
                        VStack(spacing: 10) {
                            Text(gameDefinitionModel?.name ?? StringConstants.Gamification.spinaWheelHeaderLabel)
                                .font(.gameHeaderTitle)
                            
                            Text(gameDefinitionModel?.description ?? StringConstants.Gamification.spinaWheelSubHeaderLabel)
                                .font(.gameHeaderSubTitle)
                        }
                        .padding(30)
                        
                        Spacer()
                        ZStack {
                            // Fortune Wheel Segments
                            ZStack {
                                if let colors: [Color] = viewModel.getWheelColors(gameModel: gameDefinitionModel),
                                   let labels: [LocalizedStringKey] = gameDefinitionModel?.gameRewards.map({LocalizedStringKey($0.name)}) {
                                    ForEach(0..<colors.count, id: \.self) { index in
                                        let startAngle = (360.0 / Double(colors.count) * Double(index)) - 90.0
                                        let endAngle = (360.0 / Double(colors.count) * Double(index + 1)) - 90.0
                                        WheelSegment(startAngle: startAngle,
                                                     endAngle: endAngle,
                                                     color: colors[index],
                                                     label: labels[index])
                                    }
                                }
                            }
                            .overlay {
                                ZStack {
                                    Circle()
                                        .strokeBorder(Color.theme.fortuneWheelStrokeColor, lineWidth: 5)
                                        .frame(width: 316, height: 316)
                                    Circle()
                                        .strokeBorder(Color.theme.fortuneWheelSecondaryStrokeColor, lineWidth: 1)
                                        .frame(width: 307, height: 307)
                                }
                            }
                            .rotationEffect(Angle(degrees: rotationAngle))
                            .animation(isSpinning ? Animation.easeOut(duration: gameDefinitionModel?.timeoutDuration ?? 15)
                                .delay(0)
                                .repeatForever(autoreverses: false) : .default, value: isSpinning)
                            
                            // Triangle Arrow Indicator
                            ZStack {
                                Triangle()
                                    .fill(Color.white)
                                    .frame(width: 70, height: 70)  // Increase these dimensions by the stroke width
                                    .offset(y: -40)
                                
                                Triangle()
                                    .fill(Color.theme.wheelIndicatorBackground)
                                    .frame(width: 60, height: 60)
                                    .offset(y: -35)
                            }
                            
                            // Spin Button
                            Button {
                                playGame()
                            } label: {
                                userStartedSpinning ?
                                Text(StringConstants.Gamification.tapSpinButtonLabel).foregroundColor(Color.theme.wheelIndicatorBackground) :
                                Text(StringConstants.Gamification.tapSpinButtonLabel).foregroundColor(.white)
                                
                            }
                            .frame(width: 70, height: 70)
                            .background(Color.theme.wheelIndicatorBackground)
                            .clipShape(Circle())
                            .overlay(Circle().stroke(Color.white, lineWidth: 5))
                            .disabled(userStartedSpinning)  // Disable the button when spinning
                            
                        }
                        .frame(width: 300, height: 300)
                        
                        Spacer()
                        
                        VStack(spacing: 20) {
                            Text((StringConstants.Gamification.tapSpinaWheeltoPlayLabel))
                                .font(.gameDescTitle)
                            Text(StringConstants.Gamification.spinaWheelBodyLabel)
                                .font(.gameDescText)
                                .multilineTextAlignment(.center)
                                .frame(width: 258)
                        }
                        Spacer()
                    }
                    .foregroundColor(.white)
                }
                .cornerRadius(15, corners: [.topLeft, .topRight])
                .edgesIgnoringSafeArea(.bottom)
                .fullScreenCover(isPresented: $showAlertForError) {
                    Spacer()
                    ProcessingErrorView(message: "Oops! Something went wrong while processing the request. Try again.")
                    Spacer()
                    Button {
                        timer?.invalidate()
                        isSpinning ? nil : dismiss()
                    } label: {
                        Text(StringConstants.Receipts.tryAgainButton)
                            .frame(maxWidth: .infinity)
                    }
                    .buttonStyle(.borderedProminent)
                    .longFlexibleButtonStyle()
                }
            }
        }
```

```
overlay {
                                ZStack {
                                    Circle()
                                        .strokeBorder(Color.theme.fortuneWheelStrokeColor, lineWidth: 5)
                                        .frame(width: 316, height: 316)
                                    Circle()
                                        .strokeBorder(Color.theme.fortuneWheelSecondaryStrokeColor, lineWidth: 1)
                                        .frame(width: 307, height: 307)
                                }
                            }
```

```apex
private var backButton: some View {
        HStack {
            Button {
                // Invalidating the timer to avoid unintended navigation because of the timer
                timer?.invalidate()
                dismiss()
            } label: {
                Image("ic-backarrow")
            }
            .padding(.leading, 20)
            .padding(.bottom, 10)
            .frame(width: 30, height: 30)
            
            Spacer()
        }
    }
    
    private var titleView: some View {
        VStack(spacing: 10) {
            Text(gameDefinitionModel?.name ?? StringConstants.Gamification.scratchCardTitleLabel)
                .font(.gameHeaderTitle)
            Text(gameDefinitionModel?.description ?? StringConstants.Gamification.scratchCardSubTitleLabel)
                .font(.gameHeaderSubTitle)
        }
        .padding(30)
    }
    
    private var loadingView: some View {
        Text("Loading...")
            .foregroundStyle(.white)
            .font(.system(size: 24))
            .fontWeight(.bold)
            .frame(width: cardSize.width, height: cardSize.height)
            .background(Color.theme.accent)
    }
    
    private var rewardText: some View {
        Text(playGameViewModel.playedGameRewards?.first?.name ?? "--")
            .font(.largeTitle)
            .bold()
            .foregroundStyle(.white)
            .frame(width: cardSize.width, height: cardSize.height)
            .background(Color.theme.accent)
            .zIndex(finishedScratching ? 10 : 0)
    }
    
    private var scratchCardWrapperText: some View {
        Text(String(repeating: (StringConstants.Gamification.scratchCardLabel), count: 70))
            .font(Font.scratchText)
            .multilineTextAlignment(.center)
            .foregroundColor(Color.theme.scratchCardText)
            .rotationEffect(Angle(degrees: -45))
            .mask {
                Rectangle()
                    .frame(width: cardSize.width, height: cardSize.height)
                    .cornerRadius(10)
                    .opacity(finishedScratching ? 0 : 1)
            }
            .opacity(finishedScratching ? 0 : 1)
    }
    
    private var scratchCardContentView: some View {
        ZStack {
            // Purple background with postage stamp border
            DottedBorderRectangle(width: backgroundSize.width,
                                  height: backgroundSize.height,
                                  color: Color.theme.accent)
            
            // Grey scratch card
            Rectangle()
                .fill(Color.theme.scratchCardBackground)
                .frame(width: cardSize.width, height: cardSize.height)
                .cornerRadius(10)
                .opacity(finishedScratching ? 0 : 1)
            
            // Text overlay
            scratchCardWrapperText
        }
    }
    
    private var scratchCardGame: some View {
        ScratchCardGame(cursorSize: 30, cardSize: cardSize, gameModel: gameDefinitionModel, onFinish: $finishedScratching) {
            scratchCardContentView
        } overlayView: {
            // Reward text
            switch playGameViewModel.state {
            case .loaded:
                rewardText
            default:
                loadingView
            }
        }
        .animation(.linear(duration: 0.5), value: playGameViewModel.state)
        .environmentObject(playGameViewModel)
    }
    
    private var descriptionView: some View {
        VStack(spacing: 20) {
            Text((StringConstants.Gamification.scratchCardBodyLabel))
                .font(.gameDescText)
                .multilineTextAlignment(.center)
                .frame(width: 258)
        }
    }
}
```

```apex
private var scratchCardWrapperText: some View {
        Text(String(repeating: (StringConstants.Gamification.scratchCardLabel), count: 50))
            .font(Font.scratchText)
            .multilineTextAlignment(.center)
            .foregroundColor(Color.theme.scratchCardText)
            .rotationEffect(Angle(degrees: -25))
            .mask {
                Rectangle()
                    .frame(width: cardSize.width, height: cardSize.height)
                    .cornerRadius(10)
                    .opacity(finishedScratching ? 0 : 1)
            }
            .opacity(finishedScratching ? 0 : 1)
    }
```
