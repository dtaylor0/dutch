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
        "menu-item":
            "m-1 p-1 list-none text-left b-2 border-solid b-rd-2 border-#aaa",
    },
});
