package com.github.cyberity.car;

import android.app.Application;
import io.socket.client.IO;
import io.socket.client.Socket;

import java.net.URISyntaxException;

public class CarApplication extends Application {
    private static final String CAR_SERVER_URL = "http://192.168.1.103:3000/";
    private Socket mSocket;
    {
        try {
            mSocket = IO.socket(CAR_SERVER_URL);
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        }
    }

    public Socket getSocket() {
        return mSocket;
    }
}
