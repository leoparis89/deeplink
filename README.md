Bug Description: [Url event](https://reactnative.dev/docs/linking#addeventlistener) never fires

XCode 13.4.1
MacOS 12.5.1
React Native 0.70

Steps to reproduce:

1- yarn
2- cd ios && pod install
3- yarn ios
4- run command `npx uri-scheme open "mychat://bar" --ios`.
App gets focused but url event never fires in `./useDeepLink.js` line 15.
