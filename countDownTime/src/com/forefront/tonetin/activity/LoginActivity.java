package com.forefront.tonetin.activity;

import android.app.Activity;
import android.os.Bundle;

import com.forefront.tonetin.R;
import com.forefront.tonetin.view.X5WebView;


public class LoginActivity extends Activity  {


    private X5WebView idw_login;
      private String url="http://wx.tttrip.top/Home/Login/login.html";
    private String u="http://wx.tttrip.top/Shop/test/index";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.login);

       initView();
        //choosePicture();
    }





    private void initView() {
      //  SharedPreferencesHelper.init(this, "webapp");
        idw_login = (X5WebView) findViewById(R.id.idw_login);
        idw_login.loadUrl("file:///android_asset/www/index.html");


    }


}