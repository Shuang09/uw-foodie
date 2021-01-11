#!/usr/bin/env bash


# Main
function main {
    clear
    echo -e "Installing frontend react dependencies...\n"
    frontend "uw_foodie_front_end/uwfoodie_webapp"
    echo -e "Installing backend react dependencies...\n"
    backtend "uw_foodie_back_end/uwfoodie"
    echo -e "Finished installing project dependencies\n"
}

# frontend
function frontend {
    DIRECTORY="$1"
    CURRENT_DIRECTORY=`pwd`
    cd "$DIRECTORY"
    npm init
    npm i webpack --save
    npm i webpack-cli --save
    # loader
    npm i css-loader sass-loader style-loader file-loader --save
    npm i url-loader --save
    npm i babel-core babel-loader --save
    npm i --save babel-polyfill
    npm i --save babel-plugin-transform-runtime
    npm i html-webpack-plugin --save
    npm i redux react-redux --save
    npm i webpack-dev-server --save
    npm i webpack-dev-server --save
    npm i react-router-dom --save
    npm i react-router-redux@next history --save
    npm i redux-thunk --save
    npm i axios --save
}

# backend
function backend {
    DIRECTORY="$1"
    CURRENT_DIRECTORY=`pwd`
    cd "$DIRECTORY"
    rm Downloads/apache-maven*bin.tar.gz
    chown -R root:wheel Downloads/apache-maven*
    mv Downloads/apache-maven* /opt/apache-maven
    # Archive the Admin session:
    # Add Maven binaries to the path and append.
    nano $HOME/.profile
    export PATH=$PATH:/opt/apache-maven/bin
    mvn -version
}

main "$@"