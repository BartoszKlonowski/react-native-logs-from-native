import { useEffect, VFC } from "react";

import {
  NativeModules,
  NativeEventEmitter,
  DeviceEventEmitter,
  Platform,
} from "react-native";

const { NativeLogger } = NativeModules;

type Props = unknown;

const LogsFromNativeProvider: VFC<Props> = () => {
  useEffect(() => {
    return () => {
      subscription.remove();
    }
  }, []);

  const notificationEventManager = Platform.select({
    android: DeviceEventEmitter,
    ios: new NativeEventEmitter(NativeLogger),
  });

  const subscription = notificationEventManager.addListener(
    "newLogPrinted",
    (payload) => {
      console.log(payload.message);
    }
  );

  return null;
};

export default LogsFromNativeProvider;
