{ pkgs ? import <nixpkgs> {}
}:
pkgs.mkShell {
    name="dev";
    buildInputs = [
        pkgs.nodejs-16_x
        pkgs.nodePackages.ts-node
    ];
    shellHook = ''
        echo "Installing dependencies using npm, please wait."
        npm i
        echo "Done! Have a lot of fun ;)"
    '';
}