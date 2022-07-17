package com.logsfromnative;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.ArrayList;

public class NativeLoggerModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;
    private static ReactApplicationContext commonReactContext;

    public NativeLoggerModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
        commonReactContext = reactContext;
    }

    @Override
    public String getName() {
        return "NativeLogger";
    }

    static public void log(String message) {
        WritableMap params = Arguments.createMap();
        params.putString("message", message);

        commonReactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("newLogPrinted", params);
    }

    static private ArrayList<Log> logs = new ArrayList<>();
}
