import { defineConfig } from "eslint/config";
import next from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: [...nextCoreWebVitals, ...next, ...compat.extends("prettier")],

    plugins: {
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },
    },

    rules: {
        "@next/next/no-img-element": 0,
        "react/no-unescaped-entities": 0,
        "react/display-name": 0,
        "import/no-anonymous-default-export": 0,
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
        "no-tabs": 0,
        "prettier/prettier": "error",
    },
}]);