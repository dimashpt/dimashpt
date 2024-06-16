{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
    pkgs.gnupg
    pkgs.pinentry
  ];
  idx.extensions = [
    "dbaeumer.vscode-eslint"
    "eamodio.gitlens"
    "esbenp.prettier-vscode"
    "antfu.browse-lite"
    "antfu.vite"
    "bradlc.vscode-tailwindcss"
    "BriteSnow.vscode-toggle-quotes"
    "Cardinal90.multi-cursor-case-preserve"
    "codeandstuff.package-json-upgrade"
    "formulahendry.auto-close-tag"
    "formulahendry.auto-rename-tag"
    "jock.svg"
    "mechatroner.rainbow-csv"
    "pranaygp.vscode-css-peek"
    "redhat.vscode-yaml"
    "usernamehw.errorlens"
    "vitest.explorer"
    "vivaxy.vscode-conventional-commits"
    "wmaurer.change-case"
    "YoavBls.pretty-ts-errors"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}