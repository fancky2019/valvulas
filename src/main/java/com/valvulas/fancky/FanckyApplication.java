package com.valvulas.fancky;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;


@SpringBootApplication
//@MapperScan("com.valvulas.fancky.dao")
public class FanckyApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(FanckyApplication.class, args);
    }

//        <!--改为war方式-->
//    @Override
//    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
//        return builder.sources(FanckyApplication.class);
//    }
}