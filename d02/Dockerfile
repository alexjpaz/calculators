FROM node:6.9.0


WORKDIR /build

RUN apt-get update &&\
    apt-get install -y libgtk2.0-0 libgconf-2-4 \
    libasound2 libxtst6 libxss1 libnss3 xvfb

ADD package.json ./

RUN npm i

ADD . ./

ADD entrypoint.sh /entrypoint

ENTRYPOINT /entrypoint


