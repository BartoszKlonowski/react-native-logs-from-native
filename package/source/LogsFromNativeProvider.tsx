import { useEffect, VFC } from "react";

import {
  NativeModules,
  NativeEventEmitter,
  DeviceEventEmitter,
  Platform,
  NativeModule,
} from "react-native";

const nativeLogger: NativeModule = NativeModules.NativeLogger as NativeModule;

type Props = unknown;

const LogsFromNativeProvider: VFC<Props> = () => {
  useEffect(() => {
    return () => {
      subscription.remove();
    };
  });

  const notificationEventManager = Platform.select({
    android: DeviceEventEmitter,
    ios: new NativeEventEmitter(nativeLogger),
  });

  const subscription = notificationEventManager.addListener(
    "newLogPrinted",
    (payload: Record<string, unknown>) => {
      console.log(payload.message);
    }
  );

  return null;
};

export default LogsFromNativeProvider;
