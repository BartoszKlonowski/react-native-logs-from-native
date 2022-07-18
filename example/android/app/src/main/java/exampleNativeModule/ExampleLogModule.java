package exampleNativeModule;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.logsfromnative.NativeLoggerModule;

public class ExampleLogModule extends ReactContextBaseJavaModule {
    String notificationChannelId = "MyChannel";

    public ExampleLogModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "ExampleLog";
    }

    @ReactMethod
    public void sendLogFromNative(String content) {
        NativeLoggerModule.log(content);
    }
}
