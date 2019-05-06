FROM spring-cloud-base-image

ADD admin-cpanel-service.jar admin-cpanel-service.jar
ADD wrapper.sh wrapper.sh

RUN bash -c 'chmod +x ./wrapper.sh'
RUN bash -c 'touch ./admin-cpanel-service.jar'

ENTRYPOINT ["/bin/bash", "./wrapper.sh"]
