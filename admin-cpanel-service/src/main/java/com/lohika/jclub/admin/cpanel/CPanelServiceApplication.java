package com.lohika.jclub.admin.cpanel;

import com.lohika.jclub.zipkin.client.EnableZipkinServerClient;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@EnableZuulProxy
@SpringBootApplication
@EnableDiscoveryClient
@EnableZipkinServerClient
public class CPanelServiceApplication {

  public static void main(String[] args) {
    SpringApplication.run(CPanelServiceApplication.class, args);
  }
}
