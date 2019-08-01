FROM java:8
VOLUME /tmp
ADD fancky-test.jar /valvulas.jar
RUN bash -c "touch /valvulas.jar"
EXPOSE 8090
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/valvulas.jar"]