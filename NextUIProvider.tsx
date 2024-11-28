import * as React from "react";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import ModalDemo from "@/components/ModalDemo";

function App ()
{
    // 2. Wrap NextUIProvider at the root of your app
    return (
        <NextUIProvider>
            <App />
        </NextUIProvider>
    );
}