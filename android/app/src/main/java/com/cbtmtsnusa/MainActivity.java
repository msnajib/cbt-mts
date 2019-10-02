package com.cbtmtsnusa;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import android.view.WindowManager;
import android.view.KeyEvent;
import android.app.ActivityManager;
import android.content.Context;
import android.util.Log;
import android.widget.Toast;
import android.content.Intent;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "CbtMtsNusa";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE);
  }

  @Override
  public void invokeDefaultOnBackPressed() {
    moveTaskToBack(true);
  }
}
