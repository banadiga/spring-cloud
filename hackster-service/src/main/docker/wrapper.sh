#!/bin/bash

WAITING_FOR_DEPENDENCE=${WAITING_FOR_DEPENDENCE:='false'}

if [ "$WAITING_FOR_DEPENDENCE" != "true" ]; then
    echo "Starting hackster service immediately"
    java -jar ./hackster-service.jar
    exit 0
fi

DISCOVERY_SERVER_HOST=${DISCOVERY_SERVER_HOST:='discovery-server'}
DISCOVERY_SERVER_PORT=${DISCOVERY_SERVER_PORT:=8761}

echo "Trying to connect to discovery server on ${DISCOVERY_SERVER_HOST}:${DISCOVERY_SERVER_PORT}"
until $(curl --output /dev/null --silent --head --fail "http://${DISCOVERY_SERVER_HOST}:${DISCOVERY_SERVER_PORT}/info"); do
    echo -e ".\c"
    sleep 1
done
echo

CONFIG_SERVER_HOST=${CONFIG_SERVER_HOST:='config-server'}
CONFIG_SERVER_PORT=${CONFIG_SERVER_PORT:=8888}

echo "Trying to connect to on ${CONFIG_SERVER_HOST}:${CONFIG_SERVER_PORT}"
until $(curl --output /dev/null --silent --head --fail "http://${CONFIG_SERVER_HOST}:${CONFIG_SERVER_PORT}/info"); do
    echo -e ".\c"
    sleep 1
done
echo

echo "Starting hackster service"
echo "Setting eureka.client.serviceUrl.defaultZone to http://${DISCOVERY_SERVER_HOST}:${DISCOVERY_SERVER_PORT}/eureka"

env "eureka.client.serviceUrl.defaultZone=http://${DISCOVERY_SERVER_HOST}:${DISCOVERY_SERVER_PORT}/eureka" \
    java -jar ./hackster-service.jar
