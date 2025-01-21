# Process Documentation

Digital Relic and Mouse & the Billionaire back at it again!

## Initial Brainstorming | 01.20.25

Question: how can we take some of the ideas from [LTHC](www.mouseandthebillionaire.com/lthc/) and create an experience that is:
- collaborative
- slightly more puzzly/playful
- still reflective/contemplative and musical

Ideas:
- two smaller controller boxes that are facing each other
- a transparent screen between the two players with shared information
- some sort of hidden information. Perhaps by the physical nature of the transparency of the shared screen, or on a secondary screen that only individual players have access to
- some shared goal that they are trying to achieve. There's something about holding something in place while the other player moves _their_ part. Two people screwing in a lightbulb.
- What if the individual screens in front of each player was a touch screen? And you have to manipulate and hold something on the screen while communicating with the other player?
- Tangrams: you make shapes with your fingers, and combining that shape with the other player's shape unlocks the goal. 
- Increasingly difficult challenges. Starting with one finger, then making lines with two fingers, then shapes with three fingers.
- The line challenges could be like Ice Cold Beer
- Is Max/MSP + MIRA a possible solution for the touchscreen interaction?

Next:
- Can you run two MIRA instances from two different iPads?
- Can the shapes you draw show up in a jit.pwindow in the MIRA frame?
- Can MIRA be fullscreen enough for it to be a seamless interface?
- We still want to use at least one rotary dial. What could that be used for? What if there are two?

## MIRA Tests | 01.21.25

The first question we run up against is the hardware feasibility of some of this. Is MIRA a good solution for getting multi-touch user input? Can you get two different iPads to contribute to the same Max patch? If so they could each control separate aspects of the visuals/sounds (or we can deal with some averaging/combining so that they both are needed to reduce noise, clear out the delay feedback, etc.)

![Test MIRA patch to show multi-touch functionality](Media/miraTest.gif)

It works! We are able to get usr input on two separate iPads. Right now they are making shapes on separate lcd objects, so there will definitely be some finagling required to make them work seamlessly together, but it is definitely possible. There are some issues that crop up though...

- MIRA doesn't display the lcd (or any visual) object, so there is no way to update the visuals on the actual iPad. This is probably fine, and the players would just need to look at the shared screen to see what they are doing. This does raise the possibility for _different_ hidden information to be visible on the individual screens. This could be messages, shapes, colors, etc. Ideation later to think about this.
- In the current implementation there is no dynamic ability to change the number of finger inputs (it's always looking for 4) which isn't ideal.
- Note: Right now we are using the WiFi connection for MIRA/iPad, but it is also possible to be wired, which could come in handy?
- Though Mira has an option for "kiosk mode" there is no way to hide the tabs within the app. This will need to be taken into account when designing the device. We will need a smaller window to hide this physically.

![MIRA tabs cannot be hidden](Media/miraTabs.PNG)

Next:
- What could the hidden information on the screen be? It would have to use MIRA-compatible objects, but this is probably a good constraint to be working in.
- Make the touchpoint options variable so the players can create dots, lines, triangles, polygons, and pentagons
- Test out the feasibility of both MIRA instances painting on the same canvas. Or on overlapping canvasses?