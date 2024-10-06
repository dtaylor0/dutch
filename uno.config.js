import { defineConfig, presetUno } from "unocss";

export default defineConfig({
    content: {
        filesystem: ["./src/**/*.{html,js,jsx}"],
    },
    presets: [presetUno()],
    shortcuts: {
        "nav-item":
            "hover:rounded-inherit hover:bg-[#78e] hover:c-white inline-block w-7em",
        "nav-link": "block p-4 no-underline text-inherit font-bold",
        "menu-item": "mx-a my-1 p-1 list-none w-90% bg-#ccc b-rd-2",
    },
});
